package com.maneo.kosc.service.admin.impl;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

import com.maneo.kosc.bean.*;
import com.maneo.kosc.service.admin.facade.*;
import com.maneo.kosc.ws.rest.provided.vo.EtatDemandeKoscVo;
import com.maneo.kosc.ws.rest.provided.vo.StatisticResultVo;
import com.maneo.kosc.ws.rest.provided.vo.StatisticVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;


import javax.persistence.EntityManager;

import com.maneo.kosc.dao.OrdreKoscDao;

import com.maneo.kosc.ws.rest.provided.vo.OrdreKoscVo;
import com.maneo.kosc.service.util.*;

import com.maneo.kosc.service.core.impl.AbstractServiceImpl;

//import static jdk.internal.org.jline.utils.Colors.s;

@Service
public class OrdreKoscAdminServiceImpl extends AbstractServiceImpl<OrdreKosc> implements OrdreKoscAdminService {

    @Autowired
    private OrdreKoscDao ordreKoscDao;

    @Autowired
    private TemplateEmailReplanificationAdminService templateEmailReplanificationService;
    @Autowired
    private TemplateEmailPlanificationAdminService templateEmailPlanificationService;
    @Autowired
    private TemplateSuiviAdminService templateSuiviService;
    @Autowired
    private OperatorAdminService operatorService;
    @Autowired
    private SourceReplanificationAdminService sourceReplanificationService;
    @Autowired
    private TemplateEmailClientInjoinableKoscAdminService templateEmailClientInjoinableKoscService;
    @Autowired
    private CauseKoOkAdminService causeKoOkService;
    @Autowired
    private TemplateEmailClientInjoinableAdminService templateEmailClientInjoinableService;
    @Autowired
    private EtatDemandeKoscAdminService etatDemandeKoscService;
    @Autowired
    private TemplateEmailFtlAdminService templateEmailFtlService;
    @Autowired
    private TemplateEmailClotureAdminService templateEmailClotureService;
    @Autowired
    private TemplateEmailRefusAdminService templateEmailRefusService;
    @Autowired
    private TemplateEmailConfirmationClientAdminService templateEmailConfirmationClientService;
    @Autowired
    private DepartementAdminService departementService;
    @Autowired
    private TemplateEmailReportAdminService templateEmailReportService;
    @Autowired
    private TemplateEmailMauvaisContactAdminService templateEmailMauvaisContactService;
    @Autowired
    private TechnicienAdminService technicienService;
    @Autowired
    private TemplateEmailCriAdminService templateEmailCriService;


    @Autowired
    private EntityManager entityManager;


    public List<OrdreKosc> findByCriteriaOrderKoscImport(OrdreKoscVo ordreKoscVo) {

        String query = "SELECT o FROM OrdreKosc o where 1=1";

        query += SearchUtil.addConstraint("o", "id", "=", ordreKoscVo.getId());
        query += SearchUtil.addConstraint("o", "erdv", "=", ordreKoscVo.getErdv());
        query += SearchUtil.addConstraint("o", "confort", "=", ordreKoscVo.getConfort());
        query += SearchUtil.addConstraint("o", "reference", "LIKE", ordreKoscVo.getReference());
        query += SearchUtil.addConstraint("o", "referenceWorkOrder", "LIKE", ordreKoscVo.getReferenceWorkOrder());
        query += SearchUtil.addConstraint("o", "codeDecharge", "LIKE", ordreKoscVo.getCodeDecharge());
        query += SearchUtil.addConstraint("o", "supplierServiceCode", "LIKE", ordreKoscVo.getSupplierServiceCode());
        query += SearchUtil.addConstraintDate("o", "submissionDate", "=", ordreKoscVo.getSubmissionDate());
        query += SearchUtil.addConstraintMinMaxDate("o", "submissionDate", ordreKoscVo.getSubmissionDateMin(), ordreKoscVo.getSubmissionDateMax());
        query += SearchUtil.addConstraintDate("o", "datePriseRdv", "=", ordreKoscVo.getDatePriseRdv());
        query += SearchUtil.addConstraintMinMaxDate("o", "datePriseRdv", ordreKoscVo.getDatePriseRdvMin(), ordreKoscVo.getDatePriseRdvMax());
        query += SearchUtil.addConstraintDate("o", "dateRdv", "=", ordreKoscVo.getDateRdv());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateRdv", ordreKoscVo.getDateRdvMin(), ordreKoscVo.getDateRdvMax());

        if (ListUtil.isNotEmpty(ordreKoscVo.getEtatDemandeKoscVos())) {
            query += " AND o.etatDemandeKosc.id IN (" + etatDemandeKoscService.convertId(ordreKoscVo.getEtatDemandeKoscVos()) + ")";
        }

        query+= " ORDER BY  o.submissionDate DESC";


        return entityManager.createQuery(query).getResultList();
    }


