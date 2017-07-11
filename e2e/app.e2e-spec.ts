import { NgxDemoPage } from './app.po';

describe('ngx-demo App', () => {
  let page: NgxDemoPage;

  beforeEach(() => {
    page = new NgxDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
