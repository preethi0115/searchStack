import { SearchStackPage } from './app.po';

describe('search-stack App', function() {
  let page: SearchStackPage;

  beforeEach(() => {
    page = new SearchStackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
