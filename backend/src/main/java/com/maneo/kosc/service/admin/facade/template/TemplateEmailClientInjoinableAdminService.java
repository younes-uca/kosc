package com.maneo.kosc.service.admin.facade.template;

import com.maneo.kosc.bean.template.TemplateEmailClientInjoinable;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailClientInjoinableVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailClientInjoinableAdminService extends AbstractService<TemplateEmailClientInjoinable, Long, TemplateEmailClientInjoinableVo> {


    /**
     * delete TemplateEmailClientInjoinable from database
     *
     * @param id - id of TemplateEmailClientInjoinable to be deleted
     */
    int deleteById(Long id);


}
