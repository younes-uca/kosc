package com.maneo.kosc.ws.rest.provided.converter.template;

import com.maneo.kosc.ws.rest.provided.converter.AbstractConverter;
import org.springframework.stereotype.Component;
import com.maneo.kosc.service.util.*;


import com.maneo.kosc.bean.template.TemplateEmailMauvaisContact;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailMauvaisContactVo;

@Component
public class TemplateEmailMauvaisContactConverter extends AbstractConverter<TemplateEmailMauvaisContact, TemplateEmailMauvaisContactVo> {


    public TemplateEmailMauvaisContactConverter() {
        init(true);
    }

    @Override
    public TemplateEmailMauvaisContact toItem(TemplateEmailMauvaisContactVo vo) {
        if (vo == null) {
            return null;
        } else {
            TemplateEmailMauvaisContact item = new TemplateEmailMauvaisContact();
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
    public TemplateEmailMauvaisContactVo toVo(TemplateEmailMauvaisContact item) {
        if (item == null) {
            return null;
        } else {
            TemplateEmailMauvaisContactVo vo = new TemplateEmailMauvaisContactVo();
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
