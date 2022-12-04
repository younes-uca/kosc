package com.maneo.kosc.bean.template;

public class EmailDetails {
    private String from;
    private String to;
    private String objet;
    private String corps;


    public EmailDetails() {
    }

    public EmailDetails(String from, String to, String objet, String corps) {
        this.from = from;
        this.to = to;
        this.objet = objet;
        this.corps = corps;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getObjet() {
        return objet;
    }

    public void setObjet(String objet) {
        this.objet = objet;
    }

    public String getCorps() {
        return corps;
    }

    public void setCorps(String corps) {
        this.corps = corps;
    }
}
