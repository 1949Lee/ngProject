import { NgDataBindingPage } from './app.po';

describe('ng-data-binding App', () => {
  let page: NgDataBindingPage;

  beforeEach(() => {
    page = new NgDataBindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
