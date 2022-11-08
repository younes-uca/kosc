package com.maneo.kosc.service.admin.impl;

import com.maneo.kosc.bean.*;
import com.maneo.kosc.dao.OrdreKoscDao;
import com.maneo.kosc.service.admin.facade.*;
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
    public void sendMailReplanificationReport(OrdreKosc ordreKosc) {
        LocalDate todaysDate = LocalDate.now();
        try {
            EmailDetails emailDetails = new EmailDetails();
            emailDetails.setFrom(ordreKosc.getFromReport());
            emailDetails.setTo(ordreKosc.getToReport());
            emailDetails.setObjet(ordreKosc.getObjetReport());
            emailDetails.setCorps(ordreKosc.getCorpsReport());
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeReport(true);
            ordreKosc.setDateEnvoiReport(DateUtil.toDate(todaysDate));
            ordreKoscDao.save(ordreKosc);


        } catch (Exception exception) {
            OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeReport(false);
            ordreKosc.setDateEnvoiReport(null);
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


}
