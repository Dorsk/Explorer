


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
	
-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    username character varying(255) COLLATE pg_catalog."default",
    password character varying(255) COLLATE pg_catalog."default"
)

-- Table: public.location

-- DROP TABLE IF EXISTS public.location;

CREATE TABLE IF NOT EXISTS public.location
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    name character varying(255) COLLATE pg_catalog."default",
    description_en character varying(512) COLLATE pg_catalog."default",
	description_fr character varying(512) COLLATE pg_catalog."default",
	description_es character varying(512) COLLATE pg_catalog."default",
    lat double precision,
    lng double precision,
    image bytea,
    CONSTRAINT location_pkey PRIMARY KEY (id)
)

INSERT INTO location (name, description_en, description_fr, description_es, lat, lng) VALUES
('Eiffel Tower', 'World-famous iron lattice tower', 'Tour en fer mondialement célèbre', 'Torre de hierro mundialmente famosa', 48.858844, 2.294351),
('Louvre Museum', 'World s largest art museum', 'Plus grand musée d\'art du monde', 'El museo de arte más grande del mundo', 48.860611, 2.337644),
('Notre-Dame Cathedral', 'Historic Catholic cathedral', 'Cathédrale catholique historique', 'Catedral católica histórica', 48.852968, 2.349902),
('Palace of Versailles', 'Former royal residence', 'Ancienne résidence royale', 'Antigua residencia real', 48.804865, 2.120355),
('Mont Saint-Michel', 'Island commune with an abbey', 'Commune insulaire avec une abbaye', 'Comuna isleña con una abadía', 48.636063, -1.511076),
('Château de Chambord', 'Largest château', 'Le plus grand château', 'El castillo más grande', 47.616220, 1.517842),
('Pont du Gard', 'Ancient Roman aqueduct bridge', 'Ancien pont-aqueduc romain', 'Antiguo puente acueducto romano', 43.947537, 4.535014),
('Carcassonne', 'Medieval fortified city', 'Cité médiévale fortifiée', 'Ciudad fortificada medieval', 43.211092, 2.353663),
('Henri IV', 'King of France born', 'Roi de France né', 'Rey de Francia nacido', 43.2951, -0.370797),
('Napoleon Bonaparte', 'French military leader born', 'Chef militaire français né', 'Líder militar francés nacido', 41.919229, 8.738635),
('Joan of Arc', 'Famous French heroine associated with Domrémy-la-Pucelle', 'Fameuse héroïne française associée à Domrémy-la-Pucelle', 'Famosa heroína francesa asociada con Domrémy-la-Pucelle', 48.434595, 5.860762),
('Catherine de Medici', 'Queen', 'Reine', 'Reina', 47.324215, 1.070422),
('Louis XIV', 'Known as the Sun King ', 'Connu comme le Roi Soleil', 'Conocido como el Rey Sol', 48.804865, 2.120355),
('Victor Hugo', 'Famous writer', 'Écrivain célèbre', 'Escritor famoso', 47.238316, 6.024053),
('Gustave Eiffel', 'Engineer known for the Eiffel Tower', 'Ingénieur connu pour la Tour Eiffel', 'Ingeniero conocido por la Torre Eiffel', 47.322047, 5.04148),
('Marie Curie', 'Physicist and chemist who conducted pioneering research on radioactivity', 'Physicienne et chimiste qui a mené des recherches pionnières sur la radioactivité', 'Física y química que realizó investigaciones pioneras sobre la radiactividad', 48.841418, 2.254627),
('Claude Monet', 'Famous painter associated with Giverny', 'Peintre célèbre associé à Giverny', 'Famoso pintor asociado con Giverny', 49.075225, 1.533802),
('René Descartes', 'Famous philosopher', 'Philosophe célèbre', 'Filósofo famoso', 46.982857, 0.558260),
('Château de Chillon', 'Historic castle', 'Château historique', 'Castillo histórico', 46.414167, 6.927222),
('Saint-Malo', 'Historic walled city', 'Cité fortifiée historique', 'Ciudad amurallada histórica', 48.649337, -2.025674),
('D-Day Beaches', 'Historic World War II landing sites', 'Sites de débarquement historiques de la Seconde Guerre mondiale', 'Sitios de desembarco históricos de la Segunda Guerra Mundial', 49.414442, -0.915718),
('Les Invalides', 'Complex of buildings containing museums and monuments, including Napoleon s tomb', 'Complexe de bâtiments contenant des musées et des monuments, dont le tombeau de Napoléon', 'Complejo de edificios que contiene museos y monumentos, incluida la tumba de Napoleón', 48.855338, 2.312619),
('Cannes', 'Famous for its international film festival', 'Célèbre pour son festival international du film', 'Famoso por su festival internacional de cine', 43.552847, 7.017369),
('Château de Fontainebleau', 'One of the largest royal châteaux', 'L\'un des plus grands châteaux royaux', 'Uno de los castillos reales más grandes', 48.402192, 2.700287),
('Avignon', 'Known for the Palais des Papes and the medieval bridge', 'Connu pour le Palais des Papes et le pont médiéval', 'Conocido por el Palacio de los Papas y el puente medieval', 43.949317, 4.805528),
('Statue of Liberty', 'Iconic symbol of freedom', 'Symbole emblématique de la liberté', 'Símbolo icónico de la libertad', 40.689247, -74.044502),
('Great Wall of China', 'Ancient series of walls and fortifications', 'Ancienne série de murs et de fortifications', 'Antigua serie de muros y fortificaciones', 40.431908, 116.570374),
('Christ the Redeemer', 'Giant statue of Jesus Christ', 'Géante statue de Jésus-Christ', 'Estatua gigante de Jesucristo', -22.951916, -43.210487),
('Machu Picchu', 'Historic city', 'Ville historique', 'Ciudad histórica', -13.163141, -72.544963),
('Taj Mahal', 'Mausoleum built by Mughal Emperor Shah Jahan', 'Mausolée construit par l\'empereur moghol Shah Jahan', 'Mausoleo construido por el emperador mogol Shah Jahan', 27.175015, 78.042155),
('Sydney Opera House', 'Famous performing arts center', 'Célèbre centre des arts du spectacle', 'Famoso centro de artes escénicas', -33.856784, 151.215297),
('Colosseum', 'Ancient Roman gladiatorial arena', 'Ancienne arène romaine de gladiateurs', 'Antiguo coliseo de gladiadores romanos', 41.890251, 12.492373),
('Pyramids of Giza', 'Ancient pyramids and Sphinx', 'Anciennes pyramides et Sphinx', 'Antiguas pirámides y Esfinge', 29.979235, 31.134202),
('Mount Everest', 'Highest mountain peak in the world', 'Le plus haut sommet du monde', 'El pico de montaña más alto del mundo', 27.988121, 86.925026),
('Big Ben', 'Iconic clock tower', 'Tour de l\'horloge emblématique', 'Icónica torre del reloj', 51.500729, -0.124625),
('Golden Gate Bridge', 'Famous suspension bridge', 'Pont suspendu célèbre', 'Famoso puente colgante', 37.819929, -122.478255),
('Acropolis of Athens', 'Ancient citadel containing the Parthenon', 'Ancienne citadelle contenant le Parthénon', 'Antigua ciudadela que contiene el Partenón', 37.971532, 23.725749),
('Burj Khalifa', 'Tallest building in the world', 'Le plus haut bâtiment du monde', 'El edificio más alto del mundo', 25.197197, 55.274376),
('Hollywood Sign', 'Iconic landmark', 'Point de repère emblématique', 'Monumento icónico', 34.134115, -118.321548),
('Niagara Falls', 'Famous waterfalls on the border', 'Chutes d\'eau célèbres à la frontière', 'Cataratas famosas en la frontera', 43.096214, -79.037739),
('Santorini', 'Picturesque island', 'Île pittoresque', 'Isla pintoresca', 36.393156, 25.461509),
('Times Square', 'Bustling commercial intersection', 'Intersection commerciale animée', 'Intersección comercial bulliciosa', 40.758896, -73.985130),
('Sagrada Familia', 'Unfinished basilica designed by Antoni Gaudí', 'Basilique inachevée conçue par Antoni Gaudí', 'Basílica inacabada diseñada por Antoni Gaudí', 41.403629, 2.174356);