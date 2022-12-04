package com.maneo.kosc.ws.rest.provided.converter.referentiel;

import com.maneo.kosc.ws.rest.provided.converter.AbstractConverter;
import org.springframework.stereotype.Component;
import com.maneo.kosc.service.util.*;


import com.maneo.kosc.bean.referentiel.CauseKoOk;
import com.maneo.kosc.ws.rest.provided.vo.referentiel.CauseKoOkVo;

@Component
public class CauseKoOkConverter extends AbstractConverter<CauseKoOk, CauseKoOkVo> {


    public CauseKoOkConverter() {
        init(true);
    }

    @Override
    public CauseKoOk toItem(CauseKoOkVo vo) {
        if (vo == null) {
            return null;
        } else {
            CauseKoOk item = new CauseKoOk();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));
            if (StringUtil.isNotEmpty(vo.getCode()))
                item.setCode(vo.getCode());
            if (StringUtil.isNotEmpty(vo.getLibelle()))
                item.setLibelle(vo.getLibelle());


            return item;
        }
    }

    @Override
    public CauseKoOkVo toVo(CauseKoOk item) {
        if (item == null) {
            return null;
        } else {
            CauseKoOkVo vo = new CauseKoOkVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));

            if (StringUtil.isNotEmpty(item.getCode()))
                vo.setCode(item.getCode());

            if (StringUtil.isNotEmpty(item.getLibelle()))
                vo.setLibelle(item.getLibelle());


            return vo;
        }
    }

    public void init(Boolean value) {
    }


}
