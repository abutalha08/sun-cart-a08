
import "animate.css";
import { Award, TrendingUp, Users, Zap } from "lucide-react";

const brands = [
  {
    name: "SunShade",
    category: "Premium Eyewear",
    icon: Award,
    color: "from-orange-500 to-orange-600",
    description: "UV400 Protection Specialists",
  },
  {
    name: "BeachVibes",
    category: "Summer Fashion",
    icon: TrendingUp,
    color: "from-pink-500 to-pink-600",
    description: "Trendsetting Collections",
  },
  {
    name: "SkinGuard",
    category: "Skincare Experts",
    icon: Users,
    color: "from-blue-500 to-cyan-600",
    description: "Trusted by Millions",
  },
  {
    name: "CoastalChic",
    category: "Beach Lifestyle",
    icon: Zap,
    color: "from-purple-500 to-purple-600",
    description: "Fast Shipping Guarantee",
  },
];

const TopBrands = () => {
  return (
    <section className="py-16 sm:py-20 bg-linear-to-br from-gray-50 via-orange-50/50 to-pink-50/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center mb-12 sm:mb-16 animate__animated animate__fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Top{" "}
            <span className="bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Brands
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Partnering with the best summer brands worldwide
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {brands.map((brand, index) => {
            const Icon = brand.icon;

            return (
              <div
                key={index}
                className="animate__animated animate__fadeInUp bg-white rounded-3xl p-7 sm:p-8 text-center border border-orange-100 hover:border-orange-300 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                
                <div
                  className={`w-16 h-16 sm:w-18 sm:h-18 bg-linear-to-br ${brand.color} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

            
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {brand.name}
                </h3>

                <p className="text-sm font-semibold text-orange-600 mb-3">
                  {brand.category}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {brand.description}
                </p>
              </div>
            );
          })}
        </div>


        <div className="mt-12 sm:mt-14 text-center animate__animated animate__fadeInUp">
          <button className="px-7 sm:px-8 py-3.5 sm:py-4 bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-xl hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold">
            View All Brands
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopBrands;