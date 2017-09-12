import { NgComponentLifecyclePage } from './app.po';

describe('ng-component-lifecycle App', () => {
  let page: NgComponentLifecyclePage;

  beforeEach(() => {
    page = new NgComponentLifecyclePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
