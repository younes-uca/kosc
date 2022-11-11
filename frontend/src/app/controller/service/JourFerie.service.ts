import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {JourFerieVo} from '../model/JourFerie.model';
import {EtatDemandeKoscVo} from "../model/EtatDemandeKosc.model";


@Injectable({
    providedIn: 'root'
})
export class JourFerieService {
    public editJourFerie$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/jourFerie/';
        });
    }

    private _jourFeries: Array<JourFerieVo>;

    get jourFeries(): Array<JourFerieVo> {
        if (this._jourFeries == null) {
            this._jourFeries = new Array<JourFerieVo>();
        }
        return this._jourFeries;
    }

    set jourFeries(value: Array<JourFerieVo>) {
        this._jourFeries = value;
    }

    private _selectedJourFerie: JourFerieVo;

    get selectedJourFerie(): JourFerieVo {
        if (this._selectedJourFerie == null) {
            this._selectedJourFerie = new JourFerieVo();
        }
        return this._selectedJourFerie;
    }

    set selectedJourFerie(value: JourFerieVo) {
        this._selectedJourFerie = value;
    }

    private _jourFerieSelections: Array<JourFerieVo>;

    // methods

    get jourFerieSelections(): Array<JourFerieVo> {
        if (this._jourFerieSelections == null) {
            this._jourFerieSelections = new Array<JourFerieVo>();
        }
        return this._jourFerieSelections;
    }

    set jourFerieSelections(value: Array<JourFerieVo>) {
        this._jourFerieSelections = value;
    }

    private _createJourFerieDialog: boolean;

    get createJourFerieDialog(): boolean {
        return this._createJourFerieDialog;
    }

    set createJourFerieDialog(value: boolean) {
        this._createJourFerieDialog = value;
    }

    private _editJourFerieDialog: boolean;

    // getters and setters

    get editJourFerieDialog(): boolean {
        return this._editJourFerieDialog;
    }

    set editJourFerieDialog(value: boolean) {
        this._editJourFerieDialog = value;
    }

    private _viewJourFerieDialog: boolean;

    get viewJourFerieDialog(): boolean {
        return this._viewJourFerieDialog;
    }

    set viewJourFerieDialog(value: boolean) {
        this._viewJourFerieDialog = value;
    }

    private _searchJourFerie: JourFerieVo;

    get searchJourFerie(): JourFerieVo {
        if (this._searchJourFerie == null) {
            this._searchJourFerie = new JourFerieVo();
        }
        return this._searchJourFerie;
    }

    set searchJourFerie(value: JourFerieVo) {
        this._searchJourFerie = value;
    }

    public findAll() {
        return this.http.get<Array<JourFerieVo>>(this.API);
    }

    public save(): Observable<JourFerieVo> {
        return this.http.post<JourFerieVo>(this.API, {
            ...this.selectedJourFerie,
        });
    }

    delete(jourFerie: JourFerieVo) {
        return this.http.delete<number>(this.API + 'id/' + jourFerie.id);
    }

    public edit(): Observable<JourFerieVo> {
        return this.http.put<JourFerieVo>(this.API, this.selectedJourFerie);
    }

    public findByCriteria(jourFerie: JourFerieVo): Observable<Array<JourFerieVo>> {
        return this.http.post<Array<JourFerieVo>>(this.API + 'search', jourFerie);
    }

    public findByIdWithAssociatedList(jourFerie: JourFerieVo): Observable<JourFerieVo> {
        return this.http.get<JourFerieVo>(this.API + 'detail/id/' + jourFerie.id);
    }



}
