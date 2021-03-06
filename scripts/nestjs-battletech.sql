-- SQL Manager Lite for PostgreSQL 6.0.0.53231
-- ---------------------------------------
-- Host      : localhost
-- Database  : nestjs-battletech
-- Version   : PostgreSQL 9.6.5 on x86_64-pc-linux-musl, compiled by gcc (Alpine 6.2.1) 6.2.1 20160822, 64-bit



SET check_function_bodies = false;
--
-- Structure for table migrations (OID = 16387) :
--
SET search_path = public, pg_catalog;
CREATE TABLE public.migrations (
    id serial NOT NULL,
    "timestamp" bigint NOT NULL,
    name varchar NOT NULL
)
WITH (oids = false);
--
-- Structure for table mech_type (OID = 16398) :
--
CREATE TABLE public.mech_type (
    id serial NOT NULL,
    name varchar(200) NOT NULL
)
WITH (oids = false);
--
-- Definition for type mech_weapon_hardpoint_bodypart_enum (OID = 16405) :
--
CREATE TYPE public.mech_weapon_hardpoint_bodypart_enum AS ENUM (
  'head', 'left arm', 'left torso', 'right arm', 'right torso', 'center torso',
  'left leg', 'right leg'
);
--
-- Definition for type mech_weapon_hardpoint_type_enum (OID = 16422) :
--
CREATE TYPE public.mech_weapon_hardpoint_type_enum AS ENUM (
  'energy', 'support', 'mssile', 'ballistic'
);
--
-- Structure for table mech_weapon_hardpoint (OID = 16433) :
--
CREATE TABLE public.mech_weapon_hardpoint (
    id serial NOT NULL,
    bodypart mech_weapon_hardpoint_bodypart_enum DEFAULT 'center torso'::mech_weapon_hardpoint_bodypart_enum NOT NULL,
    type mech_weapon_hardpoint_type_enum DEFAULT 'support'::mech_weapon_hardpoint_type_enum NOT NULL,
    "mechId" integer
)
WITH (oids = false);
--
-- Definition for type mech_class_enum (OID = 16442) :
--
CREATE TYPE public.mech_class_enum AS ENUM (
  'light', 'medium', 'heavy', 'assault'
);
--
-- Structure for table mech (OID = 16453) :
--
CREATE TABLE public.mech (
    id serial NOT NULL,
    subtype varchar(50) NOT NULL,
    class mech_class_enum DEFAULT 'light'::mech_class_enum NOT NULL,
    "stockRole" varchar(100) NOT NULL,
    "tonnageTotal" integer NOT NULL,
    "tonnageFree" integer NOT NULL,
    "damageMelee" integer NOT NULL,
    "damageDFA" integer NOT NULL,
    "walkDistance" integer NOT NULL,
    "jumpJets" integer NOT NULL,
    cost integer NOT NULL,
    rarity integer NOT NULL,
    "typeId" integer
)
WITH (oids = false);
--
-- Data for table public.migrations (OID = 16387) (LIMIT 0,1)
--
INSERT INTO migrations (id, "timestamp", name)
VALUES (1, 1574419296985, 'SeedData1574419296985');

--
-- Data for table public.mech_type (OID = 16398) (LIMIT 0,2)
--
INSERT INTO mech_type (id, name)
VALUES (1, 'Commando');

INSERT INTO mech_type (id, name)
VALUES (2, 'Locust');

--
-- Data for table public.mech_weapon_hardpoint (OID = 16433) (LIMIT 0,2)
--
INSERT INTO mech_weapon_hardpoint (id, bodypart, type, "mechId")
VALUES (1, 'left arm', 'energy', 1);

INSERT INTO mech_weapon_hardpoint (id, bodypart, type, "mechId")
VALUES (2, 'right arm', 'ballistic', 1);

