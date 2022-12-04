package com.maneo.kosc.ws.rest.provided.converter.template;

import com.maneo.kosc.ws.rest.provided.converter.AbstractConverter;
import org.springframework.stereotype.Component;
import com.maneo.kosc.service.util.*;


import com.maneo.kosc.bean.template.TemplateEmailFtl;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailFtlVo;

@Component
public class TemplateEmailFtlConverter extends AbstractConverter<TemplateEmailFtl, TemplateEmailFtlVo> {


    public TemplateEmailFtlConverter() {
        init(true);
    }

    @Override
    public TemplateEmailFtl toItem(TemplateEmailFtlVo vo) {
        if (vo == null) {
            return null;
        } else {
            TemplateEmailFtl item = new TemplateEmailFtl();
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
    public TemplateEmailFtlVo toVo(TemplateEmailFtl item) {
        if (item == null) {
            return null;
        } else {
            TemplateEmailFtlVo vo = new TemplateEmailFtlVo();
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
