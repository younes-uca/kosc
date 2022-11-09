package com.maneo.kosc.dao;

import com.maneo.kosc.bean.JourFerie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;


@Repository
public interface JourFerieDao extends JpaRepository<JourFerie, Long> {


    @Query("SELECT item FROM JourFerie item ")
    List<JourFerie> findAll();

}
