import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/models';
import { SHOW_TOAST } from './../../states/actions/index';
import { NbToastrService, NbTreeGridDataSource } from '@nebular/theme';
import { TreeNode } from 'src/app/components/datatable/datatable.component';
import { select } from '@ngrx/store';
import { getUserProfile } from './../../states/selectors/index';

@Component({
    selector: 'archer-search-page',
    templateUrl: 'search.component.html',
    styleUrls: ['./search.component.scss']
})

export class SearchPageComponent implements OnInit {
    constructor(private store: Store<AppState>, private toastService: NbToastrService) { 
        store.pipe(select(getUserProfile)).subscribe(user_profile => {
            this.user_profile = user_profile;
        })
    }
    user_profile :any ;
    date = (new Date()).getTime();
    rowData = { x: 1 };
    datatable: TreeNode<User>[] = [
        {
            data: {
                name: 'Projects', no: 1, create_by: this.date, actions: [{
                    label: 'delete',
                    icon: 'close-outline',
                    action: () => { setTimeout(() => console.log('delete', this.rowData) ,100)}
                }]
            },
        },
        {
            data: {
                name: 'Reports', no: 2, create_by: this.date, actions: [{
                    label: 'delete',
                    icon: 'close-outline',
                    action: () => { setTimeout(() => console.log('delete', this.rowData) ,100) }
                }]
            },
        },
        {
            data: {
                name: 'Other', no: 3, create_by: this.date, actions: [{
                    label: 'delete',
                    icon: 'close-outline',
                    action: () => { setTimeout(() => console.log('delete', this.rowData) ,100) }
                }]
            },
        },
    ];
    columns = ['no', 'name', 'create_by'];
    customColumns = ['action']

    ngOnInit() { }
    getV = (v) => this.rowData = v.data;

    action = () => {
        this.store.dispatch(new SHOW_TOAST({
            title: 'Tesst',
            message: 'wwhatever',
            status: 'danger'
        }, this.toastService))
    }
}

interface User {
    no?: number;
    name?: string;
    create_by?: number;
    actions?: ActionRow[];
}

interface ActionRow {
    label: string;
    icon: string;
    action?: Function
}