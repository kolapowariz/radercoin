"use client";
import DashboardFooter from "@/components/dashboardfotter";
import { BellIcon, ChevronDownIcon, PlusIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Page() {
  // const [selectedCoin, setSelectedCoin] = useState<{ id: string; name: string; symbol: string; thumb: string } | null>(null);

  return (
    <div className="bg-gray-900 text-white">
      <section className="h-screen md:hidden flex flex-col justify-center items-center overflow-hidden">
        <Image src="/chart.png" width={300} height={300} alt="Logo" />
        <p>PLEASE TURN YOUR DEVICE IN LANDSCAPE MODE.</p>
      </section>

      <section className="hidden md:block md:mt-[-1rem] lg:z-10 lg:mt-[4rem]">
        <header className="flex justify-between items-center">
          <section className="w-[20rem] h-16 ml-0 lg:ml-48 flex gap-10">
            <section className="hidden lg:flex lg:justify-center lg:items-center w-12 h-12 gap-[0.125rem] border border-gray-700 mt-2">
              <section className="flex justify-between items-center flex-col gap-[0.125rem] cursor-pointer">
                <div className="w-4 h-4 bg-gray-500"></div>
                <div className="w-4 h-4 bg-gray-500"></div>
              </section>
              <section className="flex justify-between items-center flex-col gap-[0.125rem] cursor-pointer">
                <div className="w-4 h-4 bg-gray-500"></div>
                <div className="w-4 h-4 bg-gray-500"></div>
              </section>
            </section>
            <section className="w-12 h-12 mt-2 cursor-pointer">
              <PlusIcon className="hidden h-12 w-12 text-gray-500 border border-gray-600 lg:block" />
            </section>
          </section>
          <section className="flex justify-between items-center gap-2 lg:gap-4 cursor-pointer">
            <section className="text-green-500 text-right">
              <p className="text-xs">REAL ACCOUNT</p>
              <p className="text-lg font-semibold">0.00$</p>
              <p className="text-[0.54rem] text-green-900">ESTIMATE BALANCE</p>
            </section>
            <section>
              <ChevronDownIcon className="h-6 w-6 text-green-500" />
            </section>
            <section>
              <BellIcon className="h-6 w-6 text-white hidden lg:block" />
            </section>
            <section>
              <p className="bg-orange-500 rounded-full w-8 text-center h-8 text-xl font-bold">
                P
              </p>
            </section>
          </section>
        </header>
        <main className="">
          {/* <Modal  setSelectedCoin={setSelectedCoin}/>
          <CandleChartWrapper coinId={selectedCoin ? selectedCoin.id : null} /> */}
        </main>

        <DashboardFooter />
      </section>
    </div>
  );
}

