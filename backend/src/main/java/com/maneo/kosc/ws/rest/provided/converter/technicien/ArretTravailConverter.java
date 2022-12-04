package com.maneo.kosc.ws.rest.provided.converter.technicien;

import com.maneo.kosc.ws.rest.provided.converter.AbstractConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.maneo.kosc.service.util.*;


import com.maneo.kosc.bean.technicien.ArretTravail;
import com.maneo.kosc.ws.rest.provided.vo.technicien.ArretTravailVo;

@Component
public class ArretTravailConverter extends AbstractConverter<ArretTravail, ArretTravailVo> {

    @Autowired
    private RaisonArretTravailConverter raisonArretTravailConverter;
    @Autowired
    private TechnicienConverter technicienConverter;
    private Boolean technicien;
    private Boolean raisonArretTravail;

    public ArretTravailConverter() {
        init(true);
    }

    @Override
    public ArretTravail toItem(ArretTravailVo vo) {
        if (vo == null) {
            return null;
        } else {
            ArretTravail item = new ArretTravail();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));
            if (StringUtil.isNotEmpty(vo.getDateDebut()))
                item.setDateDebut(DateUtil.parse(vo.getDateDebut()));
            if (StringUtil.isNotEmpty(vo.getDateFin()))
                item.setDateFin(DateUtil.parse(vo.getDateFin()));
            if (StringUtil.isNotEmpty(vo.getComment()))
                item.setComment(vo.getComment());
            if (vo.getTechnicienVo() != null && this.technicien)
                item.setTechnicien(technicienConverter.toItem(vo.getTechnicienVo()));
            if (vo.getRaisonArretTravailVo() != null && this.raisonArretTravail)
                item.setRaisonArretTravail(raisonArretTravailConverter.toItem(vo.getRaisonArretTravailVo()));


            return item;
        }
    }

    @Override
    public ArretTravailVo toVo(ArretTravail item) {
        if (item == null) {
            return null;
        } else {
            ArretTravailVo vo = new ArretTravailVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (item.getDateDebut() != null)
                vo.setDateDebut(DateUtil.formateDate(item.getDateDebut()));
            if (item.getDateFin() != null)
                vo.setDateFin(DateUtil.formateDate(item.getDateFin()));
            if (StringUtil.isNotEmpty(item.getComment()))
                vo.setComment(item.getComment());

            if (item.getTechnicien() != null && this.technicien) {
                vo.setTechnicienVo(technicienConverter.toVo(item.getTechnicien()));
            }
            if (item.getRaisonArretTravail() != null && this.raisonArretTravail) {
                vo.setRaisonArretTravailVo(raisonArretTravailConverter.toVo(item.getRaisonArretTravail()));
            }

            return vo;
        }
    }

    public void init(Boolean value) {
        technicien = value;
        raisonArretTravail = value;
    }


    public RaisonArretTravailConverter getRaisonArretTravailConverter() {
        return this.raisonArretTravailConverter;
    }

    public void setRaisonArretTravailConverter(RaisonArretTravailConverter raisonArretTravailConverter) {
        this.raisonArretTravailConverter = raisonArretTravailConverter;
    }

    public TechnicienConverter getTechnicienConverter() {
        return this.technicienConverter;
    }

    public void setTechnicienConverter(TechnicienConverter technicienConverter) {
        this.technicienConverter = technicienConverter;
    }

    public boolean isTechnicien() {
        return this.technicien;
    }

    public void setTechnicien(boolean technicien) {
        this.technicien = technicien;
    }

    public boolean isRaisonArretTravail() {
        return this.raisonArretTravail;
    }

    public void setRaisonArretTravail(boolean raisonArretTravail) {
        this.raisonArretTravail = raisonArretTravail;
    }


}
