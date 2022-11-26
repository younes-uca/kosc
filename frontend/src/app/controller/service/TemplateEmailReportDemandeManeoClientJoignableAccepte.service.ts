import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { RoleService } from './role.service';
import * as moment from 'moment';
import {environment} from 'src/environments/environment';


import {TemplateEmailReportDemandeManeoClientJoignableAccepteVo} from '../model/TemplateEmailReportDemandeManeoClientJoignableAccepte.model';


@Injectable({
  providedIn: 'root'
})
export class TemplateEmailReportDemandeManeoClientJoignableAccepteService {
    private API = '' ;
     constructor(private http: HttpClient, private roleService: RoleService) {
        this.role$ = this.roleService.role$;
        this.role$.subscribe(role => {
            this.API = environment.apiUrl  + role.toLowerCase() + '/templateEmailReportDemandeManeoClientJoignableAccepte/';
        });
    }
     private _templateEmailReportDemandeManeoClientJoignableAcceptes: Array<TemplateEmailReportDemandeManeoClientJoignableAccepteVo> ;
     private _selectedTemplateEmailReportDemandeManeoClientJoignableAccepte: TemplateEmailReportDemandeManeoClientJoignableAccepteVo;
     private _templateEmailReportDemandeManeoClientJoignableAccepteSelections: Array<TemplateEmailReportDemandeManeoClientJoignableAccepteVo>;
     private _createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog: boolean;
     private _editTemplateEmailReportDemandeManeoClientJoignableAccepteDialog: boolean;
     private _viewTemplateEmailReportDemandeManeoClientJoignableAccepteDialog: boolean;
     public editTemplateEmailReportDemandeManeoClientJoignableAccepte$ = new BehaviorSubject<boolean>(false);
     private role$: Observable<string>;
     private _searchTemplateEmailReportDemandeManeoClientJoignableAccepte: TemplateEmailReportDemandeManeoClientJoignableAccepteVo ;




    public findAll(){
     return this.http.get<Array<TemplateEmailReportDemandeManeoClientJoignableAccepteVo>>(this.API);
    }

    public save(): Observable<TemplateEmailReportDemandeManeoClientJoignableAccepteVo> {
         return this.http.post<TemplateEmailReportDemandeManeoClientJoignableAccepteVo>(this.API, this.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte);
    }

    delete(templateEmailReportDemandeManeoClientJoignableAccepte: TemplateEmailReportDemandeManeoClientJoignableAccepteVo) {
         return this.http.delete<number>(this.API + 'id/' + templateEmailReportDemandeManeoClientJoignableAccepte.id);
    }


    public edit(): Observable<TemplateEmailReportDemandeManeoClientJoignableAccepteVo> {
        return this.http.put<TemplateEmailReportDemandeManeoClientJoignableAccepteVo>(this.API, this.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte);
    }


     public findByCriteria(templateEmailReportDemandeManeoClientJoignableAccepte:TemplateEmailReportDemandeManeoClientJoignableAccepteVo): Observable<Array<TemplateEmailReportDemandeManeoClientJoignableAccepteVo>>{
           return this.http.post<Array<TemplateEmailReportDemandeManeoClientJoignableAccepteVo>>(this.API + 'search', templateEmailReportDemandeManeoClientJoignableAccepte);
    }

   public findByIdWithAssociatedList(templateEmailReportDemandeManeoClientJoignableAccepte:TemplateEmailReportDemandeManeoClientJoignableAccepteVo):Observable<TemplateEmailReportDemandeManeoClientJoignableAccepteVo>{
         return this.http.get<TemplateEmailReportDemandeManeoClientJoignableAccepteVo>(this.API + 'detail/id/' +templateEmailReportDemandeManeoClientJoignableAccepte.id);
    }

    // getters and setters


