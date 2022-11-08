package com.maneo.kosc.service.admin.impl;

import com.maneo.kosc.bean.*;
import com.maneo.kosc.dao.OrdreKoscDao;
import com.maneo.kosc.service.admin.facade.*;
import com.maneo.kosc.service.core.impl.AbstractServiceImpl;
import com.maneo.kosc.service.util.DateUtil;
import com.maneo.kosc.service.util.ListUtil;
import com.maneo.kosc.service.util.SearchUtil;
import com.maneo.kosc.service.util.StringUtil;
import com.maneo.kosc.ws.rest.provided.vo.EtatDemandeKoscVo;
import com.maneo.kosc.ws.rest.provided.vo.OrdreKoscVo;
import com.maneo.kosc.ws.rest.provided.vo.StatisticResultVo;
import com.maneo.kosc.ws.rest.provided.vo.StatisticVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

//import static jdk.internal.org.jline.utils.Colors.s;

@Service
public class OrdreKoscPriseRdvAdminServiceImpl implements OrdreKoscPriseRdvAdminService {


    @Autowired
    private OrdreKoscDao ordreKoscDao;
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

        if (ordreKoscVo.getEtatDemandeKoscVos() != null){
            query+= " AND o.etatDemandeKosc.id IN ("+convertId(ordreKoscVo.getEtatDemandeKoscVos())+")";
        }

        query += " ORDER BY o.nbrHeureDateSubmissionAndNow DESC, o.submissionDate ASC";


        List<OrdreKosc> resultList = entityManager.createQuery(query).getResultList();
        calculerDifferenceDateSubmission(resultList);

        return resultList;
    }

    private String convertId(List<EtatDemandeKoscVo> etatDemandeKoscVos) {
        String res="";
        for(EtatDemandeKoscVo etatDemandeKoscVo: etatDemandeKoscVos){
            res+="'"+etatDemandeKoscVo.getId()+"' ,";
        }
        return  res.substring(0,res.length()-2);
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
                long res = DateUtil.calculerDifference(ordreKosc.getSubmissionDate());
                ordreKosc.setNbrHeureDateSubmissionAndNow(res);
                ordreKoscDao.save(ordreKosc);
            }
        }
    }

}