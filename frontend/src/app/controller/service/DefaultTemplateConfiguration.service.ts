import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import {environment} from 'src/environments/environment';


import {DefaultTemplateConfigurationVo} from '../model/DefaultTemplateConfiguration.model';


@Injectable({
    providedIn: 'root'
})
export class DefaultTemplateConfigurationService {
    public editDefaultTemplateConfiguration$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/defaultTemplateConfiguration/';
        });
    }

    private _defaultTemplateConfigurations: Array<DefaultTemplateConfigurationVo>;

    get defaultTemplateConfigurations(): Array<DefaultTemplateConfigurationVo> {
        if (this._defaultTemplateConfigurations == null) {
            this._defaultTemplateConfigurations = new Array<DefaultTemplateConfigurationVo>();
        }
        return this._defaultTemplateConfigurations;
    }

    set defaultTemplateConfigurations(value: Array<DefaultTemplateConfigurationVo>) {
        this._defaultTemplateConfigurations = value;
    }

    private _selectedDefaultTemplateConfiguration: DefaultTemplateConfigurationVo;

    get selectedDefaultTemplateConfiguration(): DefaultTemplateConfigurationVo {
        if (this._selectedDefaultTemplateConfiguration == null) {
            this._selectedDefaultTemplateConfiguration = new DefaultTemplateConfigurationVo();
        }
        return this._selectedDefaultTemplateConfiguration;
    }

    set selectedDefaultTemplateConfiguration(value: DefaultTemplateConfigurationVo) {
        this._selectedDefaultTemplateConfiguration = value;
    }

    private _defaultTemplateConfigurationSelections: Array<DefaultTemplateConfigurationVo>;

    // methods

    get defaultTemplateConfigurationSelections(): Array<DefaultTemplateConfigurationVo> {
        if (this._defaultTemplateConfigurationSelections == null) {
            this._defaultTemplateConfigurationSelections = new Array<DefaultTemplateConfigurationVo>();
        }
        return this._defaultTemplateConfigurationSelections;
    }

    set defaultTemplateConfigurationSelections(value: Array<DefaultTemplateConfigurationVo>) {
        this._defaultTemplateConfigurationSelections = value;
    }

    private _createDefaultTemplateConfigurationDialog: boolean;

    get createDefaultTemplateConfigurationDialog(): boolean {
        return this._createDefaultTemplateConfigurationDialog;
    }

    set createDefaultTemplateConfigurationDialog(value: boolean) {
        this._createDefaultTemplateConfigurationDialog = value;
    }

    private _editDefaultTemplateConfigurationDialog: boolean;

    get editDefaultTemplateConfigurationDialog(): boolean {
        return this._editDefaultTemplateConfigurationDialog;
    }

    // getters and setters

    set editDefaultTemplateConfigurationDialog(value: boolean) {
        this._editDefaultTemplateConfigurationDialog = value;
    }

    private _viewDefaultTemplateConfigurationDialog: boolean;

    get viewDefaultTemplateConfigurationDialog(): boolean {
        return this._viewDefaultTemplateConfigurationDialog;
    }

    set viewDefaultTemplateConfigurationDialog(value: boolean) {
        this._viewDefaultTemplateConfigurationDialog = value;
    }

    private _searchDefaultTemplateConfiguration: DefaultTemplateConfigurationVo;

    get searchDefaultTemplateConfiguration(): DefaultTemplateConfigurationVo {
        if (this._searchDefaultTemplateConfiguration == null) {
            this._searchDefaultTemplateConfiguration = new DefaultTemplateConfigurationVo();
        }
        return this._searchDefaultTemplateConfiguration;
    }

    set searchDefaultTemplateConfiguration(value: DefaultTemplateConfigurationVo) {
        this._searchDefaultTemplateConfiguration = value;
    }

    public findDefaultTemplateConfiguration() {
        return this.http.get<DefaultTemplateConfigurationVo>(this.API + "default/template/configuration");
    }

    public findAll() {
        return this.http.get<Array<DefaultTemplateConfigurationVo>>(this.API);
    }

    public save(): Observable<DefaultTemplateConfigurationVo> {
        return this.http.post<DefaultTemplateConfigurationVo>(this.API, this.selectedDefaultTemplateConfiguration);
    }

    delete(defaultTemplateConfiguration: DefaultTemplateConfigurationVo) {
        return this.http.delete<number>(this.API + 'id/' + defaultTemplateConfiguration.id);
    }

    public edit(): Observable<DefaultTemplateConfigurationVo> {
        return this.http.put<DefaultTemplateConfigurationVo>(this.API, this.selectedDefaultTemplateConfiguration);
    }

    public findByCriteria(defaultTemplateConfiguration: DefaultTemplateConfigurationVo): Observable<Array<DefaultTemplateConfigurationVo>> {
        return this.http.post<Array<DefaultTemplateConfigurationVo>>(this.API + 'search', defaultTemplateConfiguration);
    }

    public findByIdWithAssociatedList(defaultTemplateConfiguration: DefaultTemplateConfigurationVo): Observable<DefaultTemplateConfigurationVo> {
        return this.http.get<DefaultTemplateConfigurationVo>(this.API + 'detail/id/' + defaultTemplateConfiguration.id);
    }

}
