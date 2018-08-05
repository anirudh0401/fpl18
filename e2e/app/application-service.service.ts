import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs";
import { Observable } from "rxjs"
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../../src/app/user/user';
import { Toast, ToasterService } from 'angular2-toaster';

let apiUrl = 'angularcode/api/v1/';

@Injectable({
  providedIn: 'root'
})

export class ApplicationServiceService {

  constructor(private _http: Http) {
  }
  getpredictionHistory(credentials) {
    return this._http.post(apiUrl + "GetpredictionHistory", JSON.stringify(credentials)).pipe(map(data => data.json()));
  }

  getpreviousPrediction() {
    return this._http.get(apiUrl + "GetpreviousPrediction").pipe(map(data => data.json()));
  }

  getUsers() {
    return this._http.get(apiUrl + "userRankDetails").pipe(map(data => data.json()));
  }

  matchdetails() {
    return this._http.get('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json').pipe(map(data => data.json()));
  }

  getData(credentials, type) {
    return new Promise((resolve, reject) => {
      this._http.get(apiUrl + type, JSON.stringify(credentials))
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  login(user) {
    let headers = new Headers();
    return this._http.post(apiUrl + 'login', JSON.stringify(user));
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      this._http.post(apiUrl + type, JSON.stringify(credentials))
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

}