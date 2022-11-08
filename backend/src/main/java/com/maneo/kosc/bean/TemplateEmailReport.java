package com.maneo.kosc.bean;

import java.util.Objects;


import javax.persistence.*;


@Entity
@Table(name = "template_email_report")
public class TemplateEmailReport {

    @Id
    @SequenceGenerator(name = "template_email_report_seq", sequenceName = "template_email_report_seq",
            allocationSize = 1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "template_email_report_seq")
    private Long id;

    @Column(length = 500)
    private String libelle;
    @Column(length = 500)
    private String objet;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String corps;


    public TemplateEmailReport() {
        super();
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLibelle() {
        return this.libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public String getObjet() {
        return this.objet;
    }

    public void setObjet(String objet) {
        this.objet = objet;
    }

    public String getCorps() {
        return this.corps;
    }

    public void setCorps(String corps) {
        this.corps = corps;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TemplateEmailReport templateEmailReport = (TemplateEmailReport) o;
        return id != null && id.equals(templateEmailReport.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

