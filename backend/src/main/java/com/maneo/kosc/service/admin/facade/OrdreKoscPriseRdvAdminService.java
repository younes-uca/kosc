package com.maneo.kosc.service.admin.facade;

import com.maneo.kosc.bean.OrdreKosc;
import com.maneo.kosc.service.core.facade.AbstractService;
import com.maneo.kosc.ws.rest.provided.vo.OrdreKoscVo;
import com.maneo.kosc.ws.rest.provided.vo.StatisticResultVo;
import com.maneo.kosc.ws.rest.provided.vo.StatisticVo;

import java.util.Date;
import java.util.List;

public interface OrdreKoscPriseRdvAdminService  {



    List<OrdreKosc> findByCriteriaPriseRdv(OrdreKoscVo ordreKoscVo);


}
