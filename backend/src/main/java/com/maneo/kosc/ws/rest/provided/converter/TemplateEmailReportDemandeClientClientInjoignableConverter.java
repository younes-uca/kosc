package com.maneo.kosc.ws.rest.provided.converter;

import org.springframework.stereotype.Component;
import com.maneo.kosc.service.util.*;


import com.maneo.kosc.bean.template.TemplateEmailReportDemandeClientClientInjoignable;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReportDemandeClientClientInjoignableVo;

@Component
public class TemplateEmailReportDemandeClientClientInjoignableConverter extends AbstractConverter<TemplateEmailReportDemandeClientClientInjoignable,TemplateEmailReportDemandeClientClientInjoignableVo>{


public  TemplateEmailReportDemandeClientClientInjoignableConverter(){
init(true);
}

@Override
public TemplateEmailReportDemandeClientClientInjoignable toItem(TemplateEmailReportDemandeClientClientInjoignableVo vo) {
if (vo == null) {
return null;
} else {
TemplateEmailReportDemandeClientClientInjoignable item = new TemplateEmailReportDemandeClientClientInjoignable();
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
public TemplateEmailReportDemandeClientClientInjoignableVo toVo(TemplateEmailReportDemandeClientClientInjoignable item) {
if (item == null) {
return null;
} else {
TemplateEmailReportDemandeClientClientInjoignableVo vo = new TemplateEmailReportDemandeClientClientInjoignableVo();
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
