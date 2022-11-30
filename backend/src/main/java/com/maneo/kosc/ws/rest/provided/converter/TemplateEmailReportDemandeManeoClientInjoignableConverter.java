package com.maneo.kosc.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.maneo.kosc.service.util.*;


import com.maneo.kosc.bean.TemplateEmailReportDemandeManeoClientInjoignable;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReportDemandeManeoClientInjoignableVo;

@Component
public class TemplateEmailReportDemandeManeoClientInjoignableConverter extends AbstractConverter<TemplateEmailReportDemandeManeoClientInjoignable,TemplateEmailReportDemandeManeoClientInjoignableVo>{


public  TemplateEmailReportDemandeManeoClientInjoignableConverter(){
init(true);
}

@Override
public TemplateEmailReportDemandeManeoClientInjoignable toItem(TemplateEmailReportDemandeManeoClientInjoignableVo vo) {
if (vo == null) {
return null;
} else {
TemplateEmailReportDemandeManeoClientInjoignable item = new TemplateEmailReportDemandeManeoClientInjoignable();
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
public TemplateEmailReportDemandeManeoClientInjoignableVo toVo(TemplateEmailReportDemandeManeoClientInjoignable item) {
if (item == null) {
return null;
} else {
TemplateEmailReportDemandeManeoClientInjoignableVo vo = new TemplateEmailReportDemandeManeoClientInjoignableVo();
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