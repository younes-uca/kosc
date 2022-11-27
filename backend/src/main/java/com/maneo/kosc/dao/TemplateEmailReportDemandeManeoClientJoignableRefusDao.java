package com.maneo.kosc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.TemplateEmailReportDemandeManeoClientJoignableRefus;


@Repository
public interface TemplateEmailReportDemandeManeoClientJoignableRefusDao extends JpaRepository<TemplateEmailReportDemandeManeoClientJoignableRefus,Long> {



@Query("SELECT item FROM TemplateEmailReportDemandeManeoClientJoignableRefus item ")
List<TemplateEmailReportDemandeManeoClientJoignableRefus> findAll();






}
