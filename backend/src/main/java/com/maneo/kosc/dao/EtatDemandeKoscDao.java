package com.maneo.kosc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.EtatDemandeKosc;


@Repository
public interface EtatDemandeKoscDao extends JpaRepository<EtatDemandeKosc, Long> {


    @Query("SELECT item FROM EtatDemandeKosc item ")
    List<EtatDemandeKosc> findAll();


    EtatDemandeKosc findByCode(String code);

    int deleteByCode(String code);


}
