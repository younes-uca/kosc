package com.maneo.kosc.service.admin.facade.template;

import com.maneo.kosc.bean.template.TemplateEmailCri;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailCriVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailCriAdminService extends AbstractService<TemplateEmailCri, Long, TemplateEmailCriVo> {


    /**
     * delete TemplateEmailCri from database
     *
     * @param id - id of TemplateEmailCri to be deleted
     */
    int deleteById(Long id);


}
