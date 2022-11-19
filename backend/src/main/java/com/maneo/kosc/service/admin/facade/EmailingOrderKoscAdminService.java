package com.maneo.kosc.service.admin.facade;

import com.maneo.kosc.bean.OrdreKosc;

public interface EmailingOrderKoscAdminService {
    void sendConfirmationEmailToClient(OrdreKosc ordreKosc);

    void sendMailPlanificationEmail(OrdreKosc ordreKosc);

    void sendClientInjoignableEmailToClient(OrdreKosc ordreKosc);

    void sendClientInjoignableEmailToKosc(OrdreKosc ordreKosc);

    void sendRefusClientEmail(OrdreKosc ordreKosc);

    void sendAutreEmail(OrdreKosc ordreKosc);

    void sendMauvaisContactEmail(OrdreKosc ordreKosc);

    void sendMailReplanificationReport(OrdreKosc ordreKosc);

    void sendMailReplanification(OrdreKosc ordreKosc);
}
