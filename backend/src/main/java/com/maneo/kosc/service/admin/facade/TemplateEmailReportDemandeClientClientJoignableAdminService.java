package com.maneo.kosc.service.admin.facade;

import com.maneo.kosc.bean.template.TemplateEmailReportDemandeClientClientJoignable;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReportDemandeClientClientJoignableVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailReportDemandeClientClientJoignableAdminService extends AbstractService<TemplateEmailReportDemandeClientClientJoignable,Long,TemplateEmailReportDemandeClientClientJoignableVo>{





/**
    * delete TemplateEmailReportDemandeClientClientJoignable from database
    * @param id - id of TemplateEmailReportDemandeClientClientJoignable to be deleted
    *
    */
    int deleteById(Long id);







}
