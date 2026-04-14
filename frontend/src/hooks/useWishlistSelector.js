import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../redux/slices/wishlistSlice";

export default function useWishlistSelector(product) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state?.wishlist?.items || []);
  const isInWishlist = wishlist.some((item) => item.id === product.id);
  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(product));
  };
  return { wishlist, isInWishlist, handleToggleWishlist };
}
