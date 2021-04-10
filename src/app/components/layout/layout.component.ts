import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/models';
import { Utils } from 'src/app/utils';
import { EXCLUDES } from './../../constants/index';


@Component({
    selector: 'acher-layout',
    styleUrls: ['./layout.component.scss'],
    templateUrl: './layout.component.html'
})
export class LayoutComponent {
    title = '';
    isLoading = false;

    excludeScreens = EXCLUDES.screens;
    isHidden = false;


    constructor(private store: Store<AppState>, router: Router) {
        router.events.subscribe((e) => {
            const fragment = Utils.getParamsOnUrl(true) as string;
            // console.log(fragment)
            this.isHidden = this.excludeScreens.includes(fragment)
        })
    }

}
