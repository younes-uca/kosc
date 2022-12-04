package com.maneo.kosc.service.admin.facade.template;

import com.maneo.kosc.bean.template.TemplateEmailReportDemandeManeoClientJoignableRefus;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailReportDemandeManeoClientJoignableRefusVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailReportDemandeManeoClientJoignableRefusAdminService extends AbstractService<TemplateEmailReportDemandeManeoClientJoignableRefus,Long,TemplateEmailReportDemandeManeoClientJoignableRefusVo>{





/**
    * delete TemplateEmailReportDemandeManeoClientJoignableRefus from database
    * @param id - id of TemplateEmailReportDemandeManeoClientJoignableRefus to be deleted
    *
    */
    int deleteById(Long id);







}
