package com.maneo.kosc.service.chercheur.facade;

import com.maneo.kosc.bean.template.TemplateEmailPlanification;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailPlanificationVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailPlanificationChercheurService extends AbstractService<TemplateEmailPlanification, Long, TemplateEmailPlanificationVo> {


    /**
     * delete TemplateEmailPlanification from database
     *
     * @param id - id of TemplateEmailPlanification to be deleted
     */
    int deleteById(Long id);


}
