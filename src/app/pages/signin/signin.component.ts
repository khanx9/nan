import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SCREENS } from 'src/app/constants';

@Component({
    selector: 'archer-sign-in',
    templateUrl: 'signin.component.html',
    styleUrls: ['./signin.component.scss']
})

export class SignInComponent implements OnInit {
    constructor(private router : Router) { }
    isShowPassword = false;
    isLoading = false;
    toggleShowPass = () => this.isShowPassword = !this.isShowPassword;
    ngOnInit() { }
    goBack = () => this.router.navigateByUrl(SCREENS.HOME);
}