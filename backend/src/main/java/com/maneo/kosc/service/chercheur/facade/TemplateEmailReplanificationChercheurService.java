package com.maneo.kosc.service.chercheur.facade;

import com.maneo.kosc.bean.template.TemplateEmailReplanification;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReplanificationVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailReplanificationChercheurService extends AbstractService<TemplateEmailReplanification, Long, TemplateEmailReplanificationVo> {


    /**
     * delete TemplateEmailReplanification from database
     *
     * @param id - id of TemplateEmailReplanification to be deleted
     */
    int deleteById(Long id);


}
