import { NgDependceInjectionPage } from './app.po';

describe('ng-dependce-injection App', () => {
  let page: NgDependceInjectionPage;

  beforeEach(() => {
    page = new NgDependceInjectionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
