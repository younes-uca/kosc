package com.maneo.kosc.ws.rest.provided.converter;

import org.springframework.stereotype.Component;
import com.maneo.kosc.service.util.*;


import com.maneo.kosc.bean.template.TemplateEmailReportDemandeClientClientJoignable;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReportDemandeClientClientJoignableVo;

@Component
public class TemplateEmailReportDemandeClientClientJoignableConverter extends AbstractConverter<TemplateEmailReportDemandeClientClientJoignable,TemplateEmailReportDemandeClientClientJoignableVo>{


public  TemplateEmailReportDemandeClientClientJoignableConverter(){
init(true);
}

@Override
public TemplateEmailReportDemandeClientClientJoignable toItem(TemplateEmailReportDemandeClientClientJoignableVo vo) {
if (vo == null) {
return null;
} else {
TemplateEmailReportDemandeClientClientJoignable item = new TemplateEmailReportDemandeClientClientJoignable();
        if(StringUtil.isNotEmpty(vo.getId()))
        item.setId(NumberUtil.toLong(vo.getId()));
        if(StringUtil.isNotEmpty(vo.getLibelle()))
        item.setLibelle(vo.getLibelle());
        if(StringUtil.isNotEmpty(vo.getObjet()))
        item.setObjet(vo.getObjet());
        if(StringUtil.isNotEmpty(vo.getCorps()))
        item.setCorps(vo.getCorps());


return item;
}
}

@Override
public TemplateEmailReportDemandeClientClientJoignableVo toVo(TemplateEmailReportDemandeClientClientJoignable item) {
if (item == null) {
return null;
} else {
TemplateEmailReportDemandeClientClientJoignableVo vo = new TemplateEmailReportDemandeClientClientJoignableVo();
        if(item.getId()!=null)
        vo.setId(NumberUtil.toString(item.getId()));

        if(StringUtil.isNotEmpty(item.getLibelle()))
        vo.setLibelle(item.getLibelle());

        if(StringUtil.isNotEmpty(item.getObjet()))
        vo.setObjet(item.getObjet());

        if(StringUtil.isNotEmpty(item.getCorps()))
        vo.setCorps(item.getCorps());


return vo;
}
}

public void init(Boolean value) {
}











}
