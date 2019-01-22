import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, data: { animation: 'HomePage' } },
  { path: 'skills', component: SkillsComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

