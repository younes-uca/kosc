package com.maneo.kosc.service.admin.facade;

import com.maneo.kosc.bean.OrdreKosc;
import com.maneo.kosc.ws.rest.provided.vo.OrdreKoscVo;

import java.util.List;

public interface OrdreKoscPriseRdvAdminService  {



    List<OrdreKosc> findByCriteriaPriseRdv(OrdreKoscVo ordreKoscVo);


    OrdreKosc findByReferenceWorkOrder(String referenceWorkOrder);

    OrdreKosc updateNonJoignable(OrdreKosc ordreKosc);

    OrdreKosc updateMauvaisContact(OrdreKosc ordreKosc);

    OrdreKosc updateClientRefus(OrdreKosc ordreKosc);

    OrdreKosc updateAutre(OrdreKosc ordreKosc);
}
