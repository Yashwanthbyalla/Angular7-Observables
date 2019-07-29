import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycomponentComponent } from "src/app/mycomponent/mycomponent.component";

const routes: Routes = [
  { path: '', component: MycomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
