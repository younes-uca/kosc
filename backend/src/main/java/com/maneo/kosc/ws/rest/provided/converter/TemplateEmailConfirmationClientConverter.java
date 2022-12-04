package com.maneo.kosc.ws.rest.provided.converter;

import org.springframework.stereotype.Component;
import com.maneo.kosc.service.util.*;


import com.maneo.kosc.bean.template.TemplateEmailConfirmationClient;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailConfirmationClientVo;

@Component
public class TemplateEmailConfirmationClientConverter extends AbstractConverter<TemplateEmailConfirmationClient, TemplateEmailConfirmationClientVo> {


    public TemplateEmailConfirmationClientConverter() {
        init(true);
    }

    @Override
    public TemplateEmailConfirmationClient toItem(TemplateEmailConfirmationClientVo vo) {
        if (vo == null) {
            return null;
        } else {
            TemplateEmailConfirmationClient item = new TemplateEmailConfirmationClient();
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
    public TemplateEmailConfirmationClientVo toVo(TemplateEmailConfirmationClient item) {
        if (item == null) {
            return null;
        } else {
            TemplateEmailConfirmationClientVo vo = new TemplateEmailConfirmationClientVo();
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
