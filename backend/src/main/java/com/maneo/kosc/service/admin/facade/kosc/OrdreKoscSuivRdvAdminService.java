package com.maneo.kosc.service.admin.facade.kosc;

import com.maneo.kosc.bean.kosc.OrdreKosc;
import com.maneo.kosc.ws.rest.provided.vo.kosc.OrdreKoscVo;

import java.util.List;

public interface OrdreKoscSuivRdvAdminService {





    List<OrdreKosc> findByCriteriaSuiviRdv(OrdreKoscVo ordreKoscVo);
    OrdreKosc updateEtat (OrdreKosc ordreKoscVo);

}
