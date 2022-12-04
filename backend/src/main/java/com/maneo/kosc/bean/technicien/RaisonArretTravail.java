package com.maneo.kosc.bean.technicien;

import java.util.Objects;


import javax.persistence.*;


@Entity
@Table(name = "raison_arret_travail")
public class RaisonArretTravail {

    @Id
    @SequenceGenerator(name = "raison_arret_travail_seq", sequenceName = "raison_arret_travail_seq",
            allocationSize = 1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "raison_arret_travail_seq")
    private Long id;

    @Column(length = 500)
    private String libelle;
    @Column(length = 500)
    private String code;


    public RaisonArretTravail() {
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

    public String getCode() {
        return this.code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RaisonArretTravail raisonArretTravail = (RaisonArretTravail) o;
        return id != null && id.equals(raisonArretTravail.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

