package com.maneo.kosc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.TemplateEmailReportDemandeClientClientInjoignable;


@Repository
public interface TemplateEmailReportDemandeClientClientInjoignableDao extends JpaRepository<TemplateEmailReportDemandeClientClientInjoignable,Long> {



@Query("SELECT item FROM TemplateEmailReportDemandeClientClientInjoignable item ")
List<TemplateEmailReportDemandeClientClientInjoignable> findAll();






}
