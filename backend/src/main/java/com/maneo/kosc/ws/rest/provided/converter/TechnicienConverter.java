package com.maneo.kosc.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.maneo.kosc.service.util.*;


import com.maneo.kosc.bean.technicien.Technicien;
import com.maneo.kosc.ws.rest.provided.vo.TechnicienVo;

@Component
public class TechnicienConverter extends AbstractConverter<Technicien, TechnicienVo> {

    @Autowired
    private EntrepriseConverter entrepriseConverter;

    private Boolean entreprise;

    public TechnicienConverter() {
        init(true);
    }

    @Override
    public Technicien toItem(TechnicienVo vo) {
        if (vo == null) {
            return null;
        } else {
            Technicien item = new Technicien();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));
            if (StringUtil.isNotEmpty(vo.getCellPhone()))
                item.setCellPhone(vo.getCellPhone());
            if (StringUtil.isNotEmpty(vo.getEmail()))
                item.setEmail(vo.getEmail());
            if (StringUtil.isNotEmpty(vo.getEmailAttachement()))
                item.setEmailAttachement(vo.getEmailAttachement());
            if (StringUtil.isNotEmpty(vo.getIdentifiant()))
                item.setIdentifiant(vo.getIdentifiant());
            if (StringUtil.isNotEmpty(vo.getMotPasse()))
                item.setMotPasse(vo.getMotPasse());
            if (StringUtil.isNotEmpty(vo.getAdresseOnt()))
                item.setAdresseOnt(vo.getAdresseOnt());
            if(vo.getCredentialsNonExpired()==null)
                item.setCredentialsNonExpired(false);
            else{
            item.setCredentialsNonExpired(vo.getCredentialsNonExpired());}
            /*item.setEnabled(vo.getEnabled());
            item.setAccountNonExpired(vo.getAccountNonExpired());
            item.setAccountNonLocked(vo.getAccountNonLocked());
            item.setPasswordChanged(vo.getPasswordChanged());*/
            if (StringUtil.isNotEmpty(vo.getCreatedAt()))
                item.setCreatedAt(DateUtil.parse(vo.getCreatedAt()));
            if (StringUtil.isNotEmpty(vo.getUpdatedAt()))
                item.setUpdatedAt(DateUtil.parse(vo.getUpdatedAt()));
            if (StringUtil.isNotEmpty(vo.getUsername()))
                item.setUsername(vo.getUsername());
            if (StringUtil.isNotEmpty(vo.getPassword()))
                item.setPassword(vo.getPassword());
            if (StringUtil.isNotEmpty(vo.getPrenom()))
                item.setPrenom(vo.getPrenom());
            if (StringUtil.isNotEmpty(vo.getNom()))
                item.setNom(vo.getNom());
            if (vo.getEntrepriseVo() != null && this.entreprise)
                item.setEntreprise(entrepriseConverter.toItem(vo.getEntrepriseVo()));



            return item;
        }
    }

    @Override
    public TechnicienVo toVo(Technicien item) {
        if (item == null) {
            return null;
        } else {
            TechnicienVo vo = new TechnicienVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getCellPhone()))
                vo.setCellPhone(item.getCellPhone());

            if (StringUtil.isNotEmpty(item.getEmail()))
                vo.setEmail(item.getEmail());

            if (StringUtil.isNotEmpty(item.getEmailAttachement()))
                vo.setEmailAttachement(item.getEmailAttachement());

            if (StringUtil.isNotEmpty(item.getIdentifiant()))
                vo.setIdentifiant(item.getIdentifiant());

            if (StringUtil.isNotEmpty(item.getMotPasse()))
                vo.setMotPasse(item.getMotPasse());

            if (StringUtil.isNotEmpty(item.getAdresseOnt()))
                vo.setAdresseOnt(item.getAdresseOnt());

            vo.setCredentialsNonExpired(item.getCredentialsNonExpired());
            vo.setEnabled(item.getEnabled());
            vo.setAccountNonExpired(item.getAccountNonExpired());
            vo.setAccountNonLocked(item.getAccountNonLocked());
            vo.setPasswordChanged(item.getPasswordChanged());
            if (item.getCreatedAt() != null)
                vo.setCreatedAt(DateUtil.formateDate(item.getCreatedAt()));
            if (item.getUpdatedAt() != null)
                vo.setUpdatedAt(DateUtil.formateDate(item.getUpdatedAt()));
            if (StringUtil.isNotEmpty(item.getUsername()))
                vo.setUsername(item.getUsername());

            if (StringUtil.isNotEmpty(item.getPassword()))
                vo.setPassword(item.getPassword());

            if (StringUtil.isNotEmpty(item.getPrenom()))
                vo.setPrenom(item.getPrenom());

            if (StringUtil.isNotEmpty(item.getNom()))
                vo.setNom(item.getNom());

            if (item.getEntreprise() != null && this.entreprise) {
                vo.setEntrepriseVo(entrepriseConverter.toVo(item.getEntreprise()));
            }


            return vo;
        }
    }

    public void init(Boolean value) {
        entreprise = value;
    }


    public EntrepriseConverter getEntrepriseConverter() {
        return this.entrepriseConverter;
    }

    public void setEntrepriseConverter(EntrepriseConverter entrepriseConverter) {
        this.entrepriseConverter = entrepriseConverter;
    }

    public boolean isEntreprise() {
        return this.entreprise;
    }

    public void setEntreprise(boolean entreprise) {
        this.entreprise = entreprise;
    }


}
