import {Component} from '@angular/core';
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';
import {User} from './controller/model/User.model';
import {AuthService} from './controller/service/Auth.service';
import {ChercheurVo} from './controller/model/Chercheur.model';
import {ChercheurService} from './controller/service/Chercheur.service';
import {Router, RouterLink} from "@angular/router";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    roleAdmin = false;

    constructor(public app: AppComponent, public appMain: AppMainComponent, private authService: AuthService, private chercheurService: ChercheurService,private router:Router) {
    }

    get switchChercheurDialog(): boolean {
        return this.chercheurService.switchChercheurDialog;
    }

    set switchChercheurDialog(value: boolean) {
        this.chercheurService.switchChercheurDialog = value;
    }

    get authenticatedUserByAdmin(): ChercheurVo {
        return this.authService.authenticatedUserByAdmin();
    }

    get authenticatedUser(): User {
        return this.authService.authenticatedUser;
    }

    ngOnInit(): void {
        this.authService.loadInfos();
        if (this.authService.authenticatedUser.roles[0].authority === 'ROLE_ADMIN') {
            this.roleAdmin = true;
        }
    }

    switch(): void {
        this.switchChercheurDialog = true;
    }

    switchAdmin(): void {
        this.authService.unregisterConnectedChercheur();
        window.location.reload();
    }

    logout() {
        this.authService.logout();
    }

    ManageUsers(){
        this.router.navigate(['admin/user']);
    }
}
