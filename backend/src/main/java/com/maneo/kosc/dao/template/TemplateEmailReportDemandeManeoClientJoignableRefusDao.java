package com.maneo.kosc.dao.template;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.template.TemplateEmailReportDemandeManeoClientJoignableRefus;


@Repository
public interface TemplateEmailReportDemandeManeoClientJoignableRefusDao extends JpaRepository<TemplateEmailReportDemandeManeoClientJoignableRefus,Long> {



@Query("SELECT item FROM TemplateEmailReportDemandeManeoClientJoignableRefus item ")
List<TemplateEmailReportDemandeManeoClientJoignableRefus> findAll();






}