    @Override
    public List<OrdreKosc> findSuivi() {
        String query = "SELECT item FROM OrdreKosc item WHERE item.etatDemandeKosc.code IN ('ok','ko')  AND item.codeDecharge is null ";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public List<OrdreKosc> genererCodeDecharge(List<OrdreKosc> ordreKoscs) {
        LocalDate todaysDate = LocalDate.now();
        if (ordreKoscs != null) {
            for (OrdreKosc ordreKosc : ordreKoscs) {
                if (ordreKosc.getEtatDemandeKosc() != null && Objects.equals(ordreKosc.getEtatDemandeKosc().getCode(), "ok") && ordreKosc.getCodeDecharge() == null) {
                    ordreKosc.setCodeDecharge(DateUtil.now() + "-" + ordreKosc.getId());
                    ordreKosc.setDateEnvoiSuivi(DateUtil.toDate(todaysDate));
                    update(ordreKosc);
                }
            }
            update(ordreKoscs);
        }


        return ordreKoscs;
    }

    @Override
    public List<StatisticVo> findOrdreKoscByDelaiPriseRdvParHeureAndSubmissionDateLessThanDay(Date submissionDateMin, Date submissionDateMax) {
        String query = "SELECT NEW com.maneo.kosc.ws.rest.provided.vo.StatisticVo(COUNT(k.id),1, k.submissionDate)  FROM OrdreKosc k WHERE 1=1 ";
        query += "   AND k.delaiPriseRdvParHeure < 24";
        query += SearchUtil.addConstraintMinMaxDate("k", "submissionDate", "submissionDateMin", "submissionDateMax");
        query += "  AND k.submissionDate IS NOT NULL";
        query += "  GROUP BY k.submissionDate";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public List<StatisticVo> findOrdreKoscByDelaiPriseRdvParHeureAndSubmissionDateBetweenTwoDays(Date submissionDateMin, Date submissionDateMax) {
        String query = "SELECT NEW com.maneo.kosc.ws.rest.provided.vo.StatisticVo(COUNT(k.id),2,  k.submissionDate)  FROM OrdreKosc k WHERE 1=1 ";
        query += SearchUtil.addConstraintMinMax("k", "delaiPriseRdvParHeure", "24", "48");
        query += SearchUtil.addConstraintMinMaxDate("k", "submissionDate", "submissionDateMin", "submissionDateMax");
        query += "  AND k.submissionDate IS NOT NULL";
        query += "  GROUP BY k.submissionDate";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public List<StatisticVo> findOrdreKoscByDelaiPriseRdvParHeureAndSubmissionDateCreaterThanTwoDays(Date submissionDateMin, Date submissionDateMax) {
        String query = "SELECT NEW com.maneo.kosc.ws.rest.provided.vo.StatisticVo(COUNT(k.id),3,k.submissionDate )  FROM OrdreKosc k WHERE 1=1 ";
        query += "  AND k.delaiPriseRdvParHeure > 48";
        query += SearchUtil.addConstraintMinMaxDate("k", "submissionDate", "submissionDateMin", "submissionDateMax");
        query += "  AND k.submissionDate IS NOT NULL";
        query += " GROUP BY k.submissionDate";
        return entityManager.createQuery(query).getResultList();
    }


    @Override
    public List<StatisticResultVo> calculerStatistic(Date submissionDateMin, Date submissionDateMax) {
        List<StatisticVo> resultat = new ArrayList<>();
        List<StatisticVo> resultatFinal = new ArrayList<>();
        StatisticResultVo statResult = new StatisticResultVo();
        List<StatisticResultVo> statResults = new ArrayList<>();
        List<StatisticVo> resultatListLessThan24 = findOrdreKoscByDelaiPriseRdvParHeureAndSubmissionDateLessThanDay(submissionDateMin, submissionDateMax);
        List<StatisticVo> resultatListCreaterThan24 = findOrdreKoscByDelaiPriseRdvParHeureAndSubmissionDateBetweenTwoDays(submissionDateMin, submissionDateMax);
        List<StatisticVo> resultatListCreaterThan48 = findOrdreKoscByDelaiPriseRdvParHeureAndSubmissionDateCreaterThanTwoDays(submissionDateMin, submissionDateMax);

        resultat.addAll(resultatListLessThan24);
        resultat.addAll(resultatListCreaterThan24);
        resultat.addAll(resultatListCreaterThan48);
        Map<Date, Map<Integer, List<StatisticVo>>> groupBySubmissionDateAndTypeMap = resultat.stream()
                .collect(Collectors.groupingBy(StatisticVo::getSubmissionDate, Collectors.groupingBy(StatisticVo::getType)));

        for (Map.Entry<Date, Map<Integer, List<StatisticVo>>> entry : groupBySubmissionDateAndTypeMap.entrySet()) {
            statResult.setSubmissionDate(entry.getKey());
            Map<Integer, List<StatisticVo>> myGroup = entry.getValue();
            for (Map.Entry<Integer, List<StatisticVo>> entry1 : myGroup.entrySet()) {
                List<StatisticVo> values = entry1.getValue();
                for (StatisticVo s : values) {
                    StatisticVo myStatisticVo = new StatisticVo();
                    myStatisticVo.setSubmissionDate(entry.getKey());
                    if (s.getType() == 1) {
                        myStatisticVo.setCountLessThan24(s.getCount());
                    } else if (s.getType() == 2) {
                        myStatisticVo.setCountCreaterThan24(s.getCount());
                    } else if (s.getType() == 3) {
                        myStatisticVo.setCountCreaterThan48(s.getCount());
                    }
                    resultatFinal.add(myStatisticVo);
                    statResult.setStatisticVos(resultat);
                }
            }
            statResults.add(statResult);
        }
        System.out.println(statResults);
        return statResults;
    }


    @Override
    public List<OrdreKosc> findAll() {
        return ordreKoscDao.findAll();
    }

    @Override
    public List<OrdreKosc> findByOperatorReference(String reference) {
        return ordreKoscDao.findByOperatorReference(reference);
    }

    @Override
    @Transactional
    public int deleteByOperatorReference(String reference) {
        return ordreKoscDao.deleteByOperatorReference(reference);
    }

    @Override
    public List<OrdreKosc> findByOperatorId(Long id) {
        return ordreKoscDao.findByOperatorId(id);
    }

    @Override
    @Transactional
    public int deleteByOperatorId(Long id) {
        return ordreKoscDao.deleteByOperatorId(id);
    }


    @Override
    public List<OrdreKosc> findByDepartementCode(String code) {
        return ordreKoscDao.findByDepartementCode(code);
    }

    @Override
    @Transactional
    public int deleteByDepartementCode(String code) {
        return ordreKoscDao.deleteByDepartementCode(code);
    }

    @Override
    public List<OrdreKosc> findByDepartementId(Long id) {
        return ordreKoscDao.findByDepartementId(id);
    }

    @Override
    @Transactional
    public int deleteByDepartementId(Long id) {
        return ordreKoscDao.deleteByDepartementId(id);
    }


    @Override
    public List<OrdreKosc> findByTechnicienIdentifiant(String identifiant) {
        return ordreKoscDao.findByTechnicienIdentifiant(identifiant);
    }

    @Override
    @Transactional
    public int deleteByTechnicienIdentifiant(String identifiant) {
        return ordreKoscDao.deleteByTechnicienIdentifiant(identifiant);
    }

    @Override
    public List<OrdreKosc> findByTechnicienId(Long id) {
        return ordreKoscDao.findByTechnicienId(id);
    }

    @Override
    @Transactional
    public int deleteByTechnicienId(Long id) {
        return ordreKoscDao.deleteByTechnicienId(id);
    }

    @Override
    public List<OrdreKosc> findByTemplateEmailPlanificationId(Long id) {
        return ordreKoscDao.findByTemplateEmailPlanificationId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailPlanificationId(Long id) {
        return ordreKoscDao.deleteByTemplateEmailPlanificationId(id);
    }

    @Override
    public List<OrdreKosc> findByTemplateEmailReportId(Long id) {
        return ordreKoscDao.findByTemplateEmailReportId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailReportId(Long id) {
        return ordreKoscDao.deleteByTemplateEmailReportId(id);
    }

    @Override
    public List<OrdreKosc> findByTemplateEmailReplanificationId(Long id) {
        return ordreKoscDao.findByTemplateEmailReplanificationId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailReplanificationId(Long id) {
        return ordreKoscDao.deleteByTemplateEmailReplanificationId(id);
    }

    @Override
    public List<OrdreKosc> findByTemplateEmailRefusId(Long id) {
        return ordreKoscDao.findByTemplateEmailRefusId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailRefusId(Long id) {
        return ordreKoscDao.deleteByTemplateEmailRefusId(id);
    }

    @Override
    public List<OrdreKosc> findByTemplateEmailMauvaisContactId(Long id) {
        return ordreKoscDao.findByTemplateEmailMauvaisContactId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailMauvaisContactId(Long id) {
        return ordreKoscDao.deleteByTemplateEmailMauvaisContactId(id);
    }

    @Override
    public List<OrdreKosc> findByTemplateEmailConfirmationClientId(Long id) {
        return ordreKoscDao.findByTemplateEmailConfirmationClientId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailConfirmationClientId(Long id) {
        return ordreKoscDao.deleteByTemplateEmailConfirmationClientId(id);
    }

    @Override
    public List<OrdreKosc> findByTemplateEmailCriId(Long id) {
        return ordreKoscDao.findByTemplateEmailCriId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailCriId(Long id) {
        return ordreKoscDao.deleteByTemplateEmailCriId(id);
    }

    @Override
    public List<OrdreKosc> findByTemplateEmailFtlId(Long id) {
        return ordreKoscDao.findByTemplateEmailFtlId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailFtlId(Long id) {
        return ordreKoscDao.deleteByTemplateEmailFtlId(id);
    }

    @Override
    public List<OrdreKosc> findByTemplateEmailClientInjoinableId(Long id) {
        return ordreKoscDao.findByTemplateEmailClientInjoinableId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailClientInjoinableId(Long id) {
        return ordreKoscDao.deleteByTemplateEmailClientInjoinableId(id);
    }

    @Override
    public List<OrdreKosc> findByTemplateEmailClientInjoinableKoscId(Long id) {
        return ordreKoscDao.findByTemplateEmailClientInjoinableKoscId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailClientInjoinableKoscId(Long id) {
        return ordreKoscDao.deleteByTemplateEmailClientInjoinableKoscId(id);
    }


    @Override
    public List<OrdreKosc> findByEtatDemandeKoscCode(String code) {
        return ordreKoscDao.findByEtatDemandeKoscCode(code);
    }

    @Override
    @Transactional
    public int deleteByEtatDemandeKoscCode(String code) {
        return ordreKoscDao.deleteByEtatDemandeKoscCode(code);
    }

    @Override
    public List<OrdreKosc> findByEtatDemandeKoscId(Long id) {
        return ordreKoscDao.findByEtatDemandeKoscId(id);
    }

    @Override
    @Transactional
    public int deleteByEtatDemandeKoscId(Long id) {
        return ordreKoscDao.deleteByEtatDemandeKoscId(id);
    }

    @Override
    public List<OrdreKosc> findByTemplateEmailClotureId(Long id) {
        return ordreKoscDao.findByTemplateEmailClotureId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateEmailClotureId(Long id) {
        return ordreKoscDao.deleteByTemplateEmailClotureId(id);
    }

    @Override
    public List<OrdreKosc> findByTemplateSuiviId(Long id) {
        return ordreKoscDao.findByTemplateSuiviId(id);
    }

    @Override
    @Transactional
    public int deleteByTemplateSuiviId(Long id) {
        return ordreKoscDao.deleteByTemplateSuiviId(id);
    }


    @Override
    public List<OrdreKosc> findByCauseKoOkCode(String code) {
        return ordreKoscDao.findByCauseKoOkCode(code);
    }

    @Override
    @Transactional
    public int deleteByCauseKoOkCode(String code) {
        return ordreKoscDao.deleteByCauseKoOkCode(code);
    }

    @Override
    public List<OrdreKosc> findByCauseKoOkId(Long id) {
        return ordreKoscDao.findByCauseKoOkId(id);
    }

    @Override
    @Transactional
    public int deleteByCauseKoOkId(Long id) {
        return ordreKoscDao.deleteByCauseKoOkId(id);
    }


    @Override
    public List<OrdreKosc> findBySourceReplanificationCode(String code) {
        return ordreKoscDao.findBySourceReplanificationCode(code);
    }

    @Override
    @Transactional
    public int deleteBySourceReplanificationCode(String code) {
        return ordreKoscDao.deleteBySourceReplanificationCode(code);
    }

    @Override
    public List<OrdreKosc> findBySourceReplanificationId(Long id) {
        return ordreKoscDao.findBySourceReplanificationId(id);
    }

    @Override
    @Transactional
    public int deleteBySourceReplanificationId(Long id) {
        return ordreKoscDao.deleteBySourceReplanificationId(id);
    }

    @Override
    public OrdreKosc findByReferenceWorkOrder(String referenceWorkOrder) {
        if (referenceWorkOrder == null) return null;
        return ordreKoscDao.findByReferenceWorkOrder(referenceWorkOrder);
    }

    @Override
    @Transactional
    public int deleteByReferenceWorkOrder(String referenceWorkOrder) {
        return ordreKoscDao.deleteByReferenceWorkOrder(referenceWorkOrder);
    }

    @Override
    public OrdreKosc findByIdOrReferenceWorkOrder(OrdreKosc ordreKosc) {
        OrdreKosc resultat = null;
        if (ordreKosc != null) {
            if (StringUtil.isNotEmpty(ordreKosc.getId())) {
                resultat = ordreKoscDao.getOne(ordreKosc.getId());
            } else if (StringUtil.isNotEmpty(ordreKosc.getReferenceWorkOrder())) {
                resultat = ordreKoscDao.findByReferenceWorkOrder(ordreKosc.getReferenceWorkOrder());
            }
        }
        return resultat;
    }

    @Override
    public OrdreKosc findById(Long id) {
        if (id == null) return null;
        return ordreKoscDao.getOne(id);
    }

    @Override
    public OrdreKosc findByIdWithAssociatedList(Long id) {
        return findById(id);
    }


    @Transactional
    public int deleteById(Long id) {
        int res = 0;
        if (ordreKoscDao.findById(id).isPresent()) {
            ordreKoscDao.deleteById(id);
            res = 1;
        }
        return res;
    }


    @Override
    public OrdreKosc update(OrdreKosc ordreKosc) {
        OrdreKosc foundedOrdreKosc = findById(ordreKosc.getId());
        if (foundedOrdreKosc == null) return null;
        else {
            initDateDernierAppel(ordreKosc);
            EtatDemandeKosc etatDemandeKosc = etatDemandeKoscService.findByCode(ordreKosc.getEtatDemandeKosc().getCode());
            ordreKosc.setEtatDemandeKosc(etatDemandeKosc);
            return ordreKoscDao.save(ordreKosc);
        }
    }

    private void prepareSave(OrdreKosc ordreKosc) {
        if (ordreKosc.getRacordementLong() == null)
            ordreKosc.setRacordementLong(false);
        if (ordreKosc.getExistingOtp() == null)
            ordreKosc.setExistingOtp(false);
        if (ordreKosc.getEnvoyePlanification() == null)
            ordreKosc.setEnvoyePlanification(false);
        if (ordreKosc.getEnvoyeReport() == null)
            ordreKosc.setEnvoyeReport(false);
        if (ordreKosc.getEnvoyeReplanification() == null)
            ordreKosc.setEnvoyeReplanification(false);
        if (ordreKosc.getEnvoyeRefus() == null)
            ordreKosc.setEnvoyeRefus(false);
        if (ordreKosc.getEnvoyeMauvaisContact() == null)
            ordreKosc.setEnvoyeMauvaisContact(false);
        if (ordreKosc.getEnvoyeConfirmationClient() == null)
            ordreKosc.setEnvoyeConfirmationClient(false);
        if (ordreKosc.getEnvoyeCri() == null)
            ordreKosc.setEnvoyeCri(false);
        if (ordreKosc.getEnvoyeFtl() == null)
            ordreKosc.setEnvoyeFtl(false);
        if (ordreKosc.getEnvoyeClientInjoinable() == null)
            ordreKosc.setEnvoyeClientInjoinable(false);
        if (ordreKosc.getEnvoyeClientInjoinableKosc() == null)
            ordreKosc.setEnvoyeClientInjoinableKosc(false);
        if (ordreKosc.getEnvoyeCloture() == null)
            ordreKosc.setEnvoyeCloture(false);
        if (ordreKosc.getEnvoyeSuivi() == null)
            ordreKosc.setEnvoyeSuivi(false);
        initDateDernierAppel(ordreKosc);

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

    private OrdreKosc importData(OrdreKosc ordreKosc) {
        prepareSave(ordreKosc);
        OrdreKosc result = null;
        OrdreKosc foundedOrdreKosc = findByReferenceWorkOrder(ordreKosc.getReferenceWorkOrder());
        if (foundedOrdreKosc == null) {
            if (ordreKosc.getDepartement() == null) {
                ordreKosc.setDepartement(new Departement());
            }
            ordreKosc.getDepartement().setCode(ordreKosc.getEndCustumorZipcode());
            findOrSaveOperator(ordreKosc);
            findOrSaveDepartement(ordreKosc);
            //findOrSaveTechnicien(ordreKosc);
            OrdreKosc savedOrdreKosc = ordreKoscDao.save(ordreKosc);
            result = savedOrdreKosc;
        }
        return result;
    }

    @Override
    public OrdreKosc save(OrdreKosc ordreKosc) {
        prepareSave(ordreKosc);
        OrdreKosc result = null;
        OrdreKosc foundedOrdreKosc = findByReferenceWorkOrder(ordreKosc.getReferenceWorkOrder());
        if (foundedOrdreKosc == null) {
            OrdreKosc savedOrdreKosc = ordreKoscDao.save(ordreKosc);
            result = savedOrdreKosc;
        }

        return result;
    }


    @Override
    public List<OrdreKosc> save(List<OrdreKosc> ordreKoscs) {
        List<OrdreKosc> list = new ArrayList<>();
        for (OrdreKosc ordreKosc : ordreKoscs) {
            list.add(importData(ordreKosc));
        }
        return list;
    }


    private OrdreKosc findByReference(String reference) {
        return ordreKoscDao.findByReference(reference);
    }


    @Override
    @Transactional
    public int delete(OrdreKosc ordreKosc) {
        if (ordreKosc.getReferenceWorkOrder() == null) return -1;

        OrdreKosc foundedOrdreKosc = findByReferenceWorkOrder(ordreKosc.getReferenceWorkOrder());
        if (foundedOrdreKosc == null) return -1;
        ordreKoscDao.delete(foundedOrdreKosc);
        return 1;
    }


    public List<OrdreKosc> findByCriteria(OrdreKoscVo ordreKoscVo) {

        String query = "SELECT o FROM OrdreKosc o where 1=1";
        System.out.println("haaa ordreKoscVo.getConfort() "+ordreKoscVo.getConfort());
        query += SearchUtil.addConstraint("o", "id", "=", ordreKoscVo.getId());
        query += SearchUtil.addConstraint("o", "erdv", "=", ordreKoscVo.getErdv());
        query += SearchUtil.addConstraint("o", "confort", "=", ordreKoscVo.getConfort());
        query += SearchUtil.addConstraint("o", "reference", "LIKE", ordreKoscVo.getReference());
        query += SearchUtil.addConstraint("o", "referenceWorkOrder", "LIKE", ordreKoscVo.getReferenceWorkOrder());
        query += SearchUtil.addConstraint("o", "codeDecharge", "LIKE", ordreKoscVo.getCodeDecharge());
        query += SearchUtil.addConstraint("o", "supplierServiceCode", "LIKE", ordreKoscVo.getSupplierServiceCode());
        query += SearchUtil.addConstraintDate("o", "dateDebutTraitement", "=", ordreKoscVo.getDateDebutTraitement());
        query += SearchUtil.addConstraint("o", "endCustumorName", "LIKE", ordreKoscVo.getEndCustumorName());
        query += SearchUtil.addConstraint("o", "endCustumorSiret", "LIKE", ordreKoscVo.getEndCustumorSiret());
        query += SearchUtil.addConstraint("o", "endCustumorFirstName", "LIKE", ordreKoscVo.getEndCustumorFirstName());
        query += SearchUtil.addConstraint("o", "endCustumorLastName", "LIKE", ordreKoscVo.getEndCustumorLastName());
        query += SearchUtil.addConstraint("o", "endCustumorZipcode", "LIKE", ordreKoscVo.getEndCustumorZipcode());
        query += SearchUtil.addConstraint("o", "endCustumorStreetName", "LIKE", ordreKoscVo.getEndCustumorStreetName());
        query += SearchUtil.addConstraint("o", "endCustumorStreetNumber", "LIKE", ordreKoscVo.getEndCustumorStreetNumber());
        query += SearchUtil.addConstraint("o", "endCustumorCity", "LIKE", ordreKoscVo.getEndCustumorCity());
        query += SearchUtil.addConstraint("o", "endCustumorBuilding", "LIKE", ordreKoscVo.getEndCustumorBuilding());
        query += SearchUtil.addConstraint("o", "endCustumorStairs", "LIKE", ordreKoscVo.getEndCustumorStairs());
        query += SearchUtil.addConstraint("o", "endCustumorFloor", "LIKE", ordreKoscVo.getEndCustumorFloor());
        query += SearchUtil.addConstraint("o", "endCustumorContactFirstName", "LIKE", ordreKoscVo.getEndCustumorContactFirstName());
        query += SearchUtil.addConstraint("o", "endCustumorContactLastName", "LIKE", ordreKoscVo.getEndCustumorContactLastName());
        query += SearchUtil.addConstraint("o", "endCustumorContactPhone", "LIKE", ordreKoscVo.getEndCustumorContactPhone());
        query += SearchUtil.addConstraint("o", "endCustumorContactCellPhone", "LIKE", ordreKoscVo.getEndCustumorContactCellPhone());
        query += SearchUtil.addConstraint("o", "endCustumorContactEmail", "LIKE", ordreKoscVo.getEndCustumorContactEmail());
        query += SearchUtil.addConstraint("o", "company", "LIKE", ordreKoscVo.getCompany());
        query += SearchUtil.addConstraint("o", "referenDossier", "LIKE", ordreKoscVo.getReferenDossier());
        query += SearchUtil.addConstraintDate("o", "submissionDate", "=", ordreKoscVo.getSubmissionDate());
        query += SearchUtil.addConstraint("o", "coordonnePboY", "LIKE", ordreKoscVo.getCoordonnePboY());
        query += SearchUtil.addConstraint("o", "hauteurPbo", "LIKE", ordreKoscVo.getHauteurPbo());
        query += SearchUtil.addConstraint("o", "typeMaterielPbo", "LIKE", ordreKoscVo.getTypeMaterielPbo());
        query += SearchUtil.addConstraint("o", "typePbo", "LIKE", ordreKoscVo.getTypePbo());
        query += SearchUtil.addConstraint("o", "conditionSyndics", "LIKE", ordreKoscVo.getConditionSyndics());
        query += SearchUtil.addConstraint("o", "typeRacordementPboPto", "LIKE", ordreKoscVo.getTypeRacordementPboPto());
        query += SearchUtil.addConstraint("o", "autreInfosPboPto", "LIKE", ordreKoscVo.getAutreInfosPboPto());
        query += SearchUtil.addConstraint("o", "codeAccesImmeuble", "LIKE", ordreKoscVo.getCodeAccesImmeuble());
        query += SearchUtil.addConstraint("o", "contacteImmeuble", "LIKE", ordreKoscVo.getContacteImmeuble());
        query += SearchUtil.addConstraint("o", "pmaAccessible", "LIKE", ordreKoscVo.getPmaAccessible());
        query += SearchUtil.addConstraint("o", "infoObtentionCle", "LIKE", ordreKoscVo.getInfoObtentionCle());
        query += SearchUtil.addConstraint("o", "localeIpm", "LIKE", ordreKoscVo.getLocaleIpm());
        query += SearchUtil.addConstraint("o", "contactsSyndic", "LIKE", ordreKoscVo.getContactsSyndic());
        query += SearchUtil.addConstraint("o", "racordementLong", "=", ordreKoscVo.getRacordementLong());
        query += SearchUtil.addConstraint("o", "oc1", "LIKE", ordreKoscVo.getOc1());
        query += SearchUtil.addConstraint("o", "nomModulePm1", "LIKE", ordreKoscVo.getNomModulePm1());
        query += SearchUtil.addConstraint("o", "positionModulePm1", "LIKE", ordreKoscVo.getPositionModulePm1());
        query += SearchUtil.addConstraint("o", "referenceCableModulePm1", "LIKE", ordreKoscVo.getReferenceCableModulePm1());
        query += SearchUtil.addConstraint("o", "referenceTubeModulePm1", "LIKE", ordreKoscVo.getReferenceTubeModulePm1());
        query += SearchUtil.addConstraint("o", "informationFibreModulePm1", "LIKE", ordreKoscVo.getInformationFibreModulePm1());
        query += SearchUtil.addConstraint("o", "referenceCablePbo1", "LIKE", ordreKoscVo.getReferenceCablePbo1());
        query += SearchUtil.addConstraint("o", "informationTubePbo1", "LIKE", ordreKoscVo.getInformationTubePbo1());
        query += SearchUtil.addConstraint("o", "informationFibrePbo1", "LIKE", ordreKoscVo.getInformationFibrePbo1());
        query += SearchUtil.addConstraint("o", "connecteurPriseNumero1", "LIKE", ordreKoscVo.getConnecteurPriseNumero1());
        query += SearchUtil.addConstraint("o", "connecteurPriseCouleur1", "LIKE", ordreKoscVo.getConnecteurPriseCouleur1());
        query += SearchUtil.addConstraint("o", "reserve1", "LIKE", ordreKoscVo.getReserve1());
        query += SearchUtil.addConstraint("o", "oc2", "LIKE", ordreKoscVo.getOc2());
        query += SearchUtil.addConstraint("o", "nomModulePm2", "LIKE", ordreKoscVo.getNomModulePm2());
        query += SearchUtil.addConstraint("o", "positionModulePm2", "LIKE", ordreKoscVo.getPositionModulePm2());
        query += SearchUtil.addConstraint("o", "referenceCableModulePm2", "LIKE", ordreKoscVo.getReferenceCableModulePm2());
        query += SearchUtil.addConstraint("o", "referenceTubeModulePm2", "LIKE", ordreKoscVo.getReferenceTubeModulePm2());
        query += SearchUtil.addConstraint("o", "informationFibreModulePm2", "LIKE", ordreKoscVo.getInformationFibreModulePm2());
        query += SearchUtil.addConstraint("o", "referenceCablePbo2", "LIKE", ordreKoscVo.getReferenceCablePbo2());
        query += SearchUtil.addConstraint("o", "informationTubePbo2", "LIKE", ordreKoscVo.getInformationTubePbo2());
        query += SearchUtil.addConstraint("o", "informationFibrePbo2", "LIKE", ordreKoscVo.getInformationFibrePbo2());
        query += SearchUtil.addConstraint("o", "connecteurPriseNumero2", "LIKE", ordreKoscVo.getConnecteurPriseNumero2());
        query += SearchUtil.addConstraint("o", "connecteurPriseCouleur2", "LIKE", ordreKoscVo.getConnecteurPriseCouleur2());
        query += SearchUtil.addConstraint("o", "reserve2", "LIKE", ordreKoscVo.getReserve2());
        query += SearchUtil.addConstraint("o", "oc3", "LIKE", ordreKoscVo.getOc3());
        query += SearchUtil.addConstraint("o", "nomModulePm3", "LIKE", ordreKoscVo.getNomModulePm3());
        query += SearchUtil.addConstraint("o", "positionModulePm3", "LIKE", ordreKoscVo.getPositionModulePm3());
        query += SearchUtil.addConstraint("o", "referenceCableModulePm3", "LIKE", ordreKoscVo.getReferenceCableModulePm3());
        query += SearchUtil.addConstraint("o", "referenceTubeModulePm3", "LIKE", ordreKoscVo.getReferenceTubeModulePm3());
        query += SearchUtil.addConstraint("o", "informationFibreModulePm3", "LIKE", ordreKoscVo.getInformationFibreModulePm3());
        query += SearchUtil.addConstraint("o", "referenceCablePbo3", "LIKE", ordreKoscVo.getReferenceCablePbo3());
        query += SearchUtil.addConstraint("o", "informationTubePbo3", "LIKE", ordreKoscVo.getInformationTubePbo3());
        query += SearchUtil.addConstraint("o", "informationFibrePbo3", "LIKE", ordreKoscVo.getInformationFibrePbo3());
        query += SearchUtil.addConstraint("o", "connecteurPriseNumero3", "LIKE", ordreKoscVo.getConnecteurPriseNumero3());
        query += SearchUtil.addConstraint("o", "connecteurPriseCouleur3", "LIKE", ordreKoscVo.getConnecteurPriseCouleur3());
        query += SearchUtil.addConstraint("o", "reserve3", "LIKE", ordreKoscVo.getReserve3());
        query += SearchUtil.addConstraint("o", "oc4", "LIKE", ordreKoscVo.getOc4());
        query += SearchUtil.addConstraint("o", "nomModulePm4", "LIKE", ordreKoscVo.getNomModulePm4());
        query += SearchUtil.addConstraint("o", "positionModulePm4", "LIKE", ordreKoscVo.getPositionModulePm4());
        query += SearchUtil.addConstraint("o", "referenceCableModulePm4", "LIKE", ordreKoscVo.getReferenceCableModulePm4());
        query += SearchUtil.addConstraint("o", "referenceTubeModulePm4", "LIKE", ordreKoscVo.getReferenceTubeModulePm4());
        query += SearchUtil.addConstraint("o", "informationFibreModulePm4", "LIKE", ordreKoscVo.getInformationFibreModulePm4());
        query += SearchUtil.addConstraint("o", "referenceCablePbo4", "LIKE", ordreKoscVo.getReferenceCablePbo4());
        query += SearchUtil.addConstraint("o", "informationTubePbo4", "LIKE", ordreKoscVo.getInformationTubePbo4());
        query += SearchUtil.addConstraint("o", "informationFibrePbo4", "LIKE", ordreKoscVo.getInformationFibrePbo4());
        query += SearchUtil.addConstraint("o", "connecteurPriseNumero4", "LIKE", ordreKoscVo.getConnecteurPriseNumero4());
        query += SearchUtil.addConstraint("o", "connecteurPriseCouleur4", "LIKE", ordreKoscVo.getConnecteurPriseCouleur4());
        query += SearchUtil.addConstraint("o", "reserve4", "LIKE", ordreKoscVo.getReserve4());
        query += SearchUtil.addConstraint("o", "pboReel", "LIKE", ordreKoscVo.getPboReel());
        query += SearchUtil.addConstraint("o", "numeroSerieOnt", "LIKE", ordreKoscVo.getNumeroSerieOnt());
        query += SearchUtil.addConstraint("o", "hotline", "LIKE", ordreKoscVo.getHotline());
        query += SearchUtil.addConstraint("o", "mutationPbo", "LIKE", ordreKoscVo.getMutationPbo());
        query += SearchUtil.addConstraint("o", "workOrderType", "LIKE", ordreKoscVo.getWorkOrderType());
        query += SearchUtil.addConstraint("o", "product", "LIKE", ordreKoscVo.getProduct());
        query += SearchUtil.addConstraint("o", "provider", "LIKE", ordreKoscVo.getProvider());
        query += SearchUtil.addConstraint("o", "providerFileType", "LIKE", ordreKoscVo.getProviderFileType());
        query += SearchUtil.addConstraint("o", "spliter", "LIKE", ordreKoscVo.getSpliter());
        query += SearchUtil.addConstraint("o", "existingOtp", "=", ordreKoscVo.getExistingOtp());
        query += SearchUtil.addConstraint("o", "profile", "LIKE", ordreKoscVo.getProfile());
        query += SearchUtil.addConstraint("o", "providerSlId", "LIKE", ordreKoscVo.getProviderSlId());
        query += SearchUtil.addConstraint("o", "referencePrestationPrise", "LIKE", ordreKoscVo.getReferencePrestationPrise());
        query += SearchUtil.addConstraint("o", "referencePm", "LIKE", ordreKoscVo.getReferencePm());
        query += SearchUtil.addConstraint("o", "referencePmTechnique", "LIKE", ordreKoscVo.getReferencePmTechnique());
        query += SearchUtil.addConstraint("o", "localisationPm", "LIKE", ordreKoscVo.getLocalisationPm());
        query += SearchUtil.addConstraint("o", "providerProduct", "LIKE", ordreKoscVo.getProviderProduct());
        query += SearchUtil.addConstraint("o", "referencePbo", "LIKE", ordreKoscVo.getReferencePbo());
        query += SearchUtil.addConstraint("o", "localisationPbo", "LIKE", ordreKoscVo.getLocalisationPbo());
        query += SearchUtil.addConstraint("o", "referencePrise", "LIKE", ordreKoscVo.getReferencePrise());
        query += SearchUtil.addConstraintDate("o", "datePremierAppel", "=", ordreKoscVo.getDatePremierAppel());
        query += SearchUtil.addConstraintDate("o", "dateDeuxiemeAppel", "=", ordreKoscVo.getDateDeuxiemeAppel());
        query += SearchUtil.addConstraintDate("o", "dateTroisiemeAppel", "=", ordreKoscVo.getDateTroisiemeAppel());
        query += SearchUtil.addConstraintDate("o", "datePriseRdv", "=", ordreKoscVo.getDatePriseRdv());
        query += SearchUtil.addConstraintDate("o", "dateRdv", "=", ordreKoscVo.getDateRdv());
        query += SearchUtil.addConstraintDate("o", "dateOuverture", "=", ordreKoscVo.getDateOuverture());
        query += SearchUtil.addConstraint("o", "commentaireClient", "LIKE", ordreKoscVo.getCommentaireClient());
        query += SearchUtil.addConstraint("o", "commentaireKosc", "LIKE", ordreKoscVo.getCommentaireKosc());
        query += SearchUtil.addConstraint("o", "objetPlanification", "LIKE", ordreKoscVo.getObjetPlanification());
        query += SearchUtil.addConstraint("o", "corpsPlanification", "LIKE", ordreKoscVo.getCorpsPlanification());
        query += SearchUtil.addConstraint("o", "envoyePlanification", "=", ordreKoscVo.getEnvoyePlanification());
        query += SearchUtil.addConstraintDate("o", "dateEnvoiPlanification", "=", ordreKoscVo.getDateEnvoiPlanification());
        query += SearchUtil.addConstraint("o", "fromPlanification", "LIKE", ordreKoscVo.getFromPlanification());
        query += SearchUtil.addConstraint("o", "toPlanification", "LIKE", ordreKoscVo.getToPlanification());
        query += SearchUtil.addConstraintDate("o", "dateAppelReplanification", "=", ordreKoscVo.getDateAppelReplanification());
        query += SearchUtil.addConstraint("o", "objetReport", "LIKE", ordreKoscVo.getObjetReport());
        query += SearchUtil.addConstraint("o", "corpsReport", "LIKE", ordreKoscVo.getCorpsReport());
        query += SearchUtil.addConstraint("o", "fromReport", "LIKE", ordreKoscVo.getFromReport());
        query += SearchUtil.addConstraint("o", "toReport", "LIKE", ordreKoscVo.getToReport());
        query += SearchUtil.addConstraint("o", "envoyeReport", "=", ordreKoscVo.getEnvoyeReport());
        query += SearchUtil.addConstraintDate("o", "dateEnvoiReport", "=", ordreKoscVo.getDateEnvoiReport());
        query += SearchUtil.addConstraint("o", "objetReplanification", "LIKE", ordreKoscVo.getObjetReplanification());
        query += SearchUtil.addConstraint("o", "corpsReplanification", "LIKE", ordreKoscVo.getCorpsReplanification());
        query += SearchUtil.addConstraint("o", "fromReplanification", "LIKE", ordreKoscVo.getFromReplanification());
        query += SearchUtil.addConstraint("o", "toReplanification", "LIKE", ordreKoscVo.getToReplanification());
        query += SearchUtil.addConstraint("o", "envoyeReplanification", "=", ordreKoscVo.getEnvoyeReplanification());
        query += SearchUtil.addConstraintDate("o", "dateEnvoiReplanification", "=", ordreKoscVo.getDateEnvoiReplanification());
        query += SearchUtil.addConstraint("o", "objetRefus", "LIKE", ordreKoscVo.getObjetRefus());
        query += SearchUtil.addConstraint("o", "corpsRefus", "LIKE", ordreKoscVo.getCorpsRefus());
        query += SearchUtil.addConstraint("o", "fromRefus", "LIKE", ordreKoscVo.getFromRefus());
        query += SearchUtil.addConstraint("o", "toRefus", "LIKE", ordreKoscVo.getToRefus());
        query += SearchUtil.addConstraint("o", "envoyeRefus", "=", ordreKoscVo.getEnvoyeRefus());
        query += SearchUtil.addConstraintDate("o", "dateEnvoiRefus", "=", ordreKoscVo.getDateEnvoiRefus());
        query += SearchUtil.addConstraint("o", "objetMauvaisContact", "LIKE", ordreKoscVo.getObjetMauvaisContact());
        query += SearchUtil.addConstraint("o", "corpsMauvaisContact", "LIKE", ordreKoscVo.getCorpsMauvaisContact());
        query += SearchUtil.addConstraint("o", "fromMauvaisContact", "LIKE", ordreKoscVo.getFromMauvaisContact());
        query += SearchUtil.addConstraint("o", "toMauvaisContact", "LIKE", ordreKoscVo.getToMauvaisContact());
        query += SearchUtil.addConstraint("o", "envoyeMauvaisContact", "=", ordreKoscVo.getEnvoyeMauvaisContact());
        query += SearchUtil.addConstraintDate("o", "dateEnvoiMauvaisContact", "=", ordreKoscVo.getDateEnvoiMauvaisContact());
        query += SearchUtil.addConstraint("o", "objetConfirmationClient", "LIKE", ordreKoscVo.getObjetConfirmationClient());
        query += SearchUtil.addConstraint("o", "corpsConfirmationClient", "LIKE", ordreKoscVo.getCorpsConfirmationClient());
        query += SearchUtil.addConstraint("o", "fromConfirmationClient", "LIKE", ordreKoscVo.getFromConfirmationClient());
        query += SearchUtil.addConstraint("o", "toConfirmationClient", "LIKE", ordreKoscVo.getToConfirmationClient());
        query += SearchUtil.addConstraint("o", "envoyeConfirmationClient", "=", ordreKoscVo.getEnvoyeConfirmationClient());
        query += SearchUtil.addConstraintDate("o", "dateEnvoiConfirmationClient", "=", ordreKoscVo.getDateEnvoiConfirmationClient());
        query += SearchUtil.addConstraint("o", "objetCri", "LIKE", ordreKoscVo.getObjetCri());
        query += SearchUtil.addConstraint("o", "corpsCri", "LIKE", ordreKoscVo.getCorpsCri());
        query += SearchUtil.addConstraint("o", "fromCri", "LIKE", ordreKoscVo.getFromCri());
        query += SearchUtil.addConstraint("o", "toCri", "LIKE", ordreKoscVo.getToCri());
        query += SearchUtil.addConstraint("o", "envoyeCri", "=", ordreKoscVo.getEnvoyeCri());
        query += SearchUtil.addConstraintDate("o", "dateEnvoiCri", "=", ordreKoscVo.getDateEnvoiCri());
        query += SearchUtil.addConstraint("o", "objetFtl", "LIKE", ordreKoscVo.getObjetFtl());
        query += SearchUtil.addConstraint("o", "corpsFtl", "LIKE", ordreKoscVo.getCorpsFtl());
        query += SearchUtil.addConstraint("o", "fromFtl", "LIKE", ordreKoscVo.getFromFtl());
        query += SearchUtil.addConstraint("o", "toFtl", "LIKE", ordreKoscVo.getToFtl());
        query += SearchUtil.addConstraint("o", "envoyeFtl", "=", ordreKoscVo.getEnvoyeFtl());
        query += SearchUtil.addConstraintDate("o", "dateEnvoiFtl", "=", ordreKoscVo.getDateEnvoiFtl());
        query += SearchUtil.addConstraintDate("o", "dateInterventionTechniqueDebut", "=", ordreKoscVo.getDateInterventionTechniqueDebut());
        query += SearchUtil.addConstraintDate("o", "dateInterventionTechniqueFin", "=", ordreKoscVo.getDateInterventionTechniqueFin());
        query += SearchUtil.addConstraint("o", "objetClientInjoinable", "LIKE", ordreKoscVo.getObjetClientInjoinable());
        query += SearchUtil.addConstraint("o", "corpsClientInjoinable", "LIKE", ordreKoscVo.getCorpsClientInjoinable());
        query += SearchUtil.addConstraint("o", "fromClientInjoinable", "LIKE", ordreKoscVo.getFromClientInjoinable());
        query += SearchUtil.addConstraint("o", "toClientInjoinable", "LIKE", ordreKoscVo.getToClientInjoinable());
        query += SearchUtil.addConstraint("o", "envoyeClientInjoinable", "=", ordreKoscVo.getEnvoyeClientInjoinable());
        query += SearchUtil.addConstraintDate("o", "dateEnvoiClientInjoinable", "=", ordreKoscVo.getDateEnvoiClientInjoinable());
        query += SearchUtil.addConstraint("o", "objetClientInjoinableKosc", "LIKE", ordreKoscVo.getObjetClientInjoinableKosc());
        query += SearchUtil.addConstraint("o", "corpsClientInjoinableKosc", "LIKE", ordreKoscVo.getCorpsClientInjoinableKosc());
        query += SearchUtil.addConstraint("o", "fromClientInjoinableKosc", "LIKE", ordreKoscVo.getFromClientInjoinableKosc());
        query += SearchUtil.addConstraint("o", "toClientInjoinableKosc", "LIKE", ordreKoscVo.getToClientInjoinableKosc());
        query += SearchUtil.addConstraint("o", "envoyeClientInjoinableKosc", "=", ordreKoscVo.getEnvoyeClientInjoinableKosc());
        query += SearchUtil.addConstraintDate("o", "dateEnvoiClientInjoinableKosc", "=", ordreKoscVo.getDateEnvoiClientInjoinableKosc());
        query += SearchUtil.addConstraint("o", "commentaireTechnicien", "LIKE", ordreKoscVo.getCommentaireTechnicien());
        query += SearchUtil.addConstraint("o", "commantaireCloture", "LIKE", ordreKoscVo.getCommantaireCloture());
        query += SearchUtil.addConstraint("o", "objetCloture", "LIKE", ordreKoscVo.getObjetCloture());
        query += SearchUtil.addConstraint("o", "corpsCloture", "LIKE", ordreKoscVo.getCorpsCloture());
        query += SearchUtil.addConstraint("o", "envoyeCloture", "=", ordreKoscVo.getEnvoyeCloture());
        query += SearchUtil.addConstraintDate("o", "dateEnvoiCloture", "=", ordreKoscVo.getDateEnvoiCloture());
        query += SearchUtil.addConstraint("o", "emailCloturePieceJoints", "LIKE", ordreKoscVo.getEmailCloturePieceJoints());
        query += SearchUtil.addConstraint("o", "objetSuivi", "LIKE", ordreKoscVo.getObjetSuivi());
        query += SearchUtil.addConstraint("o", "corpsSuivi", "LIKE", ordreKoscVo.getCorpsSuivi());
        query += SearchUtil.addConstraint("o", "envoyeSuivi", "=", ordreKoscVo.getEnvoyeSuivi());
        query += SearchUtil.addConstraintDate("o", "dateEnvoiSuivi", "=", ordreKoscVo.getDateEnvoiSuivi());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateDebutTraitement", ordreKoscVo.getDateDebutTraitementMin(), ordreKoscVo.getDateDebutTraitementMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "submissionDate", ordreKoscVo.getSubmissionDateMin(), ordreKoscVo.getSubmissionDateMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "datePremierAppel", ordreKoscVo.getDatePremierAppelMin(), ordreKoscVo.getDatePremierAppelMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateDeuxiemeAppel", ordreKoscVo.getDateDeuxiemeAppelMin(), ordreKoscVo.getDateDeuxiemeAppelMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateTroisiemeAppel", ordreKoscVo.getDateTroisiemeAppelMin(), ordreKoscVo.getDateTroisiemeAppelMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "datePriseRdv", ordreKoscVo.getDatePriseRdvMin(), ordreKoscVo.getDatePriseRdvMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateRdv", ordreKoscVo.getDateRdvMin(), ordreKoscVo.getDateRdvMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateOuverture", ordreKoscVo.getDateOuvertureMin(), ordreKoscVo.getDateOuvertureMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateEnvoiPlanification", ordreKoscVo.getDateEnvoiPlanificationMin(), ordreKoscVo.getDateEnvoiPlanificationMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateAppelReplanification", ordreKoscVo.getDateAppelReplanificationMin(), ordreKoscVo.getDateAppelReplanificationMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateEnvoiReport", ordreKoscVo.getDateEnvoiReportMin(), ordreKoscVo.getDateEnvoiReportMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateEnvoiReplanification", ordreKoscVo.getDateEnvoiReplanificationMin(), ordreKoscVo.getDateEnvoiReplanificationMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateEnvoiRefus", ordreKoscVo.getDateEnvoiRefusMin(), ordreKoscVo.getDateEnvoiRefusMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateEnvoiMauvaisContact", ordreKoscVo.getDateEnvoiMauvaisContactMin(), ordreKoscVo.getDateEnvoiMauvaisContactMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateEnvoiConfirmationClient", ordreKoscVo.getDateEnvoiConfirmationClientMin(), ordreKoscVo.getDateEnvoiConfirmationClientMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateEnvoiCri", ordreKoscVo.getDateEnvoiCriMin(), ordreKoscVo.getDateEnvoiCriMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateEnvoiFtl", ordreKoscVo.getDateEnvoiFtlMin(), ordreKoscVo.getDateEnvoiFtlMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateInterventionTechniqueDebut", ordreKoscVo.getDateInterventionTechniqueDebutMin(), ordreKoscVo.getDateInterventionTechniqueDebutMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateInterventionTechniqueFin", ordreKoscVo.getDateInterventionTechniqueFinMin(), ordreKoscVo.getDateInterventionTechniqueFinMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateEnvoiClientInjoinable", ordreKoscVo.getDateEnvoiClientInjoinableMin(), ordreKoscVo.getDateEnvoiClientInjoinableMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateEnvoiClientInjoinableKosc", ordreKoscVo.getDateEnvoiClientInjoinableKoscMin(), ordreKoscVo.getDateEnvoiClientInjoinableKoscMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateEnvoiCloture", ordreKoscVo.getDateEnvoiClotureMin(), ordreKoscVo.getDateEnvoiClotureMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateEnvoiSuivi", ordreKoscVo.getDateEnvoiSuiviMin(), ordreKoscVo.getDateEnvoiSuiviMax());
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

        if (ordreKoscVo.getTemplateEmailPlanificationVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailPlanification.id", "=", ordreKoscVo.getTemplateEmailPlanificationVo().getId());
        }

        if (ordreKoscVo.getTemplateEmailReportVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailReport.id", "=", ordreKoscVo.getTemplateEmailReportVo().getId());
        }

        if (ordreKoscVo.getTemplateEmailReplanificationVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailReplanification.id", "=", ordreKoscVo.getTemplateEmailReplanificationVo().getId());
        }

        if (ordreKoscVo.getTemplateEmailRefusVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailRefus.id", "=", ordreKoscVo.getTemplateEmailRefusVo().getId());
        }

        if (ordreKoscVo.getTemplateEmailMauvaisContactVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailMauvaisContact.id", "=", ordreKoscVo.getTemplateEmailMauvaisContactVo().getId());
        }

        if (ordreKoscVo.getTemplateEmailConfirmationClientVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailConfirmationClient.id", "=", ordreKoscVo.getTemplateEmailConfirmationClientVo().getId());
        }

        if (ordreKoscVo.getTemplateEmailCriVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailCri.id", "=", ordreKoscVo.getTemplateEmailCriVo().getId());
        }

        if (ordreKoscVo.getTemplateEmailFtlVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailFtl.id", "=", ordreKoscVo.getTemplateEmailFtlVo().getId());
        }

        if (ordreKoscVo.getTemplateEmailClientInjoinableVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailClientInjoinable.id", "=", ordreKoscVo.getTemplateEmailClientInjoinableVo().getId());
        }

        if (ordreKoscVo.getTemplateEmailClientInjoinableKoscVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailClientInjoinableKosc.id", "=", ordreKoscVo.getTemplateEmailClientInjoinableKoscVo().getId());
        }

       /* if (ordreKoscVo.getEtatDemandeKoscVo() != null) {
            query += SearchUtil.addConstraint("o", "etatDemandeKosc.id", "=", ordreKoscVo.getEtatDemandeKoscVo().getId());
            query += SearchUtil.addConstraint("o", "etatDemandeKosc.code", "LIKE", ordreKoscVo.getEtatDemandeKoscVo().getCode());
        }*/

        if (ListUtil.isNotEmpty(ordreKoscVo.getEtatDemandeKoscVos())){
            query+= " AND o.etatDemandeKosc.id IN ("+etatDemandeKoscService.convertId(ordreKoscVo.getEtatDemandeKoscVos())+")";
        }


        if (ordreKoscVo.getTemplateEmailClotureVo() != null) {
            query += SearchUtil.addConstraint("o", "templateEmailCloture.id", "=", ordreKoscVo.getTemplateEmailClotureVo().getId());
        }

        if (ordreKoscVo.getTemplateSuiviVo() != null) {
            query += SearchUtil.addConstraint("o", "templateSuivi.id", "=", ordreKoscVo.getTemplateSuiviVo().getId());
        }

        if (ordreKoscVo.getCauseKoOkVo() != null) {
            query += SearchUtil.addConstraint("o", "causeKoOk.id", "=", ordreKoscVo.getCauseKoOkVo().getId());
            query += SearchUtil.addConstraint("o", "causeKoOk.code", "LIKE", ordreKoscVo.getCauseKoOkVo().getCode());
        }

        if (ordreKoscVo.getSourceReplanificationVo() != null) {
            query += SearchUtil.addConstraint("o", "sourceReplanification.id", "=", ordreKoscVo.getSourceReplanificationVo().getId());
            query += SearchUtil.addConstraint("o", "sourceReplanification.code", "LIKE", ordreKoscVo.getSourceReplanificationVo().getCode());
        }

        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public List<OrdreKosc> findSuiviByCriteria(OrdreKoscVo vo) {
        return null;
    }



    private void findOperator(OrdreKosc ordreKosc) {
        Operator loadedOperator = operatorService.findByIdOrReference(ordreKosc.getOperator());

        if (loadedOperator == null) {
            return;
        }
        ordreKosc.setOperator(loadedOperator);
    }

    private void findDepartement(OrdreKosc ordreKosc) {
        Departement loadedDepartement = departementService.findByIdOrCode(ordreKosc.getDepartement());

        if (loadedDepartement == null) {
            return;
        }
        ordreKosc.setDepartement(loadedDepartement);
    }

    private void findTechnicien(OrdreKosc ordreKosc) {
        Technicien loadedTechnicien = technicienService.findByIdOrIdentifiant(ordreKosc.getTechnicien());

        if (loadedTechnicien == null) {
            return;
        }
        ordreKosc.setTechnicien(loadedTechnicien);
    }

    private void findOrSaveOperator(OrdreKosc ordreKosc) {
        Operator loadedOperator = operatorService.findByIdOrReference(ordreKosc.getOperator());
        if (loadedOperator == null) {
            ordreKosc.setOperator(operatorService.save(ordreKosc.getOperator()));
        } else {
            ordreKosc.setOperator(loadedOperator);
        }
    }

    private void findOrSaveDepartement(OrdreKosc ordreKosc) {
        Departement loadedDepartement = departementService.findByIdOrCode(ordreKosc.getDepartement());

        if (loadedDepartement == null) {
            ordreKosc.setDepartement(departementService.save(ordreKosc.getDepartement()));
        } else {
            ordreKosc.setDepartement(loadedDepartement);
        }
    }

    private void findOrSaveTechnicien(OrdreKosc ordreKosc) {
        Technicien loadedTechnicien = technicienService.findByIdOrIdentifiant(ordreKosc.getTechnicien());
        if (loadedTechnicien == null) {
            ordreKosc.setTechnicien(technicienService.save(ordreKosc.getTechnicien()));
        } else {
            ordreKosc.setTechnicien(loadedTechnicien);
        }
    }
    private void findOrSaveEtatDemande(OrdreKosc ordreKosc) {
        EtatDemandeKosc loadedEtatDemande = etatDemandeKoscService.findByIdOrCode(ordreKosc.getEtatDemandeKosc());
        if (loadedEtatDemande == null) {
            ordreKosc.setEtatDemandeKosc(etatDemandeKoscService.save(ordreKosc.getEtatDemandeKosc()));
        } else {
            ordreKosc.setEtatDemandeKosc(loadedEtatDemande);
        }
    }


    private void findTemplateEmailPlanification(OrdreKosc ordreKosc) {
        TemplateEmailPlanification loadedTemplateEmailPlanification = null;
        if (ordreKosc.getTemplateEmailPlanification() != null && ordreKosc.getTemplateEmailPlanification().getId() != null)
            loadedTemplateEmailPlanification = templateEmailPlanificationService.findById(ordreKosc.getTemplateEmailPlanification().getId());

        if (loadedTemplateEmailPlanification == null) {
            return;
        }
        ordreKosc.setTemplateEmailPlanification(loadedTemplateEmailPlanification);
    }

    private void findTemplateEmailReport(OrdreKosc ordreKosc) {
        TemplateEmailReport loadedTemplateEmailReport = null;
        if (ordreKosc.getTemplateEmailReport() != null && ordreKosc.getTemplateEmailReport().getId() != null)
            loadedTemplateEmailReport = templateEmailReportService.findById(ordreKosc.getTemplateEmailReport().getId());

        if (loadedTemplateEmailReport == null) {
            return;
        }
        ordreKosc.setTemplateEmailReport(loadedTemplateEmailReport);
    }

    private void findTemplateEmailReplanification(OrdreKosc ordreKosc) {
        TemplateEmailReplanification loadedTemplateEmailReplanification = null;
        if (ordreKosc.getTemplateEmailReplanification() != null && ordreKosc.getTemplateEmailReplanification().getId() != null)
            loadedTemplateEmailReplanification = templateEmailReplanificationService.findById(ordreKosc.getTemplateEmailReplanification().getId());

        if (loadedTemplateEmailReplanification == null) {
            return;
        }
        ordreKosc.setTemplateEmailReplanification(loadedTemplateEmailReplanification);
    }

    private void findTemplateEmailRefus(OrdreKosc ordreKosc) {
        TemplateEmailRefus loadedTemplateEmailRefus = null;
        if (ordreKosc.getTemplateEmailRefus() != null && ordreKosc.getTemplateEmailRefus().getId() != null)
            loadedTemplateEmailRefus = templateEmailRefusService.findById(ordreKosc.getTemplateEmailRefus().getId());

        if (loadedTemplateEmailRefus == null) {
            return;
        }
        ordreKosc.setTemplateEmailRefus(loadedTemplateEmailRefus);
    }

    private void findTemplateEmailMauvaisContact(OrdreKosc ordreKosc) {
        TemplateEmailMauvaisContact loadedTemplateEmailMauvaisContact = null;
        if (ordreKosc.getTemplateEmailMauvaisContact() != null && ordreKosc.getTemplateEmailMauvaisContact().getId() != null)
            loadedTemplateEmailMauvaisContact = templateEmailMauvaisContactService.findById(ordreKosc.getTemplateEmailMauvaisContact().getId());

        if (loadedTemplateEmailMauvaisContact == null) {
            return;
        }
        ordreKosc.setTemplateEmailMauvaisContact(loadedTemplateEmailMauvaisContact);
    }

    private void findTemplateEmailConfirmationClient(OrdreKosc ordreKosc) {
        TemplateEmailConfirmationClient loadedTemplateEmailConfirmationClient = null;
        if (ordreKosc.getTemplateEmailConfirmationClient() != null && ordreKosc.getTemplateEmailConfirmationClient().getId() != null)
            loadedTemplateEmailConfirmationClient = templateEmailConfirmationClientService.findById(ordreKosc.getTemplateEmailConfirmationClient().getId());

        if (loadedTemplateEmailConfirmationClient == null) {
            return;
        }
        ordreKosc.setTemplateEmailConfirmationClient(loadedTemplateEmailConfirmationClient);
    }

    private void findTemplateEmailCri(OrdreKosc ordreKosc) {
        TemplateEmailCri loadedTemplateEmailCri = null;
        if (ordreKosc.getTemplateEmailCri() != null && ordreKosc.getTemplateEmailCri().getId() != null)
            loadedTemplateEmailCri = templateEmailCriService.findById(ordreKosc.getTemplateEmailCri().getId());

        if (loadedTemplateEmailCri == null) {
            return;
        }
        ordreKosc.setTemplateEmailCri(loadedTemplateEmailCri);
    }

    private void findTemplateEmailFtl(OrdreKosc ordreKosc) {
        TemplateEmailFtl loadedTemplateEmailFtl = null;
        if (ordreKosc.getTemplateEmailFtl() != null && ordreKosc.getTemplateEmailFtl().getId() != null)
            loadedTemplateEmailFtl = templateEmailFtlService.findById(ordreKosc.getTemplateEmailFtl().getId());

        if (loadedTemplateEmailFtl == null) {
            return;
        }
        ordreKosc.setTemplateEmailFtl(loadedTemplateEmailFtl);
    }

    private void findTemplateEmailClientInjoinable(OrdreKosc ordreKosc) {
        TemplateEmailClientInjoinable loadedTemplateEmailClientInjoinable = null;
        if (ordreKosc.getTemplateEmailClientInjoinable() != null && ordreKosc.getTemplateEmailClientInjoinable().getId() != null)
            loadedTemplateEmailClientInjoinable = templateEmailClientInjoinableService.findById(ordreKosc.getTemplateEmailClientInjoinable().getId());

        if (loadedTemplateEmailClientInjoinable == null) {
            return;
        }
        ordreKosc.setTemplateEmailClientInjoinable(loadedTemplateEmailClientInjoinable);
    }

    private void findTemplateEmailClientInjoinableKosc(OrdreKosc ordreKosc) {
        TemplateEmailClientInjoinableKosc loadedTemplateEmailClientInjoinableKosc = null;
        if (ordreKosc.getTemplateEmailClientInjoinableKosc() != null && ordreKosc.getTemplateEmailClientInjoinableKosc().getId() != null)
            loadedTemplateEmailClientInjoinableKosc = templateEmailClientInjoinableKoscService.findById(ordreKosc.getTemplateEmailClientInjoinableKosc().getId());

        if (loadedTemplateEmailClientInjoinableKosc == null) {
            return;
        }
        ordreKosc.setTemplateEmailClientInjoinableKosc(loadedTemplateEmailClientInjoinableKosc);
    }

    private void findEtatDemandeKosc(OrdreKosc ordreKosc) {
        EtatDemandeKosc loadedEtatDemandeKosc = etatDemandeKoscService.findByIdOrCode(ordreKosc.getEtatDemandeKosc());

        if (loadedEtatDemandeKosc == null) {
            return;
        }
        ordreKosc.setEtatDemandeKosc(loadedEtatDemandeKosc);
    }

    private void findTemplateEmailCloture(OrdreKosc ordreKosc) {
        TemplateEmailCloture loadedTemplateEmailCloture = null;
        if (ordreKosc.getTemplateEmailCloture() != null && ordreKosc.getTemplateEmailCloture().getId() != null)
            loadedTemplateEmailCloture = templateEmailClotureService.findById(ordreKosc.getTemplateEmailCloture().getId());

        if (loadedTemplateEmailCloture == null) {
            return;
        }
        ordreKosc.setTemplateEmailCloture(loadedTemplateEmailCloture);
    }

    private void findTemplateSuivi(OrdreKosc ordreKosc) {
        TemplateSuivi loadedTemplateSuivi = null;
        if (ordreKosc.getTemplateSuivi() != null && ordreKosc.getTemplateSuivi().getId() != null)
            loadedTemplateSuivi = templateSuiviService.findById(ordreKosc.getTemplateSuivi().getId());

        if (loadedTemplateSuivi == null) {
            return;
        }
        ordreKosc.setTemplateSuivi(loadedTemplateSuivi);
    }

    private void findCauseKoOk(OrdreKosc ordreKosc) {
        CauseKoOk loadedCauseKoOk = causeKoOkService.findByIdOrCode(ordreKosc.getCauseKoOk());

        if (loadedCauseKoOk == null) {
            return;
        }
        ordreKosc.setCauseKoOk(loadedCauseKoOk);
    }

    private void findSourceReplanification(OrdreKosc ordreKosc) {
        SourceReplanification loadedSourceReplanification = sourceReplanificationService.findByIdOrCode(ordreKosc.getSourceReplanification());

        if (loadedSourceReplanification == null) {
            return;
        }
        ordreKosc.setSourceReplanification(loadedSourceReplanification);
    }

    @Override
    @Transactional
    public void delete(List<OrdreKosc> ordreKoscs) {
        if (ListUtil.isNotEmpty(ordreKoscs)) {
            ordreKoscs.forEach(e -> ordreKoscDao.delete(e));
        }
    }

    @Override
    public void update(List<OrdreKosc> ordreKoscs) {
        if (ListUtil.isNotEmpty(ordreKoscs)) {
            ordreKoscs.forEach(e -> ordreKoscDao.save(e));
        }
    }

    private void createOperator(OrdreKosc ordreKosc) {
        Operator loadedOperator = operatorService.findByIdOrReference(ordreKosc.getOperator());

        if (loadedOperator == null) {
            loadedOperator = operatorService.save(new Operator());
        }
        ordreKosc.setOperator(loadedOperator);
    }

    private void createDepartement(OrdreKosc ordreKosc) {
        Departement loadedDepartement = departementService.findByIdOrCode(ordreKosc.getDepartement());

        if (loadedDepartement == null) {
            loadedDepartement = departementService.save(new Departement());
        }
        ordreKosc.setDepartement(loadedDepartement);
    }

    private void createTechnicien(OrdreKosc ordreKosc) {
        Technicien loadedTechnicien = technicienService.findByIdOrIdentifiant(ordreKosc.getTechnicien());

        if (loadedTechnicien == null) {
            loadedTechnicien = technicienService.save(new Technicien());
        }
        ordreKosc.setTechnicien(loadedTechnicien);
    }

   /* private void createClient(OrdreKosc ordreKosc) {
        Client loadedClient = null;
        if (ordreKosc.getClient() != null && ordreKosc.getClient().getId() != null)
            loadedClient = clientService.findById(ordreKosc.getClient().getId());

        if (loadedClient == null) {
            loadedClient = clientService.save(new Client());
        }
        ordreKosc.setClient(loadedClient);
    } */




}

