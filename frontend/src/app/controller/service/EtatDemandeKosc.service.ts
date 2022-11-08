import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import {environment} from 'src/environments/environment';


import {EtatDemandeKoscVo} from '../model/EtatDemandeKosc.model';
import {OrdreKoscService} from "./OrdreKosc.service";
import {OrdreKoscVo} from "../model/OrdreKosc.model";


@Injectable({
    providedIn: 'root'
})
export class EtatDemandeKoscService {
    public editEtatDemandeKosc$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/etatDemandeKosc/';
        });
    }

    private _etatDemandeKoscs: Array<EtatDemandeKoscVo>;

    public async loadEtatDemandeKoscExcept(etatNonDesire : Array<String>, searchOrdreKosc: OrdreKoscVo) {
        this.findAll().subscribe(etatDemandeKoscs =>{
                this.etatDemandeKoscs = etatDemandeKoscs;
                searchOrdreKosc.etatDemandeKoscVos = this.etatDemandeKoscs.filter(e => etatNonDesire.indexOf(e.code) == -1);
            });
    }
    get etatDemandeKoscs(): Array<EtatDemandeKoscVo> {
        if (this._etatDemandeKoscs == null) {
            this._etatDemandeKoscs = new Array<EtatDemandeKoscVo>();
        }
        return this._etatDemandeKoscs;
    }

    set etatDemandeKoscs(value: Array<EtatDemandeKoscVo>) {
        this._etatDemandeKoscs = value;
    }

    private _selectedEtatDemandeKosc: EtatDemandeKoscVo;

    get selectedEtatDemandeKosc(): EtatDemandeKoscVo {
        if (this._selectedEtatDemandeKosc == null) {
            this._selectedEtatDemandeKosc = new EtatDemandeKoscVo();
        }
        return this._selectedEtatDemandeKosc;
    }

    set selectedEtatDemandeKosc(value: EtatDemandeKoscVo) {
        this._selectedEtatDemandeKosc = value;
    }

    private _etatDemandeKoscSelections: Array<EtatDemandeKoscVo>;

    // methods

    get etatDemandeKoscSelections(): Array<EtatDemandeKoscVo> {
        if (this._etatDemandeKoscSelections == null) {
            this._etatDemandeKoscSelections = new Array<EtatDemandeKoscVo>();
        }
        return this._etatDemandeKoscSelections;
    }

    set etatDemandeKoscSelections(value: Array<EtatDemandeKoscVo>) {
        this._etatDemandeKoscSelections = value;
    }

    private _createEtatDemandeKoscDialog: boolean;

    get createEtatDemandeKoscDialog(): boolean {
        return this._createEtatDemandeKoscDialog;
    }

    set createEtatDemandeKoscDialog(value: boolean) {
        this._createEtatDemandeKoscDialog = value;
    }

    private _editEtatDemandeKoscDialog: boolean;

    get editEtatDemandeKoscDialog(): boolean {
        return this._editEtatDemandeKoscDialog;
    }

    // getters and setters

    set editEtatDemandeKoscDialog(value: boolean) {
        this._editEtatDemandeKoscDialog = value;
    }

    private _viewEtatDemandeKoscDialog: boolean;

    get viewEtatDemandeKoscDialog(): boolean {
        return this._viewEtatDemandeKoscDialog;
    }

    set viewEtatDemandeKoscDialog(value: boolean) {
        this._viewEtatDemandeKoscDialog = value;
    }

    private _searchEtatDemandeKosc: EtatDemandeKoscVo;

    get searchEtatDemandeKosc(): EtatDemandeKoscVo {
        if (this._searchEtatDemandeKosc == null) {
            this._searchEtatDemandeKosc = new EtatDemandeKoscVo();
        }
        return this._searchEtatDemandeKosc;
    }

    set searchEtatDemandeKosc(value: EtatDemandeKoscVo) {
        this._searchEtatDemandeKosc = value;
    }

    public findByCode(code: string, etats: Array<EtatDemandeKoscVo>) {
        return etats.find(e => e.code === code);

    }

    public findAll() {
        return this.http.get<Array<EtatDemandeKoscVo>>(this.API);
    }

    public save(): Observable<EtatDemandeKoscVo> {
        return this.http.post<EtatDemandeKoscVo>(this.API, this.selectedEtatDemandeKosc);
    }

    delete(etatDemandeKosc: EtatDemandeKoscVo) {
        return this.http.delete<number>(this.API + 'id/' + etatDemandeKosc.id);
    }

    public edit(): Observable<EtatDemandeKoscVo> {
        return this.http.put<EtatDemandeKoscVo>(this.API, this.selectedEtatDemandeKosc);
    }

    public findByCriteria(etatDemandeKosc: EtatDemandeKoscVo): Observable<Array<EtatDemandeKoscVo>> {
        return this.http.post<Array<EtatDemandeKoscVo>>(this.API + 'search', etatDemandeKosc);
    }

    public findByIdWithAssociatedList(etatDemandeKosc: EtatDemandeKoscVo): Observable<EtatDemandeKoscVo> {
        return this.http.get<EtatDemandeKoscVo>(this.API + 'detail/id/' + etatDemandeKosc.id);
    }

}
