package com.maneo.kosc.service.admin.facade.kosc;

import com.maneo.kosc.bean.kosc.OrdreKosc;
import com.maneo.kosc.ws.rest.provided.vo.OrdreKoscVo;

import java.util.List;

public interface OrdreKoscSuiviCddAdminService {



    public List<OrdreKosc> findByCriteriaSuiviCdd(OrdreKoscVo ordreKoscVo);

}
