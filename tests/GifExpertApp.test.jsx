import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en GifExpertApp', () => {
  const newCategory = 'Goblin Slayer';

  test('Debe de haber un h1 con el str "GifExpertApp"', () => {
    render(<GifExpertApp />);

    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(
      'GifExpertApp'
    );
  });

  test('Debe de agregar una nueva categoria al arr si es que no existe', () => {
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form);
    screen.debug();
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);
  });

  test('No debe agregar una nueva categoria si ya existe', () => {
    render(<GifExpertApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    // Agregando 'Goblin Slayer' 1 vez
    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form);

    // Agregando 'Goblin Slayer' 2 vez
    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form);

    screen.debug();
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2);
  });
});
