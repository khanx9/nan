import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { KEYS, SCREENS } from 'src/app/constants';
import { AuthService } from './../../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/models';
import { SHOW_TOAST, STORE_USER_PROFILE } from './../../states/actions/index';
import { NbToastrService } from '@nebular/theme';

@Component({
    selector: 'archer-sign-in',
    templateUrl: 'signin.component.html',
    styleUrls: ['./signin.component.scss']
})

export class SignInComponent implements OnInit {
    constructor(private router: Router, private auhtService: AuthService, private store: Store<AppState>, private toastService: NbToastrService) {
        this.emailCtrl = new FormControl('');
        this.passwordCtrl = new FormControl('');
    }
    isShowPassword = false;
    isLoading = false;
    toggleShowPass = () => this.isShowPassword = !this.isShowPassword;
    navigateHome = () => this.router.navigateByUrl(SCREENS.HOME);
    emailCtrl: FormControl;
    passwordCtrl: FormControl;
    ngOnInit() { }
    goBack = () => this.router.navigateByUrl(SCREENS.HOME);
    navigateSignUp = () => this.router.navigateByUrl(SCREENS.SIGN_UP);

    handleLogin = () => {
        // console.log(this.emailCtrl.value,this.passwordCtrl.value);

        if (this.emailCtrl.value && this.passwordCtrl.value) {
            this.auhtService.login({
                email: this.emailCtrl.value,
                password: this.passwordCtrl.value
            }).then(res => {
                console.log(res)

                this.auhtService.saveToken(res[KEYS.ACCESS_TOKEN]);
                this.auhtService.getUserProfile()
                this.store.dispatch(new SHOW_TOAST({
                    title: 'Thông báo',
                    message: 'Bạn đã login thành công',
                    status: 'success'
                }, this.toastService))
                this.navigateHome();
            }).catch(e => {

            })
        }
    }
}