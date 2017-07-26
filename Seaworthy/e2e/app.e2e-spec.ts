import { SeaworthyPage } from './app.po';

describe('seaworthy App', () => {
  let page: SeaworthyPage;

  beforeEach(() => {
    page = new SeaworthyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
