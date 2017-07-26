import { TaskyPage } from './app.po';

describe('tasky App', () => {
  let page: TaskyPage;

  beforeEach(() => {
    page = new TaskyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
