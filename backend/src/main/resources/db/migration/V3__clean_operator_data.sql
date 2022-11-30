DELETE FROM `operator`;
DROP TABLE IF EXISTS `jour_ferie`;

CREATE TABLE IF NOT EXISTS `jour_ferie` (
    `id` bigint(20) NOT NULL,
    `date_debut` date DEFAULT NULL,
    `date_fin` date DEFAULT NULL,
    `libelle` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=MyISAM DEFAULT CHARSET=koi8r;

INSERT INTO `jour_ferie` (`id`, `date_debut`, `date_fin`, `libelle`) VALUES
                                                                         (10000, '2022-11-18', '2022-11-22', 'New Jersey'),
                                                                         (10001, '2022-11-10', '2022-11-16', 'New Jersey'),
                                                                         (10002, '2022-11-28', '2022-11-28', 'Train');