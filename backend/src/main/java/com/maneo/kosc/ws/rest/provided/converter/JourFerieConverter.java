package com.maneo.kosc.ws.rest.provided.converter;

import com.maneo.kosc.bean.JourFerie;
import com.maneo.kosc.service.util.DateUtil;
import com.maneo.kosc.service.util.NumberUtil;
import com.maneo.kosc.service.util.StringUtil;
import com.maneo.kosc.ws.rest.provided.vo.JourFerieVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class JourFerieConverter extends AbstractConverter<JourFerie, JourFerieVo> {
    


    @Override
    public JourFerie toItem(JourFerieVo vo) {
        if (vo == null) {
            return null;
        } else {
            JourFerie item = new JourFerie();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));
            if (StringUtil.isNotEmpty(vo.getDateDebut()))
                item.setDateDebut(DateUtil.parseTimestampUniversalFormat(vo.getDateDebut()));
            if (StringUtil.isNotEmpty(vo.getDateFin()))
                item.setDateFin(DateUtil.parseTimestampUniversalFormat(vo.getDateFin()));
            if (StringUtil.isNotEmpty(vo.getLibelle()))
                item.setLibelle(vo.getLibelle());
           

            return item;
        }
    }

    @Override
    public JourFerieVo toVo(JourFerie item) {
        if (item == null) {
            return null;
        } else {
            JourFerieVo vo = new JourFerieVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (item.getDateDebut() != null)
                vo.setDateDebut(DateUtil.formateDate(item.getDateDebut()));
            if (item.getDateFin() != null)
                vo.setDateFin(DateUtil.formateDate(item.getDateFin()));
            if (StringUtil.isNotEmpty(item.getLibelle()))
                vo.setLibelle(item.getLibelle());

            return vo;
        }
    }





}
