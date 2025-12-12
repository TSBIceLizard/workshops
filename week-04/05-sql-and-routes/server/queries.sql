CREATE TABLE staff (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255),
  address VARCHAR(255),
  age INT,
  bio TEXT
);

-- our table needs to know what data types we store --> Known as a constraint!

INSERT INTO staff (name, address, age, bio) VALUES
('Derek Anderson', 'Edinburgh', 32, 'I am a professional Derek with copious thresholds of pomposity.'),
('Manny', 'Norwich', 29, 'Software Development instructor with lots of enthusiasm'),
('Bertie', 'Leicester', 100, 'Teaching assistant with lots of charisma'),
('Tim', 'Norwich', 1003, 'Course director');

-- Reading data from our table!
SELECT name, address, age, bio FROM staff;
SELECT name, bio FROM staff;
SELECT name, address, age, bio FROM staff WHERE address = 'Norwich';