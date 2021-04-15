import { IdcardForm2Component } from './idcard-form2/idcard-form2.component';
import { IDCardFormComponent } from './idcard-form/idcard-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'idcard', component: IDCardFormComponent },
  { path: 'idcard2', component: IdcardForm2Component },
  {

    path: '',
    component: IDCardFormComponent,
    children: [
      {
        path: '',
        pathMatch: 'full', //default
        redirectTo: 'idcard',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
