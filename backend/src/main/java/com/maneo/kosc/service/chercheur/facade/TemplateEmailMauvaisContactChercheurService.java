package com.maneo.kosc.service.chercheur.facade;

import com.maneo.kosc.bean.template.TemplateEmailMauvaisContact;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailMauvaisContactVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailMauvaisContactChercheurService extends AbstractService<TemplateEmailMauvaisContact, Long, TemplateEmailMauvaisContactVo> {


    /**
     * delete TemplateEmailMauvaisContact from database
     *
     * @param id - id of TemplateEmailMauvaisContact to be deleted
     */
    int deleteById(Long id);


}
