package com.maneo.kosc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.template.TemplateEmailRefus;


@Repository
public interface TemplateEmailRefusDao extends JpaRepository<TemplateEmailRefus, Long> {


    @Query("SELECT item FROM TemplateEmailRefus item ")
    List<TemplateEmailRefus> findAll();


}
