package com.maneo.kosc.bean;

import java.util.List;
import java.util.Objects;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;


@Entity
@Table(name = "ordre_kosc")
public class OrdreKosc {

    @Id
    @SequenceGenerator(name = "ordre_kosc_seq", sequenceName = "ordre_kosc_seq",
            allocationSize = 1, initialValue = 10000)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ordre_kosc_seq")

    private Long id;

    private double delaiPriseRdvParHeure;


    @Lob
    @Column(columnDefinition = "TEXT")
    private String reference;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String referenceWorkOrder;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String codeDecharge;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String supplierServiceCode;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateDebutTraitement;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String endCustumorName;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String endCustumorSiret;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String endCustumorFirstName;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String endCustumorLastName;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String endCustumorZipcode;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String endCustumorStreetName;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String endCustumorStreetNumber;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String endCustumorCity;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String endCustumorBuilding;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String endCustumorStairs;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String endCustumorFloor;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String endCustumorContactFirstName;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String endCustumorContactLastName;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String endCustumorContactPhone;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String endCustumorContactCellPhone;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String endCustumorContactEmail;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String company;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String referenDossier;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date submissionDate;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String coordonnePboY;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String hauteurPbo;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String typeMaterielPbo;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String typePbo;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String conditionSyndics;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String typeRacordementPboPto;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String autreInfosPboPto;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String codeAccesImmeuble;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String contacteImmeuble;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String pmaAccessible;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String infoObtentionCle;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String localeIpm;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String contactsSyndic;
    @Column(columnDefinition = "boolean default false")
    private Boolean racordementLong = false;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String oc1;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String nomModulePm1;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String positionModulePm1;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String referenceCableModulePm1;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String referenceTubeModulePm1;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String informationFibreModulePm1;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String referenceCablePbo1;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String informationTubePbo1;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String informationFibrePbo1;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String connecteurPriseNumero1;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String connecteurPriseCouleur1;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String reserve1;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String oc2;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String nomModulePm2;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String positionModulePm2;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String referenceCableModulePm2;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String referenceTubeModulePm2;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String informationFibreModulePm2;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String referenceCablePbo2;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String informationTubePbo2;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String informationFibrePbo2;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String connecteurPriseNumero2;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String connecteurPriseCouleur2;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String reserve2;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String oc3;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String nomModulePm3;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String positionModulePm3;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String referenceCableModulePm3;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String referenceTubeModulePm3;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String informationFibreModulePm3;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String referenceCablePbo3;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String informationTubePbo3;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String informationFibrePbo3;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String connecteurPriseNumero3;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String connecteurPriseCouleur3;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String reserve3;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String oc4;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String nomModulePm4;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String positionModulePm4;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String referenceCableModulePm4;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String referenceTubeModulePm4;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String informationFibreModulePm4;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String referenceCablePbo4;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String informationTubePbo4;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String informationFibrePbo4;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String connecteurPriseNumero4;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String connecteurPriseCouleur4;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String reserve4;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String pboReel;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String numeroSerieOnt;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String hotline;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String mutationPbo;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String workOrderType;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String product;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String productCode;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String productLabel;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String provider;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String providerFileType;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String spliter;
    @Column(columnDefinition = "boolean default false")
    private Boolean existingOtp = false;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String profile;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String providerSlId;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String referencePrestationPrise;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String referencePm;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String referencePmTechnique;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String localisationPm;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String providerProduct;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String referencePbo;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String localisationPbo;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String referencePrise;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date datePremierAppel;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateDeuxiemeAppel;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateTroisiemeAppel;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date datePriseRdv;
    @JsonFormat(pattern = "yyyy-MM-dd hh:mm:ss.SSS")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateRdv;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateOuverture;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String commentaireClient;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String commentaireKosc;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String objetPlanification;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String corpsPlanification;
    @Column(columnDefinition = "boolean default false")
    private Boolean envoyePlanification = false;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateEnvoiPlanification;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String fromPlanification;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String toPlanification;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateAppelReplanification;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String objetReplanification;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String corpsReplanification;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String fromReplanification;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String toReplanification;
    @Column(columnDefinition = "boolean default false")
    private Boolean envoyeReplanification = false;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateEnvoiReplanification;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String objetRefus;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String corpsRefus;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String fromRefus;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String toRefus;
    @Column(columnDefinition = "boolean default false")
    private Boolean envoyeRefus = false;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateEnvoiRefus;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String objetMauvaisContact;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String corpsMauvaisContact;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String fromMauvaisContact;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String toMauvaisContact;
    @Column(columnDefinition = "boolean default false")
    private Boolean envoyeMauvaisContact = false;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateEnvoiMauvaisContact;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String objetConfirmationClient;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String corpsConfirmationClient;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String fromConfirmationClient;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String toConfirmationClient;
    @Column(columnDefinition = "boolean default false")
    private Boolean envoyeConfirmationClient = false;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateEnvoiConfirmationClient;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String objetCri;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String corpsCri;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String fromCri;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String toCri;
    @Column(columnDefinition = "boolean default false")
    private Boolean envoyeCri = false;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateEnvoiCri;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String objetFtl;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String corpsFtl;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String fromFtl;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String toFtl;
    @Column(columnDefinition = "boolean default false")
    private Boolean envoyeFtl = false;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateEnvoiFtl;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateInterventionTechniqueDebut;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateInterventionTechniqueFin;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String objetClientInjoinable;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String corpsClientInjoinable;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String fromClientInjoinable;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String toClientInjoinable;
    @Column(columnDefinition = "boolean default false")
    private Boolean envoyeClientInjoinable = false;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateEnvoiClientInjoinable;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String objetAutre;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String corpsAutre;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String fromAutre;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String toAutre;
    @Column(columnDefinition = "boolean default false")
    private Boolean envoyeAutre = false;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateEnvoiAutre;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String objetClientInjoinableKosc;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String corpsClientInjoinableKosc;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String fromClientInjoinableKosc;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String toClientInjoinableKosc;
    @Column(columnDefinition = "boolean default false")
    private Boolean envoyeClientInjoinableKosc = false;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateEnvoiClientInjoinableKosc;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String commentaireTechnicien;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String commantaireCloture;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String objetCloture;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String corpsCloture;
    @Column(columnDefinition = "boolean default false")
    private Boolean envoyeCloture = false;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateEnvoiCloture;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String emailCloturePieceJoints;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String objetSuivi;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String corpsSuivi;
    @Column(columnDefinition = "boolean default false")
    private Boolean envoyeSuivi = false;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateEnvoiSuivi;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateErdv;
    @Column(columnDefinition = "TEXT")
    private String referenceCommandePriseInterneOC;
    @Column(columnDefinition = "boolean default false")
    private Boolean erdv = false;
    @Column(columnDefinition = "boolean default false")
    private Boolean confort = false;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateDernierAppel;

