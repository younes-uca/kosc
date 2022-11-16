import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import {MultiSelectModule} from 'primeng/multiselect';

import {CauseKoOkCreateAdminComponent} from './cause-ko-ok-admin/create-admin/cause-ko-ok-create-admin.component';
import {CauseKoOkEditAdminComponent} from './cause-ko-ok-admin/edit-admin/cause-ko-ok-edit-admin.component';
import {CauseKoOkViewAdminComponent} from './cause-ko-ok-admin/view-admin/cause-ko-ok-view-admin.component';
import {CauseKoOkListAdminComponent} from './cause-ko-ok-admin/list-admin/cause-ko-ok-list-admin.component';
import {CauseKoOkAdminComponent} from './cause-ko-ok-admin/cause-ko-ok-admin.component';
import {
    TemplateEmailFtlCreateAdminComponent
} from './template-email-ftl-admin/create-admin/template-email-ftl-create-admin.component';
import {
    TemplateEmailFtlEditAdminComponent
} from './template-email-ftl-admin/edit-admin/template-email-ftl-edit-admin.component';
import {
    TemplateEmailFtlViewAdminComponent
} from './template-email-ftl-admin/view-admin/template-email-ftl-view-admin.component';
import {
    TemplateEmailFtlListAdminComponent
} from './template-email-ftl-admin/list-admin/template-email-ftl-list-admin.component';
import {TemplateEmailFtlAdminComponent} from './template-email-ftl-admin/template-email-ftl-admin.component';
import {
    EtatDemandeKoscCreateAdminComponent
} from './etat-demande-kosc-admin/create-admin/etat-demande-kosc-create-admin.component';
import {
    EtatDemandeKoscEditAdminComponent
} from './etat-demande-kosc-admin/edit-admin/etat-demande-kosc-edit-admin.component';
import {
    EtatDemandeKoscViewAdminComponent
} from './etat-demande-kosc-admin/view-admin/etat-demande-kosc-view-admin.component';
import {
    EtatDemandeKoscListAdminComponent
} from './etat-demande-kosc-admin/list-admin/etat-demande-kosc-list-admin.component';
import {EtatDemandeKoscAdminComponent} from './etat-demande-kosc-admin/etat-demande-kosc-admin.component';
import {
    TemplateEmailMauvaisContactCreateAdminComponent
} from './template-email-mauvais-contact-admin/create-admin/template-email-mauvais-contact-create-admin.component';
import {
    TemplateEmailMauvaisContactEditAdminComponent
} from './template-email-mauvais-contact-admin/edit-admin/template-email-mauvais-contact-edit-admin.component';
import {
    TemplateEmailMauvaisContactViewAdminComponent
} from './template-email-mauvais-contact-admin/view-admin/template-email-mauvais-contact-view-admin.component';
import {
    TemplateEmailMauvaisContactListAdminComponent
} from './template-email-mauvais-contact-admin/list-admin/template-email-mauvais-contact-list-admin.component';
import {
    TemplateEmailMauvaisContactAdminComponent
} from './template-email-mauvais-contact-admin/template-email-mauvais-contact-admin.component';
import {ChercheurCreateAdminComponent} from './chercheur-admin/create-admin/chercheur-create-admin.component';
import {ChercheurEditAdminComponent} from './chercheur-admin/edit-admin/chercheur-edit-admin.component';
import {ChercheurViewAdminComponent} from './chercheur-admin/view-admin/chercheur-view-admin.component';
import {ChercheurListAdminComponent} from './chercheur-admin/list-admin/chercheur-list-admin.component';
import {ChercheurAdminComponent} from './chercheur-admin/chercheur-admin.component';
import {
    TemplateEmailRefusCreateAdminComponent
} from './template-email-refus-admin/create-admin/template-email-refus-create-admin.component';
import {
    TemplateEmailRefusEditAdminComponent
} from './template-email-refus-admin/edit-admin/template-email-refus-edit-admin.component';
import {
    TemplateEmailRefusViewAdminComponent
} from './template-email-refus-admin/view-admin/template-email-refus-view-admin.component';
import {
    TemplateEmailRefusListAdminComponent
} from './template-email-refus-admin/list-admin/template-email-refus-list-admin.component';
import {TemplateEmailRefusAdminComponent} from './template-email-refus-admin/template-email-refus-admin.component';
import {TechnicienCreateAdminComponent} from './technicien-admin/create-admin/technicien-create-admin.component';
import {TechnicienEditAdminComponent} from './technicien-admin/edit-admin/technicien-edit-admin.component';
import {TechnicienViewAdminComponent} from './technicien-admin/view-admin/technicien-view-admin.component';
import {TechnicienListAdminComponent} from './technicien-admin/list-admin/technicien-list-admin.component';
import {TechnicienAdminComponent} from './technicien-admin/technicien-admin.component';
import {
    SourceReplanificationCreateAdminComponent
} from './source-replanification-admin/create-admin/source-replanification-create-admin.component';
import {
    SourceReplanificationEditAdminComponent
} from './source-replanification-admin/edit-admin/source-replanification-edit-admin.component';
import {
    SourceReplanificationViewAdminComponent
} from './source-replanification-admin/view-admin/source-replanification-view-admin.component';
import {
    SourceReplanificationListAdminComponent
} from './source-replanification-admin/list-admin/source-replanification-list-admin.component';
import {
    SourceReplanificationAdminComponent
} from './source-replanification-admin/source-replanification-admin.component';
import {
    TemplateEmailConfirmationClientCreateAdminComponent
} from './template-email-confirmation-client-admin/create-admin/template-email-confirmation-client-create-admin.component';
import {
    TemplateEmailConfirmationClientEditAdminComponent
} from './template-email-confirmation-client-admin/edit-admin/template-email-confirmation-client-edit-admin.component';
import {
    TemplateEmailConfirmationClientViewAdminComponent
} from './template-email-confirmation-client-admin/view-admin/template-email-confirmation-client-view-admin.component';
import {
    TemplateEmailConfirmationClientListAdminComponent
} from './template-email-confirmation-client-admin/list-admin/template-email-confirmation-client-list-admin.component';
import {
    TemplateEmailConfirmationClientAdminComponent
} from './template-email-confirmation-client-admin/template-email-confirmation-client-admin.component';
import {
    TemplateEmailReplanificationCreateAdminComponent
} from './template-email-replanification-admin/create-admin/template-email-replanification-create-admin.component';
import {
    TemplateEmailReplanificationEditAdminComponent
} from './template-email-replanification-admin/edit-admin/template-email-replanification-edit-admin.component';
import {
    TemplateEmailReplanificationViewAdminComponent
} from './template-email-replanification-admin/view-admin/template-email-replanification-view-admin.component';
import {
    TemplateEmailReplanificationListAdminComponent
} from './template-email-replanification-admin/list-admin/template-email-replanification-list-admin.component';
import {
    TemplateEmailReplanificationAdminComponent
} from './template-email-replanification-admin/template-email-replanification-admin.component';
import {
    TemplateEmailClotureCreateAdminComponent
} from './template-email-cloture-admin/create-admin/template-email-cloture-create-admin.component';
import {
    TemplateEmailClotureEditAdminComponent
} from './template-email-cloture-admin/edit-admin/template-email-cloture-edit-admin.component';
import {
    TemplateEmailClotureViewAdminComponent
} from './template-email-cloture-admin/view-admin/template-email-cloture-view-admin.component';
import {
    TemplateEmailClotureListAdminComponent
} from './template-email-cloture-admin/list-admin/template-email-cloture-list-admin.component';
import {
    TemplateEmailClotureAdminComponent
} from './template-email-cloture-admin/template-email-cloture-admin.component';
import {
    TemplateEmailClientInjoinableKoscCreateAdminComponent
} from './template-email-client-injoinable-kosc-admin/create-admin/template-email-client-injoinable-kosc-create-admin.component';
import {
    TemplateEmailClientInjoinableKoscEditAdminComponent
} from './template-email-client-injoinable-kosc-admin/edit-admin/template-email-client-injoinable-kosc-edit-admin.component';
import {
    TemplateEmailClientInjoinableKoscViewAdminComponent
} from './template-email-client-injoinable-kosc-admin/view-admin/template-email-client-injoinable-kosc-view-admin.component';
import {
    TemplateEmailClientInjoinableKoscListAdminComponent
} from './template-email-client-injoinable-kosc-admin/list-admin/template-email-client-injoinable-kosc-list-admin.component';
import {
    TemplateEmailClientInjoinableKoscAdminComponent
} from './template-email-client-injoinable-kosc-admin/template-email-client-injoinable-kosc-admin.component';
import {
    TemplateEmailPlanificationCreateAdminComponent
} from './template-email-planification-admin/create-admin/template-email-planification-create-admin.component';
import {
    TemplateEmailPlanificationEditAdminComponent
} from './template-email-planification-admin/edit-admin/template-email-planification-edit-admin.component';
import {
    TemplateEmailPlanificationViewAdminComponent
} from './template-email-planification-admin/view-admin/template-email-planification-view-admin.component';
import {
    TemplateEmailPlanificationListAdminComponent
} from './template-email-planification-admin/list-admin/template-email-planification-list-admin.component';
import {
    TemplateEmailPlanificationAdminComponent
} from './template-email-planification-admin/template-email-planification-admin.component';
import {
    ArretTravailCreateAdminComponent
} from './arret-travail-admin/create-admin/arret-travail-create-admin.component';
import {ArretTravailEditAdminComponent} from './arret-travail-admin/edit-admin/arret-travail-edit-admin.component';
import {ArretTravailViewAdminComponent} from './arret-travail-admin/view-admin/arret-travail-view-admin.component';
import {ArretTravailListAdminComponent} from './arret-travail-admin/list-admin/arret-travail-list-admin.component';
import {ArretTravailAdminComponent} from './arret-travail-admin/arret-travail-admin.component';
import {DepartementCreateAdminComponent} from './departement-admin/create-admin/departement-create-admin.component';
import {DepartementEditAdminComponent} from './departement-admin/edit-admin/departement-edit-admin.component';
import {DepartementViewAdminComponent} from './departement-admin/view-admin/departement-view-admin.component';
import {DepartementListAdminComponent} from './departement-admin/list-admin/departement-list-admin.component';
import {DepartementAdminComponent} from './departement-admin/departement-admin.component';
import {
    RaisonArretTravailCreateAdminComponent
} from './raison-arret-travail-admin/create-admin/raison-arret-travail-create-admin.component';
import {
    RaisonArretTravailEditAdminComponent
} from './raison-arret-travail-admin/edit-admin/raison-arret-travail-edit-admin.component';
import {
    RaisonArretTravailViewAdminComponent
} from './raison-arret-travail-admin/view-admin/raison-arret-travail-view-admin.component';
import {
    RaisonArretTravailListAdminComponent
} from './raison-arret-travail-admin/list-admin/raison-arret-travail-list-admin.component';
import {RaisonArretTravailAdminComponent} from './raison-arret-travail-admin/raison-arret-travail-admin.component';
import {
    TemplateEmailReportCreateAdminComponent
} from './template-email-report-admin/create-admin/template-email-report-create-admin.component';
import {
    TemplateEmailReportEditAdminComponent
} from './template-email-report-admin/edit-admin/template-email-report-edit-admin.component';
import {
    TemplateEmailReportViewAdminComponent
} from './template-email-report-admin/view-admin/template-email-report-view-admin.component';
import {
    TemplateEmailReportListAdminComponent
} from './template-email-report-admin/list-admin/template-email-report-list-admin.component';
import {TemplateEmailReportAdminComponent} from './template-email-report-admin/template-email-report-admin.component';
import {
    TemplateSuiviCreateAdminComponent
} from './template-suivi-admin/create-admin/template-suivi-create-admin.component';
import {TemplateSuiviEditAdminComponent} from './template-suivi-admin/edit-admin/template-suivi-edit-admin.component';
import {TemplateSuiviViewAdminComponent} from './template-suivi-admin/view-admin/template-suivi-view-admin.component';
import {TemplateSuiviListAdminComponent} from './template-suivi-admin/list-admin/template-suivi-list-admin.component';
import {TemplateSuiviAdminComponent} from './template-suivi-admin/template-suivi-admin.component';
import {
    DepartementTechnicienCreateAdminComponent
} from './departement-technicien-admin/create-admin/departement-technicien-create-admin.component';
import {
    DepartementTechnicienEditAdminComponent
} from './departement-technicien-admin/edit-admin/departement-technicien-edit-admin.component';
import {
    DepartementTechnicienViewAdminComponent
} from './departement-technicien-admin/view-admin/departement-technicien-view-admin.component';
import {
    DepartementTechnicienListAdminComponent
} from './departement-technicien-admin/list-admin/departement-technicien-list-admin.component';
import {
    DepartementTechnicienAdminComponent
} from './departement-technicien-admin/departement-technicien-admin.component';
import {
    TemplateEmailClientInjoinableCreateAdminComponent
} from './template-email-client-injoinable-admin/create-admin/template-email-client-injoinable-create-admin.component';
import {
    TemplateEmailClientInjoinableEditAdminComponent
} from './template-email-client-injoinable-admin/edit-admin/template-email-client-injoinable-edit-admin.component';
import {
    TemplateEmailClientInjoinableViewAdminComponent
} from './template-email-client-injoinable-admin/view-admin/template-email-client-injoinable-view-admin.component';
import {
    TemplateEmailClientInjoinableListAdminComponent
} from './template-email-client-injoinable-admin/list-admin/template-email-client-injoinable-list-admin.component';
import {
    TemplateEmailClientInjoinableAdminComponent
} from './template-email-client-injoinable-admin/template-email-client-injoinable-admin.component';
import {RegionCreateAdminComponent} from './region-admin/create-admin/region-create-admin.component';
import {RegionEditAdminComponent} from './region-admin/edit-admin/region-edit-admin.component';
import {RegionViewAdminComponent} from './region-admin/view-admin/region-view-admin.component';
import {RegionListAdminComponent} from './region-admin/list-admin/region-list-admin.component';
import {RegionAdminComponent} from './region-admin/region-admin.component';
import {OperatorCreateAdminComponent} from './operator-admin/create-admin/operator-create-admin.component';
import {OperatorEditAdminComponent} from './operator-admin/edit-admin/operator-edit-admin.component';
import {OperatorViewAdminComponent} from './operator-admin/view-admin/operator-view-admin.component';
import {OperatorListAdminComponent} from './operator-admin/list-admin/operator-list-admin.component';
import {OperatorAdminComponent} from './operator-admin/operator-admin.component';
import {
    TemplateEmailCriCreateAdminComponent
} from './template-email-cri-admin/create-admin/template-email-cri-create-admin.component';
import {
    TemplateEmailCriEditAdminComponent
} from './template-email-cri-admin/edit-admin/template-email-cri-edit-admin.component';
import {
    TemplateEmailCriViewAdminComponent
} from './template-email-cri-admin/view-admin/template-email-cri-view-admin.component';
import {
    TemplateEmailCriListAdminComponent
} from './template-email-cri-admin/list-admin/template-email-cri-list-admin.component';
import {TemplateEmailCriAdminComponent} from './template-email-cri-admin/template-email-cri-admin.component';
import {EntrepriseCreateAdminComponent} from './entreprise-admin/create-admin/entreprise-create-admin.component';
import {EntrepriseEditAdminComponent} from './entreprise-admin/edit-admin/entreprise-edit-admin.component';
import {EntrepriseViewAdminComponent} from './entreprise-admin/view-admin/entreprise-view-admin.component';
import {EntrepriseListAdminComponent} from './entreprise-admin/list-admin/entreprise-list-admin.component';
import {EntrepriseAdminComponent} from './entreprise-admin/entreprise-admin.component';
import {OrdreKoscCreateAdminComponent} from './ordre-kosc-admin/create-admin/ordre-kosc-create-admin.component';
import {OrdreKoscEditAdminComponent} from './ordre-kosc-admin/edit-admin/ordre-kosc-edit-admin.component';
import {OrdreKoscViewAdminComponent} from './ordre-kosc-admin/view-admin/ordre-kosc-view-admin.component';
import {OrdreKoscListAdminComponent} from './ordre-kosc-admin/list-admin/ordre-kosc-list-admin.component';
import {OrdreKoscAdminComponent} from './ordre-kosc-admin/ordre-kosc-admin.component';

