import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {TechnicienVo} from '../model/Technicien.model';


@Injectable({
    providedIn: 'root'
})
export class TechnicienService {
    public editTechnicien$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/technicien/';
        });
    }

    private _techniciens: Array<TechnicienVo>;

    get techniciens(): Array<TechnicienVo> {
        if (this._techniciens == null) {
            this._techniciens = new Array<TechnicienVo>();
        }
        return this._techniciens;
    }

    set techniciens(value: Array<TechnicienVo>) {
        this._techniciens = value;
    }

    private _selectedTechnicien: TechnicienVo;

    get selectedTechnicien(): TechnicienVo {
        if (this._selectedTechnicien == null) {
            this._selectedTechnicien = new TechnicienVo();
        }
        return this._selectedTechnicien;
    }

    set selectedTechnicien(value: TechnicienVo) {
        this._selectedTechnicien = value;
    }

    private _technicienSelections: Array<TechnicienVo>;

    get technicienSelections(): Array<TechnicienVo> {
        if (this._technicienSelections == null) {
            this._technicienSelections = new Array<TechnicienVo>();
        }
        return this._technicienSelections;
    }

    // methods

    set technicienSelections(value: Array<TechnicienVo>) {
        this._technicienSelections = value;
    }

    private _createTechnicienDialog: boolean;

    get createTechnicienDialog(): boolean {
        return this._createTechnicienDialog;
    }

    set createTechnicienDialog(value: boolean) {
        this._createTechnicienDialog = value;
    }

    private _editTechnicienDialog: boolean;

    get editTechnicienDialog(): boolean {
        return this._editTechnicienDialog;
    }

    // getters and setters

    set editTechnicienDialog(value: boolean) {
        this._editTechnicienDialog = value;
    }

    private _viewTechnicienDialog: boolean;

    get viewTechnicienDialog(): boolean {
        return this._viewTechnicienDialog;
    }

    set viewTechnicienDialog(value: boolean) {
        this._viewTechnicienDialog = value;
    }

    private _searchTechnicien: TechnicienVo;

    get searchTechnicien(): TechnicienVo {
        if (this._searchTechnicien == null) {
            this._searchTechnicien = new TechnicienVo();
        }
        return this._searchTechnicien;
    }

    set searchTechnicien(value: TechnicienVo) {
        this._searchTechnicien = value;
    }

    private _switchChercheurDialog: boolean;

    get switchChercheurDialog(): boolean {
        return this._switchChercheurDialog;
    }

    set switchChercheurDialog(value: boolean) {
        this._switchChercheurDialog = value;
    }

    public findAll() {
        return this.http.get<Array<TechnicienVo>>(this.API);
    }

    public save(): Observable<TechnicienVo> {
        return this.http.post<TechnicienVo>(this.API, {
            ...this.selectedTechnicien,
            updatedAt: moment(this.selectedTechnicien.updatedAt).format('YYYY-MM-DD')
        });
    }

    delete(technicien: TechnicienVo) {
        return this.http.delete<number>(this.API + 'id/' + technicien.id);
    }

    public edit(): Observable<TechnicienVo> {
        return this.http.put<TechnicienVo>(this.API, this.selectedTechnicien);
    }

    public findByCriteria(technicien: TechnicienVo): Observable<Array<TechnicienVo>> {
        return this.http.post<Array<TechnicienVo>>(this.API + 'search', technicien);
    }

    public findByIdWithAssociatedList(technicien: TechnicienVo): Observable<TechnicienVo> {
        return this.http.get<TechnicienVo>(this.API + 'detail/id/' + technicien.id);
    }

    public findAppropriateTechnicien (dateRdv:Date, codeDepartemet:string) : Observable<Array<TechnicienVo>>{
        let dateRdvToString = moment(dateRdv).format("yyyy-MM-DD hh:mm:ss.SSS");
        console.log(dateRdvToString);
        return this.http.get<Array<TechnicienVo>>(this.API+"date-rdv/"+dateRdvToString+"/code-departement/"+codeDepartemet)
    }

}
