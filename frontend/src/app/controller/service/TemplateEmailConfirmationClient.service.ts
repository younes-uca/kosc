import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import {environment} from 'src/environments/environment';


import {TemplateEmailConfirmationClientVo} from '../model/TemplateEmailConfirmationClient.model';


@Injectable({
    providedIn: 'root'
})
export class TemplateEmailConfirmationClientService {
    public editTemplateEmailConfirmationClient$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/templateEmailConfirmationClient/';
        });
    }

    private _templateEmailConfirmationClients: Array<TemplateEmailConfirmationClientVo>;

    get templateEmailConfirmationClients(): Array<TemplateEmailConfirmationClientVo> {
        if (this._templateEmailConfirmationClients == null) {
            this._templateEmailConfirmationClients = new Array<TemplateEmailConfirmationClientVo>();
        }
        return this._templateEmailConfirmationClients;
    }

    set templateEmailConfirmationClients(value: Array<TemplateEmailConfirmationClientVo>) {
        this._templateEmailConfirmationClients = value;
    }

    private _selectedTemplateEmailConfirmationClient: TemplateEmailConfirmationClientVo;

    get selectedTemplateEmailConfirmationClient(): TemplateEmailConfirmationClientVo {
        if (this._selectedTemplateEmailConfirmationClient == null) {
            this._selectedTemplateEmailConfirmationClient = new TemplateEmailConfirmationClientVo();
        }
        return this._selectedTemplateEmailConfirmationClient;
    }

    set selectedTemplateEmailConfirmationClient(value: TemplateEmailConfirmationClientVo) {
        this._selectedTemplateEmailConfirmationClient = value;
    }

    private _templateEmailConfirmationClientSelections: Array<TemplateEmailConfirmationClientVo>;

    // methods

    get templateEmailConfirmationClientSelections(): Array<TemplateEmailConfirmationClientVo> {
        if (this._templateEmailConfirmationClientSelections == null) {
            this._templateEmailConfirmationClientSelections = new Array<TemplateEmailConfirmationClientVo>();
        }
        return this._templateEmailConfirmationClientSelections;
    }

    set templateEmailConfirmationClientSelections(value: Array<TemplateEmailConfirmationClientVo>) {
        this._templateEmailConfirmationClientSelections = value;
    }

    private _createTemplateEmailConfirmationClientDialog: boolean;

    get createTemplateEmailConfirmationClientDialog(): boolean {
        return this._createTemplateEmailConfirmationClientDialog;
    }

    set createTemplateEmailConfirmationClientDialog(value: boolean) {
        this._createTemplateEmailConfirmationClientDialog = value;
    }

    private _editTemplateEmailConfirmationClientDialog: boolean;

    // getters and setters

    get editTemplateEmailConfirmationClientDialog(): boolean {
        return this._editTemplateEmailConfirmationClientDialog;
    }

    set editTemplateEmailConfirmationClientDialog(value: boolean) {
        this._editTemplateEmailConfirmationClientDialog = value;
    }

    private _viewTemplateEmailConfirmationClientDialog: boolean;

    get viewTemplateEmailConfirmationClientDialog(): boolean {
        return this._viewTemplateEmailConfirmationClientDialog;
    }

    set viewTemplateEmailConfirmationClientDialog(value: boolean) {
        this._viewTemplateEmailConfirmationClientDialog = value;
    }

    private _searchTemplateEmailConfirmationClient: TemplateEmailConfirmationClientVo;

    get searchTemplateEmailConfirmationClient(): TemplateEmailConfirmationClientVo {
        if (this._searchTemplateEmailConfirmationClient == null) {
            this._searchTemplateEmailConfirmationClient = new TemplateEmailConfirmationClientVo();
        }
        return this._searchTemplateEmailConfirmationClient;
    }

    set searchTemplateEmailConfirmationClient(value: TemplateEmailConfirmationClientVo) {
        this._searchTemplateEmailConfirmationClient = value;
    }

    public findAll() {
        return this.http.get<Array<TemplateEmailConfirmationClientVo>>(this.API);
    }

    public save(): Observable<TemplateEmailConfirmationClientVo> {
        return this.http.post<TemplateEmailConfirmationClientVo>(this.API, this.selectedTemplateEmailConfirmationClient);
    }

    delete(templateEmailConfirmationClient: TemplateEmailConfirmationClientVo) {
        return this.http.delete<number>(this.API + 'id/' + templateEmailConfirmationClient.id);
    }

    public edit(): Observable<TemplateEmailConfirmationClientVo> {
        return this.http.put<TemplateEmailConfirmationClientVo>(this.API, this.selectedTemplateEmailConfirmationClient);
    }

    public findByCriteria(templateEmailConfirmationClient: TemplateEmailConfirmationClientVo): Observable<Array<TemplateEmailConfirmationClientVo>> {
        return this.http.post<Array<TemplateEmailConfirmationClientVo>>(this.API + 'search', templateEmailConfirmationClient);
    }

    public findByIdWithAssociatedList(templateEmailConfirmationClient: TemplateEmailConfirmationClientVo): Observable<TemplateEmailConfirmationClientVo> {
        return this.http.get<TemplateEmailConfirmationClientVo>(this.API + 'detail/id/' + templateEmailConfirmationClient.id);
    }

}
