import Image from "next/image";
import "animate.css";
import { Eye, Star, ShoppingCart } from "lucide-react";
import Link from "next/link";

const ProductCard = ({ product }) => {


  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden border border-orange-100 hover:border-orange-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="relative overflow-hidden aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1.5 bg-linear-to-r from-orange-500 to-pink-500 text-white text-xs font-semibold rounded-full shadow-md">
            {product.category}
          </span>
        </div>


        {product.stock < 20 && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1.5 bg-red-500 text-white text-xs font-semibold rounded-full shadow-md">
              Only {product.stock} left
            </span>
          </div>
        )}

        {/* overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-5 px-4">
          <Link
            href={`/products/${product.id}`}
            className="w-full py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            <Eye className="w-4 h-4" />
            View Details
          </Link>
        </div>
      </div>

      {/* content */}
      <div className="p-5 sm:p-6 space-y-4">

        <div className="flex items-center justify-between gap-3">
          <span className="text-sm text-orange-600 font-semibold truncate">
            {product.brand}
          </span>

          <div className="flex items-center gap-1 shrink-0">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-700">
              {product.rating}
            </span>
          </div>
        </div>


        <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors leading-snug min-h-14">
          {product.name}
        </h3>

        <div className="flex items-center justify-between pt-1">
          <div>
            <p className="text-2xl font-bold text-gray-900">
              ${product.price}
            </p>
          </div>

          <button className="p-3 bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-2xl hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all duration-300">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;