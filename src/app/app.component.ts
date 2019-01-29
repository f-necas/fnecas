import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
import { routerAnimation } from './animations';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routerAnimation
  ]
})
export class AppComponent {
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }
constructor(private meta: Meta) {
   this.meta.addTags([
     {name: 'og:title', content: 'An online resume by Florian Necas'},
     {name: 'og:description', content: 'A small website to describe my experiences, skills and hobbies.'},
     {name: 'og:url', content: 'https://f-necas.github.io/fnecas/'}
   ]);
}

}

