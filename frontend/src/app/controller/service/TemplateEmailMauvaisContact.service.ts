import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {RoleService} from './role.service';
import {environment} from 'src/environments/environment';


import {TemplateEmailMauvaisContactVo} from '../model/TemplateEmailMauvaisContact.model';


@Injectable({
    providedIn: 'root'
})
export class TemplateEmailMauvaisContactService {
    public editTemplateEmailMauvaisContact$ = new BehaviorSubject<boolean>(false);
    private API = '';
    private role$: Observable<string>;

    constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl + role.toLowerCase() + '/templateEmailMauvaisContact/';
        });
    }

    private _templateEmailMauvaisContacts: Array<TemplateEmailMauvaisContactVo>;

    get templateEmailMauvaisContacts(): Array<TemplateEmailMauvaisContactVo> {
        if (this._templateEmailMauvaisContacts == null) {
            this._templateEmailMauvaisContacts = new Array<TemplateEmailMauvaisContactVo>();
        }
        return this._templateEmailMauvaisContacts;
    }

    set templateEmailMauvaisContacts(value: Array<TemplateEmailMauvaisContactVo>) {
        this._templateEmailMauvaisContacts = value;
    }

    private _selectedTemplateEmailMauvaisContact: TemplateEmailMauvaisContactVo;

    get selectedTemplateEmailMauvaisContact(): TemplateEmailMauvaisContactVo {
        if (this._selectedTemplateEmailMauvaisContact == null) {
            this._selectedTemplateEmailMauvaisContact = new TemplateEmailMauvaisContactVo();
        }
        return this._selectedTemplateEmailMauvaisContact;
    }

    set selectedTemplateEmailMauvaisContact(value: TemplateEmailMauvaisContactVo) {
        this._selectedTemplateEmailMauvaisContact = value;
    }

    private _templateEmailMauvaisContactSelections: Array<TemplateEmailMauvaisContactVo>;

    // methods

    get templateEmailMauvaisContactSelections(): Array<TemplateEmailMauvaisContactVo> {
        if (this._templateEmailMauvaisContactSelections == null) {
            this._templateEmailMauvaisContactSelections = new Array<TemplateEmailMauvaisContactVo>();
        }
        return this._templateEmailMauvaisContactSelections;
    }

    set templateEmailMauvaisContactSelections(value: Array<TemplateEmailMauvaisContactVo>) {
        this._templateEmailMauvaisContactSelections = value;
    }

    private _createTemplateEmailMauvaisContactDialog: boolean;

    get createTemplateEmailMauvaisContactDialog(): boolean {
        return this._createTemplateEmailMauvaisContactDialog;
    }

    set createTemplateEmailMauvaisContactDialog(value: boolean) {
        this._createTemplateEmailMauvaisContactDialog = value;
    }

    private _editTemplateEmailMauvaisContactDialog: boolean;

    // getters and setters

    get editTemplateEmailMauvaisContactDialog(): boolean {
        return this._editTemplateEmailMauvaisContactDialog;
    }

    set editTemplateEmailMauvaisContactDialog(value: boolean) {
        this._editTemplateEmailMauvaisContactDialog = value;
    }

    private _viewTemplateEmailMauvaisContactDialog: boolean;

    get viewTemplateEmailMauvaisContactDialog(): boolean {
        return this._viewTemplateEmailMauvaisContactDialog;
    }

    set viewTemplateEmailMauvaisContactDialog(value: boolean) {
        this._viewTemplateEmailMauvaisContactDialog = value;
    }

    private _searchTemplateEmailMauvaisContact: TemplateEmailMauvaisContactVo;

    get searchTemplateEmailMauvaisContact(): TemplateEmailMauvaisContactVo {
        if (this._searchTemplateEmailMauvaisContact == null) {
            this._searchTemplateEmailMauvaisContact = new TemplateEmailMauvaisContactVo();
        }
        return this._searchTemplateEmailMauvaisContact;
    }

    set searchTemplateEmailMauvaisContact(value: TemplateEmailMauvaisContactVo) {
        this._searchTemplateEmailMauvaisContact = value;
    }

    public findAll() {
        return this.http.get<Array<TemplateEmailMauvaisContactVo>>(this.API);
    }

    public save(): Observable<TemplateEmailMauvaisContactVo> {
        return this.http.post<TemplateEmailMauvaisContactVo>(this.API, this.selectedTemplateEmailMauvaisContact);
    }

    delete(templateEmailMauvaisContact: TemplateEmailMauvaisContactVo) {
        return this.http.delete<number>(this.API + 'id/' + templateEmailMauvaisContact.id);
    }

    public edit(): Observable<TemplateEmailMauvaisContactVo> {
        return this.http.put<TemplateEmailMauvaisContactVo>(this.API, this.selectedTemplateEmailMauvaisContact);
    }

    public findByCriteria(templateEmailMauvaisContact: TemplateEmailMauvaisContactVo): Observable<Array<TemplateEmailMauvaisContactVo>> {
        return this.http.post<Array<TemplateEmailMauvaisContactVo>>(this.API + 'search', templateEmailMauvaisContact);
    }

    public findByIdWithAssociatedList(templateEmailMauvaisContact: TemplateEmailMauvaisContactVo): Observable<TemplateEmailMauvaisContactVo> {
        return this.http.get<TemplateEmailMauvaisContactVo>(this.API + 'detail/id/' + templateEmailMauvaisContact.id);
    }

}
