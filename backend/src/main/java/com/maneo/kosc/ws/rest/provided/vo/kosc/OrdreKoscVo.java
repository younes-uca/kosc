package com.maneo.kosc.ws.rest.provided.vo.kosc;

import java.util.List;

import com.maneo.kosc.security.bean.User;
import com.maneo.kosc.ws.rest.provided.vo.referentiel.CauseKoOkVo;
import com.maneo.kosc.ws.rest.provided.vo.referentiel.EtatDemandeKoscVo;
import com.maneo.kosc.ws.rest.provided.vo.referentiel.OperatorVo;
import com.maneo.kosc.ws.rest.provided.vo.referentiel.SourceReplanificationVo;
import com.maneo.kosc.ws.rest.provided.vo.technicien.DepartementVo;
import com.maneo.kosc.ws.rest.provided.vo.technicien.TechnicienVo;
import com.maneo.kosc.ws.rest.provided.vo.template.*;

public class OrdreKoscVo {

    private String id;
    private Boolean confort;
    private String reference;
    private String referenceWorkOrder;
    private String codeDecharge;
    private String supplierServiceCode;
    private String dateDebutTraitement;
    private String endCustumorName;
    private String endCustumorSiret;
    private String endCustumorFirstName;
    private String endCustumorLastName;
    private String endCustumorZipcode;
    private String endCustumorStreetName;
    private String endCustumorStreetNumber;
    private String endCustumorCity;
    private String endCustumorBuilding;
    private String endCustumorStairs;
    private String endCustumorFloor;
    private String endCustumorContactFirstName;
    private String endCustumorContactLastName;
    private String endCustumorContactPhone;
    private String endCustumorContactCellPhone;
    private String endCustumorContactEmail;
    private String company;
    private String referenDossier;
    private String submissionDate;
    private String coordonnePboY;
    private String hauteurPbo;
    private String typeMaterielPbo;
    private String typePbo;
    private String conditionSyndics;
    private String typeRacordementPboPto;
    private String autreInfosPboPto;
    private String codeAccesImmeuble;
    private String contacteImmeuble;
    private String pmaAccessible;
    private String infoObtentionCle;
    private String localeIpm;
    private String contactsSyndic;
    private Boolean racordementLong;
    private String oc1;
    private String nomModulePm1;
    private String positionModulePm1;
    private String referenceCableModulePm1;
    private String referenceTubeModulePm1;
    private String informationFibreModulePm1;
    private String referenceCablePbo1;
    private String informationTubePbo1;
    private String informationFibrePbo1;
    private String connecteurPriseNumero1;
    private String connecteurPriseCouleur1;
    private String reserve1;
    private String oc2;
    private String nomModulePm2;
    private String positionModulePm2;
    private String referenceCableModulePm2;
    private String referenceTubeModulePm2;
    private String informationFibreModulePm2;
    private String referenceCablePbo2;
    private String informationTubePbo2;
    private String informationFibrePbo2;
    private String connecteurPriseNumero2;
    private String connecteurPriseCouleur2;
    private String reserve2;
    private String oc3;
    private String nomModulePm3;
    private String positionModulePm3;
    private String referenceCableModulePm3;
    private String referenceTubeModulePm3;
    private String informationFibreModulePm3;
    private String referenceCablePbo3;
    private String informationTubePbo3;
    private String informationFibrePbo3;
    private String connecteurPriseNumero3;
    private String connecteurPriseCouleur3;
    private String reserve3;
    private String oc4;
    private String nomModulePm4;
    private String positionModulePm4;
    private String referenceCableModulePm4;
    private String referenceTubeModulePm4;
    private String informationFibreModulePm4;
    private String referenceCablePbo4;
    private String informationTubePbo4;
    private String informationFibrePbo4;
    private String connecteurPriseNumero4;
    private String connecteurPriseCouleur4;
    private String reserve4;
    private String pboReel;
    private String numeroSerieOnt;
    private String hotline;
    private String mutationPbo;
    private String workOrderType;
    private String product;
    private String productCode;
    private String productLabel;
    private String provider;
    private String providerFileType;
    private String spliter;
    private Boolean existingOtp;
    private String profile;
    private String providerSlId;
    private String referencePrestationPrise;
    private String referencePm;
    private String referencePmTechnique;
    private String localisationPm;
    private String providerProduct;
    private String referencePbo;
    private String localisationPbo;
    private String referencePrise;
    private String datePremierAppel;
    private String dateDeuxiemeAppel;
    private String dateTroisiemeAppel;
    private String datePriseRdv;
    private Boolean erdv;
    private String dateRdv;
    private String dateOuverture;
    private String commentaireClient;
    private String commentaireKosc;
    private String objetPlanification;
    private String corpsPlanification;
    private Boolean envoyePlanification;
    private String dateEnvoiPlanification;
    private String fromPlanification;
    private String toPlanification;
    private String dateAppelReplanification;

    private String type;


    private String objetReplanification;
    private String corpsReplanification;
    private String fromReplanification;
    private String toReplanification;
    private Boolean envoyeReplanification;
    private String dateEnvoiReplanification;
    private String objetRefus;
    private String corpsRefus;
    private String fromRefus;
    private String toRefus;
    private Boolean envoyeRefus;
    private String dateEnvoiRefus;
    private String objetMauvaisContact;
    private String corpsMauvaisContact;
    private String fromMauvaisContact;
    private String toMauvaisContact;
    private Boolean envoyeMauvaisContact;
    private String dateEnvoiMauvaisContact;
    private String objetConfirmationClient;
    private String corpsConfirmationClient;
    private String fromConfirmationClient;
    private String toConfirmationClient;
    private Boolean envoyeConfirmationClient;
    private String dateEnvoiConfirmationClient;
    private String objetCri;
    private String corpsCri;
    private String fromCri;
    private String toCri;
    private Boolean envoyeCri;
    private String dateEnvoiCri;
    private String objetFtl;
    private String corpsFtl;
    private String fromFtl;
    private String toFtl;
    private Boolean envoyeFtl;
    private String dateEnvoiFtl;
    private String dateInterventionTechniqueDebut;
    private String dateInterventionTechniqueFin;
    private String objetClientInjoinable;
    private String corpsClientInjoinable;
    private String fromClientInjoinable;
    private String toClientInjoinable;
    private Boolean envoyeClientInjoinable;
    private String dateEnvoiClientInjoinable;
    private String objetAutre;
    private String corpsAutre;
    private String fromAutre;
    private String toAutre;
    private Boolean envoyeAutre;
    private String dateEnvoiAutre;
    private String objetClientInjoinableKosc;
    private String corpsClientInjoinableKosc;
    private String fromClientInjoinableKosc;
    private String toClientInjoinableKosc;
    private Boolean envoyeClientInjoinableKosc;
    private String dateEnvoiClientInjoinableKosc;
    private String commentaireTechnicien;
    private String commantaireCloture;
    private String objetCloture;
    private String corpsCloture;
    private Boolean envoyeCloture;
    private String dateEnvoiCloture;
    private String emailCloturePieceJoints;
    private String objetSuivi;
    private String corpsSuivi;
    private Boolean envoyeSuivi;
    private String dateEnvoiSuivi;
    private String dateErdv;
    private String referenceCommandePriseInterneOC;


    private String dateDebutTraitementMax;
    private String dateDebutTraitementMin;
    private String submissionDateMax;
    private String submissionDateMin;
    private String datePremierAppelMax;
    private String datePremierAppelMin;
    private String dateDeuxiemeAppelMax;
    private String dateDeuxiemeAppelMin;
    private String dateTroisiemeAppelMax;
    private String dateTroisiemeAppelMin;
    private String datePriseRdvMax;
    private String datePriseRdvMin;
    private String dateRdvMax;
    private String dateRdvMin;
    private String dateOuvertureMax;
    private String dateOuvertureMin;
    private String dateEnvoiPlanificationMax;
    private String dateEnvoiPlanificationMin;
    private String dateAppelReplanificationMax;
    private String dateAppelReplanificationMin;
    private String dateEnvoiReportMax;
    private String dateEnvoiReportMin;
    private String dateEnvoiReplanificationMax;
    private String dateEnvoiReplanificationMin;
    private String dateEnvoiRefusMax;
    private String dateEnvoiRefusMin;
    private String dateEnvoiMauvaisContactMax;
    private String dateEnvoiMauvaisContactMin;
    private String dateEnvoiConfirmationClientMax;
    private String dateEnvoiConfirmationClientMin;
    private String dateEnvoiCriMax;
    private String dateEnvoiCriMin;
    private String dateEnvoiFtlMax;
    private String dateEnvoiFtlMin;
    private String dateInterventionTechniqueDebutMax;
    private String dateInterventionTechniqueDebutMin;
    private String dateInterventionTechniqueFinMax;
    private String dateInterventionTechniqueFinMin;
    private String dateEnvoiClientInjoinableMax;
    private String dateEnvoiClientInjoinableMin;
    private String dateEnvoiAutreMax;
    private String dateEnvoiAutreMin;
    private String dateEnvoiClientInjoinableKoscMax;
    private String dateEnvoiClientInjoinableKoscMin;
    private String dateEnvoiClotureMax;
    private String dateEnvoiClotureMin;
    private String dateEnvoiSuiviMax;
    private String dateEnvoiSuiviMin;
    private String delaiPriseRdvParHeure;


    private String numeroDernierAppel;
    private String dateDernierAppel;
    private String nbrHeureDateSubmissionAndNow;
    private String nbrHeureDateSubmissionAndNowMin;
    private String nbrHeureDateSubmissionAndNowMax;
    private String montantDevis;




    private String objetReportDemandeManeoClientInjoignable;

    private String corpsReportDemandeManeoClientInjoignable;
    private String fromReportDemandeManeoClientInjoignable;

    private  String toReportDemandeManeoClientInjoignable;

    private Boolean envoyeReportDemandeManeoClientInjoignable;

    private String dateEnvoiReportDemandeManeoClientInjoignable;



    private String objetReportDemandeManeoClientJoignableAccepte;

    private  String corpsReportDemandeManeoClientJoignableAccepte;
   
    private String fromReportDemandeManeoClientJoignableAccepte;

    private String toReportDemandeManeoClientJoignableAccepte;


    private Boolean envoyeReportDemandeManeoClientJoignableAccepte;

    private String dateEnvoiReportDemandeManeoClientJoignableAccepte;




    private String objetReportDemandeManeoClientJoignableRefus;
 
    private String corpsReportDemandeManeoClientJoignableRefus;

    private String fromReportDemandeManeoClientJoignableRefus;

    private  String toReportDemandeManeoClientJoignableRefus;
  

    private Boolean envoyeReportDemandeManeoClientJoignableRefus;
  
    private  String dateEnvoiReportDemandeManeoClientJoignableRefus;




    private String objetReportDemandeClientClientInjoignable;
 
    private String corpsReportDemandeClientClientInjoignable;

    private String fromReportDemandeClientClientInjoignable;
 
    private String toReportDemandeClientClientInjoignable;
 

    private Boolean envoyeReportDemandeClientClientInjoignable;

    private String dateEnvoiReportDemandeClientClientInjoignable;



  
    private String objetReportDemandeClientClientJoignable;
  
    private String corpsReportDemandeClientClientJoignable;
  
    private String fromReportDemandeClientClientJoignable;

