CREATE DATABASE Musicboxd;

CREATE TABLE user (
    identifiant VARCHAR(20) NOT NULL UNIQUE,
    pseudo VARCHAR(30) NOT NULL,
    bio VARCHAR(150),
    pronoms VARCHAR(255),
    Localisation VARCHAR(255),
    mail VARCHAR(255) NOT NULL UNIQUE,
    photo IMAGE NOT NULL,
    PRIMARY KEY(identifiant)
);

CREATE TABLE abonne (
    id_user VARCHAR(20),
    id_artist VARCHAR(255),
    nom_artiste VARCHAR(255),
    photo_artiste VARCHAR(255),
    FOREIGN KEY(id_user) REFERENCES user(identifiant)
);

CREATE TABLE list (
    id_user VARCHAR(20),
    id_album VARCHAR(255),
    nom_album VARCHAR(255),
    photo VARCHAR(255), -- lien photo album
    FOREIGN KEY(id_user) REFERENCES user(identifiant)
);

CREATE TABLE activite (
    id_user VARCHAR(20),
    activite_date DATETIME,
    contenu VARCHAR(255),
    FOREIGN KEY(id_user) REFERENCES user(identifiant)
);

CREATE TABLE review (
    id_user VARCHAR(20),
    id_album VARCHAR(255),
    nom_album VARCHAR(255),
    photo VARCHAR(255), -- lien photo album
    review_date datetime,
    note Number,
    
    FOREIGN KEY(id_user) REFERENCES user(identifiant)
);