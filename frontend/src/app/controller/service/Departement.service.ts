import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import {environment} from 'src/environments/environment';


import {DepartementVo} from '../model/Departement.model';


@Injectable({
    providedIn: 'root'
})
export class DepartementService {
    public editDepartement$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/departement/';
        });
    }

    private _departements: Array<DepartementVo>;

    get departements(): Array<DepartementVo> {
        if (this._departements == null) {
            this._departements = new Array<DepartementVo>();
        }
        return this._departements;
    }

    set departements(value: Array<DepartementVo>) {
        this._departements = value;
    }

    private _selectedDepartement: DepartementVo;

    get selectedDepartement(): DepartementVo {
        if (this._selectedDepartement == null) {
            this._selectedDepartement = new DepartementVo();
        }
        return this._selectedDepartement;
    }

    set selectedDepartement(value: DepartementVo) {
        this._selectedDepartement = value;
    }

    private _departementSelections: Array<DepartementVo>;

    // methods

    get departementSelections(): Array<DepartementVo> {
        if (this._departementSelections == null) {
            this._departementSelections = new Array<DepartementVo>();
        }
        return this._departementSelections;
    }

    set departementSelections(value: Array<DepartementVo>) {
        this._departementSelections = value;
    }

    private _createDepartementDialog: boolean;

    get createDepartementDialog(): boolean {
        return this._createDepartementDialog;
    }

    set createDepartementDialog(value: boolean) {
        this._createDepartementDialog = value;
    }

    private _editDepartementDialog: boolean;

    // getters and setters

    get editDepartementDialog(): boolean {
        return this._editDepartementDialog;
    }

    set editDepartementDialog(value: boolean) {
        this._editDepartementDialog = value;
    }

    private _viewDepartementDialog: boolean;

    get viewDepartementDialog(): boolean {
        return this._viewDepartementDialog;
    }

    set viewDepartementDialog(value: boolean) {
        this._viewDepartementDialog = value;
    }

    private _searchDepartement: DepartementVo;

    get searchDepartement(): DepartementVo {
        if (this._searchDepartement == null) {
            this._searchDepartement = new DepartementVo();
        }
        return this._searchDepartement;
    }

    set searchDepartement(value: DepartementVo) {
        this._searchDepartement = value;
    }

    public findAll() {
        return this.http.get<Array<DepartementVo>>(this.API);
    }

    public save(): Observable<DepartementVo> {
        return this.http.post<DepartementVo>(this.API, this.selectedDepartement);
    }

    delete(departement: DepartementVo) {
        return this.http.delete<number>(this.API + 'id/' + departement.id);
    }

    public edit(): Observable<DepartementVo> {
        return this.http.put<DepartementVo>(this.API, this.selectedDepartement);
    }

    public findByCriteria(departement: DepartementVo): Observable<Array<DepartementVo>> {
        return this.http.post<Array<DepartementVo>>(this.API + 'search', departement);
    }

    public findByIdWithAssociatedList(departement: DepartementVo): Observable<DepartementVo> {
        return this.http.get<DepartementVo>(this.API + 'detail/id/' + departement.id);
    }

}
