package com.maneo.kosc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.TemplateEmailReport;


@Repository
public interface TemplateEmailReportDao extends JpaRepository<TemplateEmailReport, Long> {


    @Query("SELECT item FROM TemplateEmailReport item ")
    List<TemplateEmailReport> findAll();


}
