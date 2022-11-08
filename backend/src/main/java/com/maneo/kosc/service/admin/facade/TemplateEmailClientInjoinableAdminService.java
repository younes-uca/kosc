package com.maneo.kosc.service.admin.facade;

import java.util.List;

import com.maneo.kosc.bean.TemplateEmailClientInjoinable;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailClientInjoinableVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailClientInjoinableAdminService extends AbstractService<TemplateEmailClientInjoinable, Long, TemplateEmailClientInjoinableVo> {


    /**
     * delete TemplateEmailClientInjoinable from database
     *
     * @param id - id of TemplateEmailClientInjoinable to be deleted
     */
    int deleteById(Long id);


}
