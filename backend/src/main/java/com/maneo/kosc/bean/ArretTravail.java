package com.maneo.kosc.bean;

import java.util.Objects;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;


@Entity
@Table(name = "arret_travail")
public class ArretTravail {

    @Id
    @SequenceGenerator(name = "arret_travail_seq", sequenceName = "arret_travail_seq",
            allocationSize = 1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "arret_travail_seq")
    private Long id;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateDebut;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateFin;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String comment;

    @ManyToOne
    private Technicien technicien;
    @ManyToOne
    private RaisonArretTravail raisonArretTravail;


    public ArretTravail() {
        super();
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Technicien getTechnicien() {
        return this.technicien;
    }

    public void setTechnicien(Technicien technicien) {
        this.technicien = technicien;
    }

    public Date getDateDebut() {
        return this.dateDebut;
    }

    public void setDateDebut(Date dateDebut) {
        this.dateDebut = dateDebut;
    }

    public Date getDateFin() {
        return this.dateFin;
    }

    public void setDateFin(Date dateFin) {
        this.dateFin = dateFin;
    }

    public RaisonArretTravail getRaisonArretTravail() {
        return this.raisonArretTravail;
    }

    public void setRaisonArretTravail(RaisonArretTravail raisonArretTravail) {
        this.raisonArretTravail = raisonArretTravail;
    }

    public String getComment() {
        return this.comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ArretTravail arretTravail = (ArretTravail) o;
        return id != null && id.equals(arretTravail.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

