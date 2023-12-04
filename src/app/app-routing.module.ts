import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { QuestionPaperComponent } from './Components/question-paper/question-paper.component';
import { SessionOutComponent } from './Components/session-out/session-out.component';
import { DashboardComponent } from './Components/Admin-Pages/dashboard/dashboard.component';

const routes: Routes = [{
  path:'',
  component:LoginPageComponent,
},
{
  path:"Questionpaper",
  component:QuestionPaperComponent,
},
{
  path:"sessionout",
  component:SessionOutComponent,
},
{
  path:"dashBoard",
  component:DashboardComponent,
},
{
  path:"**",
  component:DashboardComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
