import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
  const category = 'Shigatsu Wa Kimi No Uso';

  test('Debe de mostrar el str "Cargando..." inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    screen.debug();

    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('Debe mostrar items cuando se cargan las imgs useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC1',
        title: 'Favian',
        url: 'https://favian.jpg',
      },

      {
        id: 'ABC2',
        title: 'Gohan',
        url: 'https://Gohan.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
    screen.debug();
  });
});
