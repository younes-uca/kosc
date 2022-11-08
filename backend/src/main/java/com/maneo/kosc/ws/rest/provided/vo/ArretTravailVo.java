package com.maneo.kosc.ws.rest.provided.vo;

import java.util.Date;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

public class ArretTravailVo {

    private String id;
    private String dateDebut;
    private String dateFin;
    private String comment;


    private String dateDebutMax;
    private String dateDebutMin;
    private String dateFinMax;
    private String dateFinMin;

    private TechnicienVo technicienVo;
    private RaisonArretTravailVo raisonArretTravailVo;


    public ArretTravailVo() {
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

    public String getComment() {
        return this.comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
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


    public TechnicienVo getTechnicienVo() {
        return this.technicienVo;
    }

    public void setTechnicienVo(TechnicienVo technicienVo) {
        this.technicienVo = technicienVo;
    }

    public RaisonArretTravailVo getRaisonArretTravailVo() {
        return this.raisonArretTravailVo;
    }

    public void setRaisonArretTravailVo(RaisonArretTravailVo raisonArretTravailVo) {
        this.raisonArretTravailVo = raisonArretTravailVo;
    }


}
