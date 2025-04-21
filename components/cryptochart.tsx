"use client";

import { fetchCoinData } from "@/lib/data";
import { ChartProps, FormattedData } from "@/lib/types";
import useSWR from "swr";
import Chart from "react-apexcharts";

export default function CryptoChart({ coinId }: ChartProps) {
  const { data, error, isLoading } = useSWR(
    coinId ? [`crypto-chart`, coinId] : null,
    () => fetchCoinData(coinId as string),
    { refreshInterval: 5000 }
  );

  if (error) {
    console.error("Error fetching CoinGecko data:", error);
    return (
      <div className="w-full h-[100%] flex justify-center items-center">
        <p className="text-red-500">Failed to load chart data.</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="w-full h-[100%] flex justify-center items-center">
        <p>Please select a coin to view its chart.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full h-[100%] flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (
    !data[0]?.sparkline_in_7d?.price ||
    !Array.isArray(data[0].sparkline_in_7d.price)
  ) {
    console.error("Sparkline data is missing");
    return (
      <div className="w-full h-[100%] flex justify-center items-center">
        <p>No data available for {coinId}.</p>
      </div>
    );
  }

  const formattedData: FormattedData[] = data[0].sparkline_in_7d.price.map(
    (price: number, index: number, array: number[]): FormattedData => {
      const timestamp: string = new Date(
        Date.now() - (array.length - 1 - index) * 3600 * 1000
      ).toISOString();
      const open: number = price;
      const close: number = array[index + 1] || price;
      const high: number = Math.max(open, close);
      const low: number = Math.min(open, close);

      return { x: timestamp, y: [open, high, low, close] };
    }
  );

  return (
    <div className="w-full h-[100%]">
      <Chart
        options={{
          chart: { type: "candlestick", height: 350, toolbar: { show: false } },
          xaxis: {
            type: "datetime",
            labels: {
              style: {
                colors: "#ffffff",
                fontSize: "14px",
                fontFamily: "Arial, sans-serif",
              },
              formatter: (value) => {
                const date = new Date(value);
                return `${date.toLocaleDateString()} ${date.toLocaleTimeString(
                  "en-GB",
                  { hour: "2-digit", minute: "2-digit" }
                )}`;
              },
            },
          },
          yaxis: {
            tooltip: { enabled: true },
            labels: {
              formatter: (value: number) => {
                if (value > 1) return value.toFixed(2);
                return value.toFixed(4);
              },
              style: {
                colors: "#ffffff",
                fontSize: "14px",
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
              },
            },
            opposite: true,
          },
          tooltip: {
            enabled: true,
            style: { fontSize: "14px", fontFamily: "Arial, sans-serif" },
            theme: "dark",
          },
          plotOptions: {
            candlestick: {
              colors: { upward: "#00E396", downward: "#FF4560" },
              wick: { useFillColor: true },
            },
          },
        }}
        series={[{ data: formattedData }]}
        type="candlestick"
        height={850}
      />
    </div>
  );
}
