package com.maneo.kosc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.template.TemplateEmailReportDemandeClientClientJoignable;


@Repository
public interface TemplateEmailReportDemandeClientClientJoignableDao extends JpaRepository<TemplateEmailReportDemandeClientClientJoignable,Long> {



@Query("SELECT item FROM TemplateEmailReportDemandeClientClientJoignable item ")
List<TemplateEmailReportDemandeClientClientJoignable> findAll();






}
