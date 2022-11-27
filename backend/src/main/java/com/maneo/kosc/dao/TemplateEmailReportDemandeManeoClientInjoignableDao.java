package com.maneo.kosc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.TemplateEmailReportDemandeManeoClientInjoignable;


@Repository
public interface TemplateEmailReportDemandeManeoClientInjoignableDao extends JpaRepository<TemplateEmailReportDemandeManeoClientInjoignable,Long> {



@Query("SELECT item FROM TemplateEmailReportDemandeManeoClientInjoignable item ")
List<TemplateEmailReportDemandeManeoClientInjoignable> findAll();






}
