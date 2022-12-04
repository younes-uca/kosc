package com.maneo.kosc.service.chercheur.facade;

import com.maneo.kosc.bean.template.TemplateEmailClientInjoinableKosc;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailClientInjoinableKoscVo;
import com.maneo.kosc.service.core.facade.AbstractService;

public interface TemplateEmailClientInjoinableKoscChercheurService extends AbstractService<TemplateEmailClientInjoinableKosc, Long, TemplateEmailClientInjoinableKoscVo> {


    /**
     * delete TemplateEmailClientInjoinableKosc from database
     *
     * @param id - id of TemplateEmailClientInjoinableKosc to be deleted
     */
    int deleteById(Long id);


}
