package com.maneo.kosc.service.chercheur.facade;

import java.util.List;

import com.maneo.kosc.bean.TemplateSuivi;
import com.maneo.kosc.ws.rest.provided.vo.TemplateSuiviVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateSuiviChercheurService extends AbstractService<TemplateSuivi, Long, TemplateSuiviVo> {


    /**
     * delete TemplateSuivi from database
     *
     * @param id - id of TemplateSuivi to be deleted
     */
    int deleteById(Long id);


}
