export interface CryptoData {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  prevClosePrice: string;
  lastPrice: string;
  lastQty: string;
  bidPrice: string;
  askPrice: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number;
  lastId: number;
  count: number;
}

export interface ChartProps {
  coinId: string | null;
}
export interface FormattedData {
  x: string;
  y: number[];
}

export interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  content?: string;
  index?: number;
}

export interface RealModalProps {
  setSelectedCoin: (coin: {
    id: string;
    name: string;
    symbol: string;
    thumb: string;
  }) => void;
}