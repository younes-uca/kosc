package com.maneo.kosc.dao.template;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.template.TemplateEmailCri;


@Repository
public interface TemplateEmailCriDao extends JpaRepository<TemplateEmailCri, Long> {


    @Query("SELECT item FROM TemplateEmailCri item ")
    List<TemplateEmailCri> findAll();


}
