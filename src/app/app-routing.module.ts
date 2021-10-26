import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JustOneComponent } from './pages/just-one/just-one.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: 'just-one', component: JustOneComponent },
  { path: 'welcome', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
