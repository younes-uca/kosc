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
                        label: 'Suivi Prise Rendez Vous',
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
                        //     label: 'Liste chercheur',
                        //     icon: 'pi pi-fw pi-plus-circle',
                        //     routerLink: ['/app/admin/kosc/chercheur/list']
                        // },
                        {
                            label: 'Liste technicien',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/technicien/list']
                        },
                        {
                            label: 'Liste arret travail',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/arret-travail/list']
                        },
                        {
                            label: 'Liste departement',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/departement/list']
                        },
                        {
                            label: 'Liste raison arret travail',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/raison-arret-travail/list']
                        },
                        {
                            label: 'Liste departement technicien',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/departement-technicien/list']
                        },
                        {
                            label: 'Liste region',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/region/list']
                        },
                        {
                            label: 'Liste entreprise',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/entreprise/list']
                        },
                    ]
                }, {
                label: 'Templating',
                icon: 'pi pi-wallet',
                items: [

                    {
                        label: 'Liste template email ftl',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-ftl/list']
                    },
                    {
                        label: 'Liste template email mauvais contact',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-mauvais-contact/list']
                    },
                    {
                        label: 'Liste template email refus',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-refus/list']
                    },

                    {
                        label: 'Liste template email confirmation client',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-confirmation-client/list']
                    },
                    {
                        label: 'Liste template email replanification',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-replanification/list']
                    },
                    {
                        label: 'Liste template email cloture',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-cloture/list']
                    },
                    {
                        label: 'Liste template email client injoinable kosc',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-client-injoinable-kosc/list']
                    },
                    {
                        label: 'Liste template email planification',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-planification/list']
                    },
                    {
                        label: 'Liste template email report',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-report/list']
                    },
                    {
                        label: 'Liste template suivi',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-suivi/list']
                    },
                    {
                        label: 'Liste template email client injoinable',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-client-injoinable/list']
                    },
                    {
                        label: 'Liste template email cri',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/kosc/template-email-cri/list']
                    },
                    {
                        label: 'Liste default template configuration',
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
                            label: 'Liste cause ko ok',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/cause-ko-ok/list']
                        },
                        {
                            label: 'Liste source replanification',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/source-replanification/list']
                        },
                        {
                            label: 'Liste etat demande kosc',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/etat-demande-kosc/list']
                        },
                        {
                            label: 'Liste operator',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/operator/list']
                        },
                        {
                            label: 'Liste Jours Fériés',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/admin/kosc/jour-ferie/list']
                        },
                    ]
                },
            ]
        this.modelchercheur =
            [
                {
                    label: 'Configuration',
                    icon: 'pi pi-wallet',
                    items: [
                        {
                            label: 'Liste cause ko ok',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/cause-ko-ok/list']
                        },
                        {
                            label: 'Liste template email ftl',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-ftl/list']
                        },
                        {
                            label: 'Liste template email mauvais contact',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-mauvais-contact/list']
                        },
                        {
                            label: 'Liste template email refus',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-refus/list']
                        },
                        {
                            label: 'Liste source replanification',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/source-replanification/list']
                        },
                        {
                            label: 'Liste template email confirmation client',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-confirmation-client/list']
                        },
                        {
                            label: 'Liste template email replanification',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-replanification/list']
                        },
                        {
                            label: 'Liste template email cloture',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-cloture/list']
                        },
                        {
                            label: 'Liste template email client injoinable kosc',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-client-injoinable-kosc/list']
                        },
                        {
                            label: 'Liste template email planification',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-planification/list']
                        },
                        {
                            label: 'Liste template email report',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-report/list']
                        },
                        {
                            label: 'Liste template suivi',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-suivi/list']
                        },
                        {
                            label: 'Liste template email client injoinable',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-client-injoinable/list']
                        },
                        {
                            label: 'Liste template email cri',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/template-email-cri/list']
                        }, {
                            label: 'Liste default template configuration',
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
                            label: 'Liste chercheur',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/chercheur/list']
                        },
                        {
                            label: 'Liste technicien',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/technicien/list']
                        },
                        {
                            label: 'Liste arret travail',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/arret-travail/list']
                        },
                        {
                            label: 'Liste departement',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/departement/list']
                        },
                        {
                            label: 'Liste raison arret travail',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/raison-arret-travail/list']
                        },
                        {
                            label: 'Liste departement technicien',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/departement-technicien/list']
                        },
                        {
                            label: 'Liste region',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/region/list']
                        },
                        {
                            label: 'Liste entreprise',
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
                            label: 'Liste ordre kosc',
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
                            label: 'Liste etat demande kosc',
                            icon: 'pi pi-fw pi-plus-circle',
                            routerLink: ['/app/chercheur/kosc/etat-demande-kosc/list']
                        },
                        {
                            label: 'Liste operator',
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
