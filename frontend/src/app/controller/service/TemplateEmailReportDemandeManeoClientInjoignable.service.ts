import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {TemplateEmailReportDemandeManeoClientInjoignableVo} from '../model/TemplateEmailReportDemandeManeoClientInjoignable.model';


@Injectable({
  providedIn: 'root'
})
export class TemplateEmailReportDemandeManeoClientInjoignableService {
    private API = '' ;
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/templateEmailReportDemandeManeoClientInjoignable/';
        });
    }
     private _templateEmailReportDemandeManeoClientInjoignables: Array<TemplateEmailReportDemandeManeoClientInjoignableVo> ;
     private _selectedTemplateEmailReportDemandeManeoClientInjoignable: TemplateEmailReportDemandeManeoClientInjoignableVo;
     private _templateEmailReportDemandeManeoClientInjoignableSelections: Array<TemplateEmailReportDemandeManeoClientInjoignableVo>;
     private _createTemplateEmailReportDemandeManeoClientInjoignableDialog: boolean;
     private _editTemplateEmailReportDemandeManeoClientInjoignableDialog: boolean;
     private _viewTemplateEmailReportDemandeManeoClientInjoignableDialog: boolean;
     public editTemplateEmailReportDemandeManeoClientInjoignable$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchTemplateEmailReportDemandeManeoClientInjoignable: TemplateEmailReportDemandeManeoClientInjoignableVo ;




    public findAll(){
     return this.http.get<Array<TemplateEmailReportDemandeManeoClientInjoignableVo>>(this.API);
    }

    public save(): Observable<TemplateEmailReportDemandeManeoClientInjoignableVo> {
         return this.http.post<TemplateEmailReportDemandeManeoClientInjoignableVo>(this.API, this.selectedTemplateEmailReportDemandeManeoClientInjoignable);
    }

    delete(templateEmailReportDemandeManeoClientInjoignable: TemplateEmailReportDemandeManeoClientInjoignableVo) {
         return this.http.delete<number>(this.API + 'id/' + templateEmailReportDemandeManeoClientInjoignable.id);
    }


    public edit(): Observable<TemplateEmailReportDemandeManeoClientInjoignableVo> {
        return this.http.put<TemplateEmailReportDemandeManeoClientInjoignableVo>(this.API, this.selectedTemplateEmailReportDemandeManeoClientInjoignable);
    }


     public findByCriteria(templateEmailReportDemandeManeoClientInjoignable:TemplateEmailReportDemandeManeoClientInjoignableVo): Observable<Array<TemplateEmailReportDemandeManeoClientInjoignableVo>>{
           return this.http.post<Array<TemplateEmailReportDemandeManeoClientInjoignableVo>>(this.API + 'search', templateEmailReportDemandeManeoClientInjoignable);
    }

   public findByIdWithAssociatedList(templateEmailReportDemandeManeoClientInjoignable:TemplateEmailReportDemandeManeoClientInjoignableVo):Observable<TemplateEmailReportDemandeManeoClientInjoignableVo>{
         return this.http.get<TemplateEmailReportDemandeManeoClientInjoignableVo>(this.API + 'detail/id/' +templateEmailReportDemandeManeoClientInjoignable.id);
    }

    // getters and setters


    get templateEmailReportDemandeManeoClientInjoignables(): Array<TemplateEmailReportDemandeManeoClientInjoignableVo> {
    if(this._templateEmailReportDemandeManeoClientInjoignables == null){
    this._templateEmailReportDemandeManeoClientInjoignables = new Array<TemplateEmailReportDemandeManeoClientInjoignableVo>();
    }
return this._templateEmailReportDemandeManeoClientInjoignables;
       }

    set templateEmailReportDemandeManeoClientInjoignables(value: Array<TemplateEmailReportDemandeManeoClientInjoignableVo>) {
        this._templateEmailReportDemandeManeoClientInjoignables = value;
       }

    get selectedTemplateEmailReportDemandeManeoClientInjoignable(): TemplateEmailReportDemandeManeoClientInjoignableVo {
    if(this._selectedTemplateEmailReportDemandeManeoClientInjoignable == null){
    this._selectedTemplateEmailReportDemandeManeoClientInjoignable = new TemplateEmailReportDemandeManeoClientInjoignableVo();
    }
           return this._selectedTemplateEmailReportDemandeManeoClientInjoignable;
       }

    set selectedTemplateEmailReportDemandeManeoClientInjoignable(value: TemplateEmailReportDemandeManeoClientInjoignableVo) {
        this._selectedTemplateEmailReportDemandeManeoClientInjoignable = value;
       }

    get templateEmailReportDemandeManeoClientInjoignableSelections(): Array<TemplateEmailReportDemandeManeoClientInjoignableVo> {
    if(this._templateEmailReportDemandeManeoClientInjoignableSelections == null){
    this._templateEmailReportDemandeManeoClientInjoignableSelections = new Array<TemplateEmailReportDemandeManeoClientInjoignableVo>();
    }
        return this._templateEmailReportDemandeManeoClientInjoignableSelections;
       }


    set templateEmailReportDemandeManeoClientInjoignableSelections(value: Array<TemplateEmailReportDemandeManeoClientInjoignableVo>) {
        this._templateEmailReportDemandeManeoClientInjoignableSelections = value;
       }

    get createTemplateEmailReportDemandeManeoClientInjoignableDialog(): boolean {
        return this._createTemplateEmailReportDemandeManeoClientInjoignableDialog;
       }

    set createTemplateEmailReportDemandeManeoClientInjoignableDialog(value: boolean) {
        this._createTemplateEmailReportDemandeManeoClientInjoignableDialog = value;
       }

    get editTemplateEmailReportDemandeManeoClientInjoignableDialog(): boolean {
        return this._editTemplateEmailReportDemandeManeoClientInjoignableDialog;
       }

    set editTemplateEmailReportDemandeManeoClientInjoignableDialog(value: boolean) {
        this._editTemplateEmailReportDemandeManeoClientInjoignableDialog = value;
       }

    get viewTemplateEmailReportDemandeManeoClientInjoignableDialog(): boolean {
        return this._viewTemplateEmailReportDemandeManeoClientInjoignableDialog;
       }

    set viewTemplateEmailReportDemandeManeoClientInjoignableDialog(value: boolean) {
        this._viewTemplateEmailReportDemandeManeoClientInjoignableDialog = value;
       }

     get searchTemplateEmailReportDemandeManeoClientInjoignable(): TemplateEmailReportDemandeManeoClientInjoignableVo {
     if(this._searchTemplateEmailReportDemandeManeoClientInjoignable==null){
    this._searchTemplateEmailReportDemandeManeoClientInjoignable=new TemplateEmailReportDemandeManeoClientInjoignableVo();
    }
        return this._searchTemplateEmailReportDemandeManeoClientInjoignable;
    }

    set searchTemplateEmailReportDemandeManeoClientInjoignable(value: TemplateEmailReportDemandeManeoClientInjoignableVo) {
        this._searchTemplateEmailReportDemandeManeoClientInjoignable = value;
       }
}
