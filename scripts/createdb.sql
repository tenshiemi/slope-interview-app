CREATE TABLE Collection
(
  id INTEGER PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(255)
);

INSERT INTO Collection('name', 'description')
VALUES
('My First Collection', 'A very interesting collection'),
('My Second Collection', 'A boring collection');

CREATE TABLE Project
(
  id INTEGER PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(255),
  collectionId INTEGER,
  FOREIGN KEY(collectionId) REFERENCES collection(id)
);

INSERT INTO Project('name', 'description', 'collectionId')
VALUES
('My First Project', 'A very interesting project', '1'),
('My Second Project', 'A boring project', '1'),
('Another Project', 'A very interesting project', '1'),
('Hello Project', 'A boring project', '2');

CREATE TABLE Task
(
  id INTEGER PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(255),
  dueDate INTEGER,
  projectId INTEGER,
  type VARCHAR(10),
  FOREIGN KEY(projectId) REFERENCES project(id)
);

INSERT INTO Task('name', 'description', 'projectId', 'type')
VALUES
('Create a mobile background', 'A very interesting project', '1', 'content'),
('Purchase props', 'A boring project', '3', 'content'),
('Buy cake', 'A very interesting project', '1', 'todo'),
('Shoot photos for ad', 'A boring project', '2', 'content');
