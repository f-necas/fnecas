import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element.all(by.css('h2 > a')).getText();
  }

  goToExperiences() {
    return element(by.css('a[routerlink="/experiences"]')).click();
  }
}
