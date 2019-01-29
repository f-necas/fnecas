import { AppPage } from './app.po';
import { ExpPage } from './experiences.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let exp: ExpPage;

  beforeEach(() => {
    page = new AppPage();
    exp = new ExpPage();
  });

  it('should contain experiences skills and hobbies', () => {
    page.navigateTo();
    expect(page.getTitleText()).toContain('EXPERIENCES');
    expect(page.getTitleText()).toContain('SKILLS');
    expect(page.getTitleText()).toContain('HOBBIES');
  });

  it('should go to Experiences page and count number of experiences', () => {
    page.goToExperiences();
    expect(exp.getTitles().count()).toBe(6);
  });
});
