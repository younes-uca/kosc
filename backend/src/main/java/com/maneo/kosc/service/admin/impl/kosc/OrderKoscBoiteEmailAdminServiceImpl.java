package com.maneo.kosc.service.admin.impl.kosc;

import com.maneo.kosc.bean.kosc.OrdreKosc;
import com.maneo.kosc.service.admin.facade.kosc.OrderKoscBoiteEmailAdminService;
import com.maneo.kosc.service.util.SearchUtil;
import com.maneo.kosc.service.util.StringUtil;
import com.maneo.kosc.ws.rest.provided.vo.kosc.OrdreKoscVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import java.util.List;

@Service
public class OrderKoscBoiteEmailAdminServiceImpl implements OrderKoscBoiteEmailAdminService {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<OrdreKosc> findEmail(OrdreKoscVo ordreKoscVo) {
        String suffix = getSuffix(ordreKoscVo);

        String query = "SELECT k FROM OrdreKosc k WHERE 1=1";

        query += SearchUtil.addConstraint("k", "objet" + suffix, "LIKE", ordreKoscVo.getObject());
        query += SearchUtil.addConstraint("k", "envoi" + suffix, "=", ordreKoscVo.getEnvoi());
        query += SearchUtil.addConstraintMinMaxDate("k", "dateEnvoi" + suffix, ordreKoscVo.getDateEnvoiMin(), ordreKoscVo.getDateEnvoiMax());
        query += SearchUtil.addConstraint("k", "form" + suffix, "LIKE", ordreKoscVo.getFrom());
        query += SearchUtil.addConstraint("k", "to" + suffix, "LIKE", ordreKoscVo.getTo());
        if (ordreKoscVo.getUserEnvoi() != null) {
            query += SearchUtil.addConstraint("k", "user" + suffix + ".id", "=", ordreKoscVo.getUserEnvoi().getId());
        }

        System.out.println("query = " + query);
        List<OrdreKosc> resultList = entityManager.createQuery(query).getResultList();
        setAttribute(suffix, resultList);
        return resultList;
    }

