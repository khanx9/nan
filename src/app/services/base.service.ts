import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from '../states/models';
import { tap, catchError } from 'rxjs/operators';
import { getCommonProps } from '../states/selectors';
import { CommonState } from './../states/models/index';
import { DEFAULT } from 'src/app/constants';

@Injectable({providedIn: 'root'})
export class BaseService {
    state = {
        lang : 'en_US',
        user_id : ''
    }
    baseURL = DEFAULT.BASE_URL;

    private setState = (newState: any) => this.state = { ...this.state, ...newState };
    constructor(public store : Store<AppState>, private httpService : HttpClient) { 
        store.pipe(select(getCommonProps)).subscribe((props : CommonState) => {
            this.setState(props)
        })
    }


     /**
   *
   * Using method POST
   * @param {string} url :  SERVER URL which is used to request to backend/server
   * @param {Object} data : Data request which send to server
   * @returns {Observable<any>}
   * @memberof RestApiService
   */
  // tslint:disable-next-line: ban-types
  post(apiSufix: string, data: any, url?: string): Observable<any> {
    const { type, ...rest } = data;
    return this.httpService.post<any>(url || this.baseURL + apiSufix, {
      // Chỗ này là bao gồm condition và data, tùy vào yêu cầu của api để sử dụng
      ...this.state,
      ...rest,
    }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Max-Age': '1800',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET',
        'Access-Control-Allow-Headers': '*',
      }),
      params: {
        type: type || 1,
      },
    }).pipe(
      // tslint:disable-next-line: no-shadowed-variable
      tap((data: any) => {
        return data;
      }),
      catchError(this.handleError<any>({ Method: 'Post', url: `${this.baseURL}`, data, response: null })),
    );

  }

  /**
*
*
* @private
* @template T
* @param {string} [operation='operation']
* @param {T} [result]
* @returns
* @memberof RestApiService
*/
  private handleError<T>(operation: any, result?: T) {
    return (error): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      const errorMessage = {
        operation,
        error: error.message,
        errorDetail: error,
      };
      //an error occurred while processing your request

      if (errorMessage.errorDetail.status >= 500) {
        // this.store.dispatch(new SHOWSNACKBAR('', this.snackbar))
      }

      // TODO: better job of transforming error for user consumption
      console.log(errorMessage);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
    
}