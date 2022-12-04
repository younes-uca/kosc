package com.maneo.kosc.service.admin.facade.template;

import com.maneo.kosc.bean.template.TemplateEmailPlanification;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailPlanificationVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailPlanificationAdminService extends AbstractService<TemplateEmailPlanification, Long, TemplateEmailPlanificationVo> {


    /**
     * delete TemplateEmailPlanification from database
     *
     * @param id - id of TemplateEmailPlanification to be deleted
     */
    int deleteById(Long id);


}
