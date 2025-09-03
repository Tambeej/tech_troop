const fs = require("fs");
const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:@localhost/sql_intro");

const data = JSON.parse(fs.readFileSync("./pokemon.json", "utf-8"));

///ex2
async function getHeaviestPokemon() {
  let [rows] = await sequelize.query(`
    SELECT name, weight
    FROM pokemon
    WHERE weight = (SELECT MAX(weight) FROM pokemon)
  `);

  return rows[0];
}

//ex3
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
  let [rows] = await sequelize.query(`SELECT id FROM town WHERE name = ?`, {
    replacements: [townName],
  });
  if (rows.length) return rows[0].id;

  let [result] = await sequelize.query(`INSERT INTO town (name) VALUES (?)`, {
    replacements: [townName],
  });
  return result;
}

async function findByType(typeName) {
  let [rows] = await sequelize.query(`
    SELECT p.name
    FROM pokemon p
    JOIN pokemon_type t ON p.type_id = t.id
    WHERE t.name = '${typeName}'
  `);

  return rows.map(row => row.name);
}


(async () => {
  const heaviest = await getHeaviestPokemon();
  console.log("Heaviest Pokémon:", heaviest.name);
  const grassPokemon = await findByType("grass");
  console.log("Grass type Pokémon:", grassPokemon);
})();
