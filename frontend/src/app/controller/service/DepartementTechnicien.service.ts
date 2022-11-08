import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {DepartementTechnicienVo} from '../model/DepartementTechnicien.model';


@Injectable({
    providedIn: 'root'
})
export class DepartementTechnicienService {
    public editDepartementTechnicien$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/departementTechnicien/';
        });
    }

    private _departementTechniciens: Array<DepartementTechnicienVo>;

    get departementTechniciens(): Array<DepartementTechnicienVo> {
        if (this._departementTechniciens == null) {
            this._departementTechniciens = new Array<DepartementTechnicienVo>();
        }
        return this._departementTechniciens;
    }

    set departementTechniciens(value: Array<DepartementTechnicienVo>) {
        this._departementTechniciens = value;
    }

    private _selectedDepartementTechnicien: DepartementTechnicienVo;

    get selectedDepartementTechnicien(): DepartementTechnicienVo {
        if (this._selectedDepartementTechnicien == null) {
            this._selectedDepartementTechnicien = new DepartementTechnicienVo();
        }
        return this._selectedDepartementTechnicien;
    }

    set selectedDepartementTechnicien(value: DepartementTechnicienVo) {
        this._selectedDepartementTechnicien = value;
    }

    private _departementTechnicienSelections: Array<DepartementTechnicienVo>;

    // methods

    get departementTechnicienSelections(): Array<DepartementTechnicienVo> {
        if (this._departementTechnicienSelections == null) {
            this._departementTechnicienSelections = new Array<DepartementTechnicienVo>();
        }
        return this._departementTechnicienSelections;
    }

    set departementTechnicienSelections(value: Array<DepartementTechnicienVo>) {
        this._departementTechnicienSelections = value;
    }

    private _createDepartementTechnicienDialog: boolean;

    get createDepartementTechnicienDialog(): boolean {
        return this._createDepartementTechnicienDialog;
    }

    set createDepartementTechnicienDialog(value: boolean) {
        this._createDepartementTechnicienDialog = value;
    }

    private _editDepartementTechnicienDialog: boolean;

    // getters and setters

    get editDepartementTechnicienDialog(): boolean {
        return this._editDepartementTechnicienDialog;
    }

    set editDepartementTechnicienDialog(value: boolean) {
        this._editDepartementTechnicienDialog = value;
    }

    private _viewDepartementTechnicienDialog: boolean;

    get viewDepartementTechnicienDialog(): boolean {
        return this._viewDepartementTechnicienDialog;
    }

    set viewDepartementTechnicienDialog(value: boolean) {
        this._viewDepartementTechnicienDialog = value;
    }

    private _searchDepartementTechnicien: DepartementTechnicienVo;

    get searchDepartementTechnicien(): DepartementTechnicienVo {
        if (this._searchDepartementTechnicien == null) {
            this._searchDepartementTechnicien = new DepartementTechnicienVo();
        }
        return this._searchDepartementTechnicien;
    }

    set searchDepartementTechnicien(value: DepartementTechnicienVo) {
        this._searchDepartementTechnicien = value;
    }

    public findAll() {
        return this.http.get<Array<DepartementTechnicienVo>>(this.API);
    }

    public save(): Observable<DepartementTechnicienVo> {
        return this.http.post<DepartementTechnicienVo>(this.API, {
            ...this.selectedDepartementTechnicien,
            dateFin: moment(this.selectedDepartementTechnicien.dateFin).format('YYYY-MM-DD')
        });
    }

    delete(departementTechnicien: DepartementTechnicienVo) {
        return this.http.delete<number>(this.API + 'id/' + departementTechnicien.id);
    }

    public edit(): Observable<DepartementTechnicienVo> {
        return this.http.put<DepartementTechnicienVo>(this.API, this.selectedDepartementTechnicien);
    }

    public findByCriteria(departementTechnicien: DepartementTechnicienVo): Observable<Array<DepartementTechnicienVo>> {
        return this.http.post<Array<DepartementTechnicienVo>>(this.API + 'search', departementTechnicien);
    }

    public findByIdWithAssociatedList(departementTechnicien: DepartementTechnicienVo): Observable<DepartementTechnicienVo> {
        return this.http.get<DepartementTechnicienVo>(this.API + 'detail/id/' + departementTechnicien.id);
    }

}
