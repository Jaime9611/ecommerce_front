import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Product } from '../../../../models/product';
import { renderWithProviders } from '../../../../tests/test-utils';
import CardList from './CardList';

it('should display the products title and price', () => {
  const products: Product[] = [
    {
      id: '1',
      title: 'Test Game 1',
      description: 'Desc 1',
      price: 30,
      imageUrl: 'image url',
      stock: 1,
      categories: [],
    },
    {
      id: '2',
      title: 'Test Game 2',
      description: 'Desc 2',
      price: 40,
      imageUrl: 'image url',
      stock: 2,
      categories: [],
    },
  ];

  renderWithProviders(
    <BrowserRouter>
      <CardList data={products} />
    </BrowserRouter>,
  );

  expect(screen.getByText(products[0].title)).toBeInTheDocument();
  expect(screen.getByText(`$ ${products[0].price}`)).toBeInTheDocument();
  expect(screen.getByText(products[1].title)).toBeInTheDocument();
  expect(screen.getByText(`$ ${products[1].price}`)).toBeInTheDocument();
});

it('should display the list of products', () => {
  const products: Product[] = [
    {
      id: '1',
      title: 'Test Game 1',
      description: 'Desc 1',
      price: 30,
      imageUrl: 'image url',
      stock: 1,
      categories: [],
    },
    {
      id: '2',
      title: 'Test Game 2',
      description: 'Desc 2',
      price: 40,
      imageUrl: 'image url',
      stock: 1,
      categories: [],
    },
  ];

  renderWithProviders(
    <BrowserRouter>
      <CardList data={products} />
    </BrowserRouter>,
  );

  expect(screen.getAllByRole('heading').length).toBe(products.length);
});
