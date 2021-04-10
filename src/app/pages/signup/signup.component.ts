import { Component, OnInit } from '@angular/core';
import { SCREENS } from 'src/app/constants';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Utils } from 'src/app/utils';
import { AuthService } from './../../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/models';
import { SHOW_TOAST } from './../../states/actions/index';
import { NbToastrService } from '@nebular/theme';

@Component({
    selector: 'archer-sign-up',
    templateUrl: 'signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignUpComponent implements OnInit {
    isLoading = false;
    nameCtrl: FormControl;
    usernameCtrl: FormControl;
    emailCtrl: FormControl;
    passwordCtrl: FormControl;
    repeat_passowrdCtrl: FormControl;
    errors = {
        nameCtrl: [],
        usernameCtrl: [],
        emailCtrl: [],
        passwordCtrl: [],
        repeat_passowrdCtrl: []
    }
    commErrors = [];
    constructor(private router: Router,private authService : AuthService, private store : Store<AppState>, private toastService : NbToastrService) {
        this.nameCtrl = new FormControl('');
        this.usernameCtrl = new FormControl('');
        this.emailCtrl = new FormControl('');
        this.passwordCtrl = new FormControl('');
        this.repeat_passowrdCtrl = new FormControl('');
    }
    isShowPassword = false;
    toggleShowPass = () => this.isShowPassword = !this.isShowPassword;

    goBack = () => this.router.navigateByUrl(SCREENS.HOME);

    setErrors = (newErrors: any) => {
        this.errors = { ...this.errors, ...newErrors };
    }

    resetErrors = () => {
        Object.keys(this.errors).forEach(key => this.errors[key] = []);
        this.commErrors = [];
    }

    ngOnInit() { }

    checkRequiredAll = () => {
        Object.keys(this.errors).forEach(key => {
            const er = Utils.checkRequired(this[key].value);
            if (er) {
                this.setErrors({
                    [key]: [...this.errors[key], er]
                })
            }
        })

    }

    isHasError = () => {
        const err = [];

        Object.entries(this.errors).forEach(([key,value]) => {
            if(value.length !== 0) {
                err.push(value);
            }
        })
        return err.length !== 0 || this.commErrors.length !==0;
    }

    check2Pwd = () => {
        const er = Utils.checkPwd(this.passwordCtrl.value, this.repeat_passowrdCtrl.value);
        console.log(this.passwordCtrl.value, this.repeat_passowrdCtrl.value)
        if (er) {
            this.commErrors = [...this.commErrors, er];
        }
    }

    navigateSignIn = () => this.router.navigateByUrl(SCREENS.SIGN_IN);
    navigateHome = () => this.router.navigateByUrl(SCREENS.HOME);

    handleSignUp = () => {
        this.resetErrors();
        this.checkRequiredAll();
        this.check2Pwd();
        // console.log(this.isHasError)
        if(!this.isHasError()) {
            this.authService.register({
                name : this.nameCtrl.value,
                username : this.usernameCtrl.value,
                email : this.emailCtrl.value,
                password : this.passwordCtrl.value
            }).then(r => {
                console.log(r)
                if(r.username !== '') {
                    this.store.dispatch(new SHOW_TOAST({
                        title : 'Thông báo',
                        message : 'Bạn đã đăng ký thành công',
                        status : 'success'
                    },this.toastService));

                    this.authService.login({
                        email : r.email,
                        password : this.passwordCtrl.value
                    }).then(res => {
                        if(res) {
                            this.navigateHome();
                        }
                    })
                }
            })

        } 

    }
}