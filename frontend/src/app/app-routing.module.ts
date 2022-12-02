import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppMainComponent} from './app.main.component';
import {AuthGuard} from './controller/guards/auth.guard';
import {AccessDeniedComponent} from './auth/access-denied/access-denied.component';
import {HomeComponent} from './demo/view/home/home.component';
import {LoginAdminComponent} from './module/admin/login-admin/login-admin.component';
import {RegisterAdminComponent} from './module/admin/register-admin/register-admin.component';
import {LoginChercheurComponent} from './module/chercheur/login-chercheur/login-chercheur.component';
import {RegisterChercheurComponent} from './module/chercheur/register-chercheur/register-chercheur.component';
import {UserListComponent} from "./module/admin/view/kosc/user-list/user-list.component";

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {path: '', component: HomeComponent},
                {path: 'admin/login', component: LoginAdminComponent},
                {path: 'admin/register', component: RegisterAdminComponent},
                {path: 'admin/user', component: UserListComponent},
                {path: 'chercheur/login', component: LoginChercheurComponent},
                {path: 'chercheur/register', component: RegisterChercheurComponent},
                {
                    path: 'app', // '\'' + root + '\'',
                    component: AppMainComponent,
                    children: [
                        {
                            path: 'admin',
                            loadChildren: () => import('./module/admin/admin-routing.module').then(m => m.AdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'chercheur',
                            loadChildren: () => import('./module/chercheur/chercheur-routing.module').then(m => m.ChercheurRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {path: 'denied', component: AccessDeniedComponent},
                    ],
                    canActivate: [AuthGuard]
                },
            ],
            {scrollPositionRestoration: 'enabled'}
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
