package com.maneo.kosc.service.chercheur.facade;

import com.maneo.kosc.bean.template.TemplateEmailRefus;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailRefusVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailRefusChercheurService extends AbstractService<TemplateEmailRefus, Long, TemplateEmailRefusVo> {


    /**
     * delete TemplateEmailRefus from database
     *
     * @param id - id of TemplateEmailRefus to be deleted
     */
    int deleteById(Long id);


}
