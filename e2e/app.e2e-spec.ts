import { FirebaseExPage } from './app.po';

describe('firebase-ex App', () => {
  let page: FirebaseExPage;

  beforeEach(() => {
    page = new FirebaseExPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
