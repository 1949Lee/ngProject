import { NgRouterPage } from './app.po';

describe('ng-router App', () => {
  let page: NgRouterPage;

  beforeEach(() => {
    page = new NgRouterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
