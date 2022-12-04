package com.maneo.kosc.dao.referentiel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.referentiel.SourceReplanification;


@Repository
public interface SourceReplanificationDao extends JpaRepository<SourceReplanification, Long> {


    @Query("SELECT item FROM SourceReplanification item ")
    List<SourceReplanification> findAll();


    SourceReplanification findByCode(String code);

    int deleteByCode(String code);


}
