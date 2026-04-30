import Banner from "@/components/Banner";
import PopularProducts from "@/components/PopularProducts";
import SummerAdventure from "@/components/SummerAdventure";
import SummerTips from "@/components/SummerTips";
import TopBrands from "@/components/TopBrands";


export default function Home() {
  return (
    <div >
     <Banner></Banner>
     <PopularProducts></PopularProducts>
     <SummerTips></SummerTips>
     <TopBrands></TopBrands>
     <SummerAdventure></SummerAdventure>
    </div>
  );
}
