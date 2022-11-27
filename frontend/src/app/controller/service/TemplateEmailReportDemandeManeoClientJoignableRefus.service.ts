import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {TemplateEmailReportDemandeManeoClientJoignableRefusVo} from '../model/TemplateEmailReportDemandeManeoClientJoignableRefus.model';


@Injectable({
  providedIn: 'root'
})
export class TemplateEmailReportDemandeManeoClientJoignableRefusService {
    private API = '' ;
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/templateEmailReportDemandeManeoClientJoignableRefus/';
        });
    }
     private _templateEmailReportDemandeManeoClientJoignableRefuss: Array<TemplateEmailReportDemandeManeoClientJoignableRefusVo> ;
     private _selectedTemplateEmailReportDemandeManeoClientJoignableRefus: TemplateEmailReportDemandeManeoClientJoignableRefusVo;
     private _templateEmailReportDemandeManeoClientJoignableRefusSelections: Array<TemplateEmailReportDemandeManeoClientJoignableRefusVo>;
     private _createTemplateEmailReportDemandeManeoClientJoignableRefusDialog: boolean;
     private _editTemplateEmailReportDemandeManeoClientJoignableRefusDialog: boolean;
     private _viewTemplateEmailReportDemandeManeoClientJoignableRefusDialog: boolean;
     public editTemplateEmailReportDemandeManeoClientJoignableRefus$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchTemplateEmailReportDemandeManeoClientJoignableRefus: TemplateEmailReportDemandeManeoClientJoignableRefusVo ;




    public findAll(){
     return this.http.get<Array<TemplateEmailReportDemandeManeoClientJoignableRefusVo>>(this.API);
    }

    public save(): Observable<TemplateEmailReportDemandeManeoClientJoignableRefusVo> {
         return this.http.post<TemplateEmailReportDemandeManeoClientJoignableRefusVo>(this.API, this.selectedTemplateEmailReportDemandeManeoClientJoignableRefus);
    }

    delete(templateEmailReportDemandeManeoClientJoignableRefus: TemplateEmailReportDemandeManeoClientJoignableRefusVo) {
         return this.http.delete<number>(this.API + 'id/' + templateEmailReportDemandeManeoClientJoignableRefus.id);
    }


    public edit(): Observable<TemplateEmailReportDemandeManeoClientJoignableRefusVo> {
        return this.http.put<TemplateEmailReportDemandeManeoClientJoignableRefusVo>(this.API, this.selectedTemplateEmailReportDemandeManeoClientJoignableRefus);
    }


     public findByCriteria(templateEmailReportDemandeManeoClientJoignableRefus:TemplateEmailReportDemandeManeoClientJoignableRefusVo): Observable<Array<TemplateEmailReportDemandeManeoClientJoignableRefusVo>>{
           return this.http.post<Array<TemplateEmailReportDemandeManeoClientJoignableRefusVo>>(this.API + 'search', templateEmailReportDemandeManeoClientJoignableRefus);
    }

   public findByIdWithAssociatedList(templateEmailReportDemandeManeoClientJoignableRefus:TemplateEmailReportDemandeManeoClientJoignableRefusVo):Observable<TemplateEmailReportDemandeManeoClientJoignableRefusVo>{
         return this.http.get<TemplateEmailReportDemandeManeoClientJoignableRefusVo>(this.API + 'detail/id/' +templateEmailReportDemandeManeoClientJoignableRefus.id);
    }

    // getters and setters


    get templateEmailReportDemandeManeoClientJoignableRefuss(): Array<TemplateEmailReportDemandeManeoClientJoignableRefusVo> {
    if(this._templateEmailReportDemandeManeoClientJoignableRefuss == null){
    this._templateEmailReportDemandeManeoClientJoignableRefuss = new Array<TemplateEmailReportDemandeManeoClientJoignableRefusVo>();
    }
return this._templateEmailReportDemandeManeoClientJoignableRefuss;
       }

    set templateEmailReportDemandeManeoClientJoignableRefuss(value: Array<TemplateEmailReportDemandeManeoClientJoignableRefusVo>) {
        this._templateEmailReportDemandeManeoClientJoignableRefuss = value;
       }

    get selectedTemplateEmailReportDemandeManeoClientJoignableRefus(): TemplateEmailReportDemandeManeoClientJoignableRefusVo {
    if(this._selectedTemplateEmailReportDemandeManeoClientJoignableRefus == null){
    this._selectedTemplateEmailReportDemandeManeoClientJoignableRefus = new TemplateEmailReportDemandeManeoClientJoignableRefusVo();
    }
           return this._selectedTemplateEmailReportDemandeManeoClientJoignableRefus;
       }

    set selectedTemplateEmailReportDemandeManeoClientJoignableRefus(value: TemplateEmailReportDemandeManeoClientJoignableRefusVo) {
        this._selectedTemplateEmailReportDemandeManeoClientJoignableRefus = value;
       }

    get templateEmailReportDemandeManeoClientJoignableRefusSelections(): Array<TemplateEmailReportDemandeManeoClientJoignableRefusVo> {
    if(this._templateEmailReportDemandeManeoClientJoignableRefusSelections == null){
    this._templateEmailReportDemandeManeoClientJoignableRefusSelections = new Array<TemplateEmailReportDemandeManeoClientJoignableRefusVo>();
    }
        return this._templateEmailReportDemandeManeoClientJoignableRefusSelections;
       }


    set templateEmailReportDemandeManeoClientJoignableRefusSelections(value: Array<TemplateEmailReportDemandeManeoClientJoignableRefusVo>) {
        this._templateEmailReportDemandeManeoClientJoignableRefusSelections = value;
       }

    get createTemplateEmailReportDemandeManeoClientJoignableRefusDialog(): boolean {
        return this._createTemplateEmailReportDemandeManeoClientJoignableRefusDialog;
       }

    set createTemplateEmailReportDemandeManeoClientJoignableRefusDialog(value: boolean) {
        this._createTemplateEmailReportDemandeManeoClientJoignableRefusDialog = value;
       }

    get editTemplateEmailReportDemandeManeoClientJoignableRefusDialog(): boolean {
        return this._editTemplateEmailReportDemandeManeoClientJoignableRefusDialog;
       }

    set editTemplateEmailReportDemandeManeoClientJoignableRefusDialog(value: boolean) {
        this._editTemplateEmailReportDemandeManeoClientJoignableRefusDialog = value;
       }

    get viewTemplateEmailReportDemandeManeoClientJoignableRefusDialog(): boolean {
        return this._viewTemplateEmailReportDemandeManeoClientJoignableRefusDialog;
       }

    set viewTemplateEmailReportDemandeManeoClientJoignableRefusDialog(value: boolean) {
        this._viewTemplateEmailReportDemandeManeoClientJoignableRefusDialog = value;
       }

     get searchTemplateEmailReportDemandeManeoClientJoignableRefus(): TemplateEmailReportDemandeManeoClientJoignableRefusVo {
     if(this._searchTemplateEmailReportDemandeManeoClientJoignableRefus==null){
    this._searchTemplateEmailReportDemandeManeoClientJoignableRefus=new TemplateEmailReportDemandeManeoClientJoignableRefusVo();
    }
        return this._searchTemplateEmailReportDemandeManeoClientJoignableRefus;
    }

    set searchTemplateEmailReportDemandeManeoClientJoignableRefus(value: TemplateEmailReportDemandeManeoClientJoignableRefusVo) {
        this._searchTemplateEmailReportDemandeManeoClientJoignableRefus = value;
       }
}
