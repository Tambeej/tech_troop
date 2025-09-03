USE sql_intro;

-- CREATE TABLE pokemon_type (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(50) UNIQUE
-- );

-- CREATE TABLE town (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(50) UNIQUE
-- );

-- CREATE TABLE trainer (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(50) UNIQUE,
--     town_id INT,
--     FOREIGN KEY (town_id) REFERENCES town(id)
-- );

-- CREATE TABLE pokemon (
--     id INT NOT NULL PRIMARY KEY,
--     name VARCHAR(50) NOT NULL,
--     type_id INT,
--     height FLOAT,
--     weight FLOAT,
--     FOREIGN KEY (type_id) REFERENCES pokemon_type(id)
-- );
-- CREATE TABLE pokemon_trainer (
--     pokemon_id INT NOT NULL,
--     trainer_id INT NOT NULL,
--     PRIMARY KEY (pokemon_id, trainer_id),
--     FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
--     FOREIGN KEY (trainer_id) REFERENCES trainer(id)
-- );
