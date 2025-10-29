"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Loading from "@/app/components/Loading"

interface Coin {
  id: string;
  name: string;
  symbol: string;
  quotes: {
    USD: {
      price: number;
    };
  };
}

export default function Coin() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        // Fetch all tickers
        const res = await axios.get("https://api.coinpaprika.com/v1/tickers");
        // Sort by market cap rank & take top 9
        const top24 = res.data
          .sort((a: any, b: any) => a.rank - b.rank)
          .slice(0, 24);
        setCoins(top24);
        setLoading(false)
      } catch (err) {
        console.error("Error fetching coins:", err);
      }
    };

    fetchCoins();
  }, []);

  if(loading){
    return(
      <div className="flex justify-center items-center h-screen w-screen bg-[#0a0a0a] top-0 left-0 fixed">
        <Loading />
      </div>
    )
  }

  return (
    <div className="h-full w-[74%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
      {coins.map((coin, i) => (
        <div
          key={i}
          className="flex flex-col gap-5 items-center justify-center hover:bg-gray-600  border-gray-500 bg-gray-700 rounded-2xl min-w-52 h-[320px] shadow-xl w-[280px]"
        >
          <Image
            src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
            alt={coin.name}
            width={80}
            height={80}
          />
          <h1 className="font-semibold text-3xl text-blue-400 text-center">{coin.name}</h1>
          <h1 className="font-semibold text-2xl text-gray-100">
            ${coin.quotes.USD.price.toFixed(2)}
          </h1>
        </div>
      ))}
    </div>
  );
}
