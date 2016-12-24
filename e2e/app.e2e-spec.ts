import { SubirImagenesPublicPage } from './app.po';

describe('subir-imagenes-public App', function() {
  let page: SubirImagenesPublicPage;

  beforeEach(() => {
    page = new SubirImagenesPublicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
