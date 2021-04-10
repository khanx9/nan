import { Component, OnInit } from '@angular/core';
import { Utils } from './../../utils/index';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/models';
import { select } from '@ngrx/store';
import { getUserProfile, getLangApp } from './../../states/selectors/index';
import { DEFAULT, LANG } from 'src/app/constants';
import { UserProfile } from './../../states/models/index';
import { userMenu } from './../../constants/index';
import { Router } from '@angular/router';
import { TranslationService } from 'src/app/services/translate.service';
import { FormControl } from '@angular/forms';
import { CHANGE_LANGUAGE } from './../../states/actions/index';

@Component({
    selector: 'archer-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    i18nLang = 'common.lang.';
    constructor(private store: Store<AppState>, private router: Router, private translateService: TranslationService) {
        store.pipe(select(getUserProfile)).subscribe(up => {
            this.user_profile = up;
        })
        store.pipe(select(getLangApp)).subscribe(lang => {
            if (this.currentLang !== lang) {
                this.currentLang = lang
            }
        })
        this.lang_selectCtrl = new FormControl('');
    }

    lang_selectCtrl: FormControl;

    currentLang: string = DEFAULT.LANG

    dataLang = [
        LANG.en_US,
        LANG.vi_VN
    ]

    isOpenMenu: boolean = false;

    menuUser = userMenu;

    user_profile: UserProfile;

    openMenu = () => this.isOpenMenu = !this.isOpenMenu;

    navigate = (link) => this.router.navigateByUrl(link);

    getAvatarUrl = () => this.user_profile?.profileImage ? this.user_profile?.profileImage : DEFAULT.AVATAR_URL + this.user_profile.name?.replace(' ', '+');

    selectChange = (value) => {
        console.log(value)
        this.store.dispatch(new CHANGE_LANGUAGE(value));
    }

    ngOnInit() {
    }
}