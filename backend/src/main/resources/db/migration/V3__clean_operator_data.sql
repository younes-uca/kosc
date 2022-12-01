DELETE
FROM `operator`;

DROP TABLE IF EXISTS `jour_ferie`;

CREATE TABLE IF NOT EXISTS `jour_ferie`
(
    `id` bigint
(
    20
) NOT NULL,
    `date_debut` date DEFAULT NULL,
    `date_fin` date DEFAULT NULL,
    `libelle` varchar
(
    255
) DEFAULT NULL,
    PRIMARY KEY
(
    `id`
)
    ) ENGINE=MyISAM DEFAULT CHARSET=koi8r;

INSERT INTO `jour_ferie` (`id`, `date_debut`, `date_fin`, `libelle`)
VALUES (10003, '2022-11-01', '2022-11-01', 'Jour de l\'an'),
       (10009, '2022-04-17', '2022-04-17', 'Dimanche de P?ques'),
       (10019, '2022-04-18', '2022-04-18', 'Lundi de Paques'),
       (10023, '2022-05-01', '2022-05-01', 'Fete du travail'),
       (10024, '2022-05-08', '2022-05-08', 'Victoire 1945'),
       (10025, '2022-05-26', '2022-05-26', 'Jeudi de l\'Ascension'),
       (10028, '2022-06-05', '2022-06-05', 'Dimanche de Pentecote'),
       (10029, '2022-06-06', '2022-06-06', 'Lundi de Pentecote'),
       (10031, '2022-07-14', '2022-07-14', 'Fete nationale '),
       (10032, '2022-08-15', '2022-08-15', 'Assomption'),
       (10033, '2022-11-01', '2022-11-01', 'Toussaint'),
       (10034, '2022-11-11', '2022-11-11', 'Armistice 1918'),
       (10036, '2022-11-25', '2022-11-25', 'Noel '),
       (10037, '2022-11-27', '2022-11-28', 'test');
