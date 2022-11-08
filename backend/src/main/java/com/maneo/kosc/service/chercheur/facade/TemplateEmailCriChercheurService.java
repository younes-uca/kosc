package com.maneo.kosc.service.chercheur.facade;

import java.util.List;

import com.maneo.kosc.bean.TemplateEmailCri;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailCriVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailCriChercheurService extends AbstractService<TemplateEmailCri, Long, TemplateEmailCriVo> {


    /**
     * delete TemplateEmailCri from database
     *
     * @param id - id of TemplateEmailCri to be deleted
     */
    int deleteById(Long id);


}
