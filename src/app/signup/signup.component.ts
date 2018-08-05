import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';
import { ApplicationServiceService } from '../../../e2e/app/application-service.service';
import { players } from '../players';
import { teams } from '../teams';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../app.component.css']
})
export class SignupComponent {

  myGroup: FormGroup;
  toasterService: ToasterService;
  Name: AbstractControl;
  UserName: AbstractControl;
  MobileNo: AbstractControl;
  Password: AbstractControl;
  // RePassword: AbstractControl;
  Winner: AbstractControl;
  GoldenBoot: AbstractControl;
  GoldenGlove: AbstractControl;
  responseData: any;

  players: any;
  teams: any;

  constructor(private router: Router, fb: FormBuilder, private _ApplicationServiceService: ApplicationServiceService, toasterService: ToasterService) {
    this.toasterService = toasterService;
    this.myGroup = fb.group({
      'Name': [''],
      'UserName': [''],
      'MobileNo': [''],
      'Password': [''],
      // 'RePassword': [''],
      'Winner': [''],
      'GoldenBoot': [''],
      'GoldenGlove': ['']
    });
    this.Name = this.myGroup.controls['Name'];
    this.UserName = this.myGroup.controls['UserName'];
    this.MobileNo = this.myGroup.controls['MobileNo'];
    this.Password = this.myGroup.controls['Password'];
    // this.RePassword = this.myGroup.controls['RePassword'];
    this.Winner = this.myGroup.controls['Winner'];
    this.GoldenBoot = this.myGroup.controls['GoldenBoot'];
    this.GoldenGlove = this.myGroup.controls['GoldenGlove'];
    this.players = players;
    this.teams = teams;
  }

  ngAfterViewInit() {
    (window as any).initialize();
    
  }

  makePrediction() {
    this._ApplicationServiceService.postData(this.myGroup.value, 'signUp').then((result) => {
      this.responseData = result;
      if (result['status'] == "success") {
        console.log('Success ' + this.responseData['message']);
      }
      else {
        console.log('Failiure ' + this.responseData['message']);
      }

      this.toasterService.pop(result['status'], "", result['message']);

    }, (err) => {
      console.log(err);
    });
  }


}
