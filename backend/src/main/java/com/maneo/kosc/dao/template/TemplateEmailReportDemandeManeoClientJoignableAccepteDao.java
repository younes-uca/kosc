package com.maneo.kosc.dao.template;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.template.TemplateEmailReportDemandeManeoClientJoignableAccepte;


@Repository
public interface TemplateEmailReportDemandeManeoClientJoignableAccepteDao extends JpaRepository<TemplateEmailReportDemandeManeoClientJoignableAccepte,Long> {



@Query("SELECT item FROM TemplateEmailReportDemandeManeoClientJoignableAccepte item ")
List<TemplateEmailReportDemandeManeoClientJoignableAccepte> findAll();






}
