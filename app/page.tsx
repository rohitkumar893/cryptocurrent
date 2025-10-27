import Image from "next/image";
import Coin from './components/Coin'
import Search from "./components/Search";
import Footer from "./components/Footer";
import MarketCap from "./components/TotalMarketCap";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <Search />
      <MarketCap />
      <Coin />
      <Footer />
    </div>
  );
}
