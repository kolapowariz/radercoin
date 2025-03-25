import axios from "axios";

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


export async function fetchSuggestions (query: string) {
  if (!query) {
    return;
  }

  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/search?query=${query}`
    );
    return response.data.coins;
  } catch (error) {
     if (axios.isAxiosError(error) && error.response?.status === 429) {
       console.warn("Rate limit exceeded. Retrying in 5 seconds...");
       await new Promise((resolve) => setTimeout(resolve, 5000));
       return fetchSuggestions(query); // Retry after delay
     }
     throw error;
    console.error("Error fetching suggestions:", error);
    return null;
  }
}

export async function fetchCoinDetails (id: string) {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching coin details:", error);
    return null;
  }
}