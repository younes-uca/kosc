package com.maneo.kosc.service.admin.facade;

import java.util.List;

import com.maneo.kosc.bean.TemplateEmailFtl;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailFtlVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailFtlAdminService extends AbstractService<TemplateEmailFtl, Long, TemplateEmailFtlVo> {


    /**
     * delete TemplateEmailFtl from database
     *
     * @param id - id of TemplateEmailFtl to be deleted
     */
    int deleteById(Long id);


}