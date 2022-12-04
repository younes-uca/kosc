package com.maneo.kosc.service.chercheur.facade;

import com.maneo.kosc.bean.referentiel.SourceReplanification;
import com.maneo.kosc.ws.rest.provided.vo.referentiel.SourceReplanificationVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface SourceReplanificationChercheurService extends AbstractService<SourceReplanification, Long, SourceReplanificationVo> {


    /**
     * find SourceReplanification from database by code (reference)
     *
     * @param code - reference of SourceReplanification
     * @return the founded SourceReplanification , If no SourceReplanification were
     * found in database return  null.
     */
    SourceReplanification findByCode(String code);

    /**
     * find SourceReplanification from database by id (PK) or code (reference)
     *
     * @param id   - id of SourceReplanification
     * @param code - reference of SourceReplanification
     * @return the founded SourceReplanification , If no SourceReplanification were
     * found in database return  null.
     */
    SourceReplanification findByIdOrCode(SourceReplanification sourceReplanification);


    /**
     * delete SourceReplanification from database
     *
     * @param id - id of SourceReplanification to be deleted
     */
    int deleteById(Long id);


    /**
     * delete SourceReplanification from database by code (reference)
     *
     * @param code - reference of SourceReplanification to be deleted
     * @return 1 if SourceReplanification deleted successfully
     */
    int deleteByCode(String code);


}
