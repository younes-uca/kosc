package com.maneo.kosc.service.admin.facade;

import com.maneo.kosc.bean.template.TemplateEmailMauvaisContact;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailMauvaisContactVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailMauvaisContactAdminService extends AbstractService<TemplateEmailMauvaisContact, Long, TemplateEmailMauvaisContactVo> {


    /**
     * delete TemplateEmailMauvaisContact from database
     *
     * @param id - id of TemplateEmailMauvaisContact to be deleted
     */
    int deleteById(Long id);


}
