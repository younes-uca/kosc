package com.maneo.kosc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.TemplateEmailPlanification;


@Repository
public interface TemplateEmailPlanificationDao extends JpaRepository<TemplateEmailPlanification, Long> {


    @Query("SELECT item FROM TemplateEmailPlanification item ")
    List<TemplateEmailPlanification> findAll();


}
