package com.maneo.kosc.bean;

import java.util.List;
import java.util.Objects;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;

import com.maneo.kosc.security.bean.User;


@Entity
@Table(name = "technicien")
public class Technicien extends User {


    public Technicien(String username) {
        super(username);
    }

    @Column(length = 500)
    private String cellPhone;
    @Column(length = 500)
    private String email;
    @Column(length = 500)
    private String emailAttachement;
    @Column(length = 500)
    private String identifiant;
    @Column(length = 500)
    private String motPasse;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String adresseOnt;
    @Column(columnDefinition = "boolean default false")
    private boolean credentialsNonExpired = false;
    @Column(columnDefinition = "boolean default false")
    private boolean enabled = false;
    @Column(columnDefinition = "boolean default false")
    private boolean accountNonExpired = false;
    @Column(columnDefinition = "boolean default false")
    private boolean accountNonLocked = false;
    @Column(columnDefinition = "boolean default false")
    private boolean passwordChanged = false;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date createdAt;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date updatedAt;
    @Column(length = 500)
    private String username;
    @Column(length = 500)
    private String password;
    @Column(length = 500)
    private String prenom;
    @Column(length = 500)
    private String nom;

    @ManyToOne
    private Entreprise entreprise;




    public Technicien() {
        super();
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCellPhone() {
        return this.cellPhone;
    }

    public void setCellPhone(String cellPhone) {
        this.cellPhone = cellPhone;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmailAttachement() {
        return this.emailAttachement;
    }

    public void setEmailAttachement(String emailAttachement) {
        this.emailAttachement = emailAttachement;
    }

    public Entreprise getEntreprise() {
        return this.entreprise;
    }

    public void setEntreprise(Entreprise entreprise) {
        this.entreprise = entreprise;
    }

    public String getIdentifiant() {
        return this.identifiant;
    }

    public void setIdentifiant(String identifiant) {
        this.identifiant = identifiant;
    }

    public String getMotPasse() {
        return this.motPasse;
    }

    public void setMotPasse(String motPasse) {
        this.motPasse = motPasse;
    }

    public String getAdresseOnt() {
        return this.adresseOnt;
    }

    public void setAdresseOnt(String adresseOnt) {
        this.adresseOnt = adresseOnt;
    }

    public boolean getCredentialsNonExpired() {
        return this.credentialsNonExpired;
    }

    public void setCredentialsNonExpired(boolean credentialsNonExpired) {
        this.credentialsNonExpired = credentialsNonExpired;
    }

    public boolean getEnabled() {
        return this.enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public boolean getAccountNonExpired() {
        return this.accountNonExpired;
    }

    public void setAccountNonExpired(boolean accountNonExpired) {
        this.accountNonExpired = accountNonExpired;
    }

    public boolean getAccountNonLocked() {
        return this.accountNonLocked;
    }

    public void setAccountNonLocked(boolean accountNonLocked) {
        this.accountNonLocked = accountNonLocked;
    }

    public boolean getPasswordChanged() {
        return this.passwordChanged;
    }

    public void setPasswordChanged(boolean passwordChanged) {
        this.passwordChanged = passwordChanged;
    }

    public Date getCreatedAt() {
        return this.createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return this.updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPrenom() {
        return this.prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getNom() {
        return this.nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Technicien technicien = (Technicien) o;
        return id != null && id.equals(technicien.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

