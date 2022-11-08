package com.maneo.kosc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.Region;


@Repository
public interface RegionDao extends JpaRepository<Region, Long> {


    @Query("SELECT item FROM Region item ")
    List<Region> findAll();


    Region findByCode(String code);

    int deleteByCode(String code);


}
