import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import {environment} from 'src/environments/environment';


import {RaisonArretTravailVo} from '../model/RaisonArretTravail.model';


@Injectable({
    providedIn: 'root'
})
export class RaisonArretTravailService {
    public editRaisonArretTravail$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/raisonArretTravail/';
        });
    }

    private _raisonArretTravails: Array<RaisonArretTravailVo>;

    get raisonArretTravails(): Array<RaisonArretTravailVo> {
        if (this._raisonArretTravails == null) {
            this._raisonArretTravails = new Array<RaisonArretTravailVo>();
        }
        return this._raisonArretTravails;
    }

    set raisonArretTravails(value: Array<RaisonArretTravailVo>) {
        this._raisonArretTravails = value;
    }

    private _selectedRaisonArretTravail: RaisonArretTravailVo;

    get selectedRaisonArretTravail(): RaisonArretTravailVo {
        if (this._selectedRaisonArretTravail == null) {
            this._selectedRaisonArretTravail = new RaisonArretTravailVo();
        }
        return this._selectedRaisonArretTravail;
    }

    set selectedRaisonArretTravail(value: RaisonArretTravailVo) {
        this._selectedRaisonArretTravail = value;
    }

    private _raisonArretTravailSelections: Array<RaisonArretTravailVo>;

    // methods

    get raisonArretTravailSelections(): Array<RaisonArretTravailVo> {
        if (this._raisonArretTravailSelections == null) {
            this._raisonArretTravailSelections = new Array<RaisonArretTravailVo>();
        }
        return this._raisonArretTravailSelections;
    }

    set raisonArretTravailSelections(value: Array<RaisonArretTravailVo>) {
        this._raisonArretTravailSelections = value;
    }

    private _createRaisonArretTravailDialog: boolean;

    get createRaisonArretTravailDialog(): boolean {
        return this._createRaisonArretTravailDialog;
    }

    set createRaisonArretTravailDialog(value: boolean) {
        this._createRaisonArretTravailDialog = value;
    }

    private _editRaisonArretTravailDialog: boolean;

    // getters and setters

    get editRaisonArretTravailDialog(): boolean {
        return this._editRaisonArretTravailDialog;
    }

    set editRaisonArretTravailDialog(value: boolean) {
        this._editRaisonArretTravailDialog = value;
    }

    private _viewRaisonArretTravailDialog: boolean;

    get viewRaisonArretTravailDialog(): boolean {
        return this._viewRaisonArretTravailDialog;
    }

    set viewRaisonArretTravailDialog(value: boolean) {
        this._viewRaisonArretTravailDialog = value;
    }

    private _searchRaisonArretTravail: RaisonArretTravailVo;

    get searchRaisonArretTravail(): RaisonArretTravailVo {
        if (this._searchRaisonArretTravail == null) {
            this._searchRaisonArretTravail = new RaisonArretTravailVo();
        }
        return this._searchRaisonArretTravail;
    }

    set searchRaisonArretTravail(value: RaisonArretTravailVo) {
        this._searchRaisonArretTravail = value;
    }

    public findAll() {
        return this.http.get<Array<RaisonArretTravailVo>>(this.API);
    }

    public save(): Observable<RaisonArretTravailVo> {
        return this.http.post<RaisonArretTravailVo>(this.API, this.selectedRaisonArretTravail);
    }

    delete(raisonArretTravail: RaisonArretTravailVo) {
        return this.http.delete<number>(this.API + 'id/' + raisonArretTravail.id);
    }

    public edit(): Observable<RaisonArretTravailVo> {
        return this.http.put<RaisonArretTravailVo>(this.API, this.selectedRaisonArretTravail);
    }

    public findByCriteria(raisonArretTravail: RaisonArretTravailVo): Observable<Array<RaisonArretTravailVo>> {
        return this.http.post<Array<RaisonArretTravailVo>>(this.API + 'search', raisonArretTravail);
    }

    public findByIdWithAssociatedList(raisonArretTravail: RaisonArretTravailVo): Observable<RaisonArretTravailVo> {
        return this.http.get<RaisonArretTravailVo>(this.API + 'detail/id/' + raisonArretTravail.id);
    }

}
