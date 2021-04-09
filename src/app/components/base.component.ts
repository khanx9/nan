import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../states/models';
import { getCommonProps } from '../states/selectors';
import { CommonState } from './../states/models/index';

@Component({
    selector: 'archer-base-component',
    template: ``
})

export class BaseComponent implements OnInit {

    state: CommonState;

    private setState = (newState: any) => this.state = { ...this.state, ...newState };

    constructor(private store: Store<AppState>) {
        store.pipe(select(getCommonProps)).subscribe((props : CommonState) => {
            this.setState(props);
        })
    }


    get lang() : string {
        return this.state.lang;
    }

    get user_id() : string {
        return this.state.user_id;
    }


    ngOnInit() { }
}