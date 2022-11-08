package com.maneo.kosc.bean;

import java.util.List;
import java.util.Objects;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;


@Entity
@Table(name = "departement_technicien")
public class DepartementTechnicien {

    @Id
    @SequenceGenerator(name = "departement_technicien_seq", sequenceName = "departement_technicien_seq",
            allocationSize = 1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "departement_technicien_seq")
    private Long id;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateDebut;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateFin;

    @ManyToOne
    private Technicien technicien;
    @ManyToOne
    private Departement departement;
    @Transient
    private List<ArretTravail> arretTravails;

    public List<ArretTravail> getArretTravails() {
        return arretTravails;
    }

    public void setArretTravails(List<ArretTravail> arretTravails) {
        this.arretTravails = arretTravails;
    }


    public DepartementTechnicien() {
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

    public Departement getDepartement() {
        return this.departement;
    }

    public void setDepartement(Departement departement) {
        this.departement = departement;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DepartementTechnicien departementTechnicien = (DepartementTechnicien) o;
        return id != null && id.equals(departementTechnicien.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

