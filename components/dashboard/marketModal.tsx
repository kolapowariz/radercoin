import { useState } from "react";
import { ModalProps } from "@/lib/types";
import { XMarkIcon } from "@heroicons/react/24/solid";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function MarketModal({ onClose }: ModalProps) {
  const [currency] = useState("usd"); // Default currency
  const { data, error } = useSWR(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=30&page=1&sparkline=false`,
    fetcher
  );

  console.log(data);

  return (
    <div className="fixed z-20 top-[4.5rem] w-[94%] lg:w-[95.6%] left-16 lg:left-20 shadow-lg transition-transform duration-300 h-screen lg:h-[87.7%] bg-[#181e2c] p-4 overflow-scroll">
      <button
        title="Close"
        onClick={onClose}
        className="text-gray-400 hover:text-white hidden"
      >
        <XMarkIcon className="w-5 h-5" />
      </button>

      <section className="mb-4">
        <div className="flex gap-6 text-white text-sm">
          <p className="cursor-pointer hover:text-gray-400">COIN LIST</p>
          <p className="cursor-pointer hover:text-gray-400">MARKET LIST</p>
          <p className="cursor-pointer hover:text-gray-400">HEATMAP</p>
        </div>
      </section>

      <section className="w-full">
        {error ? (
          <p className="text-red-500 text-center">Failed to load data</p>
        ) : (
          <table className="w-full text-xs text-white border-gray-700">
            <thead className="bg-gray-900 border-b-2 border-gray-500">
              <tr className="text-left">
                <th className="p-2">Coin</th>
                <th className="p-2">Price</th>
                <th className="p-2">Direct Vol. 24H</th>
                <th className="p-2">Total Vol. 24H</th>
                <th className="p-2">Market Cap</th>
                <th className="p-2">Chg. 24H</th>
                <th className="p-2">24h High/Low</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800">
              {data ? (
                data.map(
                  (coin: {
                    id: string;
                    current_price: number;
                    total_volume: number;
                    market_cap: number;
                    price_change_percentage_24h: number;
                    high_24h: number;
                    low_24h: number;
                  }) => (
                    <tr
                      key={coin.id}
                      className="hover:bg-gray-700 transition-colors text-left"
                    >
                      <td className="p-2 flex items-center gap-2">
                        {coin.id.toUpperCase()}
                      </td>
                      <td className="p-2">
                        ${coin.current_price.toLocaleString()}
                      </td>
                      <td className="p-2">
                        ${coin.total_volume.toLocaleString()}
                      </td>
                      <td className="p-2">
                        ${coin.total_volume.toLocaleString()}
                      </td>
                      <td className="p-2">
                        ${coin.market_cap.toLocaleString()}
                      </td>
                      <td
                        className={`p-2 ${
                          coin.price_change_percentage_24h >= 0
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </td>
                      <td className="p-2">
                        ${coin.high_24h.toLocaleString()} / $
                        {coin.low_24h.toLocaleString()}
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td colSpan={7} className="text-center p-4">
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}
