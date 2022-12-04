package com.maneo.kosc.service.admin.facade;

import com.maneo.kosc.bean.template.TemplateEmailReportDemandeClientClientInjoignable;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReportDemandeClientClientInjoignableVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailReportDemandeClientClientInjoignableAdminService extends AbstractService<TemplateEmailReportDemandeClientClientInjoignable,Long,TemplateEmailReportDemandeClientClientInjoignableVo>{





/**
    * delete TemplateEmailReportDemandeClientClientInjoignable from database
    * @param id - id of TemplateEmailReportDemandeClientClientInjoignable to be deleted
    *
    */
    int deleteById(Long id);







}