    private Long numeroDernierAppel;
    private Long nbrHeureDateSubmissionAndNow;

    @Transient
    private String type;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String objetReportDemandeManeoClientInjoignable;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String corpsReportDemandeManeoClientInjoignable;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String fromReportDemandeManeoClientInjoignable;
    @Lob
    @Column(columnDefinition = "TEXT")
    private  String toReportDemandeManeoClientInjoignable;
    @Column(columnDefinition = "boolean default false")
    private Boolean envoyeReportDemandeManeoClientInjoignable = false;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateEnvoiReportDemandeManeoClientInjoignable;



    @Lob
    @Column(columnDefinition = "TEXT")
    private String objetReportDemandeManeoClientJoignableAccepte;
    @Lob
    @Column(columnDefinition = "TEXT")
    private  String corpsReportDemandeManeoClientJoignableAccepte;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String fromReportDemandeManeoClientJoignableAccepte;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String toReportDemandeManeoClientJoignableAccepte;
    @Column(columnDefinition = "boolean default false")

    private Boolean envoyeReportDemandeManeoClientJoignableAccepte = false;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateEnvoiReportDemandeManeoClientJoignableAccepte;



    @Lob
    @Column(columnDefinition = "TEXT")
    private String objetReportDemandeManeoClientJoignableRefus;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String corpsReportDemandeManeoClientJoignableRefus;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String fromReportDemandeManeoClientJoignableRefus;
    @Lob
    @Column(columnDefinition = "TEXT")
    private  String toReportDemandeManeoClientJoignableRefus;
    @Column(columnDefinition = "boolean default false")

