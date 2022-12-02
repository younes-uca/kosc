// const root = environment.rootAppUrl;

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from 'src/app/controller/guards/auth.guard';


import {CauseKoOkAdminComponent} from './cause-ko-ok-admin/cause-ko-ok-admin.component';


import {TemplateEmailFtlAdminComponent} from './template-email-ftl-admin/template-email-ftl-admin.component';


import {EtatDemandeKoscAdminComponent} from './etat-demande-kosc-admin/etat-demande-kosc-admin.component';


import {
    TemplateEmailMauvaisContactAdminComponent
} from './template-email-mauvais-contact-admin/template-email-mauvais-contact-admin.component';


import {ChercheurAdminComponent} from './chercheur-admin/chercheur-admin.component';


import {TemplateEmailRefusAdminComponent} from './template-email-refus-admin/template-email-refus-admin.component';


import {TechnicienAdminComponent} from './technicien-admin/technicien-admin.component';


import {
    SourceReplanificationAdminComponent
} from './source-replanification-admin/source-replanification-admin.component';


import {
    TemplateEmailConfirmationClientAdminComponent
} from './template-email-confirmation-client-admin/template-email-confirmation-client-admin.component';


import {
    TemplateEmailReplanificationAdminComponent
} from './template-email-replanification-admin/template-email-replanification-admin.component';


import {
    TemplateEmailClotureAdminComponent
} from './template-email-cloture-admin/template-email-cloture-admin.component';


import {
    TemplateEmailClientInjoinableKoscAdminComponent
} from './template-email-client-injoinable-kosc-admin/template-email-client-injoinable-kosc-admin.component';


import {
    TemplateEmailPlanificationAdminComponent
} from './template-email-planification-admin/template-email-planification-admin.component';


import {ArretTravailAdminComponent} from './arret-travail-admin/arret-travail-admin.component';


import {DepartementAdminComponent} from './departement-admin/departement-admin.component';


import {RaisonArretTravailAdminComponent} from './raison-arret-travail-admin/raison-arret-travail-admin.component';


import {TemplateEmailReportAdminComponent} from './template-email-report-admin/template-email-report-admin.component';


import {TemplateSuiviAdminComponent} from './template-suivi-admin/template-suivi-admin.component';


import {
    DepartementTechnicienAdminComponent
} from './departement-technicien-admin/departement-technicien-admin.component';


import {
    TemplateEmailClientInjoinableAdminComponent
} from './template-email-client-injoinable-admin/template-email-client-injoinable-admin.component';


import {RegionAdminComponent} from './region-admin/region-admin.component';


import {OperatorAdminComponent} from './operator-admin/operator-admin.component';


import {TemplateEmailCriAdminComponent} from './template-email-cri-admin/template-email-cri-admin.component';


import {EntrepriseAdminComponent} from './entreprise-admin/entreprise-admin.component';


import {OrdreKoscAdminComponent} from './ordre-kosc-admin/ordre-kosc-admin.component';
import {OrdreKoscSuiviAdminComponent} from "./ordre-kosc-suivi-admin/ordre-kosc-suivi-admin.component";
import {
    OrdreKoscSuiviHistoriqueAdminComponent
} from "./ordre-kosc-suivi-historique-admin/ordre-kosc-suivi-historique-admin.component";
import {
    OrdreKoscAffectationTechnicienAdminComponent
} from "./ordre-kosc-affectation-technicien-admin/ordre-kosc-affectation-technicien-admin.component";
import {OrdreKoscPriseRdvAdminComponent} from "./ordre-kosc-prise-rdv-admin/ordre-kosc-prise-rdv-admin.component";
import {
    DefaultTemplateConfigurationAdminComponent
} from "./default-template-configuration-admin/default-template-configuration-admin.component";
import {JourFerieAdminComponent} from "./jour-ferie-admin/jour-ferie-admin.component";
import {OrdreKoscSuiviCddAdminComponent} from "./ordre-kosc-suivi-cdd-admin/ordre-kosc-suivi-cdd-admin.component";
import {
    TemplateEmailReportDemandeClientClientJoignableListAdminComponent
} from "./template-email-report-demande-client-client-joignable-admin/list-admin/template-email-report-demande-client-client-joignable-list-admin.component";
import {
    TemplateEmailReportDemandeManeoClientJoignableRefusListAdminComponent
} from "./template-email-report-demande-maneo-client-joignable-refus-admin/list-admin/template-email-report-demande-maneo-client-joignable-refus-list-admin.component";
import {
    TemplateEmailReportDemandeClientClientInjoignableListAdminComponent
} from "./template-email-report-demande-client-client-injoignable-admin/list-admin/template-email-report-demande-client-client-injoignable-list-admin.component";
import {
    TemplateEmailReportDemandeManeoClientInjoignableListAdminComponent
} from "./template-email-report-demande-maneo-client-injoignable-admin/list-admin/template-email-report-demande-maneo-client-injoignable-list-admin.component";
import {
    TemplateEmailReportDemandeManeoClientJoignableAccepteListAdminComponent
} from "./template-email-report-demande-maneo-client-joignable-accepte-admin/list-admin/template-email-report-demande-maneo-client-joignable-accepte-list-admin.component";
import {UserListComponent} from "./user-list/user-list.component";


