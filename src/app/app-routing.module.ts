import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { SearchPageComponent } from './pages/search/search.component';
import { SignInComponent } from './pages/signin/signin.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserGuardService } from './services/user-guard.service';


const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent,
    canActivate : [AuthGuardService]
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate : [AuthGuardService]
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate : [UserGuardService]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate : [UserGuardService]
  }
];

const config: ExtraOptions = {
  useHash: true,
  relativeLinkResolution: 'legacy',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