    private void setAttribute(String suffix, List<OrdreKosc> resultList) {
        if (suffix.equals("Planification")) {
            for (OrdreKosc ordreKosc : resultList) {
                ordreKosc.setUserEnvoi(ordreKosc.getUserPlanification());
                ordreKosc.setObject(ordreKosc.getObjetPlanification());
                ordreKosc.setFrom(ordreKosc.getFromPlanification());
                ordreKosc.setTo(ordreKosc.getToPlanification());
                ordreKosc.setDateEnvoi(ordreKosc.getDateEnvoiPlanification());
                ordreKosc.setCorps(ordreKosc.getCorpsPlanification());
            }
        }
        if (suffix.equals("refus-client")) {
            for (OrdreKosc ordreKosc : resultList) {
                ordreKosc.setUserEnvoi(ordreKosc.getUserRefus());
                ordreKosc.setObject(ordreKosc.getObjetRefus());
                ordreKosc.setFrom(ordreKosc.getFromRefus());
                ordreKosc.setTo(ordreKosc.getToRefus());
                ordreKosc.setDateEnvoi(ordreKosc.getDateEnvoiRefus());
                ordreKosc.setCorps(ordreKosc.getCorpsRefus());
            }
        }
        if (suffix.equals("confirmation-client")) {
            for (OrdreKosc ordreKosc : resultList) {
                ordreKosc.setUserEnvoi(ordreKosc.getUserConfirmationClient());
                ordreKosc.setObject(ordreKosc.getObjetConfirmationClient());
                ordreKosc.setFrom(ordreKosc.getFromConfirmationClient());
                ordreKosc.setTo(ordreKosc.getToConfirmationClient());
                ordreKosc.setDateEnvoi(ordreKosc.getDateEnvoiConfirmationClient());
                ordreKosc.setCorps(ordreKosc.getCorpsConfirmationClient());
            }
        }
        if (suffix.equals("report-demande-maneo-cl-inj")) {
            for (OrdreKosc ordreKosc : resultList) {
                ordreKosc.setUserEnvoi(ordreKosc.getUserReportDemandeManeoClientInjoignable());
                ordreKosc.setObject(ordreKosc.getObjetReportDemandeManeoClientInjoignable());
                ordreKosc.setFrom(ordreKosc.getFromReportDemandeManeoClientInjoignable());
                ordreKosc.setTo(ordreKosc.getToReportDemandeManeoClientInjoignable());
                ordreKosc.setDateEnvoi(ordreKosc.getDateEnvoiReportDemandeManeoClientInjoignable());
                ordreKosc.setCorps(ordreKosc.getCorpsReportDemandeManeoClientInjoignable());
            }
        }
        if (suffix.equals("report-demande-maneo-cl-j-accepte")) {
            for (OrdreKosc ordreKosc : resultList) {
                ordreKosc.setUserEnvoi(ordreKosc.getUserReportDemandeManeoClientJoignableAccepte());
                ordreKosc.setObject(ordreKosc.getObjetReportDemandeManeoClientJoignableAccepte());
                ordreKosc.setFrom(ordreKosc.getFromReportDemandeManeoClientJoignableAccepte());
                ordreKosc.setTo(ordreKosc.getToReportDemandeManeoClientJoignableAccepte());
                ordreKosc.setDateEnvoi(ordreKosc.getDateEnvoiReportDemandeManeoClientJoignableAccepte());
                ordreKosc.setCorps(ordreKosc.getCorpsReportDemandeManeoClientJoignableAccepte());
            }
        }
        if (suffix.equals("report-demande-maneo-cl-j-refus")) {
            for (OrdreKosc ordreKosc : resultList) {
                ordreKosc.setUserEnvoi(ordreKosc.getUserReportDemandeManeoClientJoignableRefus());
                ordreKosc.setObject(ordreKosc.getObjetReportDemandeManeoClientJoignableRefus());
                ordreKosc.setFrom(ordreKosc.getFromReportDemandeManeoClientJoignableRefus());
                ordreKosc.setTo(ordreKosc.getToReportDemandeManeoClientJoignableRefus());
                ordreKosc.setDateEnvoi(ordreKosc.getDateEnvoiReportDemandeManeoClientJoignableRefus());
                ordreKosc.setCorps(ordreKosc.getCorpsReportDemandeManeoClientJoignableRefus());
            }
        }
        if (suffix.equals("report-demande-client-cl-j")) {
            for (OrdreKosc ordreKosc : resultList) {
                ordreKosc.setUserEnvoi(ordreKosc.getUserReportDemandeClientClientJoignable());
                ordreKosc.setObject(ordreKosc.getObjetReportDemandeClientClientJoignable());
                ordreKosc.setFrom(ordreKosc.getFromReportDemandeClientClientJoignable());
                ordreKosc.setTo(ordreKosc.getToReportDemandeClientClientJoignable());
                ordreKosc.setDateEnvoi(ordreKosc.getDateEnvoiReportDemandeClientClientJoignable());
                ordreKosc.setCorps(ordreKosc.getCorpsReportDemandeClientClientJoignable());
            }
        }
        if (suffix.equals("report-demande-client-cl-inj")) {
            for (OrdreKosc ordreKosc : resultList) {
                ordreKosc.setUserEnvoi(ordreKosc.getUserReportDemandeClientClientInjoignable());
                ordreKosc.setObject(ordreKosc.getObjetReportDemandeClientClientInjoignable());
                ordreKosc.setFrom(ordreKosc.getFromReportDemandeClientClientInjoignable());
                ordreKosc.setTo(ordreKosc.getToReportDemandeClientClientInjoignable());
                ordreKosc.setDateEnvoi(ordreKosc.getDateEnvoiReportDemandeClientClientInjoignable());
                ordreKosc.setCorps(ordreKosc.getCorpsReportDemandeClientClientInjoignable());
            }
        }if (suffix.equals("mauvais-contact")) {
            for (OrdreKosc ordreKosc : resultList) {
                ordreKosc.setUserEnvoi(ordreKosc.getUserMauvaisContact());
                ordreKosc.setObject(ordreKosc.getObjetMauvaisContact());
                ordreKosc.setFrom(ordreKosc.getFromMauvaisContact());
                ordreKosc.setTo(ordreKosc.getToMauvaisContact());
                ordreKosc.setDateEnvoi(ordreKosc.getDateEnvoiMauvaisContact());
                ordreKosc.setCorps(ordreKosc.getCorpsMauvaisContact());
            }
        }if (suffix.equals("client-injoinable")) {
            for (OrdreKosc ordreKosc : resultList) {
                ordreKosc.setUserEnvoi(ordreKosc.getUserClientInjoinable());
                ordreKosc.setObject(ordreKosc.getObjetClientInjoinable());
                ordreKosc.setFrom(ordreKosc.getFromClientInjoinable());
                ordreKosc.setTo(ordreKosc.getToClientInjoinable());
                ordreKosc.setDateEnvoi(ordreKosc.getDateEnvoiClientInjoinable());
                ordreKosc.setCorps(ordreKosc.getCorpsClientInjoinable());
            }
        }
        if (suffix.equals("autre")) {
            for (OrdreKosc ordreKosc : resultList) {
                ordreKosc.setUserEnvoi(ordreKosc.getUserAutre());
                ordreKosc.setObject(ordreKosc.getObjetAutre());
                ordreKosc.setFrom(ordreKosc.getFromAutre());
                ordreKosc.setTo(ordreKosc.getToAutre());
                ordreKosc.setDateEnvoi(ordreKosc.getDateEnvoiAutre());
                ordreKosc.setCorps(ordreKosc.getCorpsAutre());
            }
        }
    }

    private String getSuffix(OrdreKoscVo ordreKoscVo) {
        String suffix = "";

        if (ordreKoscVo.getEtatDemandeKoscVo() != null) {
            String code = ordreKoscVo.getEtatDemandeKoscVo().getCode();
            if (code != null) {
                if (code.equals("planification")) {
                    suffix = "Planification";
                } else if (code.equals("refus-client")) {
                    suffix = "Refus";
                } else if (code.equals("confirmation-client")) {
                    suffix = "ConfirmationClient";
                } else if (code.equals("report-demande-maneo-cl-inj")) {
                    suffix = "ReportDemandeManeoClientInjoignable";
                } else if (code.equals("report-demande-maneo-cl-j-accepte")) {
                    suffix = "ReportDemandeManeoClientJoignableAccepte";
                } else if (code.equals("report-demande-maneo-cl-j-refus")) {
                    suffix = "ReportDemandeManeoClientJoignableRefus";
                } else if (code.equals("report-demande-client-cl-j")) {
                    suffix = "ReportDemandeClientClientJoignable";
                } else if (code.equals("report-demande-client-cl-inj")) {
                    suffix = "ReportDemandeClientClientInjoignable";
                } else if (code.equals("mauvais-contact")) {
                    suffix = "MauvaisContact";
                } else if (code.equals("client-injoinable")) {
                    suffix = "ClientInjoinable";
                } else if (code.equals("autre")) {
                    suffix = "Autre";
                }
            }
        }
        return suffix;
    }
}
