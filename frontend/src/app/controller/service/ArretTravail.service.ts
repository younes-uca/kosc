import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {ArretTravailVo} from '../model/ArretTravail.model';
import {EtatDemandeKoscVo} from "../model/EtatDemandeKosc.model";


@Injectable({
    providedIn: 'root'
})
export class ArretTravailService {
    public editArretTravail$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/arretTravail/';
        });
    }

    private _arretTravails: Array<ArretTravailVo>;

    get arretTravails(): Array<ArretTravailVo> {
        if (this._arretTravails == null) {
            this._arretTravails = new Array<ArretTravailVo>();
        }
        return this._arretTravails;
    }

    set arretTravails(value: Array<ArretTravailVo>) {
        this._arretTravails = value;
    }

    private _selectedArretTravail: ArretTravailVo;

    get selectedArretTravail(): ArretTravailVo {
        if (this._selectedArretTravail == null) {
            this._selectedArretTravail = new ArretTravailVo();
        }
        return this._selectedArretTravail;
    }

    set selectedArretTravail(value: ArretTravailVo) {
        this._selectedArretTravail = value;
    }

    private _arretTravailSelections: Array<ArretTravailVo>;

    // methods

    get arretTravailSelections(): Array<ArretTravailVo> {
        if (this._arretTravailSelections == null) {
            this._arretTravailSelections = new Array<ArretTravailVo>();
        }
        return this._arretTravailSelections;
    }

    set arretTravailSelections(value: Array<ArretTravailVo>) {
        this._arretTravailSelections = value;
    }

    private _createArretTravailDialog: boolean;

    get createArretTravailDialog(): boolean {
        return this._createArretTravailDialog;
    }

    set createArretTravailDialog(value: boolean) {
        this._createArretTravailDialog = value;
    }

    private _editArretTravailDialog: boolean;

    // getters and setters

    get editArretTravailDialog(): boolean {
        return this._editArretTravailDialog;
    }

    set editArretTravailDialog(value: boolean) {
        this._editArretTravailDialog = value;
    }

    private _viewArretTravailDialog: boolean;

    get viewArretTravailDialog(): boolean {
        return this._viewArretTravailDialog;
    }

    set viewArretTravailDialog(value: boolean) {
        this._viewArretTravailDialog = value;
    }

    private _searchArretTravail: ArretTravailVo;

    get searchArretTravail(): ArretTravailVo {
        if (this._searchArretTravail == null) {
            this._searchArretTravail = new ArretTravailVo();
        }
        return this._searchArretTravail;
    }

    set searchArretTravail(value: ArretTravailVo) {
        this._searchArretTravail = value;
    }

    public findAll() {
        return this.http.get<Array<ArretTravailVo>>(this.API);
    }

    public save(): Observable<ArretTravailVo> {
        return this.http.post<ArretTravailVo>(this.API, {
            ...this.selectedArretTravail,
            dateFin: moment(this.selectedArretTravail.dateFin).format('YYYY-MM-DD')
        });
    }

    delete(arretTravail: ArretTravailVo) {
        return this.http.delete<number>(this.API + 'id/' + arretTravail.id);
    }

    public edit(): Observable<ArretTravailVo> {
        return this.http.put<ArretTravailVo>(this.API, this.selectedArretTravail);
    }

    public findByCriteria(arretTravail: ArretTravailVo): Observable<Array<ArretTravailVo>> {
        return this.http.post<Array<ArretTravailVo>>(this.API + 'search', arretTravail);
    }

    public findByIdWithAssociatedList(arretTravail: ArretTravailVo): Observable<ArretTravailVo> {
        return this.http.get<ArretTravailVo>(this.API + 'detail/id/' + arretTravail.id);
    }



}
