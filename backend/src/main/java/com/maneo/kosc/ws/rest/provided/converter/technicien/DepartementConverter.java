package com.maneo.kosc.ws.rest.provided.converter.technicien;

import com.maneo.kosc.ws.rest.provided.converter.AbstractConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.maneo.kosc.service.util.*;


import com.maneo.kosc.bean.technicien.Departement;
import com.maneo.kosc.ws.rest.provided.vo.technicien.DepartementVo;

@Component
public class DepartementConverter extends AbstractConverter<Departement, DepartementVo> {

    @Autowired
    private RegionConverter regionConverter;
    private Boolean region;

    public DepartementConverter() {
        init(true);
    }

    @Override
    public Departement toItem(DepartementVo vo) {
        if (vo == null) {
            return null;
        } else {
            Departement item = new Departement();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));
            if (StringUtil.isNotEmpty(vo.getLibelle()))
                item.setLibelle(vo.getLibelle());
            if (StringUtil.isNotEmpty(vo.getCode()))
                item.setCode(vo.getCode());
            if (vo.getRegionVo() != null && this.region)
                item.setRegion(regionConverter.toItem(vo.getRegionVo()));


            return item;
        }
    }

    @Override
    public DepartementVo toVo(Departement item) {
        if (item == null) {
            return null;
        } else {
            DepartementVo vo = new DepartementVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getLibelle()))
                vo.setLibelle(item.getLibelle());

            if (StringUtil.isNotEmpty(item.getCode()))
                vo.setCode(item.getCode());

            if (item.getRegion() != null && this.region) {
                vo.setRegionVo(regionConverter.toVo(item.getRegion()));
            }

            return vo;
        }
    }

    public void init(Boolean value) {
        region = value;
    }


    public RegionConverter getRegionConverter() {
        return this.regionConverter;
    }

    public void setRegionConverter(RegionConverter regionConverter) {
        this.regionConverter = regionConverter;
    }

    public boolean isRegion() {
        return this.region;
    }

    public void setRegion(boolean region) {
        this.region = region;
    }


}
