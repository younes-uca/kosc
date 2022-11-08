package com.maneo.kosc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.TemplateEmailConfirmationClient;


@Repository
public interface TemplateEmailConfirmationClientDao extends JpaRepository<TemplateEmailConfirmationClient, Long> {


    @Query("SELECT item FROM TemplateEmailConfirmationClient item ")
    List<TemplateEmailConfirmationClient> findAll();


}
