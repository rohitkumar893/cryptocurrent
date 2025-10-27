"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

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

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        // Fetch all tickers
        const res = await axios.get("https://api.coinpaprika.com/v1/tickers");
        // Sort by market cap rank & take top 9
        const top9 = res.data
          .sort((a: any, b: any) => a.rank - b.rank)
          .slice(0, 9);
        setCoins(top9);
      } catch (err) {
        console.error("Error fetching coins:", err);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className="h-full w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {coins.map((coin, i) => (
        <div
          key={i}
          className="flex flex-col gap-6 items-center justify-center hover:bg-gray-800 border-2 border-gray-500 bg-gray-600 rounded-2xl min-w-52 h-[350px] shadow-xl w-[300px]"
        >
          <Image
            src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
            alt={coin.name}
            width={90}
            height={90}
          />
          <h1 className="font-semibold text-3xl text-red-400">{coin.name}</h1>
          <h1 className="font-semibold text-2xl text-gray-100">
            ${coin.quotes.USD.price.toFixed(2)}
          </h1>
        </div>
      ))}
    </div>
  );
}
