package com.maneo.kosc.dao.template;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.template.TemplateSuivi;


@Repository
public interface TemplateSuiviDao extends JpaRepository<TemplateSuivi, Long> {


    @Query("SELECT item FROM TemplateSuivi item ")
    List<TemplateSuivi> findAll();


}
