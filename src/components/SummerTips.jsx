
import "animate.css";
import { Droplets, Sun, Shield, Heart } from "lucide-react";

const tips = [
  {
    icon: Shield,
    title: "UV Protection",
    description:
      "Always wear SPF 50+ sunscreen. Reapply every 2 hours for maximum protection.",
    color: "from-orange-400 to-orange-500",
  },
  {
    icon: Droplets,
    title: "Stay Hydrated",
    description:
      "Drink at least 8 glasses of water daily. Add electrolytes for outdoor activities.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Sun,
    title: "Avoid Peak Sun",
    description:
      "Stay in shade between 10 AM - 4 PM when UV rays are strongest.",
    color: "from-yellow-400 to-orange-400",
  },
  {
    icon: Heart,
    title: "Skin Care Routine",
    description:
      "Use after-sun lotion to soothe and moisturize your skin daily.",
    color: "from-pink-400 to-pink-500",
  },
];

const SummerTips = () => {
  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 sm:mb-16 animate__animated animate__fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Summer Care{" "}
            <span className="bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Tips
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Essential tips to keep you safe and glowing all summer long
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {tips.map((tip, index) => {


            return (
              <div
                key={index}
                className="animate__animated animate__fadeInUp group rounded-3xl p-6 sm:p-7 border border-orange-100 bg-linear-to-br from-orange-50 via-white to-pink-50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br ${tip.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  < tip.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

             
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {tip.title}
                </h3>

             
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SummerTips;