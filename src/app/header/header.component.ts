import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/service/data-storage.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {
    collapsed = true;
    private userSub: Subscription;
    isAuthenticated = false;

    constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }

    ngOnInit() {
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
        })
    }
    onSaveData() {
        this.dataStorageService.storeRecipe().subscribe(response => {
        })
    }

    onFetchData() {
        this.dataStorageService.fetchRecipe().subscribe();
    }

    onLogout() {
        this.authService.logout();
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}