import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {OrdreKoscVo} from '../model/OrdreKosc.model';
import {StatisticVo} from "../model/Statistic.model";
import {EtatDemandeKoscVo} from "../model/EtatDemandeKosc.model";


@Injectable({
    providedIn: 'root'
})
export class OrdreKoscService {
    public editOrdreKosc$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    private _selectedIndexView = 0;
    private _selectedKoscTabView = 0;

    private _selectedOrdreKosc: OrdreKoscVo;
    private _ordreKoscSelections: Array<OrdreKoscVo>;
    private _editOrdreKoscDialog: boolean;
    private _viewOrdreKoscDialog: boolean;
    private _createOrdreKoscDialog: boolean;


    private _indexEdit = 0;
    private _searchOrdreKosc: OrdreKoscVo;
    private _searchOrdreKoscSuiviCdd: OrdreKoscVo;
    private _searchOrdreKoscCdd: OrdreKoscVo;

    private _ordreKoscs: Array<OrdreKoscVo>;

    private _ordreKoscsPriseRdv: Array<OrdreKoscVo>;
    private _ordreKoscsSuiviRdv: Array<OrdreKoscVo>;
    private _ordreKoscsSuiviCdd: Array<OrdreKoscVo>;
    private _ordreKoscsSuiviHistoriqueCdd: Array<OrdreKoscVo>;
    private _searchOrdreKoscSuiviRdv: OrdreKoscVo;


    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/ordreKosc/';
        });
    }

    public deleteIfEtatNotIn(etats: Array<EtatDemandeKoscVo>, ordreKoscs: Array<OrdreKoscVo>, ordreKosc: OrdreKoscVo) {
        console.log(etats);
        if (ordreKoscs != null) {
            var indice = etats.findIndex(e => e.code === ordreKosc.etatDemandeKoscVo.code);
            if (indice == -1) {
                var indiceOrdreKosc = ordreKoscs.findIndex(e => e.id == ordreKosc.id);
                debugger
                ordreKoscs.splice(indiceOrdreKosc, 1);
                console.log('OrdreKoscs: '+ordreKoscs);
            }

        }
    }

    public calculerStatistic(ordreKosc: OrdreKoscVo): Observable<Array<StatisticVo>> {
        return this.http.get<Array<StatisticVo>>(this.API + 'calculerStatistic/submissionDateMin/' + this.searchOrdreKosc.submissionDateMin + '/submissionDateMax/' + this.searchOrdreKosc.submissionDateMax);
    }

    public findSuivi() {
        return this.http.get<Array<OrdreKoscVo>>(this.API + 'suivi/');
    }


    public sendConfirmationEmailToClient(): Observable<OrdreKoscVo> {

        return this.http.post<OrdreKoscVo>(this.API + 'send/confirmation/client', {...this.selectedOrdreKosc});
    }

    public sendMailPlanificationEmail(): Observable<OrdreKoscVo> {

        return this.http.post<OrdreKoscVo>(this.API + 'send/mail/planification', {...this.selectedOrdreKosc});
    }

    public sendClientInjoignableEmailToClient(): Observable<OrdreKoscVo> {

        return this.http.post<OrdreKoscVo>(this.API + 'send/client/injoignable/client', {...this.selectedOrdreKosc});
    }

    public importerFtel(ordreKoscs: Array<OrdreKoscVo>): Observable<Array<OrdreKoscVo>> {
        return this.http.post<Array<OrdreKoscVo>>(this.API + 'ftel', ordreKoscs);
    }

    uploadFile(file): Observable<any> {
        //Create from data
        const formData = new FormData();

        //Store form name as "file" with file data
        formData.append("file", file, file.name);

        return this.http.post<File>(this.API + 'upload', formData);
    }

    download(filename: string): Observable<HttpEvent<Blob>> {
        return this.http.get(this.API + 'download/' + filename, {
            reportProgress: true,
            observe: 'events',
            responseType: 'blob'
        });
    }

    public importerAll(ordreKoscs: Array<OrdreKoscVo>): Observable<Array<OrdreKoscVo>> {
        return this.http.post<Array<OrdreKoscVo>>(this.API + 'import-all', ordreKoscs);
    }

    public importerERdv(ordreKoscs: Array<OrdreKoscVo>): Observable<Array<OrdreKoscVo>> {
        return this.http.post<Array<OrdreKoscVo>>(this.API + 'eRdv', ordreKoscs);
    }

    // getters and setters

    public sendClientInjoignableEmailToKosc(): Observable<OrdreKoscVo> {

        return this.http.post<OrdreKoscVo>(this.API + 'send/client/injoignable/kosc', {...this.selectedOrdreKosc});
    }

    public sendMauvaisContactEmail(): Observable<OrdreKoscVo> {

        return this.http.post<OrdreKoscVo>(this.API + 'send/mauvais/contact', {...this.selectedOrdreKosc});
    }

    public sendRefusClientEmail(): Observable<OrdreKoscVo> {
        return this.http.post<OrdreKoscVo>(this.API + 'send/refus/client', {...this.selectedOrdreKosc});
    }

    public sendAutreEmail(): Observable<OrdreKoscVo> {
        return this.http.post<OrdreKoscVo>(this.API + 'send/autre', {...this.selectedOrdreKosc});
    }

    public sendMailReplanificationReport(): Observable<OrdreKoscVo> {

        return this.http.post<OrdreKoscVo>(this.API + 'send/mail/replanification/report', {...this.selectedOrdreKosc});
    }

    public sendMailReplanification(): Observable<OrdreKoscVo> {

        return this.http.post<OrdreKoscVo>(this.API + 'send/mail/replanification', {...this.selectedOrdreKosc});
    }

    public findAll() {
        return this.http.get<Array<OrdreKoscVo>>(this.API);
    }

    public save(): Observable<OrdreKoscVo> {
        return this.http.post<OrdreKoscVo>(this.API, {
            ...this.selectedOrdreKosc,
            dateEnvoiSuivi: moment(this.selectedOrdreKosc.dateEnvoiSuivi).format('YYYY-MM-DD')
        });
    }

    public updateNonJoignable(): Observable<OrdreKoscVo> {
        return this.http.put<OrdreKoscVo>(this.API + 'non-joignable', this.selectedOrdreKosc);
    }

    delete(ordreKosc: OrdreKoscVo) {
        return this.http.delete<number>(this.API + 'id/' + ordreKosc.id);
    }

    public edit(): Observable<OrdreKoscVo> {
        //this.selectedOrdreKosc.datePriseRdv= new Date(moment(this.selectedOrdreKosc.datePriseRdv).format('yyyy-MM-dd hh:mm:ss.SSS'));
        console.log(this.selectedOrdreKosc.datePriseRdv)
        return this.http.put<OrdreKoscVo>(this.API, this.selectedOrdreKosc);
    }

    public editPasEncore(): Observable<OrdreKoscVo> {
        return this.http.put<OrdreKoscVo>(this.API + 'edit-pas-encore/', this.selectedOrdreKosc);

    }

    public updateEtat(): Observable<OrdreKoscVo> {
        return this.http.put<OrdreKoscVo>(this.API + "update-etat/", this.selectedOrdreKosc);
    }

    public findByCriteria(ordreKosc: OrdreKoscVo): Observable<Array<OrdreKoscVo>> {
        // console.log(ordreKosc);
        return this.http.post<Array<OrdreKoscVo>>(this.API + 'search', ordreKosc);
    }

    public findByCriteriaOrderKoscImport(ordreKosc: OrdreKoscVo): Observable<Array<OrdreKoscVo>> {

        return this.http.post<Array<OrdreKoscVo>>(this.API + 'search-order-kosc-import', ordreKosc);
    }

    public findByCriteriaPriseRdv(ordreKosc: OrdreKoscVo): Observable<Array<OrdreKoscVo>> {
        return this.http.post<Array<OrdreKoscVo>>(this.API + 'search-prise-rdv', ordreKosc);
    }


    public findByCriteriaCdd(ordreKosc: OrdreKoscVo): Observable<Array<OrdreKoscVo>> {
        return this.http.post<Array<OrdreKoscVo>>(this.API + 'search-suivi-cdd', ordreKosc);
    }

    public findByCriteriaSuiviCdd(ordreKosc: OrdreKoscVo): Observable<Array<OrdreKoscVo>> {
        return this.http.post<Array<OrdreKoscVo>>(this.API + 'search-suivi-historique-cdd', ordreKosc);
    }


    public findSuiviByCriteria(ordreKosc: OrdreKoscVo): Observable<Array<OrdreKoscVo>> {
        return this.http.post<Array<OrdreKoscVo>>(this.API + 'search/suivi', ordreKosc);
    }

    public findByIdWithAssociatedList(ordreKosc: OrdreKoscVo): Observable<OrdreKoscVo> {
        return this.http.get<OrdreKoscVo>(this.API + 'detail/id/' + ordreKosc.id);
    }

    public async findByIdWithAssociatedList2(ordreKosc: OrdreKoscVo): Promise<Observable<OrdreKoscVo>> {
        return this.http.get<OrdreKoscVo>(this.API + 'detail/id/' + ordreKosc.id);
    }

    public findByEtatDemandeKoscCode(ordreKosc: OrdreKoscVo): Observable<OrdreKoscVo> {
        return this.http.get<OrdreKoscVo>(this.API + 'etatDemandeKosc/code/' + ordreKosc.etatDemandeKoscVo.code);
    }

    public importerWordOrder(ordreKoscs: Array<OrdreKoscVo>): Observable<Array<OrdreKoscVo>> {
        return this.http.post<Array<OrdreKoscVo>>(this.API + 'import-work-order', ordreKoscs);
    }

    public importerDataBase(ordreKoscs: Array<OrdreKoscVo>): Observable<Array<OrdreKoscVo>> {
        return this.http.post<Array<OrdreKoscVo>>(this.API + 'import-data-base', ordreKoscs);
    }

    public findByCriteriaSuiviRdv(ordreKosc: OrdreKoscVo): Observable<Array<OrdreKoscVo>> {
        return this.http.post<Array<OrdreKoscVo>>(this.API + 'search-suivi-rdv', ordreKosc);
    }

    public findByAnneAndMoins(annee, mois){
        return this.http.get<Array<OrdreKoscVo>>(this.API + 'find-by-year-month/year/' + annee + '/month/' + mois);
    }


    public findEmail(ordreKosc: OrdreKoscVo): Observable<Array<OrdreKoscVo>> {
        return this.http.post<Array<OrdreKoscVo>>(this.API + 'find-email', ordreKosc);
    }

    get indexEdit(): number {
        return this._indexEdit;
    }

    set indexEdit(value: number) {
        this._indexEdit = value;
    }

    get selectedIndexView(): number {
        return this._selectedIndexView;
    }

    set selectedIndexView(value: number) {
        this._selectedIndexView = value;
    }

    get selectedKoscTabView(): number {
        return this._selectedKoscTabView;
    }

    set selectedKoscTabView(value: number) {
        this._selectedKoscTabView = value;
    }

    get ordreKoscs(): Array<OrdreKoscVo> {
        if (this._ordreKoscs == null) {
            this._ordreKoscs = new Array<OrdreKoscVo>();
        }
        return this._ordreKoscs;
    }

    set ordreKoscs(value: Array<OrdreKoscVo>) {
        this._ordreKoscs = value;
    }


    get ordreKoscsPriseRdv(): Array<OrdreKoscVo> {
        if (this._ordreKoscsPriseRdv == null) {
            this._ordreKoscsPriseRdv = new Array<OrdreKoscVo>();
        }
        return this._ordreKoscsPriseRdv;
    }

    set ordreKoscsPriseRdv(value: Array<OrdreKoscVo>) {
        this._ordreKoscsPriseRdv = value;
    }

    get ordreKoscsSuiviCdd(): Array<OrdreKoscVo> {
        if (this._ordreKoscsSuiviCdd == null) {
            this._ordreKoscsSuiviCdd = new Array<OrdreKoscVo>();
        }
        return this._ordreKoscsSuiviCdd;
    }

    set ordreKoscsSuiviCdd(value: Array<OrdreKoscVo>) {
        this._ordreKoscsSuiviCdd = value;
    }

