package com.maneo.kosc.ws.rest.provided.vo.template;


public class TemplateEmailMauvaisContactVo {

    private String id;
    private String libelle;
    private String objet;
    private String corps;


    public TemplateEmailMauvaisContactVo() {
        super();
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
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


}
