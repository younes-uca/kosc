package com.maneo.kosc.service.chercheur.facade;

import java.util.List;

import com.maneo.kosc.bean.technicien.ArretTravail;
import com.maneo.kosc.ws.rest.provided.vo.ArretTravailVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface ArretTravailChercheurService extends AbstractService<ArretTravail, Long, ArretTravailVo> {


    /**
     * delete ArretTravail from database
     *
     * @param id - id of ArretTravail to be deleted
     */
    int deleteById(Long id);


    List<ArretTravail> findByTechnicienIdentifiant(String identifiant);

    int deleteByTechnicienIdentifiant(String identifiant);

    List<ArretTravail> findByTechnicienId(Long id);

    int deleteByTechnicienId(Long id);

    List<ArretTravail> findByRaisonArretTravailCode(String code);

    int deleteByRaisonArretTravailCode(String code);

    List<ArretTravail> findByRaisonArretTravailId(Long id);

    int deleteByRaisonArretTravailId(Long id);


}
