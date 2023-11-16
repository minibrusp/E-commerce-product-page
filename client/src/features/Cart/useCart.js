import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem } from './cartSlice';
import { checkoutCart as checkoutApi } from '../../services/apiCart';
import { useMemo } from 'react';
import { calculateTotalQuantity } from '../../utils/helpers';

export default function useCart() {
  const dispatch = useDispatch();

  const { cart } = useSelector((store) => store.cart);

  const count = useMemo(() => {
    return cart.reduce(calculateTotalQuantity, 0);
  }, [cart]);

  const deleteCart = (id) => dispatch(deleteCartItem(id));

  const checkoutCart = async () => {
    const response = await checkoutApi(cart);

    if (await response.url) window.location.assign(await response.url);
  };

  return { cart, count, deleteCart, checkoutCart };
}