    get templateEmailReportDemandeManeoClientJoignableAcceptes(): Array<TemplateEmailReportDemandeManeoClientJoignableAccepteVo> {
    if(this._templateEmailReportDemandeManeoClientJoignableAcceptes == null){
    this._templateEmailReportDemandeManeoClientJoignableAcceptes = new Array<TemplateEmailReportDemandeManeoClientJoignableAccepteVo>();
    }
return this._templateEmailReportDemandeManeoClientJoignableAcceptes;
       }

    set templateEmailReportDemandeManeoClientJoignableAcceptes(value: Array<TemplateEmailReportDemandeManeoClientJoignableAccepteVo>) {
        this._templateEmailReportDemandeManeoClientJoignableAcceptes = value;
       }

    get selectedTemplateEmailReportDemandeManeoClientJoignableAccepte(): TemplateEmailReportDemandeManeoClientJoignableAccepteVo {
    if(this._selectedTemplateEmailReportDemandeManeoClientJoignableAccepte == null){
    this._selectedTemplateEmailReportDemandeManeoClientJoignableAccepte = new TemplateEmailReportDemandeManeoClientJoignableAccepteVo();
    }
           return this._selectedTemplateEmailReportDemandeManeoClientJoignableAccepte;
       }

    set selectedTemplateEmailReportDemandeManeoClientJoignableAccepte(value: TemplateEmailReportDemandeManeoClientJoignableAccepteVo) {
        this._selectedTemplateEmailReportDemandeManeoClientJoignableAccepte = value;
       }

    get templateEmailReportDemandeManeoClientJoignableAccepteSelections(): Array<TemplateEmailReportDemandeManeoClientJoignableAccepteVo> {
    if(this._templateEmailReportDemandeManeoClientJoignableAccepteSelections == null){
    this._templateEmailReportDemandeManeoClientJoignableAccepteSelections = new Array<TemplateEmailReportDemandeManeoClientJoignableAccepteVo>();
    }
        return this._templateEmailReportDemandeManeoClientJoignableAccepteSelections;
       }


    set templateEmailReportDemandeManeoClientJoignableAccepteSelections(value: Array<TemplateEmailReportDemandeManeoClientJoignableAccepteVo>) {
        this._templateEmailReportDemandeManeoClientJoignableAccepteSelections = value;
       }

    get createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog(): boolean {
        return this._createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog;
       }

    set createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog(value: boolean) {
        this._createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog = value;
       }

    get editTemplateEmailReportDemandeManeoClientJoignableAccepteDialog(): boolean {
        return this._editTemplateEmailReportDemandeManeoClientJoignableAccepteDialog;
       }

    set editTemplateEmailReportDemandeManeoClientJoignableAccepteDialog(value: boolean) {
        this._editTemplateEmailReportDemandeManeoClientJoignableAccepteDialog = value;
       }

    get viewTemplateEmailReportDemandeManeoClientJoignableAccepteDialog(): boolean {
        return this._viewTemplateEmailReportDemandeManeoClientJoignableAccepteDialog;
       }

    set viewTemplateEmailReportDemandeManeoClientJoignableAccepteDialog(value: boolean) {
        this._viewTemplateEmailReportDemandeManeoClientJoignableAccepteDialog = value;
       }

     get searchTemplateEmailReportDemandeManeoClientJoignableAccepte(): TemplateEmailReportDemandeManeoClientJoignableAccepteVo {
     if(this._searchTemplateEmailReportDemandeManeoClientJoignableAccepte==null){
    this._searchTemplateEmailReportDemandeManeoClientJoignableAccepte=new TemplateEmailReportDemandeManeoClientJoignableAccepteVo();
    }
        return this._searchTemplateEmailReportDemandeManeoClientJoignableAccepte;
    }

    set searchTemplateEmailReportDemandeManeoClientJoignableAccepte(value: TemplateEmailReportDemandeManeoClientJoignableAccepteVo) {
        this._searchTemplateEmailReportDemandeManeoClientJoignableAccepte = value;
       }
}
