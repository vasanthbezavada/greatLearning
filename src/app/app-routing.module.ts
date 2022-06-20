import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ModificationComponent } from './modification/modification.component';


const routes: Routes = [
  {path:"",redirectTo:"list",pathMatch:"full"},
  {path:"add",component:RegistrationComponent},
  {path:"list",component:ModificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
