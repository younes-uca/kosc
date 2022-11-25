import {Component, OnInit} from '@angular/core';
import {TemplateEmailReportDemandeManeoClientInjoignableService} from 'src/app/controller/service/TemplateEmailReportDemandeManeoClientInjoignable.service';
import {TemplateEmailReportDemandeManeoClientInjoignableVo} from 'src/app/controller/model/TemplateEmailReportDemandeManeoClientInjoignable.model';
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
  selector: 'app-template-email-report-demande-maneo-client-injoignable-list-admin',
  templateUrl: './template-email-report-demande-maneo-client-injoignable-list-admin.component.html',
  styleUrls: ['./template-email-report-demande-maneo-client-injoignable-list-admin.component.css']
})
export class TemplateEmailReportDemandeManeoClientInjoignableListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'TemplateEmailReportDemandeManeoClientInjoignable';


    constructor(private datePipe: DatePipe, private templateEmailReportDemandeManeoClientInjoignableService: TemplateEmailReportDemandeManeoClientInjoignableService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService: RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadTemplateEmailReportDemandeManeoClientInjoignables();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadTemplateEmailReportDemandeManeoClientInjoignables(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeManeoClientInjoignable', 'list');
        isPermistted ? this.templateEmailReportDemandeManeoClientInjoignableService.findAll().subscribe(templateEmailReportDemandeManeoClientInjoignables => this.templateEmailReportDemandeManeoClientInjoignables = templateEmailReportDemandeManeoClientInjoignables,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.templateEmailReportDemandeManeoClientInjoignableService.findByCriteria(this.searchTemplateEmailReportDemandeManeoClientInjoignable).subscribe(templateEmailReportDemandeManeoClientInjoignables=>{
            
            this.templateEmailReportDemandeManeoClientInjoignables = templateEmailReportDemandeManeoClientInjoignables;
           // this.searchTemplateEmailReportDemandeManeoClientInjoignable = new TemplateEmailReportDemandeManeoClientInjoignableVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
                            {field: 'objet', header: 'Objet'},
        ];
    }
    
    public async editTemplateEmailReportDemandeManeoClientInjoignable(templateEmailReportDemandeManeoClientInjoignable: TemplateEmailReportDemandeManeoClientInjoignableVo){
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeManeoClientInjoignable', 'edit');
         if(isPermistted){
          this.templateEmailReportDemandeManeoClientInjoignableService.findByIdWithAssociatedList(templateEmailReportDemandeManeoClientInjoignable).subscribe(res => {
           this.selectedTemplateEmailReportDemandeManeoClientInjoignable = res;

            this.editTemplateEmailReportDemandeManeoClientInjoignableDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewTemplateEmailReportDemandeManeoClientInjoignable(templateEmailReportDemandeManeoClientInjoignable: TemplateEmailReportDemandeManeoClientInjoignableVo){
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeManeoClientInjoignable', 'view');
        if(isPermistted){
           this.templateEmailReportDemandeManeoClientInjoignableService.findByIdWithAssociatedList(templateEmailReportDemandeManeoClientInjoignable).subscribe(res => {
           this.selectedTemplateEmailReportDemandeManeoClientInjoignable = res;

            this.viewTemplateEmailReportDemandeManeoClientInjoignableDialog = true;
          });
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });

        
    }
    
    public async openCreateTemplateEmailReportDemandeManeoClientInjoignable(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedTemplateEmailReportDemandeManeoClientInjoignable = new TemplateEmailReportDemandeManeoClientInjoignableVo();
            this.createTemplateEmailReportDemandeManeoClientInjoignableDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteTemplateEmailReportDemandeManeoClientInjoignable(templateEmailReportDemandeManeoClientInjoignable: TemplateEmailReportDemandeManeoClientInjoignableVo){
       const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeManeoClientInjoignable', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Template email report demande maneo client injoignable) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.templateEmailReportDemandeManeoClientInjoignableService.delete(templateEmailReportDemandeManeoClientInjoignable).subscribe(status=>{
                          if(status > 0){
                          const position = this.templateEmailReportDemandeManeoClientInjoignables.indexOf(templateEmailReportDemandeManeoClientInjoignable);
                          position > -1 ? this.templateEmailReportDemandeManeoClientInjoignables.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Template email report demande maneo client injoignable Supprimé',
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


public async duplicateTemplateEmailReportDemandeManeoClientInjoignable(templateEmailReportDemandeManeoClientInjoignable: TemplateEmailReportDemandeManeoClientInjoignableVo) {

     this.templateEmailReportDemandeManeoClientInjoignableService.findByIdWithAssociatedList(templateEmailReportDemandeManeoClientInjoignable).subscribe(
	 res => {
	       this.initDuplicateTemplateEmailReportDemandeManeoClientInjoignable(res);
	       this.selectedTemplateEmailReportDemandeManeoClientInjoignable = res;
	       this.selectedTemplateEmailReportDemandeManeoClientInjoignable.id = null;


            this.createTemplateEmailReportDemandeManeoClientInjoignableDialog = true;

});

	}

	initDuplicateTemplateEmailReportDemandeManeoClientInjoignable(res: TemplateEmailReportDemandeManeoClientInjoignableVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport(); this.exportService.exporterCSV(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport(); this.exportService.exporterExcel(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport(); this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName); }}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.templateEmailReportDemandeManeoClientInjoignables.map(e => {
    return {
                    'Libelle': e.libelle ,
                    'Objet': e.objet ,
                    'Corps': e.corps ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchTemplateEmailReportDemandeManeoClientInjoignable.libelle ? this.searchTemplateEmailReportDemandeManeoClientInjoignable.libelle : environment.emptyForExport ,
            'Objet': this.searchTemplateEmailReportDemandeManeoClientInjoignable.objet ? this.searchTemplateEmailReportDemandeManeoClientInjoignable.objet : environment.emptyForExport ,
            'Corps': this.searchTemplateEmailReportDemandeManeoClientInjoignable.corps ? this.searchTemplateEmailReportDemandeManeoClientInjoignable.corps : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get templateEmailReportDemandeManeoClientInjoignables() : Array<TemplateEmailReportDemandeManeoClientInjoignableVo> {
           return this.templateEmailReportDemandeManeoClientInjoignableService.templateEmailReportDemandeManeoClientInjoignables;
       }
    set templateEmailReportDemandeManeoClientInjoignables(value: Array<TemplateEmailReportDemandeManeoClientInjoignableVo>) {
        this.templateEmailReportDemandeManeoClientInjoignableService.templateEmailReportDemandeManeoClientInjoignables = value;
       }

    get templateEmailReportDemandeManeoClientInjoignableSelections() : Array<TemplateEmailReportDemandeManeoClientInjoignableVo> {
           return this.templateEmailReportDemandeManeoClientInjoignableService.templateEmailReportDemandeManeoClientInjoignableSelections;
       }
    set templateEmailReportDemandeManeoClientInjoignableSelections(value: Array<TemplateEmailReportDemandeManeoClientInjoignableVo>) {
        this.templateEmailReportDemandeManeoClientInjoignableService.templateEmailReportDemandeManeoClientInjoignableSelections = value;
       }
   
     


    get selectedTemplateEmailReportDemandeManeoClientInjoignable() : TemplateEmailReportDemandeManeoClientInjoignableVo {
           return this.templateEmailReportDemandeManeoClientInjoignableService.selectedTemplateEmailReportDemandeManeoClientInjoignable;
       }
    set selectedTemplateEmailReportDemandeManeoClientInjoignable(value: TemplateEmailReportDemandeManeoClientInjoignableVo) {
        this.templateEmailReportDemandeManeoClientInjoignableService.selectedTemplateEmailReportDemandeManeoClientInjoignable = value;
       }
    
    get createTemplateEmailReportDemandeManeoClientInjoignableDialog() :boolean {
           return this.templateEmailReportDemandeManeoClientInjoignableService.createTemplateEmailReportDemandeManeoClientInjoignableDialog;
       }
    set createTemplateEmailReportDemandeManeoClientInjoignableDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientInjoignableService.createTemplateEmailReportDemandeManeoClientInjoignableDialog= value;
       }
    
    get editTemplateEmailReportDemandeManeoClientInjoignableDialog() :boolean {
           return this.templateEmailReportDemandeManeoClientInjoignableService.editTemplateEmailReportDemandeManeoClientInjoignableDialog;
       }
    set editTemplateEmailReportDemandeManeoClientInjoignableDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientInjoignableService.editTemplateEmailReportDemandeManeoClientInjoignableDialog= value;
       }
    get viewTemplateEmailReportDemandeManeoClientInjoignableDialog() :boolean {
           return this.templateEmailReportDemandeManeoClientInjoignableService.viewTemplateEmailReportDemandeManeoClientInjoignableDialog;
       }
    set viewTemplateEmailReportDemandeManeoClientInjoignableDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientInjoignableService.viewTemplateEmailReportDemandeManeoClientInjoignableDialog = value;
       }
       
     get searchTemplateEmailReportDemandeManeoClientInjoignable() : TemplateEmailReportDemandeManeoClientInjoignableVo {
        return this.templateEmailReportDemandeManeoClientInjoignableService.searchTemplateEmailReportDemandeManeoClientInjoignable;
       }
    set searchTemplateEmailReportDemandeManeoClientInjoignable(value: TemplateEmailReportDemandeManeoClientInjoignableVo) {
        this.templateEmailReportDemandeManeoClientInjoignableService.searchTemplateEmailReportDemandeManeoClientInjoignable = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
