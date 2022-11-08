package com.maneo.kosc.ws.rest.provided.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.maneo.kosc.service.util.*;


import com.maneo.kosc.bean.TemplateEmailReport;
import com.maneo.kosc.ws.rest.provided.vo.TemplateEmailReportVo;

@Component
public class TemplateEmailReportConverter extends AbstractConverter<TemplateEmailReport, TemplateEmailReportVo> {


    public TemplateEmailReportConverter() {
        init(true);
    }

    @Override
    public TemplateEmailReport toItem(TemplateEmailReportVo vo) {
        if (vo == null) {
            return null;
        } else {
            TemplateEmailReport item = new TemplateEmailReport();
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
    public TemplateEmailReportVo toVo(TemplateEmailReport item) {
        if (item == null) {
            return null;
        } else {
            TemplateEmailReportVo vo = new TemplateEmailReportVo();
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
