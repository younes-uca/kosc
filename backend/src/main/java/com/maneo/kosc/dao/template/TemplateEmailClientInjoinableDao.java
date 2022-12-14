package com.maneo.kosc.dao.template;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.template.TemplateEmailClientInjoinable;


@Repository
public interface TemplateEmailClientInjoinableDao extends JpaRepository<TemplateEmailClientInjoinable, Long> {


    @Query("SELECT item FROM TemplateEmailClientInjoinable item ")
    List<TemplateEmailClientInjoinable> findAll();


}
