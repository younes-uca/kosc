package com.maneo.kosc.bean;

import javax.persistence.*;
import java.util.Objects;


@Entity
@Table(name = "default_template_configuration")
public class DefaultTemplateConfiguration {

    @Id
    @SequenceGenerator(name = "default_template_configuration_seq", sequenceName = "default_template_configuration_seq",
            allocationSize = 1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "default_template_configuration_seq")
    private Long id;

    @Column(length = 500)
    private String emailKosc;
    @Column(length = 500)
    private String emailManeo;
    @Column(columnDefinition = "boolean default false")
    private Boolean enabled = false;

    @ManyToOne
    private TemplateEmailFtl templateEmailFtl;
    @ManyToOne
    private TemplateEmailCloture templateEmailCloture;
    @ManyToOne
    private TemplateSuivi templateSuivi;
    @ManyToOne
    private TemplateEmailClientInjoinable templateEmailClientInjoinable;
    @ManyToOne
    private TemplateEmailReport templateEmailReport;
    @ManyToOne
    private TemplateEmailPlanification templateEmailPlanification;
    @ManyToOne
    private TemplateEmailReplanification templateEmailReplanification;
    @ManyToOne
    private TemplateEmailRefus templateEmailRefus;
    @ManyToOne
    private TemplateEmailClientInjoinableKosc templateEmailClientInjoinableKosc;
    @ManyToOne
    private TemplateEmailConfirmationClient templateEmailConfirmationClient;
    @ManyToOne
    private TemplateEmailMauvaisContact templateEmailMauvaisContact;
    @ManyToOne
    private TemplateEmailCri templateEmailCri;


    public DefaultTemplateConfiguration() {
        super();
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmailKosc() {
        return this.emailKosc;
    }

    public void setEmailKosc(String emailKosc) {
        this.emailKosc = emailKosc;
    }

    public String getEmailManeo() {
        return this.emailManeo;
    }

    public void setEmailManeo(String emailManeo) {
        this.emailManeo = emailManeo;
    }

    public TemplateEmailFtl getTemplateEmailFtl() {
        return this.templateEmailFtl;
    }

    public void setTemplateEmailFtl(TemplateEmailFtl templateEmailFtl) {
        this.templateEmailFtl = templateEmailFtl;
    }

    public TemplateEmailCloture getTemplateEmailCloture() {
        return this.templateEmailCloture;
    }

    public void setTemplateEmailCloture(TemplateEmailCloture templateEmailCloture) {
        this.templateEmailCloture = templateEmailCloture;
    }

    public TemplateSuivi getTemplateSuivi() {
        return this.templateSuivi;
    }

    public void setTemplateSuivi(TemplateSuivi templateSuivi) {
        this.templateSuivi = templateSuivi;
    }

    public TemplateEmailClientInjoinable getTemplateEmailClientInjoinable() {
        return this.templateEmailClientInjoinable;
    }

    public void setTemplateEmailClientInjoinable(TemplateEmailClientInjoinable templateEmailClientInjoinable) {
        this.templateEmailClientInjoinable = templateEmailClientInjoinable;
    }

    public TemplateEmailReport getTemplateEmailReport() {
        return this.templateEmailReport;
    }

    public void setTemplateEmailReport(TemplateEmailReport templateEmailReport) {
        this.templateEmailReport = templateEmailReport;
    }

    public TemplateEmailPlanification getTemplateEmailPlanification() {
        return this.templateEmailPlanification;
    }

    public void setTemplateEmailPlanification(TemplateEmailPlanification templateEmailPlanification) {
        this.templateEmailPlanification = templateEmailPlanification;
    }

    public TemplateEmailReplanification getTemplateEmailReplanification() {
        return this.templateEmailReplanification;
    }

    public void setTemplateEmailReplanification(TemplateEmailReplanification templateEmailReplanification) {
        this.templateEmailReplanification = templateEmailReplanification;
    }

    public TemplateEmailRefus getTemplateEmailRefus() {
        return this.templateEmailRefus;
    }

    public void setTemplateEmailRefus(TemplateEmailRefus templateEmailRefus) {
        this.templateEmailRefus = templateEmailRefus;
    }

    public TemplateEmailClientInjoinableKosc getTemplateEmailClientInjoinableKosc() {
        return this.templateEmailClientInjoinableKosc;
    }

    public void setTemplateEmailClientInjoinableKosc(TemplateEmailClientInjoinableKosc templateEmailClientInjoinableKosc) {
        this.templateEmailClientInjoinableKosc = templateEmailClientInjoinableKosc;
    }

    public TemplateEmailConfirmationClient getTemplateEmailConfirmationClient() {
        return this.templateEmailConfirmationClient;
    }

    public void setTemplateEmailConfirmationClient(TemplateEmailConfirmationClient templateEmailConfirmationClient) {
        this.templateEmailConfirmationClient = templateEmailConfirmationClient;
    }

    public TemplateEmailMauvaisContact getTemplateEmailMauvaisContact() {
        return this.templateEmailMauvaisContact;
    }

    public void setTemplateEmailMauvaisContact(TemplateEmailMauvaisContact templateEmailMauvaisContact) {
        this.templateEmailMauvaisContact = templateEmailMauvaisContact;
    }

    public TemplateEmailCri getTemplateEmailCri() {
        return this.templateEmailCri;
    }

    public void setTemplateEmailCri(TemplateEmailCri templateEmailCri) {
        this.templateEmailCri = templateEmailCri;
    }

    public boolean getEnabled() {
        return this.enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DefaultTemplateConfiguration defaultTemplateConfiguration = (DefaultTemplateConfiguration) o;
        return id != null && id.equals(defaultTemplateConfiguration.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

