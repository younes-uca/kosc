package com.maneo.kosc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.TemplateEmailCri;


@Repository
public interface TemplateEmailCriDao extends JpaRepository<TemplateEmailCri, Long> {


    @Query("SELECT item FROM TemplateEmailCri item ")
    List<TemplateEmailCri> findAll();


}
