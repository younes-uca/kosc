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

import {
    CauseKoOkCreateChercheurComponent
} from './cause-ko-ok-chercheur/create-chercheur/cause-ko-ok-create-chercheur.component';
import {
    CauseKoOkEditChercheurComponent
} from './cause-ko-ok-chercheur/edit-chercheur/cause-ko-ok-edit-chercheur.component';
import {
    CauseKoOkViewChercheurComponent
} from './cause-ko-ok-chercheur/view-chercheur/cause-ko-ok-view-chercheur.component';
import {
    CauseKoOkListChercheurComponent
} from './cause-ko-ok-chercheur/list-chercheur/cause-ko-ok-list-chercheur.component';
import {CauseKoOkChercheurComponent} from './cause-ko-ok-chercheur/cause-ko-ok-chercheur.component';
import {
    TemplateEmailFtlCreateChercheurComponent
} from './template-email-ftl-chercheur/create-chercheur/template-email-ftl-create-chercheur.component';
import {
    TemplateEmailFtlEditChercheurComponent
} from './template-email-ftl-chercheur/edit-chercheur/template-email-ftl-edit-chercheur.component';
import {
    TemplateEmailFtlViewChercheurComponent
} from './template-email-ftl-chercheur/view-chercheur/template-email-ftl-view-chercheur.component';
import {
    TemplateEmailFtlListChercheurComponent
} from './template-email-ftl-chercheur/list-chercheur/template-email-ftl-list-chercheur.component';
import {
    TemplateEmailFtlChercheurComponent
} from './template-email-ftl-chercheur/template-email-ftl-chercheur.component';
import {
    EtatDemandeKoscCreateChercheurComponent
} from './etat-demande-kosc-chercheur/create-chercheur/etat-demande-kosc-create-chercheur.component';
import {
    EtatDemandeKoscEditChercheurComponent
} from './etat-demande-kosc-chercheur/edit-chercheur/etat-demande-kosc-edit-chercheur.component';
import {
    EtatDemandeKoscViewChercheurComponent
} from './etat-demande-kosc-chercheur/view-chercheur/etat-demande-kosc-view-chercheur.component';
import {
    EtatDemandeKoscListChercheurComponent
} from './etat-demande-kosc-chercheur/list-chercheur/etat-demande-kosc-list-chercheur.component';
import {EtatDemandeKoscChercheurComponent} from './etat-demande-kosc-chercheur/etat-demande-kosc-chercheur.component';
import {
    TemplateEmailMauvaisContactCreateChercheurComponent
} from './template-email-mauvais-contact-chercheur/create-chercheur/template-email-mauvais-contact-create-chercheur.component';
import {
    TemplateEmailMauvaisContactEditChercheurComponent
} from './template-email-mauvais-contact-chercheur/edit-chercheur/template-email-mauvais-contact-edit-chercheur.component';
import {
    TemplateEmailMauvaisContactViewChercheurComponent
} from './template-email-mauvais-contact-chercheur/view-chercheur/template-email-mauvais-contact-view-chercheur.component';
import {
    TemplateEmailMauvaisContactListChercheurComponent
} from './template-email-mauvais-contact-chercheur/list-chercheur/template-email-mauvais-contact-list-chercheur.component';
import {
    TemplateEmailMauvaisContactChercheurComponent
} from './template-email-mauvais-contact-chercheur/template-email-mauvais-contact-chercheur.component';
import {
    ChercheurCreateChercheurComponent
} from './chercheur-chercheur/create-chercheur/chercheur-create-chercheur.component';
import {ChercheurEditChercheurComponent} from './chercheur-chercheur/edit-chercheur/chercheur-edit-chercheur.component';
import {ChercheurViewChercheurComponent} from './chercheur-chercheur/view-chercheur/chercheur-view-chercheur.component';
import {ChercheurListChercheurComponent} from './chercheur-chercheur/list-chercheur/chercheur-list-chercheur.component';
import {ChercheurChercheurComponent} from './chercheur-chercheur/chercheur-chercheur.component';
import {
    TemplateEmailRefusCreateChercheurComponent
} from './template-email-refus-chercheur/create-chercheur/template-email-refus-create-chercheur.component';
import {
    TemplateEmailRefusEditChercheurComponent
} from './template-email-refus-chercheur/edit-chercheur/template-email-refus-edit-chercheur.component';
import {
    TemplateEmailRefusViewChercheurComponent
} from './template-email-refus-chercheur/view-chercheur/template-email-refus-view-chercheur.component';
import {
    TemplateEmailRefusListChercheurComponent
} from './template-email-refus-chercheur/list-chercheur/template-email-refus-list-chercheur.component';
import {
    TemplateEmailRefusChercheurComponent
} from './template-email-refus-chercheur/template-email-refus-chercheur.component';
import {
    TechnicienCreateChercheurComponent
} from './technicien-chercheur/create-chercheur/technicien-create-chercheur.component';
import {
    TechnicienEditChercheurComponent
} from './technicien-chercheur/edit-chercheur/technicien-edit-chercheur.component';
import {
    TechnicienViewChercheurComponent
} from './technicien-chercheur/view-chercheur/technicien-view-chercheur.component';
import {
    TechnicienListChercheurComponent
} from './technicien-chercheur/list-chercheur/technicien-list-chercheur.component';
import {TechnicienChercheurComponent} from './technicien-chercheur/technicien-chercheur.component';
import {
    SourceReplanificationCreateChercheurComponent
} from './source-replanification-chercheur/create-chercheur/source-replanification-create-chercheur.component';
import {
    SourceReplanificationEditChercheurComponent
} from './source-replanification-chercheur/edit-chercheur/source-replanification-edit-chercheur.component';
import {
    SourceReplanificationViewChercheurComponent
} from './source-replanification-chercheur/view-chercheur/source-replanification-view-chercheur.component';
import {
    SourceReplanificationListChercheurComponent
} from './source-replanification-chercheur/list-chercheur/source-replanification-list-chercheur.component';
import {
    SourceReplanificationChercheurComponent
} from './source-replanification-chercheur/source-replanification-chercheur.component';
import {
    TemplateEmailConfirmationClientCreateChercheurComponent
} from './template-email-confirmation-client-chercheur/create-chercheur/template-email-confirmation-client-create-chercheur.component';
import {
    TemplateEmailConfirmationClientEditChercheurComponent
} from './template-email-confirmation-client-chercheur/edit-chercheur/template-email-confirmation-client-edit-chercheur.component';
import {
    TemplateEmailConfirmationClientViewChercheurComponent
} from './template-email-confirmation-client-chercheur/view-chercheur/template-email-confirmation-client-view-chercheur.component';
import {
    TemplateEmailConfirmationClientListChercheurComponent
} from './template-email-confirmation-client-chercheur/list-chercheur/template-email-confirmation-client-list-chercheur.component';
import {
    TemplateEmailConfirmationClientChercheurComponent
} from './template-email-confirmation-client-chercheur/template-email-confirmation-client-chercheur.component';
import {
    TemplateEmailReplanificationCreateChercheurComponent
} from './template-email-replanification-chercheur/create-chercheur/template-email-replanification-create-chercheur.component';
import {
    TemplateEmailReplanificationEditChercheurComponent
} from './template-email-replanification-chercheur/edit-chercheur/template-email-replanification-edit-chercheur.component';
import {
    TemplateEmailReplanificationViewChercheurComponent
} from './template-email-replanification-chercheur/view-chercheur/template-email-replanification-view-chercheur.component';
import {
    TemplateEmailReplanificationListChercheurComponent
} from './template-email-replanification-chercheur/list-chercheur/template-email-replanification-list-chercheur.component';
import {
    TemplateEmailReplanificationChercheurComponent
} from './template-email-replanification-chercheur/template-email-replanification-chercheur.component';
import {
    TemplateEmailClotureCreateChercheurComponent
} from './template-email-cloture-chercheur/create-chercheur/template-email-cloture-create-chercheur.component';
import {
    TemplateEmailClotureEditChercheurComponent
} from './template-email-cloture-chercheur/edit-chercheur/template-email-cloture-edit-chercheur.component';
import {
    TemplateEmailClotureViewChercheurComponent
} from './template-email-cloture-chercheur/view-chercheur/template-email-cloture-view-chercheur.component';
import {
    TemplateEmailClotureListChercheurComponent
} from './template-email-cloture-chercheur/list-chercheur/template-email-cloture-list-chercheur.component';
import {
    TemplateEmailClotureChercheurComponent
} from './template-email-cloture-chercheur/template-email-cloture-chercheur.component';
import {
    TemplateEmailClientInjoinableKoscCreateChercheurComponent
} from './template-email-client-injoinable-kosc-chercheur/create-chercheur/template-email-client-injoinable-kosc-create-chercheur.component';
import {
    TemplateEmailClientInjoinableKoscEditChercheurComponent
} from './template-email-client-injoinable-kosc-chercheur/edit-chercheur/template-email-client-injoinable-kosc-edit-chercheur.component';
import {
    TemplateEmailClientInjoinableKoscViewChercheurComponent
} from './template-email-client-injoinable-kosc-chercheur/view-chercheur/template-email-client-injoinable-kosc-view-chercheur.component';
import {
    TemplateEmailClientInjoinableKoscListChercheurComponent
} from './template-email-client-injoinable-kosc-chercheur/list-chercheur/template-email-client-injoinable-kosc-list-chercheur.component';
import {
    TemplateEmailClientInjoinableKoscChercheurComponent
} from './template-email-client-injoinable-kosc-chercheur/template-email-client-injoinable-kosc-chercheur.component';
import {
    TemplateEmailPlanificationCreateChercheurComponent
} from './template-email-planification-chercheur/create-chercheur/template-email-planification-create-chercheur.component';
import {
    TemplateEmailPlanificationEditChercheurComponent
} from './template-email-planification-chercheur/edit-chercheur/template-email-planification-edit-chercheur.component';
import {
    TemplateEmailPlanificationViewChercheurComponent
} from './template-email-planification-chercheur/view-chercheur/template-email-planification-view-chercheur.component';
import {
    TemplateEmailPlanificationListChercheurComponent
} from './template-email-planification-chercheur/list-chercheur/template-email-planification-list-chercheur.component';
import {
    TemplateEmailPlanificationChercheurComponent
} from './template-email-planification-chercheur/template-email-planification-chercheur.component';
import {
    ArretTravailCreateChercheurComponent
} from './arret-travail-chercheur/create-chercheur/arret-travail-create-chercheur.component';
import {
    ArretTravailEditChercheurComponent
} from './arret-travail-chercheur/edit-chercheur/arret-travail-edit-chercheur.component';
import {
    ArretTravailViewChercheurComponent
} from './arret-travail-chercheur/view-chercheur/arret-travail-view-chercheur.component';
import {
    ArretTravailListChercheurComponent
} from './arret-travail-chercheur/list-chercheur/arret-travail-list-chercheur.component';
import {ArretTravailChercheurComponent} from './arret-travail-chercheur/arret-travail-chercheur.component';
import {
    DepartementCreateChercheurComponent
} from './departement-chercheur/create-chercheur/departement-create-chercheur.component';
import {
    DepartementEditChercheurComponent
} from './departement-chercheur/edit-chercheur/departement-edit-chercheur.component';
import {
    DepartementViewChercheurComponent
} from './departement-chercheur/view-chercheur/departement-view-chercheur.component';
import {
    DepartementListChercheurComponent
} from './departement-chercheur/list-chercheur/departement-list-chercheur.component';
import {DepartementChercheurComponent} from './departement-chercheur/departement-chercheur.component';
import {
    RaisonArretTravailCreateChercheurComponent
} from './raison-arret-travail-chercheur/create-chercheur/raison-arret-travail-create-chercheur.component';
import {
    RaisonArretTravailEditChercheurComponent
} from './raison-arret-travail-chercheur/edit-chercheur/raison-arret-travail-edit-chercheur.component';
import {
    RaisonArretTravailViewChercheurComponent
} from './raison-arret-travail-chercheur/view-chercheur/raison-arret-travail-view-chercheur.component';
import {
    RaisonArretTravailListChercheurComponent
} from './raison-arret-travail-chercheur/list-chercheur/raison-arret-travail-list-chercheur.component';
import {
    RaisonArretTravailChercheurComponent
} from './raison-arret-travail-chercheur/raison-arret-travail-chercheur.component';
import {
    TemplateSuiviCreateChercheurComponent
} from './template-suivi-chercheur/create-chercheur/template-suivi-create-chercheur.component';
import {
    TemplateSuiviEditChercheurComponent
} from './template-suivi-chercheur/edit-chercheur/template-suivi-edit-chercheur.component';
import {
    TemplateSuiviViewChercheurComponent
} from './template-suivi-chercheur/view-chercheur/template-suivi-view-chercheur.component';
import {
    TemplateSuiviListChercheurComponent
} from './template-suivi-chercheur/list-chercheur/template-suivi-list-chercheur.component';
import {TemplateSuiviChercheurComponent} from './template-suivi-chercheur/template-suivi-chercheur.component';
import {
    DepartementTechnicienCreateChercheurComponent
} from './departement-technicien-chercheur/create-chercheur/departement-technicien-create-chercheur.component';
import {
    DepartementTechnicienEditChercheurComponent
} from './departement-technicien-chercheur/edit-chercheur/departement-technicien-edit-chercheur.component';
import {
    DepartementTechnicienViewChercheurComponent
} from './departement-technicien-chercheur/view-chercheur/departement-technicien-view-chercheur.component';
import {
    DepartementTechnicienListChercheurComponent
} from './departement-technicien-chercheur/list-chercheur/departement-technicien-list-chercheur.component';
import {
    DepartementTechnicienChercheurComponent
} from './departement-technicien-chercheur/departement-technicien-chercheur.component';
import {
    TemplateEmailClientInjoinableCreateChercheurComponent
} from './template-email-client-injoinable-chercheur/create-chercheur/template-email-client-injoinable-create-chercheur.component';
import {
    TemplateEmailClientInjoinableEditChercheurComponent
} from './template-email-client-injoinable-chercheur/edit-chercheur/template-email-client-injoinable-edit-chercheur.component';
import {
    TemplateEmailClientInjoinableViewChercheurComponent
} from './template-email-client-injoinable-chercheur/view-chercheur/template-email-client-injoinable-view-chercheur.component';
import {
    TemplateEmailClientInjoinableListChercheurComponent
} from './template-email-client-injoinable-chercheur/list-chercheur/template-email-client-injoinable-list-chercheur.component';
import {
    TemplateEmailClientInjoinableChercheurComponent
} from './template-email-client-injoinable-chercheur/template-email-client-injoinable-chercheur.component';
import {RegionCreateChercheurComponent} from './region-chercheur/create-chercheur/region-create-chercheur.component';
import {RegionEditChercheurComponent} from './region-chercheur/edit-chercheur/region-edit-chercheur.component';
import {RegionViewChercheurComponent} from './region-chercheur/view-chercheur/region-view-chercheur.component';
import {RegionListChercheurComponent} from './region-chercheur/list-chercheur/region-list-chercheur.component';
import {RegionChercheurComponent} from './region-chercheur/region-chercheur.component';
import {
    OperatorCreateChercheurComponent
} from './operator-chercheur/create-chercheur/operator-create-chercheur.component';
import {OperatorEditChercheurComponent} from './operator-chercheur/edit-chercheur/operator-edit-chercheur.component';
import {OperatorViewChercheurComponent} from './operator-chercheur/view-chercheur/operator-view-chercheur.component';
import {OperatorListChercheurComponent} from './operator-chercheur/list-chercheur/operator-list-chercheur.component';
import {OperatorChercheurComponent} from './operator-chercheur/operator-chercheur.component';
import {
    TemplateEmailCriCreateChercheurComponent
} from './template-email-cri-chercheur/create-chercheur/template-email-cri-create-chercheur.component';
import {
    TemplateEmailCriEditChercheurComponent
} from './template-email-cri-chercheur/edit-chercheur/template-email-cri-edit-chercheur.component';
import {
    TemplateEmailCriViewChercheurComponent
} from './template-email-cri-chercheur/view-chercheur/template-email-cri-view-chercheur.component';
import {
    TemplateEmailCriListChercheurComponent
} from './template-email-cri-chercheur/list-chercheur/template-email-cri-list-chercheur.component';
import {
    TemplateEmailCriChercheurComponent
} from './template-email-cri-chercheur/template-email-cri-chercheur.component';
import {
    EntrepriseCreateChercheurComponent
} from './entreprise-chercheur/create-chercheur/entreprise-create-chercheur.component';
import {
    EntrepriseEditChercheurComponent
} from './entreprise-chercheur/edit-chercheur/entreprise-edit-chercheur.component';
import {
    EntrepriseViewChercheurComponent
} from './entreprise-chercheur/view-chercheur/entreprise-view-chercheur.component';
import {
    EntrepriseListChercheurComponent
} from './entreprise-chercheur/list-chercheur/entreprise-list-chercheur.component';
import {EntrepriseChercheurComponent} from './entreprise-chercheur/entreprise-chercheur.component';
import {
    OrdreKoscCreateChercheurComponent
} from './ordre-kosc-chercheur/create-chercheur/ordre-kosc-create-chercheur.component';
import {
    OrdreKoscEditChercheurComponent
} from './ordre-kosc-chercheur/edit-chercheur/ordre-kosc-edit-chercheur.component';
import {
    OrdreKoscViewChercheurComponent
} from './ordre-kosc-chercheur/view-chercheur/ordre-kosc-view-chercheur.component';
import {
    OrdreKoscListChercheurComponent
} from './ordre-kosc-chercheur/list-chercheur/ordre-kosc-list-chercheur.component';
import {OrdreKoscChercheurComponent} from './ordre-kosc-chercheur/ordre-kosc-chercheur.component';

