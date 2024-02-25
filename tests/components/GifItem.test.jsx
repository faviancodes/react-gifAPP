import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem/>', () => {
  const title = 'Favian';
  const url = 'https://www.twitch.tv/';

  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url} />);

    screen.debug();
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Debe de mostar el title en el components', () => {
    render(<GifItem title={title} url={url} />);
    const { innerHTML } = screen.getByLabelText('paragraph');
    expect(innerHTML).toBe(title);
  });
});
