-- Lien drawSQL : https://drawsql.app/teams/-3574/diagrams/adaence

-- Lignes de commande SQL :

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email_adress TEXT NOT NULL,
    city TEXT NOT NULL,
    zipcode INTEGER NOT NULL,
    availability TEXT NOT NULL,
    motivation TEXT NOT NULL,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE TABLE moments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type_of_moment TEXT NOT NULL
);

CREATE TABLE profiles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT NOT NULL,
    age INTEGER NOT NULL,
    job TEXT NOT NULL,
    city TEXT NOT NULL,
    zipcode INTEGER NOT NULL,
    description TEXT NOT NULL,
    imageURL TEXT NOT NULL,
    moment_id TEXT NOT NULL,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    FOREIGN KEY (moment_id) REFERENCES moments(id)
);

CREATE TABLE reserved_moments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    profile_id INTEGER NOT NULL,
    moment_id TEXT NOT NULL,
    date_of_moment TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (profile_id) REFERENCES profiles(id),
    FOREIGN KEY (moment_id) REFERENCES moments(id)
);

INSERT INTO users (firstname, lastname, email_adress, city, zipcode, availability, motivation, created_at, updated_at) VALUES
    ('Ada', 'Lovelace', 'ada@lovelace.com', 'Paris', 75010, 'Le matin', 'Je suis très motivée.', '2025/04/28 11:29', '2025/04/28 11:29');

INSERT INTO moments (type_of_moment) VALUES
    ('Tous les moments'),
    ('Un repas'),
    ('Un café/thé'),
    ('Une promenade'),
    ('Une sortie culturelle'),
    ('Autre activité');

INSERT INTO profiles (firstname, age, job, city, zipcode, description, imageURL, moment_id, created_at, updated_at) VALUES
    ('Franco', 95, 'Ouvrier d''usine', 'Saint-Étienne', 42000, 'Franco adore raconter ses souvenirs de l’usine et partager un bon café avec les jeunes du quartier.', '/images/danie-franco-ClHY-KyvI1M-unsplash.jpg', 3, '2025/02/13 15:49', '2025/02/13 15:49'),
    ('Soares', 84, 'Puéricultrice', 'Angers', 49000, 'Soares a consacré sa vie aux tout-petits et aime aujourd’hui transmettre tendresse et conseils de vie.', '/images/vladimir-soares-z_8Jqe0Cc-s-unsplash.jpg', 2, '2025/04/17 07:12', '2025/04/17 07:12');

