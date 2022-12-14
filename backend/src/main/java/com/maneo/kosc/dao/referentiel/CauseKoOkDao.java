package com.maneo.kosc.dao.referentiel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.referentiel.CauseKoOk;


@Repository
public interface CauseKoOkDao extends JpaRepository<CauseKoOk, Long> {


    @Query("SELECT item FROM CauseKoOk item ")
    List<CauseKoOk> findAll();


    CauseKoOk findByCode(String code);

    int deleteByCode(String code);


}