import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';

import {
    DefaultTemplateConfigurationCreateChercheurComponent
} from "../../default-template-configuration-chercheur/create-chercheur/default-template-configuration-create-chercheur.component";
import {
    DefaultTemplateConfigurationListChercheurComponent
} from "../../default-template-configuration-chercheur/list-chercheur/default-template-configuration-list-chercheur.component";
import {
    DefaultTemplateConfigurationViewChercheurComponent
} from "../../default-template-configuration-chercheur/view-chercheur/default-template-configuration-view-chercheur.component";
import {
    DefaultTemplateConfigurationEditChercheurComponent
} from "../../default-template-configuration-chercheur/edit-chercheur/default-template-configuration-edit-chercheur.component";
import {
    DefaultTemplateConfigurationChercheurComponent
} from "../../default-template-configuration-chercheur/default-template-configuration-chercheur.component";

import {RippleModule} from "primeng/ripple";


@NgModule({
    declarations: [
        CauseKoOkCreateChercheurComponent,
        CauseKoOkListChercheurComponent,
        CauseKoOkViewChercheurComponent,
        CauseKoOkEditChercheurComponent,
        CauseKoOkChercheurComponent,
        TemplateEmailFtlCreateChercheurComponent,
        TemplateEmailFtlListChercheurComponent,
        TemplateEmailFtlViewChercheurComponent,
        TemplateEmailFtlEditChercheurComponent,
        TemplateEmailFtlChercheurComponent,
        EtatDemandeKoscCreateChercheurComponent,
        EtatDemandeKoscListChercheurComponent,
        EtatDemandeKoscViewChercheurComponent,
        EtatDemandeKoscEditChercheurComponent,
        EtatDemandeKoscChercheurComponent,
        TemplateEmailMauvaisContactCreateChercheurComponent,
        TemplateEmailMauvaisContactListChercheurComponent,
        TemplateEmailMauvaisContactViewChercheurComponent,
        TemplateEmailMauvaisContactEditChercheurComponent,
        TemplateEmailMauvaisContactChercheurComponent,
        ChercheurCreateChercheurComponent,
        ChercheurListChercheurComponent,
        ChercheurViewChercheurComponent,
        ChercheurEditChercheurComponent,
        ChercheurChercheurComponent,
        TemplateEmailRefusCreateChercheurComponent,
        TemplateEmailRefusListChercheurComponent,
        TemplateEmailRefusViewChercheurComponent,
        TemplateEmailRefusEditChercheurComponent,
        TemplateEmailRefusChercheurComponent,
        TechnicienCreateChercheurComponent,
        TechnicienListChercheurComponent,
        TechnicienViewChercheurComponent,
        TechnicienEditChercheurComponent,
        TechnicienChercheurComponent,
        SourceReplanificationCreateChercheurComponent,
        SourceReplanificationListChercheurComponent,
        SourceReplanificationViewChercheurComponent,
        SourceReplanificationEditChercheurComponent,
        SourceReplanificationChercheurComponent,
        TemplateEmailConfirmationClientCreateChercheurComponent,
        TemplateEmailConfirmationClientListChercheurComponent,
        TemplateEmailConfirmationClientViewChercheurComponent,
        TemplateEmailConfirmationClientEditChercheurComponent,
        TemplateEmailConfirmationClientChercheurComponent,
        TemplateEmailReplanificationCreateChercheurComponent,
        TemplateEmailReplanificationListChercheurComponent,
        TemplateEmailReplanificationViewChercheurComponent,
        TemplateEmailReplanificationEditChercheurComponent,
        TemplateEmailReplanificationChercheurComponent,
        TemplateEmailClotureCreateChercheurComponent,
        TemplateEmailClotureListChercheurComponent,
        TemplateEmailClotureViewChercheurComponent,
        TemplateEmailClotureEditChercheurComponent,
        TemplateEmailClotureChercheurComponent,
        TemplateEmailClientInjoinableKoscCreateChercheurComponent,
        TemplateEmailClientInjoinableKoscListChercheurComponent,
        TemplateEmailClientInjoinableKoscViewChercheurComponent,
        TemplateEmailClientInjoinableKoscEditChercheurComponent,
        TemplateEmailClientInjoinableKoscChercheurComponent,
        TemplateEmailPlanificationCreateChercheurComponent,
        TemplateEmailPlanificationListChercheurComponent,
        TemplateEmailPlanificationViewChercheurComponent,
        TemplateEmailPlanificationEditChercheurComponent,
        TemplateEmailPlanificationChercheurComponent,
        ArretTravailCreateChercheurComponent,
        ArretTravailListChercheurComponent,
        ArretTravailViewChercheurComponent,
        ArretTravailEditChercheurComponent,
        ArretTravailChercheurComponent,
        DepartementCreateChercheurComponent,
        DepartementListChercheurComponent,
        DepartementViewChercheurComponent,
        DepartementEditChercheurComponent,
        DepartementChercheurComponent,
        RaisonArretTravailCreateChercheurComponent,
        RaisonArretTravailListChercheurComponent,
        RaisonArretTravailViewChercheurComponent,
        RaisonArretTravailEditChercheurComponent,
        RaisonArretTravailChercheurComponent,
        TemplateSuiviCreateChercheurComponent,
        TemplateSuiviListChercheurComponent,
        TemplateSuiviViewChercheurComponent,
        TemplateSuiviEditChercheurComponent,
        TemplateSuiviChercheurComponent,
        DepartementTechnicienCreateChercheurComponent,
        DepartementTechnicienListChercheurComponent,
        DepartementTechnicienViewChercheurComponent,
        DepartementTechnicienEditChercheurComponent,
        DepartementTechnicienChercheurComponent,
        TemplateEmailClientInjoinableCreateChercheurComponent,
        TemplateEmailClientInjoinableListChercheurComponent,
        TemplateEmailClientInjoinableViewChercheurComponent,
        TemplateEmailClientInjoinableEditChercheurComponent,
        TemplateEmailClientInjoinableChercheurComponent,
        RegionCreateChercheurComponent,
        RegionListChercheurComponent,
        RegionViewChercheurComponent,
        RegionEditChercheurComponent,
        RegionChercheurComponent,
        OperatorCreateChercheurComponent,
        OperatorListChercheurComponent,
        OperatorViewChercheurComponent,
        OperatorEditChercheurComponent,
        OperatorChercheurComponent,
        TemplateEmailCriCreateChercheurComponent,
        TemplateEmailCriListChercheurComponent,
        TemplateEmailCriViewChercheurComponent,
        TemplateEmailCriEditChercheurComponent,
        TemplateEmailCriChercheurComponent,
        EntrepriseCreateChercheurComponent,
        EntrepriseListChercheurComponent,
        EntrepriseViewChercheurComponent,
        EntrepriseEditChercheurComponent,
        EntrepriseChercheurComponent,
        OrdreKoscCreateChercheurComponent,
        OrdreKoscListChercheurComponent,
        OrdreKoscViewChercheurComponent,
        OrdreKoscEditChercheurComponent,
        OrdreKoscChercheurComponent,
        DefaultTemplateConfigurationCreateChercheurComponent,
        DefaultTemplateConfigurationListChercheurComponent,
        DefaultTemplateConfigurationViewChercheurComponent,
        DefaultTemplateConfigurationEditChercheurComponent,
        DefaultTemplateConfigurationChercheurComponent,
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
        RippleModule,
    ],
    exports: [
        CauseKoOkCreateChercheurComponent,
        CauseKoOkListChercheurComponent,
        CauseKoOkViewChercheurComponent,
        CauseKoOkEditChercheurComponent,
        CauseKoOkChercheurComponent,
        TemplateEmailFtlCreateChercheurComponent,
        TemplateEmailFtlListChercheurComponent,
        TemplateEmailFtlViewChercheurComponent,
        TemplateEmailFtlEditChercheurComponent,
        TemplateEmailFtlChercheurComponent,
        EtatDemandeKoscCreateChercheurComponent,
        EtatDemandeKoscListChercheurComponent,
        EtatDemandeKoscViewChercheurComponent,
        EtatDemandeKoscEditChercheurComponent,
        EtatDemandeKoscChercheurComponent,
        TemplateEmailMauvaisContactCreateChercheurComponent,
        TemplateEmailMauvaisContactListChercheurComponent,
        TemplateEmailMauvaisContactViewChercheurComponent,
        TemplateEmailMauvaisContactEditChercheurComponent,
        TemplateEmailMauvaisContactChercheurComponent,
        ChercheurCreateChercheurComponent,
        ChercheurListChercheurComponent,
        ChercheurViewChercheurComponent,
        ChercheurEditChercheurComponent,
        ChercheurChercheurComponent,
        TemplateEmailRefusCreateChercheurComponent,
        TemplateEmailRefusListChercheurComponent,
        TemplateEmailRefusViewChercheurComponent,
        TemplateEmailRefusEditChercheurComponent,
        TemplateEmailRefusChercheurComponent,
        TechnicienCreateChercheurComponent,
        TechnicienListChercheurComponent,
        TechnicienViewChercheurComponent,
        TechnicienEditChercheurComponent,
        TechnicienChercheurComponent,
        SourceReplanificationCreateChercheurComponent,
        SourceReplanificationListChercheurComponent,
        SourceReplanificationViewChercheurComponent,
        SourceReplanificationEditChercheurComponent,
        SourceReplanificationChercheurComponent,
        TemplateEmailConfirmationClientCreateChercheurComponent,
        TemplateEmailConfirmationClientListChercheurComponent,
        TemplateEmailConfirmationClientViewChercheurComponent,
        TemplateEmailConfirmationClientEditChercheurComponent,
        TemplateEmailConfirmationClientChercheurComponent,
        TemplateEmailReplanificationCreateChercheurComponent,
        TemplateEmailReplanificationListChercheurComponent,
        TemplateEmailReplanificationViewChercheurComponent,
        TemplateEmailReplanificationEditChercheurComponent,
        TemplateEmailReplanificationChercheurComponent,
        TemplateEmailClotureCreateChercheurComponent,
        TemplateEmailClotureListChercheurComponent,
        TemplateEmailClotureViewChercheurComponent,
        TemplateEmailClotureEditChercheurComponent,
        TemplateEmailClotureChercheurComponent,
        TemplateEmailClientInjoinableKoscCreateChercheurComponent,
        TemplateEmailClientInjoinableKoscListChercheurComponent,
        TemplateEmailClientInjoinableKoscViewChercheurComponent,
        TemplateEmailClientInjoinableKoscEditChercheurComponent,
        TemplateEmailClientInjoinableKoscChercheurComponent,
        TemplateEmailPlanificationCreateChercheurComponent,
        TemplateEmailPlanificationListChercheurComponent,
        TemplateEmailPlanificationViewChercheurComponent,
        TemplateEmailPlanificationEditChercheurComponent,
        TemplateEmailPlanificationChercheurComponent,
        ArretTravailCreateChercheurComponent,
        ArretTravailListChercheurComponent,
        ArretTravailViewChercheurComponent,
        ArretTravailEditChercheurComponent,
        ArretTravailChercheurComponent,
        DepartementCreateChercheurComponent,
        DepartementListChercheurComponent,
        DepartementViewChercheurComponent,
        DepartementEditChercheurComponent,
        DepartementChercheurComponent,
        RaisonArretTravailCreateChercheurComponent,
        RaisonArretTravailListChercheurComponent,
        RaisonArretTravailViewChercheurComponent,
        RaisonArretTravailEditChercheurComponent,
        RaisonArretTravailChercheurComponent,

        TemplateSuiviCreateChercheurComponent,
        TemplateSuiviListChercheurComponent,
        TemplateSuiviViewChercheurComponent,
        TemplateSuiviEditChercheurComponent,
        TemplateSuiviChercheurComponent,
        DepartementTechnicienCreateChercheurComponent,
        DepartementTechnicienListChercheurComponent,
        DepartementTechnicienViewChercheurComponent,
        DepartementTechnicienEditChercheurComponent,
        DepartementTechnicienChercheurComponent,
        TemplateEmailClientInjoinableCreateChercheurComponent,
        TemplateEmailClientInjoinableListChercheurComponent,
        TemplateEmailClientInjoinableViewChercheurComponent,
        TemplateEmailClientInjoinableEditChercheurComponent,
        TemplateEmailClientInjoinableChercheurComponent,
        RegionCreateChercheurComponent,
        RegionListChercheurComponent,
        RegionViewChercheurComponent,
        RegionEditChercheurComponent,
        RegionChercheurComponent,
        OperatorCreateChercheurComponent,
        OperatorListChercheurComponent,
        OperatorViewChercheurComponent,
        OperatorEditChercheurComponent,
        OperatorChercheurComponent,
        TemplateEmailCriCreateChercheurComponent,
        TemplateEmailCriListChercheurComponent,
        TemplateEmailCriViewChercheurComponent,
        TemplateEmailCriEditChercheurComponent,
        TemplateEmailCriChercheurComponent,
        EntrepriseCreateChercheurComponent,
        EntrepriseListChercheurComponent,
        EntrepriseViewChercheurComponent,
        EntrepriseEditChercheurComponent,
        EntrepriseChercheurComponent,
        OrdreKoscCreateChercheurComponent,
        OrdreKoscListChercheurComponent,
        OrdreKoscViewChercheurComponent,
        OrdreKoscEditChercheurComponent,
        OrdreKoscChercheurComponent,
        DefaultTemplateConfigurationCreateChercheurComponent,
        DefaultTemplateConfigurationListChercheurComponent,
        DefaultTemplateConfigurationViewChercheurComponent,
        DefaultTemplateConfigurationEditChercheurComponent,
        DefaultTemplateConfigurationChercheurComponent,
    ]
})
export class KoscChercheurModule {
}
