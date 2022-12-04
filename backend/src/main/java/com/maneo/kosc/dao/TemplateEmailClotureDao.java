package com.maneo.kosc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.template.TemplateEmailCloture;


@Repository
public interface TemplateEmailClotureDao extends JpaRepository<TemplateEmailCloture, Long> {


    @Query("SELECT item FROM TemplateEmailCloture item ")
    List<TemplateEmailCloture> findAll();


}
