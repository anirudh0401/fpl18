import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from './user';
import { ApplicationServiceService } from "../../../e2e/app/application-service.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Array<User>;

  displayedColumns = ['Rank', 'Name', 'Team', 'GoldenBoot', 'GoldenGlove', 'Points'];
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatSort) sort: MatSort;
  constructor(private _ApplicationServiceService: ApplicationServiceService) {
  }

  ngOnInit() {
    this.getUsers();
    this.dataSource.sort = this.sort;
  }

  getUsers() {
    this._ApplicationServiceService.getUsers()
      .subscribe(users =>
        this.dataSource.data = users
      );
  }
}
