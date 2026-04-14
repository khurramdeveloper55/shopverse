import { useSelector } from "react-redux";

export default function useCart() {
  const cartItems = useSelector((state) => state.cart?.items || []);
  const cartCount = cartItems.reduce((total, item) => {
    return total + (item.quantity || 1);
  }, 0);

  return { cartItems, cartCount };
}
