package com.maneo.kosc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.template.TemplateEmailFtl;


@Repository
public interface TemplateEmailFtlDao extends JpaRepository<TemplateEmailFtl, Long> {


    @Query("SELECT item FROM TemplateEmailFtl item ")
    List<TemplateEmailFtl> findAll();


}
