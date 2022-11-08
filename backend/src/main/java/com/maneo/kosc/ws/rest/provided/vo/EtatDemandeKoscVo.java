package com.maneo.kosc.ws.rest.provided.vo;


public class EtatDemandeKoscVo {

    private String id;
    private String code;
    private String libelle;

    private String style;



    public EtatDemandeKoscVo() {
        super();
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCode() {
        return this.code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getLibelle() {
        return this.libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }


}
