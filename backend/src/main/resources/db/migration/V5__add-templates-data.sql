-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 30 nov. 2022 à 23:50
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `kosc`
--

--
-- Déchargement des données de la table `template_email_client_injoinable`
--

INSERT INTO `template_email_client_injoinable` (`id`, `corps`, `libelle`, `objet`) VALUES
(10000, '`Bonjour,\\n\\nNous avons tenté de vous joindre à plusieurs reprises mais sans succès au numéro : \'${this.selectedOrdreKosc.endCustumorContactPhone}\'/\'${this.selectedOrdreKosc.endCustumorContactCellPhone}\'\\n\\nMerci de revenir vers nous par mail et de nous recontacter au  {Téléphone de l\'utilisateur}  pour planifier un rendez-vous.\\n\\nBien Cordialement\\n{Nom d\'utilisateur}\\nc.a@maneoreseaux.com\\n{Téléphone de l\'utilisateur}`', 'CLIENT INJOIGNABLE', '`[CLIENT INJOIGNABLE]${this.selectedOrdreKosc.reference}_${this.selectedOrdreKosc.referenceWorkOrder}_${this.selectedOrdreKosc.endCustumorContactLastName}&${this.selectedOrdreKosc.endCustumorContactFirstName}`');

--
-- Déchargement des données de la table `template_email_planification`
--

INSERT INTO `template_email_planification` (`id`, `corps`, `libelle`, `objet`) VALUES
(10000, '`Bonjour,\\n\\nVeuillez trouver ci-dessous les éléments  prise de RDV concernant L’OT en objet\\n\\nREFERENCE DOSSIER : ${this.selectedOrdreKosc.referenceWorkOrder}\\nREFERENCE DE L\'INTERVENTION : ${this.selectedOrdreKosc.reference}\\nOPERATEUR EX : ${this.selectedOrdreKosc.operatorVo?.libelle}\\nSTATUT DE CLOTURE CLIENT : SO\\nSTATUT RDV : RDV RACCO PRIS\\nDATE RDV : ${this.datePipe.transform(this.selectedOrdreKosc.dateInterventionTechniqueDebut)}\\nHEURE RDV : {creneau de RDV}\\nPTO EXISTANTE SUR SITE SELON CLIENT :\\nType D \'INTERVENTION PLANIFIEE : ${this.selectedOrdreKosc.supplierServiceCode}\\nREMARQUE DU CONTACT SITE À RACCORDER OU CA :  ${this.selectedOrdreKosc.commentaireClient}\\n\\nBien Cordialement\\n{Nom d\'utilisateur}\\nc.a@maneoreseaux.com\\n{Téléphone de l\'utilisateur}`', 'PLANIFICATION', '`${this.selectedOrdreKosc.reference}_${this.selectedOrdreKosc.referenceWorkOrder}_${this.selectedOrdreKosc.operatorVo?.libelle}_${this.selectedOrdreKosc.endCustumorContactLastName}`');

-- --------------------------------------------------------

--
-- Structure de la table `template_email_report_demande_client_client_injoignable`
--