    private String toReportDemandeClientClientJoignable;
    private Boolean envoyeReportDemandeClientClientJoignable ;
    private String dateEnvoiReportDemandeClientClientJoignable;
    private String dateCri;
    private String dateCriMax;
    private String dateCriMin;

    private String supplier;


    private String customerOperator;


    private String slid;

    private String koscContactFirstName;

    private String koscContactLastName;



    private String koscContactPhone;

    private String koscContactEmail1;

    private String koscContactEmail2;

    private String koscContactEmail3;

    private String koscSplitterPosition;

    private String koscComment;


    private String otpRef;

    private String operatorComment;
    
    

    private OperatorVo operatorVo;
    private DepartementVo departementVo;
    private TechnicienVo technicienVo;
    private TemplateEmailPlanificationVo templateEmailPlanificationVo;

    private TemplateEmailReplanificationVo templateEmailReplanificationVo;
    private TemplateEmailRefusVo templateEmailRefusVo;
    private TemplateEmailMauvaisContactVo templateEmailMauvaisContactVo;
    private TemplateEmailConfirmationClientVo templateEmailConfirmationClientVo;
    private TemplateEmailCriVo templateEmailCriVo;
    private TemplateEmailFtlVo templateEmailFtlVo;
    private TemplateEmailClientInjoinableVo templateEmailClientInjoinableVo;
    private TemplateEmailClientInjoinableKoscVo templateEmailClientInjoinableKoscVo;
    private EtatDemandeKoscVo etatDemandeKoscVo;
    private List<EtatDemandeKoscVo> etatDemandeKoscVos;
    private TemplateEmailClotureVo templateEmailClotureVo;
    private TemplateSuiviVo templateSuiviVo;
    private CauseKoOkVo causeKoOkVo;
    private SourceReplanificationVo sourceReplanificationVo;

    private User userPlanification;
    private User userReplanification;
    private User userRefus;
    private User userMauvaisContact;
    private User userConfirmationClient;
    private User userCri;
    private User userFtl;
    private User userClientInjoinable;
    private User userAutre;
    private User userClientInjoinableKosc;
    private User userReportDemandeManeoClientInjoignable;
    private User userReportDemandeManeoClientJoignableAccepte;
    private User userReportDemandeManeoClientJoignableRefus;
    private User userReportDemandeClientClientInjoignable;
    private User userReportDemandeClientClientJoignable;
    private User userImportation;

    private String result;

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getNumeroDernierAppel() {
        return numeroDernierAppel;
    }

    public void setNumeroDernierAppel(String numeroDernierAppel) {
        this.numeroDernierAppel = numeroDernierAppel;
    }

    public String getDateDernierAppel() {
        return dateDernierAppel;
    }

    public void setDateDernierAppel(String dateDernierAppel) {
        this.dateDernierAppel = dateDernierAppel;
    }
    public OrdreKoscVo() {
        super();
    }

    public Boolean getConfort() {
        return confort;
    }

    public List<EtatDemandeKoscVo> getEtatDemandeKoscVos() {
        return etatDemandeKoscVos;
    }

    public void setEtatDemandeKoscVos(List<EtatDemandeKoscVo> etatDemandeKoscVos) {
        this.etatDemandeKoscVos = etatDemandeKoscVos;
    }

    public void setConfort(Boolean confort) {
        this.confort = confort;
    }

    public Boolean getErdv() {
        return erdv;
    }

    public void setErdv(Boolean erdv) {
        this.erdv = erdv;
    }

    public String getDelaiPriseRdvParHeure() {
        return delaiPriseRdvParHeure;
    }

    public void setDelaiPriseRdvParHeure(String delaiPriseRdvParHeure) {
        this.delaiPriseRdvParHeure = delaiPriseRdvParHeure;
    }

    public String getDateCriMax() {
        return dateCriMax;
    }

    public void setDateCriMax(String dateCriMax) {
        this.dateCriMax = dateCriMax;
    }

    public String getDateCriMin() {
        return dateCriMin;
    }

