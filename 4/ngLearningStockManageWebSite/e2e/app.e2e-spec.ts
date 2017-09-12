import { NgLearningStockManageWebSitePage } from './app.po';

describe('ng-learning-stock-manage-web-site App', () => {
  let page: NgLearningStockManageWebSitePage;

  beforeEach(() => {
    page = new NgLearningStockManageWebSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
