package com.maneo.kosc.service.admin.impl.kosc;

import com.maneo.kosc.bean.kosc.OrdreKosc;
import com.maneo.kosc.dao.OrdreKoscDao;
import com.maneo.kosc.service.admin.facade.*;
import com.maneo.kosc.service.admin.facade.kosc.OrdreKoscPriseRdvAdminService;
import com.maneo.kosc.service.util.DateUtil;
import com.maneo.kosc.service.util.ListUtil;
import com.maneo.kosc.service.util.SearchUtil;
import com.maneo.kosc.ws.rest.provided.vo.OrdreKoscVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import java.util.*;

//import static jdk.internal.org.jline.utils.Colors.s;

@Service
public class OrdreKoscPriseRdvAdminServiceImpl implements OrdreKoscPriseRdvAdminService {
    @Autowired
    private EtatDemandeKoscAdminService etatDemandeKoscService;

    @Autowired
    private OrdreKoscDao ordreKoscDao;
    @Autowired
    private JourFerieAdminService jourFerieAdminService;
    @Autowired
    private EntityManager entityManager;



    public List<OrdreKosc> findByCriteriaPriseRdv(OrdreKoscVo ordreKoscVo) {


        String query = "SELECT o FROM OrdreKosc o where 1=1";

        query += SearchUtil.addConstraintDate("o", "submissionDate", "=", ordreKoscVo.getSubmissionDate());
        query += SearchUtil.addConstraintDate("o", "datePremierAppel", "=", ordreKoscVo.getDatePremierAppel());
        query += SearchUtil.addConstraintDate("o", "dateDeuxiemeAppel", "=", ordreKoscVo.getDateDeuxiemeAppel());
        query += SearchUtil.addConstraintDate("o", "dateTroisiemeAppel", "=", ordreKoscVo.getDateTroisiemeAppel());
        query += SearchUtil.addConstraintDate("o", "datePriseRdv", "=", ordreKoscVo.getDatePriseRdv());
        query += SearchUtil.addConstraintDate("o", "dateRdv", "=", ordreKoscVo.getDateRdv());
        query += SearchUtil.addConstraintMinMaxDate("o", "submissionDate", ordreKoscVo.getSubmissionDateMin(), ordreKoscVo.getSubmissionDateMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "datePremierAppel", ordreKoscVo.getDatePremierAppelMin(), ordreKoscVo.getDatePremierAppelMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateDeuxiemeAppel", ordreKoscVo.getDateDeuxiemeAppelMin(), ordreKoscVo.getDateDeuxiemeAppelMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateTroisiemeAppel", ordreKoscVo.getDateTroisiemeAppelMin(), ordreKoscVo.getDateTroisiemeAppelMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "datePriseRdv", ordreKoscVo.getDatePriseRdvMin(), ordreKoscVo.getDatePriseRdvMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateRdv", ordreKoscVo.getDateRdvMin(), ordreKoscVo.getDateRdvMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateOuverture", ordreKoscVo.getDateOuvertureMin(), ordreKoscVo.getDateOuvertureMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateEnvoiPlanification", ordreKoscVo.getDateEnvoiPlanificationMin(), ordreKoscVo.getDateEnvoiPlanificationMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateAppelReplanification", ordreKoscVo.getDateAppelReplanificationMin(), ordreKoscVo.getDateAppelReplanificationMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateInterventionTechniqueDebut", ordreKoscVo.getDateInterventionTechniqueDebutMin(), ordreKoscVo.getDateInterventionTechniqueDebutMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateInterventionTechniqueFin", ordreKoscVo.getDateInterventionTechniqueFinMin(), ordreKoscVo.getDateInterventionTechniqueFinMax());
        query += SearchUtil.addConstraintMinMax("o", "nbrHeureDateSubmissionAndNow", ordreKoscVo.getNbrHeureDateSubmissionAndNowMin(), ordreKoscVo.getNbrHeureDateSubmissionAndNowMax());
        if (ordreKoscVo.getOperatorVo() != null) {
            query += SearchUtil.addConstraint("o", "operator.id", "=", ordreKoscVo.getOperatorVo().getId());
            query += SearchUtil.addConstraint("o", "operator.reference", "LIKE", ordreKoscVo.getOperatorVo().getReference());
        }

        if (ordreKoscVo.getDepartementVo() != null) {
            query += SearchUtil.addConstraint("o", "departement.id", "=", ordreKoscVo.getDepartementVo().getId());
            query += SearchUtil.addConstraint("o", "departement.code", "LIKE", ordreKoscVo.getDepartementVo().getCode());
        }

        if (ordreKoscVo.getTechnicienVo() != null) {
            query += SearchUtil.addConstraint("o", "technicien.id", "=", ordreKoscVo.getTechnicienVo().getId());
            query += SearchUtil.addConstraint("o", "technicien.identifiant", "LIKE", ordreKoscVo.getTechnicienVo().getIdentifiant());
        }

        if (ListUtil.isNotEmpty(ordreKoscVo.getEtatDemandeKoscVos())){
            query+= " AND o.etatDemandeKosc.id IN ("+etatDemandeKoscService.convertId(ordreKoscVo.getEtatDemandeKoscVos())+")";
        }

        query += " ORDER BY o.nbrHeureDateSubmissionAndNow DESC, o.submissionDate ASC";


        List<OrdreKosc> resultList = entityManager.createQuery(query).getResultList();
        calculerDifferenceDateSubmission(resultList);

        return resultList;
    }




