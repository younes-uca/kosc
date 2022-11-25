import {Component, OnInit} from '@angular/core';
import {TemplateEmailReportDemandeManeoClientJoignableRefusService} from 'src/app/controller/service/TemplateEmailReportDemandeManeoClientJoignableRefus.service';
import {TemplateEmailReportDemandeManeoClientJoignableRefusVo} from 'src/app/controller/model/TemplateEmailReportDemandeManeoClientJoignableRefus.model';
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
  selector: 'app-template-email-report-demande-maneo-client-joignable-refus-list-admin',
  templateUrl: './template-email-report-demande-maneo-client-joignable-refus-list-admin.component.html',
  styleUrls: ['./template-email-report-demande-maneo-client-joignable-refus-list-admin.component.css']
})
export class TemplateEmailReportDemandeManeoClientJoignableRefusListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'TemplateEmailReportDemandeManeoClientJoignableRefus';


    constructor(private datePipe: DatePipe, private templateEmailReportDemandeManeoClientJoignableRefusService: TemplateEmailReportDemandeManeoClientJoignableRefusService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService: RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadTemplateEmailReportDemandeManeoClientJoignableRefuss();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadTemplateEmailReportDemandeManeoClientJoignableRefuss(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeManeoClientJoignableRefus', 'list');
        isPermistted ? this.templateEmailReportDemandeManeoClientJoignableRefusService.findAll().subscribe(templateEmailReportDemandeManeoClientJoignableRefuss => this.templateEmailReportDemandeManeoClientJoignableRefuss = templateEmailReportDemandeManeoClientJoignableRefuss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.templateEmailReportDemandeManeoClientJoignableRefusService.findByCriteria(this.searchTemplateEmailReportDemandeManeoClientJoignableRefus).subscribe(templateEmailReportDemandeManeoClientJoignableRefuss=>{
            
            this.templateEmailReportDemandeManeoClientJoignableRefuss = templateEmailReportDemandeManeoClientJoignableRefuss;
           // this.searchTemplateEmailReportDemandeManeoClientJoignableRefus = new TemplateEmailReportDemandeManeoClientJoignableRefusVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
                            {field: 'objet', header: 'Objet'},
        ];
    }
    
    public async editTemplateEmailReportDemandeManeoClientJoignableRefus(templateEmailReportDemandeManeoClientJoignableRefus: TemplateEmailReportDemandeManeoClientJoignableRefusVo){
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeManeoClientJoignableRefus', 'edit');
         if(isPermistted){
          this.templateEmailReportDemandeManeoClientJoignableRefusService.findByIdWithAssociatedList(templateEmailReportDemandeManeoClientJoignableRefus).subscribe(res => {
           this.selectedTemplateEmailReportDemandeManeoClientJoignableRefus = res;

            this.editTemplateEmailReportDemandeManeoClientJoignableRefusDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewTemplateEmailReportDemandeManeoClientJoignableRefus(templateEmailReportDemandeManeoClientJoignableRefus: TemplateEmailReportDemandeManeoClientJoignableRefusVo) {
       const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeManeoClientJoignableRefus', 'view');
       if (isPermistted) {
           this.templateEmailReportDemandeManeoClientJoignableRefusService.findByIdWithAssociatedList(templateEmailReportDemandeManeoClientJoignableRefus).subscribe(res => {
               this.selectedTemplateEmailReportDemandeManeoClientJoignableRefus = res;

               this.viewTemplateEmailReportDemandeManeoClientJoignableRefusDialog = true;
           });
           this.messageService.add({
               severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
           });


       }
   }
    
    public async openCreateTemplateEmailReportDemandeManeoClientJoignableRefus(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedTemplateEmailReportDemandeManeoClientJoignableRefus = new TemplateEmailReportDemandeManeoClientJoignableRefusVo();
            this.createTemplateEmailReportDemandeManeoClientJoignableRefusDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteTemplateEmailReportDemandeManeoClientJoignableRefus(templateEmailReportDemandeManeoClientJoignableRefus: TemplateEmailReportDemandeManeoClientJoignableRefusVo){
       const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeManeoClientJoignableRefus', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Template email report demande maneo client joignable refus) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.templateEmailReportDemandeManeoClientJoignableRefusService.delete(templateEmailReportDemandeManeoClientJoignableRefus).subscribe(status=>{
                          if(status > 0){
                          const position = this.templateEmailReportDemandeManeoClientJoignableRefuss.indexOf(templateEmailReportDemandeManeoClientJoignableRefus);
                          position > -1 ? this.templateEmailReportDemandeManeoClientJoignableRefuss.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Template email report demande maneo client joignable refus Supprimé',
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


public async duplicateTemplateEmailReportDemandeManeoClientJoignableRefus(templateEmailReportDemandeManeoClientJoignableRefus: TemplateEmailReportDemandeManeoClientJoignableRefusVo) {

     this.templateEmailReportDemandeManeoClientJoignableRefusService.findByIdWithAssociatedList(templateEmailReportDemandeManeoClientJoignableRefus).subscribe(
	 res => {
	       this.initDuplicateTemplateEmailReportDemandeManeoClientJoignableRefus(res);
	       this.selectedTemplateEmailReportDemandeManeoClientJoignableRefus = res;
	       this.selectedTemplateEmailReportDemandeManeoClientJoignableRefus.id = null;


            this.createTemplateEmailReportDemandeManeoClientJoignableRefusDialog = true;

});

	}

	initDuplicateTemplateEmailReportDemandeManeoClientJoignableRefus(res: TemplateEmailReportDemandeManeoClientJoignableRefusVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport(); this.exportService.exporterCSV(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport(); this.exportService.exporterExcel(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport(); this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName); }}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.templateEmailReportDemandeManeoClientJoignableRefuss.map(e => {
    return {
                    'Libelle': e.libelle ,
                    'Objet': e.objet ,
                    'Corps': e.corps ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchTemplateEmailReportDemandeManeoClientJoignableRefus.libelle ? this.searchTemplateEmailReportDemandeManeoClientJoignableRefus.libelle : environment.emptyForExport ,
            'Objet': this.searchTemplateEmailReportDemandeManeoClientJoignableRefus.objet ? this.searchTemplateEmailReportDemandeManeoClientJoignableRefus.objet : environment.emptyForExport ,
            'Corps': this.searchTemplateEmailReportDemandeManeoClientJoignableRefus.corps ? this.searchTemplateEmailReportDemandeManeoClientJoignableRefus.corps : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get templateEmailReportDemandeManeoClientJoignableRefuss() : Array<TemplateEmailReportDemandeManeoClientJoignableRefusVo> {
           return this.templateEmailReportDemandeManeoClientJoignableRefusService.templateEmailReportDemandeManeoClientJoignableRefuss;
       }
    set templateEmailReportDemandeManeoClientJoignableRefuss(value: Array<TemplateEmailReportDemandeManeoClientJoignableRefusVo>) {
        this.templateEmailReportDemandeManeoClientJoignableRefusService.templateEmailReportDemandeManeoClientJoignableRefuss = value;
       }

    get templateEmailReportDemandeManeoClientJoignableRefusSelections() : Array<TemplateEmailReportDemandeManeoClientJoignableRefusVo> {
           return this.templateEmailReportDemandeManeoClientJoignableRefusService.templateEmailReportDemandeManeoClientJoignableRefusSelections;
       }
    set templateEmailReportDemandeManeoClientJoignableRefusSelections(value: Array<TemplateEmailReportDemandeManeoClientJoignableRefusVo>) {
        this.templateEmailReportDemandeManeoClientJoignableRefusService.templateEmailReportDemandeManeoClientJoignableRefusSelections = value;
       }
   
     


    get selectedTemplateEmailReportDemandeManeoClientJoignableRefus() : TemplateEmailReportDemandeManeoClientJoignableRefusVo {
           return this.templateEmailReportDemandeManeoClientJoignableRefusService.selectedTemplateEmailReportDemandeManeoClientJoignableRefus;
       }
    set selectedTemplateEmailReportDemandeManeoClientJoignableRefus(value: TemplateEmailReportDemandeManeoClientJoignableRefusVo) {
        this.templateEmailReportDemandeManeoClientJoignableRefusService.selectedTemplateEmailReportDemandeManeoClientJoignableRefus = value;
       }
    
    get createTemplateEmailReportDemandeManeoClientJoignableRefusDialog() :boolean {
           return this.templateEmailReportDemandeManeoClientJoignableRefusService.createTemplateEmailReportDemandeManeoClientJoignableRefusDialog;
       }
    set createTemplateEmailReportDemandeManeoClientJoignableRefusDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientJoignableRefusService.createTemplateEmailReportDemandeManeoClientJoignableRefusDialog= value;
       }
    
    get editTemplateEmailReportDemandeManeoClientJoignableRefusDialog() :boolean {
           return this.templateEmailReportDemandeManeoClientJoignableRefusService.editTemplateEmailReportDemandeManeoClientJoignableRefusDialog;
       }
    set editTemplateEmailReportDemandeManeoClientJoignableRefusDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientJoignableRefusService.editTemplateEmailReportDemandeManeoClientJoignableRefusDialog= value;
       }
    get viewTemplateEmailReportDemandeManeoClientJoignableRefusDialog() :boolean {
           return this.templateEmailReportDemandeManeoClientJoignableRefusService.viewTemplateEmailReportDemandeManeoClientJoignableRefusDialog;
       }
    set viewTemplateEmailReportDemandeManeoClientJoignableRefusDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientJoignableRefusService.viewTemplateEmailReportDemandeManeoClientJoignableRefusDialog = value;
       }
       
     get searchTemplateEmailReportDemandeManeoClientJoignableRefus() : TemplateEmailReportDemandeManeoClientJoignableRefusVo {
        return this.templateEmailReportDemandeManeoClientJoignableRefusService.searchTemplateEmailReportDemandeManeoClientJoignableRefus;
       }
    set searchTemplateEmailReportDemandeManeoClientJoignableRefus(value: TemplateEmailReportDemandeManeoClientJoignableRefusVo) {
        this.templateEmailReportDemandeManeoClientJoignableRefusService.searchTemplateEmailReportDemandeManeoClientJoignableRefus = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
