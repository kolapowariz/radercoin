'use client';

import { ChartProps } from '@/types';
import dynamic from 'next/dynamic';

const CandleStickChart = dynamic(() => import('@/components/cryptochart'), { ssr: false });

export default function CandleChartWrapper({ coinId }: ChartProps) {
  return <CandleStickChart coinId={coinId} />;
}
