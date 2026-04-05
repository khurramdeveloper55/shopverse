const wishlistData = [
  {
    id: 1,
    title: "Men's Skeleton Automatic Mechanical Watch",
    price: "Rs. 25.00",
    imageUrl: "https://picsum.photos/seed/watch1/300/300",
  },
  {
    id: 2,
    title: "Kids Colorful Waterproof Digital Watch",
    price: "Rs. 25.00",
    imageUrl: "https://picsum.photos/seed/watch2/300/300",
  },
  {
    id: 3,
    title: "Dual Time Zone Stainless Steel Watch",
    price: "Rs. 15.00",
    imageUrl: "https://picsum.photos/seed/watch3/300/300",
  },
  {
    id: 4,
    title: "Luxury Gold-Plated Chronograph Watch",
    price: "Rs. 25.00",
    imageUrl: "https://picsum.photos/seed/watch4/300/300",
  },
  {
    id: 5,
    title: "Classic Leather Strap Analog Watch",
    price: "Rs. 0.00",
    imageUrl: "https://picsum.photos/seed/watch5/300/300",
  },
  {
    id: 6,
    title: "Minimalist Black Dial Quartz Watch",
    price: "Rs. 25.00",
    oldPrice: "Rs. 32.00",
    imageUrl: "https://picsum.photos/seed/watch6/300/300",
  },
  {
    id: 7,
    title: "Military Tactical Digital Watch",
    price: "Rs. 25.00",
    imageUrl: "https://picsum.photos/seed/watch7/300/300",
  },
];

export default function WishlistItem() {
  return (
    <>
      <div className="max-w-7xl mx-auto w-full px-4 py-8">
        <nav className="text-sm text-gray-500 flex items-center gap-2">
          <a href="#" className="hover:text-primary transition-colors">
            Home
          </a>
          <span>/</span>
          <span className="text-gray-800">Wishlist</span>
        </nav>
      </div>
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-16 tracking-tight">
        Wishlist
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistData.map((item) => (
          <div className="flex flex-col md:flex-row items-center gap-6 p-4 bg-white hover:shadow-md transition-shadow duration-300 group">
            {/* Image Container */}
            <div className="w-full md:w-48 h-48 bg-gray-50 flex items-center justify-center overflow-hidden rounded-sm">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-3 text-center md:text-left">
              <h4 className="text-lg font-medium text-gray-800 leading-tight">
                {item.title}
              </h4>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-primary font-semibold">{item.price}</span>
                {item.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    {item.oldPrice}
                  </span>
                )}
              </div>
              <button className="text-sm text-gray-500 hover:text-primary underline cursor-pointer transition-colors">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
