package com.maneo.kosc.service.chercheur.facade;

import java.util.List;

import com.maneo.kosc.bean.CauseKoOk;
import com.maneo.kosc.ws.rest.provided.vo.CauseKoOkVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface CauseKoOkChercheurService extends AbstractService<CauseKoOk, Long, CauseKoOkVo> {


    /**
     * find CauseKoOk from database by code (reference)
     *
     * @param code - reference of CauseKoOk
     * @return the founded CauseKoOk , If no CauseKoOk were
     * found in database return  null.
     */
    CauseKoOk findByCode(String code);

    /**
     * find CauseKoOk from database by id (PK) or code (reference)
     *
     * @param id   - id of CauseKoOk
     * @param code - reference of CauseKoOk
     * @return the founded CauseKoOk , If no CauseKoOk were
     * found in database return  null.
     */
    CauseKoOk findByIdOrCode(CauseKoOk causeKoOk);


    /**
     * delete CauseKoOk from database
     *
     * @param id - id of CauseKoOk to be deleted
     */
    int deleteById(Long id);


    /**
     * delete CauseKoOk from database by code (reference)
     *
     * @param code - reference of CauseKoOk to be deleted
     * @return 1 if CauseKoOk deleted successfully
     */
    int deleteByCode(String code);


}
