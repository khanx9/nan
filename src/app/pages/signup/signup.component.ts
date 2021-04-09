import { Component, OnInit } from '@angular/core';
import { SCREENS } from 'src/app/constants';
import { Router } from '@angular/router';

@Component({
    selector: 'archer-sign-up',
    templateUrl: 'signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignUpComponent implements OnInit {
    isLoading = false;
    constructor(private router: Router) { }
    isShowPassword = false;
    toggleShowPass = () => this.isShowPassword = !this.isShowPassword;
    goBack = () => this.router.navigateByUrl(SCREENS.HOME);

    ngOnInit() { }
}