package com.maneo.kosc.service.admin.facade.kosc;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import com.maneo.kosc.bean.kosc.OrdreKosc;
import com.maneo.kosc.ws.rest.provided.vo.kosc.OrdreKoscVo;
import com.maneo.kosc.service.core.facade.AbstractService;
import com.maneo.kosc.ws.rest.provided.vo.StatisticResultVo;
import com.maneo.kosc.ws.rest.provided.vo.StatisticVo;

public interface OrdreKoscAdminService extends AbstractService<OrdreKosc, Long, OrdreKoscVo> {


    /**
     * find OrdreKosc from database by referenceWorkOrder (reference)
     *
     * @param referenceWorkOrder - reference of OrdreKosc
     * @return the founded OrdreKosc , If no OrdreKosc were
     * found in database return  null.
     */
    OrdreKosc findByReferenceWorkOrder(String referenceWorkOrder);

    /**
     * find OrdreKosc from database by id (PK) or referenceWorkOrder (reference)
     *
     * @param id                 - id of OrdreKosc
     * @param referenceWorkOrder - reference of OrdreKosc
     * @return the founded OrdreKosc , If no OrdreKosc were
     * found in database return  null.
     */
    OrdreKosc findByIdOrReferenceWorkOrder(OrdreKosc ordreKosc);


    /**
     * delete OrdreKosc from database
     *
     * @param id - id of OrdreKosc to be deleted
     */
    int deleteById(Long id);

    List<OrdreKosc> findByYearAndMonth(int annee, int mois);


    List<OrdreKosc> findSuivi();


    List<StatisticVo> findOrdreKoscByDelaiPriseRdvParHeureAndSubmissionDateLessThanDay(Date submissionDateMin, Date submissionDateMax);

    List<StatisticVo> findOrdreKoscByDelaiPriseRdvParHeureAndSubmissionDateBetweenTwoDays(Date submissionDateMin, Date submissionDateMax);

    List<StatisticVo> findOrdreKoscByDelaiPriseRdvParHeureAndSubmissionDateCreaterThanTwoDays(Date submissionDateMin, Date submissionDateMax);


    List<StatisticResultVo> calculerStatistic(Date submissionDateMin, Date submissionDateMax);

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

    List<OrdreKosc> findByMontantDevis(BigDecimal montantDevis);

    int deleteByMontantDevis(BigDecimal montantDevis);

    int deleteBySourceReplanificationId(Long id);


    /**
     * delete OrdreKosc from database by referenceWorkOrder (reference)
     *
     * @param referenceWorkOrder - reference of OrdreKosc to be deleted
     * @return 1 if OrdreKosc deleted successfully
     */
    int deleteByReferenceWorkOrder(String referenceWorkOrder);


    List<OrdreKosc> findByCriteriaOrderKoscImport(OrdreKoscVo ordreKoscVo);


    List<OrdreKosc> findSuiviByCriteria(OrdreKoscVo ordreKoscVo);
}
