package com.maneo.kosc.service.chercheur.facade;

import java.util.List;

import com.maneo.kosc.bean.TemplateEmailPlanification;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailPlanificationVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailPlanificationChercheurService extends AbstractService<TemplateEmailPlanification, Long, TemplateEmailPlanificationVo> {


    /**
     * delete TemplateEmailPlanification from database
     *
     * @param id - id of TemplateEmailPlanification to be deleted
     */
    int deleteById(Long id);


}
