package com.maneo.kosc.ws.rest.provided.converter;

import com.maneo.kosc.bean.template.DefaultTemplateConfiguration;
import com.maneo.kosc.service.util.NumberUtil;
import com.maneo.kosc.service.util.StringUtil;
import com.maneo.kosc.ws.rest.provided.vo.DefaultTemplateConfigurationVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DefaultTemplateConfigurationConverter extends AbstractConverter<DefaultTemplateConfiguration, DefaultTemplateConfigurationVo> {

    @Autowired
    private TemplateEmailReplanificationConverter templateEmailReplanificationConverter;
    @Autowired
    private TemplateEmailFtlConverter templateEmailFtlConverter;
    @Autowired
    private TemplateEmailClotureConverter templateEmailClotureConverter;
    @Autowired
    private TemplateEmailPlanificationConverter templateEmailPlanificationConverter;
    @Autowired
    private TemplateSuiviConverter templateSuiviConverter;
    @Autowired
    private TemplateEmailRefusConverter templateEmailRefusConverter;
    @Autowired
    private TemplateEmailConfirmationClientConverter templateEmailConfirmationClientConverter;

    @Autowired
    private TemplateEmailClientInjoinableKoscConverter templateEmailClientInjoinableKoscConverter;
    @Autowired
    private TemplateEmailMauvaisContactConverter templateEmailMauvaisContactConverter;
    @Autowired
    private TemplateEmailClientInjoinableConverter templateEmailClientInjoinableConverter;
    @Autowired
    private TemplateEmailCriConverter templateEmailCriConverter;

    @Autowired
    private TemplateEmailReportDemandeManeoClientInjoignableConverter templateEmailReportDemandeManeoClientInjoignableConverter;

    @Autowired
    private TemplateEmailReportDemandeManeoClientJoignableAccepteConverter templateEmailReportDemandeManeoClientJoignableAccepteConverter;

    @Autowired
    private TemplateEmailReportDemandeManeoClientJoignableRefusConverter templateEmailReportDemandeManeoClientJoignableRefusConverter;

    @Autowired
    private TemplateEmailReportDemandeClientClientJoignableConverter templateEmailReportDemandeClientClientJoignableConverter;

    @Autowired
    private TemplateEmailReportDemandeClientClientInjoignableConverter templateEmailReportDemandeClientClientInjoignableConverter;
    private Boolean templateEmailFtl;
    private Boolean templateEmailCloture;
    private Boolean templateSuivi;
    private Boolean templateEmailClientInjoinable;

    private Boolean templateEmailPlanification;
    private Boolean templateEmailReplanification;
    private Boolean templateEmailRefus;
    private Boolean templateEmailClientInjoinableKosc;
    private Boolean templateEmailConfirmationClient;
    private Boolean templateEmailMauvaisContact;
    private Boolean templateEmailCri;

    private Boolean templateEmailReportDemandeManeoClientInjoignable;

    private Boolean templateEmailReportDemandeManeoClientJoignableAccepte;

    private Boolean templateEmailReportDemandeManeoClientJoignableRefus;

    private Boolean templateEmailReportDemandeClientClientJoignable;

    private Boolean templateEmailReportDemandeClientClientInjoignable;


    public DefaultTemplateConfigurationConverter() {
        init(true);
    }

    @Override
    public DefaultTemplateConfiguration toItem(DefaultTemplateConfigurationVo vo) {
        if (vo == null) {
            return null;
        } else {
            DefaultTemplateConfiguration item = new DefaultTemplateConfiguration();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));
            if (StringUtil.isNotEmpty(vo.getEmailKosc()))
                item.setEmailKosc(vo.getEmailKosc());
            if (StringUtil.isNotEmpty(vo.getEmailManeo()))
                item.setEmailManeo(vo.getEmailManeo());
            if (vo.getEnabled() != null)
                item.setEnabled(vo.getEnabled());
            if (vo.getTemplateEmailFtlVo() != null && this.templateEmailFtl)
                item.setTemplateEmailFtl(templateEmailFtlConverter.toItem(vo.getTemplateEmailFtlVo()));
            if (vo.getTemplateEmailClotureVo() != null && this.templateEmailCloture)
                item.setTemplateEmailCloture(templateEmailClotureConverter.toItem(vo.getTemplateEmailClotureVo()));
            if (vo.getTemplateSuiviVo() != null && this.templateSuivi)
                item.setTemplateSuivi(templateSuiviConverter.toItem(vo.getTemplateSuiviVo()));
            if (vo.getTemplateEmailClientInjoinableVo() != null && this.templateEmailClientInjoinable)
                item.setTemplateEmailClientInjoinable(templateEmailClientInjoinableConverter.toItem(vo.getTemplateEmailClientInjoinableVo()));

            if (vo.getTemplateEmailPlanificationVo() != null && this.templateEmailPlanification)
                item.setTemplateEmailPlanification(templateEmailPlanificationConverter.toItem(vo.getTemplateEmailPlanificationVo()));
            if (vo.getTemplateEmailReplanificationVo() != null && this.templateEmailReplanification)
                item.setTemplateEmailReplanification(templateEmailReplanificationConverter.toItem(vo.getTemplateEmailReplanificationVo()));
            if (vo.getTemplateEmailRefusVo() != null && this.templateEmailRefus)
                item.setTemplateEmailRefus(templateEmailRefusConverter.toItem(vo.getTemplateEmailRefusVo()));
            if (vo.getTemplateEmailClientInjoinableKoscVo() != null && this.templateEmailClientInjoinableKosc)
                item.setTemplateEmailClientInjoinableKosc(templateEmailClientInjoinableKoscConverter.toItem(vo.getTemplateEmailClientInjoinableKoscVo()));
            if (vo.getTemplateEmailConfirmationClientVo() != null && this.templateEmailConfirmationClient)
                item.setTemplateEmailConfirmationClient(templateEmailConfirmationClientConverter.toItem(vo.getTemplateEmailConfirmationClientVo()));
            if (vo.getTemplateEmailMauvaisContactVo() != null && this.templateEmailMauvaisContact)
                item.setTemplateEmailMauvaisContact(templateEmailMauvaisContactConverter.toItem(vo.getTemplateEmailMauvaisContactVo()));
            if (vo.getTemplateEmailCriVo() != null && this.templateEmailCri)
                item.setTemplateEmailCri(templateEmailCriConverter.toItem(vo.getTemplateEmailCriVo()));

            if (vo.getTemplateEmailReportDemandeManeoClientInjoignableVo() != null && this.templateEmailReportDemandeManeoClientInjoignable)
                item.setTemplateEmailReportDemandeManeoClientInjoignable(templateEmailReportDemandeManeoClientInjoignableConverter.toItem(vo.getTemplateEmailReportDemandeManeoClientInjoignableVo()));

            if (vo.getTemplateEmailReportDemandeManeoClientJoignableAccepteVo() != null && this.templateEmailReportDemandeManeoClientJoignableAccepte)
                item.setTemplateEmailReportDemandeManeoClientJoignableAccepte(templateEmailReportDemandeManeoClientJoignableAccepteConverter.toItem(vo.getTemplateEmailReportDemandeManeoClientJoignableAccepteVo()));

            if (vo.getTemplateEmailReportDemandeManeoClientJoignableRefusVo() != null && this.templateEmailReportDemandeManeoClientJoignableRefus)
                item.setTemplateEmailReportDemandeManeoClientJoignableRefus(templateEmailReportDemandeManeoClientJoignableRefusConverter.toItem(vo.getTemplateEmailReportDemandeManeoClientJoignableRefusVo()));

            if (vo.getTemplateEmailReportDemandeClientClientJoignableVo() != null && this.templateEmailReportDemandeClientClientJoignable)
                item.setTemplateEmailReportDemandeClientClientJoignable(templateEmailReportDemandeClientClientJoignableConverter.toItem(vo.getTemplateEmailReportDemandeClientClientJoignableVo()));

            if (vo.getTemplateEmailReportDemandeClientClientInjoignableVo() != null && this.templateEmailReportDemandeClientClientInjoignable)
                item.setTemplateEmailReportDemandeClientClientInjoignable(templateEmailReportDemandeClientClientInjoignableConverter.toItem(vo.getTemplateEmailReportDemandeClientClientInjoignableVo()));



            return item;
        }
    }

    @Override
    public DefaultTemplateConfigurationVo toVo(DefaultTemplateConfiguration item) {
        if (item == null) {
            return null;
        } else {
            DefaultTemplateConfigurationVo vo = new DefaultTemplateConfigurationVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getEmailKosc()))
                vo.setEmailKosc(item.getEmailKosc());

            if (StringUtil.isNotEmpty(item.getEmailManeo()))
                vo.setEmailManeo(item.getEmailManeo());

            vo.setEnabled(item.getEnabled());
            if (item.getTemplateEmailFtl() != null && this.templateEmailFtl) {
                vo.setTemplateEmailFtlVo(templateEmailFtlConverter.toVo(item.getTemplateEmailFtl()));
            }
            if (item.getTemplateEmailCloture() != null && this.templateEmailCloture) {
                vo.setTemplateEmailClotureVo(templateEmailClotureConverter.toVo(item.getTemplateEmailCloture()));
            }
            if (item.getTemplateSuivi() != null && this.templateSuivi) {
                vo.setTemplateSuiviVo(templateSuiviConverter.toVo(item.getTemplateSuivi()));
            }
            if (item.getTemplateEmailClientInjoinable() != null && this.templateEmailClientInjoinable) {
                vo.setTemplateEmailClientInjoinableVo(templateEmailClientInjoinableConverter.toVo(item.getTemplateEmailClientInjoinable()));
            }

            if (item.getTemplateEmailPlanification() != null && this.templateEmailPlanification) {
                vo.setTemplateEmailPlanificationVo(templateEmailPlanificationConverter.toVo(item.getTemplateEmailPlanification()));
            }
            if (item.getTemplateEmailReplanification() != null && this.templateEmailReplanification) {
                vo.setTemplateEmailReplanificationVo(templateEmailReplanificationConverter.toVo(item.getTemplateEmailReplanification()));
            }
            if (item.getTemplateEmailRefus() != null && this.templateEmailRefus) {
                vo.setTemplateEmailRefusVo(templateEmailRefusConverter.toVo(item.getTemplateEmailRefus()));
            }
            if (item.getTemplateEmailClientInjoinableKosc() != null && this.templateEmailClientInjoinableKosc) {
                vo.setTemplateEmailClientInjoinableKoscVo(templateEmailClientInjoinableKoscConverter.toVo(item.getTemplateEmailClientInjoinableKosc()));
            }
            if (item.getTemplateEmailConfirmationClient() != null && this.templateEmailConfirmationClient) {
                vo.setTemplateEmailConfirmationClientVo(templateEmailConfirmationClientConverter.toVo(item.getTemplateEmailConfirmationClient()));
            }
            if (item.getTemplateEmailMauvaisContact() != null && this.templateEmailMauvaisContact) {
                vo.setTemplateEmailMauvaisContactVo(templateEmailMauvaisContactConverter.toVo(item.getTemplateEmailMauvaisContact()));
            }
            if (item.getTemplateEmailCri() != null && this.templateEmailCri) {
                vo.setTemplateEmailCriVo(templateEmailCriConverter.toVo(item.getTemplateEmailCri()));
            }

            if (item.getTemplateEmailReportDemandeManeoClientInjoignable() != null && this.templateEmailReportDemandeManeoClientInjoignable) {
                vo.setTemplateEmailReportDemandeManeoClientInjoignableVo(templateEmailReportDemandeManeoClientInjoignableConverter.toVo(item.getTemplateEmailReportDemandeManeoClientInjoignable()));
            }

            if (item.getTemplateEmailReportDemandeManeoClientJoignableAccepte() != null && this.templateEmailReportDemandeManeoClientJoignableAccepte) {
                vo.setTemplateEmailReportDemandeManeoClientJoignableAccepteVo(templateEmailReportDemandeManeoClientJoignableAccepteConverter.toVo(item.getTemplateEmailReportDemandeManeoClientJoignableAccepte()));
            }

            if (item.getTemplateEmailReportDemandeManeoClientJoignableRefus() != null && this.templateEmailReportDemandeManeoClientJoignableRefus) {
                vo.setTemplateEmailReportDemandeManeoClientJoignableRefusVo(templateEmailReportDemandeManeoClientJoignableRefusConverter.toVo(item.getTemplateEmailReportDemandeManeoClientJoignableRefus()));
            }

            if (item.getTemplateEmailReportDemandeClientClientInjoignable() != null && this.templateEmailReportDemandeClientClientInjoignable) {
                vo.setTemplateEmailReportDemandeClientClientInjoignableVo(templateEmailReportDemandeClientClientInjoignableConverter.toVo(item.getTemplateEmailReportDemandeClientClientInjoignable()));
            }

            if (item.getTemplateEmailReportDemandeClientClientJoignable() != null && this.templateEmailReportDemandeClientClientJoignable) {
                vo.setTemplateEmailReportDemandeClientClientJoignableVo(templateEmailReportDemandeClientClientJoignableConverter.toVo(item.getTemplateEmailReportDemandeClientClientJoignable()));
            }

            return vo;
        }
    }

    public void init(Boolean value) {
        templateEmailFtl = value;
        templateEmailCloture = value;
        templateSuivi = value;
        templateEmailClientInjoinable = value;
        templateEmailPlanification = value;
        templateEmailReplanification = value;
        templateEmailRefus = value;
        templateEmailClientInjoinableKosc = value;
        templateEmailConfirmationClient = value;
        templateEmailMauvaisContact = value;
        templateEmailCri = value;
        templateEmailReportDemandeManeoClientInjoignable = value;
        templateEmailReportDemandeManeoClientJoignableAccepte = value;
        templateEmailReportDemandeManeoClientJoignableRefus = value;
        templateEmailReportDemandeClientClientInjoignable = value;
        templateEmailReportDemandeClientClientJoignable = value;
    }


    public TemplateEmailReplanificationConverter getTemplateEmailReplanificationConverter() {
        return this.templateEmailReplanificationConverter;
    }

    public void setTemplateEmailReplanificationConverter(TemplateEmailReplanificationConverter templateEmailReplanificationConverter) {
        this.templateEmailReplanificationConverter = templateEmailReplanificationConverter;
    }

    public TemplateEmailFtlConverter getTemplateEmailFtlConverter() {
        return this.templateEmailFtlConverter;
    }

    public void setTemplateEmailFtlConverter(TemplateEmailFtlConverter templateEmailFtlConverter) {
        this.templateEmailFtlConverter = templateEmailFtlConverter;
    }

    public TemplateEmailClotureConverter getTemplateEmailClotureConverter() {
        return this.templateEmailClotureConverter;
    }

    public void setTemplateEmailClotureConverter(TemplateEmailClotureConverter templateEmailClotureConverter) {
        this.templateEmailClotureConverter = templateEmailClotureConverter;
    }

    public TemplateEmailPlanificationConverter getTemplateEmailPlanificationConverter() {
        return this.templateEmailPlanificationConverter;
    }

    public void setTemplateEmailPlanificationConverter(TemplateEmailPlanificationConverter templateEmailPlanificationConverter) {
        this.templateEmailPlanificationConverter = templateEmailPlanificationConverter;
    }

    public TemplateSuiviConverter getTemplateSuiviConverter() {
        return this.templateSuiviConverter;
    }

    public void setTemplateSuiviConverter(TemplateSuiviConverter templateSuiviConverter) {
        this.templateSuiviConverter = templateSuiviConverter;
    }

    public TemplateEmailRefusConverter getTemplateEmailRefusConverter() {
        return this.templateEmailRefusConverter;
    }

    public void setTemplateEmailRefusConverter(TemplateEmailRefusConverter templateEmailRefusConverter) {
        this.templateEmailRefusConverter = templateEmailRefusConverter;
    }

    public TemplateEmailConfirmationClientConverter getTemplateEmailConfirmationClientConverter() {
        return this.templateEmailConfirmationClientConverter;
    }

    public void setTemplateEmailConfirmationClientConverter(TemplateEmailConfirmationClientConverter templateEmailConfirmationClientConverter) {
        this.templateEmailConfirmationClientConverter = templateEmailConfirmationClientConverter;
    }



    public TemplateEmailClientInjoinableKoscConverter getTemplateEmailClientInjoinableKoscConverter() {
        return this.templateEmailClientInjoinableKoscConverter;
    }

    public void setTemplateEmailClientInjoinableKoscConverter(TemplateEmailClientInjoinableKoscConverter templateEmailClientInjoinableKoscConverter) {
        this.templateEmailClientInjoinableKoscConverter = templateEmailClientInjoinableKoscConverter;
    }

    public TemplateEmailMauvaisContactConverter getTemplateEmailMauvaisContactConverter() {
        return this.templateEmailMauvaisContactConverter;
    }

    public void setTemplateEmailMauvaisContactConverter(TemplateEmailMauvaisContactConverter templateEmailMauvaisContactConverter) {
        this.templateEmailMauvaisContactConverter = templateEmailMauvaisContactConverter;
    }

    public TemplateEmailClientInjoinableConverter getTemplateEmailClientInjoinableConverter() {
        return this.templateEmailClientInjoinableConverter;
    }

    public void setTemplateEmailClientInjoinableConverter(TemplateEmailClientInjoinableConverter templateEmailClientInjoinableConverter) {
        this.templateEmailClientInjoinableConverter = templateEmailClientInjoinableConverter;
    }

    public TemplateEmailCriConverter getTemplateEmailCriConverter() {
        return this.templateEmailCriConverter;
    }

    public void setTemplateEmailCriConverter(TemplateEmailCriConverter templateEmailCriConverter) {
        this.templateEmailCriConverter = templateEmailCriConverter;
    }

    public TemplateEmailReportDemandeManeoClientInjoignableConverter getTemplateEmailReportDemandeManeoClientInjoignableConverter() {
        return templateEmailReportDemandeManeoClientInjoignableConverter;
    }

    public void setTemplateEmailReportDemandeManeoClientInjoignableConverter(TemplateEmailReportDemandeManeoClientInjoignableConverter templateEmailReportDemandeManeoClientInjoignableConverter) {
        this.templateEmailReportDemandeManeoClientInjoignableConverter = templateEmailReportDemandeManeoClientInjoignableConverter;
    }

    public TemplateEmailReportDemandeManeoClientJoignableAccepteConverter getTemplateEmailReportDemandeManeoClientJoignableAccepteConverter() {
        return templateEmailReportDemandeManeoClientJoignableAccepteConverter;
    }

    public void setTemplateEmailReportDemandeManeoClientJoignableAccepteConverter(TemplateEmailReportDemandeManeoClientJoignableAccepteConverter templateEmailReportDemandeManeoClientJoignableAccepteConverter) {
        this.templateEmailReportDemandeManeoClientJoignableAccepteConverter = templateEmailReportDemandeManeoClientJoignableAccepteConverter;
    }

    public TemplateEmailReportDemandeManeoClientJoignableRefusConverter getTemplateEmailReportDemandeManeoClientJoignableRefusConverter() {
        return templateEmailReportDemandeManeoClientJoignableRefusConverter;
    }

    public void setTemplateEmailReportDemandeManeoClientJoignableRefusConverter(TemplateEmailReportDemandeManeoClientJoignableRefusConverter templateEmailReportDemandeManeoClientJoignableRefusConverter) {
        this.templateEmailReportDemandeManeoClientJoignableRefusConverter = templateEmailReportDemandeManeoClientJoignableRefusConverter;
    }

    public TemplateEmailReportDemandeClientClientJoignableConverter getTemplateEmailReportDemandeClientClientJoignableConverter() {
        return templateEmailReportDemandeClientClientJoignableConverter;
    }

    public void setTemplateEmailReportDemandeClientClientJoignableConverter(TemplateEmailReportDemandeClientClientJoignableConverter templateEmailReportDemandeClientClientJoignableConverter) {
        this.templateEmailReportDemandeClientClientJoignableConverter = templateEmailReportDemandeClientClientJoignableConverter;
    }

    public TemplateEmailReportDemandeClientClientInjoignableConverter getTemplateEmailReportDemandeClientClientInjoignableConverter() {
        return templateEmailReportDemandeClientClientInjoignableConverter;
    }

    public void setTemplateEmailReportDemandeClientClientInjoignableConverter(TemplateEmailReportDemandeClientClientInjoignableConverter templateEmailReportDemandeClientClientInjoignableConverter) {
        this.templateEmailReportDemandeClientClientInjoignableConverter = templateEmailReportDemandeClientClientInjoignableConverter;
    }

    public boolean isTemplateEmailFtl() {
        return this.templateEmailFtl;
    }

    public void setTemplateEmailFtl(boolean templateEmailFtl) {
        this.templateEmailFtl = templateEmailFtl;
    }

    public boolean isTemplateEmailCloture() {
        return this.templateEmailCloture;
    }

    public void setTemplateEmailCloture(boolean templateEmailCloture) {
        this.templateEmailCloture = templateEmailCloture;
    }

    public boolean isTemplateSuivi() {
        return this.templateSuivi;
    }

    public void setTemplateSuivi(boolean templateSuivi) {
        this.templateSuivi = templateSuivi;
    }

    public boolean isTemplateEmailClientInjoinable() {
        return this.templateEmailClientInjoinable;
    }

    public void setTemplateEmailClientInjoinable(boolean templateEmailClientInjoinable) {
        this.templateEmailClientInjoinable = templateEmailClientInjoinable;
    }


    public boolean isTemplateEmailPlanification() {
        return this.templateEmailPlanification;
    }

    public void setTemplateEmailPlanification(boolean templateEmailPlanification) {
        this.templateEmailPlanification = templateEmailPlanification;
    }

    public boolean isTemplateEmailReplanification() {
        return this.templateEmailReplanification;
    }

    public void setTemplateEmailReplanification(boolean templateEmailReplanification) {
        this.templateEmailReplanification = templateEmailReplanification;
    }

    public boolean isTemplateEmailRefus() {
        return this.templateEmailRefus;
    }

    public void setTemplateEmailRefus(boolean templateEmailRefus) {
        this.templateEmailRefus = templateEmailRefus;
    }

    public boolean isTemplateEmailClientInjoinableKosc() {
        return this.templateEmailClientInjoinableKosc;
    }

    public void setTemplateEmailClientInjoinableKosc(boolean templateEmailClientInjoinableKosc) {
        this.templateEmailClientInjoinableKosc = templateEmailClientInjoinableKosc;
    }

    public boolean isTemplateEmailConfirmationClient() {
        return this.templateEmailConfirmationClient;
    }

    public void setTemplateEmailConfirmationClient(boolean templateEmailConfirmationClient) {
        this.templateEmailConfirmationClient = templateEmailConfirmationClient;
    }

    public boolean isTemplateEmailMauvaisContact() {
        return this.templateEmailMauvaisContact;
    }

    public void setTemplateEmailMauvaisContact(boolean templateEmailMauvaisContact) {
        this.templateEmailMauvaisContact = templateEmailMauvaisContact;
    }

    public boolean isTemplateEmailCri() {
        return this.templateEmailCri;
    }

    public void setTemplateEmailCri(boolean templateEmailCri) {
        this.templateEmailCri = templateEmailCri;
    }

    public boolean isTemplateEmailReportDemandeManeoClientInjoignable() {
        return this.templateEmailReportDemandeManeoClientInjoignable;
    }

    public void setTemplateEmailReportDemandeManeoClientInjoignable(boolean templateEmailReportDemandeManeoClientInjoignable) {
        this.templateEmailReportDemandeManeoClientInjoignable = templateEmailReportDemandeManeoClientInjoignable;
    }

    public boolean isTemplateEmailReportDemandeManeoClientJoignableAccepte() {
        return this.templateEmailReportDemandeManeoClientJoignableAccepte;
    }

    public void setTemplateEmailReportDemandeManeoClientJoignableAccepte(boolean templateEmailReportDemandeManeoClientJoignableAccepte) {
        this.templateEmailReportDemandeManeoClientJoignableAccepte = templateEmailReportDemandeManeoClientJoignableAccepte;
    }

    public boolean isTemplateEmailReportDemandeManeoClientJoignableRefus() {
        return this.templateEmailReportDemandeManeoClientJoignableRefus;
    }

    public void setTemplateEmailReportDemandeManeoClientJoignableRefus(boolean templateEmailReportDemandeManeoClientJoignableRefus) {
        this.templateEmailReportDemandeManeoClientJoignableRefus = templateEmailReportDemandeManeoClientJoignableRefus;
    }

    public boolean isTemplateEmailReportDemandeClientClientJoignable() {
        return this.templateEmailReportDemandeClientClientJoignable;
    }

    public void setTemplateEmailReportDemandeClientClientJoignable(boolean templateEmailReportDemandeClientClientJoignable) {
        this.templateEmailReportDemandeClientClientJoignable = templateEmailReportDemandeClientClientJoignable;
    }

    public boolean isTemplateEmailReportDemandeClientClientInjoignable() {
        return this.templateEmailReportDemandeClientClientInjoignable;
    }

    public void setTemplateEmailReportDemandeClientClientInjoignable(boolean templateEmailReportDemandeClientClientInjoignable) {
        this.templateEmailReportDemandeClientClientInjoignable = templateEmailReportDemandeClientClientInjoignable;
    }
}
