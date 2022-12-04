package com.maneo.kosc.service.chercheur.facade;

import com.maneo.kosc.bean.template.TemplateEmailCloture;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailClotureVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailClotureChercheurService extends AbstractService<TemplateEmailCloture, Long, TemplateEmailClotureVo> {


    /**
     * delete TemplateEmailCloture from database
     *
     * @param id - id of TemplateEmailCloture to be deleted
     */
    int deleteById(Long id);


}
