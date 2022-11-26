import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {TemplateEmailReportDemandeClientClientJoignableVo} from '../model/TemplateEmailReportDemandeClientClientJoignable.model';


@Injectable({
  providedIn: 'root'
})
export class TemplateEmailReportDemandeClientClientJoignableService {
    private API = '' ;
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/templateEmailReportDemandeClientClientJoignable/';
        });
    }
     private _templateEmailReportDemandeClientClientJoignables: Array<TemplateEmailReportDemandeClientClientJoignableVo> ;
     private _selectedTemplateEmailReportDemandeClientClientJoignable: TemplateEmailReportDemandeClientClientJoignableVo;
     private _templateEmailReportDemandeClientClientJoignableSelections: Array<TemplateEmailReportDemandeClientClientJoignableVo>;
     private _createTemplateEmailReportDemandeClientClientJoignableDialog: boolean;
     private _editTemplateEmailReportDemandeClientClientJoignableDialog: boolean;
     private _viewTemplateEmailReportDemandeClientClientJoignableDialog: boolean;
     public editTemplateEmailReportDemandeClientClientJoignable$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchTemplateEmailReportDemandeClientClientJoignable: TemplateEmailReportDemandeClientClientJoignableVo ;




    public findAll(){
     return this.http.get<Array<TemplateEmailReportDemandeClientClientJoignableVo>>(this.API);
    }

    public save(): Observable<TemplateEmailReportDemandeClientClientJoignableVo> {
         return this.http.post<TemplateEmailReportDemandeClientClientJoignableVo>(this.API, this.selectedTemplateEmailReportDemandeClientClientJoignable);
    }

    delete(templateEmailReportDemandeClientClientJoignable: TemplateEmailReportDemandeClientClientJoignableVo) {
         return this.http.delete<number>(this.API + 'id/' + templateEmailReportDemandeClientClientJoignable.id);
    }


    public edit(): Observable<TemplateEmailReportDemandeClientClientJoignableVo> {
        return this.http.put<TemplateEmailReportDemandeClientClientJoignableVo>(this.API, this.selectedTemplateEmailReportDemandeClientClientJoignable);
    }


     public findByCriteria(templateEmailReportDemandeClientClientJoignable:TemplateEmailReportDemandeClientClientJoignableVo): Observable<Array<TemplateEmailReportDemandeClientClientJoignableVo>>{
           return this.http.post<Array<TemplateEmailReportDemandeClientClientJoignableVo>>(this.API + 'search', templateEmailReportDemandeClientClientJoignable);
    }

   public findByIdWithAssociatedList(templateEmailReportDemandeClientClientJoignable:TemplateEmailReportDemandeClientClientJoignableVo):Observable<TemplateEmailReportDemandeClientClientJoignableVo>{
         return this.http.get<TemplateEmailReportDemandeClientClientJoignableVo>(this.API + 'detail/id/' +templateEmailReportDemandeClientClientJoignable.id);
    }

    // getters and setters


    get templateEmailReportDemandeClientClientJoignables(): Array<TemplateEmailReportDemandeClientClientJoignableVo> {
    if(this._templateEmailReportDemandeClientClientJoignables == null){
    this._templateEmailReportDemandeClientClientJoignables = new Array<TemplateEmailReportDemandeClientClientJoignableVo>();
    }
return this._templateEmailReportDemandeClientClientJoignables;
       }

    set templateEmailReportDemandeClientClientJoignables(value: Array<TemplateEmailReportDemandeClientClientJoignableVo>) {
        this._templateEmailReportDemandeClientClientJoignables = value;
       }

    get selectedTemplateEmailReportDemandeClientClientJoignable(): TemplateEmailReportDemandeClientClientJoignableVo {
    if(this._selectedTemplateEmailReportDemandeClientClientJoignable == null){
    this._selectedTemplateEmailReportDemandeClientClientJoignable = new TemplateEmailReportDemandeClientClientJoignableVo();
    }
           return this._selectedTemplateEmailReportDemandeClientClientJoignable;
       }

    set selectedTemplateEmailReportDemandeClientClientJoignable(value: TemplateEmailReportDemandeClientClientJoignableVo) {
        this._selectedTemplateEmailReportDemandeClientClientJoignable = value;
       }

    get templateEmailReportDemandeClientClientJoignableSelections(): Array<TemplateEmailReportDemandeClientClientJoignableVo> {
    if(this._templateEmailReportDemandeClientClientJoignableSelections == null){
    this._templateEmailReportDemandeClientClientJoignableSelections = new Array<TemplateEmailReportDemandeClientClientJoignableVo>();
    }
        return this._templateEmailReportDemandeClientClientJoignableSelections;
       }


    set templateEmailReportDemandeClientClientJoignableSelections(value: Array<TemplateEmailReportDemandeClientClientJoignableVo>) {
        this._templateEmailReportDemandeClientClientJoignableSelections = value;
       }

    get createTemplateEmailReportDemandeClientClientJoignableDialog(): boolean {
        return this._createTemplateEmailReportDemandeClientClientJoignableDialog;
       }

    set createTemplateEmailReportDemandeClientClientJoignableDialog(value: boolean) {
        this._createTemplateEmailReportDemandeClientClientJoignableDialog = value;
       }

    get editTemplateEmailReportDemandeClientClientJoignableDialog(): boolean {
        return this._editTemplateEmailReportDemandeClientClientJoignableDialog;
       }

    set editTemplateEmailReportDemandeClientClientJoignableDialog(value: boolean) {
        this._editTemplateEmailReportDemandeClientClientJoignableDialog = value;
       }

    get viewTemplateEmailReportDemandeClientClientJoignableDialog(): boolean {
        return this._viewTemplateEmailReportDemandeClientClientJoignableDialog;
       }

    set viewTemplateEmailReportDemandeClientClientJoignableDialog(value: boolean) {
        this._viewTemplateEmailReportDemandeClientClientJoignableDialog = value;
       }

     get searchTemplateEmailReportDemandeClientClientJoignable(): TemplateEmailReportDemandeClientClientJoignableVo {
     if(this._searchTemplateEmailReportDemandeClientClientJoignable==null){
    this._searchTemplateEmailReportDemandeClientClientJoignable=new TemplateEmailReportDemandeClientClientJoignableVo();
    }
        return this._searchTemplateEmailReportDemandeClientClientJoignable;
    }

    set searchTemplateEmailReportDemandeClientClientJoignable(value: TemplateEmailReportDemandeClientClientJoignableVo) {
        this._searchTemplateEmailReportDemandeClientClientJoignable = value;
       }
}
