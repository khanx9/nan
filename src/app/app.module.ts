import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { rootReducers } from './states/rootReducers';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/auth.interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSpinnerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FooterComponent, HeaderComponent, LayoutComponent } from './components';
import { SearchPageComponent } from './pages/search/search.component';

const NB_MODULES = [
  NbSidebarModule,
  NbSpinnerModule,
]

const COMMON_COMPONENTS = [
  LayoutComponent,
  HeaderComponent,
  FooterComponent
]

const PAGES = [
  SearchPageComponent,
]

@NgModule({
  declarations: [
    AppComponent,
    ...COMMON_COMPONENTS,
    ...PAGES
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      { ...rootReducers },
      {
        initialState : {},
      },
    ),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    ...NB_MODULES,
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
