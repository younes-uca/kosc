package com.maneo.kosc.service.admin.impl.kosc;

import com.maneo.kosc.bean.kosc.OrdreKosc;
import com.maneo.kosc.dao.EtatDemandeKoscDao;
import com.maneo.kosc.dao.OrdreKoscDao;
import com.maneo.kosc.service.admin.facade.kosc.OrdreKoscSuivRdvAdminService;
import com.maneo.kosc.service.util.SearchUtil;
import com.maneo.kosc.ws.rest.provided.vo.EtatDemandeKoscVo;
import com.maneo.kosc.ws.rest.provided.vo.OrdreKoscVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import java.util.List;
//import static jdk.internal.org.jline.utils.Colors.s;

@Service
public class OrdreKoscSuiviRdvAdminServiceImpl implements OrdreKoscSuivRdvAdminService {


    @Autowired
    private EntityManager entityManager;
    @Autowired
    EtatDemandeKoscDao etatDemandeKoscDao;
    @Autowired
    OrdreKoscDao ordreKoscDao;

    public List<OrdreKosc> findByCriteriaSuiviRdv(OrdreKoscVo ordreKoscVo) {

        String query = "SELECT o FROM OrdreKosc o where 1=1";

        query += SearchUtil.addConstraint("o", "id", "=", ordreKoscVo.getId());
        query += SearchUtil.addConstraint("o", "erdv", "=", ordreKoscVo.getErdv());
        query += SearchUtil.addConstraint("o", "reference", "LIKE", ordreKoscVo.getReference());
        query += SearchUtil.addConstraint("o", "referenceWorkOrder", "LIKE", ordreKoscVo.getReferenceWorkOrder());
        query += SearchUtil.addConstraint("o", "codeDecharge", "LIKE", ordreKoscVo.getCodeDecharge());
        query += SearchUtil.addConstraintDate("o", "datePriseRdv", "=", ordreKoscVo.getDatePriseRdv());
        query += SearchUtil.addConstraintDate("o", "dateRdv", "=", ordreKoscVo.getDateRdv());
        query += SearchUtil.addConstraintDate("o", "dateEnvoiCri", "=", ordreKoscVo.getDateEnvoiCri());
        query += SearchUtil.addConstraintMinMaxDate("o", "datePriseRdv", ordreKoscVo.getDatePriseRdvMin(), ordreKoscVo.getDatePriseRdvMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateRdv", ordreKoscVo.getDateRdvMin(), ordreKoscVo.getDateRdvMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateOuverture", ordreKoscVo.getDateOuvertureMin(), ordreKoscVo.getDateOuvertureMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateEnvoiPlanification", ordreKoscVo.getDateEnvoiPlanificationMin(), ordreKoscVo.getDateEnvoiPlanificationMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateAppelReplanification", ordreKoscVo.getDateAppelReplanificationMin(), ordreKoscVo.getDateAppelReplanificationMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateEnvoiReport", ordreKoscVo.getDateEnvoiReportMin(), ordreKoscVo.getDateEnvoiReportMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateEnvoiReplanification", ordreKoscVo.getDateEnvoiReplanificationMin(), ordreKoscVo.getDateEnvoiReplanificationMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateEnvoiConfirmationClient", ordreKoscVo.getDateEnvoiConfirmationClientMin(), ordreKoscVo.getDateEnvoiConfirmationClientMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateEnvoiCri", ordreKoscVo.getDateEnvoiCriMin(), ordreKoscVo.getDateEnvoiCriMax());
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


        System.out.println("query = " + query);
        
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public OrdreKosc updateEtat(OrdreKosc ordreKosc) {
        if(ordreKosc.getEtatDemandeKosc()!=null)
        ordreKosc.setEtatDemandeKosc(etatDemandeKoscDao.findByCode(ordreKosc.getEtatDemandeKosc().getCode()));
        return ordreKoscDao.save(ordreKosc);
    }

    private String convertId(List<EtatDemandeKoscVo> etatDemandeKoscVos) {
            String res="";
            for(EtatDemandeKoscVo etatDemandeKoscVo: etatDemandeKoscVos){
                res+="'"+etatDemandeKoscVo.getId()+"' ,";
            }
            
            return  res.substring(0,res.length()-2);
        }




}

