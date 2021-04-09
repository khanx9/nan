import { Injectable } from '@angular/core';
import { KEYS } from '../constants';

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor() { }


    isLoggedIn = () : boolean => !!localStorage.getItem(KEYS.ACCESS_TOKEN);

    getToken = () : string => localStorage.getItem(KEYS.ACCESS_TOKEN);
    
}