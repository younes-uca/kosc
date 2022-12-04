package com.maneo.kosc.dao.technicien;

import com.maneo.kosc.bean.technicien.Technicien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.technicien.DepartementTechnicien;


@Repository
public interface DepartementTechnicienDao extends JpaRepository<DepartementTechnicien, Long> {


    @Query("SELECT item FROM DepartementTechnicien item ")
    List<DepartementTechnicien> findAll();
    @Query("SELECT item.technicien FROM DepartementTechnicien item where item.departement.code = :code")
    List<Technicien> findTechnicienByDepartementCode(@Param("code") String code);
    List<DepartementTechnicien> findByTechnicienIdentifiant(String identifiant);

    int deleteByTechnicienIdentifiant(String identifiant);

    List<DepartementTechnicien> findByTechnicienId(Long id);

    int deleteByTechnicienId(Long id);

    List<DepartementTechnicien> findByDepartementCode(String code);

    int deleteByDepartementCode(String code);

    List<DepartementTechnicien> findByDepartementId(Long id);

    int deleteByDepartementId(Long id);


}
