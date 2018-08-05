import { PredictionArchive } from './predictionArchive';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ApplicationServiceService } from "../../../e2e/app/application-service.service";
import { AbstractControl, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-prediction-archive',
  templateUrl: './prediction-archive.component.html',
  styleUrls: ['./prediction-archive.component.css']
})
export class PredictionArchiveComponent implements OnInit {
  myGroup: FormGroup;
  MatchId: AbstractControl;
  matches: {};
  displayedColumns = ['Name', 'MatchWinner', 'GoalDifference', 'TotalGoals', 'TotalCards', 'ManOfMatch', 'ModifiedDate', 'Points'];
  dataSource = new MatTableDataSource<PredictionArchive>();

  @ViewChild(MatSort) sort: MatSort;
  constructor(private _ApplicationServiceService: ApplicationServiceService, fb: FormBuilder) {
    this.myGroup = fb.group({
      'MatchId': ['']
    });
    this.MatchId = this.myGroup.controls['MatchId'];
  }

  ngOnInit() {
    this.eligiblematches();
    this.dataSource.sort = this.sort;
  }

  eligiblematches() {
    this._ApplicationServiceService.getData('', 'GetMatchHistory').then((result) => {
      this.matches = result;
    }, (err) => {
      console.log(err);
    });
  }

  getpredictionArchive() {
    this._ApplicationServiceService.getpredictionHistory(this.myGroup.value)
      .subscribe(previousPrediction =>
        this.dataSource.data = previousPrediction
      );
  }
}
