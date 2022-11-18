-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 18 nov. 2022 à 17:28
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

-- --------------------------------------------------------

--
-- Structure de la table `arret_travail`
--

CREATE TABLE `arret_travail` (
  `id` bigint(20) NOT NULL,
  `comment` text DEFAULT NULL,
  `date_debut` date DEFAULT NULL,
  `date_fin` date DEFAULT NULL,
  `raison_arret_travail` bigint(20) DEFAULT NULL,
  `technicien` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `arret_travail_seq`
--

CREATE TABLE `arret_travail_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `cause_ko_ok`
--

CREATE TABLE `cause_ko_ok` (
  `id` bigint(20) NOT NULL,
  `code` varchar(500) DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `cause_ko_ok_seq`
--

CREATE TABLE `cause_ko_ok_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `chercheur`
--

CREATE TABLE `chercheur` (
  `id` bigint(20) NOT NULL,
  `account_non_expired` bit(1) NOT NULL,
  `account_non_locked` bit(1) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `credentials_non_expired` bit(1) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `enabled` bit(1) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `password_changed` bit(1) NOT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `numero_matricule` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `default_template_configuration`
--

CREATE TABLE `default_template_configuration` (
  `id` bigint(20) NOT NULL,
  `email_kosc` varchar(500) DEFAULT NULL,
  `email_maneo` varchar(500) DEFAULT NULL,
  `enabled` tinyint(1) DEFAULT 0,
  `template_email_client_injoinable` bigint(20) DEFAULT NULL,
  `template_email_client_injoinable_kosc` bigint(20) DEFAULT NULL,
  `template_email_cloture` bigint(20) DEFAULT NULL,
  `template_email_confirmation_client` bigint(20) DEFAULT NULL,
  `template_email_cri` bigint(20) DEFAULT NULL,
  `template_email_ftl` bigint(20) DEFAULT NULL,
  `template_email_mauvais_contact` bigint(20) DEFAULT NULL,
  `template_email_planification` bigint(20) DEFAULT NULL,
  `template_email_refus` bigint(20) DEFAULT NULL,
  `template_email_replanification` bigint(20) DEFAULT NULL,
  `template_email_report` bigint(20) DEFAULT NULL,
  `template_suivi` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `default_template_configuration_seq`
--

CREATE TABLE `default_template_configuration_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `departement`
--

CREATE TABLE `departement` (
  `id` bigint(20) NOT NULL,
  `code` varchar(500) DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `region` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `departement_seq`
--

CREATE TABLE `departement_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `departement_technicien`
--

CREATE TABLE `departement_technicien` (
  `id` bigint(20) NOT NULL,
  `date_debut` date DEFAULT NULL,
  `date_fin` date DEFAULT NULL,
  `departement` bigint(20) DEFAULT NULL,
  `technicien` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `departement_technicien_seq`
--

CREATE TABLE `departement_technicien_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `entreprise`
--

CREATE TABLE `entreprise` (
  `id` bigint(20) NOT NULL,
  `code` varchar(500) DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `entreprise_seq`
--

CREATE TABLE `entreprise_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `etat_demande_kosc`
--

CREATE TABLE `etat_demande_kosc` (
  `id` bigint(20) NOT NULL,
  `code` varchar(500) DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `style` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
    `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------


--
-- Structure de la table `etat_demande_kosc_seq`
--

CREATE TABLE `etat_demande_kosc_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------



--
-- Structure de la table `jour_ferie`
--

CREATE TABLE `jour_ferie` (
  `id` bigint(20) NOT NULL,
  `date_debut` date DEFAULT NULL,
  `date_fin` date DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `jour_ferie_seq`
--

CREATE TABLE `jour_ferie_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `operator`
--

CREATE TABLE `operator` (
  `id` bigint(20) NOT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `reference` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `operator_seq`
--

CREATE TABLE `operator_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `ordre_kosc`
--

CREATE TABLE `ordre_kosc` (
  `id` bigint(20) NOT NULL,
  `autre_infos_pbo_pto` text DEFAULT NULL,
  `code_acces_immeuble` text DEFAULT NULL,
  `code_decharge` text DEFAULT NULL,
  `commantaire_cloture` text DEFAULT NULL,
  `commentaire_client` text DEFAULT NULL,
  `commentaire_kosc` text DEFAULT NULL,
  `commentaire_technicien` text DEFAULT NULL,
  `company` text DEFAULT NULL,
  `condition_syndics` text DEFAULT NULL,
  `connecteur_prise_couleur1` text DEFAULT NULL,
  `connecteur_prise_couleur2` text DEFAULT NULL,
  `connecteur_prise_couleur3` text DEFAULT NULL,
  `connecteur_prise_couleur4` text DEFAULT NULL,
  `connecteur_prise_numero1` text DEFAULT NULL,
  `connecteur_prise_numero2` text DEFAULT NULL,
  `connecteur_prise_numero3` text DEFAULT NULL,
  `connecteur_prise_numero4` text DEFAULT NULL,
  `contacte_immeuble` text DEFAULT NULL,
  `contacts_syndic` text DEFAULT NULL,
  `coordonne_pboy` text DEFAULT NULL,
  `corps_client_injoinable` text DEFAULT NULL,
  `corps_client_injoinable_kosc` text DEFAULT NULL,
  `corps_cloture` text DEFAULT NULL,
  `corps_confirmation_client` text DEFAULT NULL,
  `corps_cri` text DEFAULT NULL,
  `corps_ftl` text DEFAULT NULL,
  `corps_mauvais_contact` text DEFAULT NULL,
  `corps_planification` text DEFAULT NULL,
  `corps_refus` text DEFAULT NULL,
  `corps_replanification` text DEFAULT NULL,
  `corps_report` text DEFAULT NULL,
  `corps_suivi` text DEFAULT NULL,
  `date_appel_replanification` date DEFAULT NULL,
  `date_debut_traitement` date DEFAULT NULL,
  `date_deuxieme_appel` date DEFAULT NULL,
  `date_envoi_client_injoinable` date DEFAULT NULL,
  `date_envoi_client_injoinable_kosc` date DEFAULT NULL,
  `date_envoi_cloture` date DEFAULT NULL,
  `date_envoi_confirmation_client` date DEFAULT NULL,
  `date_envoi_cri` date DEFAULT NULL,
  `date_envoi_ftl` date DEFAULT NULL,
  `date_envoi_mauvais_contact` date DEFAULT NULL,
  `date_envoi_planification` date DEFAULT NULL,
  `date_envoi_refus` date DEFAULT NULL,
  `date_envoi_replanification` date DEFAULT NULL,
  `date_envoi_report` date DEFAULT NULL,
  `date_envoi_suivi` date DEFAULT NULL,
  `date_intervention_technique_debut` date DEFAULT NULL,
  `date_intervention_technique_fin` date DEFAULT NULL,
  `date_ouverture` date DEFAULT NULL,
  `date_premier_appel` date DEFAULT NULL,
  `date_prise_rdv` date DEFAULT NULL,
  `date_rdv` date DEFAULT NULL,
  `date_troisieme_appel` date DEFAULT NULL,
  `email_cloture_piece_joints` text DEFAULT NULL,
  `end_custumor_building` text DEFAULT NULL,
  `end_custumor_city` text DEFAULT NULL,
  `end_custumor_contact_cell_phone` text DEFAULT NULL,
  `end_custumor_contact_email` text DEFAULT NULL,
  `end_custumor_contact_first_name` text DEFAULT NULL,
  `end_custumor_contact_last_name` text DEFAULT NULL,
  `end_custumor_contact_phone` text DEFAULT NULL,
  `end_custumor_first_name` text DEFAULT NULL,
  `end_custumor_floor` text DEFAULT NULL,
  `end_custumor_last_name` text DEFAULT NULL,
  `end_custumor_name` text DEFAULT NULL,
  `end_custumor_siret` text DEFAULT NULL,
  `end_custumor_stairs` text DEFAULT NULL,
  `end_custumor_street_name` text DEFAULT NULL,
  `end_custumor_street_number` text DEFAULT NULL,
  `end_custumor_zipcode` text DEFAULT NULL,
  `envoye_client_injoinable` tinyint(1) DEFAULT 0,
  `envoye_client_injoinable_kosc` tinyint(1) DEFAULT 0,
  `envoye_cloture` tinyint(1) DEFAULT 0,
  `envoye_confirmation_client` tinyint(1) DEFAULT 0,
  `envoye_cri` tinyint(1) DEFAULT 0,
  `envoye_ftl` tinyint(1) DEFAULT 0,
  `envoye_mauvais_contact` tinyint(1) DEFAULT 0,
  `envoye_planification` tinyint(1) DEFAULT 0,
  `envoye_refus` tinyint(1) DEFAULT 0,
  `envoye_replanification` tinyint(1) DEFAULT 0,
  `envoye_report` tinyint(1) DEFAULT 0,
  `envoye_suivi` tinyint(1) DEFAULT 0,
  `existing_otp` tinyint(1) DEFAULT 0,
  `from_client_injoinable` text DEFAULT NULL,
  `from_client_injoinable_kosc` text DEFAULT NULL,
  `from_confirmation_client` text DEFAULT NULL,
  `from_cri` text DEFAULT NULL,
  `from_ftl` text DEFAULT NULL,
  `from_mauvais_contact` text DEFAULT NULL,
  `from_planification` text DEFAULT NULL,
  `from_refus` text DEFAULT NULL,
  `hauteur_pbo` text DEFAULT NULL,
  `hotline` text DEFAULT NULL,
  `info_obtention_cle` text DEFAULT NULL,
  `information_fibre_module_pm1` text DEFAULT NULL,
  `information_fibre_module_pm2` text DEFAULT NULL,
  `information_fibre_module_pm3` text DEFAULT NULL,
  `information_fibre_module_pm4` text DEFAULT NULL,
  `information_fibre_pbo1` text DEFAULT NULL,
  `information_fibre_pbo2` text DEFAULT NULL,
  `information_fibre_pbo3` text DEFAULT NULL,
  `information_fibre_pbo4` text DEFAULT NULL,
  `information_tube_pbo1` text DEFAULT NULL,
  `information_tube_pbo2` text DEFAULT NULL,
  `information_tube_pbo3` text DEFAULT NULL,
  `information_tube_pbo4` text DEFAULT NULL,
  `locale_ipm` text DEFAULT NULL,
  `localisation_pbo` text DEFAULT NULL,
  `localisation_pm` text DEFAULT NULL,
  `mutation_pbo` text DEFAULT NULL,
  `nom_module_pm1` text DEFAULT NULL,
  `nom_module_pm2` text DEFAULT NULL,
  `nom_module_pm3` text DEFAULT NULL,
  `nom_module_pm4` text DEFAULT NULL,
  `numero_serie_ont` text DEFAULT NULL,
  `objet_client_injoinable` text DEFAULT NULL,
  `objet_client_injoinable_kosc` text DEFAULT NULL,
  `objet_cloture` text DEFAULT NULL,
  `objet_confirmation_client` text DEFAULT NULL,
  `objet_cri` text DEFAULT NULL,
  `objet_ftl` text DEFAULT NULL,
  `objet_mauvais_contact` text DEFAULT NULL,
  `objet_planification` text DEFAULT NULL,
  `objet_refus` text DEFAULT NULL,
  `objet_replanification` text DEFAULT NULL,
  `objet_report` text DEFAULT NULL,
  `objet_suivi` text DEFAULT NULL,
  `oc1` text DEFAULT NULL,
  `oc2` text DEFAULT NULL,
  `oc3` text DEFAULT NULL,
  `oc4` text DEFAULT NULL,
  `pbo_reel` text DEFAULT NULL,
  `pma_accessible` text DEFAULT NULL,
  `position_module_pm1` text DEFAULT NULL,
  `position_module_pm2` text DEFAULT NULL,
  `position_module_pm3` text DEFAULT NULL,
  `position_module_pm4` text DEFAULT NULL,
  `product` text DEFAULT NULL,
  `profile` text DEFAULT NULL,
  `provider` text DEFAULT NULL,
  `provider_file_type` text DEFAULT NULL,
  `provider_product` text DEFAULT NULL,
  `provider_sl_id` text DEFAULT NULL,
  `racordement_long` tinyint(1) DEFAULT 0,
  `referen_dossier` text DEFAULT NULL,
  `reference` text DEFAULT NULL,
  `reference_cable_module_pm1` text DEFAULT NULL,
  `reference_cable_module_pm2` text DEFAULT NULL,
  `reference_cable_module_pm3` text DEFAULT NULL,
  `reference_cable_module_pm4` text DEFAULT NULL,
  `reference_cable_pbo1` text DEFAULT NULL,
  `reference_cable_pbo2` text DEFAULT NULL,
  `reference_cable_pbo3` text DEFAULT NULL,
  `reference_cable_pbo4` text DEFAULT NULL,
  `reference_pbo` text DEFAULT NULL,
  `reference_pm` text DEFAULT NULL,
  `reference_pm_technique` text DEFAULT NULL,
  `reference_prestation_prise` text DEFAULT NULL,
  `reference_prise` text DEFAULT NULL,
  `reference_tube_module_pm1` text DEFAULT NULL,
  `reference_tube_module_pm2` text DEFAULT NULL,
  `reference_tube_module_pm3` text DEFAULT NULL,
  `reference_tube_module_pm4` text DEFAULT NULL,
  `reference_work_order` text DEFAULT NULL,
  `reserve1` text DEFAULT NULL,
  `reserve2` text DEFAULT NULL,
  `reserve3` text DEFAULT NULL,
  `reserve4` text DEFAULT NULL,
  `spliter` text DEFAULT NULL,
  `submission_date` date DEFAULT NULL,
  `supplier_service_code` text DEFAULT NULL,
  `to_client_injoinable` text DEFAULT NULL,
  `to_client_injoinable_kosc` text DEFAULT NULL,
  `to_confirmation_client` text DEFAULT NULL,
  `to_cri` text DEFAULT NULL,
  `to_ftl` text DEFAULT NULL,
  `to_mauvais_contact` text DEFAULT NULL,
  `to_planification` text DEFAULT NULL,
  `to_refus` text DEFAULT NULL,
  `type_materiel_pbo` text DEFAULT NULL,
  `type_pbo` text DEFAULT NULL,
  `type_racordement_pbo_pto` text DEFAULT NULL,
  `work_order_type` text DEFAULT NULL,
  `cause_ko_ok` bigint(20) DEFAULT NULL,
  `departement` bigint(20) DEFAULT NULL,
  `etat_demande_kosc` bigint(20) DEFAULT NULL,
  `operator` bigint(20) DEFAULT NULL,
  `source_replanification` bigint(20) DEFAULT NULL,
  `technicien` bigint(20) DEFAULT NULL,
  `template_email_client_injoinable` bigint(20) DEFAULT NULL,
  `template_email_client_injoinable_kosc` bigint(20) DEFAULT NULL,
  `template_email_cloture` bigint(20) DEFAULT NULL,
  `template_email_confirmation_client` bigint(20) DEFAULT NULL,
  `template_email_cri` bigint(20) DEFAULT NULL,
  `template_email_ftl` bigint(20) DEFAULT NULL,
  `template_email_mauvais_contact` bigint(20) DEFAULT NULL,
  `template_email_planification` bigint(20) DEFAULT NULL,
  `template_email_refus` bigint(20) DEFAULT NULL,
  `template_email_replanification` bigint(20) DEFAULT NULL,
  `template_email_report` bigint(20) DEFAULT NULL,
  `template_suivi` bigint(20) DEFAULT NULL,
  `from_replanification` text DEFAULT NULL,
  `from_report` text DEFAULT NULL,
  `to_replanification` text DEFAULT NULL,
  `to_report` text DEFAULT NULL,
  `delai_prise_rdv_par_heure` double NOT NULL,
  `date_erdv` date DEFAULT NULL,
  `e_rdv` tinyint(1) DEFAULT 0,
  `product_code` text DEFAULT NULL,
  `product_label` text DEFAULT NULL,
  `reference_commande_prise_interneoc` text DEFAULT NULL,
  `erdv` tinyint(1) DEFAULT 0,
  `confort` tinyint(1) DEFAULT 0,
  `corps_autre` text DEFAULT NULL,
  `date_dernier_appel` date DEFAULT NULL,
  `date_envoi_autre` date DEFAULT NULL,
  `envoye_autre` tinyint(1) DEFAULT 0,
  `from_autre` text DEFAULT NULL,
  `nbr_heure_date_submission_and_now` bigint(20) DEFAULT NULL,
  `numero_dernier_appel` bigint(20) DEFAULT NULL,
  `objet_autre` text DEFAULT NULL,
  `to_autre` text DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `ordre_kosc_seq`
--

CREATE TABLE `ordre_kosc_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `permission`
--

CREATE TABLE `permission` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `raison_arret_travail`
--

CREATE TABLE `raison_arret_travail` (
  `id` bigint(20) NOT NULL,
  `code` varchar(500) DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `raison_arret_travail_seq`
--

CREATE TABLE `raison_arret_travail_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `region`
--

CREATE TABLE `region` (
  `id` bigint(20) NOT NULL,
  `code` varchar(500) DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `region_seq`
--

CREATE TABLE `region_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `roles_permissions`
--

CREATE TABLE `roles_permissions` (
  `role_id` bigint(20) NOT NULL,
  `permission_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `role_app`
--

CREATE TABLE `role_app` (
  `id` bigint(20) NOT NULL,
  `authority` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `source_replanification`
--

CREATE TABLE `source_replanification` (
  `id` bigint(20) NOT NULL,
  `code` varchar(500) DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `source_replanification_seq`
--

CREATE TABLE `source_replanification_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `technicien`
--

CREATE TABLE `technicien` (
  `id` bigint(20) NOT NULL,
  `account_non_expired` bit(1) NOT NULL,
  `account_non_locked` bit(1) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `credentials_non_expired` bit(1) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `enabled` bit(1) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `password_changed` bit(1) NOT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `adresse_ont` text DEFAULT NULL,
  `cell_phone` varchar(500) DEFAULT NULL,
  `email_attachement` varchar(500) DEFAULT NULL,
  `identifiant` varchar(500) DEFAULT NULL,
  `mot_passe` varchar(500) DEFAULT NULL,
  `entreprise` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `technicien_arret_travails`
--

CREATE TABLE `technicien_arret_travails` (
  `technicien_id` bigint(20) NOT NULL,
  `arret_travails` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_client_injoinable`
--

CREATE TABLE `template_email_client_injoinable` (
  `id` bigint(20) NOT NULL,
  `corps` text DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `objet` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_client_injoinable_kosc`
--

CREATE TABLE `template_email_client_injoinable_kosc` (
  `id` bigint(20) NOT NULL,
  `corps` text DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `objet` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_client_injoinable_kosc_seq`
--

CREATE TABLE `template_email_client_injoinable_kosc_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_client_injoinable_seq`
--

CREATE TABLE `template_email_client_injoinable_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_cloture`
--

CREATE TABLE `template_email_cloture` (
  `id` bigint(20) NOT NULL,
  `corps` text DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `objet` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_cloture_seq`
--

CREATE TABLE `template_email_cloture_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_confirmation_client`
--

CREATE TABLE `template_email_confirmation_client` (
  `id` bigint(20) NOT NULL,
  `corps` text DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `objet` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_confirmation_client_seq`
--

CREATE TABLE `template_email_confirmation_client_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_cri`
--

CREATE TABLE `template_email_cri` (
  `id` bigint(20) NOT NULL,
  `corps` text DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `objet` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_cri_seq`
--

CREATE TABLE `template_email_cri_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_ftl`
--

CREATE TABLE `template_email_ftl` (
  `id` bigint(20) NOT NULL,
  `corps` text DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `objet` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_ftl_seq`
--

CREATE TABLE `template_email_ftl_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_mauvais_contact`
--

CREATE TABLE `template_email_mauvais_contact` (
  `id` bigint(20) NOT NULL,
  `corps` text DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `objet` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_mauvais_contact_seq`
--

CREATE TABLE `template_email_mauvais_contact_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_planification`
--

CREATE TABLE `template_email_planification` (
  `id` bigint(20) NOT NULL,
  `corps` text DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `objet` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_planification_seq`
--

CREATE TABLE `template_email_planification_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_refus`
--

CREATE TABLE `template_email_refus` (
  `id` bigint(20) NOT NULL,
  `corps` text DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `objet` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_refus_seq`
--

CREATE TABLE `template_email_refus_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_replanification`
--

CREATE TABLE `template_email_replanification` (
  `id` bigint(20) NOT NULL,
  `corps` text DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `objet` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_replanification_seq`
--

CREATE TABLE `template_email_replanification_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_report`
--

CREATE TABLE `template_email_report` (
  `id` bigint(20) NOT NULL,
  `corps` text DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `objet` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_email_report_seq`
--

CREATE TABLE `template_email_report_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_suivi`
--

CREATE TABLE `template_suivi` (
  `id` bigint(20) NOT NULL,
  `corps` text DEFAULT NULL,
  `libelle` varchar(500) DEFAULT NULL,
  `objet` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `template_suivi_seq`
--

CREATE TABLE `template_suivi_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `users_roles`
--

CREATE TABLE `users_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `user_app`
--

CREATE TABLE `user_app` (
  `id` bigint(20) NOT NULL,
  `account_non_expired` bit(1) NOT NULL,
  `account_non_locked` bit(1) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `credentials_non_expired` bit(1) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `enabled` bit(1) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `password_changed` bit(1) NOT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `arret_travail`
--
ALTER TABLE `arret_travail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKrltqbtx8fyqmob7bs83u39no6` (`raison_arret_travail`),
  ADD KEY `FKjton9ieno4lu1pplkn3nvgm0l` (`technicien`);

--
-- Index pour la table `cause_ko_ok`
--
ALTER TABLE `cause_ko_ok`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `chercheur`
--
ALTER TABLE `chercheur`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `default_template_configuration`
--
ALTER TABLE `default_template_configuration`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKabmllnq1v464p0tdlcyegdseb` (`template_email_client_injoinable`),
  ADD KEY `FKgmngxvcktshc6c1g69jrnhkm` (`template_email_client_injoinable_kosc`),
  ADD KEY `FKanowh6l0wos499t98hu715kih` (`template_email_cloture`),
  ADD KEY `FK66r3bfy7rvm7uj3j3kt955mr6` (`template_email_confirmation_client`),
  ADD KEY `FKk5l17eqxo5qqd19g618vakkd0` (`template_email_cri`),
  ADD KEY `FKbdmnvt1psqmytsbp0ewbwqgi3` (`template_email_ftl`),
  ADD KEY `FKqderm8k8qd0sbxpwfbt275e6w` (`template_email_mauvais_contact`),
  ADD KEY `FKl4dtxuwnmwgv3550uxlhx67fg` (`template_email_planification`),
  ADD KEY `FKkfku3uw6ijvqs5brw11r75ouv` (`template_email_refus`),
  ADD KEY `FK9k8nedqb67wsmswcoo9ma309d` (`template_email_replanification`),
  ADD KEY `FKtiqhl0x4xd0piw3l22wlih3uk` (`template_email_report`),
  ADD KEY `FKb63up7od7dsau568nnirrt353` (`template_suivi`);

--
-- Index pour la table `departement`
--
ALTER TABLE `departement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKsqoshvl4n4p8y8ake5w2o6srf` (`region`);

--
-- Index pour la table `departement_technicien`
--
ALTER TABLE `departement_technicien`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK5qrmnq899qe5ndobqxd9m9x3y` (`departement`),
  ADD KEY `FK4gphl06u0p855cv7dsf8qof4g` (`technicien`);

--
-- Index pour la table `entreprise`
--
ALTER TABLE `entreprise`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `etat_demande_kosc`
--
ALTER TABLE `etat_demande_kosc`
  ADD PRIMARY KEY (`id`);



--
-- Index pour la table `jour_ferie`
--
ALTER TABLE `jour_ferie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `operator`
--
ALTER TABLE `operator`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `ordre_kosc`
--
ALTER TABLE `ordre_kosc`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK1fmkkaliyqwc5e14beqfb0phw` (`cause_ko_ok`),
  ADD KEY `FKkfkj439rh2qpiynfol2o7ivd7` (`departement`),
  ADD KEY `FK3dgh50p2jp80boxa66g51t89d` (`etat_demande_kosc`),
  ADD KEY `FKrb62b48xuemelf5i4acjq9wf0` (`operator`),
  ADD KEY `FK3srb6jkfu51pew3b7dk13qawc` (`source_replanification`),
  ADD KEY `FKsdg9u2ib2et6y8mn868vnbll2` (`technicien`),
  ADD KEY `FKl6wr7y4ta1vx4i6utn59p2dtm` (`template_email_client_injoinable`),
  ADD KEY `FKh62iwkoatwsdk8m3dlcsaggi9` (`template_email_client_injoinable_kosc`),
  ADD KEY `FKlblgdkskell1i9p275ltw5bu3` (`template_email_cloture`),
  ADD KEY `FKrscaoupp7i462qlj70fpg1d6u` (`template_email_confirmation_client`),
  ADD KEY `FKsd1ibj5uj6aoot6quk0pcju79` (`template_email_cri`),
  ADD KEY `FKi8bgk1cnib9q0chtdk54ppp1q` (`template_email_ftl`),
  ADD KEY `FK9v7osotvek3uxf7tsy5sibi70` (`template_email_mauvais_contact`),
  ADD KEY `FKl7j4a4tvdgv4ig0b1rdq5u7qj` (`template_email_planification`),
  ADD KEY `FKdpfad84yl8v7px2ob8yodgyqi` (`template_email_refus`),
  ADD KEY `FKb2o64tjkso348jj6kl3vq8ij3` (`template_email_replanification`),
  ADD KEY `FK96x27fujbjexr89rku6cb5wud` (`template_email_report`),
  ADD KEY `FKqm01emiq3ahyviou1ggtfdhh9` (`template_suivi`);

--
-- Index pour la table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `raison_arret_travail`
--
ALTER TABLE `raison_arret_travail`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `roles_permissions`
--
ALTER TABLE `roles_permissions`
  ADD KEY `FKboeuhl31go7wer3bpy6so7exi` (`permission_id`),
  ADD KEY `FK3q3rt3at2wf4ooe7npa3et6yb` (`role_id`);

--
-- Index pour la table `role_app`
--
ALTER TABLE `role_app`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `source_replanification`
--
ALTER TABLE `source_replanification`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `technicien`
--
ALTER TABLE `technicien`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKf3wxj2t0eb6g4hd4yw2ikf8u5` (`entreprise`);

--
-- Index pour la table `technicien_arret_travails`
--
ALTER TABLE `technicien_arret_travails`
  ADD UNIQUE KEY `UK_c652w8n8tf3cb9t0s4noos21b` (`arret_travails`),
  ADD KEY `FK6lx7gr8ld614i69753lcv4do2` (`technicien_id`);

--
-- Index pour la table `template_email_client_injoinable`
--
ALTER TABLE `template_email_client_injoinable`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `template_email_client_injoinable_kosc`
--
ALTER TABLE `template_email_client_injoinable_kosc`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `template_email_cloture`
--
ALTER TABLE `template_email_cloture`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `template_email_confirmation_client`
--
ALTER TABLE `template_email_confirmation_client`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `template_email_cri`
--
ALTER TABLE `template_email_cri`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `template_email_ftl`
--
ALTER TABLE `template_email_ftl`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `template_email_mauvais_contact`
--
ALTER TABLE `template_email_mauvais_contact`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `template_email_planification`
--
ALTER TABLE `template_email_planification`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `template_email_refus`
--
ALTER TABLE `template_email_refus`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `template_email_replanification`
--
ALTER TABLE `template_email_replanification`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `template_email_report`
--
ALTER TABLE `template_email_report`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `template_suivi`
--
ALTER TABLE `template_suivi`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users_roles`
--
ALTER TABLE `users_roles`
  ADD KEY `FK4e8pdqeupv69eukb2bvy2ftbd` (`role_id`);

--
-- Index pour la table `user_app`
--
ALTER TABLE `user_app`
  ADD PRIMARY KEY (`id`);
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