import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {InputMaskModule} from "primeng/inputmask";

import {
    OrdreKoscSuiviEditAdminComponent
} from "./ordre-kosc-suivi-admin/edit-admin/ordre-kosc-suivi-edit-admin.component";
import {
    OrdreKoscSuiviListAdminComponent
} from "./ordre-kosc-suivi-admin/list-admin/ordre-kosc-suivi-list-admin.component";
import {
    OrdreKoscSuiviViewAdminComponent
} from "./ordre-kosc-suivi-admin/view-admin/ordre-kosc-suivi-view-admin.component";
import {OrdreKoscSuiviAdminComponent} from "./ordre-kosc-suivi-admin/ordre-kosc-suivi-admin.component";
import {
    OrdreKoscSuiviHistoriqueListAdminComponent
} from "./ordre-kosc-suivi-historique-admin/list-admin/ordre-kosc-suivi-historique-list-admin.component";
import {
    OrdreKoscSuiviHistoriqueViewAdminComponent
} from "./ordre-kosc-suivi-historique-admin/view-admin/ordre-kosc-suivi-historique-view-admin.component";
import {
    OrdreKoscSuiviHistoriqueEditAdminComponent
} from "./ordre-kosc-suivi-historique-admin/edit-admin/ordre-kosc-suivi-historique-edit-admin.component";
import {
    OrdreKoscSuiviHistoriqueAdminComponent
} from "./ordre-kosc-suivi-historique-admin/ordre-kosc-suivi-historique-admin.component";
import {
    OrdreKoscAffectationTechnicienAdminComponent
} from "./ordre-kosc-affectation-technicien-admin/ordre-kosc-affectation-technicien-admin.component";
import {
    OrdreKoscAffectationTechnicienListAdminComponent
} from "./ordre-kosc-affectation-technicien-admin/list-admin/ordre-kosc-affectation-technicien-list-admin.component";
import {
    OrdreKoscAffectationTechnicienViewAdminComponent
} from "./ordre-kosc-affectation-technicien-admin/view-admin/ordre-kosc-affectation-technicien-view-admin.component";
import {
    OrdreKoscAffectationTechnicienEditAdminComponent
} from "./ordre-kosc-affectation-technicien-admin/edit-admin/ordre-kosc-affectation-technicien-edit-admin.component";
import {OrdreKoscPriseRdvAdminComponent} from "./ordre-kosc-prise-rdv-admin/ordre-kosc-prise-rdv-admin.component";
import {
    OrdreKoscPriseRdvViewAdminComponent
} from "./ordre-kosc-prise-rdv-admin/view-admin/ordre-kosc-prise-rdv-view-admin.component";
import {
    OrdreKoscPriseRdvListAdminComponent
} from "./ordre-kosc-prise-rdv-admin/list-admin/ordre-kosc-prise-rdv-list-admin.component";
import {
    OrdreKoscPriseRdvEditAdminComponent
} from "./ordre-kosc-prise-rdv-admin/edit-admin/ordre-kosc-prise-rdv-edit-admin.component";
import {
    DefaultTemplateConfigurationCreateAdminComponent
} from "./default-template-configuration-admin/create-admin/default-template-configuration-create-admin.component";
import {
    DefaultTemplateConfigurationListAdminComponent
} from "./default-template-configuration-admin/list-admin/default-template-configuration-list-admin.component";
import {
    DefaultTemplateConfigurationViewAdminComponent
} from "./default-template-configuration-admin/view-admin/default-template-configuration-view-admin.component";
import {
    DefaultTemplateConfigurationEditAdminComponent
} from "./default-template-configuration-admin/edit-admin/default-template-configuration-edit-admin.component";
import {
    DefaultTemplateConfigurationAdminComponent
} from "./default-template-configuration-admin/default-template-configuration-admin.component";

