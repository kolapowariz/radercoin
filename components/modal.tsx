"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { fetchSuggestions, fetchCoinDetails } from "@/lib/data";
import useSWR from "swr";
import { RealModalProps } from "@/types";
import useDebounce from "@/lib/useDebounce";


export default function Modal({ setSelectedCoin: onSelectCoin }: RealModalProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCoin, setSelectedCoin] = useState<{
    id: string;
    name: string;
    symbol: string;
    thumb: string;
  } | null>(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const formatNumber = (num: number): string => {
    if (Math.abs(num) >= 1e12) {
      return (num / 1e12).toFixed(2) + "T";
    } else if (Math.abs(num) >= 1e9) {
      return (num / 1e9).toFixed(2) + "B";
    } else if (Math.abs(num) >= 1e6) {
      return (num / 1e6).toFixed(2) + "M";
    } else if (Math.abs(num) >= 1e3) {
      return (num / 1e3).toFixed(2) + "K";
    } else {
      return num.toString();
    }
  };

  const formatDecimal = (num: number) => {
    return num.toFixed(2);
  };

  const { data: suggestions, error: suggestionsError } = useSWR<
    { id: string; name: string; symbol: string; thumb: string }[]
  >(
    debouncedSearchTerm ? [`suggestions`, debouncedSearchTerm] : null,
    ([, query]: [string, string]) => fetchSuggestions(query),
    {
      revalidateOnFocus: false,
      dedupingInterval: 5000,
    }
  );

  const { data: coinDetails, error: coinDetailsError } = useSWR<{
    name: string;
    symbol: string;
    market_data: {
      current_price: { usd: number };
      high_24h: { usd: number };
      price_change_percentage_24h: number;
      market_cap: { usd: number };
      total_volume: { usd: number };
      market_cap_change_24h_in_currency: { usd: number };
    };
  }>(
    selectedCoin ? [`coin-details`, selectedCoin.id] : null,
    ([, id]: [string, string]) => fetchCoinDetails(id),
    {
      revalidateOnFocus: false,
      dedupingInterval: 5000,
    }
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSuggestionClick = (coin: {
    id: string;
    name: string;
    symbol: string;
    thumb: string;
  }) => {
    setSelectedCoin(coin);
    onSelectCoin(coin);
    setSearchTerm("");
  };

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  if (suggestionsError) {
    return <p className="text-red-500">Failed to fetch suggestion data.</p>;
  }

  if (coinDetailsError) {
    return <p className="text-red-500">Failed to fetch coin details data.</p>;
  }

  return (
    <div className="text-white w-[17rem] lg:w-[17.5rem] xl:w-[18rem] mt-[-5rem] h-screen lg:h-[88%] lg:top-20 absolute top-0 flex items-center z-10">
      {isOpen && (
        <div className="modal bg-[#1d2436] w-[100%] h-[100%]">
          <div className="modal-content">
            <section className="flex justify-between items-center mt-2 px-2 bg-[#181e2c] py-2 w-[95%] mx-auto">
              <p className="text-xs">WATCHLIST</p>
              <input
                type="text"
                name="search"
                value={searchTerm}
                onChange={handleSearchChange}
                id="search"
                className="w-24 h-6 rounded-sm bg-gray-700 placeholder:text-sm px-1"
                placeholder="Search..."
              />
            </section>

            {suggestions && suggestions.length > 0 && (
              <ul className="border border-gray-300 rounded-lg mt-2 bg-white shadow-md text-black absolute z-10">
                {suggestions.map((coin) => (
                  <li
                    key={coin.id}
                    onClick={() => handleSuggestionClick(coin)}
                    className="cursor-pointer px-4 hover:bg-gray-100"
                  >
                    <div className="flex items-center space-x-2">
                      <span>
                        {coin.name} ({coin.symbol.toUpperCase()})
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <section className="w-full text-xs text-gray-500 h-[27rem] overflow-y-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-900 border-b-2 border-gray-500 sticky top-0">
                  <tr>
                    <th className="py-2">Symbol</th>
                    <th className="text-right py-2 px-4">Last</th>
                    <th className="py-2 text-right">Chng (%)</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-white cursor-pointer bg-gray-800">
                  {coinDetails && coinDetails.market_data ? (
                    <tr className="hover:bg-gray-700">
                      <td className="px-2 py-2">
                        {coinDetails.symbol.toUpperCase()}/USDT
                      </td>
                      <td className="px-6 py-2 text-right">
                        {coinDetails.market_data.current_price.usd}
                      </td>
                      <td
                        className={`px-2 py-2 text-right ${
                          coinDetails.market_data.price_change_percentage_24h >
                          0
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {coinDetails.market_data.price_change_percentage_24h}%
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <td colSpan={3} className="text-center py-4">
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </section>

            {coinDetails && (
              <section className="bg-[#171a29] h-screen mt-2">
                <p className="bg-[#262b3e] px-2 py-3 text-xs text-gray-400">
                  DETAILS
                </p>
                <section className="mt-4 w-[95%] mx-auto text-gray-300">
                  <p>{coinDetails.symbol.toUpperCase()} / Tether</p>
                </section>
                <p className="text-4xl flex gap-4 items-center px-2 mt-4 text-gray-300 py-2">
                  <span>{coinDetails.market_data.current_price.usd}</span>
                  <span className="flex flex-col items-center gap-">
                    <span
                      className={`text-base ${
                        coinDetails.market_data.price_change_percentage_24h > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {formatDecimal(
                        coinDetails.market_data.price_change_percentage_24h *
                          1000
                      )}
                    </span>
                    <span
                      className={`text-base ${
                        coinDetails.market_data.price_change_percentage_24h > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      (
                      {formatDecimal(
                        coinDetails.market_data.price_change_percentage_24h
                      )}
                      %)
                    </span>
                  </span>
                </p>
                <section className="mt-10 flex justify-between items-center px-2 text-gray-300 text-xs ">
                  <p>OPEN DAY</p>
                  <hr className="w-28" />
                  <p>{coinDetails.market_data.high_24h.usd}</p>
                </section>
                <section className="mt-2 flex justify-between items-center px-2 text-gray-300 text-xs">
                  <p>MARKET CAP</p>
                  <hr className="w-24 bg-gray-600 text-gray-500 " />
                  <p>{formatNumber(coinDetails.market_data.market_cap.usd)}</p>
                </section>
                <section className="mt-2 flex justify-between items-center px-2 text-gray-300 text-xs">
                  <p>VOLUME 24H</p>
                  <hr className="w-24" />
                  <p>
                    {formatNumber(
                      coinDetails.market_data.market_cap_change_24h_in_currency
                        .usd
                    )}
                  </p>
                </section>
                <section className="mt-2 flex justify-between items-center px-2 text-gray-300 text-xs">
                  <p>DIRECT VOLUME</p>
                  <hr className="w-24" />
                  <p>
                    {formatNumber(coinDetails.market_data.total_volume.usd)}
                  </p>
                </section>
              </section>
            )}
          </div>
        </div>
      )}
      <button onClick={toggleModal} className=" h-6">
        {isOpen ? (
          <ChevronLeftIcon className="w-3 bg-gray-500 py-2 mr-[-0.3rem]" />
        ) : (
          <ChevronRightIcon className="w-3 bg-gray-500 ml-2 lg:ml-[-0.2rem] py-2" />
        )}
      </button>
    </div>
  );
}
