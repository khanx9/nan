import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/models';
import { SHOW_TOAST } from './../../states/actions/index';
import { NbToastrService } from '@nebular/theme';

@Component({
    selector: 'archer-search-page',
    templateUrl: 'search.component.html',
    styleUrls: ['./search.component.scss']
})

export class SearchPageComponent implements OnInit {
    constructor(private store : Store<AppState>,private toastService : NbToastrService) { }

    ngOnInit() { }

    action = () => {
        this.store.dispatch(new SHOW_TOAST({
            title : 'Tesst',
            message : 'wwhatever',
            status: 'danger'
        }, this.toastService))
    }
}