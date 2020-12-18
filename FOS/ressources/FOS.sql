-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Ven 18 Décembre 2020 à 12:20
-- Version du serveur :  10.1.47-MariaDB-0ubuntu0.18.04.1
-- Version de PHP :  7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `FOS`
--

-- --------------------------------------------------------

--
-- Structure de la table `genders`
--

CREATE TABLE `genders` (
  `id` int(10) UNSIGNED NOT NULL,
  `gendertype` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Pour rendre la sélection du genre dnas la table USERS plus facile.';

--
-- Contenu de la table `genders`
--

INSERT INTO `genders` (`id`, `gendertype`) VALUES
(1, 'Male'),
(2, 'Female'),
(3, 'Genderqueer');

-- --------------------------------------------------------

--
-- Structure de la table `groups`
--

CREATE TABLE `groups` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `trainings_id` int(10) UNSIGNED NOT NULL,
  `dateStart` date DEFAULT NULL,
  `dateEnd` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `groups`
--

INSERT INTO `groups` (`id`, `name`, `active`, `trainings_id`, `dateStart`, `dateEnd`) VALUES
(1, 'Aide soignants groupe 1', 0, 17, '2018-06-12', '2019-06-14'),
(2, 'Aide soignants groupe 2', 0, 19, '2019-06-10', '2020-06-12'),
(3, 'Aide soignants groupe 3', 1, 21, '2020-06-09', '2021-06-11'),
(4, 'Développeur JavaScript groupe 1', 0, 1, '2019-02-06', '2019-08-06'),
(5, 'Développeur JavaScript groupe 2', 0, 2, '2019-09-10', '2020-03-03'),
(6, 'Développeur JavaScript groupe 3', 1, 3, '2020-06-03', '2020-11-10'),
(7, 'Evènementiel groupe 1', 0, 13, '2018-04-03', '2018-10-02'),
(8, 'Evènementiel groupe 2', 0, 14, '2019-04-03', '2019-10-02'),
(9, 'Evènementiel groupe 3', 0, 15, '2020-04-03', '2020-10-02'),
(10, 'expert comptable groupe 1', 0, 10, '2018-04-03', '2018-10-02'),
(11, 'expert comptable groupe 2', 0, 11, '2019-04-03', '2019-10-02'),
(12, 'expert comptable groupe 3', 1, 12, '2020-06-09', '2020-12-08'),
(13, 'Infirmier groupe 1', 1, 16, '2018-06-12', '2021-06-14'),
(14, 'Infirmier groupe 2', 1, 18, '2019-06-10', '2022-06-12'),
(15, 'Infirmier groupe 3', 1, 20, '2020-06-09', '2023-06-11'),
(16, 'technicien réseau groupe 1', 0, 4, '2018-07-03', '2019-05-03'),
(17, 'technicien réseau groupe 2', 0, 5, '2019-06-10', '2020-04-07'),
(18, 'technicien réseau groupe 3', 1, 6, '2020-06-09', '2021-04-06'),
(19, 'Web designer groupe 1', 0, 7, '2018-06-05', '2019-04-09'),
(20, 'Web designer groupe 2', 0, 8, '2019-06-05', '2020-04-08'),
(21, 'Web designer groupe 3', 1, 9, '2020-06-02', '2021-04-07'),
(22, 'Web développeur groupe 1', 0, 22, '2018-06-05', '2019-04-09'),
(23, 'Web développeur groupe 2', 0, 23, '2019-06-05', '2020-04-08'),
(24, 'Web développeur groupe 3', 1, 24, '2020-06-02', '2021-04-07');

-- --------------------------------------------------------

--
-- Structure de la table `learners`
--

CREATE TABLE `learners` (
  `id` int(10) UNSIGNED NOT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `genders_id` int(10) UNSIGNED NOT NULL,
  `birthdate` date DEFAULT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `zipcode` int(5) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telephone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `learners`
--

INSERT INTO `learners` (`id`, `firstname`, `lastname`, `genders_id`, `birthdate`, `adress`, `zipcode`, `email`, `telephone`) VALUES
(1, 'Clementine', 'Quirion', 2, '1982-06-02', '6 rue Sébastopol 97438 SAINTE-MARIE', 97438, 'ClementineQuirion@rhyta.com', '0516290730'),
(2, 'Bruno', 'Richard', 1, '1978-11-02', '72 rue du Général Ailleret 62300 LENS', 62300, 'BrunoRichard@armyspy.com', '0369542181'),
(3, 'Joséphine', 'Duffet', 2, '1989-02-18', '45 rue Isambard 83600 FRÉJUS', 83600, 'JosephineAllain@teleworm.us', '0430822663'),
(4, 'Marjolaine', 'Hervieux', 2, '1987-06-03', '34 rue du Clair Bocage 33260 LA TESTE-DE-BUCH', 33260, 'MarjolaineHervieux@teleworm.us', '0502557540'),
(5, 'Eliot', 'L\'Hiver', 3, '1995-08-11', '98 rue Gontier-Patin 13090 AIX-EN-PROVENCE', 13090, 'EliotLHiver@teleworm.us', '0488161559'),
(6, 'Matthieu', 'Patel', 1, '1971-01-27', '74 boulevard de la Liberation 13014 MARSEILLE', 13014, 'MatthieuPatel@jourrapide.com', '0472055504'),
(7, 'Manville', 'Des Meaux', 3, '1971-03-13', '67 rue du Gue Jacquet 78400 CHATOU', 78400, 'ManvilleDesMeaux@armyspy.com', '0198947343'),
(8, 'D\'Arcy', 'Forest', 3, '1973-09-11', '43 rue de la Mare aux Carats 34080 MONTPELLIER', 34080, 'DArcyForest@rhyta.com', '0448877863'),
(9, 'Éléonore', 'Faucher', 2, '1981-02-22', '14 rue de Groussay 26100 ROMANS-SUR-ISÈRE', 26100, 'EleonoreFaucher@teleworm.us', '0460318781'),
(10, 'Caresse', 'Harquin', 2, '1985-12-31', '27 rue du Président Roosevelt 77176 SAVIGNY-LE-TEMPLE', 77176, 'CaresseHarquin@armyspy.com', '0167575021'),
(11, 'Virginie', 'Thibault', 2, '1983-02-09', '17 rue Pierre De Coubertin 31400 TOULOUSE', 31400, 'VirginieThibault@armyspy.com', '0522059014'),
(12, 'Nicholas', 'Houde', 1, '1973-08-20', '94 rue Adolphe Wurtz 92350 LE PLESSIS-ROBINSON', 92350, 'NicholasHoude@teleworm.us', '0184981751'),
(13, 'Benjamin', 'Desrosiers', 1, '1995-01-13', '9 Avenue des Tuileries 67500 HAGUENAU', 67500, 'BenjaminDesrosiers@rhyta.com', '0379096413'),
(14, 'Cécile', 'Huot', 2, '1977-12-19', '87 Place de la Madeleine 75009 PARIS', 75009, 'CecileHuot@dayrep.com', '0154359393'),
(15, 'Arianne', 'Paradis', 2, '1993-05-23', '6 Rue de Verdun 26200 MONTÉLIMAR', 26200, 'ArianneParadis@teleworm.us', '0412010057'),
(16, 'Mirabelle', 'Ruais', 2, '1983-09-29', '77 rue de Raymond Poincaré 92200 NEUILLY-SUR-SEINE', 92200, 'MirabelleRuais@teleworm.us', '0153972631'),
(17, 'Ruby', 'Camus', 3, '1974-05-19', '71 rue Reine Elisabeth 33700 MÉRIGNAC', 33700, 'RubyCamus@rhyta.com', '0579681670'),
(18, 'Lance', 'Tessier', 1, '1976-07-01', '21 cours Jean Jaures 33300 BORDEAUX', 33300, 'LanceTessier@armyspy.com', '0521427523'),
(19, 'Fabrice', 'Lachance', 1, '1976-03-01', '92 rue Grande Fusterie 19100 BRIVE-LA-GAILLARDE', 19100, 'FabriceLachance@jourrapide.com', '0588298211'),
(20, 'Rabican', 'Du Trieux', 3, '1993-05-11', '19 Chemin Des Bateliers 74000 ANNECY', 74000, 'RabicanDuTrieux@teleworm.us', '0473494066'),
(21, 'Estelle', 'Cormier', 2, '1998-06-21', '19 Cours Marechal-Joffre 76200 DIEPPE', 76200, 'EstelleCormier@teleworm.us', '0218504060'),
(22, 'Denis', 'Labrecque', 1, '1983-05-14', '94 Rue de la Pompe 78200 MANTES-LA-JOLIE', 78200, 'DenisLabrecque@jourrapide.com', '0169795366'),
(23, 'Chantal', 'Asselin', 2, '1998-10-26', '13 rue Michel Ange 76600 LE HAVRE', 76600, 'ChantalAsselin@dayrep.com', '0262070307'),
(24, 'Gérard', 'Mailhot', 1, '1984-05-27', '35 Place Napoléon 53000 LAVAL', 53000, 'GerardMailhot@dayrep.com', '0209288502'),
(25, 'Denis', 'L\'Angelier', 1, '2001-05-11', '24 place Stanislas 44100 NANTES', 44100, 'DenisLAngelier@teleworm.us', '0222822530'),
(26, 'Audrey', 'Rochefort', 2, '1986-11-19', '1 Rue Frédéric Chopin 27200 VERNON', 27200, 'AudreyRochefort@rhyta.com', '0223622261'),
(27, 'Rachelle', 'Massé', 2, '1996-03-17', '99 boulevard d\'Alsace 69120 VAULX-EN-VELIN', 69120, 'RachelleMasse@jourrapide.com', '0452423177'),
(28, 'Louis', 'Lizotte', 1, '1983-11-12', '34 avenue Jules Ferry 76300 SOTTEVILLE-LÈS-ROUEN', 76300, 'LouisLizotte@teleworm.us', '0265095652'),
(29, 'Telford', 'Reault', 3, '1997-12-08', '54 Avenue Millies Lacroix 78990 ÉLANCOURT', 78990, 'TelfordReault@dayrep.com', '0170063098'),
(30, 'Agate', 'Perreault', 2, '1981-04-09', '40 cours Franklin Roosevelt 13007 MARSEILLE', 13007, 'AgatePerreault@jourrapide.com', '0481021756'),
(31, 'Noémi', 'Potvin', 2, '1991-01-05', '81 rue Victor Hugo 78700 CONFLANS-SAINTE-HONORINE', 78700, 'NoemiPotvin@dayrep.com', '0113814717'),
(32, 'Eustache', 'Lacroix', 1, '1973-09-24', '78 rue Gustave Eiffel 69140 RILLIEUX-LA-PAPE', 69140, 'EustacheLacroix@teleworm.us', '0496690948'),
(33, 'Artus', 'Brunault', 1, '1982-05-23', '90 Rue Joseph Vernet 97122 BAIE-MAHAULT', 97122, 'ArtusBrunault@teleworm.us', '0520089189'),
(34, 'Archaimbau', 'Faubert', 1, '1990-10-06', '46 Chemin Challet 62800 LIÉVIN', 62800, 'ArchaimbauFaubert@rhyta.com', '0393666907'),
(35, 'Amorette', 'Laisné', 2, '1986-08-15', '67 rue Marie de Médicis 64200 BIARRITZ', 64200, 'AmoretteLaisne@rhyta.com', '0527980802'),
(36, 'Brice', 'Thériault', 1, '1995-11-13', '35 avenue du Marechal Juin 06700 SAINT-LAURENT-DU-VAR', 6700, 'BriceTheriault@dayrep.com', '0433115856'),
(37, 'Fanette', 'Gendron', 2, '1971-09-15', '18 Rue de Verdun 40000 MONT-DE-MARSAN', 40000, 'FanetteGendron@teleworm.us', '0522486693'),
(38, 'Ferragus', 'Garnier', 1, '1994-04-24', '63 boulevard d\'Alsace 69120 VAULX-EN-VELIN', 69120, 'FerragusGarnier@rhyta.com', '0483834960'),
(39, 'Percy', 'LaGrande', 3, '2000-01-21', '68 avenue de Provence 56000 VANNES', 56000, 'PercyLaGrande@jourrapide.com', '0253332518'),
(40, 'Azura', 'Parenteau', 3, '1994-12-05', '43 rue du Faubourg National 33400 TALENCE', 33400, 'AzuraParenteau@teleworm.us', '0555095874'),
(41, 'Jérôme', 'Caisse', 1, '1974-12-28', '69 rue Reine Elisabeth 06500 MENTON', 6500, 'JeromeCaisse@jourrapide.com', '0494403851'),
(42, 'Aurélie', 'Gaulin', 2, '1996-02-02', '87 rue Adolphe Wurtz 43000 LE PUY-EN-VELAY', 43000, 'AurelieGaulin@armyspy.com', '0481609859'),
(43, 'Ranger', 'L\'Angelier', 1, '1980-10-17', '28 Quai des Belges 77100 MEAUX', 77100, 'RangerLAngelier@rhyta.com', '0158837198'),
(44, 'Bernadette', 'Bourdette', 2, '0200-02-01', '49 rue Jean-Monnet 95190 GOUSSAINVILLE', 95190, 'BernadetteBourdette@rhyta.com', '0161400671'),
(45, 'Lirienne', 'Monty', 2, '2000-04-20', '2 Faubourg Saint Honoré 75018 PARIS', 75018, 'LirienneMonty@dayrep.com', '0157928657'),
(46, 'Simone', 'Couture', 2, '1983-06-21', '75 rue des Nations Unies 97470 SAINT-BENOÎT', 97470, 'SimoneCouture@armyspy.com', '0262602402'),
(47, 'Alphonsine', 'Rouleau', 2, '1993-08-31', '80 Square de la Couronne 75002 PARIS', 75002, 'AlphonsineRouleau@jourrapide.com', '0153484949'),
(48, 'Véronique', 'Arsenault', 2, '1972-07-04', '2 rue du Gue Jacquet 36000 CHÂTEAUROUX', 36000, 'VeroniqueArsenault@jourrapide.com', '0289179728');

-- --------------------------------------------------------

--
-- Structure de la table `learners_to_groups`
--

CREATE TABLE `learners_to_groups` (
  `groups_id` int(10) UNSIGNED NOT NULL,
  `learners_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `learners_to_groups`
--

INSERT INTO `learners_to_groups` (`groups_id`, `learners_id`) VALUES
(1, 30),
(1, 47),
(2, 34),
(2, 35),
(3, 15),
(3, 33),
(4, 26),
(4, 42),
(5, 13),
(5, 40),
(6, 36),
(6, 44),
(7, 2),
(7, 10),
(8, 1),
(8, 23),
(9, 8),
(9, 14),
(10, 22),
(10, 25),
(11, 5),
(11, 21),
(12, 19),
(12, 32),
(13, 37),
(13, 38),
(14, 3),
(14, 24),
(15, 18),
(15, 41),
(16, 4),
(16, 7),
(17, 6),
(17, 16),
(18, 12),
(18, 31),
(19, 20),
(19, 39),
(20, 27),
(20, 43),
(21, 17),
(21, 46),
(22, 11),
(22, 29),
(23, 9),
(23, 48),
(24, 28),
(24, 45);

-- --------------------------------------------------------

--
-- Structure de la table `sectors`
--

CREATE TABLE `sectors` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `sectors`
--

INSERT INTO `sectors` (`id`, `name`, `active`) VALUES
(1, 'Numérique', 1),
(2, 'Tertiaire', 1),
(3, 'Paramédical', 1);

-- --------------------------------------------------------

--
-- Structure de la table `states`
--

CREATE TABLE `states` (
  `id` int(10) UNSIGNED NOT NULL,
  `contracttype` varchar(45) DEFAULT NULL,
  `dateStart` date DEFAULT NULL,
  `dateEnd` date DEFAULT NULL,
  `employer` varchar(45) DEFAULT NULL,
  `jobname` varchar(45) DEFAULT NULL,
  `trainingsFinish` tinyint(1) DEFAULT NULL,
  `comment` longtext,
  `learners_id` int(10) UNSIGNED NOT NULL,
  `groups_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `trainings`
--

CREATE TABLE `trainings` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `sectors_id` int(10) UNSIGNED NOT NULL,
  `years_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `trainings`
--

INSERT INTO `trainings` (`id`, `name`, `active`, `sectors_id`, `years_id`) VALUES
(1, 'Développeur JavaScript', 1, 1, 1),
(2, 'Développeur JavaScript', 1, 1, 2),
(3, 'Développeur JavaScript', 1, 1, 3),
(4, 'Technicien réseau', 1, 1, 1),
(5, 'Technicien réseau', 1, 1, 2),
(6, 'Technicien réseau', 1, 1, 3),
(7, 'Web designer', 1, 1, 1),
(8, 'Web designer', 1, 1, 2),
(9, 'Web designer', 1, 1, 3),
(10, 'Expert comptable', 1, 2, 1),
(11, 'Expert comptable', 1, 2, 2),
(12, 'Expert comptable', 1, 2, 3),
(13, 'Evènementiel', 1, 2, 1),
(14, 'Evènementiel', 1, 2, 2),
(15, 'Evènementiel', 1, 2, 3),
(16, 'IDE', 1, 3, 1),
(17, 'AS', 1, 3, 1),
(18, 'IDE', 1, 3, 2),
(19, 'AS', 1, 3, 2),
(20, 'IDE', 1, 3, 3),
(21, 'AS', 1, 3, 3),
(22, 'Web développeur', 0, 1, 1),
(23, 'Web développeur', 0, 1, 2),
(24, 'Web développeur', 1, 1, 3);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `login` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `login`, `password`, `createdAt`, `updatedAt`) VALUES
(2, 'Maurice', 'Laframboise', 'momo', 'lala', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'nomtest', 'prenomtest', 'test', 'test', '2020-12-01 00:00:00', '2020-12-02 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `years`
--

CREATE TABLE `years` (
  `id` int(10) UNSIGNED NOT NULL,
  `dateStart` date DEFAULT NULL,
  `dateEnd` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `years`
--

INSERT INTO `years` (`id`, `dateStart`, `dateEnd`) VALUES
(1, '2018-09-01', '2019-08-31'),
(2, '2019-09-01', '2020-08-31'),
(3, '2020-09-01', '2021-08-31');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `genders`
--
ALTER TABLE `genders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Index pour la table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD KEY `fk_groups_trainings1_idx` (`trainings_id`);

--
-- Index pour la table `learners`
--
ALTER TABLE `learners`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD KEY `fk_learners_genders1_idx` (`genders_id`);

--
-- Index pour la table `learners_to_groups`
--
ALTER TABLE `learners_to_groups`
  ADD PRIMARY KEY (`groups_id`,`learners_id`),
  ADD KEY `fk_learners_to_groups_learners1_idx` (`learners_id`);

--
-- Index pour la table `sectors`
--
ALTER TABLE `sectors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Index pour la table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD KEY `fk_states_learners1_idx` (`learners_id`),
  ADD KEY `fk_states_groups1_idx` (`groups_id`);

--
-- Index pour la table `trainings`
--
ALTER TABLE `trainings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD KEY `fk_trainings_sectors_idx` (`sectors_id`),
  ADD KEY `fk_trainings_years1_idx` (`years_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Index pour la table `years`
--
ALTER TABLE `years`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `genders`
--
ALTER TABLE `genders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT pour la table `learners`
--
ALTER TABLE `learners`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
--
-- AUTO_INCREMENT pour la table `sectors`
--
ALTER TABLE `sectors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `states`
--
ALTER TABLE `states`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `trainings`
--
ALTER TABLE `trainings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `years`
--
ALTER TABLE `years`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `groups`
--
ALTER TABLE `groups`
  ADD CONSTRAINT `fk_groups_trainings1` FOREIGN KEY (`trainings_id`) REFERENCES `trainings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `learners`
--
ALTER TABLE `learners`
  ADD CONSTRAINT `fk_learners_genders1` FOREIGN KEY (`genders_id`) REFERENCES `genders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `learners_to_groups`
--
ALTER TABLE `learners_to_groups`
  ADD CONSTRAINT `fk_learners_to_groups_groups1` FOREIGN KEY (`groups_id`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_learners_to_groups_learners1` FOREIGN KEY (`learners_id`) REFERENCES `learners` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `states`
--
ALTER TABLE `states`
  ADD CONSTRAINT `fk_states_groups1` FOREIGN KEY (`groups_id`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_states_learners1` FOREIGN KEY (`learners_id`) REFERENCES `learners` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `trainings`
--
ALTER TABLE `trainings`
  ADD CONSTRAINT `fk_trainings_sectors` FOREIGN KEY (`sectors_id`) REFERENCES `sectors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_trainings_years1` FOREIGN KEY (`years_id`) REFERENCES `years` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
