package com.maneo.kosc.ws.rest.provided.converter.template;

import com.maneo.kosc.ws.rest.provided.converter.AbstractConverter;
import org.springframework.stereotype.Component;
import com.maneo.kosc.service.util.*;


import com.maneo.kosc.bean.template.TemplateEmailReportDemandeManeoClientJoignableRefus;
import com.maneo.kosc.ws.rest.provided.vo.template.TemplateEmailReportDemandeManeoClientJoignableRefusVo;

@Component
public class TemplateEmailReportDemandeManeoClientJoignableRefusConverter extends AbstractConverter<TemplateEmailReportDemandeManeoClientJoignableRefus,TemplateEmailReportDemandeManeoClientJoignableRefusVo> {


public  TemplateEmailReportDemandeManeoClientJoignableRefusConverter(){
init(true);
}

@Override
public TemplateEmailReportDemandeManeoClientJoignableRefus toItem(TemplateEmailReportDemandeManeoClientJoignableRefusVo vo) {
if (vo == null) {
return null;
} else {
TemplateEmailReportDemandeManeoClientJoignableRefus item = new TemplateEmailReportDemandeManeoClientJoignableRefus();
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
public TemplateEmailReportDemandeManeoClientJoignableRefusVo toVo(TemplateEmailReportDemandeManeoClientJoignableRefus item) {
if (item == null) {
return null;
} else {
TemplateEmailReportDemandeManeoClientJoignableRefusVo vo = new TemplateEmailReportDemandeManeoClientJoignableRefusVo();
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
