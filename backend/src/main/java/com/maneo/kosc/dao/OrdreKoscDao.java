package com.maneo.kosc.dao;

import com.maneo.kosc.bean.Technicien;
import com.maneo.kosc.ws.rest.provided.vo.OrdreKoscVo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.maneo.kosc.bean.OrdreKosc;


@Repository
public interface OrdreKoscDao extends JpaRepository<OrdreKosc, Long> {
    @Query("SELECT item FROM OrdreKosc item")
    List<OrdreKosc> findAll();

    @Query("SELECT item.technicien FROM OrdreKosc item where item.dateRdv = :dateRdv")
    List<Technicien> findTechnicienByDateRndv(Date dateRdv);


    List<OrdreKosc> findByDateRdvBetween(Date dateMin, Date dateMax );


    OrdreKosc findByReferenceWorkOrder(String referenceWorkOrder);

    OrdreKosc findByReference(String reference);

    int deleteByReferenceWorkOrder(String referenceWorkOrder);

    List<OrdreKosc> findByOperatorReference(String reference);

    int deleteByOperatorReference(String reference);

    List<OrdreKosc> findByOperatorId(Long id);

    int deleteByOperatorId(Long id);

    List<OrdreKosc> findByDepartementCode(String code);

    int deleteByDepartementCode(String code);

    List<OrdreKosc> findByDepartementId(Long id);

    int deleteByDepartementId(Long id);

    List<OrdreKosc> findByTechnicienIdentifiant(String identifiant);

    int deleteByTechnicienIdentifiant(String identifiant);

    List<OrdreKosc> findByTechnicienId(Long id);

    int deleteByTechnicienId(Long id);

    List<OrdreKosc> findByTemplateEmailPlanificationId(Long id);

    int deleteByTemplateEmailPlanificationId(Long id);




    List<OrdreKosc> findByTemplateEmailReplanificationId(Long id);

    int deleteByTemplateEmailReplanificationId(Long id);

    List<OrdreKosc> findByTemplateEmailRefusId(Long id);

    int deleteByTemplateEmailRefusId(Long id);

    List<OrdreKosc> findByTemplateEmailMauvaisContactId(Long id);

    int deleteByTemplateEmailMauvaisContactId(Long id);

    List<OrdreKosc> findByTemplateEmailConfirmationClientId(Long id);

    int deleteByTemplateEmailConfirmationClientId(Long id);

    List<OrdreKosc> findByTemplateEmailCriId(Long id);

    int deleteByTemplateEmailCriId(Long id);

    List<OrdreKosc> findByTemplateEmailFtlId(Long id);

    int deleteByTemplateEmailFtlId(Long id);

    List<OrdreKosc> findByTemplateEmailClientInjoinableId(Long id);

    int deleteByTemplateEmailClientInjoinableId(Long id);

    List<OrdreKosc> findByTemplateEmailClientInjoinableKoscId(Long id);

    int deleteByTemplateEmailClientInjoinableKoscId(Long id);

    List<OrdreKosc> findByEtatDemandeKoscCode(String code);

    int deleteByEtatDemandeKoscCode(String code);

    List<OrdreKosc> findByEtatDemandeKoscId(Long id);

    int deleteByEtatDemandeKoscId(Long id);

    List<OrdreKosc> findByTemplateEmailClotureId(Long id);

    int deleteByTemplateEmailClotureId(Long id);

    List<OrdreKosc> findByTemplateSuiviId(Long id);

    int deleteByTemplateSuiviId(Long id);

    List<OrdreKosc> findByCauseKoOkCode(String code);

    int deleteByCauseKoOkCode(String code);

    List<OrdreKosc> findByCauseKoOkId(Long id);

    int deleteByCauseKoOkId(Long id);

    List<OrdreKosc> findBySourceReplanificationCode(String code);

    int deleteBySourceReplanificationCode(String code);

    List<OrdreKosc> findBySourceReplanificationId(Long id);

    int deleteBySourceReplanificationId(Long id);


    OrdreKosc findByReferenceWorkOrderAndReference(String referenceWorkOrder, String reference);

    OrdreKosc findByReferencePrise(String referencePrise);
    OrdreKosc findByReferenceCommandePriseInterneOC(String referencePrise);


    @Query("SELECT item FROM OrdreKosc item WHERE item.referenceWorkOrder = :referenceWorkOrder AND item.etatDemandeKosc.code NOT IN ('initialisation-wo')")
    OrdreKosc findByReferenceWorkOrderAndEtat(String referenceWorkOrder);
}
