package com.maneo.kosc.service.admin.facade;

import com.maneo.kosc.bean.template.TemplateEmailCloture;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailClotureVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailClotureAdminService extends AbstractService<TemplateEmailCloture, Long, TemplateEmailClotureVo> {


    /**
     * delete TemplateEmailCloture from database
     *
     * @param id - id of TemplateEmailCloture to be deleted
     */
    int deleteById(Long id);


}