/////////////////////////
    get ordreKoscsSuiviRdv(): Array<OrdreKoscVo> {
        if (this._ordreKoscsSuiviRdv == null) {
            this._ordreKoscsSuiviRdv = new Array<OrdreKoscVo>();
        }
        return this._ordreKoscsSuiviRdv;
    }

    set ordreKoscsSuiviRdv(value: Array<OrdreKoscVo>) {
        this._ordreKoscsSuiviRdv = value;
    }

////////////////////////


    get selectedOrdreKosc(): OrdreKoscVo {
        if (this._selectedOrdreKosc == null) {
            this._selectedOrdreKosc = new OrdreKoscVo();
        }
        return this._selectedOrdreKosc;
    }

    set selectedOrdreKosc(value: OrdreKoscVo) {
        this._selectedOrdreKosc = value;
    }


    // methods

    get ordreKoscSelections(): Array<OrdreKoscVo> {
        if (this._ordreKoscSelections == null) {
            this._ordreKoscSelections = new Array<OrdreKoscVo>();
        }
        return this._ordreKoscSelections;
    }

    set ordreKoscSelections(value: Array<OrdreKoscVo>) {
        this._ordreKoscSelections = value;
    }


    get createOrdreKoscDialog(): boolean {
        return this._createOrdreKoscDialog;
    }

    set createOrdreKoscDialog(value: boolean) {
        this._createOrdreKoscDialog = value;
    }


    get editOrdreKoscDialog(): boolean {
        return this._editOrdreKoscDialog;
    }

    set editOrdreKoscDialog(value: boolean) {
        this._editOrdreKoscDialog = value;
    }


    get viewOrdreKoscDialog(): boolean {
        return this._viewOrdreKoscDialog;
    }

    set viewOrdreKoscDialog(value: boolean) {
        this._viewOrdreKoscDialog = value;
    }


    get searchOrdreKosc(): OrdreKoscVo {
        if (this._searchOrdreKosc == null) {
            this._searchOrdreKosc = new OrdreKoscVo();
        }
        return this._searchOrdreKosc;
    }

    set searchOrdreKosc(value: OrdreKoscVo) {
        this._searchOrdreKosc = value;
    }

    get searchOrdreKoscSuiviCdd(): OrdreKoscVo {
        if (this._searchOrdreKoscSuiviCdd == null) {
            this._searchOrdreKoscSuiviCdd = new OrdreKoscVo();
        }
        return this._searchOrdreKoscSuiviCdd;
    }

    set searchOrdreKoscSuiviCdd(value: OrdreKoscVo) {
        this._searchOrdreKoscCdd = value;
    }


    get searchOrdreKoscCdd(): OrdreKoscVo {
        if (this._searchOrdreKoscCdd == null) {
            this._searchOrdreKoscCdd = new OrdreKoscVo();
        }
        return this._searchOrdreKoscCdd;
    }

    set searchOrdreKoscCdd(value: OrdreKoscVo) {
        this._searchOrdreKoscCdd = value;
    }

    get searchOrdreKoscSuiviRdv(): OrdreKoscVo {
        if (this._searchOrdreKoscSuiviRdv == null) {
            this._searchOrdreKoscSuiviRdv = new OrdreKoscVo();
        }
        return this._searchOrdreKoscSuiviRdv;
    }

    set searchOrdreKoscSuiviRdv(value: OrdreKoscVo) {
        this._searchOrdreKoscSuiviRdv = value;
    }


    get ordreKoscsSuiviHistoriqueCdd(): Array<OrdreKoscVo> {
        if (this._ordreKoscsSuiviHistoriqueCdd == null){
            this._ordreKoscsSuiviHistoriqueCdd = new Array<OrdreKoscVo>();
        }
        return this._ordreKoscsSuiviHistoriqueCdd;
    }

    set ordreKoscsSuiviHistoriqueCdd(value: Array<OrdreKoscVo>) {
        this._ordreKoscsSuiviHistoriqueCdd = value;
    }

    sendMailReportDemandeManeoClientInjoignable() {
        return this.http.post<OrdreKoscVo>(this.API + 'send-mail-report-demande-maneo-client-injoignable', {...this.selectedOrdreKosc});

    }

    sendMailReportDemandeManeoClientJoignableAccepte() {
        return this.http.post<OrdreKoscVo>(this.API + 'send-mail-report-demande-maneo-client-joignable-accepte', {...this.selectedOrdreKosc});

    }

    sendMailReportDemandeManeoClientJoignableRefus() {
        return this.http.post<OrdreKoscVo>(this.API + 'send-mail-report-demande-maneo-client-joignable-refus', {...this.selectedOrdreKosc});


    }

    sendMailReportDemandeClientClientInjoignable() {
        return this.http.post<OrdreKoscVo>(this.API + 'send-mail-report-demande-client-client-injoignable', {...this.selectedOrdreKosc});

    }

    sendMailReportDemandeClientClientJoignable() {
        return this.http.post<OrdreKoscVo>(this.API + 'send-mail-report-demande-client-client-joignable', {...this.selectedOrdreKosc});

    }

    sendMailCri() {
        return this.http.post<OrdreKoscVo>(this.API + 'send-mail-cri', {...this.selectedOrdreKosc});
    }



}
