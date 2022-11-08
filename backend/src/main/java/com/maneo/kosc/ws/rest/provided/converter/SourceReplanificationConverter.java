package com.maneo.kosc.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.maneo.kosc.service.util.*;


import com.maneo.kosc.bean.SourceReplanification;
import com.maneo.kosc.ws.rest.provided.vo.SourceReplanificationVo;

@Component
public class SourceReplanificationConverter extends AbstractConverter<SourceReplanification, SourceReplanificationVo> {


    public SourceReplanificationConverter() {
        init(true);
    }

    @Override
    public SourceReplanification toItem(SourceReplanificationVo vo) {
        if (vo == null) {
            return null;
        } else {
            SourceReplanification item = new SourceReplanification();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));
            if (StringUtil.isNotEmpty(vo.getCode()))
                item.setCode(vo.getCode());
            if (StringUtil.isNotEmpty(vo.getLibelle()))
                item.setLibelle(vo.getLibelle());


            return item;
        }
    }

    @Override
    public SourceReplanificationVo toVo(SourceReplanification item) {
        if (item == null) {
            return null;
        } else {
            SourceReplanificationVo vo = new SourceReplanificationVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getCode()))
                vo.setCode(item.getCode());

            if (StringUtil.isNotEmpty(item.getLibelle()))
                vo.setLibelle(item.getLibelle());


            return vo;
        }
    }

    public void init(Boolean value) {
    }


}
