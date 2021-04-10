import { Injectable } from '@angular/core';
import { KEYS, UserLogin } from '../constants';
import { DEFAULT } from 'src/app/constants';
import { BaseService } from './base.service';
import { Store } from '@ngrx/store';
import { AppState } from '../states/models';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { STORE_USER_PROFILE } from '../states/actions';
import { UserRegister } from './../constants/index';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
    private urlLogin = DEFAULT.API_PREFIX + '/user/login';
    private urlRegister = DEFAULT.API_PREFIX + '/user/register';
    constructor(store: Store<AppState>, httpService: HttpClient) {
        super(store, httpService)
    }


    isLoggedIn = (): boolean => !!localStorage.getItem(KEYS.ACCESS_TOKEN);

    getToken = (): string => localStorage.getItem(KEYS.ACCESS_TOKEN);

    login = async (user: UserLogin) => {
        return await this.post(this.urlLogin, user).toPromise();
    }

    register = async (user: UserRegister) => {
        return await this.post(this.urlRegister, user).toPromise();
    }

    saveToken = (access_token: string) => {
        localStorage.setItem(KEYS.ACCESS_TOKEN, access_token);
    }

    getUserProfile = () => {
        const token = localStorage.getItem(KEYS.ACCESS_TOKEN);
        // console.log(token)
        if (token) {
            const decodeToken: any = jwt_decode(token);
            // console.log(decodeToken)
            const userProfile = decodeToken?.user;
            this.store.dispatch(new STORE_USER_PROFILE(userProfile));
        }
        return null;
    }

}