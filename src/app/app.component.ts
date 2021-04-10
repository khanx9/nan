import { Component, OnInit } from '@angular/core';

import localeEn from '@angular/common/locales/en';
import localeVn from '@angular/common/locales/vi';
import { getLangApp, getUserId } from './states/selectors/index';
import { AppState } from './states/models';
import { registerLocaleData } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'archer-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nan';
  constructor(private store: Store<AppState>, private authService : AuthService) {
   
    store.pipe(select(getUserId)).subscribe(userId => {
      if(userId) {
        const user_profile = authService.getUserProfile();
      }
    })
  }
  ngOnInit() {
    this.store.pipe(select(getLangApp)).subscribe((lang: string) => {
      switch (lang) {
        case 'vi_VN':
          return registerLocaleData(localeVn);
        default:
          return registerLocaleData(localeEn);
      }
    });
  }
}
