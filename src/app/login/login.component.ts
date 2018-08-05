import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import '../../assets/login-animation.js';
import { ApplicationServiceService } from "../../../e2e/app/application-service.service";
import { LoginDetails } from "./login";
import { Validators, FormControl, FormGroup, FormGroupDirective, FormBuilder, AbstractControl } from '@angular/forms';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { Globals } from '../Globals.js';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../app.component.css'],
  providers: [Globals]
})

export class LoginComponent {
  toasterService: ToasterService;
  responseData: any;
  myGroup: FormGroup;
  username: AbstractControl;
  pwd: AbstractControl;

  constructor(private router: Router, fb: FormBuilder, private _ApplicationServiceService: ApplicationServiceService, toasterService: ToasterService, private globals: Globals) {
    this.toasterService = toasterService;
    this.myGroup = fb.group({
      'username': [''],
      'pwd': ['']
    });
    this.username = this.myGroup.controls['username'];
    this.pwd = this.myGroup.controls['pwd'];
  }

  ngAfterViewInit() {
    (window as any).initialize();
  }

  login() {
    this._ApplicationServiceService.postData(this.myGroup.value, 'login').then((result) => {
      this.responseData = result;
      if (result['status'] == "success") {
        console.log(this.responseData['message']);        
        this.globals.username = this.myGroup.controls['username'].value;
        this.globals.isAuthenticated = true;
      }
      else {
        console.log(this.responseData['message']);
      }

      this.toasterService.pop(result['status'], "", result['message']);

    }, (err) => {
      console.log(err);
    });
  }
}