    private Boolean envoyeReportDemandeManeoClientJoignableRefus = false;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private  Date dateEnvoiReportDemandeManeoClientJoignableRefus;



    @Lob
    @Column(columnDefinition = "TEXT")
    private String objetReportDemandeClientClientInjoignable;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String corpsReportDemandeClientClientInjoignable;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String fromReportDemandeClientClientInjoignable;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String toReportDemandeClientClientInjoignable;
    @Column(columnDefinition = "boolean default false")

    private Boolean envoyeReportDemandeClientClientInjoignable = false;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateEnvoiReportDemandeClientClientInjoignable;



    @Lob
    @Column(columnDefinition = "TEXT")
    private String objetReportDemandeClientClientJoignable;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String corpsReportDemandeClientClientJoignable;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String fromReportDemandeClientClientJoignable;
    @Lob
    @Column(columnDefinition = "TEXT")
    private String toReportDemandeClientClientJoignable;
    @Column(columnDefinition = "boolean default false")

    private Boolean envoyeReportDemandeClientClientJoignable = false ;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateEnvoiReportDemandeClientClientJoignable;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    private Date dateCri;


    @ManyToOne
    private Operator operator;
    @ManyToOne
    private Departement departement;
    @ManyToOne
    private Technicien technicien;
    @ManyToOne
    private TemplateEmailPlanification templateEmailPlanification;

    @ManyToOne
    private TemplateEmailReplanification templateEmailReplanification;
    @ManyToOne
    private TemplateEmailRefus templateEmailRefus;
    @ManyToOne
    private TemplateEmailMauvaisContact templateEmailMauvaisContact;
    @ManyToOne
    private TemplateEmailConfirmationClient templateEmailConfirmationClient;
    @ManyToOne
    private TemplateEmailCri templateEmailCri;
    @ManyToOne
    private TemplateEmailFtl templateEmailFtl;
    @ManyToOne
    private TemplateEmailClientInjoinable templateEmailClientInjoinable;
    @ManyToOne
    private TemplateEmailClientInjoinableKosc templateEmailClientInjoinableKosc;
    @ManyToOne
    private EtatDemandeKosc etatDemandeKosc;

    @Transient
    private List<EtatDemandeKosc> etatDemandeKoscs;
    @ManyToOne
    private TemplateEmailCloture templateEmailCloture;
    @ManyToOne
    private TemplateSuivi templateSuivi;
    @ManyToOne
    private CauseKoOk causeKoOk;
    @ManyToOne
    private SourceReplanification sourceReplanification;


    public OrdreKosc() {
        super();
    }


    public List<EtatDemandeKosc> getEtatDemandeKoscs() {
        return etatDemandeKoscs;
    }

    public void setEtatDemandeKoscs(List<EtatDemandeKosc> etatDemandeKoscs) {
        this.etatDemandeKoscs = etatDemandeKoscs;
    }

