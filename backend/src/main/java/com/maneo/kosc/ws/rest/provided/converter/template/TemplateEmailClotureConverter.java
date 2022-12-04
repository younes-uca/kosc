package com.maneo.kosc.ws.rest.provided.converter.template;

import com.maneo.kosc.ws.rest.provided.converter.AbstractConverter;
import org.springframework.stereotype.Component;
import com.maneo.kosc.service.util.*;


import com.maneo.kosc.bean.template.TemplateEmailCloture;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailClotureVo;

@Component
public class TemplateEmailClotureConverter extends AbstractConverter<TemplateEmailCloture, TemplateEmailClotureVo> {


    public TemplateEmailClotureConverter() {
        init(true);
    }

    @Override
    public TemplateEmailCloture toItem(TemplateEmailClotureVo vo) {
        if (vo == null) {
            return null;
        } else {
            TemplateEmailCloture item = new TemplateEmailCloture();
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
    public TemplateEmailClotureVo toVo(TemplateEmailCloture item) {
        if (item == null) {
            return null;
        } else {
            TemplateEmailClotureVo vo = new TemplateEmailClotureVo();
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
