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

(async () => {
  const heaviest = await getHeaviestPokemon();
  console.log("Heaviest Pokémon:", heaviest.name);
})();