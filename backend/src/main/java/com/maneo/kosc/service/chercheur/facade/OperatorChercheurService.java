package com.maneo.kosc.service.chercheur.facade;

import com.maneo.kosc.bean.referentiel.Operator;
import com.maneo.kosc.ws.rest.provided.vo.OperatorVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface OperatorChercheurService extends AbstractService<Operator, Long, OperatorVo> {


    /**
     * find Operator from database by reference (reference)
     *
     * @param reference - reference of Operator
     * @return the founded Operator , If no Operator were
     * found in database return  null.
     */
    Operator findByReference(String reference);

    /**
     * find Operator from database by id (PK) or reference (reference)
     *
     * @param id        - id of Operator
     * @param reference - reference of Operator
     * @return the founded Operator , If no Operator were
     * found in database return  null.
     */
    Operator findByIdOrReference(Operator operator);


    /**
     * delete Operator from database
     *
     * @param id - id of Operator to be deleted
     */
    int deleteById(Long id);


    /**
     * delete Operator from database by reference (reference)
     *
     * @param reference - reference of Operator to be deleted
     * @return 1 if Operator deleted successfully
     */
    int deleteByReference(String reference);


}
