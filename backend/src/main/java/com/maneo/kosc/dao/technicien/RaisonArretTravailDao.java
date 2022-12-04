package com.maneo.kosc.dao.technicien;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.technicien.RaisonArretTravail;


@Repository
public interface RaisonArretTravailDao extends JpaRepository<RaisonArretTravail, Long> {


    @Query("SELECT item FROM RaisonArretTravail item ")
    List<RaisonArretTravail> findAll();


    RaisonArretTravail findByCode(String code);

    int deleteByCode(String code);


}
