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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routerAnimation
  ]
})
export class AppComponent {
  title = 'oc';
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }
}

