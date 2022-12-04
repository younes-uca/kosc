package com.maneo.kosc.ws.rest.provided.converter.technicien;

import com.maneo.kosc.ws.rest.provided.converter.AbstractConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.maneo.kosc.service.util.*;


import com.maneo.kosc.bean.technicien.DepartementTechnicien;
import com.maneo.kosc.ws.rest.provided.vo.technicien.DepartementTechnicienVo;

@Component
public class DepartementTechnicienConverter extends AbstractConverter<DepartementTechnicien, DepartementTechnicienVo> {

    @Autowired
    private DepartementConverter departementConverter;
    @Autowired
    private TechnicienConverter technicienConverter;
    private Boolean technicien;
    private Boolean departement;
    @Autowired
    private ArretTravailConverter arretTravailConverter;

    public DepartementTechnicienConverter() {
        init(true);
    }

    @Override
    public DepartementTechnicien toItem(DepartementTechnicienVo vo) {
        if (vo == null) {
            return null;
        } else {
            DepartementTechnicien item = new DepartementTechnicien();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));
            if (StringUtil.isNotEmpty(vo.getDateDebut()))
                item.setDateDebut(DateUtil.parse(vo.getDateDebut()));
            if (StringUtil.isNotEmpty(vo.getDateFin()))
                item.setDateFin(DateUtil.parse(vo.getDateFin()));
            if (vo.getTechnicienVo() != null && this.technicien)
                item.setTechnicien(technicienConverter.toItem(vo.getTechnicienVo()));
            if (vo.getDepartementVo() != null && this.departement)
                item.setDepartement(departementConverter.toItem(vo.getDepartementVo()));
            if (vo.getArretTravailVos() != null )
                item.setArretTravails(arretTravailConverter.toItem(vo.getArretTravailVos()));


            return item;
        }
    }

    @Override
    public DepartementTechnicienVo toVo(DepartementTechnicien item) {
        if (item == null) {
            return null;
        } else {
            DepartementTechnicienVo vo = new DepartementTechnicienVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (item.getDateDebut() != null)
                vo.setDateDebut(DateUtil.formateDate(item.getDateDebut()));
            if (item.getDateFin() != null)
                vo.setDateFin(DateUtil.formateDate(item.getDateFin()));
            if (item.getTechnicien() != null && this.technicien) {
                vo.setTechnicienVo(technicienConverter.toVo(item.getTechnicien()));
            }
            if (item.getDepartement() != null && this.departement) {
                vo.setDepartementVo(departementConverter.toVo(item.getDepartement()));
            }
            if (item.getArretTravails() != null ) {
                vo.setArretTravailVos(arretTravailConverter.toVo(item.getArretTravails()));
            }

            return vo;
        }
    }

    public void init(Boolean value) {
        technicien = value;
        departement = value;
    }


    public DepartementConverter getDepartementConverter() {
        return this.departementConverter;
    }

    public void setDepartementConverter(DepartementConverter departementConverter) {
        this.departementConverter = departementConverter;
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

    public boolean isDepartement() {
        return this.departement;
    }

    public void setDepartement(boolean departement) {
        this.departement = departement;
    }


}
