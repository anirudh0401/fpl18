import { Component, OnInit } from '@angular/core';
import { MatSelectModule, MatToolbarModule } from '@angular/material';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { ApplicationServiceService } from "../../../e2e/app/application-service.service";
import { players } from '../players';
import { teams } from '../teams';

@Component({
  selector: 'app-make-prediction',
  templateUrl: './make-prediction.component.html',
  styleUrls: ['./make-prediction.component.css', '../app.component.css']
})
export class MakePredictionComponent {

  responseData: {};
  myGroup: FormGroup;
  toasterService: ToasterService;
  Winner: AbstractControl;
  MOM: AbstractControl;
  TotalGoals: AbstractControl;
  GoalDifference: AbstractControl;
  MatchId: AbstractControl;
  TotalCards: AbstractControl;
  players: any;
  teams: any;
  matches: any;


  constructor(private router: Router, fb: FormBuilder, private _ApplicationServiceService: ApplicationServiceService, toasterService: ToasterService) {
    this.toasterService = toasterService;
    this.myGroup = fb.group({
      'Winner': [''],
      'MOM': [''],
      'TotalGoals': [''],
      'GoalDifference': [''],
      'TotalCards': [''],
      'MatchId': ['']
    });
    this.Winner = this.myGroup.controls['Winner'];
    this.MOM = this.myGroup.controls['MOM'];
    this.TotalGoals = this.myGroup.controls['TotalGoals'];
    this.GoalDifference = this.myGroup.controls['GoalDifference'];
    this.TotalCards = this.myGroup.controls['TotalCards'];
    this.MatchId = this.myGroup.controls['MatchId'];
    this.players = players;
    this.teams = teams;
  }

  ngOnInit() {
    this.eligiblematches();
  }

  eligiblematches() {
    this._ApplicationServiceService.getData('', 'matchDetails').then((result) => {
      this.matches = result;
    }, (err) => {
      console.log(err);
    });
  }

  ngAfterViewInit() {
    (window as any).initialize();
  }

  makePrediction(): void {
    this._ApplicationServiceService.postData(this.myGroup.value, 'makePrediction').then((result) => {
      this.responseData = result;
      if (result['status'] == "success") {
        console.log(this.responseData['message']);
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
