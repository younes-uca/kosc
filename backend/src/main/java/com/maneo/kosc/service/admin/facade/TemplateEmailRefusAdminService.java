package com.maneo.kosc.service.admin.facade;

import java.util.List;

import com.maneo.kosc.bean.TemplateEmailRefus;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailRefusVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailRefusAdminService extends AbstractService<TemplateEmailRefus, Long, TemplateEmailRefusVo> {


    /**
     * delete TemplateEmailRefus from database
     *
     * @param id - id of TemplateEmailRefus to be deleted
     */
    int deleteById(Long id);


}
