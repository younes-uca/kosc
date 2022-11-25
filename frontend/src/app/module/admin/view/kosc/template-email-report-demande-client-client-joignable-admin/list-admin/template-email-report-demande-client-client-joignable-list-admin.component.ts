import {Component, OnInit} from '@angular/core';
import {TemplateEmailReportDemandeClientClientJoignableService} from 'src/app/controller/service/TemplateEmailReportDemandeClientClientJoignable.service';
import {TemplateEmailReportDemandeClientClientJoignableVo} from 'src/app/controller/model/TemplateEmailReportDemandeClientClientJoignable.model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { RoleService } from 'src/app/controller/service/role.service';
import {DatePipe} from '@angular/common';




import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';
import {AuthService} from 'src/app/controller/service/Auth.service';
import { ExportService } from 'src/app/controller/service/Export.service';

@Component({
  selector: 'app-template-email-report-demande-client-client-joignable-list-admin',
  templateUrl: './template-email-report-demande-client-client-joignable-list-admin.component.html',
  styleUrls: ['./template-email-report-demande-client-client-joignable-list-admin.component.css']
})
export class TemplateEmailReportDemandeClientClientJoignableListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'TemplateEmailReportDemandeClientClientJoignable';


    constructor(private datePipe: DatePipe, private templateEmailReportDemandeClientClientJoignableService: TemplateEmailReportDemandeClientClientJoignableService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService: RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadTemplateEmailReportDemandeClientClientJoignables();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadTemplateEmailReportDemandeClientClientJoignables(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeClientClientJoignable', 'list');
        isPermistted ? this.templateEmailReportDemandeClientClientJoignableService.findAll().subscribe(templateEmailReportDemandeClientClientJoignables => this.templateEmailReportDemandeClientClientJoignables = templateEmailReportDemandeClientClientJoignables,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.templateEmailReportDemandeClientClientJoignableService.findByCriteria(this.searchTemplateEmailReportDemandeClientClientJoignable).subscribe(templateEmailReportDemandeClientClientJoignables=>{
            
            this.templateEmailReportDemandeClientClientJoignables = templateEmailReportDemandeClientClientJoignables;
           // this.searchTemplateEmailReportDemandeClientClientJoignable = new TemplateEmailReportDemandeClientClientJoignableVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
                            {field: 'objet', header: 'Objet'},
        ];
    }
    
    public async editTemplateEmailReportDemandeClientClientJoignable(templateEmailReportDemandeClientClientJoignable: TemplateEmailReportDemandeClientClientJoignableVo){
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeClientClientJoignable', 'edit');
         if(isPermistted){
          this.templateEmailReportDemandeClientClientJoignableService.findByIdWithAssociatedList(templateEmailReportDemandeClientClientJoignable).subscribe(res => {
           this.selectedTemplateEmailReportDemandeClientClientJoignable = res;

            this.editTemplateEmailReportDemandeClientClientJoignableDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewTemplateEmailReportDemandeClientClientJoignable(templateEmailReportDemandeClientClientJoignable: TemplateEmailReportDemandeClientClientJoignableVo){
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeClientClientJoignable', 'view');
        if(isPermistted){
           this.templateEmailReportDemandeClientClientJoignableService.findByIdWithAssociatedList(templateEmailReportDemandeClientClientJoignable).subscribe(res => {
           this.selectedTemplateEmailReportDemandeClientClientJoignable = res;

            this.viewTemplateEmailReportDemandeClientClientJoignableDialog = true;
          });
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });

        
    }
    
    public async openCreateTemplateEmailReportDemandeClientClientJoignable(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedTemplateEmailReportDemandeClientClientJoignable = new TemplateEmailReportDemandeClientClientJoignableVo();
            this.createTemplateEmailReportDemandeClientClientJoignableDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteTemplateEmailReportDemandeClientClientJoignable(templateEmailReportDemandeClientClientJoignable: TemplateEmailReportDemandeClientClientJoignableVo){
       const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeClientClientJoignable', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Template email report demande client client joignable) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.templateEmailReportDemandeClientClientJoignableService.delete(templateEmailReportDemandeClientClientJoignable).subscribe(status=>{
                          if(status > 0){
                          const position = this.templateEmailReportDemandeClientClientJoignables.indexOf(templateEmailReportDemandeClientClientJoignable);
                          position > -1 ? this.templateEmailReportDemandeClientClientJoignables.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Template email report demande client client joignable Supprimé',
                        life: 3000
                    });
                                     }

                    },error=>console.log(error))
                             }
                     });
              }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'Problème de permission'
              });
             }
    }


