package com.maneo.kosc.dao.template;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.template.TemplateEmailClientInjoinableKosc;


@Repository
public interface TemplateEmailClientInjoinableKoscDao extends JpaRepository<TemplateEmailClientInjoinableKosc, Long> {


    @Query("SELECT item FROM TemplateEmailClientInjoinableKosc item ")
    List<TemplateEmailClientInjoinableKosc> findAll();


}
