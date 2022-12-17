package com.maneo.kosc.service.admin.impl.kosc;

import com.maneo.kosc.bean.kosc.OrdreKosc;
import com.maneo.kosc.bean.template.EmailDetails;
import com.maneo.kosc.dao.kosc.OrdreKoscDao;
import com.maneo.kosc.security.dao.UserDao;
import com.maneo.kosc.service.admin.facade.*;
import com.maneo.kosc.service.admin.facade.kosc.OrderKoscEmailingAdminService;


import com.maneo.kosc.service.util.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class OrderKoscEmailingAdminServiceImpl implements OrderKoscEmailingAdminService {
    @Autowired
    private OrdreKoscDao ordreKoscDao;
    @Autowired
    private UserDao userDao;

    @Autowired
    private EmailSenderAdminService emailSenderAdminService;

    Date now = new Date();


    private void setEmails(OrdreKosc ordreKosc){
        if (ordreKosc.getToClientInjoinable() != null){
            ordreKosc.setEmailTo(ordreKosc.getToClientInjoinable());
            ordreKosc.setEmailDe(ordreKosc.getFromClientInjoinable());
            ordreKosc.setEmailObjet(ordreKosc.getObjetClientInjoinable());
            ordreKosc.setEmailCorps(ordreKosc.getCorpsClientInjoinable());
            ordreKosc.setDateEnvoi(ordreKosc.getDateEnvoiClientInjoinable());
        }else if (ordreKosc.getToRefus() != null){
            ordreKosc.setEmailTo(ordreKosc.getToRefus());
            ordreKosc.setEmailDe(ordreKosc.getFromRefus());
            ordreKosc.setEmailObjet(ordreKosc.getObjetRefus());
            ordreKosc.setEmailCorps(ordreKosc.getCorpsRefus());
            ordreKosc.setDateEnvoi(ordreKosc.getDateEnvoiRefus());
        }else if(ordreKosc.getToConfirmationClient() != null){
            ordreKosc.setEmailTo(ordreKosc.getToConfirmationClient());
            ordreKosc.setEmailDe(ordreKosc.getFromConfirmationClient());
            ordreKosc.setEmailObjet(ordreKosc.getObjetConfirmationClient());
            ordreKosc.setEmailCorps(ordreKosc.getCorpsConfirmationClient());
            ordreKosc.setDateEnvoi(ordreKosc.getDateEnvoiConfirmationClient());
        }else if(ordreKosc.getToMauvaisContact() != null){
            ordreKosc.setEmailTo(ordreKosc.getToMauvaisContact());
            ordreKosc.setEmailDe(ordreKosc.getFromMauvaisContact());
            ordreKosc.setEmailObjet(ordreKosc.getObjetMauvaisContact());
            ordreKosc.setEmailCorps(ordreKosc.getCorpsMauvaisContact());
            ordreKosc.setDateEnvoi(ordreKosc.getDateEnvoiMauvaisContact());
        }else if (ordreKosc.getToAutre() != null){
            ordreKosc.setEmailTo(ordreKosc.getToAutre());
            ordreKosc.setEmailDe(ordreKosc.getFromAutre());
            ordreKosc.setEmailObjet(ordreKosc.getObjetAutre());
            ordreKosc.setEmailCorps(ordreKosc.getCorpsAutre());
            ordreKosc.setDateEnvoi(ordreKosc.getDateEnvoiAutre());
        }else if (ordreKosc.getToPlanification() != null){
            ordreKosc.setEmailTo(ordreKosc.getToPlanification());
            ordreKosc.setEmailDe(ordreKosc.getFromPlanification());
            ordreKosc.setEmailObjet(ordreKosc.getObjetPlanification());
            ordreKosc.setEmailCorps(ordreKosc.getCorpsPlanification());
            ordreKosc.setDateEnvoi(ordreKosc.getDateEnvoiPlanification());

        }
    }

    @Override
    public void sendConfirmationEmailToClient(OrdreKosc ordreKosc) {

        EmailDetails emailDetails = new EmailDetails();
        emailDetails.setFrom(ordreKosc.getFromConfirmationClient());
        emailDetails.setTo(ordreKosc.getToConfirmationClient());
        emailDetails.setObjet(ordreKosc.getObjetConfirmationClient());
        emailDetails.setCorps(ordreKosc.getCorpsConfirmationClient());
        try {
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeConfirmationClient(true);
            ordreKosc.setDateEnvoiConfirmationClient(now);
        } catch (Exception exception) {
            //  OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeConfirmationClient(false);
            ordreKosc.setDateEnvoiConfirmationClient(null);
            // ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }
        ordreKosc.setDatePriseRdv(now);
        saveAndInitDateDernierAppel(ordreKosc);


    }

    @Override
    public void sendMailPlanificationEmail(OrdreKosc ordreKosc) {


        EmailDetails emailDetails = new EmailDetails();
        emailDetails.setFrom(ordreKosc.getFromPlanification());
        emailDetails.setTo(ordreKosc.getToPlanification());
        emailDetails.setObjet(ordreKosc.getObjetPlanification());
        emailDetails.setCorps(ordreKosc.getCorpsPlanification());
        try {
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyePlanification(true);
            ordreKosc.setDateEnvoiPlanification(now);

        } catch (Exception exception) {
            // OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyePlanification(false);
            ordreKosc.setDateEnvoiPlanification(null);
            //ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }
        ordreKosc.setDatePriseRdv(now);
        saveAndInitDateDernierAppel(ordreKosc);

    }

    @Override
    public void sendClientInjoignableEmailToClient(OrdreKosc ordreKosc) {

        EmailDetails emailDetails = new EmailDetails();
        emailDetails.setFrom(ordreKosc.getFromClientInjoinable());
        emailDetails.setTo(ordreKosc.getToClientInjoinable());
        emailDetails.setObjet(ordreKosc.getObjetClientInjoinable());
        emailDetails.setCorps(ordreKosc.getCorpsClientInjoinable());
        try {

            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeClientInjoinable(true);
            ordreKosc.setDateEnvoiClientInjoinable(now);

        } catch (Exception exception) {
            // OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeClientInjoinable(false);
            ordreKosc.setDateEnvoiClientInjoinable(null);
            // ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }
        ordreKosc.setDatePriseRdv(now);
        saveAndInitDateDernierAppel(ordreKosc);

    }

    @Override
    public void sendClientInjoignableEmailToKosc(OrdreKosc ordreKosc) {

        EmailDetails emailDetails = new EmailDetails();
        emailDetails.setFrom(ordreKosc.getFromClientInjoinableKosc());
        emailDetails.setTo(ordreKosc.getToClientInjoinableKosc());
        emailDetails.setObjet(ordreKosc.getObjetClientInjoinableKosc());
        emailDetails.setCorps(ordreKosc.getCorpsClientInjoinableKosc());
        try {

            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeClientInjoinableKosc(true);
            ordreKosc.setDateEnvoiClientInjoinableKosc(now);
        } catch (Exception exception) {
            //OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeClientInjoinableKosc(false);
            ordreKosc.setDateEnvoiClientInjoinableKosc(null);
            //ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }
        ordreKosc.setDatePriseRdv(now);
        saveAndInitDateDernierAppel(ordreKosc);

    }

    @Override
    public void sendRefusClientEmail(OrdreKosc ordreKosc) {

        EmailDetails emailDetails = new EmailDetails();
        emailDetails.setFrom(ordreKosc.getFromRefus());
        emailDetails.setTo(ordreKosc.getToRefus());
        emailDetails.setObjet(ordreKosc.getObjetRefus());
        emailDetails.setCorps(ordreKosc.getCorpsRefus());
        try {

            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeRefus(true);
            ordreKosc.setDateEnvoiRefus(now);

        } catch (Exception exception) {
            // OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeRefus(false);
            ordreKosc.setDateEnvoiRefus(null);
            // ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }
        ordreKosc.setDatePriseRdv(now);
        saveAndInitDateDernierAppel(ordreKosc);

    }

    @Override
    public void sendAutreEmail(OrdreKosc ordreKosc) {

        EmailDetails emailDetails = new EmailDetails();
        emailDetails.setFrom(ordreKosc.getFromAutre());
        emailDetails.setTo(ordreKosc.getToAutre());
        emailDetails.setObjet(ordreKosc.getObjetAutre());
        emailDetails.setCorps(ordreKosc.getCorpsAutre());
        try {
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeAutre(true);
            ordreKosc.setDateEnvoiAutre(now);

        } catch (Exception exception) {
            //OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeAutre(false);
            ordreKosc.setDateEnvoiAutre(null);
            //ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }
        ordreKosc.setDatePriseRdv(now);
        saveAndInitDateDernierAppel(ordreKosc);

    }

    @Override
    public void sendMauvaisContactEmail(OrdreKosc ordreKosc) {

        EmailDetails emailDetails = new EmailDetails();
        emailDetails.setFrom(ordreKosc.getFromMauvaisContact());
        emailDetails.setTo(ordreKosc.getToMauvaisContact());
        emailDetails.setObjet(ordreKosc.getObjetMauvaisContact());
        emailDetails.setCorps(ordreKosc.getCorpsMauvaisContact());
        try {
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeMauvaisContact(true);
            ordreKosc.setDateEnvoiMauvaisContact(now);


        } catch (Exception exception) {
            // OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeMauvaisContact(false);
            ordreKosc.setDateEnvoiMauvaisContact(null);
            // ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }
        ordreKosc.setDatePriseRdv(now);
        saveAndInitDateDernierAppel(ordreKosc);


    }


    @Override
    public void sendMailReplanification(OrdreKosc ordreKosc) {

        EmailDetails emailDetails = new EmailDetails();
        emailDetails.setFrom(ordreKosc.getFromReplanification());
        emailDetails.setTo(ordreKosc.getToReplanification());
        emailDetails.setObjet(ordreKosc.getObjetReplanification());
        emailDetails.setCorps(ordreKosc.getCorpsReplanification());
        try {
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeReplanification(true);
            ordreKosc.setDateEnvoiReplanification(now);

        } catch (Exception exception) {
            //OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeReplanification(false);
            ordreKosc.setDateEnvoiReplanification(null);
            //ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }
        ordreKosc.setDatePriseRdv(now);
        saveAndInitDateDernierAppel(ordreKosc);
    }

    @Override
    public void sendMailReportDemandeManeoClientInjoignable(OrdreKosc ordreKosc) {

        EmailDetails emailDetails = new EmailDetails();
        emailDetails.setFrom(ordreKosc.getFromReportDemandeManeoClientInjoignable());
        emailDetails.setTo(ordreKosc.getToReportDemandeManeoClientInjoignable());
        emailDetails.setObjet(ordreKosc.getObjetReportDemandeManeoClientInjoignable());
        emailDetails.setCorps(ordreKosc.getCorpsReportDemandeManeoClientInjoignable());
        try {

            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeReportDemandeManeoClientInjoignable(true);
            ordreKosc.setDateEnvoiReportDemandeManeoClientInjoignable(now);

        } catch (Exception exception) {
            //OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeReportDemandeManeoClientInjoignable(false);
            ordreKosc.setDateEnvoiReportDemandeManeoClientInjoignable(null);
            // ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }
        ordreKosc.setDatePriseRdv(now);
        saveAndInitDateDernierAppel(ordreKosc);


    }

    @Override
    public void sendMailReportDemandeManeoClientJoignableAccepte(OrdreKosc ordreKosc) {

        EmailDetails emailDetails = new EmailDetails();
        emailDetails.setFrom(ordreKosc.getFromReportDemandeManeoClientJoignableAccepte());
        emailDetails.setTo(ordreKosc.getToReportDemandeManeoClientJoignableAccepte());
        emailDetails.setObjet(ordreKosc.getObjetReportDemandeManeoClientJoignableAccepte());
        emailDetails.setCorps(ordreKosc.getCorpsReportDemandeManeoClientJoignableAccepte());
        try {
            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeReportDemandeManeoClientJoignableAccepte(true);
            ordreKosc.setDateEnvoiReportDemandeManeoClientJoignableAccepte(now);

        } catch (Exception exception) {
            //OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeReportDemandeManeoClientJoignableAccepte(false);
            ordreKosc.setDateEnvoiReportDemandeManeoClientJoignableAccepte(null);
            //ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }
        ordreKosc.setDatePriseRdv(now);
        saveAndInitDateDernierAppel(ordreKosc);

    }

    @Override
    public void sendMailReportDemandeManeoClientJoignableRefus(OrdreKosc ordreKosc) {

        EmailDetails emailDetails = new EmailDetails();
        emailDetails.setFrom(ordreKosc.getFromReportDemandeManeoClientJoignableRefus());
        emailDetails.setTo(ordreKosc.getToReportDemandeManeoClientJoignableRefus());
        emailDetails.setObjet(ordreKosc.getObjetReportDemandeManeoClientJoignableRefus());
        emailDetails.setCorps(ordreKosc.getCorpsReportDemandeManeoClientJoignableRefus());
        try {

            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeReportDemandeManeoClientJoignableRefus(true);
            ordreKosc.setDateEnvoiReportDemandeManeoClientJoignableRefus(now);

        } catch (Exception exception) {
            //  OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeReportDemandeManeoClientJoignableRefus(false);
            ordreKosc.setDateEnvoiReportDemandeManeoClientJoignableRefus(null);
            // ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }
        ordreKosc.setDatePriseRdv(now);
        saveAndInitDateDernierAppel(ordreKosc);


    }

    @Override
    public void sendMailReportDemandeClientClientInjoignable(OrdreKosc ordreKosc) {

        EmailDetails emailDetails = new EmailDetails();
        emailDetails.setFrom(ordreKosc.getFromReportDemandeClientClientInjoignable());
        emailDetails.setTo(ordreKosc.getToReportDemandeClientClientInjoignable());
        emailDetails.setObjet(ordreKosc.getObjetReportDemandeClientClientInjoignable());
        emailDetails.setCorps(ordreKosc.getCorpsReportDemandeClientClientInjoignable());
        try {

            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeReportDemandeClientClientInjoignable(true);
            ordreKosc.setDateEnvoiReportDemandeClientClientInjoignable(now);

        } catch (Exception exception) {
            // OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeReportDemandeClientClientInjoignable(false);
            ordreKosc.setDateEnvoiReportDemandeClientClientInjoignable(null);
            //ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }
        ordreKosc.setDatePriseRdv(now);
        saveAndInitDateDernierAppel(ordreKosc);

    }

    @Override
    public void sendMailReportDemandeClientClientJoignable(OrdreKosc ordreKosc) {

        EmailDetails emailDetails = new EmailDetails();
        emailDetails.setFrom(ordreKosc.getFromReportDemandeClientClientJoignable());
        emailDetails.setTo(ordreKosc.getToReportDemandeClientClientJoignable());
        emailDetails.setObjet(ordreKosc.getObjetReportDemandeClientClientJoignable());
        emailDetails.setCorps(ordreKosc.getCorpsReportDemandeClientClientJoignable());
        try {

            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeReportDemandeClientClientJoignable(true);
            ordreKosc.setDateEnvoiReportDemandeClientClientJoignable(now);

        } catch (Exception exception) {
            //OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeReportDemandeClientClientJoignable(false);
            ordreKosc.setDateEnvoiReportDemandeClientClientJoignable(null);
            // ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }
        ordreKosc.setDatePriseRdv(now);
        saveAndInitDateDernierAppel(ordreKosc);

    }

    @Override
    public void sendMailCri(OrdreKosc ordreKosc) {

        EmailDetails emailDetails = new EmailDetails();
        emailDetails.setFrom(ordreKosc.getFromCri());
        emailDetails.setTo(ordreKosc.getToCri());
        emailDetails.setObjet(ordreKosc.getObjetCri());
        emailDetails.setCorps(ordreKosc.getCorpsCri());
        try {

            emailSenderAdminService.sendEmail(emailDetails);
            ordreKosc.setEnvoyeCri(true);
            ordreKosc.setDateEnvoiCri(now);

        } catch (Exception exception) {
            //OrdreKosc myOrderKosc = ordreKoscAdminService.findById(ordreKosc.getId());
            ordreKosc.setEnvoyeCri(false);
            ordreKosc.setDateEnvoiCri(null);
            //ordreKosc.setEtatDemandeKosc(myOrderKosc.getEtatDemandeKosc());
        }
        ordreKosc.setDatePriseRdv(now);
        saveAndInitDateDernierAppel(ordreKosc);


    }


    private void saveAndInitDateDernierAppel(OrdreKosc ordreKosc) {
        ordreKosc.setDateEnvoiCri(null);
        if (ordreKosc.getDateTroisiemeAppel() == null && ordreKosc.getDateDeuxiemeAppel() != null) {
            ordreKosc.setDateTroisiemeAppel(now);
            ordreKosc.setDateDernierAppel(ordreKosc.getDateTroisiemeAppel());
            ordreKosc.setNumeroDernierAppel(3L);
        } else if (ordreKosc.getDatePremierAppel() != null && ordreKosc.getDateDeuxiemeAppel() == null) {
            ordreKosc.setDateDeuxiemeAppel(now);
            ordreKosc.setDateDernierAppel(ordreKosc.getDateDeuxiemeAppel());
            ordreKosc.setNumeroDernierAppel(2L);
        } else if (ordreKosc.getDatePremierAppel() == null) {
            ordreKosc.setDatePremierAppel(now);
            ordreKosc.setDateDernierAppel(ordreKosc.getDatePremierAppel());
            ordreKosc.setNumeroDernierAppel(1L);
        }
        setEmails(ordreKosc);
        prepareUser(ordreKosc);
        ordreKoscDao.save(ordreKosc);

    }

    private void prepareUser(OrdreKosc ordreKosc) {

        if (ordreKosc.getUserMauvaisContact() != null && StringUtil.isNotEmpty(ordreKosc.getUserMauvaisContact().getEmail())) {
            ordreKosc.setUserMauvaisContact(userDao.findByEmail(ordreKosc.getUserMauvaisContact().getEmail()));
        }
        if (ordreKosc.getUserAutre() != null && StringUtil.isNotEmpty(ordreKosc.getUserAutre().getEmail())) {
            ordreKosc.setUserAutre(userDao.findByEmail(ordreKosc.getUserAutre().getEmail()));
        }
        if (ordreKosc.getUserCri() != null && StringUtil.isNotEmpty(ordreKosc.getUserCri().getEmail())) {
            ordreKosc.setUserCri(userDao.findByEmail(ordreKosc.getUserCri().getEmail()));
        }
        if (ordreKosc.getUserFtl() != null && StringUtil.isNotEmpty(ordreKosc.getUserFtl().getEmail())) {
            ordreKosc.setUserFtl(userDao.findByEmail(ordreKosc.getUserFtl().getEmail()));
        }
        if (ordreKosc.getUserRefus() != null && StringUtil.isNotEmpty(ordreKosc.getUserRefus().getEmail())) {
            ordreKosc.setUserRefus(userDao.findByEmail(ordreKosc.getUserRefus().getEmail()));
        }

        if (ordreKosc.getUserClientInjoinable() != null && StringUtil.isNotEmpty(ordreKosc.getUserClientInjoinable().getEmail())) {
            ordreKosc.setUserClientInjoinable(userDao.findByEmail(ordreKosc.getUserClientInjoinable().getEmail()));
        }

        if (ordreKosc.getUserClientInjoinableKosc() != null && StringUtil.isNotEmpty(ordreKosc.getUserClientInjoinableKosc().getEmail())) {
            ordreKosc.setUserClientInjoinableKosc(userDao.findByEmail(ordreKosc.getUserClientInjoinableKosc().getEmail()));
        }

        if (ordreKosc.getUserConfirmationClient() != null && StringUtil.isNotEmpty(ordreKosc.getUserConfirmationClient().getEmail())) {
            ordreKosc.setUserConfirmationClient(userDao.findByEmail(ordreKosc.getUserConfirmationClient().getEmail()));
        }
        if (ordreKosc.getUserPlanification() != null && StringUtil.isNotEmpty(ordreKosc.getUserPlanification().getEmail())) {
            ordreKosc.setUserPlanification(userDao.findByEmail(ordreKosc.getUserPlanification().getEmail()));
        }

        if (ordreKosc.getUserReplanification() != null && StringUtil.isNotEmpty(ordreKosc.getUserReplanification().getEmail())) {
            ordreKosc.setUserReplanification(userDao.findByEmail(ordreKosc.getUserReplanification().getEmail()));
        }
        if (ordreKosc.getUserImportation() != null && StringUtil.isNotEmpty(ordreKosc.getUserImportation().getEmail())) {
            ordreKosc.setUserImportation(userDao.findByEmail(ordreKosc.getUserImportation().getEmail()));
        }
        if (ordreKosc.getUserReportDemandeClientClientInjoignable() != null && StringUtil.isNotEmpty(ordreKosc.getUserReportDemandeClientClientInjoignable().getEmail())) {
            ordreKosc.setUserReportDemandeClientClientInjoignable(userDao.findByEmail(ordreKosc.getUserReportDemandeClientClientInjoignable().getEmail()));
        }
        if (ordreKosc.getUserReportDemandeClientClientJoignable() != null && StringUtil.isNotEmpty(ordreKosc.getUserReportDemandeClientClientJoignable().getEmail())) {
            ordreKosc.setUserReportDemandeClientClientJoignable(userDao.findByEmail(ordreKosc.getUserReportDemandeClientClientJoignable().getEmail()));
        }

        if (ordreKosc.getUserReportDemandeManeoClientJoignableAccepte() != null && StringUtil.isNotEmpty(ordreKosc.getUserReportDemandeManeoClientJoignableAccepte().getEmail())) {
            ordreKosc.setUserReportDemandeManeoClientJoignableAccepte(userDao.findByEmail(ordreKosc.getUserReportDemandeManeoClientJoignableAccepte().getEmail()));
        }
        if (ordreKosc.getUserReportDemandeManeoClientJoignableRefus() != null && StringUtil.isNotEmpty(ordreKosc.getUserReportDemandeManeoClientJoignableRefus().getEmail())) {
            ordreKosc.setUserReportDemandeManeoClientJoignableRefus(userDao.findByEmail(ordreKosc.getUserReportDemandeManeoClientJoignableRefus().getEmail()));
        }
        if (ordreKosc.getUserReportDemandeManeoClientInjoignable() != null && StringUtil.isNotEmpty(ordreKosc.getUserReportDemandeManeoClientInjoignable().getEmail())) {
            ordreKosc.setUserReportDemandeManeoClientInjoignable(userDao.findByEmail(ordreKosc.getUserReportDemandeManeoClientInjoignable().getEmail()));
        }


    }


}
