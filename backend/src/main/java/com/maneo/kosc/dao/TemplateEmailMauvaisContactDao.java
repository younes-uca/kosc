package com.maneo.kosc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.template.TemplateEmailMauvaisContact;


@Repository
public interface TemplateEmailMauvaisContactDao extends JpaRepository<TemplateEmailMauvaisContact, Long> {


    @Query("SELECT item FROM TemplateEmailMauvaisContact item ")
    List<TemplateEmailMauvaisContact> findAll();


}
