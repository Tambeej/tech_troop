const fs = require("fs");
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/sql_intro");

const data = JSON.parse(fs.readFileSync("./pokemon.json", "utf-8"));

async function insertType(typeName) {
  let [rows] = await sequelize.query(
    `SELECT id FROM pokemon_type WHERE name = ?`,
    { replacements: [typeName] }
  );
  if (rows.length) return rows[0].id;

  let [result] = await sequelize.query(
    `INSERT INTO pokemon_type (name) VALUES (?)`,
    { replacements: [typeName] }
  );
  return result; // insertId
}

async function insertTown(townName) {
  let [rows] = await sequelize.query(
    `SELECT id FROM town WHERE name = ?`,
    { replacements: [townName] }
  );
  if (rows.length) return rows[0].id;

  let [result] = await sequelize.query(
    `INSERT INTO town (name) VALUES (?)`,
    { replacements: [townName] }
  );
  return result;
}

async function insertTrainer(trainerName, townId) {
  let [rows] = await sequelize.query(
    `SELECT id FROM trainer WHERE name = ?`,
    { replacements: [trainerName] }
  );
  if (rows.length) return rows[0].id;

  let [result] = await sequelize.query(
    `INSERT INTO trainer (name, town_id) VALUES (?, ?)`,
    { replacements: [trainerName, townId] }
  );
  return result;
}

async function insertData() {
  for (const p of data) {
    const typeId = await insertType(p.type);

    await sequelize.query(
      `INSERT INTO pokemon (id, name, type_id, height, weight)
       VALUES (?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE name=VALUES(name), type_id=VALUES(type_id),
                               height=VALUES(height), weight=VALUES(weight)`,
      { replacements: [p.id, p.name, typeId, p.height, p.weight] }
    );

    for (const owner of p.ownedBy) {
      const townId = await insertTown(owner.town);
      const trainerId = await insertTrainer(owner.name, townId);

      await sequelize.query(
        `INSERT IGNORE INTO pokemon_trainer (pokemon_id, trainer_id)
         VALUES (?, ?)`,
        { replacements: [p.id, trainerId] }
      );
    }
  }
}


(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected!");

    await insertData();
    console.log("Data inserted successfully!");
  } catch (err) {
    console.error(err);
  } finally {
    await sequelize.close();
  }
})();
