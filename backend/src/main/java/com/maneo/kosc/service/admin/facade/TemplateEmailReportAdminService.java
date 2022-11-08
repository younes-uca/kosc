package com.maneo.kosc.service.admin.facade;

import java.util.List;

import com.maneo.kosc.bean.TemplateEmailReport;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReportVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailReportAdminService extends AbstractService<TemplateEmailReport, Long, TemplateEmailReportVo> {


    /**
     * delete TemplateEmailReport from database
     *
     * @param id - id of TemplateEmailReport to be deleted
     */
    int deleteById(Long id);


}
