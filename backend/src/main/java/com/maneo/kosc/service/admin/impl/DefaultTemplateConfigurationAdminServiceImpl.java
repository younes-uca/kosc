package com.maneo.kosc.service.admin.impl;

import com.maneo.kosc.bean.template.*;
import com.maneo.kosc.dao.DefaultTemplateConfigurationDao;
import com.maneo.kosc.service.admin.facade.*;
import com.maneo.kosc.service.core.impl.AbstractServiceImpl;
import com.maneo.kosc.service.util.ListUtil;
import com.maneo.kosc.service.util.SearchUtil;
import com.maneo.kosc.ws.rest.provided.vo.DefaultTemplateConfigurationVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;

@Service
public class DefaultTemplateConfigurationAdminServiceImpl extends AbstractServiceImpl<DefaultTemplateConfiguration> implements DefaultTemplateConfigurationAdminService {

    @Autowired
    private DefaultTemplateConfigurationDao defaultTemplateConfigurationDao;

    @Autowired
    private TemplateEmailReplanificationAdminService templateEmailReplanificationService;
    @Autowired
    private TemplateEmailFtlAdminService templateEmailFtlService;
    @Autowired
    private TemplateEmailClotureAdminService templateEmailClotureService;
    @Autowired
    private TemplateEmailPlanificationAdminService templateEmailPlanificationService;
    @Autowired
    private TemplateSuiviAdminService templateSuiviService;
    @Autowired
    private TemplateEmailRefusAdminService templateEmailRefusService;
    @Autowired
    private TemplateEmailConfirmationClientAdminService templateEmailConfirmationClientService;

    @Autowired
    private TemplateEmailClientInjoinableKoscAdminService templateEmailClientInjoinableKoscService;
    @Autowired
    private TemplateEmailMauvaisContactAdminService templateEmailMauvaisContactService;
    @Autowired
    private TemplateEmailClientInjoinableAdminService templateEmailClientInjoinableService;
    @Autowired
    private TemplateEmailCriAdminService templateEmailCriService;


    @Autowired
    private EntityManager entityManager;


    @Override
    public DefaultTemplateConfiguration findDefaultTemplateConfiguration() {
        List<DefaultTemplateConfiguration> defaultTemplateConfigurations = defaultTemplateConfigurationDao.findAll();
        return defaultTemplateConfigurations.get(0);
    }


    @Override
    public List<DefaultTemplateConfiguration> findAll() {
        return defaultTemplateConfigurationDao.findAll();
    }

