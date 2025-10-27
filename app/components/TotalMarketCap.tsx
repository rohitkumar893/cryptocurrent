"use client"

import { useEffect, useState } from "react"
import axios from "axios"

export default function MarketCap(){
    const [state, setState] = useState("")

    useEffect(() => {
        const getData = async () => {
            const get = await axios.get('https://api.coinpaprika.com/v1/global');
            const totalMarketCap = get.data.market_cap_usd;
            setState(totalMarketCap)
        }

        getData()
    },[])

    return(
        <div className="flex flex-col items-center justify-center mb-12">
            <h1 className="text-2xl font-semibold text-gray-200 mb-1">Total Market Cap :</h1>
            <h1 className="text-3xl font-semibold text-orange-400">${state}</h1>
        </div>
    )
}