    public List<OrdreKosc> findDemain(){
        return ordreKoscDao.findByDateRdvBetween(DateUtil.getDemain(), DateUtil.getApresDemain());
    }
    public List<OrdreKosc> findApresDemain(){
        return ordreKoscDao.findByDateRdvBetween(DateUtil.getApresDemain(), DateUtil.getApresApresDemain());
    }
    public List<OrdreKosc> findApresApresDemain(){
        return ordreKoscDao.findByDateRdvBetween(DateUtil.getApresApresDemain(), DateUtil.getApresApresApresDemain());
    }

    private void initDateDernierAppel(OrdreKosc ordreKosc) {
        if(ordreKosc.getDateTroisiemeAppel()!=null){
            ordreKosc.setDateDernierAppel(ordreKosc.getDateTroisiemeAppel());
            ordreKosc.setNumeroDernierAppel(3L);
        }else if(ordreKosc.getDateDeuxiemeAppel()!=null){
            ordreKosc.setDateDernierAppel(ordreKosc.getDateDeuxiemeAppel());
            ordreKosc.setNumeroDernierAppel(2L);
        }else if(ordreKosc.getDatePremierAppel()!=null){
            ordreKosc.setDateDernierAppel(ordreKosc.getDatePremierAppel());
            ordreKosc.setNumeroDernierAppel(1L);
        }
    }

    private void calculerDifferenceDateSubmission(List<OrdreKosc> ordreKoscs){
        if(ordreKoscs != null){
            for (OrdreKosc ordreKosc : ordreKoscs) {
                Date now = new Date();
                Long totalJourWithoutWeekEnd = DateUtil.totalJourWithoutWeekEnd(ordreKosc.getSubmissionDate(), now);
                Long jourFierie = jourFerieAdminService.calcNombreJourTotal(ordreKosc.getSubmissionDate() , now);
                System.out.println("totalJourWithoutWeekEnd = " + totalJourWithoutWeekEnd+"  jourFierie = " + jourFierie);
                long res = DateUtil.calculerDifferenceHeure(ordreKosc.getSubmissionDate());
                ordreKosc.setNbrHeureDateSubmissionAndNow((totalJourWithoutWeekEnd -jourFierie)*24);
                ordreKoscDao.save(ordreKosc);
            }
        }
    }

    @Override
    public OrdreKosc findByReferenceWorkOrder(String referenceWorkOrder) {
        if (referenceWorkOrder == null) return null;
        return ordreKoscDao.findByReferenceWorkOrder(referenceWorkOrder);
    }

    @Override
    public OrdreKosc updateNonJoignable(OrdreKosc ordreKosc) {
        OrdreKosc foundedOrdreKosc = findByReferenceWorkOrder(ordreKosc.getReferenceWorkOrder());
        foundedOrdreKosc.getEtatDemandeKosc().setCode("report-demande-client-cl-j");
        return ordreKoscDao.save(foundedOrdreKosc);
    }

    @Override
    public OrdreKosc updateMauvaisContact(OrdreKosc ordreKosc) {
        ordreKosc.getEtatDemandeKosc().setCode("mauvais-contact");
        return ordreKoscDao.save(ordreKosc);
    }

    @Override
    public OrdreKosc updateClientRefus(OrdreKosc ordreKosc) {
        ordreKosc.getEtatDemandeKosc().setCode("refus-client");
        return ordreKoscDao.save(ordreKosc);
    }

    @Override
    public OrdreKosc updateAutre(OrdreKosc ordreKosc) {
        ordreKosc.getEtatDemandeKosc().setCode("autre");
        return ordreKoscDao.save(ordreKosc);
    }

}