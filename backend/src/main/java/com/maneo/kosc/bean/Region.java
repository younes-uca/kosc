package com.maneo.kosc.bean;

import java.util.Objects;


import javax.persistence.*;


@Entity
@Table(name = "region")
public class Region {

    @Id
    @SequenceGenerator(name = "region_seq", sequenceName = "region_seq",
            allocationSize = 1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "region_seq")
    private Long id;

    @Column(length = 500)
    private String libelle;
    @Column(length = 500)
    private String code;


    public Region() {
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
        Region region = (Region) o;
        return id != null && id.equals(region.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

