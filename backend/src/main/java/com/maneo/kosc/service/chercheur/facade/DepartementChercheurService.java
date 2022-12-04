package com.maneo.kosc.service.chercheur.facade;

import java.util.List;

import com.maneo.kosc.bean.technicien.Departement;
import com.maneo.kosc.ws.rest.provided.vo.technicien.DepartementVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface DepartementChercheurService extends AbstractService<Departement, Long, DepartementVo> {


    /**
     * find Departement from database by code (reference)
     *
     * @param code - reference of Departement
     * @return the founded Departement , If no Departement were
     * found in database return  null.
     */
    Departement findByCode(String code);

    /**
     * find Departement from database by id (PK) or code (reference)
     *
     * @param id   - id of Departement
     * @param code - reference of Departement
     * @return the founded Departement , If no Departement were
     * found in database return  null.
     */
    Departement findByIdOrCode(Departement departement);


    /**
     * delete Departement from database
     *
     * @param id - id of Departement to be deleted
     */
    int deleteById(Long id);


    List<Departement> findByRegionCode(String code);

    int deleteByRegionCode(String code);

    List<Departement> findByRegionId(Long id);

    int deleteByRegionId(Long id);


    /**
     * delete Departement from database by code (reference)
     *
     * @param code - reference of Departement to be deleted
     * @return 1 if Departement deleted successfully
     */
    int deleteByCode(String code);


}
