import { browser, by, element } from 'protractor';

export class ExpPage {
  navigateTo() {
    return browser.get('/experiences');
  }

  getTitles() {
    return element.all(by.css('h2.sp-title'));
  }

}
