USE sql_intro; -- lets VS code know which DB to use

-- CREATE TABLE Deity(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(50),
--     mythology VARCHAR(20),
--     main_power VARCHAR(50),
--     coolness INT,
--     creation_date INT
-- )
-- INSERT INTO Deity 
-- VALUES(null, "Zeus", "Greek", "Thunder", 11, "-1400")

-- INSERT INTO Deity VALUES (null, "Hera", "Greek", "Marriage", 9, "-1400");
-- INSERT INTO Deity VALUES (null, "Poseidon", "Greek", "Sea", 10, "-1400");
-- INSERT INTO Deity VALUES (null, "Athena", "Greek", "Wisdom", 9, "-1200");
-- INSERT INTO Deity VALUES (null, "Apollo", "Greek", "Sun", 8, "-1200");
-- INSERT INTO Deity VALUES (null, "Artemis", "Greek", "Hunt", 8, "-1200");
-- INSERT INTO Deity VALUES (null, "Aphrodite", "Greek", "Love", 7, "-1200");
-- INSERT INTO Deity VALUES (null, "Hades", "Greek", "Underworld", 9, "-1400");

-- INSERT INTO Deity VALUES (null, "Odin", "Norse", "Wisdom", 10, "-800");
-- INSERT INTO Deity VALUES (null, "Thor", "Norse", "Thunder", 9, "-800");
-- INSERT INTO Deity VALUES (null, "Loki", "Norse", "Trickery", 8, "-800");
-- INSERT INTO Deity VALUES (null, "Freya", "Norse", "Fertility", 7, "-800");

-- INSERT INTO Deity VALUES (null, "Ra", "Egyptian", "Sun", 10, "-2500");
-- INSERT INTO Deity VALUES (null, "Isis", "Egyptian", "Magic", 9, "-2000");
-- INSERT INTO Deity VALUES (null, "Osiris", "Egyptian", "Afterlife", 9, "-2000");
-- INSERT INTO Deity VALUES (null, "Anubis", "Egyptian", "Death", 8, "-2500");

-- INSERT INTO Deity VALUES (null, "Vishnu", "Hindu", "Preservation", 11, "-1500");
-- INSERT INTO Deity VALUES (null, "Shiva", "Hindu", "Destruction", 11, "-1500");
-- INSERT INTO Deity VALUES (null, "Lakshmi", "Hindu", "Wealth", 9, "-1500");
-- INSERT INTO Deity VALUES (null, "Parvati", "Hindu", "Love", 8, "-1500");
-- INSERT INTO Deity VALUES (null, "Kali", "Hindu", "Time", 10, "-1200");
-- Drop in reverse order if already there
-- Drop in correct order to avoid FK issues


-- -- Create student table
-- CREATE TABLE student (
--     s_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--     s_name VARCHAR(100) NOT NULL,
--     is_brilliant BOOLEAN DEFAULT FALSE
-- );

-- -- Create teacher table
-- CREATE TABLE teacher (
--     t_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--     t_name VARCHAR(100) NOT NULL,
--     is_tenured BOOLEAN DEFAULT FALSE
-- );

-- -- Create join table
-- CREATE TABLE student_teacher (
--     student_id INT UNSIGNED NOT NULL,
--     teacher_id INT UNSIGNED NOT NULL,
--     PRIMARY KEY (student_id, teacher_id),
--     CONSTRAINT fk_student FOREIGN KEY (student_id) REFERENCES student(s_id) ON DELETE CASCADE,
--     CONSTRAINT fk_teacher FOREIGN KEY (teacher_id) REFERENCES teacher(t_id) ON DELETE CASCADE
-- );
