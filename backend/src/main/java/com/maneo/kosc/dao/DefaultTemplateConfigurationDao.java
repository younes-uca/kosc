package com.maneo.kosc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.template.DefaultTemplateConfiguration;


@Repository
public interface DefaultTemplateConfigurationDao extends JpaRepository<DefaultTemplateConfiguration,Long> {



@Query("SELECT item FROM DefaultTemplateConfiguration item ")
List<DefaultTemplateConfiguration> findAll();




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

    List<DefaultTemplateConfiguration> findByTemplateEmailReportDemandeManeoClientInjoignableId(Long id);

    int deleteByTemplateEmailReportDemandeManeoClientInjoignableId(Long id);

    List<DefaultTemplateConfiguration> findByTemplateEmailReportDemandeManeoClientJoignableAccepteId(Long id);

    int deleteByTemplateEmailReportDemandeManeoClientJoignableAccepteId(Long id);

    List<DefaultTemplateConfiguration> findByTemplateEmailReportDemandeManeoClientJoignableRefusId(Long id);

    int deleteByTemplateEmailReportDemandeManeoClientJoignableRefusId(Long id);

    List<DefaultTemplateConfiguration> findByTemplateEmailReportDemandeClientClientJoignableId(Long id);

    int deleteByTemplateEmailReportDemandeClientClientJoignableId(Long id);

    List<DefaultTemplateConfiguration> findByTemplateEmailReportDemandeClientClientInjoignableId(Long id);

    int deleteByTemplateEmailReportDemandeClientClientInjoignableId(Long id);



}
