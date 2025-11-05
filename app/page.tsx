import Coin from './components/Coin'
import Footer from "./components/Footer";
import Title from './components/Title';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <Title />
      <Coin />
      <Footer />
    </div>
  );
}
