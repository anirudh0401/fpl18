import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { LoginComponent } from '../login/login.component';
import { MakePredictionComponent } from '../make-prediction/make-prediction.component';
import { SignupComponent } from '../signup/signup.component';
import { PreviousPredictionComponent } from '../previous-prediction/previous-prediction.component';
import { PredictionArchiveComponent } from '../prediction-archive/prediction-archive.component';

const routes: Routes = [
  { path: 'home', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'makeprediction', component: MakePredictionComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'previousprediction', component: PreviousPredictionComponent },
  { path: 'predictionarchive', component: PredictionArchiveComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
