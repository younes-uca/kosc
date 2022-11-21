package com.maneo.kosc.service.admin.facade;

import com.maneo.kosc.bean.OrdreKosc;
import com.maneo.kosc.ws.rest.provided.vo.OrdreKoscVo;

import java.util.List;

public interface OrdreKoscSuivRdvAdminService {





    List<OrdreKosc> findByCriteriaSuiviRdv(OrdreKoscVo ordreKoscVo);
    OrdreKosc updateEtat (OrdreKosc ordreKoscVo);

}