@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'cause-ko-ok',
                            children: [
                                {
                                    path: 'list',
                                    component: CauseKoOkAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'template-email-ftl',
                            children: [
                                {
                                    path: 'list',
                                    component: TemplateEmailFtlAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-demande-kosc',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatDemandeKoscAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'template-email-mauvais-contact',
                            children: [
                                {
                                    path: 'list',
                                    component: TemplateEmailMauvaisContactAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'chercheur',
                            children: [
                                {
                                    path: 'list',
                                    component: ChercheurAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'template-email-refus',
                            children: [
                                {
                                    path: 'list',
                                    component: TemplateEmailRefusAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'technicien',
                            children: [
                                {
                                    path: 'list',
                                    component: TechnicienAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'source-replanification',
                            children: [
                                {
                                    path: 'list',
                                    component: SourceReplanificationAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'template-email-confirmation-client',
                            children: [
                                {
                                    path: 'list',
                                    component: TemplateEmailConfirmationClientAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'template-email-replanification',
                            children: [
                                {
                                    path: 'list',
                                    component: TemplateEmailReplanificationAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'template-email-cloture',
                            children: [
                                {
                                    path: 'list',
                                    component: TemplateEmailClotureAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'template-email-client-injoinable-kosc',
                            children: [
                                {
                                    path: 'list',
                                    component: TemplateEmailClientInjoinableKoscAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'template-email-planification',
                            children: [
                                {
                                    path: 'list',
                                    component: TemplateEmailPlanificationAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },


                        {

                            path: 'default-template-configuration',
                            children: [
                                {
                                    path: 'list',
                                    component: DefaultTemplateConfigurationAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'arret-travail',
                            children: [
                                {
                                    path: 'list',
                                    component: ArretTravailAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'jour-ferie',
                            children: [
                                {
                                    path: 'list',
                                    component: JourFerieAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'departement',
                            children: [
                                {
                                    path: 'list',
                                    component: DepartementAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'raison-arret-travail',
                            children: [
                                {
                                    path: 'list',
                                    component: RaisonArretTravailAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'template-email-report',
                            children: [
                                {
                                    path: 'list',
                                    component: TemplateEmailReportAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'template-suivi',
                            children: [
                                {
                                    path: 'list',
                                    component: TemplateSuiviAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'departement-technicien',
                            children: [
                                {
                                    path: 'list',
                                    component: DepartementTechnicienAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'template-email-client-injoinable',
                            children: [
                                {
                                    path: 'list',
                                    component: TemplateEmailClientInjoinableAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'region',
                            children: [
                                {
                                    path: 'list',
                                    component: RegionAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'operator',
                            children: [
                                {
                                    path: 'list',
                                    component: OperatorAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'template-email-cri',
                            children: [
                                {
                                    path: 'list',
                                    component: TemplateEmailCriAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'entreprise',
                            children: [
                                {
                                    path: 'list',
                                    component: EntrepriseAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'ordre-kosc',
                            children: [
                                {
                                    path: 'list',
                                    component: OrdreKoscAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'ordre-kosc-suivi',
                            children: [
                                {
                                    path: 'list',
                                    component: OrdreKoscSuiviAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'ordre-kosc-suivi-historique',
                            children: [
                                {
                                    path: 'list',
                                    component: OrdreKoscSuiviHistoriqueAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'ordre-kosc-suivi-cdd',
                            children: [
                                {
                                    path: 'list',
                                    component: OrdreKoscSuiviCddAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        }
                        ,   {

                            path: 'ordre-kosc-gestion-utilisateur',
                            children: [
                                {
                                    path: 'Gestion_users',
                                    component: UserListComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        }
                        ,
                        {

                            path: 'ordre-kosc-affectation-technicien',
                            children: [
                                {
                                    path: 'list',
                                    component: OrdreKoscAffectationTechnicienAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'ordre-kosc-prise-rdv',
                            children: [
                                {
                                    path: 'list',
                                    component: OrdreKoscPriseRdvAdminComponent,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'template-email-report-demande-client-client-joignable',
                            children: [
                                {
                                    path: 'list',
                                    component: TemplateEmailReportDemandeClientClientJoignableListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'template-email-report-demande-maneo-client-joignable-refus',
                            children: [
                                {
                                    path: 'list',
                                    component: TemplateEmailReportDemandeManeoClientJoignableRefusListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'template-email-report-demande-maneo-client-joignable-accepte',
                            children: [
                                {
                                    path: 'list',
                                    component: TemplateEmailReportDemandeManeoClientJoignableAccepteListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'template-email-report-demande-client-client-injoignable',
                            children: [
                                {
                                    path: 'list',
                                    component: TemplateEmailReportDemandeClientClientInjoignableListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'template-email-report-demande-maneo-client-injoignable',
                            children: [
                                {
                                    path: 'list',
                                    component: TemplateEmailReportDemandeManeoClientInjoignableListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },


                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class KoscAdminRoutingModule {
}