--
-- Data for table public.mech (OID = 16453) (LIMIT 0,4)
--
INSERT INTO mech (id, subtype, class, "stockRole", "tonnageTotal", "tonnageFree", "damageMelee", "damageDFA", "walkDistance", "jumpJets", cost, rarity, "typeId")
VALUES (1, 'COM-1B', 'light', 'Light Sniper & Scout', 25, 7, 7, 50, 210, 8, 2000000, 0, 1);

INSERT INTO mech (id, subtype, class, "stockRole", "tonnageTotal", "tonnageFree", "damageMelee", "damageDFA", "walkDistance", "jumpJets", cost, rarity, "typeId")
VALUES (2, 'COM-2D', 'light', 'Light Striker & Scout', 25, 7, 7, 50, 210, 8, 2000000, 0, 1);

INSERT INTO mech (id, subtype, class, "stockRole", "tonnageTotal", "tonnageFree", "damageMelee", "damageDFA", "walkDistance", "jumpJets", cost, rarity, "typeId")
VALUES (3, 'LCT-1M', 'light', 'Extremely Fast Scout', 25, 7, 7, 50, 210, 8, 1642000, 0, 2);

INSERT INTO mech (id, subtype, class, "stockRole", "tonnageTotal", "tonnageFree", "damageMelee", "damageDFA", "walkDistance", "jumpJets", cost, rarity, "typeId")
VALUES (4, 'LCT-1S', 'light', 'Extremely Fast Scout', 25, 7, 7, 50, 210, 8, 1800000, 0, 2);

--
-- Definition for index mech_subtype_idx (OID = 16460) :
--
CREATE UNIQUE INDEX mech_subtype_idx ON mech USING btree (subtype);
--
-- Definition for index PK_8c82d7f526340ab734260ea46be (OID = 16394) :
--
ALTER TABLE ONLY migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be"
    PRIMARY KEY (id);
--
-- Definition for index PK_e777c52a46c6a1a02e88cb6657b (OID = 16402) :
--
ALTER TABLE ONLY mech_type
    ADD CONSTRAINT "PK_e777c52a46c6a1a02e88cb6657b"
    PRIMARY KEY (id);
--
-- Definition for index PK_9d698a10c3df1ca0354d1ae94ab (OID = 16439) :
--
ALTER TABLE ONLY mech_weapon_hardpoint
    ADD CONSTRAINT "PK_9d698a10c3df1ca0354d1ae94ab"
    PRIMARY KEY (id);
--
-- Definition for index PK_4bfc2ee5ef5ed6a966e6f114a65 (OID = 16458) :
--
ALTER TABLE ONLY mech
    ADD CONSTRAINT "PK_4bfc2ee5ef5ed6a966e6f114a65"
    PRIMARY KEY (id);
--
-- Definition for index FK_de637a41371d8018c0ce12cccbc (OID = 16461) :
--
ALTER TABLE ONLY mech_weapon_hardpoint
    ADD CONSTRAINT "FK_de637a41371d8018c0ce12cccbc"
    FOREIGN KEY ("mechId") REFERENCES mech(id);
--
-- Definition for index FK_a3db3aba808feb777df1e5c5dc1 (OID = 16466) :
--
ALTER TABLE ONLY mech
    ADD CONSTRAINT "FK_a3db3aba808feb777df1e5c5dc1"
    FOREIGN KEY ("typeId") REFERENCES mech_type(id);
--
-- Data for sequence public.migrations_id_seq (OID = 16385)
--
SELECT pg_catalog.setval('migrations_id_seq', 1, true);
--
-- Data for sequence public.mech_type_id_seq (OID = 16396)
--
SELECT pg_catalog.setval('mech_type_id_seq', 2, true);
--
-- Data for sequence public.mech_weapon_hardpoint_id_seq (OID = 16431)
--
SELECT pg_catalog.setval('mech_weapon_hardpoint_id_seq', 2, true);
--
-- Data for sequence public.mech_id_seq (OID = 16451)
--
SELECT pg_catalog.setval('mech_id_seq', 4, true);
--
-- Comments
--
COMMENT ON SCHEMA public IS 'standard public schema';