    public Boolean getConfort() {
        return confort;
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

    public double getDelaiPriseRdvParHeure() {
        return delaiPriseRdvParHeure;
    }

    public void setDelaiPriseRdvParHeure(double delaiPriseRdvParHeure) {
        this.delaiPriseRdvParHeure = delaiPriseRdvParHeure;
    }



    public String getToReplanification() {
        return toReplanification;
    }

    public void setToReplanification(String toReplanification) {
        this.toReplanification = toReplanification;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
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

    public Date getDateDebutTraitement() {
        return this.dateDebutTraitement;
    }

    public void setDateDebutTraitement(Date dateDebutTraitement) {
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

    public Operator getOperator() {
        return this.operator;
    }

    public void setOperator(Operator operator) {
        this.operator = operator;
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

    public Date getSubmissionDate() {
        return this.submissionDate;
    }

    public void setSubmissionDate(Date submissionDate) {
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

    public Departement getDepartement() {
        return this.departement;
    }

    public void setDepartement(Departement departement) {
        this.departement = departement;
    }

    public Technicien getTechnicien() {
        return this.technicien;
    }

    public void setTechnicien(Technicien technicien) {
        this.technicien = technicien;
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

    public Date getDatePremierAppel() {
        return this.datePremierAppel;
    }

    public void setDatePremierAppel(Date datePremierAppel) {
        this.datePremierAppel = datePremierAppel;
    }

    public Date getDateDeuxiemeAppel() {
        return this.dateDeuxiemeAppel;
    }

    public void setDateDeuxiemeAppel(Date dateDeuxiemeAppel) {
        this.dateDeuxiemeAppel = dateDeuxiemeAppel;
    }

    public Date getDateTroisiemeAppel() {
        return this.dateTroisiemeAppel;
    }

    public void setDateTroisiemeAppel(Date dateTroisiemeAppel) {
        this.dateTroisiemeAppel = dateTroisiemeAppel;
    }

    public Date getDatePriseRdv() {
        return this.datePriseRdv;
    }

    public void setDatePriseRdv(Date datePriseRdv) {
        this.datePriseRdv = datePriseRdv;
    }

    public Date getDateRdv() {
        return this.dateRdv;
    }

    public void setDateRdv(Date dateRdv) {
        this.dateRdv = dateRdv;
    }

    public Date getDateOuverture() {
        return this.dateOuverture;
    }

    public void setDateOuverture(Date dateOuverture) {
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

    public TemplateEmailPlanification getTemplateEmailPlanification() {
        return this.templateEmailPlanification;
    }

    public void setTemplateEmailPlanification(TemplateEmailPlanification templateEmailPlanification) {
        this.templateEmailPlanification = templateEmailPlanification;
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

    public Date getDateEnvoiPlanification() {
        return this.dateEnvoiPlanification;
    }

    public void setDateEnvoiPlanification(Date dateEnvoiPlanification) {
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

    public Date getDateAppelReplanification() {
        return this.dateAppelReplanification;
    }

    public void setDateAppelReplanification(Date dateAppelReplanification) {
        this.dateAppelReplanification = dateAppelReplanification;
    }



    public TemplateEmailReplanification getTemplateEmailReplanification() {
        return this.templateEmailReplanification;
    }

    public void setTemplateEmailReplanification(TemplateEmailReplanification templateEmailReplanification) {
        this.templateEmailReplanification = templateEmailReplanification;
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

    public String getFromReplanification() {
        return this.fromReplanification;
    }

    public void setFromReplanification(String fromReplanification) {
        this.fromReplanification = fromReplanification;
    }

    public void setCorpsReplanification(String corpsReplanification) {
        this.corpsReplanification = corpsReplanification;
    }

    public Boolean getEnvoyeReplanification() {
        return this.envoyeReplanification;
    }

    public void setEnvoyeReplanification(Boolean envoyeReplanification) {
        this.envoyeReplanification = envoyeReplanification;
    }

    public Date getDateEnvoiReplanification() {
        return this.dateEnvoiReplanification;
    }

    public void setDateEnvoiReplanification(Date dateEnvoiReplanification) {
        this.dateEnvoiReplanification = dateEnvoiReplanification;
    }

    public TemplateEmailRefus getTemplateEmailRefus() {
        return this.templateEmailRefus;
    }

    public void setTemplateEmailRefus(TemplateEmailRefus templateEmailRefus) {
        this.templateEmailRefus = templateEmailRefus;
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

    public Date getDateEnvoiRefus() {
        return this.dateEnvoiRefus;
    }

    public void setDateEnvoiRefus(Date dateEnvoiRefus) {
        this.dateEnvoiRefus = dateEnvoiRefus;
    }

    public TemplateEmailMauvaisContact getTemplateEmailMauvaisContact() {
        return this.templateEmailMauvaisContact;
    }

    public void setTemplateEmailMauvaisContact(TemplateEmailMauvaisContact templateEmailMauvaisContact) {
        this.templateEmailMauvaisContact = templateEmailMauvaisContact;
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

    public Date getDateEnvoiMauvaisContact() {
        return this.dateEnvoiMauvaisContact;
    }

    public void setDateEnvoiMauvaisContact(Date dateEnvoiMauvaisContact) {
        this.dateEnvoiMauvaisContact = dateEnvoiMauvaisContact;
    }

    public TemplateEmailConfirmationClient getTemplateEmailConfirmationClient() {
        return this.templateEmailConfirmationClient;
    }

    public void setTemplateEmailConfirmationClient(TemplateEmailConfirmationClient templateEmailConfirmationClient) {
        this.templateEmailConfirmationClient = templateEmailConfirmationClient;
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

    public Date getDateEnvoiConfirmationClient() {
        return this.dateEnvoiConfirmationClient;
    }

    public void setDateEnvoiConfirmationClient(Date dateEnvoiConfirmationClient) {
        this.dateEnvoiConfirmationClient = dateEnvoiConfirmationClient;
    }

    public TemplateEmailCri getTemplateEmailCri() {
        return this.templateEmailCri;
    }

    public void setTemplateEmailCri(TemplateEmailCri templateEmailCri) {
        this.templateEmailCri = templateEmailCri;
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

    public Date getDateEnvoiCri() {
        return this.dateEnvoiCri;
    }

    public void setDateEnvoiCri(Date dateEnvoiCri) {
        this.dateEnvoiCri = dateEnvoiCri;
    }

    public TemplateEmailFtl getTemplateEmailFtl() {
        return this.templateEmailFtl;
    }

    public void setTemplateEmailFtl(TemplateEmailFtl templateEmailFtl) {
        this.templateEmailFtl = templateEmailFtl;
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

    public Date getDateEnvoiFtl() {
        return this.dateEnvoiFtl;
    }

    public void setDateEnvoiFtl(Date dateEnvoiFtl) {
        this.dateEnvoiFtl = dateEnvoiFtl;
    }

    public Date getDateInterventionTechniqueDebut() {
        return this.dateInterventionTechniqueDebut;
    }

    public void setDateInterventionTechniqueDebut(Date dateInterventionTechniqueDebut) {
        this.dateInterventionTechniqueDebut = dateInterventionTechniqueDebut;
    }

    public Date getDateInterventionTechniqueFin() {
        return this.dateInterventionTechniqueFin;
    }

    public void setDateInterventionTechniqueFin(Date dateInterventionTechniqueFin) {
        this.dateInterventionTechniqueFin = dateInterventionTechniqueFin;
    }

    public TemplateEmailClientInjoinable getTemplateEmailClientInjoinable() {
        return this.templateEmailClientInjoinable;
    }

    public void setTemplateEmailClientInjoinable(TemplateEmailClientInjoinable templateEmailClientInjoinable) {
        this.templateEmailClientInjoinable = templateEmailClientInjoinable;
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

    public Date getDateEnvoiClientInjoinable() {
        return this.dateEnvoiClientInjoinable;
    }

    public void setDateEnvoiClientInjoinable(Date dateEnvoiClientInjoinable) {
        this.dateEnvoiClientInjoinable = dateEnvoiClientInjoinable;
    }

    public TemplateEmailClientInjoinableKosc getTemplateEmailClientInjoinableKosc() {
        return this.templateEmailClientInjoinableKosc;
    }

    public void setTemplateEmailClientInjoinableKosc(TemplateEmailClientInjoinableKosc templateEmailClientInjoinableKosc) {
        this.templateEmailClientInjoinableKosc = templateEmailClientInjoinableKosc;
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

    public Date getDateEnvoiClientInjoinableKosc() {
        return this.dateEnvoiClientInjoinableKosc;
    }

    public void setDateEnvoiClientInjoinableKosc(Date dateEnvoiClientInjoinableKosc) {
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

    public EtatDemandeKosc getEtatDemandeKosc() {
        return this.etatDemandeKosc;
    }

    public void setEtatDemandeKosc(EtatDemandeKosc etatDemandeKosc) {
        this.etatDemandeKosc = etatDemandeKosc;
    }

    public TemplateEmailCloture getTemplateEmailCloture() {
        return this.templateEmailCloture;
    }

    public void setTemplateEmailCloture(TemplateEmailCloture templateEmailCloture) {
        this.templateEmailCloture = templateEmailCloture;
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

    public Date getDateEnvoiCloture() {
        return this.dateEnvoiCloture;
    }

    public void setDateEnvoiCloture(Date dateEnvoiCloture) {
        this.dateEnvoiCloture = dateEnvoiCloture;
    }

    public String getEmailCloturePieceJoints() {
        return this.emailCloturePieceJoints;
    }

    public void setEmailCloturePieceJoints(String emailCloturePieceJoints) {
        this.emailCloturePieceJoints = emailCloturePieceJoints;
    }

    public TemplateSuivi getTemplateSuivi() {
        return this.templateSuivi;
    }

    public void setTemplateSuivi(TemplateSuivi templateSuivi) {
        this.templateSuivi = templateSuivi;
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

    public Date getDateEnvoiSuivi() {
        return this.dateEnvoiSuivi;
    }

    public void setDateEnvoiSuivi(Date dateEnvoiSuivi) {
        this.dateEnvoiSuivi = dateEnvoiSuivi;
    }

    public CauseKoOk getCauseKoOk() {
        return this.causeKoOk;
    }

    public void setCauseKoOk(CauseKoOk causeKoOk) {
        this.causeKoOk = causeKoOk;
    }

    public SourceReplanification getSourceReplanification() {
        return this.sourceReplanification;
    }

    public void setSourceReplanification(SourceReplanification sourceReplanification) {
        this.sourceReplanification = sourceReplanification;
    }

    public Date getDateErdv() {
        return this.dateErdv;
    }

    public void setDateErdv(Date dateErdv) {
        this.dateErdv = dateErdv;
    }

    public String getReferenceCommandePriseInterneOC() {
        return this.referenceCommandePriseInterneOC;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OrdreKosc ordreKosc = (OrdreKosc) o;
        return id != null && id.equals(ordreKosc.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    public void setDateDernierAppel(Date dateDernierAppel) {
        this.dateDernierAppel = dateDernierAppel;
    }

    public Date getDateDernierAppel() {
        return dateDernierAppel;
    }

    public void setNumeroDernierAppel(long numeroDernierAppel) {
        this.numeroDernierAppel = numeroDernierAppel;
    }

    public Long getNumeroDernierAppel() {
        return numeroDernierAppel;
    }

    public Long getNbrHeureDateSubmissionAndNow() {
        return nbrHeureDateSubmissionAndNow;
    }

    public void setNbrHeureDateSubmissionAndNow(Long nbrHeureDateSubmissionAndNow) {
        this.nbrHeureDateSubmissionAndNow = nbrHeureDateSubmissionAndNow;
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

    public Date getDateEnvoiAutre() {
        return dateEnvoiAutre;
    }

    public void setDateEnvoiAutre(Date dateEnvoiAutre) {
        this.dateEnvoiAutre = dateEnvoiAutre;
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

    public Date getDateEnvoiReportDemandeManeoClientInjoignable() {
        return dateEnvoiReportDemandeManeoClientInjoignable;
    }

    public void setDateEnvoiReportDemandeManeoClientInjoignable(Date dateEnvoiReportDemandeManeoClientInjoignable) {
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

    public Date getDateEnvoiReportDemandeManeoClientJoignableAccepte() {
        return dateEnvoiReportDemandeManeoClientJoignableAccepte;
    }

    public void setDateEnvoiReportDemandeManeoClientJoignableAccepte(Date dateEnvoiReportDemandeManeoClientJoignableAccepte) {
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

    public Date getDateEnvoiReportDemandeManeoClientJoignableRefus() {
        return dateEnvoiReportDemandeManeoClientJoignableRefus;
    }

    public void setDateEnvoiReportDemandeManeoClientJoignableRefus(Date dateEnvoiReportDemandeManeoClientJoignableRefus) {
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

    public Date getDateEnvoiReportDemandeClientClientInjoignable() {
        return dateEnvoiReportDemandeClientClientInjoignable;
    }

    public void setDateEnvoiReportDemandeClientClientInjoignable(Date dateEnvoiReportDemandeClientClientInjoignable) {
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

    public Date getDateEnvoiReportDemandeClientClientJoignable() {
        return dateEnvoiReportDemandeClientClientJoignable;
    }

    public void setDateEnvoiReportDemandeClientClientJoignable(Date dateEnvoiReportDemandeClientClientJoignable) {
        this.dateEnvoiReportDemandeClientClientJoignable = dateEnvoiReportDemandeClientClientJoignable;
    }

    public Date getDateCri() {
        return dateCri;
    }

    public void setDateCri(Date dateCri) {
        this.dateCri = dateCri;
    }
}

