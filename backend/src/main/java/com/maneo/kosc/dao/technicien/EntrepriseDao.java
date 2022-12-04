package com.maneo.kosc.dao.technicien;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.technicien.Entreprise;


@Repository
public interface EntrepriseDao extends JpaRepository<Entreprise, Long> {


    @Query("SELECT item FROM Entreprise item ")
    List<Entreprise> findAll();


    Entreprise findByCode(String code);

    int deleteByCode(String code);


}
