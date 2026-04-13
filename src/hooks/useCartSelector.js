import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

export default function useCartSelector(product) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items || []);
  const isInCart = cart.some((item) => item.id === product.id);
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return { cart, isInCart, handleAddToCart };
}
