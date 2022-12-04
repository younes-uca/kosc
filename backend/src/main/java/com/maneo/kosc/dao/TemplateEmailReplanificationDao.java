package com.maneo.kosc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.template.TemplateEmailReplanification;


@Repository
public interface TemplateEmailReplanificationDao extends JpaRepository<TemplateEmailReplanification, Long> {


    @Query("SELECT item FROM TemplateEmailReplanification item ")
    List<TemplateEmailReplanification> findAll();


}
