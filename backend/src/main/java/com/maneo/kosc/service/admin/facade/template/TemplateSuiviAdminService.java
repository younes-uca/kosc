package com.maneo.kosc.service.admin.facade.template;

import com.maneo.kosc.bean.template.TemplateSuivi;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateSuiviVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateSuiviAdminService extends AbstractService<TemplateSuivi, Long, TemplateSuiviVo> {


    /**
     * delete TemplateSuivi from database
     *
     * @param id - id of TemplateSuivi to be deleted
     */
    int deleteById(Long id);


}
