package com.maneo.kosc.bean.technicien;

import java.util.Objects;


import javax.persistence.*;


@Entity
@Table(name = "entreprise")
public class Entreprise {

    @Id
    @SequenceGenerator(name = "entreprise_seq", sequenceName = "entreprise_seq",
            allocationSize = 1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "entreprise_seq")
    private Long id;

    @Column(length = 500)
    private String libelle;
    @Column(length = 500)
    private String code;


    public Entreprise() {
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
        Entreprise entreprise = (Entreprise) o;
        return id != null && id.equals(entreprise.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

