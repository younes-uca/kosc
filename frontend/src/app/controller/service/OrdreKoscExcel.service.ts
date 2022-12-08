import {Injectable} from '@angular/core';
import * as XLSX from "xlsx";
import {OrdreKoscVo} from "../model/OrdreKosc.model";
import {EtatDemandeKoscVo} from "../model/EtatDemandeKosc.model";
import {DepartementVo} from "../model/Departement.model";
import {DateUtils} from "../../utils/DateUtils";
import {OrdreKoscService} from 'src/app/controller/service/OrdreKosc.service';
import {MessageService} from "primeng/api";
import {Observable} from "rxjs";
import {TechnicienVo} from "../model/Technicien.model";
import {OperatorVo} from "../model/Operator.model";




@Injectable({
    providedIn: 'root'
})
export class OrdreKoscExcelService {
    showSpinner = false;
    constructor(private ordreKoscService: OrdreKoscService, private messageService: MessageService) {
    }

    public importAll(event: any) {
        this.readDataObservable(event).subscribe(
            next => {
                this.importAllExc(next);
            }
        );
    }

    public importerDataBase(event: any):Observable<any> {
        // this.showSpinner = true;

        return new Observable(sub => {
            /* wire up file reader */
            const target: DataTransfer = <DataTransfer>(event.target);
            if (target.files.length !== 1) {
                throw new Error('Cannot use multiple files');
            }
            const reader: FileReader = new FileReader();
            reader.readAsBinaryString(target.files[0]);
            reader.onload = (e: any) => {
                /* create workbook */
                const binarystr: string = e.target.result;
                const wb: XLSX.WorkBook = XLSX.read(binarystr, {type: 'binary'});

                /* selected the first sheet */
                const wsname: string = wb.SheetNames[0];
                const ws: XLSX.WorkSheet = wb.Sheets[wsname];

                /* save data */
                const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}

                let koscOrdresWork = new Array<OrdreKoscVo>();
                for (let i = 0; i < data.length; i++) {
                    let myOrdreKoscWork = this.constructDataBase(data, i);
                    myOrdreKoscWork.type ='kosc';
                    koscOrdresWork.push(myOrdreKoscWork);
                }
                this.ordreKoscService.ordreKoscs = koscOrdresWork;

                this.ordreKoscService.importerDataBase(this.ordreKoscService.ordreKoscs).subscribe(
                    response => {
                        if (response.length == 0) {
                            sub.next();
                            this.messageService.add({
                                severity: 'success',
                                summary: 'Succès',
                                detail: 'La Base De Données importé avec Succès',
                                life: 3000
                            });
                            this.ordreKoscService.searchOrdreKosc.referenceWorkOrder = koscOrdresWork[0].referenceWorkOrder;
                            // this.searchRequest();
                        } else {
                            sub.error();

                            this.messageService.add({
                                severity: 'error',
                                summary: 'erreur',
                                detail: 'problème d\'importation : reference existe déjà'
                            });
                        }
                    },
                    error => {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'erreur',
                            detail: 'problème d\'importation'
                        });
                    }
                );
            }
        })


    }

    private readDataObservable(event: any): Observable<Array<OrdreKoscVo>> {
        return new Observable(subscriber => {
            /* wire up file reader */
            const target: DataTransfer = <DataTransfer>(event.target);
            let koscOrdrers = new Array<OrdreKoscVo>();
            let count = 0;
            let sum = event.target.files.length;

            for (let i = 0; i < event.target.files.length; i++) {
                const reader: FileReader = new FileReader();

                reader.readAsBinaryString(target.files[i]);
                reader.onload = (e: any) => {
                    /* create workbook */
                    const binarystr: string = e.target.result;
                    const wb: XLSX.WorkBook = XLSX.read(binarystr, {type: 'binary'});

                    /* selected the first sheet */
                    const wsname: string = wb.SheetNames[0];
                    const ws: XLSX.WorkSheet = wb.Sheets[wsname];

                    /* save data */
                    const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}

                    for (let i = 0; i < data.length; i++) {
                        if (this.isFtl(data[i])) {
                            let myCosk = this.constructFtl(data, i);
                            myCosk.type = 'ftl';
                            koscOrdrers.push(myCosk);
                        } else if (this.isKosc(data[i])) {
                            let myCosk = this.constructWorkOrder(data, i);
                            myCosk.type = 'kosc';
                            koscOrdrers.push(myCosk);
                        } else if (this.isErdv(data[i])) {
                            let myCosk = this.constructErdv(data, i);
                            myCosk.type = 'erdv';
                            koscOrdrers.push(myCosk);
                        }
                    }


                }
                reader.onloadend = function (event){
                    if(++count === sum){
                        subscriber.next(koscOrdrers);  // <-- emit notification
                        subscriber.complete();
                    }
                }
            }

        });
    }

    private importAllExc(koscOrdrers: OrdreKoscVo[]) {
        this.ordreKoscService.importerAll(koscOrdrers).subscribe(
            response => {
                if (response.length == 0) {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Kosc Order importé avec Succès',
                        life: 3000
                    });
                } else {
                    this.ordreKoscService.ordreKoscs = response;
                    let message = this.constructMessage(response);
                    this.messageService.add({
                        severity: 'error',
                        summary: 'erreur',
                        detail: ''+message
                    });
                }
            },
            error => {
                this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'importation'});
            }
        );
    }

    private readExcel(event: any) {

        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(event.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        const reader: FileReader = new FileReader();
        reader.readAsBinaryString(target.files[0]);
        reader.onload = (e: any) => {
            /* create workbook */
            const binarystr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(binarystr, {type: 'binary'});

            /* selected the first sheet */
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];

            /* save data */
            const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
            let koscOrders = new Array<OrdreKoscVo>();
            for (let i = 1; i < data.length; i++) {
                let myOrdreKosc = new OrdreKoscVo();
                myOrdreKosc.reference = data[i]['kosc_order_ref'];
                myOrdreKosc.referenceWorkOrder = data[i]['work_order_ref'];
                //save technicien
                if( myOrdreKosc.technicienVo==null){
                    myOrdreKosc.technicienVo=new TechnicienVo();
                }
                myOrdreKosc.technicienVo.identifiant=data[i]['tech_reference'];

                //save Operateur
                if( myOrdreKosc.operatorVo==null){
                    myOrdreKosc.operatorVo=new OperatorVo();
                }
                myOrdreKosc.operatorVo.reference=data[i]['opt_reference'];

                //myOrdreKosc.codeDecharge = null;
                myOrdreKosc.supplierServiceCode = data[i]['supplier_service_code'];
                myOrdreKosc.dateDebutTraitement = null;
                myOrdreKosc.endCustumorName = null;
                myOrdreKosc.endCustumorSiret = data[i]['siret'];
                myOrdreKosc.endCustumorFirstName = data[i]['first_name'];
                myOrdreKosc.endCustumorLastName = data[i]['last_name'];
                myOrdreKosc.endCustumorZipcode = data[i]['zip_code'];///////
                myOrdreKosc.endCustumorStreetName = data[i]['street_name'];///////////
                myOrdreKosc.endCustumorStreetNumber = data[i]['street_number'];/////////
                myOrdreKosc.endCustumorCity = data[i]['city'];/////////
                //myOrdreKosc.endCustumorBuilding = null;
                myOrdreKosc.endCustumorStairs = data[i]['stairs'];
                myOrdreKosc.endCustumorFloor = data[i]['floor'];
                myOrdreKosc.endCustumorContactFirstName = data[i]['end_customer_contact_first_name'];
                myOrdreKosc.endCustumorContactLastName = data[i]['end_customer_contact_last_name'];
                myOrdreKosc.endCustumorContactPhone = data[i]['end_customer_contact_phone'];
                myOrdreKosc.endCustumorContactCellPhone = data[i]['end_customer_contact_cellphone'];
                myOrdreKosc.endCustumorContactEmail = data[i]['end_customer_contact_email'];
                myOrdreKosc.company = data[i]['company_name'];//////////////////////
                //myOrdreKosc.referenDossier = null;
                myOrdreKosc.dateAppelReplanification = this.convertDate(data[i]['RePlanification']);
                myOrdreKosc.submissionDate = this.convertDate(data[i]['submission_date']);
                myOrdreKosc.datePremierAppel = this.convertDate(data[i]['1er_appel']);
                myOrdreKosc.dateDeuxiemeAppel = this.convertDate(data[i]['2eme_appel']);
                myOrdreKosc.dateTroisiemeAppel = this.convertDate(data[i]['3eme_appel']);
                myOrdreKosc.datePriseRdv = null;
                myOrdreKosc.dateRdv = null;
                myOrdreKosc.referenceCommandePriseInterneOC = data[i]['ReferenceCommandePriseInterneOC'];

                //myOrdreKosc.dateInterventionTechnique =new Date(Math.round((data[i]['Date_intervention_Technicien'] - 25569)*86400*1000));
                //myOrdreKosc.dateOuverture = null;
                //myOrdreKosc.envoiMailClient = data[i]['envoi_mail_client'];
                //myOrdreKosc.envoiMailKosc = data[i]['envoi_mail_KOSC'];
                /*myOrdreKosc.coordonnePboY = data[i]['CoordonneePBOY'];
                myOrdreKosc.hauteurPbo = data[i]['HauteurPBO'];*/
                /*myOrdreKosc.typeMaterielPbo = data[i]['TypeMaterielPBO'];*/
                /*myOrdreKosc.typePbo = data[i]['TypePBO'];*/
                /*myOrdreKosc.conditionSyndics = data[i]['ConditionsSyndic'];*/
                /*myOrdreKosc.typeRacordementPboPto = data[i]['TypeRaccoPBPTO'];*/
                /*myOrdreKosc.autreInfosPboPto = data[i]['AutresInfosPBOPTO'];*/
                /*myOrdreKosc.codeAccesImmeuble = data[i]['CodeAccesImmeuble'];*/
                /*myOrdreKosc.contacteImmeuble = data[i]['ContactsImmeuble'];*/
                /*myOrdreKosc.pmaAccessible = data[i]['Pmaccessible'];*/
                /*myOrdreKosc.infoObtentionCle = data[i]['InfoObtentionCle'];*/
                /*myOrdreKosc.contactsSyndic = data[i]['ContactsSyndic'];*/
                /*myOrdreKosc.racordementLong = this.convertBoleen(data[i]['RaccordementLong']) ;*/
                /*myOrdreKosc.oc1 = data[i]['OC_1'];
                myOrdreKosc.nomModulePm1 = data[i]['NomModulePm_NÂ°1'];
                myOrdreKosc.positionModulePm1 = data[i]['PositionModulePm_NÂ°1'];
                myOrdreKosc.referenceCableModulePm1 = data[i]['ReferenceCableModulePm_NÂ°1'];
                myOrdreKosc.referenceTubeModulePm1 = null;
                myOrdreKosc.informationFibreModulePm1 = data[i]['InformationFibreModulePm_NÂ°1'];
                myOrdreKosc.referenceCablePbo1 = data[i]['ReferenceCablePBO_NÂ°1'];
                myOrdreKosc.informationTubePbo1 = data[i]['InformationTubePBO_NÂ°1'];
                myOrdreKosc.informationFibrePbo1 = data[i]['InformationFibrePBO_NÂ°1'];
                myOrdreKosc.connecteurPriseNumero1 = data[i]['ConnecteurPriseNumero_NÂ°1'];
                myOrdreKosc.connecteurPriseCouleur1 = data[i]['ConnecteurPriseCouleur_NÂ°1'];
                myOrdreKosc.reserve1 = data[i]['Reserve1'];
                myOrdreKosc.oc2 = data[i]['OC_2'];
                myOrdreKosc.nomModulePm2 = data[i]['NomModulePm_NÂ°2'];
                myOrdreKosc.positionModulePm2 = data[i]['PositionModulePm_NÂ°2'];
                myOrdreKosc.referenceCableModulePm2 = data[i]['ReferenceCableModulePm_NÂ°2'];
                myOrdreKosc.referenceTubeModulePm2 = null;
                myOrdreKosc.informationFibreModulePm2 = data[i]['InformationFibreModulePm_NÂ°2'];
                myOrdreKosc.referenceCablePbo2 = data[i]['ReferenceCablePBO_NÂ°2'];
                myOrdreKosc.informationTubePbo2 = data[i]['InformationTubePBO_NÂ°2'];
                myOrdreKosc.informationFibrePbo2 = data[i]['InformationFibrePBO_NÂ°2'];
                myOrdreKosc.connecteurPriseNumero2 = data[i]['ConnecteurPriseNumero_NÂ°2'];
                myOrdreKosc.connecteurPriseCouleur2 = data[i]['ConnecteurPriseCouleur_NÂ°2'];
                myOrdreKosc.reserve2 = data[i]['Reserve2'];
                myOrdreKosc.oc3 = data[i]['OC_3'];
                myOrdreKosc.nomModulePm3 = data[i]['NomModulePm_NÂ°3'];
                myOrdreKosc.positionModulePm3 = data[i]['PositionModulePm_NÂ°3'];
                myOrdreKosc.referenceCableModulePm3 = data[i]['ReferenceCableModulePm_NÂ°3'];
                myOrdreKosc.referenceTubeModulePm3 = null;
                myOrdreKosc.informationFibreModulePm3 = data[i]['InformationFibreModulePm_NÂ°3'];
                myOrdreKosc.referenceCablePbo3 = data[i]['ReferenceCablePBO_NÂ°3'];
                myOrdreKosc.informationTubePbo3 = data[i]['InformationTubePBO_NÂ°3'];
                myOrdreKosc.informationFibrePbo3 = data[i]['InformationFibrePBO_NÂ°3'];
                myOrdreKosc.connecteurPriseNumero3 = data[i]['ConnecteurPriseNumero_NÂ°3'];
                myOrdreKosc.connecteurPriseCouleur3 = data[i]['ConnecteurPriseCouleur_NÂ°3'];
                myOrdreKosc.reserve3 = data[i]['Reserve3'];
                myOrdreKosc.oc4 = data[i]['OC_4'];
                myOrdreKosc.nomModulePm4 = data[i]['NomModulePm_NÂ°4'];
                myOrdreKosc.positionModulePm4 = data[i]['PositionModulePm_NÂ°4'];
                myOrdreKosc.referenceCableModulePm4 = data[i]['ReferenceCableModulePm_NÂ°4'];
                myOrdreKosc.referenceTubeModulePm4 = null;
                myOrdreKosc.informationFibreModulePm4 = data[i]['InformationFibreModulePm_NÂ°4'];
                myOrdreKosc.referenceCablePbo4 = data[i]['ReferenceCablePBO_NÂ°4'];
                myOrdreKosc.informationTubePbo4 = data[i]['InformationTubePBO_NÂ°4'];
                myOrdreKosc.informationFibrePbo4 = data[i]['InformationFibrePBO_NÂ°4'];
                myOrdreKosc.connecteurPriseNumero4 = data[i]['ConnecteurPriseNumero_NÂ°4'];
                myOrdreKosc.connecteurPriseCouleur4 = data[i]['ConnecteurPriseCouleur_NÂ°4'];
                myOrdreKosc.reserve4 = data[i]['Reserve4']; */
                // myOrdreKosc.dateEnvoiCri = null;
                //myOrdreKosc.pboReel = null;
                //myOrdreKosc.numeroSerieOnt = null;
                myOrdreKosc.workOrderType = data[i]['work_order_type'];
                //myOrdreKosc.product = null; ///////
                myOrdreKosc.productCode = data[i]['product_code'];
                myOrdreKosc.productLabel = data[i]['product_label'];
                myOrdreKosc.provider = data[i]['provider'];
                myOrdreKosc.providerFileType = data[i]['provider_file_type'];
                //myOrdreKosc.spliter = null;
                myOrdreKosc.existingOtp = data[i]['existing_otp'];
                myOrdreKosc.profile = data[i]['profile'];
                //myOrdreKosc.comment = data[i]['operator_comment'];///////
                myOrdreKosc.providerSlId = data[i]['provider_slid'];
                /*myOrdreKosc.referencePrise = data[i]['ReferencePrise'];*/
                /*myOrdreKosc.referencePrestationPrise = data[i]['ReferencePrestationPrise'];*/
                //myOrdreKosc.dateInterventionTechniqueDebut = null;////////
                //myOrdreKosc.dateInterventionTechniqueFin = null;//////////
                //myOrdreKosc.providerProduct = data[i]['provider_product'];
                /*myOrdreKosc.referencePm = data[i]['Reference Pm'];*/
                /*myOrdreKosc.referencePmTechnique = data[i]['ReferencePmTechnique'];*/
                /*myOrdreKosc.localisationPm = data[i]['LocalisationPm'];*/
                /*myOrdreKosc.referencePbo = data[i]['ReferencePBO'];*/
                /*myOrdreKosc.localisationPbo = data[i]['LocalisationPBO'];*/
                /*myOrdreKosc.localeIpm = data[i]['CodeLocalPM'];//////////////////////////*/
                //myOrdreKosc.objetClient = null;
                //myOrdreKosc.corpsClient = null;
                //myOrdreKosc.envoyeClient = null;
                //myOrdreKosc.dateEnvoiClient = null;
                //myOrdreKosc.objetKosc = null;
                //myOrdreKosc.corpsKosc = null;
                //myOrdreKosc.envoyeKosc = null;
                //myOrdreKosc.dateEnvoiKosc = null;
                /*myOrdreKosc.objetPlanification = null;
                myOrdreKosc.corpsPlanification = null;
                myOrdreKosc.envoyePlanification = null;
                myOrdreKosc.dateEnvoiPlanification = null;
                myOrdreKosc.objetReplanification = null;
                myOrdreKosc.corpsReplanification = null;
                myOrdreKosc.envoyeReplanification = null;
                myOrdreKosc.dateEnvoiReplanification = null;
                myOrdreKosc.objetReport = null;
                myOrdreKosc.corpsReport = null;
                myOrdreKosc.envoyeReport = null;
                myOrdreKosc.dateEnvoiReport = null;
                myOrdreKosc.commentaireTechnicien = null;
                myOrdreKosc.commentaireClient = null;
                myOrdreKosc.commantaireCloture = null;
                myOrdreKosc.objetCloture = null;
                myOrdreKosc.corpsCloture = null;
                myOrdreKosc.envoyeCloture = null;
                myOrdreKosc.dateEnvoiCloture = null;
                myOrdreKosc.emailCloturePieceJoints = null;
                myOrdreKosc.objetSuivi = null;
                myOrdreKosc.corpsSuivi = null;
                myOrdreKosc.envoyeSuivi = null;
                myOrdreKosc.dateEnvoiSuivi = null;*/


                koscOrders.push(myOrdreKosc);
            }
            // let objet = Object.assign(new OrdreKoscVo, data);
            this.ordreKoscService.ordreKoscs = koscOrders;


        };
    }

    private readWorkOder(event: any) {
        this.showSpinner = true;

        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(event.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        const reader: FileReader = new FileReader();
        reader.readAsBinaryString(target.files[0]);
        reader.onload = (e: any) => {
            /* create workbook */
            const binarystr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(binarystr, {type: 'binary'});

            /* selected the first sheet */
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];

            /* save data */
            const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}

            let koscOrdresWork = new Array<OrdreKoscVo>();
            for (let i = 0; i < data.length; i++) {
                let myOrdreKoscWork = this.constructWorkOrder(data, i);
                koscOrdresWork.push(myOrdreKoscWork);
            }
            this.ordreKoscService.ordreKoscs = koscOrdresWork;

            this.ordreKoscService.importerWordOrder(this.ordreKoscService.ordreKoscs).subscribe(
                response => {
                    if (response.length == 0) {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Succès',
                            detail: 'Kosc Order importé avec Succès',
                            life: 3000
                        });
                        this.ordreKoscService.searchOrdreKosc.referenceWorkOrder = koscOrdresWork[0].referenceWorkOrder;
                        // this.searchRequest();
                    } else {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'erreur',
                            detail: 'problème d\'importation : reference existe déjà'
                        });
                    }
                },
                error => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'erreur',
                        detail: 'problème d\'importation'
                    });
                }
            );
        }
        this.showSpinner = false;

    }

    private readFtel(event: any) {

        this.showSpinner = true;


        let resultat = null;

        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(event.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        const reader: FileReader = new FileReader();
        reader.readAsBinaryString(target.files[0]);
        reader.onload = (e: any) => {
            /* create workbook */
            const binarystr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(binarystr, {type: 'binary'});

            /* selected the first sheet */
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];

            /* save data */
            const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}

            let koscOrdresFtel = new Array<OrdreKoscVo>();
            for (let i = 0; i < data.length; i++) {
                let myOrdreKoscFtel = this.constructFtl(data, i);
                koscOrdresFtel.push(myOrdreKoscFtel);
            }

            this.ordreKoscService.importerFtel(koscOrdresFtel).subscribe(
                response => {
                    if (response.length == 0) {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Succès',
                            detail: 'FTL importé avec Succès',
                            life: 3000
                        });
                        this.ordreKoscService.searchOrdreKosc.reference = koscOrdresFtel[0].reference;
                        // this.searchRequest();
                    } else {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'erreur',
                            detail: 'problème d\'importation : reference n\'existe pas'
                        });
                    }
                },
                error => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'erreur',
                        detail: 'problème d\'importation'
                    });
                }
            );
        };
        this.showSpinner = false;

    }

    private readERdv(event: any) {

        this.showSpinner = true;

        /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(event.target);
        if (target.files.length !== 1) {
            throw new Error('Cannot use multiple files');
        }
        const reader: FileReader = new FileReader();
        reader.readAsBinaryString(target.files[0]);
        reader.onload = (e: any) => {
            /* create workbook */
            const binarystr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(binarystr, {type: 'binary'});

            /* selected the first sheet */
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];

            /* save data */
            const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}

            let koscOrdresERdv = new Array<OrdreKoscVo>();
            for (let i = 0; i < data.length; i++) {
                let myOrdreKoscERdv = this.constructErdv(data, i);
                koscOrdresERdv.push(myOrdreKoscERdv);
            }
            this.ordreKoscService.ordreKoscs = koscOrdresERdv;
            this.ordreKoscService.importerERdv(this.ordreKoscService.ordreKoscs).subscribe(
                response => {
                    if (response.length == 0) {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Succès',
                            detail: 'E-Rdv importé avec Succès',
                            life: 3000
                        });
                        this.ordreKoscService.searchOrdreKosc.reference = koscOrdresERdv[0].reference;
                        // this.searchRequest();
                    } else {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'erreur',
                            detail: 'problème d\'importation : reference existe déjà'
                        });
                    }
                },
                error => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'erreur',
                        detail: 'problème d\'importation'
                    });
                }
            );
        };
        this.showSpinner = false;
    }

    private constructErdv(data: any, i: number) {
        let myOrdreKoscERdv = new OrdreKoscVo();
        if (myOrdreKoscERdv.etatDemandeKoscVo == null){
            myOrdreKoscERdv.etatDemandeKoscVo = new EtatDemandeKoscVo();
        }
        myOrdreKoscERdv.etatDemandeKoscVo.code = 'initialisation-erdv';
        myOrdreKoscERdv.reference = data[i]['kosc_order_ref'];
        myOrdreKoscERdv.referenceWorkOrder = data[i]['work_order_ref'];
        myOrdreKoscERdv.workOrderType = data[i]['work_order_type'];
        myOrdreKoscERdv.supplierServiceCode = data[i]['supplier_service_code'];
        myOrdreKoscERdv.submissionDate = data[i]['submission_date'];
        myOrdreKoscERdv.productCode = data[i]['product_code'];
        myOrdreKoscERdv.productLabel = data[i]['product_label'];
        myOrdreKoscERdv.provider = data[i]['provider'];
        myOrdreKoscERdv.providerProduct = data[i]['provider_product'];
        myOrdreKoscERdv.providerFileType = data[i]['provider_file_type'];
        myOrdreKoscERdv.existingOtp = data[i]['existing_otp'];
        myOrdreKoscERdv.profile = data[i]['profile'];
        myOrdreKoscERdv.company = data[i]['company_name'];
        myOrdreKoscERdv.endCustumorSiret = data[i]['siret'];
        myOrdreKoscERdv.endCustumorFirstName = data[i]['first_name'];
        myOrdreKoscERdv.endCustumorLastName = data[i]['last_name'];
        myOrdreKoscERdv.endCustumorStreetNumber = data[i]['street_number'];
        myOrdreKoscERdv.endCustumorStreetName = data[i]['street_name'];
        myOrdreKoscERdv.endCustumorZipcode = data[i]['zip_code'];
        myOrdreKoscERdv.endCustumorCity = data[i]['city'];
        myOrdreKoscERdv.endCustumorBuilding = data[i]['building_name'];
        myOrdreKoscERdv.endCustumorStairs = data[i]['stairs'];
        myOrdreKoscERdv.endCustumorFloor = data[i]['floor'];
        myOrdreKoscERdv.endCustumorContactFirstName = data[i]['end_customer_contact_first_name'];
        myOrdreKoscERdv.endCustumorContactLastName = data[i]['end_customer_contact_last_name'];
        myOrdreKoscERdv.endCustumorContactPhone = data[i]['end_customer_contact_phone'];
        myOrdreKoscERdv.endCustumorContactCellPhone = data[i]['end_customer_contact_cellphone'];
        myOrdreKoscERdv.endCustumorContactEmail = data[i]['end_customer_contact_email'];
        myOrdreKoscERdv.providerSlId = data[i]['provider_slid'];
        myOrdreKoscERdv.dateInterventionTechniqueDebut = this.convertDate(data[i]['intervention_start_datetime']);
        myOrdreKoscERdv.dateInterventionTechniqueFin =this.convertDate(data[i]['intervention_end_datetime']);
        // myOrdreKoscERdv.dateErdv = this.convertDate(data[i]['date_E_Rdv']);

        return myOrdreKoscERdv;

    }

    private constructFtl(data: any, i: number) {
        let myOrdreKoscFtel = new OrdreKoscVo();
        if (myOrdreKoscFtel.etatDemandeKoscVo == null){
            myOrdreKoscFtel.etatDemandeKoscVo = new EtatDemandeKoscVo();
        }
        //save technicien
        if( myOrdreKoscFtel.technicienVo==null){
            myOrdreKoscFtel.technicienVo=new TechnicienVo();
        }
        myOrdreKoscFtel.technicienVo.identifiant=data[i]['tech_reference'];

        //save Operateur
        if( myOrdreKoscFtel.operatorVo==null){
            myOrdreKoscFtel.operatorVo=new OperatorVo();
        }
        myOrdreKoscFtel.operatorVo.reference=data[i]['opt_reference'];

        myOrdreKoscFtel.etatDemandeKoscVo.code = data[i]['EtatCrCommandePrise'].toLowerCase();
        myOrdreKoscFtel.referenceCommandePriseInterneOC = data[i]['ReferenceCommandePriseInterneOC'];
        myOrdreKoscFtel.referencePrise = data[i]['ReferencePrise'];
        myOrdreKoscFtel.referencePrestationPrise = data[i]['ReferencePrestationPrise'];
        myOrdreKoscFtel.referencePm = data[i]['ReferencePm'];
        myOrdreKoscFtel.referencePmTechnique = data[i]['ReferencePmTechnique'];
        myOrdreKoscFtel.localisationPm = data[i]['LocalisationPm'];
        myOrdreKoscFtel.referencePbo = data[i]['ReferencePBO'];
        myOrdreKoscFtel.localisationPbo = data[i]['LocalisationPBO'];
        myOrdreKoscFtel.coordonnePboY = data[i]['CoordonneePBOY'];
        myOrdreKoscFtel.hauteurPbo = data[i]['HauteurPBO'];
        myOrdreKoscFtel.typeMaterielPbo = data[i]['TypeMaterielPBO'];
        myOrdreKoscFtel.typePbo = data[i]['TypePBO'];
        myOrdreKoscFtel.conditionSyndics = data[i]['ConditionsSyndic'];
        myOrdreKoscFtel.typeRacordementPboPto = data[i]['TypeRaccoPBPTO'];
        myOrdreKoscFtel.autreInfosPboPto = data[i]['AutresInfosPBOPTO'];
        myOrdreKoscFtel.codeAccesImmeuble = data[i]['CodeAccesImmeuble'];
        myOrdreKoscFtel.contacteImmeuble = data[i]['ContactsImmeuble'];
        myOrdreKoscFtel.pmaAccessible = data[i]['Pmaccessible'];
        myOrdreKoscFtel.infoObtentionCle = data[i]['InfoObtentionCle'];
        myOrdreKoscFtel.localeIpm = data[i]['CodeLocalPM'];////////////////////////////
        myOrdreKoscFtel.contactsSyndic = data[i]['ContactsSyndic'];
        myOrdreKoscFtel.oc1 = data[i]['OC 1'];
        myOrdreKoscFtel.nomModulePm1 = data[i]['NomModulePm NÂ°1'];
        myOrdreKoscFtel.positionModulePm1 = data[i]['PositionModulePm NÂ°1'];
        myOrdreKoscFtel.referenceCableModulePm1 = data[i]['ReferenceCableModulePm NÂ°1'];
        myOrdreKoscFtel.informationFibreModulePm1 = data[i]['InformationFibreModulePm NÂ°1'];
        myOrdreKoscFtel.referenceCablePbo1 = data[i]['ReferenceCablePBO NÂ°1'];
        myOrdreKoscFtel.informationTubePbo1 = data[i]['InformationTubePBO NÂ°1'];
        myOrdreKoscFtel.informationFibrePbo1 = data[i]['InformationFibrePBO NÂ°1'];
        myOrdreKoscFtel.connecteurPriseNumero1 = data[i]['ConnecteurPriseNumero NÂ°1'];
        myOrdreKoscFtel.connecteurPriseCouleur1 = data[i]['ConnecteurPriseCouleur NÂ°1'];
        myOrdreKoscFtel.oc2 = data[i]['OC 2'];
        myOrdreKoscFtel.nomModulePm2 = data[i]['NomModulePm NÂ°2'];
        myOrdreKoscFtel.positionModulePm2 = data[i]['PositionModulePm NÂ°2'];
        myOrdreKoscFtel.referenceCableModulePm2 = data[i]['ReferenceCableModulePm NÂ°2'];
        myOrdreKoscFtel.informationFibreModulePm2 = data[i]['InformationFibreModulePm NÂ°2'];
        myOrdreKoscFtel.referenceCablePbo2 = data[i]['ReferenceCablePBO NÂ°2'];
        myOrdreKoscFtel.informationTubePbo2 = data[i]['InformationTubePBO NÂ°2'];
        myOrdreKoscFtel.informationFibrePbo2 = data[i]['InformationFibrePBO NÂ°2'];
        myOrdreKoscFtel.connecteurPriseNumero2 = data[i]['ConnecteurPriseNumero NÂ°2'];
        myOrdreKoscFtel.connecteurPriseCouleur2 = data[i]['ConnecteurPriseCouleur NÂ°2'];
        myOrdreKoscFtel.oc3 = data[i]['OC 3'];
        myOrdreKoscFtel.nomModulePm3 = data[i]['NomModulePm NÂ°3'];
        myOrdreKoscFtel.positionModulePm3 = data[i]['PositionModulePm NÂ°3'];
        myOrdreKoscFtel.referenceCableModulePm3 = data[i]['ReferenceCableModulePm NÂ°3'];
        myOrdreKoscFtel.informationFibreModulePm3 = data[i]['InformationFibreModulePm NÂ°3'];
        myOrdreKoscFtel.referenceCablePbo3 = data[i]['ReferenceCablePBO NÂ°3'];
        myOrdreKoscFtel.informationTubePbo3 = data[i]['InformationTubePBO NÂ°3'];
        myOrdreKoscFtel.informationFibrePbo3 = data[i]['InformationFibrePBO NÂ°3'];
        myOrdreKoscFtel.connecteurPriseNumero3 = data[i]['ConnecteurPriseNumero NÂ°3'];
        myOrdreKoscFtel.connecteurPriseCouleur3 = data[i]['ConnecteurPriseCouleur NÂ°3'];
        myOrdreKoscFtel.oc4 = data[i]['OC 4'];
        myOrdreKoscFtel.nomModulePm4 = data[i]['NomModulePm NÂ°4'];
        myOrdreKoscFtel.positionModulePm4 = data[i]['PositionModulePm NÂ°4'];
        myOrdreKoscFtel.referenceCableModulePm4 = data[i]['ReferenceCableModulePm NÂ°4'];
        myOrdreKoscFtel.informationFibreModulePm4 = data[i]['InformationFibreModulePm NÂ°4'];
        myOrdreKoscFtel.referenceCablePbo4 = data[i]['ReferenceCablePBO NÂ°4'];
        myOrdreKoscFtel.informationTubePbo4 = data[i]['InformationTubePBO NÂ°4'];
        myOrdreKoscFtel.informationFibrePbo4 = data[i]['InformationFibrePBO NÂ°4'];
        myOrdreKoscFtel.connecteurPriseNumero4 = data[i]['ConnecteurPriseNumero NÂ°4'];
        myOrdreKoscFtel.connecteurPriseCouleur4 = data[i]['ConnecteurPriseCouleur NÂ°4'];
        myOrdreKoscFtel.reserve1 = data[i]['Reserve1'];
        myOrdreKoscFtel.reserve2 = data[i]['Reserve2'];
        myOrdreKoscFtel.reserve3 = data[i]['Reserve3'];
        myOrdreKoscFtel.reserve4 = data[i]['Reserve4'];
        myOrdreKoscFtel.racordementLong = this.convertBoleen(data[i]['RaccordementLong']);
        return myOrdreKoscFtel;
    }

    private constructWorkOrder(data: any, i: number) {
        let myOrdreKoscWork = new OrdreKoscVo();
        // myOrdreKoscWork.etatDemandeKoscVo = new EtatDemandeKoscVo();
        if (myOrdreKoscWork.etatDemandeKoscVo == null){
            myOrdreKoscWork.etatDemandeKoscVo = new EtatDemandeKoscVo();
        }
        //save technicien
        if( myOrdreKoscWork.technicienVo==null){
            myOrdreKoscWork.technicienVo=new TechnicienVo();
        }
        myOrdreKoscWork.technicienVo.identifiant=data[i]['tech_reference'];

        //save Operateur
        if( myOrdreKoscWork.operatorVo==null){
            myOrdreKoscWork.operatorVo=new OperatorVo();
        }
        myOrdreKoscWork.operatorVo.reference=data[i]['opt_reference'];

        myOrdreKoscWork.etatDemandeKoscVo.code = 'initialisation-wo';
        myOrdreKoscWork.reference = data[i]['kosc_order_ref'];
        myOrdreKoscWork.referenceWorkOrder = data[i]['work_order_ref'];
        myOrdreKoscWork.supplierServiceCode = data[i]['supplier_service_code'];
        myOrdreKoscWork.endCustumorSiret = data[i]['siret'];
        myOrdreKoscWork.endCustumorFirstName = data[i]['first_name'];
        myOrdreKoscWork.endCustumorLastName = data[i]['last_name'];
        // myOrdreKoscWork.endCustumorZipcode = data[i]['zip_code'];///////
        myOrdreKoscWork.endCustumorZipcode = data[i]['zip_code'];///////

        if (myOrdreKoscWork.departementVo == null){
            myOrdreKoscWork.departementVo = new DepartementVo();
        }
        myOrdreKoscWork.departementVo.code = data[i]['zip_code'];///////
        myOrdreKoscWork.endCustumorStreetName = data[i]['street_name'];///////////
        myOrdreKoscWork.endCustumorStreetNumber = data[i]['street_number'];/////////
        myOrdreKoscWork.endCustumorCity = data[i]['city'];/////////
        myOrdreKoscWork.endCustumorStairs = data[i]['stairs'];
        myOrdreKoscWork.endCustumorFloor = data[i]['floor'];
        myOrdreKoscWork.endCustumorContactFirstName = data[i]['end_customer_contact_first_name'];
        myOrdreKoscWork.endCustumorContactLastName = data[i]['end_customer_contact_last_name'];
        myOrdreKoscWork.endCustumorContactPhone = data[i]['end_customer_contact_phone'];
        myOrdreKoscWork.endCustumorContactCellPhone = data[i]['end_customer_contact_cellphone'];
        myOrdreKoscWork.endCustumorContactEmail = data[i]['end_customer_contact_email'];
        myOrdreKoscWork.company = data[i]['company_name'];//////////////////////
        myOrdreKoscWork.submissionDate =DateUtils.toDateForExcel(data[i]['submission_date']);
        myOrdreKoscWork.workOrderType = data[i]['work_order_type'];
        myOrdreKoscWork.productCode = data[i]['product_code'];
        myOrdreKoscWork.productLabel = data[i]['product_label'];
        myOrdreKoscWork.provider = data[i]['provider'];
        myOrdreKoscWork.providerFileType = data[i]['provider_file_type'];
        myOrdreKoscWork.existingOtp = data[i]['existing_otp'];
        myOrdreKoscWork.profile = data[i]['profile'];
        myOrdreKoscWork.providerSlId = data[i]['provider_slid'];
        myOrdreKoscWork.endCustumorBuilding = data[i]['building_name'];
        return myOrdreKoscWork;
    }

    private constructDataBase(data: any, i: number) {
        let myOrdreKoscData = new OrdreKoscVo();
        // myOrdreKoscWork.etatDemandeKoscVo = new EtatDemandeKoscVo();
        if (myOrdreKoscData.etatDemandeKoscVo == null){
            myOrdreKoscData.etatDemandeKoscVo = new EtatDemandeKoscVo();
        }
        //save technicien
        // if( myOrdreKoscData.technicienVo==null){
        //     myOrdreKoscData.technicienVo=new TechnicienVo();
        // }
        // myOrdreKoscData.technicienVo.identifiant=data[i]['tech_reference'];

        //save Operateur
        if( myOrdreKoscData.operatorVo==null){
            myOrdreKoscData.operatorVo=new OperatorVo();
        }
        myOrdreKoscData.operatorVo.libelle=data[i]['customer_operator'];/////////////////pas sure !!
        myOrdreKoscData.operatorVo.reference=data[i]['customer_operator'];/////////////////pas sure !!
        if (myOrdreKoscData.operatorVo.libelle == null || myOrdreKoscData.operatorVo.libelle == '' ) {
            myOrdreKoscData.operatorVo = null;
        }

        if (myOrdreKoscData.departementVo == null){
            myOrdreKoscData.departementVo = new DepartementVo();
        }
        myOrdreKoscData.departementVo.code = data[i]['zip_code']; //////zip code

        myOrdreKoscData.etatDemandeKoscVo.code = 'initialisation-wo';
        myOrdreKoscData.etatDemandeKoscVo.libelle = 'initialisation-wo';
        myOrdreKoscData.etatDemandeKoscVo.style = 'warning';

        myOrdreKoscData.reference = data[i]['kosc_order_ref'];
        myOrdreKoscData.referenceWorkOrder = data[i]['work_order_ref'];
        myOrdreKoscData.workOrderType = data[i]['work_order_type'];
        myOrdreKoscData.supplierServiceCode = data[i]['supplier_service_code'];
        myOrdreKoscData.submissionDate =this.convertDate(data[i]['submission_date']);
        myOrdreKoscData.productCode = data[i]['product_code'];
        myOrdreKoscData.productLabel = data[i]['product_label'];
        myOrdreKoscData.provider = data[i]['provider'];
        myOrdreKoscData.providerProduct = data[i]['provider_product'];
        myOrdreKoscData.providerFileType = data[i]['provider_file_type'];
        myOrdreKoscData.existingOtp = data[i]['existing_otp'];
        myOrdreKoscData.profile = data[i]['profile'];
        myOrdreKoscData.company = data[i]['company_name'];
        myOrdreKoscData.endCustumorSiret = data[i]['siret'];
        myOrdreKoscData.endCustumorFirstName = data[i]['first_name'];
        myOrdreKoscData.endCustumorLastName = data[i]['last_name'];
        myOrdreKoscData.endCustumorStreetNumber = data[i]['street_number'];
        myOrdreKoscData.endCustumorStreetName = data[i]['street_name'];
        myOrdreKoscData.endCustumorCity = data[i]['city'];
        myOrdreKoscData.endCustumorBuilding = data[i]['building_name'];
        myOrdreKoscData.endCustumorStairs = data[i]['stairs'];
        myOrdreKoscData.endCustumorFloor = data[i]['floor'];
        myOrdreKoscData.endCustumorContactFirstName = data[i]['end_customer_contact_first_name'];
        myOrdreKoscData.endCustumorContactLastName = data[i]['end_customer_contact_last_name'];
        myOrdreKoscData.endCustumorContactPhone = data[i]['end_customer_contact_phone'];
        myOrdreKoscData.endCustumorContactCellPhone = data[i]['end_customer_contact_cellphone'];
        myOrdreKoscData.endCustumorContactEmail = data[i]['end_customer_contact_email'];
        myOrdreKoscData.providerSlId = data[i]['provider_slid'];
        myOrdreKoscData.referenceCommandePriseInterneOC = data[i]['ReferenceCommandePriseInterneOC'];
        myOrdreKoscData.referencePrise = data[i]['ReferencePrise'];
        myOrdreKoscData.referencePrestationPrise = data[i]['ReferencePrestationPrise'];
        myOrdreKoscData.commantaireCloture = data[i]['Commentaire']; ////////?????
        myOrdreKoscData.referencePm = data[i]['Reference Pm'];
        myOrdreKoscData.referencePmTechnique = data[i]['ReferencePmTechnique'];
        myOrdreKoscData.localisationPm = data[i]['LocalisationPm'];
        myOrdreKoscData.referencePbo = data[i]['ReferencePBO'];
        myOrdreKoscData.localisationPbo = data[i]['LocalisationPBO'];
        myOrdreKoscData.coordonnePboY = data[i]['CoordonneePBOY'];
        myOrdreKoscData.hauteurPbo = data[i]['HauteurPBO'];
        myOrdreKoscData.typeMaterielPbo = data[i]['TypeMaterielPBO'];
        myOrdreKoscData.typePbo = data[i]['TypePBO'];
        myOrdreKoscData.conditionSyndics = data[i]['ConditionsSyndic'];
        myOrdreKoscData.typeRacordementPboPto = data[i]['TypeRaccoPBPTO'];
        myOrdreKoscData.autreInfosPboPto = data[i]['AutresInfosPBOPTO'];
        myOrdreKoscData.codeAccesImmeuble = data[i]['CodeAccesImmeuble'];
        myOrdreKoscData.contacteImmeuble = data[i]['ContactsImmeuble'];
        myOrdreKoscData.pmaAccessible = data[i]['Pmaccessible'];
        myOrdreKoscData.infoObtentionCle = data[i]['InfoObtentionCle'];
        myOrdreKoscData.localeIpm = data[i]['CodeLocalPM'];
        myOrdreKoscData.contactsSyndic = data[i]['ContactsSyndic'];
        myOrdreKoscData.oc1 = data[i]['OC 1'];
        myOrdreKoscData.nomModulePm1 = data[i]['NomModulePm NÂ°1'];
        myOrdreKoscData.positionModulePm1 = data[i]['PositionModulePm NÂ°1'];
        myOrdreKoscData.referenceCableModulePm1 = data[i]['ReferenceCableModulePm NÂ°1'];
        myOrdreKoscData.informationFibreModulePm1 = data[i]['InformationFibreModulePm NÂ°1'];
        myOrdreKoscData.referenceCablePbo1 = data[i]['ReferenceCablePBO NÂ°1'];
        myOrdreKoscData.informationTubePbo1 = data[i]['InformationTubePBO NÂ°1'];
        myOrdreKoscData.informationFibrePbo1 = data[i]['InformationFibrePBO NÂ°1'];
        myOrdreKoscData.connecteurPriseNumero1 = data[i]['ConnecteurPriseNumero NÂ°1'];
        myOrdreKoscData.connecteurPriseCouleur1 = data[i]['ConnecteurPriseCouleur NÂ°1'];
        myOrdreKoscData.oc2 = data[i]['OC 2'];
        myOrdreKoscData.nomModulePm2 = data[i]['NomModulePm NÂ°2'];
        myOrdreKoscData.positionModulePm2 = data[i]['PositionModulePm NÂ°2'];
        myOrdreKoscData.referenceCableModulePm2 = data[i]['ReferenceCableModulePm NÂ°2'];
        myOrdreKoscData.informationFibreModulePm2 = data[i]['InformationFibreModulePm NÂ°2'];
        myOrdreKoscData.referenceCablePbo2 = data[i]['ReferenceCablePBO NÂ°2'];
        myOrdreKoscData.informationTubePbo2 = data[i]['InformationTubePBO NÂ°2'];
        myOrdreKoscData.informationFibrePbo2 = data[i]['InformationFibrePBO NÂ°2'];
        myOrdreKoscData.connecteurPriseNumero2 = data[i]['ConnecteurPriseNumero NÂ°2'];
        myOrdreKoscData.connecteurPriseCouleur2 = data[i]['ConnecteurPriseCouleur NÂ°2'];
        myOrdreKoscData.oc3 = data[i]['OC 3'];
        myOrdreKoscData.nomModulePm3 = data[i]['NomModulePm NÂ°3'];
        myOrdreKoscData.positionModulePm3 = data[i]['PositionModulePm NÂ°3'];
        myOrdreKoscData.referenceCableModulePm3 = data[i]['ReferenceCableModulePm NÂ°3'];
        myOrdreKoscData.informationFibreModulePm3 = data[i]['InformationFibreModulePm NÂ°3'];
        myOrdreKoscData.referenceCablePbo3 = data[i]['ReferenceCablePBO NÂ°3'];
        myOrdreKoscData.informationTubePbo3 = data[i]['InformationTubePBO NÂ°3'];
        myOrdreKoscData.informationFibrePbo3 = data[i]['InformationFibrePBO NÂ°3'];
        myOrdreKoscData.connecteurPriseNumero3 = data[i]['ConnecteurPriseNumero NÂ°3'];
        myOrdreKoscData.connecteurPriseCouleur3 = data[i]['ConnecteurPriseCouleur NÂ°3'];
        myOrdreKoscData.oc4 = data[i]['OC 4'];
        myOrdreKoscData.nomModulePm4 = data[i]['NomModulePm NÂ°4'];
        myOrdreKoscData.positionModulePm4 = data[i]['PositionModulePm NÂ°4'];
        myOrdreKoscData.referenceCableModulePm4 = data[i]['ReferenceCableModulePm NÂ°4'];
        myOrdreKoscData.informationFibreModulePm4 = data[i]['InformationFibreModulePm NÂ°4'];
        myOrdreKoscData.referenceCablePbo4 = data[i]['ReferenceCablePBO NÂ°4'];
        myOrdreKoscData.informationTubePbo4 = data[i]['InformationTubePBO NÂ°4'];
        myOrdreKoscData.informationFibrePbo4 = data[i]['InformationFibrePBO NÂ°4'];
        myOrdreKoscData.connecteurPriseNumero4 = data[i]['ConnecteurPriseNumero NÂ°4'];
        myOrdreKoscData.connecteurPriseCouleur4 = data[i]['ConnecteurPriseCouleur NÂ°4'];
        myOrdreKoscData.reserve1 = data[i]['Reserve1'];
        myOrdreKoscData.reserve2 = data[i]['Reserve2'];
        myOrdreKoscData.reserve3 = data[i]['Reserve3'];
        myOrdreKoscData.reserve4 = data[i]['Reserve4'];
        myOrdreKoscData.racordementLong = this.convertBoleen(data[i]['RaccordementLong']);
        myOrdreKoscData.datePremierAppel = this.convertDate(data[i]['1 er appel ']);
        myOrdreKoscData.dateDeuxiemeAppel = this.convertDate(data[i]['2 eme appel ']);
        myOrdreKoscData.dateTroisiemeAppel = this.convertDate(data[i]['3 eme appel ']);
        myOrdreKoscData.dateAppelReplanification = this.convertDate(data[i]['Re Planification']);
        myOrdreKoscData.dateInterventionTechniqueDebut = this.convertDate(data[i]['Date intervention Technicien']);
        console.log(data[i]['Date intervention Technicien']);
        return myOrdreKoscData;
    }

    private isFtl(data: any) {

        if (data["ReferenceCommandePriseInterneOC"] != undefined) return true;
        else return false;
    }

    private isErdv(data: any) {
        if (data["intervention_start_datetime"] != undefined && data["intervention_start_datetime"] != '') return true;
        else return false;
    }

    private isKosc(data: any) {
        if (data["work_order_ref"] != undefined && data["work_order_ref"] != '') return true;
        else return false;
    }

    convertBoleen(value: string): boolean {
        const myBoleenString = ['N']
        return myBoleenString.includes(value) ? true : false;
    }

    convertDate(date ) {
        if (date != null){
            const myDate = new Date(Math.round((date - 25569) * 86400 * 1000));
            return DateUtils.toDate(myDate);

        }
     return null;
    }

    private constructMessage(koscOrdres: Array<OrdreKoscVo>) : string {
        let message = '';
        koscOrdres.forEach(e=> message += ('O=' + e.reference + ', WO= ' + e.referenceWorkOrder + ', Type= ' + e.type));
        return message;
    }
}
