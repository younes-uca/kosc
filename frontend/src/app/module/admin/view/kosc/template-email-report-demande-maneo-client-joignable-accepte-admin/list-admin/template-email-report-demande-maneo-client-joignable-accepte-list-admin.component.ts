import {Component, OnInit} from '@angular/core';
import {TemplateEmailReportDemandeManeoClientJoignableAccepteService} from 'src/app/controller/service/TemplateEmailReportDemandeManeoClientJoignableAccepte.service';
import {TemplateEmailReportDemandeManeoClientJoignableAccepteVo} from 'src/app/controller/model/TemplateEmailReportDemandeManeoClientJoignableAccepte.model';
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
  selector: 'app-template-email-report-demande-maneo-client-joignable-accepte-list-admin',
  templateUrl: './template-email-report-demande-maneo-client-joignable-accepte-list-admin.component.html',
  styleUrls: ['./template-email-report-demande-maneo-client-joignable-accepte-list-admin.component.css']
})
export class TemplateEmailReportDemandeManeoClientJoignableAccepteListAdminComponent implements OnInit {
   // declarations
    findByCriteriaShow = false;
    cols: any[] = [];
    excelPdfButons: MenuItem[];
    exportData: any[] = [];
    criteriaData: any[] = [];
    fileName = 'TemplateEmailReportDemandeManeoClientJoignableAccepte';


    constructor(private datePipe: DatePipe, private templateEmailReportDemandeManeoClientJoignableAccepteService: TemplateEmailReportDemandeManeoClientJoignableAccepteService,private messageService: MessageService,private confirmationService: ConfirmationService,private roleService: RoleService, private router: Router , private authService: AuthService , private exportService: ExportService
) { }

    ngOnInit() : void {
      this.loadTemplateEmailReportDemandeManeoClientJoignableAcceptes();
      this.initExport();
      this.initCol();
    }
    
