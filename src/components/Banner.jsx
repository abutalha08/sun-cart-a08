
import Image from "next/image";
import "animate.css";
import { Sparkles, ArrowRight } from "lucide-react";

const Banner = () => {
    return (
        
        <section className="relative overflow-hidden bg-linear-to-br from-orange-50 via-pink-50 to-yellow-50">

            {/* background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,146,60,0.12),transparent_45%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.12),transparent_45%)]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-8">

                        {/* Badge */}
                        <div className="animate__animated animate__fadeInDown inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200 shadow-sm">
                            <Sparkles className="w-4 h-4 text-orange-500" />
                            <span className="text-sm font-medium text-orange-600">
                                Summer Sale 2026
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="animate__animated animate__fadeInLeft text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
                            Make This
                            <span className="block bg-linear-to-r from-orange-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                                Summer Special
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="animate__animated animate__fadeInLeft animate__delay-1s text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                            Discover the hottest collection of summer essentials. From beach
                            accessories to stylish outfits, we've got everything for your
                            perfect summer.
                        </p>

                        {/* Buttons */}
                        <div className="animate__animated animate__fadeInUp animate__delay-1s flex flex-col sm:flex-row gap-4">
                            <button className="group px-8 py-4 bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 font-semibold flex items-center justify-center gap-2">
                                Shop Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="px-8 py-4 bg-white text-gray-700 rounded-xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300 font-semibold">
                                View Collection
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="animate__animated animate__fadeInUp animate__delay-2s flex flex-wrap items-center gap-6 sm:gap-8 pt-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">50%</div>
                                <div className="text-sm text-gray-600">Off Sale</div>
                            </div>

                            <div className="hidden sm:block h-12 w-px bg-orange-200" />

                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">100+</div>
                                <div className="text-sm text-gray-600">Products</div>
                            </div>

                            <div className="hidden sm:block h-12 w-px bg-orange-200" />

                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">24/7</div>
                                <div className="text-sm text-gray-600">Support</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="relative animate__animated animate__zoomIn">


                        {/* Decorative blur */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-300/25 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-pink-300/20 rounded-full blur-3xl" />

                        {/* Image */}
                        <div className="relative z-10 overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] ">
                            <Image
                                src="https://images.unsplash.com/photo-1744117358475-f13e0e26a730?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VtbWVyJTIwc2tpaW4lMjBjYXJlfGVufDB8fDB8fHwy"
                                alt="Summer vibes"
                                width={700}
                                height={820}
                                priority
                                className="w-full max-w-[580px] h-[450px] sm:h-[550px] lg:h-[580px] mx-auto object-cover rounded-[28px] hover:scale-105 transition-all duration-700"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-black/5 via-transparent to-white/10 pointer-events-none" />
                        </div>

                        {/* Hot Deals */}
                        <div className="absolute top-8 -left-6 sm:-left-10 z-20 animate__animated animate__fadeInLeft animate__infinite animate__slow bg-white px-5 py-4 rounded-2xl shadow-xl border border-orange-100 min-w-[170px]">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-linear-to-r from-orange-500 to-pink-500 flex items-center justify-center text-2xl shadow-lg">
                                    🔥
                                </div>

                                <div>
                                    <p className="text-xs font-medium text-gray-500">
                                        Special Offer
                                    </p>
                                    <h4 className="font-bold text-gray-900">Hot Deals</h4>
                                </div>
                            </div>
                        </div>

                        {/* Summer Ready */}
                        <div className="absolute bottom-8 -right-6 sm:-right-10 z-20 animate__animated animate__fadeInRight animate__infinite animate__slow bg-white px-5 py-4 rounded-2xl shadow-xl border border-orange-100 min-w-[190px]">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-2xl">
                                    ☀️
                                </div>

                                <div>
                                    <p className="text-xs font-medium text-gray-500">
                                        New Collection
                                    </p>
                                    <h4 className="font-bold text-gray-900">Summer Ready</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;