import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/models';
import { select } from '@ngrx/store';
import { getUserProfile } from './../../states/selectors/index';
import { UserProfile } from './../../states/models/index';

@Component({
    selector: 'archer-user-profile',
    templateUrl: 'user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
    constructor(private store: Store<AppState>) {
        store.pipe(select(getUserProfile)).subscribe(u => this.userProfile = u);
    }

    userProfile: UserProfile;
    ngOnInit() { }
}