    // methods
      public async loadTemplateEmailReportDemandeManeoClientJoignableAcceptes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeManeoClientJoignableAccepte', 'list');
        isPermistted ? this.templateEmailReportDemandeManeoClientJoignableAccepteService.findAll().subscribe(templateEmailReportDemandeManeoClientJoignableAcceptes => this.templateEmailReportDemandeManeoClientJoignableAcceptes = templateEmailReportDemandeManeoClientJoignableAcceptes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


  public searchRequest(){
        this.templateEmailReportDemandeManeoClientJoignableAccepteService.findByCriteria(this.searchTemplateEmailReportDemandeManeoClientJoignableAccepte).subscribe(templateEmailReportDemandeManeoClientJoignableAcceptes=>{
            
            this.templateEmailReportDemandeManeoClientJoignableAcceptes = templateEmailReportDemandeManeoClientJoignableAcceptes;
           // this.searchTemplateEmailReportDemandeManeoClientJoignableAccepte = new TemplateEmailReportDemandeManeoClientJoignableAccepteVo();
        },error=>console.log(error));
    }

    private initCol() {
        this.cols = [
                            {field: 'libelle', header: 'Libelle'},
                            {field: 'objet', header: 'Objet'},
        ];
    }
    
    public async editTemplateEmailReportDemandeManeoClientJoignableAccepte(templateEmailReportDemandeManeoClientJoignableAccepte: TemplateEmailReportDemandeManeoClientJoignableAccepteVo){
        const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeManeoClientJoignableAccepte', 'edit');
         if(isPermistted){
          this.templateEmailReportDemandeManeoClientJoignableAccepteService.findByIdWithAssociatedList(templateEmailReportDemandeManeoClientJoignableAccepte).subscribe(res => {
           this.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte = res;

            this.editTemplateEmailReportDemandeManeoClientJoignableAccepteDialog = true;
          });
        }else{
            this.messageService.add({
                severity: 'error', summary: 'Erreur', detail: 'Probléme de permission'
            });
         }
       
    }
    


   public async viewTemplateEmailReportDemandeManeoClientJoignableAccepte(templateEmailReportDemandeManeoClientJoignableAccepte: TemplateEmailReportDemandeManeoClientJoignableAccepteVo) {
       const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeManeoClientJoignableAccepte', 'view');
       if (isPermistted) {
           this.templateEmailReportDemandeManeoClientJoignableAccepteService.findByIdWithAssociatedList(templateEmailReportDemandeManeoClientJoignableAccepte).subscribe(res => {
               this.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte = res;

               this.viewTemplateEmailReportDemandeManeoClientJoignableAccepteDialog = true;
           });
           this.messageService.add({
               severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
           });


       }
   }
    
    public async openCreateTemplateEmailReportDemandeManeoClientJoignableAccepte(pojo: string) {
        const isPermistted = await this.roleService.isPermitted(pojo, 'add');
        if(isPermistted){
         this.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte = new TemplateEmailReportDemandeManeoClientJoignableAccepteVo();
            this.createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'
            });
        }
       
    }


    public async deleteTemplateEmailReportDemandeManeoClientJoignableAccepte(templateEmailReportDemandeManeoClientJoignableAccepte: TemplateEmailReportDemandeManeoClientJoignableAccepteVo){
       const isPermistted = await this.roleService.isPermitted('TemplateEmailReportDemandeManeoClientJoignableAccepte', 'delete');
        if(isPermistted){
                      this.confirmationService.confirm({
                      message: 'Voulez-vous supprimer cet élément (Template email report demande maneo client joignable accepte) ?',
                      header: 'Confirmation',
                      icon: 'pi pi-exclamation-triangle',
                      accept: () => {
                          this.templateEmailReportDemandeManeoClientJoignableAccepteService.delete(templateEmailReportDemandeManeoClientJoignableAccepte).subscribe(status=>{
                          if(status > 0){
                          const position = this.templateEmailReportDemandeManeoClientJoignableAcceptes.indexOf(templateEmailReportDemandeManeoClientJoignableAccepte);
                          position > -1 ? this.templateEmailReportDemandeManeoClientJoignableAcceptes.splice(position, 1) : false;
                       this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Template email report demande maneo client joignable accepte Supprimé',
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


public async duplicateTemplateEmailReportDemandeManeoClientJoignableAccepte(templateEmailReportDemandeManeoClientJoignableAccepte: TemplateEmailReportDemandeManeoClientJoignableAccepteVo) {

     this.templateEmailReportDemandeManeoClientJoignableAccepteService.findByIdWithAssociatedList(templateEmailReportDemandeManeoClientJoignableAccepte).subscribe(
	 res => {
	       this.initDuplicateTemplateEmailReportDemandeManeoClientJoignableAccepte(res);
	       this.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte = res;
	       this.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte.id = null;


            this.createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog = true;

});

	}

	initDuplicateTemplateEmailReportDemandeManeoClientJoignableAccepte(res: TemplateEmailReportDemandeManeoClientJoignableAccepteVo) {


	}

  initExport(): void {
    this.excelPdfButons = [
      {label: 'CSV', icon: 'pi pi-file', command: () => {this.prepareColumnExport(); this.exportService.exporterCSV(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'XLS', icon: 'pi pi-file-excel', command: () => {this.prepareColumnExport(); this.exportService.exporterExcel(this.criteriaData , this.exportData , this.fileName); }},
      {label: 'PDF', icon: 'pi pi-file-pdf', command: () => {this.prepareColumnExport(); this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName); }}
   ];
  }


    prepareColumnExport() : void {
    this.exportData = this.templateEmailReportDemandeManeoClientJoignableAcceptes.map(e => {
    return {
                    'Libelle': e.libelle ,
                    'Objet': e.objet ,
                    'Corps': e.corps ,
     }
      });

      this.criteriaData = [{
            'Libelle': this.searchTemplateEmailReportDemandeManeoClientJoignableAccepte.libelle ? this.searchTemplateEmailReportDemandeManeoClientJoignableAccepte.libelle : environment.emptyForExport ,
            'Objet': this.searchTemplateEmailReportDemandeManeoClientJoignableAccepte.objet ? this.searchTemplateEmailReportDemandeManeoClientJoignableAccepte.objet : environment.emptyForExport ,
            'Corps': this.searchTemplateEmailReportDemandeManeoClientJoignableAccepte.corps ? this.searchTemplateEmailReportDemandeManeoClientJoignableAccepte.corps : environment.emptyForExport ,
     }];

      }

    // getters and setters

    get templateEmailReportDemandeManeoClientJoignableAcceptes() : Array<TemplateEmailReportDemandeManeoClientJoignableAccepteVo> {
           return this.templateEmailReportDemandeManeoClientJoignableAccepteService.templateEmailReportDemandeManeoClientJoignableAcceptes;
       }
    set templateEmailReportDemandeManeoClientJoignableAcceptes(value: Array<TemplateEmailReportDemandeManeoClientJoignableAccepteVo>) {
        this.templateEmailReportDemandeManeoClientJoignableAccepteService.templateEmailReportDemandeManeoClientJoignableAcceptes = value;
       }

    get templateEmailReportDemandeManeoClientJoignableAccepteSelections() : Array<TemplateEmailReportDemandeManeoClientJoignableAccepteVo> {
           return this.templateEmailReportDemandeManeoClientJoignableAccepteService.templateEmailReportDemandeManeoClientJoignableAccepteSelections;
       }
    set templateEmailReportDemandeManeoClientJoignableAccepteSelections(value: Array<TemplateEmailReportDemandeManeoClientJoignableAccepteVo>) {
        this.templateEmailReportDemandeManeoClientJoignableAccepteService.templateEmailReportDemandeManeoClientJoignableAccepteSelections = value;
       }
   
     


    get selectedTemplateEmailReportDemandeManeoClientJoignableAccepte() : TemplateEmailReportDemandeManeoClientJoignableAccepteVo {
           return this.templateEmailReportDemandeManeoClientJoignableAccepteService.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte;
       }
    set selectedTemplateEmailReportDemandeManeoClientJoignableAccepte(value: TemplateEmailReportDemandeManeoClientJoignableAccepteVo) {
        this.templateEmailReportDemandeManeoClientJoignableAccepteService.selectedTemplateEmailReportDemandeManeoClientJoignableAccepte = value;
       }
    
    get createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog() :boolean {
           return this.templateEmailReportDemandeManeoClientJoignableAccepteService.createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog;
       }
    set createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientJoignableAccepteService.createTemplateEmailReportDemandeManeoClientJoignableAccepteDialog= value;
       }
    
    get editTemplateEmailReportDemandeManeoClientJoignableAccepteDialog() :boolean {
           return this.templateEmailReportDemandeManeoClientJoignableAccepteService.editTemplateEmailReportDemandeManeoClientJoignableAccepteDialog;
       }
    set editTemplateEmailReportDemandeManeoClientJoignableAccepteDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientJoignableAccepteService.editTemplateEmailReportDemandeManeoClientJoignableAccepteDialog= value;
       }
    get viewTemplateEmailReportDemandeManeoClientJoignableAccepteDialog() :boolean {
           return this.templateEmailReportDemandeManeoClientJoignableAccepteService.viewTemplateEmailReportDemandeManeoClientJoignableAccepteDialog;
       }
    set viewTemplateEmailReportDemandeManeoClientJoignableAccepteDialog(value: boolean) {
        this.templateEmailReportDemandeManeoClientJoignableAccepteService.viewTemplateEmailReportDemandeManeoClientJoignableAccepteDialog = value;
       }
       
     get searchTemplateEmailReportDemandeManeoClientJoignableAccepte() : TemplateEmailReportDemandeManeoClientJoignableAccepteVo {
        return this.templateEmailReportDemandeManeoClientJoignableAccepteService.searchTemplateEmailReportDemandeManeoClientJoignableAccepte;
       }
    set searchTemplateEmailReportDemandeManeoClientJoignableAccepte(value: TemplateEmailReportDemandeManeoClientJoignableAccepteVo) {
        this.templateEmailReportDemandeManeoClientJoignableAccepteService.searchTemplateEmailReportDemandeManeoClientJoignableAccepte = value;
       }


    get dateFormat(){
            return environment.dateFormatList;
    }


}
