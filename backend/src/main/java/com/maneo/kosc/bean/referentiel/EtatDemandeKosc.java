package com.maneo.kosc.bean.referentiel;

import java.util.Objects;


import javax.persistence.*;


@Entity
@Table(name = "etat_demande_kosc")
public class EtatDemandeKosc {

    @Id
    @SequenceGenerator(name = "etat_demande_kosc_seq", sequenceName = "etat_demande_kosc_seq",
            allocationSize = 1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "etat_demande_kosc_seq")
    private Long id;

    @Column(length = 500)
    private String code;
    @Column(length = 500)
    private String libelle;


    @Column(length = 500)
    private String style;


    public EtatDemandeKosc() {
        super();
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EtatDemandeKosc etatDemandeKosc = (EtatDemandeKosc) o;
        return id != null && id.equals(etatDemandeKosc.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