import {RippleModule} from "primeng/ripple";
import { StatisticKoscAdminComponent } from './statistic-kosc-admin/statistic-kosc-admin.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {BlockUIModule} from "primeng/blockui";
import {JourFerieCreateAdminComponent} from "./jour-ferie-admin/create-admin/jour-ferie-create-admin.component";
import {JourFerieListAdminComponent} from "./jour-ferie-admin/list-admin/jour-ferie-list-admin.component";
import {JourFerieViewAdminComponent} from "./jour-ferie-admin/view-admin/jour-ferie-view-admin.component";
import {JourFerieEditAdminComponent} from "./jour-ferie-admin/edit-admin/jour-ferie-edit-admin.component";
import {JourFerieAdminComponent} from "./jour-ferie-admin/jour-ferie-admin.component";
import {OrdreKoscSuiviCddAdminComponent} from "./ordre-kosc-suivi-cdd-admin/ordre-kosc-suivi-cdd-admin.component";
import {
    OrdreKoscSuiviCddListAdminComponent
} from "./ordre-kosc-suivi-cdd-admin/list-admin/ordre-kosc-suivi-cdd-list-admin.component";
import {
    OrdreKoscSuiviCddEditAdminComponent
} from "./ordre-kosc-suivi-cdd-admin/edit-admin/ordre-kosc-suivi-cdd-edit-admin.component";
import {
    OrdreKoscSuiviCddViewAdminComponent
} from "./ordre-kosc-suivi-cdd-admin/view-admin/ordre-kosc-suivi-cdd-view-admin.component";




