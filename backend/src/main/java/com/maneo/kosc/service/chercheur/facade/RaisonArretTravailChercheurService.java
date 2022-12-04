package com.maneo.kosc.service.chercheur.facade;

import com.maneo.kosc.bean.technicien.RaisonArretTravail;
import com.maneo.kosc.ws.rest.provided.vo.technicien.RaisonArretTravailVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface RaisonArretTravailChercheurService extends AbstractService<RaisonArretTravail, Long, RaisonArretTravailVo> {


    /**
     * find RaisonArretTravail from database by code (reference)
     *
     * @param code - reference of RaisonArretTravail
     * @return the founded RaisonArretTravail , If no RaisonArretTravail were
     * found in database return  null.
     */
    RaisonArretTravail findByCode(String code);

    /**
     * find RaisonArretTravail from database by id (PK) or code (reference)
     *
     * @param id   - id of RaisonArretTravail
     * @param code - reference of RaisonArretTravail
     * @return the founded RaisonArretTravail , If no RaisonArretTravail were
     * found in database return  null.
     */
    RaisonArretTravail findByIdOrCode(RaisonArretTravail raisonArretTravail);


    /**
     * delete RaisonArretTravail from database
     *
     * @param id - id of RaisonArretTravail to be deleted
     */
    int deleteById(Long id);


    /**
     * delete RaisonArretTravail from database by code (reference)
     *
     * @param code - reference of RaisonArretTravail to be deleted
     * @return 1 if RaisonArretTravail deleted successfully
     */
    int deleteByCode(String code);


}
