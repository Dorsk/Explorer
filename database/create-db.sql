


-- Database: foodfighter

-- DROP DATABASE IF EXISTS foodfighter;

CREATE DATABASE projectexplorer
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'French_France.1252'
    LC_CTYPE = 'French_France.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	

-- Table: public.location

-- DROP TABLE IF EXISTS public.location;

CREATE TABLE IF NOT EXISTS public.location
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    name character varying(255) COLLATE pg_catalog."default",
    description character varying(512) COLLATE pg_catalog."default",
    lat double precision,
    lng double precision,
    image bytea,
    CONSTRAINT location_pkey PRIMARY KEY (id)
)


INSERT INTO location (name, description, lat, lng) VALUES
('Eiffel Tower', 'World-famous iron lattice tower', 48.858844, 2.294351),
('Louvre Museum', 'World s largest art museum', 48.860611, 2.337644),
('Notre-Dame Cathedral', 'Historic Catholic cathedral', 48.852968, 2.349902),
('Palace of Versailles', 'Former royal residence', 48.804865, 2.120355),
('Mont Saint-Michel', 'Island commune with an abbey', 48.636063, -1.511076),
('Château de Chambord', 'Largest château', 47.616220, 1.517842),
('Pont du Gard', 'Ancient Roman aqueduct bridge', 43.947537, 4.535014),
('Carcassonne', 'Medieval fortified city', 43.211092, 2.353663),
('Henri IV', 'King of France born', 43.2951, -0.370797),
('Napoleon Bonaparte', 'French military leader born', 41.919229, 8.738635),
('Joan of Arc', 'Famous French heroine associated with Domrémy-la-Pucelle', 48.434595, 5.860762),
('Catherine de Medici', 'Queen', 47.324215, 1.070422),
('Louis XIV', 'Known as the Sun King ', 48.804865, 2.120355),
('Victor Hugo', 'Famous writer', 47.238316, 6.024053),
('Gustave Eiffel', 'Engineer known for the Eiffel Tower', 47.322047, 5.04148),
('Marie Curie', 'Physicist and chemist who conducted pioneering research on radioactivity', 48.841418, 2.254627),
('Claude Monet', 'Famous painter associated with Giverny', 49.075225, 1.533802),
('René Descartes', 'Famous philosopher', 46.982857, 0.558260),
('Château de Chillon', 'Historic castle', 46.414167, 6.927222),
('Saint-Malo', 'Historic walled city', 48.649337, -2.025674),
('D-Day Beaches', 'Historic World War II landing sites', 49.414442, -0.915718),
('Les Invalides', 'Complex of buildings containing museums and monuments, including Napoleon s tomb', 48.855338, 2.312619),
('Cannes', 'Famous for its international film festival', 43.552847, 7.017369),
('Château de Fontainebleau', 'One of the largest royal châteaux', 48.402192, 2.700287),
('Avignon', 'Known for the Palais des Papes and the medieval bridge', 43.949317, 4.805528),
('Statue of Liberty', 'Iconic symbol of freedom', 40.689247, -74.044502),
('Great Wall of China', 'Ancient series of walls and fortifications', 40.431908, 116.570374),
('Christ the Redeemer', 'Giant statue of Jesus Christ', -22.951916, -43.210487),
('Machu Picchu', 'Historic city', -13.163141, -72.544963),
('Taj Mahal', 'Mausoleum built by Mughal Emperor Shah Jahan', 27.175015, 78.042155),
('Sydney Opera House', 'Famous performing arts center', -33.856784, 151.215297),
('Colosseum', 'Ancient Roman gladiatorial arena', 41.890251, 12.492373),
('Pyramids of Giza', 'Ancient pyramids and Sphinx', 29.979235, 31.134202),
('Mount Everest', 'Highest mountain peak in the world', 27.988121, 86.925026),
('Big Ben', 'Iconic clock tower', 51.500729, -0.124625),
('Golden Gate Bridge', 'Famous suspension bridge', 37.819929, -122.478255),
('Acropolis of Athens', 'Ancient citadel containing the Parthenon', 37.971532, 23.725749),
('Burj Khalifa', 'Tallest building in the world', 25.197197, 55.274376),
('Hollywood Sign', 'Iconic landmark', 34.134115, -118.321548),
('Niagara Falls', 'Famous waterfalls on the border', 43.096214, -79.037739),
('Santorini', 'Picturesque island', 36.393156, 25.461509),
('Times Square', 'Bustling commercial intersection', 40.758896, -73.985130),
('Sagrada Familia', 'Unfinished basilica designed by Antoni Gaudí', 41.403629, 2.174356);