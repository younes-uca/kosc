package com.maneo.kosc.service.admin.impl;

import com.maneo.kosc.bean.OrdreKosc;
import com.maneo.kosc.dao.OrdreKoscDao;
import com.maneo.kosc.service.admin.facade.OrdreKoscSuiviCddAdminService;
import com.maneo.kosc.service.util.SearchUtil;
import com.maneo.kosc.ws.rest.provided.vo.EtatDemandeKoscVo;
import com.maneo.kosc.ws.rest.provided.vo.OrdreKoscVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import java.util.List;

//import static jdk.internal.org.jline.utils.Colors.s;

@Service
public class OrdreKoscSuiviCddAdminServiceImpl implements OrdreKoscSuiviCddAdminService {


    @Autowired
    private OrdreKoscDao ordreKoscDao;
    @Autowired
    private EntityManager entityManager;



    public List<OrdreKosc> findByCriteriaSuiviCdd(OrdreKoscVo ordreKoscVo) {


        String query = "SELECT o FROM OrdreKosc o where 1=1";

        query += SearchUtil.addConstraint("o", "reference", "LIKE", ordreKoscVo.getReference());
        query += SearchUtil.addConstraint("o", "referenceWorkOrder", "LIKE", ordreKoscVo.getReferenceWorkOrder());
        query += SearchUtil.addConstraintDate("o", "datePriseRdv", "=", ordreKoscVo.getDatePriseRdv());

        query += SearchUtil.addConstraintMinMaxDate("o", "datePriseRdv", ordreKoscVo.getDatePriseRdvMin(), ordreKoscVo.getDatePriseRdvMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateEnvoiSuivi", ordreKoscVo.getDateEnvoiSuiviMin(), ordreKoscVo.getDateEnvoiSuiviMax());
        query += SearchUtil.addConstraintMinMax("o", "nbrHeureDateSubmissionAndNow", ordreKoscVo.getNbrHeureDateSubmissionAndNowMin(), ordreKoscVo.getNbrHeureDateSubmissionAndNowMax());
        query += SearchUtil.addConstraintMinMax("o", "dateEnvoiCri", ordreKoscVo.getDateEnvoiCriMin(), ordreKoscVo.getDateEnvoiCriMax());
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

        if (ordreKoscVo.getCodeDecharge() != null) {
            query += SearchUtil.addConstraint("o", "codeDecharge", "LIKE", ordreKoscVo.getCodeDecharge());
        }

        if (ordreKoscVo.getEtatDemandeKoscVos() != null){
            query+= " AND o.etatDemandeKosc.id IN ("+convertId(ordreKoscVo.getEtatDemandeKoscVos())+")";
        }

        query += " AND o.codeDecharge is NOT NULL";

        query += " ORDER BY o.nbrHeureDateSubmissionAndNow DESC, o.submissionDate ASC";


        List<OrdreKosc> resultList = entityManager.createQuery(query).getResultList();

        return resultList;
    }


    private String convertId(List<EtatDemandeKoscVo> etatDemandeKoscVos) {
        String res="";
        for(EtatDemandeKoscVo etatDemandeKoscVo: etatDemandeKoscVos){
            res+="'"+etatDemandeKoscVo.getId()+"' ,";
        }
        return  res.substring(0,res.length()-2);
    }


}