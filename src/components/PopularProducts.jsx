import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import ProductCard from './ProductCard';

const PopularProducts = async() => {

    const res = await fetch("https://sun-cart-a08.vercel.app/products.json")
    const products = await res.json()

    const PopularProducts = products.slice(0, 3);

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     
        <div className="text-center mb-12 sm:mb-16 animate__animated animate__fadeInUp">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-5 shadow-sm">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-600">
              FEATURED COLLECTION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Popular{" "}
            <span className="bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Products
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our most-loved summer essentials, handpicked for you
          </p>
        </div>

        {/* products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {
          
          PopularProducts.map(product => (
            <div
              key={product.id}
              className="animate__animated animate__fadeInUp"
              style={{
                animationDelay: `${product.id * 0.15}s`,
              }}
            >
              <Link href={`/products/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-14 text-center animate__animated animate__fadeInUp">
          <Link
            href="/products"
            className="inline-block px-7 sm:px-8 py-3.5 sm:py-4 bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-xl hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
    );
};

export default PopularProducts;