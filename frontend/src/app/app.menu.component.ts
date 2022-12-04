import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './controller/service/Auth.service';

import {animate, state, style, transition, trigger,} from '@angular/animations';
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';
import {RoleService} from './controller/service/role.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    animations: [
        trigger('inline', [
            state(
                'hidden',
                style({
                    height: '0px',
                    overflow: 'hidden',
                })
            ),
            state(
                'visible',
                style({
                    height: '*',
                })
            ),
            state(
                'hiddenAnimated',
                style({
                    height: '0px',
                    overflow: 'hidden',
                })
            ),
            state(
                'visibleAnimated',
                style({
                    height: '*',
                })
            ),
            transition(
                'visibleAnimated => hiddenAnimated',
                animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
            ),
            transition(
                'hiddenAnimated => visibleAnimated',
                animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
            ),
        ]),
    ],
})
export class AppMenuComponent implements OnInit {
    model: any[];
    modelsuperadmin: any[];
    modelanonymous: any[];
    modeladmin: any[];
    modelchercheur: any[];

    constructor(public app: AppComponent,
                public appMain: AppMainComponent,
                private roleService: RoleService,
                private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {


        this.modeladmin =
            [
                {
                label: 'Kosc Ordre',
                icon: 'pi pi-wallet',
                items: [
                    {
                        label: 'Importation ordre kosc',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/ordre-kosc/list']
                    },
                    {
                        label: 'Prise Rendez Vous',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/ordre-kosc-prise-rdv/list']
                    },
                    /*{
                        label: 'Affectation Technicien kosc ordre',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/ordre-kosc-affectation-technicien/list']
                    },*/
                    {
                        label: 'Suivi Commande',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/ordre-kosc-suivi/list']
                    },
                    {
                        label: 'Cdd',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/ordre-kosc-suivi-historique/list']
                    },
                    {
                        label: 'Suivi Cdd',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/ordre-kosc-suivi-cdd/list']
                    }
                ]
            },
                {
                    label: 'Gestion Technicien',
                    icon: 'pi pi-wallet',
                    items: [
                        // {
                        //     label: 'chercheur',
                        //     icon: 'pi pi-fw pi-plus-circle',
                        //     routerLink: ['/app/admin/kosc/chercheur/list']
                        // },
                        {
                            label: 'Technicien',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/technicien/list']
                        },
                        {
                            label: 'Arret travail',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/arret-travail/list']
                        },
                        {
                            label: 'Departement',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/departement/list']
                        },
                        {
                            label: 'Raison arret travail',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/raison-arret-travail/list']
                        },
                        {
                            label: 'Departement technicien',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/departement-technicien/list']
                        },
                        {
                            label: 'Region',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/region/list']
                        },
                        {
                            label: 'Entreprise',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/entreprise/list']
                        },
                    ]
                }, {
                label: 'Templating',
                icon: 'pi pi-wallet',
                items: [

                    {
                        label: 'Template ftl',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-ftl/list']
                    },
                    {
                        label: 'Template mauvais contact',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-mauvais-contact/list']
                    },
                    {
                        label: 'Template refus',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-refus/list']
                    },

                    {
                        label: 'Template confirmation client',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-confirmation-client/list']
                    },
                    {
                        label: 'Template replanification',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-replanification/list']
                    },
                    {
                        label: 'Template cloture',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-cloture/list']
                    },
                    {
                        label: 'Template client injoinable kosc',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-client-injoinable-kosc/list']
                    },
                    {
                        label: 'Template planification',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-planification/list']
                    },

                    {
                        label: 'Template report demande maneo client joignable accepte',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-report-demande-maneo-client-joignable-accepte/list']
                    },
                    {
                        label: 'Template report demande maneo client injoignable',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-report-demande-maneo-client-injoignable/list']
                    },
                    {
                        label: 'Template report demande client client injoignable',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-report-demande-client-client-injoignable/list']
                    },
                    {
                        label: 'Template report demande maneo client joignable refus',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-report-demande-maneo-client-joignable-refus/list']
                    },
                    {
                        label: 'Template report demande client client joignable',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-report-demande-client-client-joignable/list']
                    },
                    {
                        label: 'Template suivi',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-suivi/list']
                    },
                    {
                        label: 'Template client injoinable',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-client-injoinable/list']
                    },
                    {
                        label: 'Template cri',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-cri/list']
                    },
                    {
                        label: 'Default template configuration',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/default-template-configuration/list']
                    },
                ]
            },

                {
                    label: 'Referentiel',
                    icon: 'pi pi-wallet',
                    items: [
                        {
                            label: 'Cause ko ok',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/cause-ko-ok/list']
                        },
                        {
                            label: 'Source replanification',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/source-replanification/list']
                        },
                        {
                            label: 'Etat demande kosc',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/etat-demande-kosc/list']
                        },
                        {
                            label: 'Operator',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/operator/list']
                        },
                        {
                            label: 'Jours Fériés',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/jour-ferie/list']
                        },
                    ]
                },
                {
                    label: 'Gestion Users',
                    icon: 'pi pi-users',
                    items: [
                        {
                            label: 'User',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/ordre-kosc-gestion-utilisateur/Gestion_users']
                        },{
                            label: 'Role',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/ordre-kosc-gestion-utilisateur/Gestion_roles']
                        }
                    ]
                }
            ]
        this.modelchercheur =
            [
                {
                    label: 'Configuration',
                    icon: 'pi pi-wallet',
                    items: [
                        {
                            label: 'cause ko ok',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/cause-ko-ok/list']
                        },
                        {
                            label: 'Template ftl',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-ftl/list']
                        },
                        {
                            label: 'Template mauvais contact',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-mauvais-contact/list']
                        },
                        {
                            label: 'Template refus',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-refus/list']
                        },
                        {
                            label: 'source replanification',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/source-replanification/list']
                        },
                        {
                            label: 'Template confirmation client',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-confirmation-client/list']
                        },
                        {
                            label: 'Template replanification',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-replanification/list']
                        },
                        {
                            label: 'Template cloture',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-cloture/list']
                        },
                        {
                            label: 'Template client injoinable kosc',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-client-injoinable-kosc/list']
                        },
                        {
                            label: 'Template planification',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-planification/list']
                        },
                        {
                            label: 'Template report',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-report/list']
                        },
                        {
                            label: 'template suivi',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-suivi/list']
                        },
                        {
                            label: 'Template client injoinable',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-client-injoinable/list']
                        },
                        {
                            label: 'Template cri',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-cri/list']
                        }, {
                            label: 'default template configuration',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/default-template-configuration/list']
                        },
                    ]
                },
                {
                    label: 'Gestion Technicien',
                    icon: 'pi pi-wallet',
                    items: [
                        {
                            label: 'chercheur',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/chercheur/list']
                        },
                        {
                            label: 'technicien',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/technicien/list']
                        },
                        {
                            label: 'arret travail',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/arret-travail/list']
                        },
                        {
                            label: 'departement',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/departement/list']
                        },
                        {
                            label: 'raison arret travail',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/raison-arret-travail/list']
                        },
                        {
                            label: 'departement technicien',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/departement-technicien/list']
                        },
                        {
                            label: 'region',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/region/list']
                        },
                        {
                            label: 'entreprise',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/entreprise/list']
                        },
                    ]
                },
                {
                    label: 'Kosc Order',
                    icon: 'pi pi-wallet',
                    items: [
                        {
                            label: 'ordre kosc',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/ordre-kosc/list']
                        },
                    ]
                },
                {
                    label: 'Referentiel',
                    icon: 'pi pi-wallet',
                    items: [
                        {
                            label: 'etat demande kosc',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/etat-demande-kosc/list']
                        },
                        {
                            label: 'operator',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/operator/list']
                        },
                    ]
                },
            ]
        if (this.authService.authenticated) {
            if (this.authService.authenticatedUser.roles) {

                this.authService.authenticatedUser.roles.forEach(role => {
                    const roleName: string = this.getRole(role);
                    this.roleService._role.next(roleName.toUpperCase());
                    eval('this.model = this.model' + this.getRole(role));
                })
            }

        }
    }

    getRole(text) {
        const [role, ...rest] = text.split('_');
        return rest.join('').toLowerCase();
    }

    onMenuClick(event) {
        this.appMain.onMenuClick(event);
    }
}