    @Override
    public List<DefaultTemplateConfiguration> findByTemplateEmailFtlId(Long id) {
        return defaultTemplateConfigurationDao.findByTemplateEmailFtlId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailFtlId(Long id) {
        return defaultTemplateConfigurationDao.deleteByTemplateEmailFtlId(id);
    }

    @Override
    public List<DefaultTemplateConfiguration> findByTemplateEmailClotureId(Long id) {
        return defaultTemplateConfigurationDao.findByTemplateEmailClotureId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailClotureId(Long id) {
        return defaultTemplateConfigurationDao.deleteByTemplateEmailClotureId(id);
    }

    @Override
    public List<DefaultTemplateConfiguration> findByTemplateSuiviId(Long id) {
        return defaultTemplateConfigurationDao.findByTemplateSuiviId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateSuiviId(Long id) {
        return defaultTemplateConfigurationDao.deleteByTemplateSuiviId(id);
    }

    @Override
    public List<DefaultTemplateConfiguration> findByTemplateEmailClientInjoinableId(Long id) {
        return defaultTemplateConfigurationDao.findByTemplateEmailClientInjoinableId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailClientInjoinableId(Long id) {
        return defaultTemplateConfigurationDao.deleteByTemplateEmailClientInjoinableId(id);
    }





    @Override
    public List<DefaultTemplateConfiguration> findByTemplateEmailPlanificationId(Long id) {
        return defaultTemplateConfigurationDao.findByTemplateEmailPlanificationId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailPlanificationId(Long id) {
        return defaultTemplateConfigurationDao.deleteByTemplateEmailPlanificationId(id);
    }

    @Override
    public List<DefaultTemplateConfiguration> findByTemplateEmailReplanificationId(Long id) {
        return defaultTemplateConfigurationDao.findByTemplateEmailReplanificationId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailReplanificationId(Long id) {
        return defaultTemplateConfigurationDao.deleteByTemplateEmailReplanificationId(id);
    }

    @Override
    public List<DefaultTemplateConfiguration> findByTemplateEmailRefusId(Long id) {
        return defaultTemplateConfigurationDao.findByTemplateEmailRefusId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailRefusId(Long id) {
        return defaultTemplateConfigurationDao.deleteByTemplateEmailRefusId(id);
    }

    @Override
    public List<DefaultTemplateConfiguration> findByTemplateEmailClientInjoinableKoscId(Long id) {
        return defaultTemplateConfigurationDao.findByTemplateEmailClientInjoinableKoscId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailClientInjoinableKoscId(Long id) {
        return defaultTemplateConfigurationDao.deleteByTemplateEmailClientInjoinableKoscId(id);
    }

    @Override
    public List<DefaultTemplateConfiguration> findByTemplateEmailConfirmationClientId(Long id) {
        return defaultTemplateConfigurationDao.findByTemplateEmailConfirmationClientId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailConfirmationClientId(Long id) {
        return defaultTemplateConfigurationDao.deleteByTemplateEmailConfirmationClientId(id);
    }

    @Override
    public List<DefaultTemplateConfiguration> findByTemplateEmailMauvaisContactId(Long id) {
        return defaultTemplateConfigurationDao.findByTemplateEmailMauvaisContactId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailMauvaisContactId(Long id) {
        return defaultTemplateConfigurationDao.deleteByTemplateEmailMauvaisContactId(id);
    }

    @Override
    public List<DefaultTemplateConfiguration> findByTemplateEmailCriId(Long id) {
        return defaultTemplateConfigurationDao.findByTemplateEmailCriId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailCriId(Long id) {
        return defaultTemplateConfigurationDao.deleteByTemplateEmailCriId(id);
    }


    @Override
    public DefaultTemplateConfiguration findById(Long id) {
        if (id == null) return null;
        return defaultTemplateConfigurationDao.getOne(id);
    }

    @Override
    public DefaultTemplateConfiguration findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (defaultTemplateConfigurationDao.findById(id).isPresent()) {
            defaultTemplateConfigurationDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public DefaultTemplateConfiguration update(DefaultTemplateConfiguration defaultTemplateConfiguration) {
        DefaultTemplateConfiguration foundedDefaultTemplateConfiguration = findById(defaultTemplateConfiguration.getId());
        if (foundedDefaultTemplateConfiguration == null) return null;
        else {
            return defaultTemplateConfigurationDao.save(defaultTemplateConfiguration);
        }
    }

    private void prepareSave(DefaultTemplateConfiguration defaultTemplateConfiguration) {
        defaultTemplateConfiguration.setEnabled(false);


    }

    @Override
    public DefaultTemplateConfiguration save(DefaultTemplateConfiguration defaultTemplateConfiguration) {
        prepareSave(defaultTemplateConfiguration);


        findTemplateEmailFtl(defaultTemplateConfiguration);
        findTemplateEmailCloture(defaultTemplateConfiguration);
        findTemplateSuivi(defaultTemplateConfiguration);
        findTemplateEmailClientInjoinable(defaultTemplateConfiguration);
        findTemplateEmailPlanification(defaultTemplateConfiguration);
        findTemplateEmailReplanification(defaultTemplateConfiguration);
        findTemplateEmailRefus(defaultTemplateConfiguration);
        findTemplateEmailClientInjoinableKosc(defaultTemplateConfiguration);
        findTemplateEmailConfirmationClient(defaultTemplateConfiguration);
        findTemplateEmailMauvaisContact(defaultTemplateConfiguration);
        findTemplateEmailCri(defaultTemplateConfiguration);

        return defaultTemplateConfigurationDao.save(defaultTemplateConfiguration);


    }

    @Override
    public List<DefaultTemplateConfiguration> save(List<DefaultTemplateConfiguration> defaultTemplateConfigurations) {
        List<DefaultTemplateConfiguration> list = new ArrayList<>();
        for (DefaultTemplateConfiguration defaultTemplateConfiguration : defaultTemplateConfigurations) {
            list.add(save(defaultTemplateConfiguration));
        }
        return list;
    }

    @Override
    @Transactional
    public int delete(DefaultTemplateConfiguration defaultTemplateConfiguration) {
        if (defaultTemplateConfiguration.getId() == null) return -1;
        DefaultTemplateConfiguration foundedDefaultTemplateConfiguration = findById(defaultTemplateConfiguration.getId());
        if (foundedDefaultTemplateConfiguration == null) return -1;
        defaultTemplateConfigurationDao.delete(foundedDefaultTemplateConfiguration);
        return 1;
    }


    public List<DefaultTemplateConfiguration> findByCriteria(DefaultTemplateConfigurationVo defaultTemplateConfigurationVo) {

        String query = "SELECT o FROM DefaultTemplateConfiguration o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", defaultTemplateConfigurationVo.getId());
        query += SearchUtil.addConstraint("o", "emailKosc", "LIKE", defaultTemplateConfigurationVo.getEmailKosc());
        query += SearchUtil.addConstraint("o", "emailManeo", "LIKE", defaultTemplateConfigurationVo.getEmailManeo());
        query += SearchUtil.addConstraint("o", "enabled", "=", defaultTemplateConfigurationVo.getEnabled());
        if (defaultTemplateConfigurationVo.getTemplateEmailFtlVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailFtl.id", "=", defaultTemplateConfigurationVo.getTemplateEmailFtlVo().getId());
        }

        if (defaultTemplateConfigurationVo.getTemplateEmailClotureVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailCloture.id", "=", defaultTemplateConfigurationVo.getTemplateEmailClotureVo().getId());
        }

        if (defaultTemplateConfigurationVo.getTemplateSuiviVo() != null) {
            query += SearchUtil.addConstraint("o", "templateSuivi.id", "=", defaultTemplateConfigurationVo.getTemplateSuiviVo().getId());
        }

        if (defaultTemplateConfigurationVo.getTemplateEmailClientInjoinableVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailClientInjoinable.id", "=", defaultTemplateConfigurationVo.getTemplateEmailClientInjoinableVo().getId());
        }



        if (defaultTemplateConfigurationVo.getTemplateEmailPlanificationVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailPlanification.id", "=", defaultTemplateConfigurationVo.getTemplateEmailPlanificationVo().getId());
        }

        if (defaultTemplateConfigurationVo.getTemplateEmailReplanificationVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailReplanification.id", "=", defaultTemplateConfigurationVo.getTemplateEmailReplanificationVo().getId());
        }

        if (defaultTemplateConfigurationVo.getTemplateEmailRefusVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailRefus.id", "=", defaultTemplateConfigurationVo.getTemplateEmailRefusVo().getId());
        }

        if (defaultTemplateConfigurationVo.getTemplateEmailClientInjoinableKoscVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailClientInjoinableKosc.id", "=", defaultTemplateConfigurationVo.getTemplateEmailClientInjoinableKoscVo().getId());
        }

        if (defaultTemplateConfigurationVo.getTemplateEmailConfirmationClientVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailConfirmationClient.id", "=", defaultTemplateConfigurationVo.getTemplateEmailConfirmationClientVo().getId());
        }

        if (defaultTemplateConfigurationVo.getTemplateEmailMauvaisContactVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailMauvaisContact.id", "=", defaultTemplateConfigurationVo.getTemplateEmailMauvaisContactVo().getId());
        }

        if (defaultTemplateConfigurationVo.getTemplateEmailCriVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailCri.id", "=", defaultTemplateConfigurationVo.getTemplateEmailCriVo().getId());
        }

        return entityManager.createQuery(query).getResultList();
    }


    private void findTemplateEmailFtl(DefaultTemplateConfiguration defaultTemplateConfiguration) {
        TemplateEmailFtl loadedTemplateEmailFtl = null;
        if (defaultTemplateConfiguration.getTemplateEmailFtl() != null && defaultTemplateConfiguration.getTemplateEmailFtl().getId() != null)
            loadedTemplateEmailFtl = templateEmailFtlService.findById(defaultTemplateConfiguration.getTemplateEmailFtl().getId());

        if (loadedTemplateEmailFtl == null) {
            return;
        }
        defaultTemplateConfiguration.setTemplateEmailFtl(loadedTemplateEmailFtl);
    }

    private void findTemplateEmailCloture(DefaultTemplateConfiguration defaultTemplateConfiguration) {
        TemplateEmailCloture loadedTemplateEmailCloture = null;
        if (defaultTemplateConfiguration.getTemplateEmailCloture() != null && defaultTemplateConfiguration.getTemplateEmailCloture().getId() != null)
            loadedTemplateEmailCloture = templateEmailClotureService.findById(defaultTemplateConfiguration.getTemplateEmailCloture().getId());

        if (loadedTemplateEmailCloture == null) {
            return;
        }
        defaultTemplateConfiguration.setTemplateEmailCloture(loadedTemplateEmailCloture);
    }

    private void findTemplateSuivi(DefaultTemplateConfiguration defaultTemplateConfiguration) {
        TemplateSuivi loadedTemplateSuivi = null;
        if (defaultTemplateConfiguration.getTemplateSuivi() != null && defaultTemplateConfiguration.getTemplateSuivi().getId() != null)
            loadedTemplateSuivi = templateSuiviService.findById(defaultTemplateConfiguration.getTemplateSuivi().getId());

        if (loadedTemplateSuivi == null) {
            return;
        }
        defaultTemplateConfiguration.setTemplateSuivi(loadedTemplateSuivi);
    }

    private void findTemplateEmailClientInjoinable(DefaultTemplateConfiguration defaultTemplateConfiguration) {
        TemplateEmailClientInjoinable loadedTemplateEmailClientInjoinable = null;
        if (defaultTemplateConfiguration.getTemplateEmailClientInjoinable() != null && defaultTemplateConfiguration.getTemplateEmailClientInjoinable().getId() != null)
            loadedTemplateEmailClientInjoinable = templateEmailClientInjoinableService.findById(defaultTemplateConfiguration.getTemplateEmailClientInjoinable().getId());

        if (loadedTemplateEmailClientInjoinable == null) {
            return;
        }
        defaultTemplateConfiguration.setTemplateEmailClientInjoinable(loadedTemplateEmailClientInjoinable);
    }



    private void findTemplateEmailPlanification(DefaultTemplateConfiguration defaultTemplateConfiguration) {
        TemplateEmailPlanification loadedTemplateEmailPlanification = null;
        if (defaultTemplateConfiguration.getTemplateEmailPlanification() != null && defaultTemplateConfiguration.getTemplateEmailPlanification().getId() != null)
            loadedTemplateEmailPlanification = templateEmailPlanificationService.findById(defaultTemplateConfiguration.getTemplateEmailPlanification().getId());

        if (loadedTemplateEmailPlanification == null) {
            return;
        }
        defaultTemplateConfiguration.setTemplateEmailPlanification(loadedTemplateEmailPlanification);
    }

    private void findTemplateEmailReplanification(DefaultTemplateConfiguration defaultTemplateConfiguration) {
        TemplateEmailReplanification loadedTemplateEmailReplanification = null;
        if (defaultTemplateConfiguration.getTemplateEmailReplanification() != null && defaultTemplateConfiguration.getTemplateEmailReplanification().getId() != null)
            loadedTemplateEmailReplanification = templateEmailReplanificationService.findById(defaultTemplateConfiguration.getTemplateEmailReplanification().getId());

        if (loadedTemplateEmailReplanification == null) {
            return;
        }
        defaultTemplateConfiguration.setTemplateEmailReplanification(loadedTemplateEmailReplanification);
    }

    private void findTemplateEmailRefus(DefaultTemplateConfiguration defaultTemplateConfiguration) {
        TemplateEmailRefus loadedTemplateEmailRefus = null;
        if (defaultTemplateConfiguration.getTemplateEmailRefus() != null && defaultTemplateConfiguration.getTemplateEmailRefus().getId() != null)
            loadedTemplateEmailRefus = templateEmailRefusService.findById(defaultTemplateConfiguration.getTemplateEmailRefus().getId());

        if (loadedTemplateEmailRefus == null) {
            return;
        }
        defaultTemplateConfiguration.setTemplateEmailRefus(loadedTemplateEmailRefus);
    }

    private void findTemplateEmailClientInjoinableKosc(DefaultTemplateConfiguration defaultTemplateConfiguration) {
        TemplateEmailClientInjoinableKosc loadedTemplateEmailClientInjoinableKosc = null;
        if (defaultTemplateConfiguration.getTemplateEmailClientInjoinableKosc() != null && defaultTemplateConfiguration.getTemplateEmailClientInjoinableKosc().getId() != null)
            loadedTemplateEmailClientInjoinableKosc = templateEmailClientInjoinableKoscService.findById(defaultTemplateConfiguration.getTemplateEmailClientInjoinableKosc().getId());

        if (loadedTemplateEmailClientInjoinableKosc == null) {
            return;
        }
        defaultTemplateConfiguration.setTemplateEmailClientInjoinableKosc(loadedTemplateEmailClientInjoinableKosc);
    }

    private void findTemplateEmailConfirmationClient(DefaultTemplateConfiguration defaultTemplateConfiguration) {
        TemplateEmailConfirmationClient loadedTemplateEmailConfirmationClient = null;
        if (defaultTemplateConfiguration.getTemplateEmailConfirmationClient() != null && defaultTemplateConfiguration.getTemplateEmailConfirmationClient().getId() != null)
            loadedTemplateEmailConfirmationClient = templateEmailConfirmationClientService.findById(defaultTemplateConfiguration.getTemplateEmailConfirmationClient().getId());

        if (loadedTemplateEmailConfirmationClient == null) {
            return;
        }
        defaultTemplateConfiguration.setTemplateEmailConfirmationClient(loadedTemplateEmailConfirmationClient);
    }

    private void findTemplateEmailMauvaisContact(DefaultTemplateConfiguration defaultTemplateConfiguration) {
        TemplateEmailMauvaisContact loadedTemplateEmailMauvaisContact = null;
        if (defaultTemplateConfiguration.getTemplateEmailMauvaisContact() != null && defaultTemplateConfiguration.getTemplateEmailMauvaisContact().getId() != null)
            loadedTemplateEmailMauvaisContact = templateEmailMauvaisContactService.findById(defaultTemplateConfiguration.getTemplateEmailMauvaisContact().getId());

        if (loadedTemplateEmailMauvaisContact == null) {
            return;
        }
        defaultTemplateConfiguration.setTemplateEmailMauvaisContact(loadedTemplateEmailMauvaisContact);
    }

    private void findTemplateEmailCri(DefaultTemplateConfiguration defaultTemplateConfiguration) {
        TemplateEmailCri loadedTemplateEmailCri = null;
        if (defaultTemplateConfiguration.getTemplateEmailCri() != null && defaultTemplateConfiguration.getTemplateEmailCri().getId() != null)
            loadedTemplateEmailCri = templateEmailCriService.findById(defaultTemplateConfiguration.getTemplateEmailCri().getId());

        if (loadedTemplateEmailCri == null) {
            return;
        }
        defaultTemplateConfiguration.setTemplateEmailCri(loadedTemplateEmailCri);
    }

    @Override
    @Transactional
    public void delete(List<DefaultTemplateConfiguration> defaultTemplateConfigurations) {
        if (ListUtil.isNotEmpty(defaultTemplateConfigurations)) {
            defaultTemplateConfigurations.forEach(e -> defaultTemplateConfigurationDao.delete(e));
        }
    }

    @Override
    public void update(List<DefaultTemplateConfiguration> defaultTemplateConfigurations) {
        if (ListUtil.isNotEmpty(defaultTemplateConfigurations)) {
            defaultTemplateConfigurations.forEach(e -> defaultTemplateConfigurationDao.save(e));
        }
    }


}
