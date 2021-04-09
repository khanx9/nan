import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/models';


@Component({
    selector: 'acher-layout',
    styleUrls: ['./layout.component.scss'],
    templateUrl: './layout.component.html'
})
export class LayoutComponent {
    title = '';
    isLoading = false;
    constructor(private store: Store<AppState>, router: Router) {
    }

}
