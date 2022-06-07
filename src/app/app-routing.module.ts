import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccessComponent} from "./user/public/access/access.component";

const routes: Routes = [
  {path: '', component: AccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
