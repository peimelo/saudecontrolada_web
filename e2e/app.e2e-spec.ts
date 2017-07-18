import { HealthyAngularPage } from './app.po';

describe('healthy-angular App', () => {
  let page: HealthyAngularPage;

  beforeEach(() => {
    page = new HealthyAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
