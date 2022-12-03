package com.maneo.kosc.service.admin.impl;

import com.maneo.kosc.bean.*;
import com.maneo.kosc.dao.OrdreKoscDao;
import com.maneo.kosc.service.admin.facade.*;
import com.maneo.kosc.service.admin.facade.kosc.OrdreKoscAdminService;
import com.maneo.kosc.service.util.DateUtil;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class EmailingOrderKoscAdminServiceImpl  implements EmailingOrderKoscAdminService{
    @Autowired
    private OrdreKoscDao ordreKoscDao;


    @Autowired
    private EmailSenderAdminService emailSenderAdminService;
    @Autowired
    private OrdreKoscAdminService ordreKoscAdminService;

    @Override
    public void sendConfirmationEmailToClient(OrdreKosc ordreKosc) {
        LocalDate todaysDate = LocalDate.now();
        try {
            EmailDetails emailDetails = new EmailDetails();
            emailDetails.setFrom(ordreKosc.getFromConfirmationClient());
            emailDetails.setTo(ordreKosc.getToConfirmationClient());
            emailDetails.setObjet(ordreKosc.getObjetConfirmationClient());
            emailDetails.setCorps(ordreKosc.getCorpsConfirmationClient());
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeConfirmationClient(true);
            ordreKosc.setDateEnvoiConfirmationClient(DateUtil.toDate(todaysDate));
            ordreKoscDao.save(ordreKosc);

        } catch (Exception exception) {
            OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeConfirmationClient(false);
            ordreKosc.setDateEnvoiConfirmationClient(null);
            ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());


        }


    }

    @Override
    public void sendMailPlanificationEmail(OrdreKosc ordreKosc) {
        LocalDate todaysDate = LocalDate.now();
        try {
            EmailDetails emailDetails = new EmailDetails();
            emailDetails.setFrom(ordreKosc.getFromPlanification());
            emailDetails.setTo(ordreKosc.getToPlanification());
            emailDetails.setObjet(ordreKosc.getObjetPlanification());
            emailDetails.setCorps(ordreKosc.getCorpsPlanification());
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyePlanification(true);
            ordreKosc.setDateEnvoiPlanification(DateUtil.toDate(todaysDate));
            ordreKoscDao.save(ordreKosc);

        } catch (Exception exception) {
            OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyePlanification(false);
            ordreKosc.setDateEnvoiPlanification(null);
            ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());


        }

    }

    @Override
    public void sendClientInjoignableEmailToClient(OrdreKosc ordreKosc) {
        LocalDate todaysDate = LocalDate.now();
        try {
            EmailDetails emailDetails = new EmailDetails();
            emailDetails.setFrom(ordreKosc.getFromClientInjoinable());
            emailDetails.setTo(ordreKosc.getToClientInjoinable());
            emailDetails.setObjet(ordreKosc.getObjetClientInjoinable());
            emailDetails.setCorps(ordreKosc.getCorpsClientInjoinable());
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeClientInjoinable(true);
            ordreKosc.setDateEnvoiClientInjoinable(DateUtil.toDate(todaysDate));
            ordreKoscDao.save(ordreKosc);

        } catch (Exception exception) {
            OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeClientInjoinable(false);
            ordreKosc.setDateEnvoiClientInjoinable(null);
            ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }

    }

    @Override
    public void sendClientInjoignableEmailToKosc(OrdreKosc ordreKosc) {
        LocalDate todaysDate = LocalDate.now();

        try {
            EmailDetails emailDetails = new EmailDetails();
            emailDetails.setFrom(ordreKosc.getFromClientInjoinableKosc());
            emailDetails.setTo(ordreKosc.getToClientInjoinableKosc());
            emailDetails.setObjet(ordreKosc.getObjetClientInjoinableKosc());
            emailDetails.setCorps(ordreKosc.getCorpsClientInjoinableKosc());
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeClientInjoinableKosc(true);
            ordreKosc.setDateEnvoiClientInjoinableKosc(DateUtil.toDate(todaysDate));
            ordreKoscDao.save(ordreKosc);


        } catch (Exception exception) {
            OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeClientInjoinableKosc(false);
            ordreKosc.setDateEnvoiClientInjoinableKosc(null);
            ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }

    }

    @Override
    public void sendRefusClientEmail(OrdreKosc ordreKosc) {
        LocalDate todaysDate = LocalDate.now();
        try {
            EmailDetails emailDetails = new EmailDetails();
            emailDetails.setFrom(ordreKosc.getFromRefus());
            emailDetails.setTo(ordreKosc.getToRefus());
            emailDetails.setObjet(ordreKosc.getObjetRefus());
            emailDetails.setCorps(ordreKosc.getCorpsRefus());
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeRefus(true);
            ordreKosc.setDateEnvoiRefus(DateUtil.toDate(todaysDate));
            ordreKoscDao.save(ordreKosc);

        } catch (Exception exception) {
            OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeRefus(false);
            ordreKosc.setDateEnvoiRefus(null);
            ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }
    }

    @Override
    public void sendAutreEmail(OrdreKosc ordreKosc) {
        LocalDate todaysDate = LocalDate.now();
        try {
            EmailDetails emailDetails = new EmailDetails();
            emailDetails.setFrom(ordreKosc.getFromAutre());
            emailDetails.setTo(ordreKosc.getToAutre());
            emailDetails.setObjet(ordreKosc.getObjetAutre());
            emailDetails.setCorps(ordreKosc.getCorpsAutre());
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeAutre(true);
            ordreKosc.setDateEnvoiAutre(DateUtil.toDate(todaysDate));
            ordreKoscDao.save(ordreKosc);

        } catch (Exception exception) {
            OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeAutre(false);
            ordreKosc.setDateEnvoiAutre(null);
            ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }
    }

    @Override
    public void sendMauvaisContactEmail(OrdreKosc ordreKosc) {
        LocalDate todaysDate = LocalDate.now();
        try {
            EmailDetails emailDetails = new EmailDetails();
            emailDetails.setFrom(ordreKosc.getFromMauvaisContact());
            emailDetails.setTo(ordreKosc.getToMauvaisContact());
            emailDetails.setObjet(ordreKosc.getObjetMauvaisContact());
            emailDetails.setCorps(ordreKosc.getCorpsMauvaisContact());
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeMauvaisContact(true);
            ordreKosc.setDateEnvoiMauvaisContact(DateUtil.toDate(todaysDate));
            ordreKoscDao.save(ordreKosc);


        } catch (Exception exception) {
            OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeMauvaisContact(false);
            ordreKosc.setDateEnvoiMauvaisContact(null);
            ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }

    }



    @Override
    public void sendMailReplanification(OrdreKosc ordreKosc) {
        LocalDate todaysDate = LocalDate.now();
        try {
            EmailDetails emailDetails = new EmailDetails();
            emailDetails.setFrom(ordreKosc.getFromReplanification());
            emailDetails.setTo(ordreKosc.getToReplanification());
            emailDetails.setObjet(ordreKosc.getObjetReplanification());
            emailDetails.setCorps(ordreKosc.getCorpsReplanification());
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeReplanification(true);
            ordreKosc.setDateEnvoiReplanification(DateUtil.toDate(todaysDate));
            ordreKoscDao.save(ordreKosc);

        } catch (Exception exception) {
            OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeReplanification(false);
            ordreKosc.setDateEnvoiReplanification(null);
            ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }
    }

    @Override
    public void sendMailReportDemandeManeoClientInjoignable(OrdreKosc ordreKosc) {
        LocalDate todaysDate = LocalDate.now();
        try {
            EmailDetails emailDetails = new EmailDetails();
            emailDetails.setFrom(ordreKosc.getFromReportDemandeManeoClientInjoignable());
            emailDetails.setTo(ordreKosc.getToReportDemandeManeoClientInjoignable());
            emailDetails.setObjet(ordreKosc.getObjetReportDemandeManeoClientInjoignable());
            emailDetails.setCorps(ordreKosc.getCorpsReportDemandeManeoClientInjoignable());
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeReportDemandeManeoClientInjoignable(true);
            ordreKosc.setDateEnvoiReportDemandeManeoClientInjoignable(DateUtil.toDate(todaysDate));
            ordreKoscDao.save(ordreKosc);

        } catch (Exception exception) {
            OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeReportDemandeManeoClientInjoignable(false);
            ordreKosc.setDateEnvoiReportDemandeManeoClientInjoignable(null);
            ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }
        
    }

    @Override
    public void sendMailReportDemandeManeoClientJoignableAccepte(OrdreKosc ordreKosc) {
        LocalDate todaysDate = LocalDate.now();
        try {
            EmailDetails emailDetails = new EmailDetails();
            emailDetails.setFrom(ordreKosc.getFromReportDemandeManeoClientJoignableAccepte());
            emailDetails.setTo(ordreKosc.getToReportDemandeManeoClientJoignableAccepte());
            emailDetails.setObjet(ordreKosc.getObjetReportDemandeManeoClientJoignableAccepte());
            emailDetails.setCorps(ordreKosc.getCorpsReportDemandeManeoClientJoignableAccepte());
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeReportDemandeManeoClientJoignableAccepte(true);
            ordreKosc.setDateEnvoiReportDemandeManeoClientJoignableAccepte(DateUtil.toDate(todaysDate));
            ordreKoscDao.save(ordreKosc);

        } catch (Exception exception) {
            OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeReportDemandeManeoClientJoignableAccepte(false);
            ordreKosc.setDateEnvoiReportDemandeManeoClientJoignableAccepte(null);
            ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }

    }

    @Override
    public void sendMailReportDemandeManeoClientJoignableRefus(OrdreKosc ordreKosc) {
        LocalDate todaysDate = LocalDate.now();
        try {
            EmailDetails emailDetails = new EmailDetails();
            emailDetails.setFrom(ordreKosc.getFromReportDemandeManeoClientJoignableRefus());
            emailDetails.setTo(ordreKosc.getToReportDemandeManeoClientJoignableRefus());
            emailDetails.setObjet(ordreKosc.getObjetReportDemandeManeoClientJoignableRefus());
            emailDetails.setCorps(ordreKosc.getCorpsReportDemandeManeoClientJoignableRefus());
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeReportDemandeManeoClientJoignableRefus(true);
            ordreKosc.setDateEnvoiReportDemandeManeoClientJoignableRefus(DateUtil.toDate(todaysDate));
            ordreKoscDao.save(ordreKosc);

        } catch (Exception exception) {
            OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeReportDemandeManeoClientJoignableRefus(false);
            ordreKosc.setDateEnvoiReportDemandeManeoClientJoignableRefus(null);
            ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }

    }

    @Override
    public void sendMailReportDemandeClientClientInjoignable(OrdreKosc ordreKosc) {
        LocalDate todaysDate = LocalDate.now();
        try {
            EmailDetails emailDetails = new EmailDetails();
            emailDetails.setFrom(ordreKosc.getFromReportDemandeClientClientInjoignable());
            emailDetails.setTo(ordreKosc.getToReportDemandeClientClientInjoignable());
            emailDetails.setObjet(ordreKosc.getObjetReportDemandeClientClientInjoignable());
            emailDetails.setCorps(ordreKosc.getCorpsReportDemandeClientClientInjoignable());
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeReportDemandeClientClientInjoignable(true);
            ordreKosc.setDateEnvoiReportDemandeClientClientInjoignable(DateUtil.toDate(todaysDate));
            ordreKoscDao.save(ordreKosc);

        } catch (Exception exception) {
            OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeReportDemandeClientClientInjoignable(false);
            ordreKosc.setDateEnvoiReportDemandeClientClientInjoignable(null);
            ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }

    }

    @Override
    public void sendMailReportDemandeClientClientJoignable(OrdreKosc ordreKosc) {
        LocalDate todaysDate = LocalDate.now();
        try {
            EmailDetails emailDetails = new EmailDetails();
            emailDetails.setFrom(ordreKosc.getFromReportDemandeClientClientJoignable());
            emailDetails.setTo(ordreKosc.getToReportDemandeClientClientJoignable());
            emailDetails.setObjet(ordreKosc.getObjetReportDemandeClientClientJoignable());
            emailDetails.setCorps(ordreKosc.getCorpsReportDemandeClientClientJoignable());
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeReportDemandeClientClientJoignable(true);
            ordreKosc.setDateEnvoiReportDemandeClientClientJoignable(DateUtil.toDate(todaysDate));
            ordreKoscDao.save(ordreKosc);

        } catch (Exception exception) {
            OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeReportDemandeClientClientJoignable(false);
            ordreKosc.setDateEnvoiReportDemandeClientClientJoignable(null);
            ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }

    }

    @Override
    public void sendMailCri(OrdreKosc ordreKosc) {

        LocalDate todaysDate = LocalDate.now();
        try {
            EmailDetails emailDetails = new EmailDetails();
            emailDetails.setFrom(ordreKosc.getFromCri());
            emailDetails.setTo(ordreKosc.getToCri());
            emailDetails.setObjet(ordreKosc.getObjetCri());
            emailDetails.setCorps(ordreKosc.getCorpsCri());
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeCri(true);
            ordreKosc.setDateEnvoiCri(DateUtil.toDate(todaysDate));
            ordreKoscDao.save(ordreKosc);

        } catch (Exception exception) {
            OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeCri(false);
            ordreKosc.setDateEnvoiCri(null);
            ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }

    }


}
