import { useSelector } from "react-redux";

export default function useWishlist() {
  const wishlistItems = useSelector((state) => state.wishlist?.items || []);
  const wishlistCount = wishlistItems.length;
  return { wishlistItems, wishlistCount };
}
