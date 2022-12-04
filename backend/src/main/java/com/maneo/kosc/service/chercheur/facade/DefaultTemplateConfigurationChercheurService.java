package com.maneo.kosc.service.chercheur.facade;

import com.maneo.kosc.bean.template.DefaultTemplateConfiguration;
import com.maneo.kosc.service.core.facade.AbstractService;
import com.maneo.kosc.ws.rest.provided.vo.DefaultTemplateConfigurationVo;

import java.util.List;

public interface DefaultTemplateConfigurationChercheurService extends AbstractService<DefaultTemplateConfiguration, Long, DefaultTemplateConfigurationVo> {


    /**
     * delete DefaultTemplateConfiguration from database
     *
     * @param id - id of DefaultTemplateConfiguration to be deleted
     */
    int deleteById(Long id);


    List<DefaultTemplateConfiguration> findByTemplateEmailFtlId(Long id);

    int deleteByTemplateEmailFtlId(Long id);

    List<DefaultTemplateConfiguration> findByTemplateEmailClotureId(Long id);

    int deleteByTemplateEmailClotureId(Long id);

    List<DefaultTemplateConfiguration> findByTemplateSuiviId(Long id);

    int deleteByTemplateSuiviId(Long id);

    List<DefaultTemplateConfiguration> findByTemplateEmailClientInjoinableId(Long id);

    int deleteByTemplateEmailClientInjoinableId(Long id);





    List<DefaultTemplateConfiguration> findByTemplateEmailPlanificationId(Long id);

    int deleteByTemplateEmailPlanificationId(Long id);

    List<DefaultTemplateConfiguration> findByTemplateEmailReplanificationId(Long id);

    int deleteByTemplateEmailReplanificationId(Long id);

    List<DefaultTemplateConfiguration> findByTemplateEmailRefusId(Long id);

    int deleteByTemplateEmailRefusId(Long id);

    List<DefaultTemplateConfiguration> findByTemplateEmailClientInjoinableKoscId(Long id);

    int deleteByTemplateEmailClientInjoinableKoscId(Long id);

    List<DefaultTemplateConfiguration> findByTemplateEmailConfirmationClientId(Long id);

    int deleteByTemplateEmailConfirmationClientId(Long id);

    List<DefaultTemplateConfiguration> findByTemplateEmailMauvaisContactId(Long id);

    int deleteByTemplateEmailMauvaisContactId(Long id);

    List<DefaultTemplateConfiguration> findByTemplateEmailCriId(Long id);

    int deleteByTemplateEmailCriId(Long id);


}
