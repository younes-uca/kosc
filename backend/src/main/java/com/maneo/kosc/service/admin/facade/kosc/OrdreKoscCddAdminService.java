package com.maneo.kosc.service.admin.facade.kosc;

import com.maneo.kosc.bean.OrdreKosc;
import com.maneo.kosc.ws.rest.provided.vo.OrdreKoscVo;

import java.util.List;

public interface OrdreKoscCddAdminService {


    public List<OrdreKosc> findByCriteriaCdd(OrdreKoscVo ordreKoscVo);


}
