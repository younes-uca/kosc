package com.maneo.kosc.ws.rest.provided.converter.technicien;

import com.maneo.kosc.ws.rest.provided.converter.AbstractConverter;
import org.springframework.stereotype.Component;
import com.maneo.kosc.service.util.*;


import com.maneo.kosc.bean.technicien.Region;
import com.maneo.kosc.ws.rest.provided.vo.technicien.RegionVo;

@Component
public class RegionConverter extends AbstractConverter<Region, RegionVo> {


    public RegionConverter() {
        init(true);
    }

    @Override
    public Region toItem(RegionVo vo) {
        if (vo == null) {
            return null;
        } else {
            Region item = new Region();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));
            if (StringUtil.isNotEmpty(vo.getLibelle()))
                item.setLibelle(vo.getLibelle());
            if (StringUtil.isNotEmpty(vo.getCode()))
                item.setCode(vo.getCode());


            return item;
        }
    }

    @Override
    public RegionVo toVo(Region item) {
        if (item == null) {
            return null;
        } else {
            RegionVo vo = new RegionVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getLibelle()))
                vo.setLibelle(item.getLibelle());

            if (StringUtil.isNotEmpty(item.getCode()))
                vo.setCode(item.getCode());


            return vo;
        }
    }

    public void init(Boolean value) {
    }


}
