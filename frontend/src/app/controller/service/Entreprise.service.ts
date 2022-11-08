import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import {environment} from 'src/environments/environment';


import {EntrepriseVo} from '../model/Entreprise.model';


@Injectable({
    providedIn: 'root'
})
export class EntrepriseService {
    public editEntreprise$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/entreprise/';
        });
    }

    private _entreprises: Array<EntrepriseVo>;

    get entreprises(): Array<EntrepriseVo> {
        if (this._entreprises == null) {
            this._entreprises = new Array<EntrepriseVo>();
        }
        return this._entreprises;
    }

    set entreprises(value: Array<EntrepriseVo>) {
        this._entreprises = value;
    }

    private _selectedEntreprise: EntrepriseVo;

    get selectedEntreprise(): EntrepriseVo {
        if (this._selectedEntreprise == null) {
            this._selectedEntreprise = new EntrepriseVo();
        }
        return this._selectedEntreprise;
    }

    set selectedEntreprise(value: EntrepriseVo) {
        this._selectedEntreprise = value;
    }

    private _entrepriseSelections: Array<EntrepriseVo>;

    // methods

    get entrepriseSelections(): Array<EntrepriseVo> {
        if (this._entrepriseSelections == null) {
            this._entrepriseSelections = new Array<EntrepriseVo>();
        }
        return this._entrepriseSelections;
    }

    set entrepriseSelections(value: Array<EntrepriseVo>) {
        this._entrepriseSelections = value;
    }

    private _createEntrepriseDialog: boolean;

    get createEntrepriseDialog(): boolean {
        return this._createEntrepriseDialog;
    }

    set createEntrepriseDialog(value: boolean) {
        this._createEntrepriseDialog = value;
    }

    private _editEntrepriseDialog: boolean;

    // getters and setters

    get editEntrepriseDialog(): boolean {
        return this._editEntrepriseDialog;
    }

    set editEntrepriseDialog(value: boolean) {
        this._editEntrepriseDialog = value;
    }

    private _viewEntrepriseDialog: boolean;

    get viewEntrepriseDialog(): boolean {
        return this._viewEntrepriseDialog;
    }

    set viewEntrepriseDialog(value: boolean) {
        this._viewEntrepriseDialog = value;
    }

    private _searchEntreprise: EntrepriseVo;

    get searchEntreprise(): EntrepriseVo {
        if (this._searchEntreprise == null) {
            this._searchEntreprise = new EntrepriseVo();
        }
        return this._searchEntreprise;
    }

    set searchEntreprise(value: EntrepriseVo) {
        this._searchEntreprise = value;
    }

    public findAll() {
        return this.http.get<Array<EntrepriseVo>>(this.API);
    }

    public save(): Observable<EntrepriseVo> {
        return this.http.post<EntrepriseVo>(this.API, this.selectedEntreprise);
    }

    delete(entreprise: EntrepriseVo) {
        return this.http.delete<number>(this.API + 'id/' + entreprise.id);
    }

    public edit(): Observable<EntrepriseVo> {
        return this.http.put<EntrepriseVo>(this.API, this.selectedEntreprise);
    }

    public findByCriteria(entreprise: EntrepriseVo): Observable<Array<EntrepriseVo>> {
        return this.http.post<Array<EntrepriseVo>>(this.API + 'search', entreprise);
    }

    public findByIdWithAssociatedList(entreprise: EntrepriseVo): Observable<EntrepriseVo> {
        return this.http.get<EntrepriseVo>(this.API + 'detail/id/' + entreprise.id);
    }

}
