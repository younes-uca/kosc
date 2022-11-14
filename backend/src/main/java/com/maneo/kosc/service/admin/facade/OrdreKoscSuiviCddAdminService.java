package com.maneo.kosc.service.admin.facade;

import com.maneo.kosc.bean.OrdreKosc;
import com.maneo.kosc.ws.rest.provided.vo.OrdreKoscVo;

import java.util.List;

public interface OrdreKoscSuiviCddAdminService {


    public List<OrdreKosc> findByCriteriaSuiviCdd(OrdreKoscVo ordreKoscVo);

    public List<OrdreKosc> findByCriteriaSuiviCdd2(OrdreKoscVo ordreKoscVo);

}
