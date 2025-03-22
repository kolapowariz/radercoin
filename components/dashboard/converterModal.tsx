// import { useState } from "react";
// import useSWR from "swr";
// import { ModalProps } from "@/types";
// import { XMarkIcon } from "@heroicons/react/24/solid";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// const COINS = ["bitcoin", "ethereum", "euro", "usd", "litecoin"]; // Coins to convert

// export default function ConverterModal({ index = 0, onClose }: ModalProps) {
//   const [amount, setAmount] = useState(1); // Default amount of base coin
//   const [baseCoin, setBaseCoin] = useState("bitcoin"); // Default base coin

//   const { data, error } = useSWR(
//     `https://api.coingecko.com/api/v3/simple/price?ids=${COINS.join(",")}&vs_currencies=usd`,
//     fetcher
//   );

//   if (error) return <p className="text-red-500 text-center">Failed to load data</p>;
//   if (!data) return <p className="text-gray-400 text-center">Loading...</p>;

//   // Get USD value of the base coin
//   const baseCoinPriceInUSD = data[baseCoin]?.usd || 1;

//   return (
//     <div
//       className={`fixed lg:top-[4.4rem] left-0 top-[-0.5rem] z-20 w-[17rem] lg:w-[17.5rem] xl:w-[18rem] bg-[#1d2436] shadow-lg transition-transform duration-300 h-screen lg:h-[90%] gap-2 order-modal`}
//       data-index={index}>
//       <div className="flex justify-between items-center px-3 py-2 bg-[#181e2c]">
//         <p className="text-xs text-white">Converter</p>
//         <button
//           title="Close"
//           onClick={onClose}
//           className="text-gray-400 hover:text-white"
//         >
//           <XMarkIcon className="w-5 h-5" />
//         </button>
//       </div>

//       <div className="p-4 text-gray-300 text-sm space-y-4">
//         {/* Base Coin Selection */}
//         <div className="flex flex-col gap-2">
//           <label className="text-xs text-white">From:</label>
//           <select
//             title="Select base coin"
//             className="bg-gray-800 text-white p-2 rounded-md"
//             value={baseCoin}
//             onChange={(e) => setBaseCoin(e.target.value)}
//           >
//             {COINS.map((coin) => (
//               <option key={coin} value={coin}>
//                 {coin.toUpperCase()}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Base Coin Input */}
//         <div>
//           <label className="text-xs text-white">Amount:</label>
//           <input
//             title="Enter amount"
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(Number(e.target.value))}
//             className="w-full bg-gray-800 text-white p-2 rounded-md"
//           />
//         </div>

//         {/* Converted Values */}
//         <div className="space-y-3">
//           {COINS.filter((coin) => coin !== baseCoin).map((coin) => {
//             const coinPriceInUSD = data[coin]?.usd || 1;
//             const convertedValue =
//               (amount * baseCoinPriceInUSD) / coinPriceInUSD;

//             return (
//               <div
//                 key={coin}
//                 className="flex justify-between items-center border-b border-gray-700 py-2"
//               >
//                 <p className="text-white">{coin.toUpperCase()}</p>
//                 <input
//                   title="Converted value"
//                   type="text"
//                   value={convertedValue.toFixed(6)}
//                   readOnly
//                   className="bg-gray-800 text-white p-1 rounded-md text-right w-20"
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

import { ModalProps } from "@/types";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function ConverterModal({ onClose }: ModalProps) {
  return (
    <div className="fixed z-20 top-[4.5rem] w-[94%] lg:w-[95.6%] left-16 lg:left-20 shadow-lg transition-transform duration-300 h-screen lg:h-[87.7%] bg-[#181e2c] p-4 overflow-scroll">
      <button
        title="Close"
        onClick={onClose}
        className="text-gray-400 hover:text-white"
      >
        <XMarkIcon className="w-5 h-5" />
      </button>
      <div className="p-4 text-gray-300 text-base">
        <p className="text-center">Converter</p>
      </div>
    </div>
  );
}
