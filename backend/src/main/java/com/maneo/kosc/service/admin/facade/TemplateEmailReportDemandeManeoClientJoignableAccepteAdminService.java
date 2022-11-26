package com.maneo.kosc.service.admin.facade;

import java.util.List;
import com.maneo.kosc.bean.TemplateEmailReportDemandeManeoClientJoignableAccepte;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReportDemandeManeoClientJoignableAccepteVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailReportDemandeManeoClientJoignableAccepteAdminService extends AbstractService<TemplateEmailReportDemandeManeoClientJoignableAccepte,Long,TemplateEmailReportDemandeManeoClientJoignableAccepteVo>{





/**
    * delete TemplateEmailReportDemandeManeoClientJoignableAccepte from database
    * @param id - id of TemplateEmailReportDemandeManeoClientJoignableAccepte to be deleted
    *
    */
    int deleteById(Long id);







}
