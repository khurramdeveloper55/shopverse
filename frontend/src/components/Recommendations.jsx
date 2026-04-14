import { Link, useParams } from "react-router-dom";
import { Heart } from "lucide-react";

export default function Recommendations({ products }) {
  const { categoryName } = useParams();
  return (
    <section className="container mx-auto px-4 md:py-16 py-10">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-semibold tracking-tight">
          You May Also Like
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative aspect-4/5 bg-gray-100 overflow-hidden mb-4  cursor-pointer">
              <img
                src={product.images[0].main}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={product.name}
              />
              {/* Overlay Actions */}

              <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:text-white hover:bg-[#a8741a]">
                <Heart className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[14px] text-gray-500 font-semibold tracking-[0.3em] uppercase mb-1">
              {product.vendor}
            </p>
            <Link to={`/collections/${categoryName}/product/${product.slug}`}>
              <h3 className="text-xl! font-semibold! text-gray-800 mb-2 leading-snug hover:text-[#a8741a] transition-colors line-clamp-2">
                {product.name}
              </h3>
            </Link>
            <div className="flex items-center justify-center gap-2  ">
              <span className="text-md font-semibold text-gray-900 ">
                Rs. {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
