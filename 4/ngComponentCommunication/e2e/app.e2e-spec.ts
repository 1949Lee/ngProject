import { NgComponentCommunicationPage } from './app.po';

describe('ng-component-communication App', () => {
  let page: NgComponentCommunicationPage;

  beforeEach(() => {
    page = new NgComponentCommunicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
