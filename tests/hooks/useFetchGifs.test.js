import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas el el hook useFetchGifs', () => {
  test('Debe de regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('Sword Art Online'));
    const { images, isLoading } = result.current;
    console.log(images, isLoading);

    expect(images).toMatchObject([]);
    expect(isLoading).toBe(true);
  });

  test('Debe de retornar un arr de imagenes y isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs('Sword Art Online'));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
