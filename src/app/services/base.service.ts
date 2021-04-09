import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../states/models';

@Injectable({providedIn: 'root'})
export class BaseService {
    constructor(private store : Store<AppState>) { }
    
}