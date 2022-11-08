package com.maneo.kosc.service.admin.facade;

import java.util.List;

import com.maneo.kosc.bean.TemplateEmailReplanification;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReplanificationVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailReplanificationAdminService extends AbstractService<TemplateEmailReplanification, Long, TemplateEmailReplanificationVo> {


    /**
     * delete TemplateEmailReplanification from database
     *
     * @param id - id of TemplateEmailReplanification to be deleted
     */
    int deleteById(Long id);


}
