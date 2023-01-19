// jest.mock('react-redux', () => {
//   return {
//     useSelector: () => {
//       return { items: [] };
//     },
//   };
// });
import { render, screen } from '@testing-library/react';
import { messages } from '../../../constants/messages';
import { renderWithProviders } from '../../../tests/test-utils';
import Cart from './Cart';

it('should show on the Document is Cart is Open', () => {
  renderWithProviders(<Cart open={true} onClose={() => {}} />);

  expect(screen.getByText(messages.CART.isEmptyMsg)).toBeInTheDocument();
});

it('should show a message of no items when there are no items', () => {
  renderWithProviders(<Cart open={true} onClose={() => {}} />);
  expect(screen.getByText(messages.CART.isEmptyMsg)).toBeInTheDocument();
});

describe('When the Cart has 1 or more items', () => {
  const cartTest = {
    items: [
      {
        id: '1',
        title: 'Test product 1',
        price: 40,
        imageUrl: 'Img 1',
        description: 'Product Descp 1',
        quantity: 2,
      },
      {
        id: '2',
        title: 'Test product 2',
        price: 40,
        imageUrl: 'Img 2',
        description: 'Product Descp 2',
        quantity: 3,
      },
    ],
    cartTotal: 0,
  };

  beforeEach(() => {
    renderWithProviders(<Cart open={true} onClose={() => {}} />, {
      preloadedState: { cart: cartTest },
    });
  });

  it('should display all items from the cart', () => {
    expect(screen.getByText(cartTest.items[0].title)).toBeInTheDocument();
    expect(screen.getByText(cartTest.items[1].title)).toBeInTheDocument();
  });

  describe('When the add button is clicked', () => {
    // TODO: Add functionality
    it('should increase the quantity of a product', () => {});
    // TODO: Add total price
    it('should increase the total price of the Cart', () => {});
  });
});
