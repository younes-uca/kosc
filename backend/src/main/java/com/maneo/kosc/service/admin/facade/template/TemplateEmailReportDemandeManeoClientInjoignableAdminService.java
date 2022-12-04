package com.maneo.kosc.service.admin.facade.template;

import com.maneo.kosc.bean.template.TemplateEmailReportDemandeManeoClientInjoignable;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailReportDemandeManeoClientInjoignableVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailReportDemandeManeoClientInjoignableAdminService extends AbstractService<TemplateEmailReportDemandeManeoClientInjoignable,Long,TemplateEmailReportDemandeManeoClientInjoignableVo>{





/**
    * delete TemplateEmailReportDemandeManeoClientInjoignable from database
    * @param id - id of TemplateEmailReportDemandeManeoClientInjoignable to be deleted
    *
    */
    int deleteById(Long id);







}
