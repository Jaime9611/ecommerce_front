import { screen } from '@testing-library/react';
import { messages } from '../../../constants/messages';
import { CartProduct } from '../../../store/cart/cart.model';
import { renderWithProviders } from '../../../tests/test-utils';
import CartList from './CartList';

it('should show all the items of the given array', () => {
  const products: CartProduct[] = [
    {
      id: '1',
      title: 'Test Product 1',
      price: 234,
      description: 'Desc',
      imageUrl: 'Image',
      quantity: 2,
      stock: 1,
      categories: [],
    },
    {
      id: '2',
      title: 'Test product 2',
      price: 23,
      description: 'Desc',
      imageUrl: 'Image 2',
      quantity: 1,
      stock: 1,
      categories: [],
    },
  ];

  renderWithProviders(<CartList items={products} />);

  expect(screen.getByText(/Test Product 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Test Product 2/i)).toBeInTheDocument();
});

it('should show a no items message when there are no items', () => {
  const products: CartProduct[] = [] as CartProduct[];

  renderWithProviders(<CartList items={products} />);

  expect(screen.getByText(messages.CART.isEmptyMsg)).toBeInTheDocument();
});
