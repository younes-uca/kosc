package com.maneo.kosc.service.admin.facade.template;

import com.maneo.kosc.bean.template.TemplateEmailReportDemandeManeoClientJoignableAccepte;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailReportDemandeManeoClientJoignableAccepteVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailReportDemandeManeoClientJoignableAccepteAdminService extends AbstractService<TemplateEmailReportDemandeManeoClientJoignableAccepte,Long,TemplateEmailReportDemandeManeoClientJoignableAccepteVo>{





/**
    * delete TemplateEmailReportDemandeManeoClientJoignableAccepte from database
    * @param id - id of TemplateEmailReportDemandeManeoClientJoignableAccepte to be deleted
    *
    */
    int deleteById(Long id);







}