@NgModule({
    declarations: [
        OrdreKoscSuiviCddViewAdminComponent,
        OrdreKoscSuiviCddEditAdminComponent,
        OrdreKoscSuiviCddListAdminComponent,
        OrdreKoscSuiviCddAdminComponent,
        CauseKoOkCreateAdminComponent,
        CauseKoOkListAdminComponent,
        CauseKoOkViewAdminComponent,
        CauseKoOkEditAdminComponent,
        CauseKoOkAdminComponent,
        TemplateEmailFtlCreateAdminComponent,
        TemplateEmailFtlListAdminComponent,
        TemplateEmailFtlViewAdminComponent,
        TemplateEmailFtlEditAdminComponent,
        TemplateEmailFtlAdminComponent,
        EtatDemandeKoscCreateAdminComponent,
        EtatDemandeKoscListAdminComponent,
        EtatDemandeKoscViewAdminComponent,
        EtatDemandeKoscEditAdminComponent,
        EtatDemandeKoscAdminComponent,
        TemplateEmailMauvaisContactCreateAdminComponent,
        TemplateEmailMauvaisContactListAdminComponent,
        TemplateEmailMauvaisContactViewAdminComponent,
        TemplateEmailMauvaisContactEditAdminComponent,
        TemplateEmailMauvaisContactAdminComponent,
        ChercheurCreateAdminComponent,
        ChercheurListAdminComponent,
        ChercheurViewAdminComponent,
        ChercheurEditAdminComponent,
        ChercheurAdminComponent,
        TemplateEmailRefusCreateAdminComponent,
        TemplateEmailRefusListAdminComponent,
        TemplateEmailRefusViewAdminComponent,
        TemplateEmailRefusEditAdminComponent,
        TemplateEmailRefusAdminComponent,
        TechnicienCreateAdminComponent,
        TechnicienListAdminComponent,
        TechnicienViewAdminComponent,
        TechnicienEditAdminComponent,
        TechnicienAdminComponent,
        SourceReplanificationCreateAdminComponent,
        SourceReplanificationListAdminComponent,
        SourceReplanificationViewAdminComponent,
        SourceReplanificationEditAdminComponent,
        SourceReplanificationAdminComponent,
        TemplateEmailConfirmationClientCreateAdminComponent,
        TemplateEmailConfirmationClientListAdminComponent,
        TemplateEmailConfirmationClientViewAdminComponent,
        TemplateEmailConfirmationClientEditAdminComponent,
        TemplateEmailConfirmationClientAdminComponent,
        TemplateEmailReplanificationCreateAdminComponent,
        TemplateEmailReplanificationListAdminComponent,
        TemplateEmailReplanificationViewAdminComponent,
        TemplateEmailReplanificationEditAdminComponent,
        TemplateEmailReplanificationAdminComponent,
        TemplateEmailClotureCreateAdminComponent,
        TemplateEmailClotureListAdminComponent,
        TemplateEmailClotureViewAdminComponent,
        TemplateEmailClotureEditAdminComponent,
        TemplateEmailClotureAdminComponent,
        TemplateEmailClientInjoinableKoscCreateAdminComponent,
        TemplateEmailClientInjoinableKoscListAdminComponent,
        TemplateEmailClientInjoinableKoscViewAdminComponent,
        TemplateEmailClientInjoinableKoscEditAdminComponent,
        TemplateEmailClientInjoinableKoscAdminComponent,
        TemplateEmailPlanificationCreateAdminComponent,
        TemplateEmailPlanificationListAdminComponent,
        TemplateEmailPlanificationViewAdminComponent,
        TemplateEmailPlanificationEditAdminComponent,
        TemplateEmailPlanificationAdminComponent,
        ArretTravailCreateAdminComponent,
        ArretTravailListAdminComponent,
        ArretTravailViewAdminComponent,
        ArretTravailEditAdminComponent,
        ArretTravailAdminComponent,
        JourFerieCreateAdminComponent,
        JourFerieListAdminComponent,
        JourFerieViewAdminComponent,
        JourFerieEditAdminComponent,
        JourFerieAdminComponent,
        DepartementCreateAdminComponent,
        DepartementListAdminComponent,
        DepartementViewAdminComponent,
        DepartementEditAdminComponent,
        DepartementAdminComponent,
        RaisonArretTravailCreateAdminComponent,
        RaisonArretTravailListAdminComponent,
        RaisonArretTravailViewAdminComponent,
        RaisonArretTravailEditAdminComponent,
        RaisonArretTravailAdminComponent,
        TemplateEmailReportCreateAdminComponent,
        TemplateEmailReportListAdminComponent,
        TemplateEmailReportViewAdminComponent,
        TemplateEmailReportEditAdminComponent,
        TemplateEmailReportAdminComponent,
        TemplateSuiviCreateAdminComponent,
        TemplateSuiviListAdminComponent,
        TemplateSuiviViewAdminComponent,
        TemplateSuiviEditAdminComponent,
        TemplateSuiviAdminComponent,
        DepartementTechnicienCreateAdminComponent,
        DepartementTechnicienListAdminComponent,
        DepartementTechnicienViewAdminComponent,
        DepartementTechnicienEditAdminComponent,
        DepartementTechnicienAdminComponent,
        TemplateEmailClientInjoinableCreateAdminComponent,
        TemplateEmailClientInjoinableListAdminComponent,
        TemplateEmailClientInjoinableViewAdminComponent,
        TemplateEmailClientInjoinableEditAdminComponent,
        TemplateEmailClientInjoinableAdminComponent,
        RegionCreateAdminComponent,
        RegionListAdminComponent,
        RegionViewAdminComponent,
        RegionEditAdminComponent,
        RegionAdminComponent,
        OperatorCreateAdminComponent,
        OperatorListAdminComponent,
        OperatorViewAdminComponent,
        OperatorEditAdminComponent,
        OperatorAdminComponent,
        TemplateEmailCriCreateAdminComponent,
        TemplateEmailCriListAdminComponent,
        TemplateEmailCriViewAdminComponent,
        TemplateEmailCriEditAdminComponent,
        TemplateEmailCriAdminComponent,
        EntrepriseCreateAdminComponent,
        EntrepriseListAdminComponent,
        EntrepriseViewAdminComponent,
        EntrepriseEditAdminComponent,
        EntrepriseAdminComponent,
        OrdreKoscCreateAdminComponent,
        OrdreKoscListAdminComponent,
        OrdreKoscViewAdminComponent,
        OrdreKoscEditAdminComponent,
        OrdreKoscAdminComponent,
        OrdreKoscSuiviListAdminComponent,
        OrdreKoscSuiviViewAdminComponent,
        OrdreKoscSuiviEditAdminComponent,
        OrdreKoscSuiviAdminComponent,
        OrdreKoscSuiviHistoriqueListAdminComponent,
        OrdreKoscSuiviHistoriqueViewAdminComponent,
        OrdreKoscSuiviHistoriqueEditAdminComponent,
        OrdreKoscSuiviHistoriqueAdminComponent,
        OrdreKoscAffectationTechnicienListAdminComponent,
        OrdreKoscAffectationTechnicienViewAdminComponent,
        OrdreKoscAffectationTechnicienEditAdminComponent,
        OrdreKoscAffectationTechnicienAdminComponent,
        OrdreKoscPriseRdvListAdminComponent,
        OrdreKoscPriseRdvViewAdminComponent,
        OrdreKoscPriseRdvEditAdminComponent,
        OrdreKoscPriseRdvAdminComponent,
        DefaultTemplateConfigurationCreateAdminComponent,
        DefaultTemplateConfigurationListAdminComponent,
        DefaultTemplateConfigurationViewAdminComponent,
        DefaultTemplateConfigurationEditAdminComponent,
        DefaultTemplateConfigurationAdminComponent,
        StatisticKoscAdminComponent,

    ],
    imports: [
        CommonModule,
        ToastModule,
        ToolbarModule,
        TableModule,
        ConfirmDialogModule,
        DialogModule,
        PasswordModule,
        InputTextModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        SplitButtonModule,
        BrowserAnimationsModule,
        DropdownModule,
        TabViewModule,
        InputSwitchModule,
        InputTextareaModule,
        CalendarModule,
        PanelModule,
        MessageModule,
        MessagesModule,
        InputNumberModule,
        BadgeModule,
        MultiSelectModule,
        InputMaskModule,
        RippleModule,
        ProgressSpinnerModule,
        BlockUIModule,

    ],
    exports: [
        CauseKoOkCreateAdminComponent,
        CauseKoOkListAdminComponent,
        CauseKoOkViewAdminComponent,
        CauseKoOkEditAdminComponent,
        CauseKoOkAdminComponent,
        TemplateEmailFtlCreateAdminComponent,
        TemplateEmailFtlListAdminComponent,
        TemplateEmailFtlViewAdminComponent,
        TemplateEmailFtlEditAdminComponent,
        TemplateEmailFtlAdminComponent,
        EtatDemandeKoscCreateAdminComponent,
        EtatDemandeKoscListAdminComponent,
        EtatDemandeKoscViewAdminComponent,
        EtatDemandeKoscEditAdminComponent,
        EtatDemandeKoscAdminComponent,
        TemplateEmailMauvaisContactCreateAdminComponent,
        TemplateEmailMauvaisContactListAdminComponent,
        TemplateEmailMauvaisContactViewAdminComponent,
        TemplateEmailMauvaisContactEditAdminComponent,
        TemplateEmailMauvaisContactAdminComponent,
        ChercheurCreateAdminComponent,
        ChercheurListAdminComponent,
        ChercheurViewAdminComponent,
        ChercheurEditAdminComponent,
        ChercheurAdminComponent,
        TemplateEmailRefusCreateAdminComponent,
        TemplateEmailRefusListAdminComponent,
        TemplateEmailRefusViewAdminComponent,
        TemplateEmailRefusEditAdminComponent,
        TemplateEmailRefusAdminComponent,
        TechnicienCreateAdminComponent,
        TechnicienListAdminComponent,
        TechnicienViewAdminComponent,
        TechnicienEditAdminComponent,
        TechnicienAdminComponent,
        SourceReplanificationCreateAdminComponent,
        SourceReplanificationListAdminComponent,
        SourceReplanificationViewAdminComponent,
        SourceReplanificationEditAdminComponent,
        SourceReplanificationAdminComponent,
        TemplateEmailConfirmationClientCreateAdminComponent,
        TemplateEmailConfirmationClientListAdminComponent,
        TemplateEmailConfirmationClientViewAdminComponent,
        TemplateEmailConfirmationClientEditAdminComponent,
        TemplateEmailConfirmationClientAdminComponent,
        TemplateEmailReplanificationCreateAdminComponent,
        TemplateEmailReplanificationListAdminComponent,
        TemplateEmailReplanificationViewAdminComponent,
        TemplateEmailReplanificationEditAdminComponent,
        TemplateEmailReplanificationAdminComponent,
        TemplateEmailClotureCreateAdminComponent,
        TemplateEmailClotureListAdminComponent,
        TemplateEmailClotureViewAdminComponent,
        TemplateEmailClotureEditAdminComponent,
        TemplateEmailClotureAdminComponent,
        TemplateEmailClientInjoinableKoscCreateAdminComponent,
        TemplateEmailClientInjoinableKoscListAdminComponent,
        TemplateEmailClientInjoinableKoscViewAdminComponent,
        TemplateEmailClientInjoinableKoscEditAdminComponent,
        TemplateEmailClientInjoinableKoscAdminComponent,
        TemplateEmailPlanificationCreateAdminComponent,
        TemplateEmailPlanificationListAdminComponent,
        TemplateEmailPlanificationViewAdminComponent,
        TemplateEmailPlanificationEditAdminComponent,
        TemplateEmailPlanificationAdminComponent,
        ArretTravailCreateAdminComponent,
        ArretTravailListAdminComponent,
        ArretTravailViewAdminComponent,
        ArretTravailEditAdminComponent,
        ArretTravailAdminComponent,
        JourFerieCreateAdminComponent,
        JourFerieListAdminComponent,
        JourFerieViewAdminComponent,
        JourFerieEditAdminComponent,
        JourFerieAdminComponent,
        DepartementCreateAdminComponent,
        DepartementListAdminComponent,
        DepartementViewAdminComponent,
        DepartementEditAdminComponent,
        DepartementAdminComponent,
        RaisonArretTravailCreateAdminComponent,
        RaisonArretTravailListAdminComponent,
        RaisonArretTravailViewAdminComponent,
        RaisonArretTravailEditAdminComponent,
        RaisonArretTravailAdminComponent,
        TemplateEmailReportCreateAdminComponent,
        TemplateEmailReportListAdminComponent,
        TemplateEmailReportViewAdminComponent,
        TemplateEmailReportEditAdminComponent,
        TemplateEmailReportAdminComponent,
        TemplateSuiviCreateAdminComponent,
        TemplateSuiviListAdminComponent,
        TemplateSuiviViewAdminComponent,
        TemplateSuiviEditAdminComponent,
        TemplateSuiviAdminComponent,
        DepartementTechnicienCreateAdminComponent,
        DepartementTechnicienListAdminComponent,
        DepartementTechnicienViewAdminComponent,
        DepartementTechnicienEditAdminComponent,
        DepartementTechnicienAdminComponent,
        TemplateEmailClientInjoinableCreateAdminComponent,
        TemplateEmailClientInjoinableListAdminComponent,
        TemplateEmailClientInjoinableViewAdminComponent,
        TemplateEmailClientInjoinableEditAdminComponent,
        TemplateEmailClientInjoinableAdminComponent,
        RegionCreateAdminComponent,
        RegionListAdminComponent,
        RegionViewAdminComponent,
        RegionEditAdminComponent,
        RegionAdminComponent,
        OperatorCreateAdminComponent,
        OperatorListAdminComponent,
        OperatorViewAdminComponent,
        OperatorEditAdminComponent,
        OperatorAdminComponent,
        TemplateEmailCriCreateAdminComponent,
        TemplateEmailCriListAdminComponent,
        TemplateEmailCriViewAdminComponent,
        TemplateEmailCriEditAdminComponent,
        TemplateEmailCriAdminComponent,
        EntrepriseCreateAdminComponent,
        EntrepriseListAdminComponent,
        EntrepriseViewAdminComponent,
        EntrepriseEditAdminComponent,
        EntrepriseAdminComponent,
        OrdreKoscCreateAdminComponent,
        OrdreKoscListAdminComponent,
        OrdreKoscViewAdminComponent,
        OrdreKoscEditAdminComponent,
        OrdreKoscAdminComponent,
        OrdreKoscSuiviListAdminComponent,
        OrdreKoscSuiviViewAdminComponent,
        OrdreKoscSuiviEditAdminComponent,
        OrdreKoscSuiviAdminComponent,
        OrdreKoscSuiviHistoriqueListAdminComponent,
        OrdreKoscSuiviHistoriqueViewAdminComponent,
        OrdreKoscSuiviHistoriqueEditAdminComponent,
        OrdreKoscSuiviHistoriqueAdminComponent,
        OrdreKoscAffectationTechnicienListAdminComponent,
        OrdreKoscAffectationTechnicienViewAdminComponent,
        OrdreKoscAffectationTechnicienEditAdminComponent,
        OrdreKoscAffectationTechnicienAdminComponent,
        OrdreKoscPriseRdvListAdminComponent,
        OrdreKoscPriseRdvViewAdminComponent,
        OrdreKoscPriseRdvEditAdminComponent,
        OrdreKoscPriseRdvAdminComponent,
        DefaultTemplateConfigurationCreateAdminComponent,
        DefaultTemplateConfigurationListAdminComponent,
        DefaultTemplateConfigurationViewAdminComponent,
        DefaultTemplateConfigurationEditAdminComponent,
        DefaultTemplateConfigurationAdminComponent,

    ]
})
export class KoscAdminModule {
}
