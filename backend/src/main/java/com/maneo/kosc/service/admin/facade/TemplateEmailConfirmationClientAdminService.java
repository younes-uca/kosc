package com.maneo.kosc.service.admin.facade;

import com.maneo.kosc.bean.template.TemplateEmailConfirmationClient;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailConfirmationClientVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailConfirmationClientAdminService extends AbstractService<TemplateEmailConfirmationClient, Long, TemplateEmailConfirmationClientVo> {


    /**
     * delete TemplateEmailConfirmationClient from database
     *
     * @param id - id of TemplateEmailConfirmationClient to be deleted
     */
    int deleteById(Long id);


}
