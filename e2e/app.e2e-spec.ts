import { OrganizerPage } from './app.po';

describe('organizer App', function() {
  let page: OrganizerPage;

  beforeEach(() => {
    page = new OrganizerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
