


-- Database: foodfighter

-- DROP DATABASE IF EXISTS foodfighter;

CREATE DATABASE foodfighter
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'French_France.1252'
    LC_CTYPE = 'French_France.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
-- Table: public.food

-- DROP TABLE IF EXISTS public.food;

CREATE TABLE IF NOT EXISTS public.food
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    name text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    lat text COLLATE pg_catalog."default",
    lon text COLLATE pg_catalog."default",
    CONSTRAINT food_pkey PRIMARY KEY (id)
)
	
