package com.maneo.kosc.service.admin.facade.kosc;

import com.maneo.kosc.bean.kosc.OrdreKosc;

public interface OrderKoscEmailingAdminService {
    void sendConfirmationEmailToClient(OrdreKosc ordreKosc);

    void sendMailPlanificationEmail(OrdreKosc ordreKosc);

    void sendClientInjoignableEmailToClient(OrdreKosc ordreKosc);

    void sendClientInjoignableEmailToKosc(OrdreKosc ordreKosc);

    void sendRefusClientEmail(OrdreKosc ordreKosc);

    void sendAutreEmail(OrdreKosc ordreKosc);

    void sendMauvaisContactEmail(OrdreKosc ordreKosc);


    void sendMailReplanification(OrdreKosc ordreKosc);

    void sendMailReportDemandeManeoClientInjoignable(OrdreKosc ordreKosc);

    void sendMailReportDemandeManeoClientJoignableAccepte(OrdreKosc ordreKosc);

    void sendMailReportDemandeManeoClientJoignableRefus(OrdreKosc ordreKosc);

    void sendMailReportDemandeClientClientInjoignable(OrdreKosc ordreKosc);

    void sendMailReportDemandeClientClientJoignable(OrdreKosc ordreKosc);

    void sendMailCri(OrdreKosc ordreKosc);
}
