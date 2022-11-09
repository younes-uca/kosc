package com.maneo.kosc.ws.rest.provided.vo;

public class JourFerieVo {

    private String id;
    private String dateDebut;
    private String dateFin;
    private String libelle;


    private String dateDebutMax;
    private String dateDebutMin;
    private String dateFinMax;
    private String dateFinMin;


    public JourFerieVo() {
        super();
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDateDebut() {
        return this.dateDebut;
    }

    public void setDateDebut(String dateDebut) {
        this.dateDebut = dateDebut;
    }

    public String getDateFin() {
        return this.dateFin;
    }

    public void setDateFin(String dateFin) {
        this.dateFin = dateFin;
    }

    public String getLibelle() {
        return this.libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }


    public String getDateDebutMax() {
        return this.dateDebutMax;
    }

    public String getDateDebutMin() {
        return this.dateDebutMin;
    }

    public void setDateDebutMax(String dateDebutMax) {
        this.dateDebutMax = dateDebutMax;
    }

    public void setDateDebutMin(String dateDebutMin) {
        this.dateDebutMin = dateDebutMin;
    }

    public String getDateFinMax() {
        return this.dateFinMax;
    }

    public String getDateFinMin() {
        return this.dateFinMin;
    }

    public void setDateFinMax(String dateFinMax) {
        this.dateFinMax = dateFinMax;
    }

    public void setDateFinMin(String dateFinMin) {
        this.dateFinMin = dateFinMin;
    }




}
