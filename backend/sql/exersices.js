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
async function findByType(typeName) {
  let [rows] = await sequelize.query(`
    SELECT p.name
    FROM pokemon p
    JOIN pokemon_type t ON p.type_id = t.id
    WHERE t.name = '${typeName}'
  `);

  return rows.map((row) => row.name);
}

//ex4
async function findOwner(pokemonName) {
  const [rows] = await sequelize.query(`
    SELECT t.name
    FROM pokemon_trainer pt
    JOIN pokemon p ON p.id = pt.pokemon_id
    JOIN trainer t ON pt.trainer_id = t.id
    WHERE p.name = '${pokemonName}'
  `);

  return rows.map(r => r.name);
}

//ex5
async function findRoster(trainerName) {
  const [rows] = await sequelize.query(`
    SELECT p.name
    FROM pokemon p
    JOIN pokemon_trainer pt ON p.id = pt.pokemon_id
    JOIN trainer t ON pt.trainer_id = t.id
    WHERE t.name = '${trainerName}'
  `);

  return rows.map((r) => r.name);
}

(async () => {
  const heaviest = await getHeaviestPokemon();
  console.log("Heaviest Pokémon:", heaviest.name);
  const grassPokemon = await findByType("grass");
  console.log("Grass type Pokémon:", grassPokemon);
  const logOwner = await findOwner("gengar");
  console.log(logOwner);
  const logaRoster = await findRoster("Loga");
  console.log(logaRoster);
})();
