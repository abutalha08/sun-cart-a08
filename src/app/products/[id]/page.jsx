import Image from "next/image";
import "animate.css";
import {
    Star,
    Truck,
    ShieldCheck,
    RefreshCcw,
    ShoppingCart,
    Heart,
    Share2,
} from "lucide-react";

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("https://sun-cart-a08.vercel.app/products.json");
    const products = await res.json();

    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-red-500">
                Product not found
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-linear-to-br from-orange-50 via-white to-pink-50 py-10 sm:py-14 lg:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden grid lg:grid-cols-2 gap-0">

                    {/* LEFT IMAGE */}
                    <div className="relative bg-linear-to-br from-orange-50 to-pink-50 p-6 sm:p-10 flex items-center justify-center animate__animated animate__fadeInLeft">
                        <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                priority
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>


                        <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
                            <span className="px-4 py-2 rounded-full bg-linear-to-r from-orange-500 to-pink-500 text-white text-sm font-semibold shadow-lg">
                                {product.category}
                            </span>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="p-6 sm:p-8 lg:p-12 animate__animated animate__fadeInRight">

                        <p className="text-orange-600 font-bold text-sm uppercase tracking-wider mb-3">
                            {product.brand}
                        </p>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                            {product.name}
                        </h1>

                        {/* rating + stock */}
                        <div className="flex flex-wrap items-center gap-4 mt-5">
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                <span className="font-semibold text-gray-800">
                                    {product.rating}
                                </span>
                            </div>

                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>

                            <span
                                className={`font-medium ${product.stock < 20 ? "text-red-500" : "text-green-600"
                                    }`}
                            >
                                {product.stock} in stock
                            </span>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-4xl sm:text-5xl font-black bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                                ${product.price}
                            </h2>
                        </div>

                        <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                            {product.description}
                        </p>

                        {/* features */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                            <div className="bg-orange-50 rounded-2xl p-5 text-center border border-orange-100 hover:shadow-md transition">
                                <Truck className="w-7 h-7 text-orange-500 mx-auto mb-2" />
                                <p className="font-semibold text-gray-800 text-sm">
                                    Free Shipping
                                </p>
                            </div>

                            <div className="bg-blue-50 rounded-2xl p-5 text-center border border-blue-100 hover:shadow-md transition">
                                <ShieldCheck className="w-7 h-7 text-blue-600 mx-auto mb-2" />
                                <p className="font-semibold text-gray-800 text-sm">
                                    Secure Payment
                                </p>
                            </div>

                            <div className="bg-green-50 rounded-2xl p-5 text-center border border-green-100 hover:shadow-md transition">
                                <RefreshCcw className="w-7 h-7 text-green-600 mx-auto mb-2" />
                                <p className="font-semibold text-gray-800 text-sm">
                                    Easy Returns
                                </p>
                            </div>
                        </div>

                        {/* buttons */}
                        <div className="flex flex-wrap gap-3 mt-10">
                            <button className="flex-1 min-w-56 bg-linear-to-r from-orange-500 to-pink-500 text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300">
                                <ShoppingCart className="w-5 h-5" />
                                Add to Cart
                            </button>

                            <button className="p-4 border-2 border-orange-100 rounded-2xl text-orange-600 hover:bg-orange-50 hover:scale-105 transition-all">
                                <Heart className="w-6 h-6" />
                            </button>

                            <button className="p-4 border-2 border-orange-100 rounded-2xl text-orange-600 hover:bg-orange-50 hover:scale-105 transition-all">
                                <Share2 className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailsPage;