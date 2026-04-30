import ProductCard from '@/components/ProductCard';
import React from 'react';

const ProductsPage = async() => {

    const res = await fetch("https://sun-cart-a08.vercel.app/products.json")
    const products = await res.json()


    return (
         <div className="min-h-screen bg-linear-to-br from-orange-50/50 to-pink-50/50">

      {/* HERO */}
      <section className="bg-linear-to-br from-orange-500 via-pink-500 to-orange-400 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">

          <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
            Summer Collection
          </h1>

          <p className="text-xl text-white/90 max-w-2xl mx-auto animate__animated animate__fadeInUp">
            Explore our complete range of premium summer essentials
          </p>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}

        </div>

      </section>

    </div>
    );
};

export default ProductsPage;