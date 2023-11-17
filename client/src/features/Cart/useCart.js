import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  deleteCartItem,
  setSession as setSessionCart,
} from './cartSlice';
import {
  checkoutCart as checkoutApi,
  getSessionById,
} from '../../services/apiCart';
import { setSession as setSessionStripe } from '../Stripe/stripeSlice';
import { useMemo, useState } from 'react';
import { calculateTotalQuantity } from '../../utils/helpers';

export default function useCart() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const { cart, session } = useSelector((store) => store.cart);
  const { status, customer } = useSelector((store) => store.stripe);

  const count = useMemo(() => {
    return cart.reduce(calculateTotalQuantity, 0);
  }, [cart]);

  const deleteCart = (id) => dispatch(deleteCartItem(id));

  const resetCart = () => dispatch(clearCart());

  const setCartSession = (id) => dispatch(setSessionCart(id));

  const setStripeSession = (id, status, customer) =>
    dispatch(setSessionStripe(id, status, customer));

  const checkoutCart = async () => {
    setIsLoading(true);
    const response = await checkoutApi(cart);

    if (await response.url) {
      setCartSession(response.session.id);
      window.location.assign(response.url);
    }
  };

  const getSession = async () => {
    try {
      const response = await getSessionById(session);

      if (response.status) {
        setStripeSession(session, response.status, response.customer);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    cart,
    session,
    count,
    deleteCart,
    checkoutCart,
    resetCart,
    isLoading,
    setIsLoading,
    getSession,
    status,
    customer,
  };
}
