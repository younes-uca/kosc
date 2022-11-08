package com.maneo.kosc.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.maneo.kosc.service.util.*;


import com.maneo.kosc.bean.TemplateEmailCri;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailCriVo;

@Component
public class TemplateEmailCriConverter extends AbstractConverter<TemplateEmailCri, TemplateEmailCriVo> {


    public TemplateEmailCriConverter() {
        init(true);
    }

    @Override
    public TemplateEmailCri toItem(TemplateEmailCriVo vo) {
        if (vo == null) {
            return null;
        } else {
            TemplateEmailCri item = new TemplateEmailCri();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));
            if (StringUtil.isNotEmpty(vo.getLibelle()))
                item.setLibelle(vo.getLibelle());
            if (StringUtil.isNotEmpty(vo.getObjet()))
                item.setObjet(vo.getObjet());
            if (StringUtil.isNotEmpty(vo.getCorps()))
                item.setCorps(vo.getCorps());


            return item;
        }
    }

    @Override
    public TemplateEmailCriVo toVo(TemplateEmailCri item) {
        if (item == null) {
            return null;
        } else {
            TemplateEmailCriVo vo = new TemplateEmailCriVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getLibelle()))
                vo.setLibelle(item.getLibelle());

            if (StringUtil.isNotEmpty(item.getObjet()))
                vo.setObjet(item.getObjet());

            if (StringUtil.isNotEmpty(item.getCorps()))
                vo.setCorps(item.getCorps());


            return vo;
        }
    }

    public void init(Boolean value) {
    }


}