CREATE TABLE `template_email_report_demande_client_client_injoignable` (
  `id` bigint(20) NOT NULL,
  `corps` text DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `objet` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `template_email_report_demande_client_client_injoignable`
--

INSERT INTO `template_email_report_demande_client_client_injoignable` (`id`, `corps`, `libelle`, `objet`) VALUES
(10000, '`Bonjour,\\n\\nCi-dessous un cas de report de RDV, voici le détail attendu :\\n\\nWO : ${this.selectedOrdreKosc.referenceWorkOrder}\\nOrder : ${this.selectedOrdreKosc.reference}\\nNous avons essayé de vous joindre à plusieurs reprise, concernant  votre demande de report de rendez-vous,\\n\\nNous vous confirmons l\'annulation du rendez-vous du  ${this.datePipe.transform(this.selectedOrdreKosc.dateInterventionTechniqueDebut)} à {creneau de RDV}\\n\\nMerci de bien vouloir nous envoyer un retour, ou nous contacter au numéro[Téléphone de l\'utilisateur]\\nafin de programmer un rendez-vous selon vos disponibilités.\\n\\nNous vous remercions pour votre compréhension.\\n\\nBien Cordialement\\n{Nom d\'utilisateur}\\nc.a@maneoreseaux.com\\n{Téléphone de l\'utilisateur}`', 'REPORT DEMANDE CLINET CLIENT INJOIGNABLE', '`[REPORT DE RDV]${this.selectedOrdreKosc.referenceWorkOrder}_${this.selectedOrdreKosc.reference}`');

-- --------------------------------------------------------

--
-- Structure de la table `template_email_report_demande_client_client_joignable`
--

CREATE TABLE `template_email_report_demande_client_client_joignable` (
  `id` bigint(20) NOT NULL,
  `corps` text DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `objet` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `template_email_report_demande_client_client_joignable`
--

INSERT INTO `template_email_report_demande_client_client_joignable` (`id`, `corps`, `libelle`, `objet`) VALUES
(10000, '`Bonjour,\\n\\nCi-dessous un cas de report de RDV, voici le détail attendu :\\n\\nWO : ${this.selectedOrdreKosc.referenceWorkOrder}\\nOrder : ${this.selectedOrdreKosc.reference}\\n\\nSuite à votre demande de report, nous vous confirmons le décalage du rendez-vous du ${this.datePipe.transform(this.selectedOrdreKosc.dateInterventionTechniqueDebut)} à {creneau de RDV} au ${this.datePipe.transform(this.selectedOrdreKosc.dateReplanification)} à {creneau de RDV}\\n\\nMerci d\'avance pour la prise en compte\\n\\nBien Cordialement\\n{Nom d\'utilisateur}\\nc.a@maneoreseaux.com\\n{Téléphone de l\'utilisateur}`', 'REPORT DEMANDE CLIENT CLIENT JOIGNABLE', '`[REPORT DE RDV]${this.selectedOrdreKosc.referenceWorkOrder}_${this.selectedOrdreKosc.reference}`');

-- --------------------------------------------------------

--
-- Structure de la table `template_email_report_demande_maneo_client_injoignable`
--

CREATE TABLE `template_email_report_demande_maneo_client_injoignable` (
  `id` bigint(20) NOT NULL,
  `corps` text DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `objet` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `template_email_report_demande_maneo_client_injoignable`
--

INSERT INTO `template_email_report_demande_maneo_client_injoignable` (`id`, `corps`, `libelle`, `objet`) VALUES
(10000, '`Bonjour,\\n\\nCi-dessous un cas de report de RDV, voici le détail attendu :\\n\\nWO : ${this.selectedOrdreKosc.referenceWorkOrder}\\nOrder : ${this.selectedOrdreKosc.reference}\\n\\nNous avons essayé de vous joindre à plusieurs reprise, concernant le rendez-vous planifié pour le ${this.datePipe.transform(this.selectedOrdreKosc.dateInterventionTechniqueDebut)} à {creneau de RDV}\\n\\nSuite à un retard de livraison de matériel, notre technicien ne pourra pas intervenir à la date prévu,\\nMerci de bien vouloir nous envoyer un retour, ou nous contacter au numéro [01 88 61 00 47](Téléphone de l\'utilisateur)\\n\\n\nafin de programmer un rendez-vous selon vos disponibilités.\\n\\nBien Cordialement\\n{Nom d\'utilisateur}\\nc.a@maneoreseaux.com\\n{Téléphone de l\'utilisateur}`', 'REPORT DEMANDE MANEO CLIENT INJOIGNABLE', '`[REPORT DE RDV]${this.selectedOrdreKosc.referenceWorkOrder}_${this.selectedOrdreKosc.reference}`');

-- --------------------------------------------------------

--
-- Structure de la table `template_email_report_demande_maneo_client_joignable_accepte`
--

CREATE TABLE `template_email_report_demande_maneo_client_joignable_accepte` (
  `id` bigint(20) NOT NULL,
  `corps` text DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `objet` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `template_email_report_demande_maneo_client_joignable_accepte`
--

INSERT INTO `template_email_report_demande_maneo_client_joignable_accepte` (`id`, `corps`, `libelle`, `objet`) VALUES
(10000, '`Bonjour,\\n\\nCi-dessous un cas de report de RDV, voici le détail attendu :\\n\\nWO : ${this.selectedOrdreKosc.referenceWorkOrder}\\nOrder : ${this.selectedOrdreKosc.reference}\\nSuite à notre entretien téléphonique,  nous  vous confirmons le décalage du rendez-vous du ${this.datePipe.transform(this.selectedOrdreKosc.dateInterventionTechniqueDebut)} à {creneau de RDV} au ${this.datePipe.transform(this.selectedOrdreKosc.dateReplanification)} à {creneau de RDV}\\nMerci de bien vouloir nous excuser pour le désagrément occasionné.\\n\\nNous vous remercions pour votre compréhension.\\n\\nBien Cordialement\\n{Nom d\'utilisateur}\\nc.a@maneoreseaux.com\\n{Téléphone de l\'utilisateur}`', 'REPORT DEMANDE MANEO CLIENT JOIGNABLE ACCEPTE', '`[REPORT DE RDV]${this.selectedOrdreKosc.referenceWorkOrder}_${this.selectedOrdreKosc.reference}`');

-- --------------------------------------------------------

--
-- Structure de la table `template_email_report_demande_maneo_client_joignable_refus`
--

CREATE TABLE `template_email_report_demande_maneo_client_joignable_refus` (
  `id` bigint(20) NOT NULL,
  `corps` text DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `objet` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `template_email_report_demande_maneo_client_joignable_refus`
--

INSERT INTO `template_email_report_demande_maneo_client_joignable_refus` (`id`, `corps`, `libelle`, `objet`) VALUES
(10000, '`Bonjour,\\n\\nCi-dessous un cas de report de RDV, voici le détail attendu :\\n\\nWO : ${this.selectedOrdreKosc.referenceWorkOrder}\\nOrder : ${this.selectedOrdreKosc.reference}\\nSuite à notre entretien téléphonique,  nous  vous confirmons l\'annulation du rendez-vous du ${this.datePipe.transform(this.selectedOrdreKosc.dateInterventionTechniqueDebut)} à {creneau de RDV}\\nMerci de bien vouloir nous envoyer un retour, ou nous contacter au numéro[Téléphone de l\'utilisateur]\\nafin de programmer un rendez-vous selon vos disponibilités.\\n\\nNous vous remercions pour votre compréhension.\\n\\nBien Cordialement\\n{Nom d\'utilisateur}\\nc.a@maneoreseaux.com\\n{Téléphone de l\'utilisateur}`', 'REPORT DEMANDE MANEO CLIENT JOIGNABLE REFUS', '`[REPORT DE RDV]${this.selectedOrdreKosc.referenceWorkOrder}_${this.selectedOrdreKosc.reference}`');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `template_email_report_demande_client_client_injoignable`
--
ALTER TABLE `template_email_report_demande_client_client_injoignable`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `template_email_report_demande_client_client_joignable`
--
ALTER TABLE `template_email_report_demande_client_client_joignable`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `template_email_report_demande_maneo_client_injoignable`
--
ALTER TABLE `template_email_report_demande_maneo_client_injoignable`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `template_email_report_demande_maneo_client_joignable_accepte`
--
ALTER TABLE `template_email_report_demande_maneo_client_joignable_accepte`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `template_email_report_demande_maneo_client_joignable_refus`
--
ALTER TABLE `template_email_report_demande_maneo_client_joignable_refus`
  ADD PRIMARY KEY (`id`);
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

ALTER TABLE `default_template_configuration` ADD `template_email_report_demande_client_client_injoignable` bigint(20) DEFAULT NULL;
ALTER TABLE `default_template_configuration` ADD `template_email_report_demande_client_client_joignable` bigint(20) DEFAULT NULL;
ALTER TABLE `default_template_configuration` ADD `template_email_report_demande_maneo_client_injoignable` bigint(20) DEFAULT NULL;
ALTER TABLE `default_template_configuration` ADD `template_email_report_demande_maneo_client_joignable_accepte` bigint(20) DEFAULT NULL;
ALTER TABLE `default_template_configuration` ADD `template_email_report_demande_maneo_client_joignable_refus` bigint(20) DEFAULT NULL;


UPDATE  `default_template_configuration`  SET
template_email_client_injoinable = 10000,
template_email_planification = 10000,
template_email_client_injoinable_kosc = NULL,
template_email_confirmation_client = NULL,
template_email_mauvais_contact = NULL,
template_email_refus = NULL,
template_email_replanification = NULL,
template_email_report = NULL,
template_email_report_demande_client_client_injoignable = 10000,
template_email_report_demande_client_client_joignable = 10000,
template_email_report_demande_maneo_client_injoignable = 10000,
template_email_report_demande_maneo_client_joignable_accepte = 10000,
template_email_report_demande_maneo_client_joignable_refus = 10000

WHERE id=10000;