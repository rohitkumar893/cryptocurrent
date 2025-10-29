import Coin from './components/Coin'
import Search from "./components/Search";
import Footer from "./components/Footer";
import MarketCap from "./components/TotalMarketCap";
import Title from './components/Title';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <Title />
      <Search />
      <MarketCap />
      <Coin />
      <Footer />
    </div>
  );
}
