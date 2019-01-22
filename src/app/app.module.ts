import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ExperiencesComponent } from './experiences/experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    PageNotFoundComponent,
    MainPageComponent,
    ExperiencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
