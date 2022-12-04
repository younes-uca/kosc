package com.maneo.kosc.service.admin.facade.template;

import com.maneo.kosc.bean.template.TemplateEmailFtl;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailFtlVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailFtlAdminService extends AbstractService<TemplateEmailFtl, Long, TemplateEmailFtlVo> {


    /**
     * delete TemplateEmailFtl from database
     *
     * @param id - id of TemplateEmailFtl to be deleted
     */
    int deleteById(Long id);


}
