package com.maneo.kosc.service.admin.facade.template;

import com.maneo.kosc.bean.template.TemplateEmailClientInjoinableKosc;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailClientInjoinableKoscVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailClientInjoinableKoscAdminService extends AbstractService<TemplateEmailClientInjoinableKosc, Long, TemplateEmailClientInjoinableKoscVo> {


    /**
     * delete TemplateEmailClientInjoinableKosc from database
     *
     * @param id - id of TemplateEmailClientInjoinableKosc to be deleted
     */
    int deleteById(Long id);


}
