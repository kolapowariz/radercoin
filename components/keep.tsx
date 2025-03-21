import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Keep() {
  return (
    <section className="py-16 mx-auto">
      <h2 className="w-[80%] text-center mx-auto text-3xl md:font-semibold">Keep up with RaderCoin</h2>
      <p className="w-[80%] text-center mx-auto text-gray-500 pt-4">Stay on top of our news, products and technology updates, events, partnerships, and more.</p>
      <section className="flex justify-center mt-8 ">
        <Link href="" className="flex items-center gap-1 text-gray-500">
          <span>Read more articles</span>
          <ChevronRightIcon className="size-5 pt-1" />
        </Link>
      </section>

      <section className="md:flex md:w-[90%] justify-center items-center gap-6 md:mx-auto">

        <section className="mt-4 w-[80%] mx-auto border rounded-2xl ">
          <Link href='' className="">
            <Image src='/nasdaq.jpg' width={300} height={300} alt="Nasdaq" className="mx-auto rounded-2xl w-[100%]" />

            <p className="bg-gray-200 w-fit mx-10 px-2 py-1 mt-6 rounded-3xl text-sm">Market analysis</p>
            <p className="mx-10 my-8 text-xl">Forecasting and speculating on today&apos;s biggest market movers</p>
          </Link>
        </section>
        <section className="mt-4 w-[80%] mx-auto border rounded-2xl hidden md:block">
          <Link href='' className="">
            <Image src='/keep2.jpg' width={300} height={300} alt="Nasdaq" className="mx-auto rounded-2xl w-[100%]" />

            <p className="bg-gray-200 w-fit mx-10 px-2 py-1 mt-6 rounded-3xl text-sm">Insights</p>
            <p className="mx-10 my-8 text-xl">How to trade the coming jobs reports: Strategies and insights for fundamental traders</p>
          </Link>
        </section>
        <section className="mt-4 w-[80%] mx-auto border rounded-2xl hidden md:block">
          <Link href='' className="">
            <Image src='/keep3.png' width={300} height={300} alt="Nasdaq" className="mx-auto rounded-2xl w-[100%]" />

            <p className="bg-gray-200 w-fit mx-10 px-2 py-1 mt-6 rounded-3xl text-sm">Market news</p>
            <p className="mx-10 my-8 text-xl">Week 2 RaderCoin economic calender report 2025</p>
          </Link>
        </section>
      </section>

    </section>

  )
}