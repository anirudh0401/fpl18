import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ApplicationServiceService } from "../../../e2e/app/application-service.service";
import { PreviousPrediction } from './preciousPrediction';

@Component({
  selector: 'app-previous-prediction',
  templateUrl: './previous-prediction.component.html',
  styleUrls: ['./previous-prediction.component.css']
})
export class PreviousPredictionComponent implements OnInit {

  displayedColumns = ['Match', 'MatchWinner', 'GoalDifference', 'TotalGoals', 'TotalCards', 'ManOfMatch', 'ModifiedDate', 'Points'];
  dataSource = new MatTableDataSource<PreviousPrediction>();

  @ViewChild(MatSort) sort: MatSort;
  constructor(private _ApplicationServiceService: ApplicationServiceService) {
  }

  ngOnInit() {
    this.getpreviousPrediction();
    this.dataSource.sort = this.sort;
  }

  getpreviousPrediction() {
    this._ApplicationServiceService.getpreviousPrediction()
      .subscribe(previousPrediction =>
        this.dataSource.data = previousPrediction
      );
  }
}
