import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './core/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './core/app.routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { MakePredictionComponent } from './make-prediction/make-prediction.component';
import { MatSelectModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { ToasterModule } from 'angular2-toaster';
import { SignupComponent } from './signup/signup.component';
import { PreviousPredictionComponent } from './previous-prediction/previous-prediction.component';
import { PredictionArchiveComponent } from './prediction-archive/prediction-archive.component';
import { ActualScoresComponent } from './actual-scores/actual-scores.component';
import { ConfigComponent } from './config/config.component';
import { Globals } from './Globals';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    MakePredictionComponent,
    SignupComponent,
    PreviousPredictionComponent,
    PredictionArchiveComponent,
    ActualScoresComponent,
    ConfigComponent
  ],
  imports: [
    MatTableModule,
    MatSortModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    ToasterModule.forRoot()
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