    public void setDateCriMin(String dateCriMin) {
        this.dateCriMin = dateCriMin;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getReference() {
        return this.reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public String getReferenceWorkOrder() {
        return this.referenceWorkOrder;
    }

    public void setReferenceWorkOrder(String referenceWorkOrder) {
        this.referenceWorkOrder = referenceWorkOrder;
    }

    public String getCodeDecharge() {
        return this.codeDecharge;
    }

    public void setCodeDecharge(String codeDecharge) {
        this.codeDecharge = codeDecharge;
    }

    public String getSupplierServiceCode() {
        return this.supplierServiceCode;
    }

    public void setSupplierServiceCode(String supplierServiceCode) {
        this.supplierServiceCode = supplierServiceCode;
    }

    public String getDateDebutTraitement() {
        return this.dateDebutTraitement;
    }

    public void setDateDebutTraitement(String dateDebutTraitement) {
        this.dateDebutTraitement = dateDebutTraitement;
    }

    public String getEndCustumorName() {
        return this.endCustumorName;
    }

    public void setEndCustumorName(String endCustumorName) {
        this.endCustumorName = endCustumorName;
    }

    public String getEndCustumorSiret() {
        return this.endCustumorSiret;
    }

    public void setEndCustumorSiret(String endCustumorSiret) {
        this.endCustumorSiret = endCustumorSiret;
    }

    public String getEndCustumorFirstName() {
        return this.endCustumorFirstName;
    }

    public void setEndCustumorFirstName(String endCustumorFirstName) {
        this.endCustumorFirstName = endCustumorFirstName;
    }

    public String getEndCustumorLastName() {
        return this.endCustumorLastName;
    }

    public void setEndCustumorLastName(String endCustumorLastName) {
        this.endCustumorLastName = endCustumorLastName;
    }

    public String getEndCustumorZipcode() {
        return this.endCustumorZipcode;
    }

    public void setEndCustumorZipcode(String endCustumorZipcode) {
        this.endCustumorZipcode = endCustumorZipcode;
    }

    public String getEndCustumorStreetName() {
        return this.endCustumorStreetName;
    }

    public void setEndCustumorStreetName(String endCustumorStreetName) {
        this.endCustumorStreetName = endCustumorStreetName;
    }

    public String getEndCustumorStreetNumber() {
        return this.endCustumorStreetNumber;
    }

    public void setEndCustumorStreetNumber(String endCustumorStreetNumber) {
        this.endCustumorStreetNumber = endCustumorStreetNumber;
    }

    public String getEndCustumorCity() {
        return this.endCustumorCity;
    }

    public void setEndCustumorCity(String endCustumorCity) {
        this.endCustumorCity = endCustumorCity;
    }

    public String getEndCustumorBuilding() {
        return this.endCustumorBuilding;
    }

    public void setEndCustumorBuilding(String endCustumorBuilding) {
        this.endCustumorBuilding = endCustumorBuilding;
    }

    public String getEndCustumorStairs() {
        return this.endCustumorStairs;
    }

    public void setEndCustumorStairs(String endCustumorStairs) {
        this.endCustumorStairs = endCustumorStairs;
    }

    public String getEndCustumorFloor() {
        return this.endCustumorFloor;
    }

    public void setEndCustumorFloor(String endCustumorFloor) {
        this.endCustumorFloor = endCustumorFloor;
    }

    public String getEndCustumorContactFirstName() {
        return this.endCustumorContactFirstName;
    }

    public void setEndCustumorContactFirstName(String endCustumorContactFirstName) {
        this.endCustumorContactFirstName = endCustumorContactFirstName;
    }

    public String getEndCustumorContactLastName() {
        return this.endCustumorContactLastName;
    }

    public void setEndCustumorContactLastName(String endCustumorContactLastName) {
        this.endCustumorContactLastName = endCustumorContactLastName;
    }

    public String getEndCustumorContactPhone() {
        return this.endCustumorContactPhone;
    }

    public void setEndCustumorContactPhone(String endCustumorContactPhone) {
        this.endCustumorContactPhone = endCustumorContactPhone;
    }

    public String getEndCustumorContactCellPhone() {
        return this.endCustumorContactCellPhone;
    }

    public void setEndCustumorContactCellPhone(String endCustumorContactCellPhone) {
        this.endCustumorContactCellPhone = endCustumorContactCellPhone;
    }

    public String getEndCustumorContactEmail() {
        return this.endCustumorContactEmail;
    }

    public void setEndCustumorContactEmail(String endCustumorContactEmail) {
        this.endCustumorContactEmail = endCustumorContactEmail;
    }

    public String getCompany() {
        return this.company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getReferenDossier() {
        return this.referenDossier;
    }

    public void setReferenDossier(String referenDossier) {
        this.referenDossier = referenDossier;
    }

    public String getSubmissionDate() {
        return this.submissionDate;
    }

    public void setSubmissionDate(String submissionDate) {
        this.submissionDate = submissionDate;
    }

    public String getCoordonnePboY() {
        return this.coordonnePboY;
    }

    public void setCoordonnePboY(String coordonnePboY) {
        this.coordonnePboY = coordonnePboY;
    }

    public String getHauteurPbo() {
        return this.hauteurPbo;
    }

    public void setHauteurPbo(String hauteurPbo) {
        this.hauteurPbo = hauteurPbo;
    }

    public String getTypeMaterielPbo() {
        return this.typeMaterielPbo;
    }

    public void setTypeMaterielPbo(String typeMaterielPbo) {
        this.typeMaterielPbo = typeMaterielPbo;
    }

    public String getTypePbo() {
        return this.typePbo;
    }

    public void setTypePbo(String typePbo) {
        this.typePbo = typePbo;
    }

    public String getConditionSyndics() {
        return this.conditionSyndics;
    }

    public void setConditionSyndics(String conditionSyndics) {
        this.conditionSyndics = conditionSyndics;
    }

    public String getTypeRacordementPboPto() {
        return this.typeRacordementPboPto;
    }

    public void setTypeRacordementPboPto(String typeRacordementPboPto) {
        this.typeRacordementPboPto = typeRacordementPboPto;
    }

    public String getAutreInfosPboPto() {
        return this.autreInfosPboPto;
    }

    public void setAutreInfosPboPto(String autreInfosPboPto) {
        this.autreInfosPboPto = autreInfosPboPto;
    }

    public String getCodeAccesImmeuble() {
        return this.codeAccesImmeuble;
    }

    public void setCodeAccesImmeuble(String codeAccesImmeuble) {
        this.codeAccesImmeuble = codeAccesImmeuble;
    }

    public String getContacteImmeuble() {
        return this.contacteImmeuble;
    }

    public void setContacteImmeuble(String contacteImmeuble) {
        this.contacteImmeuble = contacteImmeuble;
    }

    public String getPmaAccessible() {
        return this.pmaAccessible;
    }

    public void setPmaAccessible(String pmaAccessible) {
        this.pmaAccessible = pmaAccessible;
    }

    public String getInfoObtentionCle() {
        return this.infoObtentionCle;
    }

    public void setInfoObtentionCle(String infoObtentionCle) {
        this.infoObtentionCle = infoObtentionCle;
    }

    public String getLocaleIpm() {
        return this.localeIpm;
    }

    public void setLocaleIpm(String localeIpm) {
        this.localeIpm = localeIpm;
    }

    public String getContactsSyndic() {
        return this.contactsSyndic;
    }

    public void setContactsSyndic(String contactsSyndic) {
        this.contactsSyndic = contactsSyndic;
    }

    public Boolean getRacordementLong() {
        return this.racordementLong;
    }

    public void setRacordementLong(Boolean racordementLong) {
        this.racordementLong = racordementLong;
    }

    public String getOc1() {
        return this.oc1;
    }

    public void setOc1(String oc1) {
        this.oc1 = oc1;
    }

    public String getNomModulePm1() {
        return this.nomModulePm1;
    }

    public void setNomModulePm1(String nomModulePm1) {
        this.nomModulePm1 = nomModulePm1;
    }

    public String getPositionModulePm1() {
        return this.positionModulePm1;
    }

    public void setPositionModulePm1(String positionModulePm1) {
        this.positionModulePm1 = positionModulePm1;
    }

    public String getReferenceCableModulePm1() {
        return this.referenceCableModulePm1;
    }

    public void setReferenceCableModulePm1(String referenceCableModulePm1) {
        this.referenceCableModulePm1 = referenceCableModulePm1;
    }

    public String getReferenceTubeModulePm1() {
        return this.referenceTubeModulePm1;
    }

    public void setReferenceTubeModulePm1(String referenceTubeModulePm1) {
        this.referenceTubeModulePm1 = referenceTubeModulePm1;
    }

    public String getInformationFibreModulePm1() {
        return this.informationFibreModulePm1;
    }

    public void setInformationFibreModulePm1(String informationFibreModulePm1) {
        this.informationFibreModulePm1 = informationFibreModulePm1;
    }

    public String getReferenceCablePbo1() {
        return this.referenceCablePbo1;
    }

    public void setReferenceCablePbo1(String referenceCablePbo1) {
        this.referenceCablePbo1 = referenceCablePbo1;
    }

    public String getInformationTubePbo1() {
        return this.informationTubePbo1;
    }

    public void setInformationTubePbo1(String informationTubePbo1) {
        this.informationTubePbo1 = informationTubePbo1;
    }

    public String getInformationFibrePbo1() {
        return this.informationFibrePbo1;
    }

    public void setInformationFibrePbo1(String informationFibrePbo1) {
        this.informationFibrePbo1 = informationFibrePbo1;
    }

    public String getConnecteurPriseNumero1() {
        return this.connecteurPriseNumero1;
    }

    public void setConnecteurPriseNumero1(String connecteurPriseNumero1) {
        this.connecteurPriseNumero1 = connecteurPriseNumero1;
    }

    public String getConnecteurPriseCouleur1() {
        return this.connecteurPriseCouleur1;
    }

    public void setConnecteurPriseCouleur1(String connecteurPriseCouleur1) {
        this.connecteurPriseCouleur1 = connecteurPriseCouleur1;
    }

    public String getReserve1() {
        return this.reserve1;
    }

    public void setReserve1(String reserve1) {
        this.reserve1 = reserve1;
    }

    public String getOc2() {
        return this.oc2;
    }

    public void setOc2(String oc2) {
        this.oc2 = oc2;
    }

    public String getNomModulePm2() {
        return this.nomModulePm2;
    }

    public void setNomModulePm2(String nomModulePm2) {
        this.nomModulePm2 = nomModulePm2;
    }

    public String getPositionModulePm2() {
        return this.positionModulePm2;
    }

    public void setPositionModulePm2(String positionModulePm2) {
        this.positionModulePm2 = positionModulePm2;
    }

    public String getReferenceCableModulePm2() {
        return this.referenceCableModulePm2;
    }

    public void setReferenceCableModulePm2(String referenceCableModulePm2) {
        this.referenceCableModulePm2 = referenceCableModulePm2;
    }

    public String getReferenceTubeModulePm2() {
        return this.referenceTubeModulePm2;
    }

    public void setReferenceTubeModulePm2(String referenceTubeModulePm2) {
        this.referenceTubeModulePm2 = referenceTubeModulePm2;
    }

    public String getInformationFibreModulePm2() {
        return this.informationFibreModulePm2;
    }

    public void setInformationFibreModulePm2(String informationFibreModulePm2) {
        this.informationFibreModulePm2 = informationFibreModulePm2;
    }

    public String getReferenceCablePbo2() {
        return this.referenceCablePbo2;
    }

    public void setReferenceCablePbo2(String referenceCablePbo2) {
        this.referenceCablePbo2 = referenceCablePbo2;
    }

    public String getInformationTubePbo2() {
        return this.informationTubePbo2;
    }

    public void setInformationTubePbo2(String informationTubePbo2) {
        this.informationTubePbo2 = informationTubePbo2;
    }

    public String getInformationFibrePbo2() {
        return this.informationFibrePbo2;
    }

    public void setInformationFibrePbo2(String informationFibrePbo2) {
        this.informationFibrePbo2 = informationFibrePbo2;
    }

    public String getConnecteurPriseNumero2() {
        return this.connecteurPriseNumero2;
    }

    public void setConnecteurPriseNumero2(String connecteurPriseNumero2) {
        this.connecteurPriseNumero2 = connecteurPriseNumero2;
    }

    public String getConnecteurPriseCouleur2() {
        return this.connecteurPriseCouleur2;
    }

    public void setConnecteurPriseCouleur2(String connecteurPriseCouleur2) {
        this.connecteurPriseCouleur2 = connecteurPriseCouleur2;
    }

    public String getReserve2() {
        return this.reserve2;
    }

    public void setReserve2(String reserve2) {
        this.reserve2 = reserve2;
    }

    public String getOc3() {
        return this.oc3;
    }

    public void setOc3(String oc3) {
        this.oc3 = oc3;
    }

    public String getNomModulePm3() {
        return this.nomModulePm3;
    }

    public void setNomModulePm3(String nomModulePm3) {
        this.nomModulePm3 = nomModulePm3;
    }

    public String getPositionModulePm3() {
        return this.positionModulePm3;
    }

    public void setPositionModulePm3(String positionModulePm3) {
        this.positionModulePm3 = positionModulePm3;
    }

    public String getReferenceCableModulePm3() {
        return this.referenceCableModulePm3;
    }

    public void setReferenceCableModulePm3(String referenceCableModulePm3) {
        this.referenceCableModulePm3 = referenceCableModulePm3;
    }

    public String getReferenceTubeModulePm3() {
        return this.referenceTubeModulePm3;
    }

    public void setReferenceTubeModulePm3(String referenceTubeModulePm3) {
        this.referenceTubeModulePm3 = referenceTubeModulePm3;
    }

    public String getInformationFibreModulePm3() {
        return this.informationFibreModulePm3;
    }

    public void setInformationFibreModulePm3(String informationFibreModulePm3) {
        this.informationFibreModulePm3 = informationFibreModulePm3;
    }

    public String getReferenceCablePbo3() {
        return this.referenceCablePbo3;
    }

    public void setReferenceCablePbo3(String referenceCablePbo3) {
        this.referenceCablePbo3 = referenceCablePbo3;
    }

    public String getInformationTubePbo3() {
        return this.informationTubePbo3;
    }

    public void setInformationTubePbo3(String informationTubePbo3) {
        this.informationTubePbo3 = informationTubePbo3;
    }

    public String getInformationFibrePbo3() {
        return this.informationFibrePbo3;
    }

    public void setInformationFibrePbo3(String informationFibrePbo3) {
        this.informationFibrePbo3 = informationFibrePbo3;
    }

    public String getConnecteurPriseNumero3() {
        return this.connecteurPriseNumero3;
    }

    public void setConnecteurPriseNumero3(String connecteurPriseNumero3) {
        this.connecteurPriseNumero3 = connecteurPriseNumero3;
    }

    public String getConnecteurPriseCouleur3() {
        return this.connecteurPriseCouleur3;
    }

    public void setConnecteurPriseCouleur3(String connecteurPriseCouleur3) {
        this.connecteurPriseCouleur3 = connecteurPriseCouleur3;
    }

    public String getReserve3() {
        return this.reserve3;
    }

    public void setReserve3(String reserve3) {
        this.reserve3 = reserve3;
    }

    public String getOc4() {
        return this.oc4;
    }

    public void setOc4(String oc4) {
        this.oc4 = oc4;
    }

    public String getNomModulePm4() {
        return this.nomModulePm4;
    }

    public void setNomModulePm4(String nomModulePm4) {
        this.nomModulePm4 = nomModulePm4;
    }

    public String getPositionModulePm4() {
        return this.positionModulePm4;
    }

    public void setPositionModulePm4(String positionModulePm4) {
        this.positionModulePm4 = positionModulePm4;
    }

    public String getReferenceCableModulePm4() {
        return this.referenceCableModulePm4;
    }

    public void setReferenceCableModulePm4(String referenceCableModulePm4) {
        this.referenceCableModulePm4 = referenceCableModulePm4;
    }

    public String getReferenceTubeModulePm4() {
        return this.referenceTubeModulePm4;
    }

    public void setReferenceTubeModulePm4(String referenceTubeModulePm4) {
        this.referenceTubeModulePm4 = referenceTubeModulePm4;
    }

    public String getInformationFibreModulePm4() {
        return this.informationFibreModulePm4;
    }

    public void setInformationFibreModulePm4(String informationFibreModulePm4) {
        this.informationFibreModulePm4 = informationFibreModulePm4;
    }

    public String getReferenceCablePbo4() {
        return this.referenceCablePbo4;
    }

    public void setReferenceCablePbo4(String referenceCablePbo4) {
        this.referenceCablePbo4 = referenceCablePbo4;
    }

    public String getInformationTubePbo4() {
        return this.informationTubePbo4;
    }

    public void setInformationTubePbo4(String informationTubePbo4) {
        this.informationTubePbo4 = informationTubePbo4;
    }

    public String getInformationFibrePbo4() {
        return this.informationFibrePbo4;
    }

    public void setInformationFibrePbo4(String informationFibrePbo4) {
        this.informationFibrePbo4 = informationFibrePbo4;
    }

    public String getConnecteurPriseNumero4() {
        return this.connecteurPriseNumero4;
    }

    public void setConnecteurPriseNumero4(String connecteurPriseNumero4) {
        this.connecteurPriseNumero4 = connecteurPriseNumero4;
    }

    public String getConnecteurPriseCouleur4() {
        return this.connecteurPriseCouleur4;
    }

    public void setConnecteurPriseCouleur4(String connecteurPriseCouleur4) {
        this.connecteurPriseCouleur4 = connecteurPriseCouleur4;
    }

    public String getReserve4() {
        return this.reserve4;
    }

    public void setReserve4(String reserve4) {
        this.reserve4 = reserve4;
    }

    public String getPboReel() {
        return this.pboReel;
    }

    public void setPboReel(String pboReel) {
        this.pboReel = pboReel;
    }

    public String getNumeroSerieOnt() {
        return this.numeroSerieOnt;
    }

    public void setNumeroSerieOnt(String numeroSerieOnt) {
        this.numeroSerieOnt = numeroSerieOnt;
    }

    public String getHotline() {
        return this.hotline;
    }

    public void setHotline(String hotline) {
        this.hotline = hotline;
    }

    public String getMutationPbo() {
        return this.mutationPbo;
    }

    public void setMutationPbo(String mutationPbo) {
        this.mutationPbo = mutationPbo;
    }

    public String getWorkOrderType() {
        return this.workOrderType;
    }

    public void setWorkOrderType(String workOrderType) {
        this.workOrderType = workOrderType;
    }

    public String getProduct() {
        return this.product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getProvider() {
        return this.provider;
    }

    public void setProvider(String provider) {
        this.provider = provider;
    }

    public String getProviderFileType() {
        return this.providerFileType;
    }

    public void setProviderFileType(String providerFileType) {
        this.providerFileType = providerFileType;
    }

    public String getSpliter() {
        return this.spliter;
    }

    public void setSpliter(String spliter) {
        this.spliter = spliter;
    }

    public Boolean getExistingOtp() {
        return this.existingOtp;
    }

    public void setExistingOtp(Boolean existingOtp) {
        this.existingOtp = existingOtp;
    }

    public String getProfile() {
        return this.profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public String getProviderSlId() {
        return this.providerSlId;
    }

    public void setProviderSlId(String providerSlId) {
        this.providerSlId = providerSlId;
    }

    public String getReferencePrestationPrise() {
        return this.referencePrestationPrise;
    }

    public void setReferencePrestationPrise(String referencePrestationPrise) {
        this.referencePrestationPrise = referencePrestationPrise;
    }

    public String getReferencePm() {
        return this.referencePm;
    }

    public void setReferencePm(String referencePm) {
        this.referencePm = referencePm;
    }

    public String getReferencePmTechnique() {
        return this.referencePmTechnique;
    }

    public void setReferencePmTechnique(String referencePmTechnique) {
        this.referencePmTechnique = referencePmTechnique;
    }

    public String getLocalisationPm() {
        return this.localisationPm;
    }

    public void setLocalisationPm(String localisationPm) {
        this.localisationPm = localisationPm;
    }

    public String getProviderProduct() {
        return this.providerProduct;
    }

    public void setProviderProduct(String providerProduct) {
        this.providerProduct = providerProduct;
    }

    public String getReferencePbo() {
        return this.referencePbo;
    }

    public void setReferencePbo(String referencePbo) {
        this.referencePbo = referencePbo;
    }

    public String getLocalisationPbo() {
        return this.localisationPbo;
    }

    public void setLocalisationPbo(String localisationPbo) {
        this.localisationPbo = localisationPbo;
    }

    public String getReferencePrise() {
        return this.referencePrise;
    }

    public void setReferencePrise(String referencePrise) {
        this.referencePrise = referencePrise;
    }

    public String getDatePremierAppel() {
        return this.datePremierAppel;
    }

    public void setDatePremierAppel(String datePremierAppel) {
        this.datePremierAppel = datePremierAppel;
    }

    public String getDateDeuxiemeAppel() {
        return this.dateDeuxiemeAppel;
    }

    public void setDateDeuxiemeAppel(String dateDeuxiemeAppel) {
        this.dateDeuxiemeAppel = dateDeuxiemeAppel;
    }

    public String getDateTroisiemeAppel() {
        return this.dateTroisiemeAppel;
    }

    public void setDateTroisiemeAppel(String dateTroisiemeAppel) {
        this.dateTroisiemeAppel = dateTroisiemeAppel;
    }

    public String getDatePriseRdv() {
        return this.datePriseRdv;
    }

    public void setDatePriseRdv(String datePriseRdv) {
        this.datePriseRdv = datePriseRdv;
    }

    public String getDateRdv() {
        return this.dateRdv;
    }

    public void setDateRdv(String dateRdv) {
        this.dateRdv = dateRdv;
    }

    public String getDateOuverture() {
        return this.dateOuverture;
    }

    public void setDateOuverture(String dateOuverture) {
        this.dateOuverture = dateOuverture;
    }

    public String getCommentaireClient() {
        return this.commentaireClient;
    }

    public void setCommentaireClient(String commentaireClient) {
        this.commentaireClient = commentaireClient;
    }

    public String getCommentaireKosc() {
        return this.commentaireKosc;
    }

    public void setCommentaireKosc(String commentaireKosc) {
        this.commentaireKosc = commentaireKosc;
    }

    public String getObjetPlanification() {
        return this.objetPlanification;
    }

    public void setObjetPlanification(String objetPlanification) {
        this.objetPlanification = objetPlanification;
    }

    public String getCorpsPlanification() {
        return this.corpsPlanification;
    }

    public void setCorpsPlanification(String corpsPlanification) {
        this.corpsPlanification = corpsPlanification;
    }

    public Boolean getEnvoyePlanification() {
        return this.envoyePlanification;
    }

    public void setEnvoyePlanification(Boolean envoyePlanification) {
        this.envoyePlanification = envoyePlanification;
    }

    public String getDateEnvoiPlanification() {
        return this.dateEnvoiPlanification;
    }

    public void setDateEnvoiPlanification(String dateEnvoiPlanification) {
        this.dateEnvoiPlanification = dateEnvoiPlanification;
    }

    public String getFromPlanification() {
        return this.fromPlanification;
    }

    public void setFromPlanification(String fromPlanification) {
        this.fromPlanification = fromPlanification;
    }

    public String getToPlanification() {
        return this.toPlanification;
    }

    public void setToPlanification(String toPlanification) {
        this.toPlanification = toPlanification;
    }

    public String getDateAppelReplanification() {
        return this.dateAppelReplanification;
    }

    public void setDateAppelReplanification(String dateAppelReplanification) {
        this.dateAppelReplanification = dateAppelReplanification;
    }


    public String getObjetReplanification() {
        return this.objetReplanification;
    }

    public void setObjetReplanification(String objetReplanification) {
        this.objetReplanification = objetReplanification;
    }

    public String getCorpsReplanification() {
        return this.corpsReplanification;
    }

    public void setCorpsReplanification(String corpsReplanification) {
        this.corpsReplanification = corpsReplanification;
    }

    public String getFromReplanification() {
        return this.fromReplanification;
    }

    public void setFromReplanification(String fromReplanification) {
        this.fromReplanification = fromReplanification;
    }

    public String getToReplanification() {
        return this.toReplanification;
    }

    public void setToReplanification(String toReplanification) {
        this.toReplanification = toReplanification;
    }

    public Boolean getEnvoyeReplanification() {
        return this.envoyeReplanification;
    }

    public void setEnvoyeReplanification(Boolean envoyeReplanification) {
        this.envoyeReplanification = envoyeReplanification;
    }

    public String getDateEnvoiReplanification() {
        return this.dateEnvoiReplanification;
    }

    public void setDateEnvoiReplanification(String dateEnvoiReplanification) {
        this.dateEnvoiReplanification = dateEnvoiReplanification;
    }

    public String getObjetRefus() {
        return this.objetRefus;
    }

    public void setObjetRefus(String objetRefus) {
        this.objetRefus = objetRefus;
    }

    public String getCorpsRefus() {
        return this.corpsRefus;
    }

    public void setCorpsRefus(String corpsRefus) {
        this.corpsRefus = corpsRefus;
    }

    public String getFromRefus() {
        return this.fromRefus;
    }

    public void setFromRefus(String fromRefus) {
        this.fromRefus = fromRefus;
    }

    public String getToRefus() {
        return this.toRefus;
    }

    public void setToRefus(String toRefus) {
        this.toRefus = toRefus;
    }

    public Boolean getEnvoyeRefus() {
        return this.envoyeRefus;
    }

    public void setEnvoyeRefus(Boolean envoyeRefus) {
        this.envoyeRefus = envoyeRefus;
    }

    public String getDateEnvoiRefus() {
        return this.dateEnvoiRefus;
    }

    public void setDateEnvoiRefus(String dateEnvoiRefus) {
        this.dateEnvoiRefus = dateEnvoiRefus;
    }

    public String getObjetMauvaisContact() {
        return this.objetMauvaisContact;
    }

    public void setObjetMauvaisContact(String objetMauvaisContact) {
        this.objetMauvaisContact = objetMauvaisContact;
    }

    public String getCorpsMauvaisContact() {
        return this.corpsMauvaisContact;
    }

    public void setCorpsMauvaisContact(String corpsMauvaisContact) {
        this.corpsMauvaisContact = corpsMauvaisContact;
    }

    public String getFromMauvaisContact() {
        return this.fromMauvaisContact;
    }

    public void setFromMauvaisContact(String fromMauvaisContact) {
        this.fromMauvaisContact = fromMauvaisContact;
    }

    public String getToMauvaisContact() {
        return this.toMauvaisContact;
    }

    public void setToMauvaisContact(String toMauvaisContact) {
        this.toMauvaisContact = toMauvaisContact;
    }

    public Boolean getEnvoyeMauvaisContact() {
        return this.envoyeMauvaisContact;
    }

    public void setEnvoyeMauvaisContact(Boolean envoyeMauvaisContact) {
        this.envoyeMauvaisContact = envoyeMauvaisContact;
    }

    public String getDateEnvoiMauvaisContact() {
        return this.dateEnvoiMauvaisContact;
    }

    public void setDateEnvoiMauvaisContact(String dateEnvoiMauvaisContact) {
        this.dateEnvoiMauvaisContact = dateEnvoiMauvaisContact;
    }

    public String getObjetConfirmationClient() {
        return this.objetConfirmationClient;
    }

    public void setObjetConfirmationClient(String objetConfirmationClient) {
        this.objetConfirmationClient = objetConfirmationClient;
    }

    public String getCorpsConfirmationClient() {
        return this.corpsConfirmationClient;
    }

    public void setCorpsConfirmationClient(String corpsConfirmationClient) {
        this.corpsConfirmationClient = corpsConfirmationClient;
    }

    public String getFromConfirmationClient() {
        return this.fromConfirmationClient;
    }

    public void setFromConfirmationClient(String fromConfirmationClient) {
        this.fromConfirmationClient = fromConfirmationClient;
    }

    public String getToConfirmationClient() {
        return this.toConfirmationClient;
    }

    public void setToConfirmationClient(String toConfirmationClient) {
        this.toConfirmationClient = toConfirmationClient;
    }

    public Boolean getEnvoyeConfirmationClient() {
        return this.envoyeConfirmationClient;
    }

    public void setEnvoyeConfirmationClient(Boolean envoyeConfirmationClient) {
        this.envoyeConfirmationClient = envoyeConfirmationClient;
    }

    public String getDateEnvoiConfirmationClient() {
        return this.dateEnvoiConfirmationClient;
    }

    public void setDateEnvoiConfirmationClient(String dateEnvoiConfirmationClient) {
        this.dateEnvoiConfirmationClient = dateEnvoiConfirmationClient;
    }

    public String getObjetCri() {
        return this.objetCri;
    }

    public void setObjetCri(String objetCri) {
        this.objetCri = objetCri;
    }

    public String getCorpsCri() {
        return this.corpsCri;
    }

    public void setCorpsCri(String corpsCri) {
        this.corpsCri = corpsCri;
    }

    public String getFromCri() {
        return this.fromCri;
    }

    public void setFromCri(String fromCri) {
        this.fromCri = fromCri;
    }

    public String getToCri() {
        return this.toCri;
    }

    public void setToCri(String toCri) {
        this.toCri = toCri;
    }

    public Boolean getEnvoyeCri() {
        return this.envoyeCri;
    }

    public void setEnvoyeCri(Boolean envoyeCri) {
        this.envoyeCri = envoyeCri;
    }

    public String getDateEnvoiCri() {
        return this.dateEnvoiCri;
    }

    public void setDateEnvoiCri(String dateEnvoiCri) {
        this.dateEnvoiCri = dateEnvoiCri;
    }

    public String getObjetFtl() {
        return this.objetFtl;
    }

    public void setObjetFtl(String objetFtl) {
        this.objetFtl = objetFtl;
    }

    public String getCorpsFtl() {
        return this.corpsFtl;
    }

    public void setCorpsFtl(String corpsFtl) {
        this.corpsFtl = corpsFtl;
    }

    public String getFromFtl() {
        return this.fromFtl;
    }

    public void setFromFtl(String fromFtl) {
        this.fromFtl = fromFtl;
    }

    public String getToFtl() {
        return this.toFtl;
    }

    public void setToFtl(String toFtl) {
        this.toFtl = toFtl;
    }

    public Boolean getEnvoyeFtl() {
        return this.envoyeFtl;
    }

    public void setEnvoyeFtl(Boolean envoyeFtl) {
        this.envoyeFtl = envoyeFtl;
    }

    public String getDateEnvoiFtl() {
        return this.dateEnvoiFtl;
    }

    public void setDateEnvoiFtl(String dateEnvoiFtl) {
        this.dateEnvoiFtl = dateEnvoiFtl;
    }

    public String getDateInterventionTechniqueDebut() {
        return this.dateInterventionTechniqueDebut;
    }

    public void setDateInterventionTechniqueDebut(String dateInterventionTechniqueDebut) {
        this.dateInterventionTechniqueDebut = dateInterventionTechniqueDebut;
    }

    public String getDateInterventionTechniqueFin() {
        return this.dateInterventionTechniqueFin;
    }

    public void setDateInterventionTechniqueFin(String dateInterventionTechniqueFin) {
        this.dateInterventionTechniqueFin = dateInterventionTechniqueFin;
    }

    public String getObjetClientInjoinable() {
        return this.objetClientInjoinable;
    }

    public void setObjetClientInjoinable(String objetClientInjoinable) {
        this.objetClientInjoinable = objetClientInjoinable;
    }

    public String getCorpsClientInjoinable() {
        return this.corpsClientInjoinable;
    }

    public void setCorpsClientInjoinable(String corpsClientInjoinable) {
        this.corpsClientInjoinable = corpsClientInjoinable;
    }

    public String getFromClientInjoinable() {
        return this.fromClientInjoinable;
    }

    public void setFromClientInjoinable(String fromClientInjoinable) {
        this.fromClientInjoinable = fromClientInjoinable;
    }

    public String getToClientInjoinable() {
        return this.toClientInjoinable;
    }

    public void setToClientInjoinable(String toClientInjoinable) {
        this.toClientInjoinable = toClientInjoinable;
    }

    public Boolean getEnvoyeClientInjoinable() {
        return this.envoyeClientInjoinable;
    }

    public void setEnvoyeClientInjoinable(Boolean envoyeClientInjoinable) {
        this.envoyeClientInjoinable = envoyeClientInjoinable;
    }

    public String getDateEnvoiClientInjoinable() {
        return this.dateEnvoiClientInjoinable;
    }

    public void setDateEnvoiClientInjoinable(String dateEnvoiClientInjoinable) {
        this.dateEnvoiClientInjoinable = dateEnvoiClientInjoinable;
    }

    public String getObjetClientInjoinableKosc() {
        return this.objetClientInjoinableKosc;
    }

    public void setObjetClientInjoinableKosc(String objetClientInjoinableKosc) {
        this.objetClientInjoinableKosc = objetClientInjoinableKosc;
    }

    public String getCorpsClientInjoinableKosc() {
        return this.corpsClientInjoinableKosc;
    }

    public void setCorpsClientInjoinableKosc(String corpsClientInjoinableKosc) {
        this.corpsClientInjoinableKosc = corpsClientInjoinableKosc;
    }

    public String getFromClientInjoinableKosc() {
        return this.fromClientInjoinableKosc;
    }

    public void setFromClientInjoinableKosc(String fromClientInjoinableKosc) {
        this.fromClientInjoinableKosc = fromClientInjoinableKosc;
    }

    public String getToClientInjoinableKosc() {
        return this.toClientInjoinableKosc;
    }

    public void setToClientInjoinableKosc(String toClientInjoinableKosc) {
        this.toClientInjoinableKosc = toClientInjoinableKosc;
    }

    public Boolean getEnvoyeClientInjoinableKosc() {
        return this.envoyeClientInjoinableKosc;
    }

    public void setEnvoyeClientInjoinableKosc(Boolean envoyeClientInjoinableKosc) {
        this.envoyeClientInjoinableKosc = envoyeClientInjoinableKosc;
    }

    public String getDateEnvoiClientInjoinableKosc() {
        return this.dateEnvoiClientInjoinableKosc;
    }

    public void setDateEnvoiClientInjoinableKosc(String dateEnvoiClientInjoinableKosc) {
        this.dateEnvoiClientInjoinableKosc = dateEnvoiClientInjoinableKosc;
    }

    public String getCommentaireTechnicien() {
        return this.commentaireTechnicien;
    }

    public void setCommentaireTechnicien(String commentaireTechnicien) {
        this.commentaireTechnicien = commentaireTechnicien;
    }

    public String getCommantaireCloture() {
        return this.commantaireCloture;
    }

    public void setCommantaireCloture(String commantaireCloture) {
        this.commantaireCloture = commantaireCloture;
    }

    public String getObjetCloture() {
        return this.objetCloture;
    }

    public void setObjetCloture(String objetCloture) {
        this.objetCloture = objetCloture;
    }

    public String getCorpsCloture() {
        return this.corpsCloture;
    }

    public void setCorpsCloture(String corpsCloture) {
        this.corpsCloture = corpsCloture;
    }

    public Boolean getEnvoyeCloture() {
        return this.envoyeCloture;
    }

    public void setEnvoyeCloture(Boolean envoyeCloture) {
        this.envoyeCloture = envoyeCloture;
    }

    public String getDateEnvoiCloture() {
        return this.dateEnvoiCloture;
    }

    public void setDateEnvoiCloture(String dateEnvoiCloture) {
        this.dateEnvoiCloture = dateEnvoiCloture;
    }

    public String getEmailCloturePieceJoints() {
        return this.emailCloturePieceJoints;
    }

    public void setEmailCloturePieceJoints(String emailCloturePieceJoints) {
        this.emailCloturePieceJoints = emailCloturePieceJoints;
    }

    public String getObjetSuivi() {
        return this.objetSuivi;
    }

    public void setObjetSuivi(String objetSuivi) {
        this.objetSuivi = objetSuivi;
    }

    public String getCorpsSuivi() {
        return this.corpsSuivi;
    }

    public void setCorpsSuivi(String corpsSuivi) {
        this.corpsSuivi = corpsSuivi;
    }

    public Boolean getEnvoyeSuivi() {
        return this.envoyeSuivi;
    }

    public void setEnvoyeSuivi(Boolean envoyeSuivi) {
        this.envoyeSuivi = envoyeSuivi;
    }

    public String getDateEnvoiSuivi() {
        return this.dateEnvoiSuivi;
    }

    public void setDateEnvoiSuivi(String dateEnvoiSuivi) {
        this.dateEnvoiSuivi = dateEnvoiSuivi;
    }


    public String getDateDebutTraitementMax() {
        return this.dateDebutTraitementMax;
    }

    public String getDateDebutTraitementMin() {
        return this.dateDebutTraitementMin;
    }

    public void setDateDebutTraitementMax(String dateDebutTraitementMax) {
        this.dateDebutTraitementMax = dateDebutTraitementMax;
    }

    public void setDateDebutTraitementMin(String dateDebutTraitementMin) {
        this.dateDebutTraitementMin = dateDebutTraitementMin;
    }

    public String getSubmissionDateMax() {
        return this.submissionDateMax;
    }

    public String getSubmissionDateMin() {
        return this.submissionDateMin;
    }

    public void setSubmissionDateMax(String submissionDateMax) {
        this.submissionDateMax = submissionDateMax;
    }

    public void setSubmissionDateMin(String submissionDateMin) {
        this.submissionDateMin = submissionDateMin;
    }

    public String getDatePremierAppelMax() {
        return this.datePremierAppelMax;
    }

    public String getDatePremierAppelMin() {
        return this.datePremierAppelMin;
    }

    public void setDatePremierAppelMax(String datePremierAppelMax) {
        this.datePremierAppelMax = datePremierAppelMax;
    }

    public void setDatePremierAppelMin(String datePremierAppelMin) {
        this.datePremierAppelMin = datePremierAppelMin;
    }

    public String getDateDeuxiemeAppelMax() {
        return this.dateDeuxiemeAppelMax;
    }

    public String getDateDeuxiemeAppelMin() {
        return this.dateDeuxiemeAppelMin;
    }

    public void setDateDeuxiemeAppelMax(String dateDeuxiemeAppelMax) {
        this.dateDeuxiemeAppelMax = dateDeuxiemeAppelMax;
    }

    public void setDateDeuxiemeAppelMin(String dateDeuxiemeAppelMin) {
        this.dateDeuxiemeAppelMin = dateDeuxiemeAppelMin;
    }

    public String getDateTroisiemeAppelMax() {
        return this.dateTroisiemeAppelMax;
    }

    public String getDateTroisiemeAppelMin() {
        return this.dateTroisiemeAppelMin;
    }

    public void setDateTroisiemeAppelMax(String dateTroisiemeAppelMax) {
        this.dateTroisiemeAppelMax = dateTroisiemeAppelMax;
    }

    public void setDateTroisiemeAppelMin(String dateTroisiemeAppelMin) {
        this.dateTroisiemeAppelMin = dateTroisiemeAppelMin;
    }

    public String getDatePriseRdvMax() {
        return this.datePriseRdvMax;
    }

    public String getDatePriseRdvMin() {
        return this.datePriseRdvMin;
    }

    public void setDatePriseRdvMax(String datePriseRdvMax) {
        this.datePriseRdvMax = datePriseRdvMax;
    }

    public void setDatePriseRdvMin(String datePriseRdvMin) {
        this.datePriseRdvMin = datePriseRdvMin;
    }

    public String getDateRdvMax() {
        return this.dateRdvMax;
    }

    public String getDateRdvMin() {
        return this.dateRdvMin;
    }

    public void setDateRdvMax(String dateRdvMax) {
        this.dateRdvMax = dateRdvMax;
    }

    public void setDateRdvMin(String dateRdvMin) {
        this.dateRdvMin = dateRdvMin;
    }

    public String getDateOuvertureMax() {
        return this.dateOuvertureMax;
    }

    public String getDateOuvertureMin() {
        return this.dateOuvertureMin;
    }

    public void setDateOuvertureMax(String dateOuvertureMax) {
        this.dateOuvertureMax = dateOuvertureMax;
    }

    public void setDateOuvertureMin(String dateOuvertureMin) {
        this.dateOuvertureMin = dateOuvertureMin;
    }

    public String getDateEnvoiPlanificationMax() {
        return this.dateEnvoiPlanificationMax;
    }

    public String getDateEnvoiPlanificationMin() {
        return this.dateEnvoiPlanificationMin;
    }

    public void setDateEnvoiPlanificationMax(String dateEnvoiPlanificationMax) {
        this.dateEnvoiPlanificationMax = dateEnvoiPlanificationMax;
    }

    public void setDateEnvoiPlanificationMin(String dateEnvoiPlanificationMin) {
        this.dateEnvoiPlanificationMin = dateEnvoiPlanificationMin;
    }

    public String getDateAppelReplanificationMax() {
        return this.dateAppelReplanificationMax;
    }

    public String getDateAppelReplanificationMin() {
        return this.dateAppelReplanificationMin;
    }

    public void setDateAppelReplanificationMax(String dateAppelReplanificationMax) {
        this.dateAppelReplanificationMax = dateAppelReplanificationMax;
    }

    public void setDateAppelReplanificationMin(String dateAppelReplanificationMin) {
        this.dateAppelReplanificationMin = dateAppelReplanificationMin;
    }

    public String getDateEnvoiReportMax() {
        return this.dateEnvoiReportMax;
    }

    public String getDateEnvoiReportMin() {
        return this.dateEnvoiReportMin;
    }

    public void setDateEnvoiReportMax(String dateEnvoiReportMax) {
        this.dateEnvoiReportMax = dateEnvoiReportMax;
    }

    public void setDateEnvoiReportMin(String dateEnvoiReportMin) {
        this.dateEnvoiReportMin = dateEnvoiReportMin;
    }

    public String getDateEnvoiReplanificationMax() {
        return this.dateEnvoiReplanificationMax;
    }

    public String getDateEnvoiReplanificationMin() {
        return this.dateEnvoiReplanificationMin;
    }

    public void setDateEnvoiReplanificationMax(String dateEnvoiReplanificationMax) {
        this.dateEnvoiReplanificationMax = dateEnvoiReplanificationMax;
    }

    public void setDateEnvoiReplanificationMin(String dateEnvoiReplanificationMin) {
        this.dateEnvoiReplanificationMin = dateEnvoiReplanificationMin;
    }

    public String getDateEnvoiRefusMax() {
        return this.dateEnvoiRefusMax;
    }

    public String getDateEnvoiRefusMin() {
        return this.dateEnvoiRefusMin;
    }

    public void setDateEnvoiRefusMax(String dateEnvoiRefusMax) {
        this.dateEnvoiRefusMax = dateEnvoiRefusMax;
    }

    public void setDateEnvoiRefusMin(String dateEnvoiRefusMin) {
        this.dateEnvoiRefusMin = dateEnvoiRefusMin;
    }

    public String getDateEnvoiMauvaisContactMax() {
        return this.dateEnvoiMauvaisContactMax;
    }

    public String getDateEnvoiMauvaisContactMin() {
        return this.dateEnvoiMauvaisContactMin;
    }

    public void setDateEnvoiMauvaisContactMax(String dateEnvoiMauvaisContactMax) {
        this.dateEnvoiMauvaisContactMax = dateEnvoiMauvaisContactMax;
    }

    public void setDateEnvoiMauvaisContactMin(String dateEnvoiMauvaisContactMin) {
        this.dateEnvoiMauvaisContactMin = dateEnvoiMauvaisContactMin;
    }

    public String getDateEnvoiConfirmationClientMax() {
        return this.dateEnvoiConfirmationClientMax;
    }

    public String getDateEnvoiConfirmationClientMin() {
        return this.dateEnvoiConfirmationClientMin;
    }

    public void setDateEnvoiConfirmationClientMax(String dateEnvoiConfirmationClientMax) {
        this.dateEnvoiConfirmationClientMax = dateEnvoiConfirmationClientMax;
    }

    public void setDateEnvoiConfirmationClientMin(String dateEnvoiConfirmationClientMin) {
        this.dateEnvoiConfirmationClientMin = dateEnvoiConfirmationClientMin;
    }

    public String getDateEnvoiCriMax() {
        return this.dateEnvoiCriMax;
    }

    public String getDateEnvoiCriMin() {
        return this.dateEnvoiCriMin;
    }

    public void setDateEnvoiCriMax(String dateEnvoiCriMax) {
        this.dateEnvoiCriMax = dateEnvoiCriMax;
    }

    public void setDateEnvoiCriMin(String dateEnvoiCriMin) {
        this.dateEnvoiCriMin = dateEnvoiCriMin;
    }

    public String getDateEnvoiFtlMax() {
        return this.dateEnvoiFtlMax;
    }

    public String getDateEnvoiFtlMin() {
        return this.dateEnvoiFtlMin;
    }

    public void setDateEnvoiFtlMax(String dateEnvoiFtlMax) {
        this.dateEnvoiFtlMax = dateEnvoiFtlMax;
    }

    public void setDateEnvoiFtlMin(String dateEnvoiFtlMin) {
        this.dateEnvoiFtlMin = dateEnvoiFtlMin;
    }

    public String getDateInterventionTechniqueDebutMax() {
        return this.dateInterventionTechniqueDebutMax;
    }

    public String getDateInterventionTechniqueDebutMin() {
        return this.dateInterventionTechniqueDebutMin;
    }

    public void setDateInterventionTechniqueDebutMax(String dateInterventionTechniqueDebutMax) {
        this.dateInterventionTechniqueDebutMax = dateInterventionTechniqueDebutMax;
    }

    public void setDateInterventionTechniqueDebutMin(String dateInterventionTechniqueDebutMin) {
        this.dateInterventionTechniqueDebutMin = dateInterventionTechniqueDebutMin;
    }

    public String getDateInterventionTechniqueFinMax() {
        return this.dateInterventionTechniqueFinMax;
    }

    public String getDateInterventionTechniqueFinMin() {
        return this.dateInterventionTechniqueFinMin;
    }

    public void setDateInterventionTechniqueFinMax(String dateInterventionTechniqueFinMax) {
        this.dateInterventionTechniqueFinMax = dateInterventionTechniqueFinMax;
    }

    public void setDateInterventionTechniqueFinMin(String dateInterventionTechniqueFinMin) {
        this.dateInterventionTechniqueFinMin = dateInterventionTechniqueFinMin;
    }

    public String getDateEnvoiClientInjoinableMax() {
        return this.dateEnvoiClientInjoinableMax;
    }

    public String getDateEnvoiClientInjoinableMin() {
        return this.dateEnvoiClientInjoinableMin;
    }

    public void setDateEnvoiClientInjoinableMax(String dateEnvoiClientInjoinableMax) {
        this.dateEnvoiClientInjoinableMax = dateEnvoiClientInjoinableMax;
    }

    public void setDateEnvoiClientInjoinableMin(String dateEnvoiClientInjoinableMin) {
        this.dateEnvoiClientInjoinableMin = dateEnvoiClientInjoinableMin;
    }

    public String getDateEnvoiClientInjoinableKoscMax() {
        return this.dateEnvoiClientInjoinableKoscMax;
    }

    public String getDateEnvoiClientInjoinableKoscMin() {
        return this.dateEnvoiClientInjoinableKoscMin;
    }

    public void setDateEnvoiClientInjoinableKoscMax(String dateEnvoiClientInjoinableKoscMax) {
        this.dateEnvoiClientInjoinableKoscMax = dateEnvoiClientInjoinableKoscMax;
    }

    public void setDateEnvoiClientInjoinableKoscMin(String dateEnvoiClientInjoinableKoscMin) {
        this.dateEnvoiClientInjoinableKoscMin = dateEnvoiClientInjoinableKoscMin;
    }

    public String getObjetAutre() {
        return objetAutre;
    }

    public void setObjetAutre(String objetAutre) {
        this.objetAutre = objetAutre;
    }

    public String getCorpsAutre() {
        return corpsAutre;
    }

    public void setCorpsAutre(String corpsAutre) {
        this.corpsAutre = corpsAutre;
    }

    public String getFromAutre() {
        return fromAutre;
    }

    public void setFromAutre(String fromAutre) {
        this.fromAutre = fromAutre;
    }

    public String getToAutre() {
        return toAutre;
    }

    public void setToAutre(String toAutre) {
        this.toAutre = toAutre;
    }

    public Boolean getEnvoyeAutre() {
        return envoyeAutre;
    }

    public void setEnvoyeAutre(Boolean envoyeAutre) {
        this.envoyeAutre = envoyeAutre;
    }

    public String getDateEnvoiAutre() {
        return dateEnvoiAutre;
    }

    public void setDateEnvoiAutre(String dateEnvoiAutre) {
        this.dateEnvoiAutre = dateEnvoiAutre;
    }

    public String getDateEnvoiAutreMax() {
        return dateEnvoiAutreMax;
    }

    public void setDateEnvoiAutreMax(String dateEnvoiAutreMax) {
        this.dateEnvoiAutreMax = dateEnvoiAutreMax;
    }

    public String getDateEnvoiAutreMin() {
        return dateEnvoiAutreMin;
    }

    public void setDateEnvoiAutreMin(String dateEnvoiAutreMin) {
        this.dateEnvoiAutreMin = dateEnvoiAutreMin;
    }

    public String getDateEnvoiClotureMax() {
        return this.dateEnvoiClotureMax;
    }

    public String getDateEnvoiClotureMin() {
        return this.dateEnvoiClotureMin;
    }

    public void setDateEnvoiClotureMax(String dateEnvoiClotureMax) {
        this.dateEnvoiClotureMax = dateEnvoiClotureMax;
    }

    public void setDateEnvoiClotureMin(String dateEnvoiClotureMin) {
        this.dateEnvoiClotureMin = dateEnvoiClotureMin;
    }

    public String getDateEnvoiSuiviMax() {
        return this.dateEnvoiSuiviMax;
    }

    public String getDateEnvoiSuiviMin() {
        return this.dateEnvoiSuiviMin;
    }

    public void setDateEnvoiSuiviMax(String dateEnvoiSuiviMax) {
        this.dateEnvoiSuiviMax = dateEnvoiSuiviMax;
    }

    public void setDateEnvoiSuiviMin(String dateEnvoiSuiviMin) {
        this.dateEnvoiSuiviMin = dateEnvoiSuiviMin;
    }


    public OperatorVo getOperatorVo() {
        return this.operatorVo;
    }

    public void setOperatorVo(OperatorVo operatorVo) {
        this.operatorVo = operatorVo;
    }

    public DepartementVo getDepartementVo() {
        return this.departementVo;
    }

    public void setDepartementVo(DepartementVo departementVo) {
        this.departementVo = departementVo;
    }

    public TechnicienVo getTechnicienVo() {
        return this.technicienVo;
    }

    public void setTechnicienVo(TechnicienVo technicienVo) {
        this.technicienVo = technicienVo;
    }

    public TemplateEmailPlanificationVo getTemplateEmailPlanificationVo() {
        return this.templateEmailPlanificationVo;
    }

    public void setTemplateEmailPlanificationVo(TemplateEmailPlanificationVo templateEmailPlanificationVo) {
        this.templateEmailPlanificationVo = templateEmailPlanificationVo;
    }


    public TemplateEmailReplanificationVo getTemplateEmailReplanificationVo() {
        return this.templateEmailReplanificationVo;
    }

    public void setTemplateEmailReplanificationVo(TemplateEmailReplanificationVo templateEmailReplanificationVo) {
        this.templateEmailReplanificationVo = templateEmailReplanificationVo;
    }

    public TemplateEmailRefusVo getTemplateEmailRefusVo() {
        return this.templateEmailRefusVo;
    }

    public void setTemplateEmailRefusVo(TemplateEmailRefusVo templateEmailRefusVo) {
        this.templateEmailRefusVo = templateEmailRefusVo;
    }

    public TemplateEmailMauvaisContactVo getTemplateEmailMauvaisContactVo() {
        return this.templateEmailMauvaisContactVo;
    }

    public void setTemplateEmailMauvaisContactVo(TemplateEmailMauvaisContactVo templateEmailMauvaisContactVo) {
        this.templateEmailMauvaisContactVo = templateEmailMauvaisContactVo;
    }

    public TemplateEmailConfirmationClientVo getTemplateEmailConfirmationClientVo() {
        return this.templateEmailConfirmationClientVo;
    }

    public void setTemplateEmailConfirmationClientVo(TemplateEmailConfirmationClientVo templateEmailConfirmationClientVo) {
        this.templateEmailConfirmationClientVo = templateEmailConfirmationClientVo;
    }

    public TemplateEmailCriVo getTemplateEmailCriVo() {
        return this.templateEmailCriVo;
    }

    public void setTemplateEmailCriVo(TemplateEmailCriVo templateEmailCriVo) {
        this.templateEmailCriVo = templateEmailCriVo;
    }

    public TemplateEmailFtlVo getTemplateEmailFtlVo() {
        return this.templateEmailFtlVo;
    }

    public void setTemplateEmailFtlVo(TemplateEmailFtlVo templateEmailFtlVo) {
        this.templateEmailFtlVo = templateEmailFtlVo;
    }

    public TemplateEmailClientInjoinableVo getTemplateEmailClientInjoinableVo() {
        return this.templateEmailClientInjoinableVo;
    }

    public void setTemplateEmailClientInjoinableVo(TemplateEmailClientInjoinableVo templateEmailClientInjoinableVo) {
        this.templateEmailClientInjoinableVo = templateEmailClientInjoinableVo;
    }

    public TemplateEmailClientInjoinableKoscVo getTemplateEmailClientInjoinableKoscVo() {
        return this.templateEmailClientInjoinableKoscVo;
    }

    public void setTemplateEmailClientInjoinableKoscVo(TemplateEmailClientInjoinableKoscVo templateEmailClientInjoinableKoscVo) {
        this.templateEmailClientInjoinableKoscVo = templateEmailClientInjoinableKoscVo;
    }

    public EtatDemandeKoscVo getEtatDemandeKoscVo() {
        return this.etatDemandeKoscVo;
    }

    public void setEtatDemandeKoscVo(EtatDemandeKoscVo etatDemandeKoscVo) {
        this.etatDemandeKoscVo = etatDemandeKoscVo;
    }

    public TemplateEmailClotureVo getTemplateEmailClotureVo() {
        return this.templateEmailClotureVo;
    }

    public void setTemplateEmailClotureVo(TemplateEmailClotureVo templateEmailClotureVo) {
        this.templateEmailClotureVo = templateEmailClotureVo;
    }

    public TemplateSuiviVo getTemplateSuiviVo() {
        return this.templateSuiviVo;
    }

    public void setTemplateSuiviVo(TemplateSuiviVo templateSuiviVo) {
        this.templateSuiviVo = templateSuiviVo;
    }

    public CauseKoOkVo getCauseKoOkVo() {
        return this.causeKoOkVo;
    }

    public void setCauseKoOkVo(CauseKoOkVo causeKoOkVo) {
        this.causeKoOkVo = causeKoOkVo;
    }

    public SourceReplanificationVo getSourceReplanificationVo() {
        return this.sourceReplanificationVo;
    }

    public void setSourceReplanificationVo(SourceReplanificationVo sourceReplanificationVo) {
        this.sourceReplanificationVo = sourceReplanificationVo;
    }

    public String getDateErdv() {
        return  this.dateErdv;
    }

    public void setDateErdv(String dateErdv) {
        this.dateErdv = dateErdv;
    }

    public String getReferenceCommandePriseInterneOC() {
        return referenceCommandePriseInterneOC;
    }

    public void setReferenceCommandePriseInterneOC(String referenceCommandePriseInterneOC) {
        this.referenceCommandePriseInterneOC = referenceCommandePriseInterneOC;
    }

    public String getProductCode() {
        return this.productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public String getProductLabel() {
        return this.productLabel;
    }

    public void setProductLabel(String productLabel) {
        this.productLabel = productLabel;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getNbrHeureDateSubmissionAndNow() {
        return nbrHeureDateSubmissionAndNow;
    }

    public void setNbrHeureDateSubmissionAndNow(String nbrHeureDateSubmissionAndNow) {
        this.nbrHeureDateSubmissionAndNow = nbrHeureDateSubmissionAndNow;
    }

    public String getNbrHeureDateSubmissionAndNowMin() {
        return nbrHeureDateSubmissionAndNowMin;
    }

    public void setNbrHeureDateSubmissionAndNowMin(String nbrHeureDateSubmissionAndNowMin) {
        this.nbrHeureDateSubmissionAndNowMin = nbrHeureDateSubmissionAndNowMin;
    }

    public String getNbrHeureDateSubmissionAndNowMax() {
        return nbrHeureDateSubmissionAndNowMax;
    }

    public void setNbrHeureDateSubmissionAndNowMax(String nbrHeureDateSubmissionAndNowMax) {
        this.nbrHeureDateSubmissionAndNowMax = nbrHeureDateSubmissionAndNowMax;
    }

    public String getObjetReportDemandeManeoClientInjoignable() {
        return objetReportDemandeManeoClientInjoignable;
    }

    public void setObjetReportDemandeManeoClientInjoignable(String objetReportDemandeManeoClientInjoignable) {
        this.objetReportDemandeManeoClientInjoignable = objetReportDemandeManeoClientInjoignable;
    }

    public String getCorpsReportDemandeManeoClientInjoignable() {
        return corpsReportDemandeManeoClientInjoignable;
    }

    public void setCorpsReportDemandeManeoClientInjoignable(String corpsReportDemandeManeoClientInjoignable) {
        this.corpsReportDemandeManeoClientInjoignable = corpsReportDemandeManeoClientInjoignable;
    }

    public String getFromReportDemandeManeoClientInjoignable() {
        return fromReportDemandeManeoClientInjoignable;
    }

    public void setFromReportDemandeManeoClientInjoignable(String fromReportDemandeManeoClientInjoignable) {
        this.fromReportDemandeManeoClientInjoignable = fromReportDemandeManeoClientInjoignable;
    }

    public String getToReportDemandeManeoClientInjoignable() {
        return toReportDemandeManeoClientInjoignable;
    }

    public void setToReportDemandeManeoClientInjoignable(String toReportDemandeManeoClientInjoignable) {
        this.toReportDemandeManeoClientInjoignable = toReportDemandeManeoClientInjoignable;
    }

    public Boolean getEnvoyeReportDemandeManeoClientInjoignable() {
        return envoyeReportDemandeManeoClientInjoignable;
    }

    public void setEnvoyeReportDemandeManeoClientInjoignable(Boolean envoyeReportDemandeManeoClientInjoignable) {
        this.envoyeReportDemandeManeoClientInjoignable = envoyeReportDemandeManeoClientInjoignable;
    }

    public String getDateEnvoiReportDemandeManeoClientInjoignable() {
        return dateEnvoiReportDemandeManeoClientInjoignable;
    }

    public void setDateEnvoiReportDemandeManeoClientInjoignable(String dateEnvoiReportDemandeManeoClientInjoignable) {
        this.dateEnvoiReportDemandeManeoClientInjoignable = dateEnvoiReportDemandeManeoClientInjoignable;
    }

    public String getObjetReportDemandeManeoClientJoignableAccepte() {
        return objetReportDemandeManeoClientJoignableAccepte;
    }

    public void setObjetReportDemandeManeoClientJoignableAccepte(String objetReportDemandeManeoClientJoignableAccepte) {
        this.objetReportDemandeManeoClientJoignableAccepte = objetReportDemandeManeoClientJoignableAccepte;
    }

    public String getCorpsReportDemandeManeoClientJoignableAccepte() {
        return corpsReportDemandeManeoClientJoignableAccepte;
    }

    public void setCorpsReportDemandeManeoClientJoignableAccepte(String corpsReportDemandeManeoClientJoignableAccepte) {
        this.corpsReportDemandeManeoClientJoignableAccepte = corpsReportDemandeManeoClientJoignableAccepte;
    }

    public String getFromReportDemandeManeoClientJoignableAccepte() {
        return fromReportDemandeManeoClientJoignableAccepte;
    }

    public void setFromReportDemandeManeoClientJoignableAccepte(String fromReportDemandeManeoClientJoignableAccepte) {
        this.fromReportDemandeManeoClientJoignableAccepte = fromReportDemandeManeoClientJoignableAccepte;
    }

    public String getToReportDemandeManeoClientJoignableAccepte() {
        return toReportDemandeManeoClientJoignableAccepte;
    }

    public void setToReportDemandeManeoClientJoignableAccepte(String toReportDemandeManeoClientJoignableAccepte) {
        this.toReportDemandeManeoClientJoignableAccepte = toReportDemandeManeoClientJoignableAccepte;
    }

    public Boolean getEnvoyeReportDemandeManeoClientJoignableAccepte() {
        return envoyeReportDemandeManeoClientJoignableAccepte;
    }

    public void setEnvoyeReportDemandeManeoClientJoignableAccepte(Boolean envoyeReportDemandeManeoClientJoignableAccepte) {
        this.envoyeReportDemandeManeoClientJoignableAccepte = envoyeReportDemandeManeoClientJoignableAccepte;
    }

    public String getDateEnvoiReportDemandeManeoClientJoignableAccepte() {
        return dateEnvoiReportDemandeManeoClientJoignableAccepte;
    }

    public void setDateEnvoiReportDemandeManeoClientJoignableAccepte(String dateEnvoiReportDemandeManeoClientJoignableAccepte) {
        this.dateEnvoiReportDemandeManeoClientJoignableAccepte = dateEnvoiReportDemandeManeoClientJoignableAccepte;
    }

    public String getObjetReportDemandeManeoClientJoignableRefus() {
        return objetReportDemandeManeoClientJoignableRefus;
    }

    public void setObjetReportDemandeManeoClientJoignableRefus(String objetReportDemandeManeoClientJoignableRefus) {
        this.objetReportDemandeManeoClientJoignableRefus = objetReportDemandeManeoClientJoignableRefus;
    }

    public String getCorpsReportDemandeManeoClientJoignableRefus() {
        return corpsReportDemandeManeoClientJoignableRefus;
    }

    public void setCorpsReportDemandeManeoClientJoignableRefus(String corpsReportDemandeManeoClientJoignableRefus) {
        this.corpsReportDemandeManeoClientJoignableRefus = corpsReportDemandeManeoClientJoignableRefus;
    }

    public String getFromReportDemandeManeoClientJoignableRefus() {
        return fromReportDemandeManeoClientJoignableRefus;
    }

    public void setFromReportDemandeManeoClientJoignableRefus(String fromReportDemandeManeoClientJoignableRefus) {
        this.fromReportDemandeManeoClientJoignableRefus = fromReportDemandeManeoClientJoignableRefus;
    }

    public String getToReportDemandeManeoClientJoignableRefus() {
        return toReportDemandeManeoClientJoignableRefus;
    }

    public void setToReportDemandeManeoClientJoignableRefus(String toReportDemandeManeoClientJoignableRefus) {
        this.toReportDemandeManeoClientJoignableRefus = toReportDemandeManeoClientJoignableRefus;
    }

    public Boolean getEnvoyeReportDemandeManeoClientJoignableRefus() {
        return envoyeReportDemandeManeoClientJoignableRefus;
    }

    public void setEnvoyeReportDemandeManeoClientJoignableRefus(Boolean envoyeReportDemandeManeoClientJoignableRefus) {
        this.envoyeReportDemandeManeoClientJoignableRefus = envoyeReportDemandeManeoClientJoignableRefus;
    }

    public String getDateEnvoiReportDemandeManeoClientJoignableRefus() {
        return dateEnvoiReportDemandeManeoClientJoignableRefus;
    }

    public void setDateEnvoiReportDemandeManeoClientJoignableRefus(String dateEnvoiReportDemandeManeoClientJoignableRefus) {
        this.dateEnvoiReportDemandeManeoClientJoignableRefus = dateEnvoiReportDemandeManeoClientJoignableRefus;
    }

    public String getObjetReportDemandeClientClientInjoignable() {
        return objetReportDemandeClientClientInjoignable;
    }

    public void setObjetReportDemandeClientClientInjoignable(String objetReportDemandeClientClientInjoignable) {
        this.objetReportDemandeClientClientInjoignable = objetReportDemandeClientClientInjoignable;
    }

    public String getCorpsReportDemandeClientClientInjoignable() {
        return corpsReportDemandeClientClientInjoignable;
    }

    public void setCorpsReportDemandeClientClientInjoignable(String corpsReportDemandeClientClientInjoignable) {
        this.corpsReportDemandeClientClientInjoignable = corpsReportDemandeClientClientInjoignable;
    }

    public String getFromReportDemandeClientClientInjoignable() {
        return fromReportDemandeClientClientInjoignable;
    }

    public void setFromReportDemandeClientClientInjoignable(String fromReportDemandeClientClientInjoignable) {
        this.fromReportDemandeClientClientInjoignable = fromReportDemandeClientClientInjoignable;
    }

    public String getToReportDemandeClientClientInjoignable() {
        return toReportDemandeClientClientInjoignable;
    }

    public void setToReportDemandeClientClientInjoignable(String toReportDemandeClientClientInjoignable) {
        this.toReportDemandeClientClientInjoignable = toReportDemandeClientClientInjoignable;
    }

    public Boolean getEnvoyeReportDemandeClientClientInjoignable() {
        return envoyeReportDemandeClientClientInjoignable;
    }

    public void setEnvoyeReportDemandeClientClientInjoignable(Boolean envoyeReportDemandeClientClientInjoignable) {
        this.envoyeReportDemandeClientClientInjoignable = envoyeReportDemandeClientClientInjoignable;
    }

    public String getDateEnvoiReportDemandeClientClientInjoignable() {
        return dateEnvoiReportDemandeClientClientInjoignable;
    }

    public void setDateEnvoiReportDemandeClientClientInjoignable(String dateEnvoiReportDemandeClientClientInjoignable) {
        this.dateEnvoiReportDemandeClientClientInjoignable = dateEnvoiReportDemandeClientClientInjoignable;
    }

    public String getObjetReportDemandeClientClientJoignable() {
        return objetReportDemandeClientClientJoignable;
    }

    public void setObjetReportDemandeClientClientJoignable(String objetReportDemandeClientClientJoignable) {
        this.objetReportDemandeClientClientJoignable = objetReportDemandeClientClientJoignable;
    }

    public String getCorpsReportDemandeClientClientJoignable() {
        return corpsReportDemandeClientClientJoignable;
    }

    public void setCorpsReportDemandeClientClientJoignable(String corpsReportDemandeClientClientJoignable) {
        this.corpsReportDemandeClientClientJoignable = corpsReportDemandeClientClientJoignable;
    }

    public String getFromReportDemandeClientClientJoignable() {
        return fromReportDemandeClientClientJoignable;
    }

    public void setFromReportDemandeClientClientJoignable(String fromReportDemandeClientClientJoignable) {
        this.fromReportDemandeClientClientJoignable = fromReportDemandeClientClientJoignable;
    }

    public String getToReportDemandeClientClientJoignable() {
        return toReportDemandeClientClientJoignable;
    }

    public void setToReportDemandeClientClientJoignable(String toReportDemandeClientClientJoignable) {
        this.toReportDemandeClientClientJoignable = toReportDemandeClientClientJoignable;
    }

    public Boolean getEnvoyeReportDemandeClientClientJoignable() {
        return envoyeReportDemandeClientClientJoignable;
    }

    public void setEnvoyeReportDemandeClientClientJoignable(Boolean envoyeReportDemandeClientClientJoignable) {
        this.envoyeReportDemandeClientClientJoignable = envoyeReportDemandeClientClientJoignable;
    }

    public String getDateEnvoiReportDemandeClientClientJoignable() {
        return dateEnvoiReportDemandeClientClientJoignable;
    }

    public void setDateEnvoiReportDemandeClientClientJoignable(String dateEnvoiReportDemandeClientClientJoignable) {
        this.dateEnvoiReportDemandeClientClientJoignable = dateEnvoiReportDemandeClientClientJoignable;
    }

    public String getDateCri() {
        return dateCri;
    }

    public void setDateCri(String dateCri) {
        this.dateCri = dateCri;
    }

    public User getUserPlanification() {
        return userPlanification;
    }

    public void setUserPlanification(User userPlanification) {
        this.userPlanification = userPlanification;
    }

    public User getUserReplanification() {
        return userReplanification;
    }

    public void setUserReplanification(User userReplanification) {
        this.userReplanification = userReplanification;
    }

    public User getUserRefus() {
        return userRefus;
    }

    public void setUserRefus(User userRefus) {
        this.userRefus = userRefus;
    }

    public User getUserMauvaisContact() {
        return userMauvaisContact;
    }

    public void setUserMauvaisContact(User userMauvaisContact) {
        this.userMauvaisContact = userMauvaisContact;
    }

    public User getUserConfirmationClient() {
        return userConfirmationClient;
    }

    public void setUserConfirmationClient(User userConfirmationClient) {
        this.userConfirmationClient = userConfirmationClient;
    }

    public User getUserCri() {
        return userCri;
    }

    public void setUserCri(User userCri) {
        this.userCri = userCri;
    }

    public User getUserFtl() {
        return userFtl;
    }

    public void setUserFtl(User userFtl) {
        this.userFtl = userFtl;
    }

    public User getUserClientInjoinable() {
        return userClientInjoinable;
    }

    public void setUserClientInjoinable(User userClientInjoinable) {
        this.userClientInjoinable = userClientInjoinable;
    }

    public User getUserAutre() {
        return userAutre;
    }

    public void setUserAutre(User userAutre) {
        this.userAutre = userAutre;
    }

    public User getUserClientInjoinableKosc() {
        return userClientInjoinableKosc;
    }

    public void setUserClientInjoinableKosc(User userClientInjoinableKosc) {
        this.userClientInjoinableKosc = userClientInjoinableKosc;
    }

    public User getUserReportDemandeManeoClientInjoignable() {
        return userReportDemandeManeoClientInjoignable;
    }

    public void setUserReportDemandeManeoClientInjoignable(User userReportDemandeManeoClientInjoignable) {
        this.userReportDemandeManeoClientInjoignable = userReportDemandeManeoClientInjoignable;
    }

    public User getUserReportDemandeManeoClientJoignableAccepte() {
        return userReportDemandeManeoClientJoignableAccepte;
    }

    public void setUserReportDemandeManeoClientJoignableAccepte(User userReportDemandeManeoClientJoignableAccepte) {
        this.userReportDemandeManeoClientJoignableAccepte = userReportDemandeManeoClientJoignableAccepte;
    }

    public User getUserReportDemandeManeoClientJoignableRefus() {
        return userReportDemandeManeoClientJoignableRefus;
    }

    public void setUserReportDemandeManeoClientJoignableRefus(User userReportDemandeManeoClientJoignableRefus) {
        this.userReportDemandeManeoClientJoignableRefus = userReportDemandeManeoClientJoignableRefus;
    }

    public User getUserReportDemandeClientClientInjoignable() {
        return userReportDemandeClientClientInjoignable;
    }

    public void setUserReportDemandeClientClientInjoignable(User userReportDemandeClientClientInjoignable) {
        this.userReportDemandeClientClientInjoignable = userReportDemandeClientClientInjoignable;
    }

    public User getUserReportDemandeClientClientJoignable() {
        return userReportDemandeClientClientJoignable;
    }

    public void setUserReportDemandeClientClientJoignable(User userReportDemandeClientClientJoignable) {
        this.userReportDemandeClientClientJoignable = userReportDemandeClientClientJoignable;
    }

    public User getUserImportation() {
        return userImportation;
    }

    public void setUserImportation(User userImportation) {
        this.userImportation = userImportation;
    }
    public String getSupplier() {
        return supplier;
    }

    public void setSupplier(String supplier) {
        this.supplier = supplier;
    }

    public String getCustomerOperator() {
        return customerOperator;
    }

    public void setCustomerOperator(String customer_operator) {
        this.customerOperator = customer_operator;
    }

    public String getSlid() {
        return slid;
    }

    public void setSlid(String slid) {
        this.slid = slid;
    }

    public String getKoscContactFirstName() {
        return koscContactFirstName;
    }

    public void setKoscContactFirstName(String koscContactFirstName) {
        this.koscContactFirstName = koscContactFirstName;
    }

    public String getKoscContactLastName() {
        return koscContactLastName;
    }

    public void setKoscContactLastName(String koscContactLastName) {
        this.koscContactLastName = koscContactLastName;
    }

    public String getKoscContactPhone() {
        return koscContactPhone;
    }

    public void setKoscContactPhone(String koscContactPhone) {
        this.koscContactPhone = koscContactPhone;
    }

    public String getKoscContactEmail1() {
        return koscContactEmail1;
    }

    public void setKoscContactEmail1(String koscContactEmail1) {
        this.koscContactEmail1 = koscContactEmail1;
    }

    public String getKoscContactEmail2() {
        return koscContactEmail2;
    }

    public void setKoscContactEmail2(String koscContactEmail2) {
        this.koscContactEmail2 = koscContactEmail2;
    }

    public String getKoscContactEmail3() {
        return koscContactEmail3;
    }

    public void setKoscContactEmail3(String koscContactEmail3) {
        this.koscContactEmail3 = koscContactEmail3;
    }

    public String getKoscSplitterPosition() {
        return koscSplitterPosition;
    }

    public void setKoscSplitterPosition(String koscSplitterPosition) {
        this.koscSplitterPosition = koscSplitterPosition;
    }

    public String getKoscComment() {
        return koscComment;
    }

    public void setKoscComment(String koscComment) {
        this.koscComment = koscComment;
    }

    public String getOtpRef() {
        return otpRef;
    }

    public void setOtpRef(String otpRef) {
        this.otpRef = otpRef;
    }

    public String getOperatorComment() {
        return operatorComment;
    }

    public void setOperatorComment(String operatorComment) {
        this.operatorComment = operatorComment;
    }

    public String getMontantDevis() {
        return montantDevis;
    }

    public void setMontantDevis(String montantDevis) {
        this.montantDevis = montantDevis;
    }
}
