import axios from "axios";

// export default async function fetchCryptoData() {
//   try {
//     const response = await axios.get<{ prices: [number, number][] }>(
//       "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7",
//       {
//         headers: {
//           accept: "application/json",
//           "x-cg-demo-api-key": process.env.NEXT_PUBLIC_COINGECKO,
//         },
//       }
//     );

//     return response.data.prices.map(([timeStamp, price]) => ({
//       x: new Date(timeStamp).toISOString(),
//       y: price,
//     }));
//   } catch (error) {
//     console.error("Error fetching CoinGecko data:", error);
//   }
// }


export async function fetchCoinData(coinId: string) {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          ids: coinId,
          order: "market_cap_desc",
          per_page: 1,
          page: 1,
          sparkline: true,
          price_change_percentage: "1h,24h,7d",
        },
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": process.env.NEXT_PUBLIC_COINGECKO,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching CoinGecko data:", error);
    return null;
  }
}


// export async function fetchCoinsData(coinIds: string[]) {
//   try {
//     const response = await axios.get(
//       "https://api.coingecko.com/api/v3/coins/markets",
//       {
//         params: {
//           vs_currency: "usd",
//           ids: coinIds.join(","),
//           order: "market_cap_desc",
//           per_page: coinIds.length,
//           page: 1,
//           sparkline: true,
//           price_change_percentage: "1h,24h,7d",
//         },
//         headers: {
//           accept: "application/json",
//           "x-cg-demo-api-key": process.env.NEXT_PUBLIC_COINGECKO,
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error("Error fetching CoinGecko data:", error);
//     return null;
//   }
// }