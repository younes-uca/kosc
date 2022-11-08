package com.maneo.kosc.service.chercheur.facade;

import java.util.List;

import com.maneo.kosc.bean.TemplateEmailConfirmationClient;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailConfirmationClientVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailConfirmationClientChercheurService extends AbstractService<TemplateEmailConfirmationClient, Long, TemplateEmailConfirmationClientVo> {


    /**
     * delete TemplateEmailConfirmationClient from database
     *
     * @param id - id of TemplateEmailConfirmationClient to be deleted
     */
    int deleteById(Long id);


}
