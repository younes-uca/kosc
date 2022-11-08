package com.maneo.kosc.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.maneo.kosc.service.util.*;


import com.maneo.kosc.bean.TemplateEmailClientInjoinableKosc;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailClientInjoinableKoscVo;

@Component
public class TemplateEmailClientInjoinableKoscConverter extends AbstractConverter<TemplateEmailClientInjoinableKosc, TemplateEmailClientInjoinableKoscVo> {


    public TemplateEmailClientInjoinableKoscConverter() {
        init(true);
    }

    @Override
    public TemplateEmailClientInjoinableKosc toItem(TemplateEmailClientInjoinableKoscVo vo) {
        if (vo == null) {
            return null;
        } else {
            TemplateEmailClientInjoinableKosc item = new TemplateEmailClientInjoinableKosc();
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
    public TemplateEmailClientInjoinableKoscVo toVo(TemplateEmailClientInjoinableKosc item) {
        if (item == null) {
            return null;
        } else {
            TemplateEmailClientInjoinableKoscVo vo = new TemplateEmailClientInjoinableKoscVo();
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
