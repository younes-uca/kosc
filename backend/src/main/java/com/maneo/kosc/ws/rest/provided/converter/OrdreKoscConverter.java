package com.maneo.kosc.ws.rest.provided.converter;

import com.maneo.kosc.bean.OrdreKosc;
import com.maneo.kosc.service.util.DateUtil;
import com.maneo.kosc.service.util.NumberUtil;
import com.maneo.kosc.service.util.StringUtil;
import com.maneo.kosc.ws.rest.provided.vo.OrdreKoscVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OrdreKoscConverter extends AbstractConverter<OrdreKosc, OrdreKoscVo> {

    @Autowired
    private TemplateEmailReplanificationConverter templateEmailReplanificationConverter;
    @Autowired
    private TemplateEmailPlanificationConverter templateEmailPlanificationConverter;
    @Autowired
    private TemplateSuiviConverter templateSuiviConverter;
    @Autowired
    private OperatorConverter operatorConverter;
    @Autowired
    private SourceReplanificationConverter sourceReplanificationConverter;
    @Autowired
    private TemplateEmailClientInjoinableKoscConverter templateEmailClientInjoinableKoscConverter;
    @Autowired
    private CauseKoOkConverter causeKoOkConverter;
    @Autowired
    private TemplateEmailClientInjoinableConverter templateEmailClientInjoinableConverter;
    @Autowired
    private EtatDemandeKoscConverter etatDemandeKoscConverter;
    @Autowired
    private TemplateEmailFtlConverter templateEmailFtlConverter;
    @Autowired
    private TemplateEmailClotureConverter templateEmailClotureConverter;
    @Autowired
    private TemplateEmailRefusConverter templateEmailRefusConverter;
    @Autowired
    private TemplateEmailConfirmationClientConverter templateEmailConfirmationClientConverter;
    @Autowired
    private DepartementConverter departementConverter;
    @Autowired
    private TemplateEmailReportConverter templateEmailReportConverter;
    @Autowired
    private TemplateEmailMauvaisContactConverter templateEmailMauvaisContactConverter;
    @Autowired
    private TechnicienConverter technicienConverter;
    @Autowired
    private TemplateEmailCriConverter templateEmailCriConverter;
    private Boolean operator;
    private Boolean departement;
    private Boolean technicien;
    private Boolean templateEmailPlanification;
    private Boolean templateEmailReport;
    private Boolean templateEmailReplanification;
    private Boolean templateEmailRefus;
    private Boolean templateEmailMauvaisContact;
    private Boolean templateEmailConfirmationClient;
    private Boolean templateEmailCri;
    private Boolean templateEmailFtl;
    private Boolean templateEmailClientInjoinable;
    private Boolean templateEmailClientInjoinableKosc;
    private Boolean etatDemandeKosc;
    private Boolean templateEmailCloture;
    private Boolean templateSuivi;
    private Boolean causeKoOk;
    private Boolean sourceReplanification;

    public OrdreKoscConverter() {
        init(true);
    }

    @Override
    public OrdreKosc toItem(OrdreKoscVo vo) {
        if (vo == null) {
            return null;
        } else {
            OrdreKosc item = new OrdreKosc();
            if (StringUtil.isNotEmpty(vo.getId()))
                item.setId(NumberUtil.toLong(vo.getId()));
            if (StringUtil.isNotEmpty(vo.getNbrHeureDateSubmissionAndNow()))
                item.setNbrHeureDateSubmissionAndNow(NumberUtil.toLong(vo.getNbrHeureDateSubmissionAndNow()));
            if (StringUtil.isNotEmpty(vo.getReference()))
                item.setReference(vo.getReference());
            if (StringUtil.isNotEmpty(vo.getReferenceWorkOrder()))
                item.setReferenceWorkOrder(vo.getReferenceWorkOrder());
            if (StringUtil.isNotEmpty(vo.getCodeDecharge()))
                item.setCodeDecharge(vo.getCodeDecharge());

            if (StringUtil.isNotEmpty(vo.getDelaiPriseRdvParHeure()))
                item.setDelaiPriseRdvParHeure(NumberUtil.toDouble(vo.getDelaiPriseRdvParHeure()));

            if (StringUtil.isNotEmpty(vo.getSupplierServiceCode()))
                item.setSupplierServiceCode(vo.getSupplierServiceCode());
            if (StringUtil.isNotEmpty(vo.getDateDebutTraitement()))
                item.setDateDebutTraitement(DateUtil.parse(vo.getDateDebutTraitement()));
            if (StringUtil.isNotEmpty(vo.getEndCustumorName()))
                item.setEndCustumorName(vo.getEndCustumorName());
            if (StringUtil.isNotEmpty(vo.getEndCustumorSiret()))
                item.setEndCustumorSiret(vo.getEndCustumorSiret());
            if (StringUtil.isNotEmpty(vo.getEndCustumorFirstName()))
                item.setEndCustumorFirstName(vo.getEndCustumorFirstName());
            if (StringUtil.isNotEmpty(vo.getEndCustumorLastName()))
                item.setEndCustumorLastName(vo.getEndCustumorLastName());
            if (StringUtil.isNotEmpty(vo.getEndCustumorZipcode()))
                item.setEndCustumorZipcode(vo.getEndCustumorZipcode());
            if (StringUtil.isNotEmpty(vo.getEndCustumorStreetName()))
                item.setEndCustumorStreetName(vo.getEndCustumorStreetName());
            if (StringUtil.isNotEmpty(vo.getEndCustumorStreetNumber()))
                item.setEndCustumorStreetNumber(vo.getEndCustumorStreetNumber());
            if (StringUtil.isNotEmpty(vo.getEndCustumorCity()))
                item.setEndCustumorCity(vo.getEndCustumorCity());
            if (StringUtil.isNotEmpty(vo.getEndCustumorBuilding()))
                item.setEndCustumorBuilding(vo.getEndCustumorBuilding());
            if (StringUtil.isNotEmpty(vo.getEndCustumorStairs()))
                item.setEndCustumorStairs(vo.getEndCustumorStairs());
            if (StringUtil.isNotEmpty(vo.getEndCustumorFloor()))
                item.setEndCustumorFloor(vo.getEndCustumorFloor());
            if (StringUtil.isNotEmpty(vo.getEndCustumorContactFirstName()))
                item.setEndCustumorContactFirstName(vo.getEndCustumorContactFirstName());
            if (StringUtil.isNotEmpty(vo.getEndCustumorContactLastName()))
                item.setEndCustumorContactLastName(vo.getEndCustumorContactLastName());
            if (StringUtil.isNotEmpty(vo.getEndCustumorContactPhone()))
                item.setEndCustumorContactPhone(vo.getEndCustumorContactPhone());
            if (StringUtil.isNotEmpty(vo.getEndCustumorContactCellPhone()))
                item.setEndCustumorContactCellPhone(vo.getEndCustumorContactCellPhone());
            if (StringUtil.isNotEmpty(vo.getEndCustumorContactEmail()))
                item.setEndCustumorContactEmail(vo.getEndCustumorContactEmail());
            if (StringUtil.isNotEmpty(vo.getCompany()))
                item.setCompany(vo.getCompany());
            if (StringUtil.isNotEmpty(vo.getReferenDossier()))
                item.setReferenDossier(vo.getReferenDossier());
            if (StringUtil.isNotEmpty(vo.getSubmissionDate()))
                item.setSubmissionDate(DateUtil.parseTimestampUniversalFormat(vo.getSubmissionDate()));
            if (StringUtil.isNotEmpty(vo.getCoordonnePboY()))
                item.setCoordonnePboY(vo.getCoordonnePboY());
            if (StringUtil.isNotEmpty(vo.getHauteurPbo()))
                item.setHauteurPbo(vo.getHauteurPbo());
            if (StringUtil.isNotEmpty(vo.getTypeMaterielPbo()))
                item.setTypeMaterielPbo(vo.getTypeMaterielPbo());
            if (StringUtil.isNotEmpty(vo.getTypePbo()))
                item.setTypePbo(vo.getTypePbo());
            if (StringUtil.isNotEmpty(vo.getConditionSyndics()))
                item.setConditionSyndics(vo.getConditionSyndics());
            if (StringUtil.isNotEmpty(vo.getTypeRacordementPboPto()))
                item.setTypeRacordementPboPto(vo.getTypeRacordementPboPto());
            if (StringUtil.isNotEmpty(vo.getAutreInfosPboPto()))
                item.setAutreInfosPboPto(vo.getAutreInfosPboPto());
            if (StringUtil.isNotEmpty(vo.getCodeAccesImmeuble()))
                item.setCodeAccesImmeuble(vo.getCodeAccesImmeuble());
            if (StringUtil.isNotEmpty(vo.getContacteImmeuble()))
                item.setContacteImmeuble(vo.getContacteImmeuble());
            if (StringUtil.isNotEmpty(vo.getPmaAccessible()))
                item.setPmaAccessible(vo.getPmaAccessible());
            if (StringUtil.isNotEmpty(vo.getInfoObtentionCle()))
                item.setInfoObtentionCle(vo.getInfoObtentionCle());
            if (StringUtil.isNotEmpty(vo.getLocaleIpm()))
                item.setLocaleIpm(vo.getLocaleIpm());
            if (StringUtil.isNotEmpty(vo.getContactsSyndic()))
                item.setContactsSyndic(vo.getContactsSyndic());
            if (vo.getRacordementLong() != null)
                item.setRacordementLong(vo.getRacordementLong());
            if (StringUtil.isNotEmpty(vo.getOc1()))
                item.setOc1(vo.getOc1());
            if (StringUtil.isNotEmpty(vo.getNomModulePm1()))
                item.setNomModulePm1(vo.getNomModulePm1());
            if (StringUtil.isNotEmpty(vo.getPositionModulePm1()))
                item.setPositionModulePm1(vo.getPositionModulePm1());
            if (StringUtil.isNotEmpty(vo.getReferenceCableModulePm1()))
                item.setReferenceCableModulePm1(vo.getReferenceCableModulePm1());
            if (StringUtil.isNotEmpty(vo.getReferenceTubeModulePm1()))
                item.setReferenceTubeModulePm1(vo.getReferenceTubeModulePm1());
            if (StringUtil.isNotEmpty(vo.getInformationFibreModulePm1()))
                item.setInformationFibreModulePm1(vo.getInformationFibreModulePm1());
            if (StringUtil.isNotEmpty(vo.getReferenceCablePbo1()))
                item.setReferenceCablePbo1(vo.getReferenceCablePbo1());
            if (StringUtil.isNotEmpty(vo.getInformationTubePbo1()))
                item.setInformationTubePbo1(vo.getInformationTubePbo1());
            if (StringUtil.isNotEmpty(vo.getInformationFibrePbo1()))
                item.setInformationFibrePbo1(vo.getInformationFibrePbo1());
            if (StringUtil.isNotEmpty(vo.getConnecteurPriseNumero1()))
                item.setConnecteurPriseNumero1(vo.getConnecteurPriseNumero1());
            if (StringUtil.isNotEmpty(vo.getConnecteurPriseCouleur1()))
                item.setConnecteurPriseCouleur1(vo.getConnecteurPriseCouleur1());
            if (StringUtil.isNotEmpty(vo.getReserve1()))
                item.setReserve1(vo.getReserve1());
            if (StringUtil.isNotEmpty(vo.getOc2()))
                item.setOc2(vo.getOc2());
            if (StringUtil.isNotEmpty(vo.getNomModulePm2()))
                item.setNomModulePm2(vo.getNomModulePm2());
            if (StringUtil.isNotEmpty(vo.getPositionModulePm2()))
                item.setPositionModulePm2(vo.getPositionModulePm2());
            if (StringUtil.isNotEmpty(vo.getReferenceCableModulePm2()))
                item.setReferenceCableModulePm2(vo.getReferenceCableModulePm2());
            if (StringUtil.isNotEmpty(vo.getReferenceTubeModulePm2()))
                item.setReferenceTubeModulePm2(vo.getReferenceTubeModulePm2());
            if (StringUtil.isNotEmpty(vo.getInformationFibreModulePm2()))
                item.setInformationFibreModulePm2(vo.getInformationFibreModulePm2());
            if (StringUtil.isNotEmpty(vo.getReferenceCablePbo2()))
                item.setReferenceCablePbo2(vo.getReferenceCablePbo2());
            if (StringUtil.isNotEmpty(vo.getInformationTubePbo2()))
                item.setInformationTubePbo2(vo.getInformationTubePbo2());
            if (StringUtil.isNotEmpty(vo.getInformationFibrePbo2()))
                item.setInformationFibrePbo2(vo.getInformationFibrePbo2());
            if (StringUtil.isNotEmpty(vo.getConnecteurPriseNumero2()))
                item.setConnecteurPriseNumero2(vo.getConnecteurPriseNumero2());
            if (StringUtil.isNotEmpty(vo.getConnecteurPriseCouleur2()))
                item.setConnecteurPriseCouleur2(vo.getConnecteurPriseCouleur2());
            if (StringUtil.isNotEmpty(vo.getReserve2()))
                item.setReserve2(vo.getReserve2());
            if (StringUtil.isNotEmpty(vo.getOc3()))
                item.setOc3(vo.getOc3());
            if (StringUtil.isNotEmpty(vo.getNomModulePm3()))
                item.setNomModulePm3(vo.getNomModulePm3());
            if (StringUtil.isNotEmpty(vo.getPositionModulePm3()))
                item.setPositionModulePm3(vo.getPositionModulePm3());
            if (StringUtil.isNotEmpty(vo.getReferenceCableModulePm3()))
                item.setReferenceCableModulePm3(vo.getReferenceCableModulePm3());
            if (StringUtil.isNotEmpty(vo.getReferenceTubeModulePm3()))
                item.setReferenceTubeModulePm3(vo.getReferenceTubeModulePm3());
            if (StringUtil.isNotEmpty(vo.getInformationFibreModulePm3()))
                item.setInformationFibreModulePm3(vo.getInformationFibreModulePm3());
            if (StringUtil.isNotEmpty(vo.getReferenceCablePbo3()))
                item.setReferenceCablePbo3(vo.getReferenceCablePbo3());
            if (StringUtil.isNotEmpty(vo.getInformationTubePbo3()))
                item.setInformationTubePbo3(vo.getInformationTubePbo3());
            if (StringUtil.isNotEmpty(vo.getInformationFibrePbo3()))
                item.setInformationFibrePbo3(vo.getInformationFibrePbo3());
            if (StringUtil.isNotEmpty(vo.getConnecteurPriseNumero3()))
                item.setConnecteurPriseNumero3(vo.getConnecteurPriseNumero3());
            if (StringUtil.isNotEmpty(vo.getConnecteurPriseCouleur3()))
                item.setConnecteurPriseCouleur3(vo.getConnecteurPriseCouleur3());
            if (StringUtil.isNotEmpty(vo.getReserve3()))
                item.setReserve3(vo.getReserve3());
            if (StringUtil.isNotEmpty(vo.getOc4()))
                item.setOc4(vo.getOc4());
            if (StringUtil.isNotEmpty(vo.getNomModulePm4()))
                item.setNomModulePm4(vo.getNomModulePm4());
            if (StringUtil.isNotEmpty(vo.getPositionModulePm4()))
                item.setPositionModulePm4(vo.getPositionModulePm4());
            if (StringUtil.isNotEmpty(vo.getReferenceCableModulePm4()))
                item.setReferenceCableModulePm4(vo.getReferenceCableModulePm4());
            if (StringUtil.isNotEmpty(vo.getReferenceTubeModulePm4()))
                item.setReferenceTubeModulePm4(vo.getReferenceTubeModulePm4());
            if (StringUtil.isNotEmpty(vo.getInformationFibreModulePm4()))
                item.setInformationFibreModulePm4(vo.getInformationFibreModulePm4());
            if (StringUtil.isNotEmpty(vo.getReferenceCablePbo4()))
                item.setReferenceCablePbo4(vo.getReferenceCablePbo4());
            if (StringUtil.isNotEmpty(vo.getInformationTubePbo4()))
                item.setInformationTubePbo4(vo.getInformationTubePbo4());
            if (StringUtil.isNotEmpty(vo.getInformationFibrePbo4()))
                item.setInformationFibrePbo4(vo.getInformationFibrePbo4());
            if (StringUtil.isNotEmpty(vo.getConnecteurPriseNumero4()))
                item.setConnecteurPriseNumero4(vo.getConnecteurPriseNumero4());
            if (StringUtil.isNotEmpty(vo.getConnecteurPriseCouleur4()))
                item.setConnecteurPriseCouleur4(vo.getConnecteurPriseCouleur4());
            if (StringUtil.isNotEmpty(vo.getReserve4()))
                item.setReserve4(vo.getReserve4());
            if (StringUtil.isNotEmpty(vo.getPboReel()))
                item.setPboReel(vo.getPboReel());
            if (StringUtil.isNotEmpty(vo.getNumeroSerieOnt()))
                item.setNumeroSerieOnt(vo.getNumeroSerieOnt());
            if (StringUtil.isNotEmpty(vo.getHotline()))
                item.setHotline(vo.getHotline());
            if (StringUtil.isNotEmpty(vo.getMutationPbo()))
                item.setMutationPbo(vo.getMutationPbo());
            if (StringUtil.isNotEmpty(vo.getWorkOrderType()))
                item.setWorkOrderType(vo.getWorkOrderType());
            if (StringUtil.isNotEmpty(vo.getProduct()))
                item.setProduct(vo.getProduct());
            if (StringUtil.isNotEmpty(vo.getProductCode()))
                item.setProductCode(vo.getProductCode());
            if (StringUtil.isNotEmpty(vo.getProductLabel()))
                item.setProductLabel(vo.getProductLabel());
            if (StringUtil.isNotEmpty(vo.getProvider()))
                item.setProvider(vo.getProvider());
            if (StringUtil.isNotEmpty(vo.getProviderFileType()))
                item.setProviderFileType(vo.getProviderFileType());
            if (StringUtil.isNotEmpty(vo.getSpliter()))
                item.setSpliter(vo.getSpliter());
            if (vo.getExistingOtp() != null)
                item.setExistingOtp(vo.getExistingOtp());
            if (StringUtil.isNotEmpty(vo.getProfile()))
                item.setProfile(vo.getProfile());
            if (StringUtil.isNotEmpty(vo.getProviderSlId()))
                item.setProviderSlId(vo.getProviderSlId());
            if (StringUtil.isNotEmpty(vo.getReferencePrestationPrise()))
                item.setReferencePrestationPrise(vo.getReferencePrestationPrise());
            if (StringUtil.isNotEmpty(vo.getReferencePm()))
                item.setReferencePm(vo.getReferencePm());
            if (StringUtil.isNotEmpty(vo.getReferencePmTechnique()))
                item.setReferencePmTechnique(vo.getReferencePmTechnique());
            if (StringUtil.isNotEmpty(vo.getLocalisationPm()))
                item.setLocalisationPm(vo.getLocalisationPm());
            if (StringUtil.isNotEmpty(vo.getProviderProduct()))
                item.setProviderProduct(vo.getProviderProduct());
            if (StringUtil.isNotEmpty(vo.getReferencePbo()))
                item.setReferencePbo(vo.getReferencePbo());
            if (StringUtil.isNotEmpty(vo.getLocalisationPbo()))
                item.setLocalisationPbo(vo.getLocalisationPbo());
            if (StringUtil.isNotEmpty(vo.getReferencePrise()))
                item.setReferencePrise(vo.getReferencePrise());
            if (StringUtil.isNotEmpty(vo.getDatePremierAppel()))
                item.setDatePremierAppel(DateUtil.parseTimestampUniversalFormat(vo.getDatePremierAppel()));
            if (StringUtil.isNotEmpty(vo.getDateDeuxiemeAppel()))
                item.setDateDeuxiemeAppel(DateUtil.parseTimestampUniversalFormat(vo.getDateDeuxiemeAppel()));
            if (StringUtil.isNotEmpty(vo.getDateTroisiemeAppel()))
                item.setDateTroisiemeAppel(DateUtil.parseTimestampUniversalFormat(vo.getDateTroisiemeAppel()));
            if (StringUtil.isNotEmpty(vo.getDatePriseRdv()))
                item.setDatePriseRdv(DateUtil.parseTimestampUniversalFormat(vo.getDatePriseRdv()));
            if (StringUtil.isNotEmpty(vo.getDateRdv()))
                item.setDateRdv(DateUtil.parseTimestampUniversalFormat(vo.getDateRdv()));
            if (StringUtil.isNotEmpty(vo.getDateOuverture()))
                item.setDateOuverture(DateUtil.parse(vo.getDateOuverture()));
            if (StringUtil.isNotEmpty(vo.getCommentaireClient()))
                item.setCommentaireClient(vo.getCommentaireClient());
            if (StringUtil.isNotEmpty(vo.getCommentaireKosc()))
                item.setCommentaireKosc(vo.getCommentaireKosc());
            if (StringUtil.isNotEmpty(vo.getObjetPlanification()))
                item.setObjetPlanification(vo.getObjetPlanification());
            if (StringUtil.isNotEmpty(vo.getCorpsPlanification()))
                item.setCorpsPlanification(vo.getCorpsPlanification());

            if (vo.getEnvoyePlanification() != null)
                item.setEnvoyePlanification(vo.getEnvoyePlanification());

            if (vo.getErdv() != null)
                item.setErdv(vo.getErdv());
            if (vo.getConfort() != null)
                item.setConfort(vo.getConfort());

            if (StringUtil.isNotEmpty(vo.getDateEnvoiPlanification()))
                item.setDateEnvoiPlanification(DateUtil.parse(vo.getDateEnvoiPlanification()));
            if (StringUtil.isNotEmpty(vo.getFromPlanification()))
                item.setFromPlanification(vo.getFromPlanification());
            if (StringUtil.isNotEmpty(vo.getToPlanification()))
                item.setToPlanification(vo.getToPlanification());
            if (StringUtil.isNotEmpty(vo.getDateAppelReplanification()))
                item.setDateAppelReplanification(DateUtil.parse(vo.getDateAppelReplanification()));
            if (StringUtil.isNotEmpty(vo.getObjetReport()))
                item.setObjetReport(vo.getObjetReport());
            if (StringUtil.isNotEmpty(vo.getCorpsReport()))
                item.setCorpsReport(vo.getCorpsReport());
            if (vo.getEnvoyeReport() != null)
                item.setEnvoyeReport(vo.getEnvoyeReport());
            if (StringUtil.isNotEmpty(vo.getDateEnvoiReport()))
                item.setDateEnvoiReport(DateUtil.parse(vo.getDateEnvoiReport()));
            if (StringUtil.isNotEmpty(vo.getObjetReplanification()))
                item.setObjetReplanification(vo.getObjetReplanification());
            if (StringUtil.isNotEmpty(vo.getCorpsReplanification()))
                item.setCorpsReplanification(vo.getCorpsReplanification());
            if (vo.getEnvoyeReplanification() != null)
                item.setEnvoyeReplanification(vo.getEnvoyeReplanification());
            if (StringUtil.isNotEmpty(vo.getDateEnvoiReplanification()))
                item.setDateEnvoiReplanification(DateUtil.parse(vo.getDateEnvoiReplanification()));
            if (StringUtil.isNotEmpty(vo.getObjetRefus()))
                item.setObjetRefus(vo.getObjetRefus());
            if (StringUtil.isNotEmpty(vo.getCorpsRefus()))
                item.setCorpsRefus(vo.getCorpsRefus());
            if (StringUtil.isNotEmpty(vo.getFromRefus()))
                item.setFromRefus(vo.getFromRefus());
            if (StringUtil.isNotEmpty(vo.getToRefus()))
                item.setToRefus(vo.getToRefus());
            if (vo.getEnvoyeRefus() != null)
                item.setEnvoyeRefus(vo.getEnvoyeRefus());
            if (StringUtil.isNotEmpty(vo.getDateEnvoiRefus()))
                item.setDateEnvoiRefus(DateUtil.parse(vo.getDateEnvoiRefus()));
            if (StringUtil.isNotEmpty(vo.getObjetMauvaisContact()))
                item.setObjetMauvaisContact(vo.getObjetMauvaisContact());
            if (StringUtil.isNotEmpty(vo.getCorpsMauvaisContact()))
                item.setCorpsMauvaisContact(vo.getCorpsMauvaisContact());
            if (StringUtil.isNotEmpty(vo.getFromMauvaisContact()))
                item.setFromMauvaisContact(vo.getFromMauvaisContact());
            if (StringUtil.isNotEmpty(vo.getToMauvaisContact()))
                item.setToMauvaisContact(vo.getToMauvaisContact());
            if (vo.getEnvoyeMauvaisContact() != null)
                item.setEnvoyeMauvaisContact(vo.getEnvoyeMauvaisContact());
            if (StringUtil.isNotEmpty(vo.getDateEnvoiMauvaisContact()))
                item.setDateEnvoiMauvaisContact(DateUtil.parse(vo.getDateEnvoiMauvaisContact()));
            if (StringUtil.isNotEmpty(vo.getObjetConfirmationClient()))
                item.setObjetConfirmationClient(vo.getObjetConfirmationClient());
            if (StringUtil.isNotEmpty(vo.getCorpsConfirmationClient()))
                item.setCorpsConfirmationClient(vo.getCorpsConfirmationClient());
            if (StringUtil.isNotEmpty(vo.getFromConfirmationClient()))
                item.setFromConfirmationClient(vo.getFromConfirmationClient());
            if (StringUtil.isNotEmpty(vo.getToConfirmationClient()))
                item.setToConfirmationClient(vo.getToConfirmationClient());
            if (vo.getEnvoyeConfirmationClient() != null)
                item.setEnvoyeConfirmationClient(vo.getEnvoyeConfirmationClient());
            if (StringUtil.isNotEmpty(vo.getDateEnvoiConfirmationClient()))
                item.setDateEnvoiConfirmationClient(DateUtil.parse(vo.getDateEnvoiConfirmationClient()));
            if (StringUtil.isNotEmpty(vo.getObjetCri()))
                item.setObjetCri(vo.getObjetCri());
            if (StringUtil.isNotEmpty(vo.getCorpsCri()))
                item.setCorpsCri(vo.getCorpsCri());
            if (StringUtil.isNotEmpty(vo.getFromCri()))
                item.setFromCri(vo.getFromCri());
            if (StringUtil.isNotEmpty(vo.getToCri()))
                item.setToCri(vo.getToCri());
            if (vo.getEnvoyeCri() != null)
                item.setEnvoyeCri(vo.getEnvoyeCri());
            if (StringUtil.isNotEmpty(vo.getDateEnvoiCri()))
                item.setDateEnvoiCri(DateUtil.parse(vo.getDateEnvoiCri()));
            if (StringUtil.isNotEmpty(vo.getObjetFtl()))
                item.setObjetFtl(vo.getObjetFtl());
            if (StringUtil.isNotEmpty(vo.getCorpsFtl()))
                item.setCorpsFtl(vo.getCorpsFtl());
            if (StringUtil.isNotEmpty(vo.getFromFtl()))
                item.setFromFtl(vo.getFromFtl());
            if (StringUtil.isNotEmpty(vo.getToFtl()))
                item.setToFtl(vo.getToFtl());
            if (vo.getEnvoyeFtl() != null)
                item.setEnvoyeFtl(vo.getEnvoyeFtl());
            if (StringUtil.isNotEmpty(vo.getDateEnvoiFtl()))
                item.setDateEnvoiFtl(DateUtil.parse(vo.getDateEnvoiFtl()));
            if (StringUtil.isNotEmpty(vo.getDateInterventionTechniqueDebut()))
                item.setDateInterventionTechniqueDebut(DateUtil.parseTime(vo.getDateInterventionTechniqueDebut()));
            if (StringUtil.isNotEmpty(vo.getDateInterventionTechniqueFin()))
                item.setDateInterventionTechniqueFin(DateUtil.parseTime(vo.getDateInterventionTechniqueFin()));
            if (StringUtil.isNotEmpty(vo.getObjetClientInjoinable()))
                item.setObjetClientInjoinable(vo.getObjetClientInjoinable());
            if (StringUtil.isNotEmpty(vo.getCorpsClientInjoinable()))
                item.setCorpsClientInjoinable(vo.getCorpsClientInjoinable());
            if (StringUtil.isNotEmpty(vo.getFromClientInjoinable()))
                item.setFromClientInjoinable(vo.getFromClientInjoinable());
            if (StringUtil.isNotEmpty(vo.getToClientInjoinable()))
                item.setToClientInjoinable(vo.getToClientInjoinable());
            if (vo.getEnvoyeClientInjoinable() != null)
                item.setEnvoyeClientInjoinable(vo.getEnvoyeClientInjoinable());
            if (StringUtil.isNotEmpty(vo.getDateEnvoiClientInjoinable()))
                item.setDateEnvoiClientInjoinable(DateUtil.parse(vo.getDateEnvoiClientInjoinable()));
            if (StringUtil.isNotEmpty(vo.getObjetClientInjoinableKosc()))
                item.setObjetClientInjoinableKosc(vo.getObjetClientInjoinableKosc());
            if (StringUtil.isNotEmpty(vo.getCorpsClientInjoinableKosc()))
                item.setCorpsClientInjoinableKosc(vo.getCorpsClientInjoinableKosc());
            if (StringUtil.isNotEmpty(vo.getFromClientInjoinableKosc()))
                item.setFromClientInjoinableKosc(vo.getFromClientInjoinableKosc());
            if (StringUtil.isNotEmpty(vo.getToClientInjoinableKosc()))
                item.setToClientInjoinableKosc(vo.getToClientInjoinableKosc());
            if (vo.getEnvoyeClientInjoinableKosc() != null)
                item.setEnvoyeClientInjoinableKosc(vo.getEnvoyeClientInjoinableKosc());
            if (StringUtil.isNotEmpty(vo.getDateEnvoiClientInjoinableKosc()))
                item.setDateEnvoiClientInjoinableKosc(DateUtil.parse(vo.getDateEnvoiClientInjoinableKosc()));
            if (StringUtil.isNotEmpty(vo.getCommentaireTechnicien()))
                item.setCommentaireTechnicien(vo.getCommentaireTechnicien());
            if (StringUtil.isNotEmpty(vo.getCommantaireCloture()))
                item.setCommantaireCloture(vo.getCommantaireCloture());
            if (StringUtil.isNotEmpty(vo.getObjetCloture()))
                item.setObjetCloture(vo.getObjetCloture());
            if (StringUtil.isNotEmpty(vo.getCorpsCloture()))
                item.setCorpsCloture(vo.getCorpsCloture());
            if (vo.getEnvoyeCloture() != null)
                item.setEnvoyeCloture(vo.getEnvoyeCloture());
            if (StringUtil.isNotEmpty(vo.getDateEnvoiCloture()))
                item.setDateEnvoiCloture(DateUtil.parse(vo.getDateEnvoiCloture()));
            if (StringUtil.isNotEmpty(vo.getEmailCloturePieceJoints()))
                item.setEmailCloturePieceJoints(vo.getEmailCloturePieceJoints());
            if (StringUtil.isNotEmpty(vo.getObjetSuivi()))
                item.setObjetSuivi(vo.getObjetSuivi());
            if (StringUtil.isNotEmpty(vo.getCorpsSuivi()))
                item.setCorpsSuivi(vo.getCorpsSuivi());
            if (vo.getEnvoyeSuivi() != null)
                item.setEnvoyeSuivi(vo.getEnvoyeSuivi());
            if (StringUtil.isNotEmpty(vo.getDateEnvoiSuivi()))
                item.setDateEnvoiSuivi(DateUtil.parse(vo.getDateEnvoiSuivi()));

            if (StringUtil.isNotEmpty(vo.getDateErdv()))
                item.setDateErdv(DateUtil.parse(vo.getDateErdv()));
            if (StringUtil.isNotEmpty(vo.getReferenceCommandePriseInterneOC()))
                item.setReferenceCommandePriseInterneOC(vo.getReferenceCommandePriseInterneOC());

            if (StringUtil.isNotEmpty(vo.getType()))
                item.setType(vo.getType());

            if (vo.getOperatorVo() != null && this.operator)
                item.setOperator(operatorConverter.toItem(vo.getOperatorVo()));
            if (vo.getDepartementVo() != null && this.departement)
                item.setDepartement(departementConverter.toItem(vo.getDepartementVo()));
            if (vo.getTechnicienVo() != null && this.technicien)
                item.setTechnicien(technicienConverter.toItem(vo.getTechnicienVo()));
            if (vo.getTemplateEmailPlanificationVo() != null && this.templateEmailPlanification)
                item.setTemplateEmailPlanification(templateEmailPlanificationConverter.toItem(vo.getTemplateEmailPlanificationVo()));
            if (vo.getTemplateEmailReportVo() != null && this.templateEmailReport)
                item.setTemplateEmailReport(templateEmailReportConverter.toItem(vo.getTemplateEmailReportVo()));
            if (vo.getTemplateEmailReplanificationVo() != null && this.templateEmailReplanification)
                item.setTemplateEmailReplanification(templateEmailReplanificationConverter.toItem(vo.getTemplateEmailReplanificationVo()));
            if (vo.getTemplateEmailRefusVo() != null && this.templateEmailRefus)
                item.setTemplateEmailRefus(templateEmailRefusConverter.toItem(vo.getTemplateEmailRefusVo()));
            if (vo.getTemplateEmailMauvaisContactVo() != null && this.templateEmailMauvaisContact)
                item.setTemplateEmailMauvaisContact(templateEmailMauvaisContactConverter.toItem(vo.getTemplateEmailMauvaisContactVo()));
            if (vo.getTemplateEmailConfirmationClientVo() != null && this.templateEmailConfirmationClient)
                item.setTemplateEmailConfirmationClient(templateEmailConfirmationClientConverter.toItem(vo.getTemplateEmailConfirmationClientVo()));
            if (vo.getTemplateEmailCriVo() != null && this.templateEmailCri)
                item.setTemplateEmailCri(templateEmailCriConverter.toItem(vo.getTemplateEmailCriVo()));
            if (vo.getTemplateEmailFtlVo() != null && this.templateEmailFtl)
                item.setTemplateEmailFtl(templateEmailFtlConverter.toItem(vo.getTemplateEmailFtlVo()));
            if (vo.getTemplateEmailClientInjoinableVo() != null && this.templateEmailClientInjoinable)
                item.setTemplateEmailClientInjoinable(templateEmailClientInjoinableConverter.toItem(vo.getTemplateEmailClientInjoinableVo()));
            if (vo.getTemplateEmailClientInjoinableKoscVo() != null && this.templateEmailClientInjoinableKosc)
                item.setTemplateEmailClientInjoinableKosc(templateEmailClientInjoinableKoscConverter.toItem(vo.getTemplateEmailClientInjoinableKoscVo()));
            if (vo.getEtatDemandeKoscVo() != null && this.etatDemandeKosc)
                item.setEtatDemandeKosc(etatDemandeKoscConverter.toItem(vo.getEtatDemandeKoscVo()));
            if (vo.getTemplateEmailClotureVo() != null && this.templateEmailCloture)
                item.setTemplateEmailCloture(templateEmailClotureConverter.toItem(vo.getTemplateEmailClotureVo()));
            if (vo.getTemplateSuiviVo() != null && this.templateSuivi)
                item.setTemplateSuivi(templateSuiviConverter.toItem(vo.getTemplateSuiviVo()));
            if (vo.getCauseKoOkVo() != null && this.causeKoOk)
                item.setCauseKoOk(causeKoOkConverter.toItem(vo.getCauseKoOkVo()));

            if (vo.getSourceReplanificationVo() != null && this.sourceReplanification)
                item.setSourceReplanification(sourceReplanificationConverter.toItem(vo.getSourceReplanificationVo()));
            if (StringUtil.isNotEmpty(vo.getDateDernierAppel()))
                item.setDateDernierAppel(DateUtil.parse(vo.getDateDernierAppel()));
            if (StringUtil.isNotEmpty(vo.getNumeroDernierAppel()))
                item.setNumeroDernierAppel(NumberUtil.toLong(vo.getNumeroDernierAppel()));


            return item;
        }
    }

    @Override
    public OrdreKoscVo toVo(OrdreKosc item) {
        if (item == null) {
            return null;
        } else {
            OrdreKoscVo vo = new OrdreKoscVo();
            if (item.getId() != null)
                vo.setId(NumberUtil.toString(item.getId()));
            if (item.getNbrHeureDateSubmissionAndNow() != null)
                vo.setNbrHeureDateSubmissionAndNow(NumberUtil.toString(item.getNbrHeureDateSubmissionAndNow()));

            if (StringUtil.isNotEmpty(item.getReference()))
                vo.setReference(item.getReference());

            if (StringUtil.isNotEmpty(item.getReferenceWorkOrder()))
                vo.setReferenceWorkOrder(item.getReferenceWorkOrder());

            if (StringUtil.isNotEmpty(item.getCodeDecharge()))
                vo.setCodeDecharge(item.getCodeDecharge());

            if (StringUtil.isNotEmpty(item.getDelaiPriseRdvParHeure()))
                vo.setDelaiPriseRdvParHeure(NumberUtil.toString(item.getDelaiPriseRdvParHeure()));

            if (StringUtil.isNotEmpty(item.getSupplierServiceCode()))
                vo.setSupplierServiceCode(item.getSupplierServiceCode());

            if (item.getDateDebutTraitement() != null)
                vo.setDateDebutTraitement(DateUtil.formateDate(item.getDateDebutTraitement()));
            if (StringUtil.isNotEmpty(item.getEndCustumorName()))
                vo.setEndCustumorName(item.getEndCustumorName());

            if (StringUtil.isNotEmpty(item.getEndCustumorSiret()))
                vo.setEndCustumorSiret(item.getEndCustumorSiret());

            if (StringUtil.isNotEmpty(item.getEndCustumorFirstName()))
                vo.setEndCustumorFirstName(item.getEndCustumorFirstName());

            if (StringUtil.isNotEmpty(item.getEndCustumorLastName()))
                vo.setEndCustumorLastName(item.getEndCustumorLastName());

            if (StringUtil.isNotEmpty(item.getEndCustumorZipcode()))
                vo.setEndCustumorZipcode(item.getEndCustumorZipcode());

            if (StringUtil.isNotEmpty(item.getEndCustumorStreetName()))
                vo.setEndCustumorStreetName(item.getEndCustumorStreetName());

            if (StringUtil.isNotEmpty(item.getEndCustumorStreetNumber()))
                vo.setEndCustumorStreetNumber(item.getEndCustumorStreetNumber());

            if (StringUtil.isNotEmpty(item.getEndCustumorCity()))
                vo.setEndCustumorCity(item.getEndCustumorCity());

            if (StringUtil.isNotEmpty(item.getEndCustumorBuilding()))
                vo.setEndCustumorBuilding(item.getEndCustumorBuilding());

            if (StringUtil.isNotEmpty(item.getEndCustumorStairs()))
                vo.setEndCustumorStairs(item.getEndCustumorStairs());

            if (StringUtil.isNotEmpty(item.getEndCustumorFloor()))
                vo.setEndCustumorFloor(item.getEndCustumorFloor());

            if (StringUtil.isNotEmpty(item.getEndCustumorContactFirstName()))
                vo.setEndCustumorContactFirstName(item.getEndCustumorContactFirstName());

            if (StringUtil.isNotEmpty(item.getEndCustumorContactLastName()))
                vo.setEndCustumorContactLastName(item.getEndCustumorContactLastName());

            if (StringUtil.isNotEmpty(item.getEndCustumorContactPhone()))
                vo.setEndCustumorContactPhone(item.getEndCustumorContactPhone());

            if (StringUtil.isNotEmpty(item.getEndCustumorContactCellPhone()))
                vo.setEndCustumorContactCellPhone(item.getEndCustumorContactCellPhone());

            if (StringUtil.isNotEmpty(item.getEndCustumorContactEmail()))
                vo.setEndCustumorContactEmail(item.getEndCustumorContactEmail());

            if (StringUtil.isNotEmpty(item.getCompany()))
                vo.setCompany(item.getCompany());

            if (StringUtil.isNotEmpty(item.getReferenDossier()))
                vo.setReferenDossier(item.getReferenDossier());

            if (item.getSubmissionDate() != null)
                vo.setSubmissionDate(DateUtil.formateDate(item.getSubmissionDate()));
            if (StringUtil.isNotEmpty(item.getCoordonnePboY()))
                vo.setCoordonnePboY(item.getCoordonnePboY());

            if (StringUtil.isNotEmpty(item.getHauteurPbo()))
                vo.setHauteurPbo(item.getHauteurPbo());

            if (StringUtil.isNotEmpty(item.getTypeMaterielPbo()))
                vo.setTypeMaterielPbo(item.getTypeMaterielPbo());

            if (StringUtil.isNotEmpty(item.getTypePbo()))
                vo.setTypePbo(item.getTypePbo());

            if (StringUtil.isNotEmpty(item.getConditionSyndics()))
                vo.setConditionSyndics(item.getConditionSyndics());

            if (StringUtil.isNotEmpty(item.getTypeRacordementPboPto()))
                vo.setTypeRacordementPboPto(item.getTypeRacordementPboPto());

            if (StringUtil.isNotEmpty(item.getAutreInfosPboPto()))
                vo.setAutreInfosPboPto(item.getAutreInfosPboPto());

            if (StringUtil.isNotEmpty(item.getCodeAccesImmeuble()))
                vo.setCodeAccesImmeuble(item.getCodeAccesImmeuble());

            if (StringUtil.isNotEmpty(item.getContacteImmeuble()))
                vo.setContacteImmeuble(item.getContacteImmeuble());

            if (StringUtil.isNotEmpty(item.getPmaAccessible()))
                vo.setPmaAccessible(item.getPmaAccessible());

            if (StringUtil.isNotEmpty(item.getInfoObtentionCle()))
                vo.setInfoObtentionCle(item.getInfoObtentionCle());

            if (StringUtil.isNotEmpty(item.getLocaleIpm()))
                vo.setLocaleIpm(item.getLocaleIpm());

            if (StringUtil.isNotEmpty(item.getContactsSyndic()))
                vo.setContactsSyndic(item.getContactsSyndic());

            if (item.getRacordementLong() != null)
                vo.setRacordementLong(item.getRacordementLong());
            if (StringUtil.isNotEmpty(item.getOc1()))
                vo.setOc1(item.getOc1());

            if (StringUtil.isNotEmpty(item.getNomModulePm1()))
                vo.setNomModulePm1(item.getNomModulePm1());

            if (StringUtil.isNotEmpty(item.getPositionModulePm1()))
                vo.setPositionModulePm1(item.getPositionModulePm1());

            if (StringUtil.isNotEmpty(item.getReferenceCableModulePm1()))
                vo.setReferenceCableModulePm1(item.getReferenceCableModulePm1());

            if (StringUtil.isNotEmpty(item.getReferenceTubeModulePm1()))
                vo.setReferenceTubeModulePm1(item.getReferenceTubeModulePm1());

            if (StringUtil.isNotEmpty(item.getInformationFibreModulePm1()))
                vo.setInformationFibreModulePm1(item.getInformationFibreModulePm1());

            if (StringUtil.isNotEmpty(item.getReferenceCablePbo1()))
                vo.setReferenceCablePbo1(item.getReferenceCablePbo1());

            if (StringUtil.isNotEmpty(item.getInformationTubePbo1()))
                vo.setInformationTubePbo1(item.getInformationTubePbo1());

            if (StringUtil.isNotEmpty(item.getInformationFibrePbo1()))
                vo.setInformationFibrePbo1(item.getInformationFibrePbo1());

            if (StringUtil.isNotEmpty(item.getConnecteurPriseNumero1()))
                vo.setConnecteurPriseNumero1(item.getConnecteurPriseNumero1());

            if (StringUtil.isNotEmpty(item.getConnecteurPriseCouleur1()))
                vo.setConnecteurPriseCouleur1(item.getConnecteurPriseCouleur1());

            if (StringUtil.isNotEmpty(item.getReserve1()))
                vo.setReserve1(item.getReserve1());

            if (StringUtil.isNotEmpty(item.getOc2()))
                vo.setOc2(item.getOc2());

            if (StringUtil.isNotEmpty(item.getNomModulePm2()))
                vo.setNomModulePm2(item.getNomModulePm2());

            if (StringUtil.isNotEmpty(item.getPositionModulePm2()))
                vo.setPositionModulePm2(item.getPositionModulePm2());

            if (StringUtil.isNotEmpty(item.getReferenceCableModulePm2()))
                vo.setReferenceCableModulePm2(item.getReferenceCableModulePm2());

            if (StringUtil.isNotEmpty(item.getReferenceTubeModulePm2()))
                vo.setReferenceTubeModulePm2(item.getReferenceTubeModulePm2());

            if (StringUtil.isNotEmpty(item.getInformationFibreModulePm2()))
                vo.setInformationFibreModulePm2(item.getInformationFibreModulePm2());

            if (StringUtil.isNotEmpty(item.getReferenceCablePbo2()))
                vo.setReferenceCablePbo2(item.getReferenceCablePbo2());

            if (StringUtil.isNotEmpty(item.getInformationTubePbo2()))
                vo.setInformationTubePbo2(item.getInformationTubePbo2());

            if (StringUtil.isNotEmpty(item.getInformationFibrePbo2()))
                vo.setInformationFibrePbo2(item.getInformationFibrePbo2());

            if (StringUtil.isNotEmpty(item.getConnecteurPriseNumero2()))
                vo.setConnecteurPriseNumero2(item.getConnecteurPriseNumero2());

            if (StringUtil.isNotEmpty(item.getConnecteurPriseCouleur2()))
                vo.setConnecteurPriseCouleur2(item.getConnecteurPriseCouleur2());

            if (StringUtil.isNotEmpty(item.getReserve2()))
                vo.setReserve2(item.getReserve2());

            if (StringUtil.isNotEmpty(item.getOc3()))
                vo.setOc3(item.getOc3());

            if (StringUtil.isNotEmpty(item.getNomModulePm3()))
                vo.setNomModulePm3(item.getNomModulePm3());

            if (StringUtil.isNotEmpty(item.getPositionModulePm3()))
                vo.setPositionModulePm3(item.getPositionModulePm3());

            if (StringUtil.isNotEmpty(item.getReferenceCableModulePm3()))
                vo.setReferenceCableModulePm3(item.getReferenceCableModulePm3());

            if (StringUtil.isNotEmpty(item.getReferenceTubeModulePm3()))
                vo.setReferenceTubeModulePm3(item.getReferenceTubeModulePm3());

            if (StringUtil.isNotEmpty(item.getInformationFibreModulePm3()))
                vo.setInformationFibreModulePm3(item.getInformationFibreModulePm3());

            if (StringUtil.isNotEmpty(item.getReferenceCablePbo3()))
                vo.setReferenceCablePbo3(item.getReferenceCablePbo3());

            if (StringUtil.isNotEmpty(item.getInformationTubePbo3()))
                vo.setInformationTubePbo3(item.getInformationTubePbo3());

            if (StringUtil.isNotEmpty(item.getInformationFibrePbo3()))
                vo.setInformationFibrePbo3(item.getInformationFibrePbo3());

            if (StringUtil.isNotEmpty(item.getConnecteurPriseNumero3()))
                vo.setConnecteurPriseNumero3(item.getConnecteurPriseNumero3());

            if (StringUtil.isNotEmpty(item.getConnecteurPriseCouleur3()))
                vo.setConnecteurPriseCouleur3(item.getConnecteurPriseCouleur3());

            if (StringUtil.isNotEmpty(item.getReserve3()))
                vo.setReserve3(item.getReserve3());

            if (StringUtil.isNotEmpty(item.getOc4()))
                vo.setOc4(item.getOc4());

            if (StringUtil.isNotEmpty(item.getNomModulePm4()))
                vo.setNomModulePm4(item.getNomModulePm4());

            if (StringUtil.isNotEmpty(item.getPositionModulePm4()))
                vo.setPositionModulePm4(item.getPositionModulePm4());

            if (StringUtil.isNotEmpty(item.getReferenceCableModulePm4()))
                vo.setReferenceCableModulePm4(item.getReferenceCableModulePm4());

            if (StringUtil.isNotEmpty(item.getReferenceTubeModulePm4()))
                vo.setReferenceTubeModulePm4(item.getReferenceTubeModulePm4());

            if (StringUtil.isNotEmpty(item.getInformationFibreModulePm4()))
                vo.setInformationFibreModulePm4(item.getInformationFibreModulePm4());

            if (StringUtil.isNotEmpty(item.getReferenceCablePbo4()))
                vo.setReferenceCablePbo4(item.getReferenceCablePbo4());

            if (StringUtil.isNotEmpty(item.getInformationTubePbo4()))
                vo.setInformationTubePbo4(item.getInformationTubePbo4());

            if (StringUtil.isNotEmpty(item.getInformationFibrePbo4()))
                vo.setInformationFibrePbo4(item.getInformationFibrePbo4());

            if (StringUtil.isNotEmpty(item.getConnecteurPriseNumero4()))
                vo.setConnecteurPriseNumero4(item.getConnecteurPriseNumero4());

            if (StringUtil.isNotEmpty(item.getConnecteurPriseCouleur4()))
                vo.setConnecteurPriseCouleur4(item.getConnecteurPriseCouleur4());

            if (StringUtil.isNotEmpty(item.getReserve4()))
                vo.setReserve4(item.getReserve4());

            if (StringUtil.isNotEmpty(item.getPboReel()))
                vo.setPboReel(item.getPboReel());

            if (StringUtil.isNotEmpty(item.getNumeroSerieOnt()))
                vo.setNumeroSerieOnt(item.getNumeroSerieOnt());

            if (StringUtil.isNotEmpty(item.getHotline()))
                vo.setHotline(item.getHotline());

            if (StringUtil.isNotEmpty(item.getMutationPbo()))
                vo.setMutationPbo(item.getMutationPbo());

            if (StringUtil.isNotEmpty(item.getWorkOrderType()))
                vo.setWorkOrderType(item.getWorkOrderType());

            if (StringUtil.isNotEmpty(item.getProduct()))
                vo.setProduct(item.getProduct());

            if (StringUtil.isNotEmpty(item.getProductCode()))
                vo.setProductCode(item.getProductCode());

            if (StringUtil.isNotEmpty(item.getProductLabel()))
                vo.setProductLabel(item.getProductLabel());

            if (StringUtil.isNotEmpty(item.getProvider()))
                vo.setProvider(item.getProvider());

            if (StringUtil.isNotEmpty(item.getProviderFileType()))
                vo.setProviderFileType(item.getProviderFileType());

            if (StringUtil.isNotEmpty(item.getSpliter()))
                vo.setSpliter(item.getSpliter());

            if (item.getExistingOtp() != null)
                vo.setExistingOtp(item.getExistingOtp());
            if (StringUtil.isNotEmpty(item.getProfile()))
                vo.setProfile(item.getProfile());

            if (StringUtil.isNotEmpty(item.getProviderSlId()))
                vo.setProviderSlId(item.getProviderSlId());

            if (StringUtil.isNotEmpty(item.getReferencePrestationPrise()))
                vo.setReferencePrestationPrise(item.getReferencePrestationPrise());

            if (StringUtil.isNotEmpty(item.getReferencePm()))
                vo.setReferencePm(item.getReferencePm());

            if (StringUtil.isNotEmpty(item.getReferencePmTechnique()))
                vo.setReferencePmTechnique(item.getReferencePmTechnique());

            if (StringUtil.isNotEmpty(item.getLocalisationPm()))
                vo.setLocalisationPm(item.getLocalisationPm());

            if (StringUtil.isNotEmpty(item.getProviderProduct()))
                vo.setProviderProduct(item.getProviderProduct());

            if (StringUtil.isNotEmpty(item.getReferencePbo()))
                vo.setReferencePbo(item.getReferencePbo());

            if (StringUtil.isNotEmpty(item.getLocalisationPbo()))
                vo.setLocalisationPbo(item.getLocalisationPbo());

            if (StringUtil.isNotEmpty(item.getReferencePrise()))
                vo.setReferencePrise(item.getReferencePrise());

            if (item.getDatePremierAppel() != null)
                vo.setDatePremierAppel(DateUtil.formateDate(item.getDatePremierAppel()));
            if (item.getDateDeuxiemeAppel() != null)
                vo.setDateDeuxiemeAppel(DateUtil.formateDate(item.getDateDeuxiemeAppel()));
            if (item.getDateTroisiemeAppel() != null)
                vo.setDateTroisiemeAppel(DateUtil.formateDate(item.getDateTroisiemeAppel()));
            if (item.getDatePriseRdv() != null)
                vo.setDatePriseRdv(DateUtil.formateDate(item.getDatePriseRdv()));
            if (item.getDateRdv() != null)
                vo.setDateRdv(DateUtil.formateDate(item.getDateRdv()));
            if (item.getDateOuverture() != null)
                vo.setDateOuverture(DateUtil.formateDate(item.getDateOuverture()));
            if (StringUtil.isNotEmpty(item.getCommentaireClient()))
                vo.setCommentaireClient(item.getCommentaireClient());

            if (StringUtil.isNotEmpty(item.getCommentaireKosc()))
                vo.setCommentaireKosc(item.getCommentaireKosc());

            if (StringUtil.isNotEmpty(item.getObjetPlanification()))
                vo.setObjetPlanification(item.getObjetPlanification());

            if (StringUtil.isNotEmpty(item.getCorpsPlanification()))
                vo.setCorpsPlanification(item.getCorpsPlanification());

            if (item.getEnvoyePlanification() != null)
                vo.setEnvoyePlanification(item.getEnvoyePlanification());

            if (item.getErdv() != null)
                vo.setErdv(item.getErdv());
            if (item.getConfort() != null)
                vo.setConfort(item.getConfort());
            if (item.getDateEnvoiPlanification() != null)
                vo.setDateEnvoiPlanification(DateUtil.formateDate(item.getDateEnvoiPlanification()));
            if (StringUtil.isNotEmpty(item.getFromPlanification()))
                vo.setFromPlanification(item.getFromPlanification());

            if (StringUtil.isNotEmpty(item.getToPlanification()))
                vo.setToPlanification(item.getToPlanification());

            if (item.getDateAppelReplanification() != null)
                vo.setDateAppelReplanification(DateUtil.formateDate(item.getDateAppelReplanification()));
            if (StringUtil.isNotEmpty(item.getObjetReport()))
                vo.setObjetReport(item.getObjetReport());

            if (StringUtil.isNotEmpty(item.getCorpsReport()))
                vo.setCorpsReport(item.getCorpsReport());

            if (item.getEnvoyeReport() != null)
                vo.setEnvoyeReport(item.getEnvoyeReport());
            if (item.getDateEnvoiReport() != null)
                vo.setDateEnvoiReport(DateUtil.formateDate(item.getDateEnvoiReport()));
            if (StringUtil.isNotEmpty(item.getObjetReplanification()))
                vo.setObjetReplanification(item.getObjetReplanification());

            if (StringUtil.isNotEmpty(item.getCorpsReplanification()))
                vo.setCorpsReplanification(item.getCorpsReplanification());

            if (item.getEnvoyeReplanification() != null)
                vo.setEnvoyeReplanification(item.getEnvoyeReplanification());
            if (item.getDateEnvoiReplanification() != null)
                vo.setDateEnvoiReplanification(DateUtil.formateDate(item.getDateEnvoiReplanification()));
            if (StringUtil.isNotEmpty(item.getObjetRefus()))
                vo.setObjetRefus(item.getObjetRefus());

            if (StringUtil.isNotEmpty(item.getCorpsRefus()))
                vo.setCorpsRefus(item.getCorpsRefus());

            if (StringUtil.isNotEmpty(item.getFromRefus()))
                vo.setFromRefus(item.getFromRefus());

            if (StringUtil.isNotEmpty(item.getToRefus()))
                vo.setToRefus(item.getToRefus());

            if (item.getEnvoyeRefus() != null)
                vo.setEnvoyeRefus(item.getEnvoyeRefus());
            if (item.getDateEnvoiRefus() != null)
                vo.setDateEnvoiRefus(DateUtil.formateDate(item.getDateEnvoiRefus()));
            if (StringUtil.isNotEmpty(item.getObjetMauvaisContact()))
                vo.setObjetMauvaisContact(item.getObjetMauvaisContact());

            if (StringUtil.isNotEmpty(item.getCorpsMauvaisContact()))
                vo.setCorpsMauvaisContact(item.getCorpsMauvaisContact());

            if (StringUtil.isNotEmpty(item.getFromMauvaisContact()))
                vo.setFromMauvaisContact(item.getFromMauvaisContact());

            if (StringUtil.isNotEmpty(item.getToMauvaisContact()))
                vo.setToMauvaisContact(item.getToMauvaisContact());

            if (item.getEnvoyeMauvaisContact() != null)
                vo.setEnvoyeMauvaisContact(item.getEnvoyeMauvaisContact());
            if (item.getDateEnvoiMauvaisContact() != null)
                vo.setDateEnvoiMauvaisContact(DateUtil.formateDate(item.getDateEnvoiMauvaisContact()));
            if (StringUtil.isNotEmpty(item.getObjetConfirmationClient()))
                vo.setObjetConfirmationClient(item.getObjetConfirmationClient());

            if (StringUtil.isNotEmpty(item.getCorpsConfirmationClient()))
                vo.setCorpsConfirmationClient(item.getCorpsConfirmationClient());

            if (StringUtil.isNotEmpty(item.getFromConfirmationClient()))
                vo.setFromConfirmationClient(item.getFromConfirmationClient());

            if (StringUtil.isNotEmpty(item.getToConfirmationClient()))
                vo.setToConfirmationClient(item.getToConfirmationClient());

            if (item.getEnvoyeConfirmationClient() != null)
                vo.setEnvoyeConfirmationClient(item.getEnvoyeConfirmationClient());
            if (item.getDateEnvoiConfirmationClient() != null)
                vo.setDateEnvoiConfirmationClient(DateUtil.formateDate(item.getDateEnvoiConfirmationClient()));
            if (StringUtil.isNotEmpty(item.getObjetCri()))
                vo.setObjetCri(item.getObjetCri());

            if (StringUtil.isNotEmpty(item.getCorpsCri()))
                vo.setCorpsCri(item.getCorpsCri());

            if (StringUtil.isNotEmpty(item.getFromCri()))
                vo.setFromCri(item.getFromCri());

            if (StringUtil.isNotEmpty(item.getToCri()))
                vo.setToCri(item.getToCri());

            if (item.getEnvoyeCri() != null)
                vo.setEnvoyeCri(item.getEnvoyeCri());
            if (item.getDateEnvoiCri() != null)
                vo.setDateEnvoiCri(DateUtil.formateDate(item.getDateEnvoiCri()));
            if (StringUtil.isNotEmpty(item.getObjetFtl()))
                vo.setObjetFtl(item.getObjetFtl());

            if (StringUtil.isNotEmpty(item.getCorpsFtl()))
                vo.setCorpsFtl(item.getCorpsFtl());

            if (StringUtil.isNotEmpty(item.getFromFtl()))
                vo.setFromFtl(item.getFromFtl());

            if (StringUtil.isNotEmpty(item.getToFtl()))
                vo.setToFtl(item.getToFtl());

            if (item.getEnvoyeFtl() != null)
                vo.setEnvoyeFtl(item.getEnvoyeFtl());
            if (item.getDateEnvoiFtl() != null)
                vo.setDateEnvoiFtl(DateUtil.formateDate(item.getDateEnvoiFtl()));
            if (item.getDateInterventionTechniqueDebut() != null)
                vo.setDateInterventionTechniqueDebut(DateUtil.formateDate(item.getDateInterventionTechniqueDebut()));
            if (item.getDateInterventionTechniqueFin() != null)
                vo.setDateInterventionTechniqueFin(DateUtil.formateDate(item.getDateInterventionTechniqueFin()));
            if (StringUtil.isNotEmpty(item.getObjetClientInjoinable()))
                vo.setObjetClientInjoinable(item.getObjetClientInjoinable());

            if (StringUtil.isNotEmpty(item.getCorpsClientInjoinable()))
                vo.setCorpsClientInjoinable(item.getCorpsClientInjoinable());

            if (StringUtil.isNotEmpty(item.getFromClientInjoinable()))
                vo.setFromClientInjoinable(item.getFromClientInjoinable());

            if (StringUtil.isNotEmpty(item.getToClientInjoinable()))
                vo.setToClientInjoinable(item.getToClientInjoinable());

            if (item.getEnvoyeClientInjoinable() != null)
                vo.setEnvoyeClientInjoinable(item.getEnvoyeClientInjoinable());
            if (item.getDateEnvoiClientInjoinable() != null)
                vo.setDateEnvoiClientInjoinable(DateUtil.formateDate(item.getDateEnvoiClientInjoinable()));
            if (StringUtil.isNotEmpty(item.getObjetClientInjoinableKosc()))
                vo.setObjetClientInjoinableKosc(item.getObjetClientInjoinableKosc());

            if (StringUtil.isNotEmpty(item.getCorpsClientInjoinableKosc()))
                vo.setCorpsClientInjoinableKosc(item.getCorpsClientInjoinableKosc());

            if (StringUtil.isNotEmpty(item.getFromClientInjoinableKosc()))
                vo.setFromClientInjoinableKosc(item.getFromClientInjoinableKosc());

            if (StringUtil.isNotEmpty(item.getToClientInjoinableKosc()))
                vo.setToClientInjoinableKosc(item.getToClientInjoinableKosc());

            if (item.getEnvoyeClientInjoinableKosc() != null)
                vo.setEnvoyeClientInjoinableKosc(item.getEnvoyeClientInjoinableKosc());
            if (item.getDateEnvoiClientInjoinableKosc() != null)
                vo.setDateEnvoiClientInjoinableKosc(DateUtil.formateDate(item.getDateEnvoiClientInjoinableKosc()));
            if (StringUtil.isNotEmpty(item.getCommentaireTechnicien()))
                vo.setCommentaireTechnicien(item.getCommentaireTechnicien());

            if (StringUtil.isNotEmpty(item.getCommantaireCloture()))
                vo.setCommantaireCloture(item.getCommantaireCloture());

            if (StringUtil.isNotEmpty(item.getObjetCloture()))
                vo.setObjetCloture(item.getObjetCloture());

            if (StringUtil.isNotEmpty(item.getCorpsCloture()))
                vo.setCorpsCloture(item.getCorpsCloture());

            if (item.getEnvoyeCloture() != null)
                vo.setEnvoyeCloture(item.getEnvoyeCloture());
            if (item.getDateEnvoiCloture() != null)
                vo.setDateEnvoiCloture(DateUtil.formateDate(item.getDateEnvoiCloture()));
            if (StringUtil.isNotEmpty(item.getEmailCloturePieceJoints()))
                vo.setEmailCloturePieceJoints(item.getEmailCloturePieceJoints());

            if (StringUtil.isNotEmpty(item.getObjetSuivi()))
                vo.setObjetSuivi(item.getObjetSuivi());

            if (StringUtil.isNotEmpty(item.getCorpsSuivi()))
                vo.setCorpsSuivi(item.getCorpsSuivi());

            if (item.getEnvoyeSuivi() != null)
                vo.setEnvoyeSuivi(item.getEnvoyeSuivi());
            if (item.getDateEnvoiSuivi() != null)
                vo.setDateEnvoiSuivi(DateUtil.formateDate(item.getDateEnvoiSuivi()));

            if (item.getDateErdv() != null)
                vo.setDateErdv(DateUtil.formateDate(item.getDateErdv()));
            if (StringUtil.isNotEmpty(item.getReferenceCommandePriseInterneOC()))
                vo.setReferenceCommandePriseInterneOC(item.getReferenceCommandePriseInterneOC());

            if (StringUtil.isNotEmpty(item.getType()))
                vo.setType(item.getType());

            if (item.getOperator() != null && this.operator) {
                vo.setOperatorVo(operatorConverter.toVo(item.getOperator()));
            }
            if (item.getDepartement() != null && this.departement) {
                vo.setDepartementVo(departementConverter.toVo(item.getDepartement()));
            }
            if (item.getTechnicien() != null && this.technicien) {
                vo.setTechnicienVo(technicienConverter.toVo(item.getTechnicien()));
            }
            if (item.getTemplateEmailPlanification() != null && this.templateEmailPlanification) {
                vo.setTemplateEmailPlanificationVo(templateEmailPlanificationConverter.toVo(item.getTemplateEmailPlanification()));
            }
            if (item.getTemplateEmailReport() != null && this.templateEmailReport) {
                vo.setTemplateEmailReportVo(templateEmailReportConverter.toVo(item.getTemplateEmailReport()));
            }
            if (item.getTemplateEmailReplanification() != null && this.templateEmailReplanification) {
                vo.setTemplateEmailReplanificationVo(templateEmailReplanificationConverter.toVo(item.getTemplateEmailReplanification()));
            }
            if (item.getTemplateEmailRefus() != null && this.templateEmailRefus) {
                vo.setTemplateEmailRefusVo(templateEmailRefusConverter.toVo(item.getTemplateEmailRefus()));
            }
            if (item.getTemplateEmailMauvaisContact() != null && this.templateEmailMauvaisContact) {
                vo.setTemplateEmailMauvaisContactVo(templateEmailMauvaisContactConverter.toVo(item.getTemplateEmailMauvaisContact()));
            }
            if (item.getTemplateEmailConfirmationClient() != null && this.templateEmailConfirmationClient) {
                vo.setTemplateEmailConfirmationClientVo(templateEmailConfirmationClientConverter.toVo(item.getTemplateEmailConfirmationClient()));
            }
            if (item.getTemplateEmailCri() != null && this.templateEmailCri) {
                vo.setTemplateEmailCriVo(templateEmailCriConverter.toVo(item.getTemplateEmailCri()));
            }
            if (item.getTemplateEmailFtl() != null && this.templateEmailFtl) {
                vo.setTemplateEmailFtlVo(templateEmailFtlConverter.toVo(item.getTemplateEmailFtl()));
            }
            if (item.getTemplateEmailClientInjoinable() != null && this.templateEmailClientInjoinable) {
                vo.setTemplateEmailClientInjoinableVo(templateEmailClientInjoinableConverter.toVo(item.getTemplateEmailClientInjoinable()));
            }
            if (item.getTemplateEmailClientInjoinableKosc() != null && this.templateEmailClientInjoinableKosc) {
                vo.setTemplateEmailClientInjoinableKoscVo(templateEmailClientInjoinableKoscConverter.toVo(item.getTemplateEmailClientInjoinableKosc()));
            }
            if (item.getEtatDemandeKosc() != null && this.etatDemandeKosc) {
                vo.setEtatDemandeKoscVo(etatDemandeKoscConverter.toVo(item.getEtatDemandeKosc()));
            }
            if (item.getTemplateEmailCloture() != null && this.templateEmailCloture) {
                vo.setTemplateEmailClotureVo(templateEmailClotureConverter.toVo(item.getTemplateEmailCloture()));
            }
            if (item.getTemplateSuivi() != null && this.templateSuivi) {
                vo.setTemplateSuiviVo(templateSuiviConverter.toVo(item.getTemplateSuivi()));
            }
            if (item.getCauseKoOk() != null && this.causeKoOk) {
                vo.setCauseKoOkVo(causeKoOkConverter.toVo(item.getCauseKoOk()));
            }


            if (item.getSourceReplanification() != null && this.sourceReplanification) {
                vo.setSourceReplanificationVo(sourceReplanificationConverter.toVo(item.getSourceReplanification()));
            }
            if (item.getDateDernierAppel() != null) {
                vo.setDateDernierAppel(DateUtil.formateDate(item.getDateDernierAppel()));
            }
            if (item.getNumeroDernierAppel() != null) {
                vo.setNumeroDernierAppel(NumberUtil.toString(item.getNumeroDernierAppel()));
            }

            return vo;
        }
    }

    public void init(Boolean value) {
        operator = value;
        departement = value;
        technicien = value;
        templateEmailPlanification = value;
        templateEmailReport = value;
        templateEmailReplanification = value;
        templateEmailRefus = value;
        templateEmailMauvaisContact = value;
        templateEmailConfirmationClient = value;
        templateEmailCri = value;
        templateEmailFtl = value;
        templateEmailClientInjoinable = value;
        templateEmailClientInjoinableKosc = value;
        etatDemandeKosc = value;
        templateEmailCloture = value;
        templateSuivi = value;
        causeKoOk = value;
        sourceReplanification = value;
    }


    public TemplateEmailReplanificationConverter getTemplateEmailReplanificationConverter() {
        return this.templateEmailReplanificationConverter;
    }

    public void setTemplateEmailReplanificationConverter(TemplateEmailReplanificationConverter templateEmailReplanificationConverter) {
        this.templateEmailReplanificationConverter = templateEmailReplanificationConverter;
    }

    public TemplateEmailPlanificationConverter getTemplateEmailPlanificationConverter() {
        return this.templateEmailPlanificationConverter;
    }

    public void setTemplateEmailPlanificationConverter(TemplateEmailPlanificationConverter templateEmailPlanificationConverter) {
        this.templateEmailPlanificationConverter = templateEmailPlanificationConverter;
    }

    public TemplateSuiviConverter getTemplateSuiviConverter() {
        return this.templateSuiviConverter;
    }

    public void setTemplateSuiviConverter(TemplateSuiviConverter templateSuiviConverter) {
        this.templateSuiviConverter = templateSuiviConverter;
    }

    public OperatorConverter getOperatorConverter() {
        return this.operatorConverter;
    }

    public void setOperatorConverter(OperatorConverter operatorConverter) {
        this.operatorConverter = operatorConverter;
    }

    public SourceReplanificationConverter getSourceReplanificationConverter() {
        return this.sourceReplanificationConverter;
    }

    public void setSourceReplanificationConverter(SourceReplanificationConverter sourceReplanificationConverter) {
        this.sourceReplanificationConverter = sourceReplanificationConverter;
    }

    public TemplateEmailClientInjoinableKoscConverter getTemplateEmailClientInjoinableKoscConverter() {
        return this.templateEmailClientInjoinableKoscConverter;
    }

    public void setTemplateEmailClientInjoinableKoscConverter(TemplateEmailClientInjoinableKoscConverter templateEmailClientInjoinableKoscConverter) {
        this.templateEmailClientInjoinableKoscConverter = templateEmailClientInjoinableKoscConverter;
    }

    public CauseKoOkConverter getCauseKoOkConverter() {
        return this.causeKoOkConverter;
    }

    public void setCauseKoOkConverter(CauseKoOkConverter causeKoOkConverter) {
        this.causeKoOkConverter = causeKoOkConverter;
    }

    public TemplateEmailClientInjoinableConverter getTemplateEmailClientInjoinableConverter() {
        return this.templateEmailClientInjoinableConverter;
    }

    public void setTemplateEmailClientInjoinableConverter(TemplateEmailClientInjoinableConverter templateEmailClientInjoinableConverter) {
        this.templateEmailClientInjoinableConverter = templateEmailClientInjoinableConverter;
    }

    public EtatDemandeKoscConverter getEtatDemandeKoscConverter() {
        return this.etatDemandeKoscConverter;
    }

    public void setEtatDemandeKoscConverter(EtatDemandeKoscConverter etatDemandeKoscConverter) {
        this.etatDemandeKoscConverter = etatDemandeKoscConverter;
    }

    public TemplateEmailFtlConverter getTemplateEmailFtlConverter() {
        return this.templateEmailFtlConverter;
    }

    public void setTemplateEmailFtlConverter(TemplateEmailFtlConverter templateEmailFtlConverter) {
        this.templateEmailFtlConverter = templateEmailFtlConverter;
    }

    public TemplateEmailClotureConverter getTemplateEmailClotureConverter() {
        return this.templateEmailClotureConverter;
    }

    public void setTemplateEmailClotureConverter(TemplateEmailClotureConverter templateEmailClotureConverter) {
        this.templateEmailClotureConverter = templateEmailClotureConverter;
    }

    public TemplateEmailRefusConverter getTemplateEmailRefusConverter() {
        return this.templateEmailRefusConverter;
    }

    public void setTemplateEmailRefusConverter(TemplateEmailRefusConverter templateEmailRefusConverter) {
        this.templateEmailRefusConverter = templateEmailRefusConverter;
    }

    public TemplateEmailConfirmationClientConverter getTemplateEmailConfirmationClientConverter() {
        return this.templateEmailConfirmationClientConverter;
    }

    public void setTemplateEmailConfirmationClientConverter(TemplateEmailConfirmationClientConverter templateEmailConfirmationClientConverter) {
        this.templateEmailConfirmationClientConverter = templateEmailConfirmationClientConverter;
    }

    public DepartementConverter getDepartementConverter() {
        return this.departementConverter;
    }

    public void setDepartementConverter(DepartementConverter departementConverter) {
        this.departementConverter = departementConverter;
    }

    public TemplateEmailReportConverter getTemplateEmailReportConverter() {
        return this.templateEmailReportConverter;
    }

    public void setTemplateEmailReportConverter(TemplateEmailReportConverter templateEmailReportConverter) {
        this.templateEmailReportConverter = templateEmailReportConverter;
    }

    public TemplateEmailMauvaisContactConverter getTemplateEmailMauvaisContactConverter() {
        return this.templateEmailMauvaisContactConverter;
    }

    public void setTemplateEmailMauvaisContactConverter(TemplateEmailMauvaisContactConverter templateEmailMauvaisContactConverter) {
        this.templateEmailMauvaisContactConverter = templateEmailMauvaisContactConverter;
    }

    public TechnicienConverter getTechnicienConverter() {
        return this.technicienConverter;
    }

    public void setTechnicienConverter(TechnicienConverter technicienConverter) {
        this.technicienConverter = technicienConverter;
    }

    public TemplateEmailCriConverter getTemplateEmailCriConverter() {
        return this.templateEmailCriConverter;
    }

    public void setTemplateEmailCriConverter(TemplateEmailCriConverter templateEmailCriConverter) {
        this.templateEmailCriConverter = templateEmailCriConverter;
    }

    public boolean isOperator() {
        return this.operator;
    }

    public void setOperator(boolean operator) {
        this.operator = operator;
    }

    public boolean isDepartement() {
        return this.departement;
    }

    public void setDepartement(boolean departement) {
        this.departement = departement;
    }

    public boolean isTechnicien() {
        return this.technicien;
    }

    public void setTechnicien(boolean technicien) {
        this.technicien = technicien;
    }

    public boolean isTemplateEmailPlanification() {
        return this.templateEmailPlanification;
    }

    public void setTemplateEmailPlanification(boolean templateEmailPlanification) {
        this.templateEmailPlanification = templateEmailPlanification;
    }

    public boolean isTemplateEmailReport() {
        return this.templateEmailReport;
    }

    public void setTemplateEmailReport(boolean templateEmailReport) {
        this.templateEmailReport = templateEmailReport;
    }

    public boolean isTemplateEmailReplanification() {
        return this.templateEmailReplanification;
    }

    public void setTemplateEmailReplanification(boolean templateEmailReplanification) {
        this.templateEmailReplanification = templateEmailReplanification;
    }

    public boolean isTemplateEmailRefus() {
        return this.templateEmailRefus;
    }

    public void setTemplateEmailRefus(boolean templateEmailRefus) {
        this.templateEmailRefus = templateEmailRefus;
    }

    public boolean isTemplateEmailMauvaisContact() {
        return this.templateEmailMauvaisContact;
    }

    public void setTemplateEmailMauvaisContact(boolean templateEmailMauvaisContact) {
        this.templateEmailMauvaisContact = templateEmailMauvaisContact;
    }

    public boolean isTemplateEmailConfirmationClient() {
        return this.templateEmailConfirmationClient;
    }

    public void setTemplateEmailConfirmationClient(boolean templateEmailConfirmationClient) {
        this.templateEmailConfirmationClient = templateEmailConfirmationClient;
    }

    public boolean isTemplateEmailCri() {
        return this.templateEmailCri;
    }

    public void setTemplateEmailCri(boolean templateEmailCri) {
        this.templateEmailCri = templateEmailCri;
    }

    public boolean isTemplateEmailFtl() {
        return this.templateEmailFtl;
    }

    public void setTemplateEmailFtl(boolean templateEmailFtl) {
        this.templateEmailFtl = templateEmailFtl;
    }

    public boolean isTemplateEmailClientInjoinable() {
        return this.templateEmailClientInjoinable;
    }

    public void setTemplateEmailClientInjoinable(boolean templateEmailClientInjoinable) {
        this.templateEmailClientInjoinable = templateEmailClientInjoinable;
    }

    public boolean isTemplateEmailClientInjoinableKosc() {
        return this.templateEmailClientInjoinableKosc;
    }

    public void setTemplateEmailClientInjoinableKosc(boolean templateEmailClientInjoinableKosc) {
        this.templateEmailClientInjoinableKosc = templateEmailClientInjoinableKosc;
    }

    public boolean isEtatDemandeKosc() {
        return this.etatDemandeKosc;
    }

    public void setEtatDemandeKosc(boolean etatDemandeKosc) {
        this.etatDemandeKosc = etatDemandeKosc;
    }

    public boolean isTemplateEmailCloture() {
        return this.templateEmailCloture;
    }

    public void setTemplateEmailCloture(boolean templateEmailCloture) {
        this.templateEmailCloture = templateEmailCloture;
    }

    public boolean isTemplateSuivi() {
        return this.templateSuivi;
    }

    public void setTemplateSuivi(boolean templateSuivi) {
        this.templateSuivi = templateSuivi;
    }

    public boolean isCauseKoOk() {
        return this.causeKoOk;
    }

    public void setCauseKoOk(boolean causeKoOk) {
        this.causeKoOk = causeKoOk;
    }

    public boolean isSourceReplanification() {
        return this.sourceReplanification;
    }

    public void setSourceReplanification(boolean sourceReplanification) {
        this.sourceReplanification = sourceReplanification;
    }


}
