import { NgrxTryPage } from './app.po';

describe('ngrx-try App', () => {
  let page: NgrxTryPage;

  beforeEach(() => {
    page = new NgrxTryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
