import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {TemplateEmailReportDemandeClientClientInjoignableVo} from '../model/TemplateEmailReportDemandeClientClientInjoignable.model';


@Injectable({
  providedIn: 'root'
})
export class TemplateEmailReportDemandeClientClientInjoignableService {
    private API = '' ;
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/templateEmailReportDemandeClientClientInjoignable/';
        });
    }
     private _templateEmailReportDemandeClientClientInjoignables: Array<TemplateEmailReportDemandeClientClientInjoignableVo> ;
     private _selectedTemplateEmailReportDemandeClientClientInjoignable: TemplateEmailReportDemandeClientClientInjoignableVo;
     private _templateEmailReportDemandeClientClientInjoignableSelections: Array<TemplateEmailReportDemandeClientClientInjoignableVo>;
     private _createTemplateEmailReportDemandeClientClientInjoignableDialog: boolean;
     private _editTemplateEmailReportDemandeClientClientInjoignableDialog: boolean;
     private _viewTemplateEmailReportDemandeClientClientInjoignableDialog: boolean;
     public editTemplateEmailReportDemandeClientClientInjoignable$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchTemplateEmailReportDemandeClientClientInjoignable: TemplateEmailReportDemandeClientClientInjoignableVo ;




    public findAll(){
     return this.http.get<Array<TemplateEmailReportDemandeClientClientInjoignableVo>>(this.API);
    }

    public save(): Observable<TemplateEmailReportDemandeClientClientInjoignableVo> {
         return this.http.post<TemplateEmailReportDemandeClientClientInjoignableVo>(this.API, this.selectedTemplateEmailReportDemandeClientClientInjoignable);
    }

    delete(templateEmailReportDemandeClientClientInjoignable: TemplateEmailReportDemandeClientClientInjoignableVo) {
         return this.http.delete<number>(this.API + 'id/' + templateEmailReportDemandeClientClientInjoignable.id);
    }


    public edit(): Observable<TemplateEmailReportDemandeClientClientInjoignableVo> {
        return this.http.put<TemplateEmailReportDemandeClientClientInjoignableVo>(this.API, this.selectedTemplateEmailReportDemandeClientClientInjoignable);
    }


     public findByCriteria(templateEmailReportDemandeClientClientInjoignable:TemplateEmailReportDemandeClientClientInjoignableVo): Observable<Array<TemplateEmailReportDemandeClientClientInjoignableVo>>{
           return this.http.post<Array<TemplateEmailReportDemandeClientClientInjoignableVo>>(this.API + 'search', templateEmailReportDemandeClientClientInjoignable);
    }

   public findByIdWithAssociatedList(templateEmailReportDemandeClientClientInjoignable:TemplateEmailReportDemandeClientClientInjoignableVo):Observable<TemplateEmailReportDemandeClientClientInjoignableVo>{
         return this.http.get<TemplateEmailReportDemandeClientClientInjoignableVo>(this.API + 'detail/id/' +templateEmailReportDemandeClientClientInjoignable.id);
    }

    // getters and setters


    get templateEmailReportDemandeClientClientInjoignables(): Array<TemplateEmailReportDemandeClientClientInjoignableVo> {
    if(this._templateEmailReportDemandeClientClientInjoignables == null){
    this._templateEmailReportDemandeClientClientInjoignables = new Array<TemplateEmailReportDemandeClientClientInjoignableVo>();
    }
return this._templateEmailReportDemandeClientClientInjoignables;
       }

    set templateEmailReportDemandeClientClientInjoignables(value: Array<TemplateEmailReportDemandeClientClientInjoignableVo>) {
        this._templateEmailReportDemandeClientClientInjoignables = value;
       }

    get selectedTemplateEmailReportDemandeClientClientInjoignable(): TemplateEmailReportDemandeClientClientInjoignableVo {
    if(this._selectedTemplateEmailReportDemandeClientClientInjoignable == null){
    this._selectedTemplateEmailReportDemandeClientClientInjoignable = new TemplateEmailReportDemandeClientClientInjoignableVo();
    }
           return this._selectedTemplateEmailReportDemandeClientClientInjoignable;
       }

    set selectedTemplateEmailReportDemandeClientClientInjoignable(value: TemplateEmailReportDemandeClientClientInjoignableVo) {
        this._selectedTemplateEmailReportDemandeClientClientInjoignable = value;
       }

    get templateEmailReportDemandeClientClientInjoignableSelections(): Array<TemplateEmailReportDemandeClientClientInjoignableVo> {
    if(this._templateEmailReportDemandeClientClientInjoignableSelections == null){
    this._templateEmailReportDemandeClientClientInjoignableSelections = new Array<TemplateEmailReportDemandeClientClientInjoignableVo>();
    }
        return this._templateEmailReportDemandeClientClientInjoignableSelections;
       }


    set templateEmailReportDemandeClientClientInjoignableSelections(value: Array<TemplateEmailReportDemandeClientClientInjoignableVo>) {
        this._templateEmailReportDemandeClientClientInjoignableSelections = value;
       }

    get createTemplateEmailReportDemandeClientClientInjoignableDialog(): boolean {
        return this._createTemplateEmailReportDemandeClientClientInjoignableDialog;
       }

    set createTemplateEmailReportDemandeClientClientInjoignableDialog(value: boolean) {
        this._createTemplateEmailReportDemandeClientClientInjoignableDialog = value;
       }

    get editTemplateEmailReportDemandeClientClientInjoignableDialog(): boolean {
        return this._editTemplateEmailReportDemandeClientClientInjoignableDialog;
       }

    set editTemplateEmailReportDemandeClientClientInjoignableDialog(value: boolean) {
        this._editTemplateEmailReportDemandeClientClientInjoignableDialog = value;
       }

    get viewTemplateEmailReportDemandeClientClientInjoignableDialog(): boolean {
        return this._viewTemplateEmailReportDemandeClientClientInjoignableDialog;
       }

    set viewTemplateEmailReportDemandeClientClientInjoignableDialog(value: boolean) {
        this._viewTemplateEmailReportDemandeClientClientInjoignableDialog = value;
       }

     get searchTemplateEmailReportDemandeClientClientInjoignable(): TemplateEmailReportDemandeClientClientInjoignableVo {
     if(this._searchTemplateEmailReportDemandeClientClientInjoignable==null){
    this._searchTemplateEmailReportDemandeClientClientInjoignable=new TemplateEmailReportDemandeClientClientInjoignableVo();
    }
        return this._searchTemplateEmailReportDemandeClientClientInjoignable;
    }

    set searchTemplateEmailReportDemandeClientClientInjoignable(value: TemplateEmailReportDemandeClientClientInjoignableVo) {
        this._searchTemplateEmailReportDemandeClientClientInjoignable = value;
       }
}
