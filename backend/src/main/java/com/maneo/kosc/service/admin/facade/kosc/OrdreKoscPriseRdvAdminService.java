package com.maneo.kosc.service.admin.facade.kosc;

import com.maneo.kosc.bean.kosc.OrdreKosc;
import com.maneo.kosc.ws.rest.provided.vo.kosc.OrdreKoscVo;

import java.util.List;

public interface OrdreKoscPriseRdvAdminService  {



    List<OrdreKosc> findByCriteriaPriseRdv(OrdreKoscVo ordreKoscVo);


    OrdreKosc editPasEncore(OrdreKosc ordreKosc);

    OrdreKosc findByReferenceWorkOrder(String referenceWorkOrder);

    OrdreKosc updateNonJoignable(OrdreKosc ordreKosc);

    OrdreKosc updateMauvaisContact(OrdreKosc ordreKosc);

    OrdreKosc updateClientRefus(OrdreKosc ordreKosc);

    OrdreKosc updateAutre(OrdreKosc ordreKosc);
}
