package com.maneo.kosc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.Chercheur;


@Repository
public interface ChercheurDao extends JpaRepository<Chercheur, Long> {

    Chercheur findByUsername(String username);


    @Query("SELECT item FROM Chercheur item ")
    List<Chercheur> findAll();


    Chercheur findByNumeroMatricule(String numeroMatricule);

    int deleteByNumeroMatricule(String numeroMatricule);


}
