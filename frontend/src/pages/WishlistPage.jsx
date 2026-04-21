import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";
import Button from "../components/Button";

export default function WishlistItem() {
  const items = useSelector((state) => state?.wishlist?.items || []);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromWishlist(id));
  };

  if (items.length === 0) {
    return (
      <>
        <div className="max-w-350 mx-auto px-4 md:px-12 py-6">
          <nav className="text-[14px] leading-5 font-medium">
            <ul className="flex items-center">
              <li className="inline-block px-0.75 text-gray-900 hover:underline cursor-pointer open-sans">
                <Link to="/">Home</Link>
              </li>

              <li className="inline-block px-0.75 text-gray-400">/</li>

              <li className="inline-block px-0.75 text-gray-900 open-sans">
                Wishlist
              </li>
            </ul>
          </nav>
        </div>
        <main className="grow max-w-7xl mx-auto px-6 pb-18">
          <div className="text-center pt-12 pb-6 mb-6 border-b border-neutral-100">
            <h1 className="text-4xl! font-display font-medium mb-2 tracking-tight">
              Wishlist
            </h1>
            <p className="text-zinc-500 open-sans">
              No products in the wishlist.
            </p>
          </div>
          <Link to="/collections">
            <Button>Continue Shopping</Button>
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <div className="max-w-350 mx-auto px-4 md:px-12 py-6">
        <nav className="text-[14px] leading-5 font-medium">
          <ul className="flex items-center">
            <li className="inline-block px-0.75 text-gray-900 hover:underline cursor-pointer open-sans">
              <Link to="/">Home</Link>
            </li>

            <li className="inline-block px-0.75 text-gray-400">/</li>

            <li className="inline-block px-0.75 text-gray-900 open-sans">
              Wishlist
            </li>
          </ul>
        </nav>
      </div>

      <div className=" max-w-7xl mx-auto px-6">
        <h1 className="text-4xl! font-display font-medium text-left mb-14 tracking-tight">
          Wishlist
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-300 mx-auto">
        {items.map((item) => {
          const imageUrl = item?.images?.[0]?.main || item?.image || "";
          return (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center pb-6 md:pb-4 md:border-none border-b border-neutral-300 gap-6 p-4 bg-white transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="w-full md:w-48 md:h-48 flex items-center justify-center overflow-hidden rounded-sm">
                <img
                  src={imageUrl}
                  alt={item.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3 text-center md:text-left">
                <Link to="#">
                  <h4 className="text-lg font-medium text-gray-800 leading-tight">
                    {item.name}
                  </h4>
                </Link>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-primary font-semibold">
                    {item.price}
                  </span>
                </div>
                <button
                  onClick={() => dispatch(handleRemoveItem(item.id))}
                  className="text-sm text-gray-500 hover:text-primary underline cursor-pointer transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
