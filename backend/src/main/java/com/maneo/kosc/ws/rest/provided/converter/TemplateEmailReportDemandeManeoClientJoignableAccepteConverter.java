package com.maneo.kosc.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.maneo.kosc.service.util.*;


import com.maneo.kosc.bean.TemplateEmailReportDemandeManeoClientJoignableAccepte;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReportDemandeManeoClientJoignableAccepteVo;

@Component
public class TemplateEmailReportDemandeManeoClientJoignableAccepteConverter extends AbstractConverter<TemplateEmailReportDemandeManeoClientJoignableAccepte,TemplateEmailReportDemandeManeoClientJoignableAccepteVo>{


public  TemplateEmailReportDemandeManeoClientJoignableAccepteConverter(){
init(true);
}

@Override
public TemplateEmailReportDemandeManeoClientJoignableAccepte toItem(TemplateEmailReportDemandeManeoClientJoignableAccepteVo vo) {
if (vo == null) {
return null;
} else {
TemplateEmailReportDemandeManeoClientJoignableAccepte item = new TemplateEmailReportDemandeManeoClientJoignableAccepte();
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
public TemplateEmailReportDemandeManeoClientJoignableAccepteVo toVo(TemplateEmailReportDemandeManeoClientJoignableAccepte item) {
if (item == null) {
return null;
} else {
TemplateEmailReportDemandeManeoClientJoignableAccepteVo vo = new TemplateEmailReportDemandeManeoClientJoignableAccepteVo();
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