public async duplicateTemplateEmailReportDemandeClientClientJoignable(templateEmailReportDemandeClientClientJoignable: TemplateEmailReportDemandeClientClientJoignableVo) {

     this.templateEmailReportDemandeClientClientJoignableService.findByIdWithAssociatedList(templateEmailReportDemandeClientClientJoignable).subscribe(
	 res => {
	       this.initDuplicateTemplateEmailReportDemandeClientClientJoignable(res);
	       this.selectedTemplateEmailReportDemandeClientClientJoignable = res;
	       this.selectedTemplateEmailReportDemandeClientClientJoignable.id = null;


            this.createTemplateEmailReportDemandeClientClientJoignableDialog = true;

});

	}

	initDuplicateTemplateEmailReportDemandeClientClientJoignable(res: TemplateEmailReportDemandeClientClientJoignableVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport(); this.exportService.exporterCSV(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport(); this.exportService.exporterExcel(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport(); this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName); }}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.templateEmailReportDemandeClientClientJoignables.map(e => {
    return {
                    'Libelle': e.libelle ,
                    'Objet': e.objet ,
                    'Corps': e.corps ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchTemplateEmailReportDemandeClientClientJoignable.libelle ? this.searchTemplateEmailReportDemandeClientClientJoignable.libelle : environment.emptyForExport ,
            'Objet': this.searchTemplateEmailReportDemandeClientClientJoignable.objet ? this.searchTemplateEmailReportDemandeClientClientJoignable.objet : environment.emptyForExport ,
            'Corps': this.searchTemplateEmailReportDemandeClientClientJoignable.corps ? this.searchTemplateEmailReportDemandeClientClientJoignable.corps : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get templateEmailReportDemandeClientClientJoignables() : Array<TemplateEmailReportDemandeClientClientJoignableVo> {
           return this.templateEmailReportDemandeClientClientJoignableService.templateEmailReportDemandeClientClientJoignables;
       }
    set templateEmailReportDemandeClientClientJoignables(value: Array<TemplateEmailReportDemandeClientClientJoignableVo>) {
        this.templateEmailReportDemandeClientClientJoignableService.templateEmailReportDemandeClientClientJoignables = value;
       }

    get templateEmailReportDemandeClientClientJoignableSelections() : Array<TemplateEmailReportDemandeClientClientJoignableVo> {
           return this.templateEmailReportDemandeClientClientJoignableService.templateEmailReportDemandeClientClientJoignableSelections;
       }
    set templateEmailReportDemandeClientClientJoignableSelections(value: Array<TemplateEmailReportDemandeClientClientJoignableVo>) {
        this.templateEmailReportDemandeClientClientJoignableService.templateEmailReportDemandeClientClientJoignableSelections = value;
       }
   
     


    get selectedTemplateEmailReportDemandeClientClientJoignable() : TemplateEmailReportDemandeClientClientJoignableVo {
           return this.templateEmailReportDemandeClientClientJoignableService.selectedTemplateEmailReportDemandeClientClientJoignable;
       }
    set selectedTemplateEmailReportDemandeClientClientJoignable(value: TemplateEmailReportDemandeClientClientJoignableVo) {
        this.templateEmailReportDemandeClientClientJoignableService.selectedTemplateEmailReportDemandeClientClientJoignable = value;
       }
    
    get createTemplateEmailReportDemandeClientClientJoignableDialog() :boolean {
           return this.templateEmailReportDemandeClientClientJoignableService.createTemplateEmailReportDemandeClientClientJoignableDialog;
       }
    set createTemplateEmailReportDemandeClientClientJoignableDialog(value: boolean) {
        this.templateEmailReportDemandeClientClientJoignableService.createTemplateEmailReportDemandeClientClientJoignableDialog= value;
       }
    
    get editTemplateEmailReportDemandeClientClientJoignableDialog() :boolean {
           return this.templateEmailReportDemandeClientClientJoignableService.editTemplateEmailReportDemandeClientClientJoignableDialog;
       }
    set editTemplateEmailReportDemandeClientClientJoignableDialog(value: boolean) {
        this.templateEmailReportDemandeClientClientJoignableService.editTemplateEmailReportDemandeClientClientJoignableDialog= value;
       }
    get viewTemplateEmailReportDemandeClientClientJoignableDialog() :boolean {
           return this.templateEmailReportDemandeClientClientJoignableService.viewTemplateEmailReportDemandeClientClientJoignableDialog;
       }
    set viewTemplateEmailReportDemandeClientClientJoignableDialog(value: boolean) {
        this.templateEmailReportDemandeClientClientJoignableService.viewTemplateEmailReportDemandeClientClientJoignableDialog = value;
       }
       
     get searchTemplateEmailReportDemandeClientClientJoignable() : TemplateEmailReportDemandeClientClientJoignableVo {
        return this.templateEmailReportDemandeClientClientJoignableService.searchTemplateEmailReportDemandeClientClientJoignable;
       }
    set searchTemplateEmailReportDemandeClientClientJoignable(value: TemplateEmailReportDemandeClientClientJoignableVo) {
        this.templateEmailReportDemandeClientClientJoignableService.searchTemplateEmailReportDemandeClientClientJoignable = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
