--
-- Database: focalizado_db
--

CREATE DATABASE focalizado_db;

-- ENTITIES

--
-- Schema entity departamento
--

CREATE TABLE IF NOT EXISTS "departamento" (
	Departamento varchar(130)  NOT NULL,
	Descripcion varchar(130) ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity municipio
--

CREATE TABLE IF NOT EXISTS "municipio" (
	Departamento numeric  NOT NULL,
	Descripcion varchar(130) ,
	Municipio varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	mail varchar(130) ,
	name varchar(130) ,
	password varchar(130)  NOT NULL,
	roles varchar(130) ,
	surname varchar(130) ,
	username varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);


-- Security

ALTER TABLE "user" ALTER COLUMN "password" TYPE varchar(128);

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	role varchar(30) ,
	
	-- RELAZIONI

	_user INTEGER  NOT NULL REFERENCES "user"(_id),
	_id SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);




-- relation m:m Departamento Municipio - Departamento
CREATE TABLE IF NOT EXISTS "Municipio_Departamento" (
    _id SERIAL PRIMARY KEY,
    id_Municipio INTEGER  NOT NULL REFERENCES "municipio"(_id),
    id_Departamento INTEGER  NOT NULL REFERENCES "departamento"(_id)
);
