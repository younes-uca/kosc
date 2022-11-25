import {Component, OnInit} from '@angular/core';
import {TemplateEmailReportDemandeClientClientInjoignableService} from 'src/app/controller/service/TemplateEmailReportDemandeClientClientInjoignable.service';
import {TemplateEmailReportDemandeClientClientInjoignableVo} from 'src/app/controller/model/TemplateEmailReportDemandeClientClientInjoignable.model';
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
  selector: 'app-template-email-report-demande-client-client-injoignable-list-admin',
  templateUrl: './template-email-report-demande-client-client-injoignable-list-admin.component.html',
  styleUrls: ['./template-email-report-demande-client-client-injoignable-list-admin.component.css']
})
export class TemplateEmailReportDemandeClientClientInjoignableListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'TemplateEmailReportDemandeClientClientInjoignable';


    constructor(private datePipe: DatePipe, private templateEmailReportDemandeClientClientInjoignableService: TemplateEmailReportDemandeClientClientInjoignableService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService: RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadTemplateEmailReportDemandeClientClientInjoignables();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadTemplateEmailReportDemandeClientClientInjoignables(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeClientClientInjoignable', 'list');
        isPermistted ? this.templateEmailReportDemandeClientClientInjoignableService.findAll().subscribe(templateEmailReportDemandeClientClientInjoignables => this.templateEmailReportDemandeClientClientInjoignables = templateEmailReportDemandeClientClientInjoignables,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.templateEmailReportDemandeClientClientInjoignableService.findByCriteria(this.searchTemplateEmailReportDemandeClientClientInjoignable).subscribe(templateEmailReportDemandeClientClientInjoignables=>{
            
            this.templateEmailReportDemandeClientClientInjoignables = templateEmailReportDemandeClientClientInjoignables;
           // this.searchTemplateEmailReportDemandeClientClientInjoignable = new TemplateEmailReportDemandeClientClientInjoignableVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
                            {field: 'objet', header: 'Objet'},
        ];
    }
    
    public async editTemplateEmailReportDemandeClientClientInjoignable(templateEmailReportDemandeClientClientInjoignable: TemplateEmailReportDemandeClientClientInjoignableVo){
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeClientClientInjoignable', 'edit');
         if(isPermistted){
          this.templateEmailReportDemandeClientClientInjoignableService.findByIdWithAssociatedList(templateEmailReportDemandeClientClientInjoignable).subscribe(res => {
           this.selectedTemplateEmailReportDemandeClientClientInjoignable = res;

            this.editTemplateEmailReportDemandeClientClientInjoignableDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewTemplateEmailReportDemandeClientClientInjoignable(templateEmailReportDemandeClientClientInjoignable: TemplateEmailReportDemandeClientClientInjoignableVo){
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeClientClientInjoignable', 'view');
        if(isPermistted){
           this.templateEmailReportDemandeClientClientInjoignableService.findByIdWithAssociatedList(templateEmailReportDemandeClientClientInjoignable).subscribe(res => {
           this.selectedTemplateEmailReportDemandeClientClientInjoignable = res;

            this.viewTemplateEmailReportDemandeClientClientInjoignableDialog = true;
          });
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });

        
    }
    
    public async openCreateTemplateEmailReportDemandeClientClientInjoignable(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedTemplateEmailReportDemandeClientClientInjoignable = new TemplateEmailReportDemandeClientClientInjoignableVo();
            this.createTemplateEmailReportDemandeClientClientInjoignableDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteTemplateEmailReportDemandeClientClientInjoignable(templateEmailReportDemandeClientClientInjoignable: TemplateEmailReportDemandeClientClientInjoignableVo){
       const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeClientClientInjoignable', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Template email report demande client client injoignable) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.templateEmailReportDemandeClientClientInjoignableService.delete(templateEmailReportDemandeClientClientInjoignable).subscribe(status=>{
                          if(status > 0){
                          const position = this.templateEmailReportDemandeClientClientInjoignables.indexOf(templateEmailReportDemandeClientClientInjoignable);
                          position > -1 ? this.templateEmailReportDemandeClientClientInjoignables.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Template email report demande client client injoignable Supprimé',
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


public async duplicateTemplateEmailReportDemandeClientClientInjoignable(templateEmailReportDemandeClientClientInjoignable: TemplateEmailReportDemandeClientClientInjoignableVo) {

     this.templateEmailReportDemandeClientClientInjoignableService.findByIdWithAssociatedList(templateEmailReportDemandeClientClientInjoignable).subscribe(
	 res => {
	       this.initDuplicateTemplateEmailReportDemandeClientClientInjoignable(res);
	       this.selectedTemplateEmailReportDemandeClientClientInjoignable = res;
	       this.selectedTemplateEmailReportDemandeClientClientInjoignable.id = null;


            this.createTemplateEmailReportDemandeClientClientInjoignableDialog = true;

});

	}

	initDuplicateTemplateEmailReportDemandeClientClientInjoignable(res: TemplateEmailReportDemandeClientClientInjoignableVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport(); this.exportService.exporterCSV(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport(); this.exportService.exporterExcel(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport(); this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName); }}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.templateEmailReportDemandeClientClientInjoignables.map(e => {
    return {
                    'Libelle': e.libelle ,
                    'Objet': e.objet ,
                    'Corps': e.corps ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchTemplateEmailReportDemandeClientClientInjoignable.libelle ? this.searchTemplateEmailReportDemandeClientClientInjoignable.libelle : environment.emptyForExport ,
            'Objet': this.searchTemplateEmailReportDemandeClientClientInjoignable.objet ? this.searchTemplateEmailReportDemandeClientClientInjoignable.objet : environment.emptyForExport ,
            'Corps': this.searchTemplateEmailReportDemandeClientClientInjoignable.corps ? this.searchTemplateEmailReportDemandeClientClientInjoignable.corps : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get templateEmailReportDemandeClientClientInjoignables() : Array<TemplateEmailReportDemandeClientClientInjoignableVo> {
           return this.templateEmailReportDemandeClientClientInjoignableService.templateEmailReportDemandeClientClientInjoignables;
       }
    set templateEmailReportDemandeClientClientInjoignables(value: Array<TemplateEmailReportDemandeClientClientInjoignableVo>) {
        this.templateEmailReportDemandeClientClientInjoignableService.templateEmailReportDemandeClientClientInjoignables = value;
       }

    get templateEmailReportDemandeClientClientInjoignableSelections() : Array<TemplateEmailReportDemandeClientClientInjoignableVo> {
           return this.templateEmailReportDemandeClientClientInjoignableService.templateEmailReportDemandeClientClientInjoignableSelections;
       }
    set templateEmailReportDemandeClientClientInjoignableSelections(value: Array<TemplateEmailReportDemandeClientClientInjoignableVo>) {
        this.templateEmailReportDemandeClientClientInjoignableService.templateEmailReportDemandeClientClientInjoignableSelections = value;
       }
   
     


    get selectedTemplateEmailReportDemandeClientClientInjoignable() : TemplateEmailReportDemandeClientClientInjoignableVo {
           return this.templateEmailReportDemandeClientClientInjoignableService.selectedTemplateEmailReportDemandeClientClientInjoignable;
       }
    set selectedTemplateEmailReportDemandeClientClientInjoignable(value: TemplateEmailReportDemandeClientClientInjoignableVo) {
        this.templateEmailReportDemandeClientClientInjoignableService.selectedTemplateEmailReportDemandeClientClientInjoignable = value;
       }
    
    get createTemplateEmailReportDemandeClientClientInjoignableDialog() :boolean {
           return this.templateEmailReportDemandeClientClientInjoignableService.createTemplateEmailReportDemandeClientClientInjoignableDialog;
       }
    set createTemplateEmailReportDemandeClientClientInjoignableDialog(value: boolean) {
        this.templateEmailReportDemandeClientClientInjoignableService.createTemplateEmailReportDemandeClientClientInjoignableDialog= value;
       }
    
    get editTemplateEmailReportDemandeClientClientInjoignableDialog() :boolean {
           return this.templateEmailReportDemandeClientClientInjoignableService.editTemplateEmailReportDemandeClientClientInjoignableDialog;
       }
    set editTemplateEmailReportDemandeClientClientInjoignableDialog(value: boolean) {
        this.templateEmailReportDemandeClientClientInjoignableService.editTemplateEmailReportDemandeClientClientInjoignableDialog= value;
       }
    get viewTemplateEmailReportDemandeClientClientInjoignableDialog() :boolean {
           return this.templateEmailReportDemandeClientClientInjoignableService.viewTemplateEmailReportDemandeClientClientInjoignableDialog;
       }
    set viewTemplateEmailReportDemandeClientClientInjoignableDialog(value: boolean) {
        this.templateEmailReportDemandeClientClientInjoignableService.viewTemplateEmailReportDemandeClientClientInjoignableDialog = value;
       }
       
     get searchTemplateEmailReportDemandeClientClientInjoignable() : TemplateEmailReportDemandeClientClientInjoignableVo {
        return this.templateEmailReportDemandeClientClientInjoignableService.searchTemplateEmailReportDemandeClientClientInjoignable;
       }
    set searchTemplateEmailReportDemandeClientClientInjoignable(value: TemplateEmailReportDemandeClientClientInjoignableVo) {
        this.templateEmailReportDemandeClientClientInjoignableService.searchTemplateEmailReportDemandeClientClientInjoignable = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
