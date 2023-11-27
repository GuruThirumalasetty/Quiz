import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { AppComponent } from './app.component';
import { QuestionPaperComponent } from './Components/question-paper/question-paper.component';
import { SessionOutComponent } from './Components/session-out/session-out.component';
import { DialogComponent } from './Components/question-paper/dialog/dialog.component';

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
  path:"instructions",
  component:DialogComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
