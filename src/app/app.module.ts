import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { rootReducers } from './states/rootReducers';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/auth.interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSpinnerModule, NbSidebarService, NbIconModule, NbToastrService, NbToastrModule, NbTreeGridModule, NbTooltipModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FooterComponent, HeaderComponent, LayoutComponent } from './components';
import { SearchPageComponent } from './pages/search/search.component';
import { StoreModule } from '@ngrx/store';
import { TranslationService } from './services/translate.service';
import { TranslatePipe } from './pipes/translate.pipe';
import { SignInComponent } from './pages/signin/signin.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { DEFAULT } from './constants';
import { DatatableComponent } from './components/datatable/datatable.component';
import { NgxDatatableModule } from '@tusharghoshbd/ngx-datatable';

const NB_MODULES = [
  NbSidebarModule,
  NbSpinnerModule,
  NbIconModule,
  NbToastrModule.forRoot({}),
  NbTooltipModule
]

const NB_SERVICES = [
  NbSidebarService,
  NbToastrService
]

const COMMON_COMPONENTS = [
  LayoutComponent,
  HeaderComponent,
  FooterComponent,
  DatatableComponent,
]

const APP_SERVICES = [
  TranslationService
]

const APP_PIPES = [
  TranslatePipe,
]

const PAGES = [
  SearchPageComponent,
  SignInComponent,
  SignUpComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ...COMMON_COMPONENTS,
    ...PAGES,
    ... APP_PIPES,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      { ...rootReducers },
      {
        initialState: {},
      },
    ),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbTreeGridModule,
    ...NB_MODULES,
  ],
  providers: [
    ...NB_SERVICES,
    ...APP_SERVICES,
    ...APP_PIPES,
    {
      provide: LOCALE_ID,
      useValue: DEFAULT.LOCALE,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    NbToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
