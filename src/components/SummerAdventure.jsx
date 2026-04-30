import Link from "next/link";
import "animate.css";

const SummerAdventure = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-linear-to-br from-orange-500 via-pink-500 to-orange-400 text-white">

        
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 sm:space-y-8 animate__animated animate__fadeInUp">

       
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Ready for Your
            <span className="block mt-2">Summer Adventure?</span>
          </h2>

         
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of happy customers enjoying their summer with our
            premium products. Special offers available now!
          </p>

          {/* buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Get Started
            </Link>

            <Link
              href="/products"
              className="w-full sm:w-auto px-8 py-4 bg-white/15 backdrop-blur-md border-2 border-white/70 text-white rounded-xl font-semibold hover:bg-white/25 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerAdventure;