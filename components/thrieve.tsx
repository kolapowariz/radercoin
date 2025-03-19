import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";


const instruments = [
  {
    image: "/XAUUSD.png",
    alt: "XAUUSD",
    name: "XAUUSD",
    description: "Gold vs US Dollar",
    leverage: "Customizable",
    spread: "11.2",
    swap: "Available",
    category: "Metals",
  },
  {
    image: "/USOIL.png",
    alt: "USOIL",
    name: "USOIL",
    description: "Crude Oil",
    leverage: "1:200",
    spread: "1.2",
    swap: "Available",
    category: "Energies",
  },
  {
    image: "/EURUSD.png",
    alt: "EURUSD",
    name: "EURUSD",
    description: "Euro vs USDollar",
    leverage: "Customizable",
    spread: "0.6",
    swap: "Available",
    category: "Currencies",
  },
  {
    image: "/US_30.png",
    alt: "US30",
    name: "US30",
    description: "US Wall Street 30 Index",
    leverage: "1:400",
    spread: "1.9",
    swap: "Available",
    category: "Indices",
  },
  {
    image: "/APPLE.png",
    alt: "AAPL",
    name: "AAPL",
    description: "Apple Inc.",
    leverage: "1:20",
    spread: "0.9",
    swap: "Swap applied",
    category: "Stocks",
  },
];

export default function Thrieve() {
  return (
    <section className="bg-[#070e20] pt-16 text-white text-center ">
      <h2 className="text-3xl w-[80%] text-center mx-auto">
        Thrive in the gold & oil markets
      </h2>
      <p className="text-gray-500 pt-2 w-[80%] text-center mx-auto">
        Trading conditions can make or break a strategy, that&apos;s why you
        need the best
      </p>

      <section className="pt-6 mx-auto hidden sm:block md:hidden">
        <Image
          src="/phone.jpg"
          width={300}
          height={300}
          alt="Gold and Oil"
          className="block mx-auto"
        />
      </section>

      <section className="sm:grid sm:grid-cols-2 sm:gap-3 md:grid-cols-3 mx-auto lg:w-[80%] lg:gap-6 lg:pt-10 lg:pb-10">
        <section className="md:pt-14">
          <section className="pt-6 md:pt-0 order-1 sm:order-1">
            <p className="bg-gray-600 w-fit mx-auto px-2 py-1 rounded-3xl text-sm text-center">
              Withdrawals
            </p>
            <p className="pt-1 text-lg">Instant Withdrawals</p>
            <p className="pt-1 text-sm w-[80%] mx-auto text-gray-400">
              Get your deposits and withdrawals approved the moment you click
              the button.¹
            </p>
          </section>

          <section className="pt-6  order-2 sm:order-3">
            <p className="bg-gray-600 w-fit mx-auto px-2 py-1 rounded-3xl text-sm text-center">
              Spreads
            </p>
            <p className="pt-1 text-lg">The best spreads⁴ on gold</p>
            <p className="pt-1 text-sm w-[80%] mx-auto text-gray-400">
              Trade with the tightest & most stable spreads in the market.
            </p>
          </section>

          <section className="pt-6 order-3 sm:order-6">
            <p className="bg-gray-600 w-fit mx-auto px-2 py-1 rounded-3xl text-sm text-center">
              Support
            </p>
            <p className="pt-1 text-lg">24/7 live support</p>
            <p className="pt-1 text-sm w-[80%] mx-auto text-gray-400">
              Get answers in minutes. Contact our support team 24/7 by phone,
              email, or live chat.
            </p>
          </section>
        </section>

        <section className="pt-6 mx-auto sm:hidden md:block">
          <Image
            src="/phone.jpg"
            width={300}
            height={300}
            alt="Gold and Oil"
            className="block mx-auto md:h-[50vh] lg:h-[60vh] lg:w-[100%]"
          />
        </section>

        <section className="md:pt-16">
          <section className="pt-6 md:pt-0 order-4 sm:order-2">
            <p className="bg-gray-600 w-fit mx-auto px-2 py-1 rounded-3xl text-sm text-center">
              Execution speed
            </p>
            <p className="pt-1 text-lg">Ultra-fast execution</p>
            <p className="pt-1 text-sm w-[80%] mx-auto text-gray-400">
              Execute your orders in milliseconds, no matter how big they are.
            </p>
          </section>

          <section className="pt-6 order-5">
            <p className="bg-gray-600 w-fit mx-auto px-2 py-1 rounded-3xl text-sm text-center">
              Swaps
            </p>
            <p className="pt-1 text-lg">No overnight fees</p>
            <p className="pt-1 text-sm w-[80%] mx-auto text-gray-400">
              Hold your leveraged positions for as long as you like, swap-free.
              T&C apply.
            </p>
          </section>

          <section className="pt-6 order-6">
            <p className="bg-gray-600 w-fit mx-auto px-2 py-1 rounded-3xl text-sm text-center">
              Platforms
            </p>
            <p className="pt-1 text-lg">Reliable platforms</p>
            <p className="pt-1 text-sm w-[80%] mx-auto text-gray-400">
              Experience the ultimate in stability and execution speed. No
              matter the size of your order.
            </p>
          </section>
        </section>
      </section>

      <section className="pt-28">
        <h2 className="text-3xl w-[80%] mx-auto pb-2">
          Trade assets from global markets
        </h2>
        <p className="text-gray-400 w-[80%] mx-auto">
          Capitalize on every opportunity with the world&apos;s most popular
          assets.
        </p>

        <div className="w-[90%] mx-auto overflow-x-auto">
          <table className="w-full text-gray-400 text-sm">
            <thead>
              <tr className="border-b border-gray-700 text-left">
                <th className="">Instruments</th>
                <th className="hidden">Leverage</th>
                <th className="">Avg. Spread³ (pips)</th>
                <th className="">Swap-free</th>
                <th className=""></th>
              </tr>
            </thead>
            <tbody className="p-10">
              {instruments.map((item, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="flex items-center gap-2 py-4">
                    <Image
                      src={item.image}
                      width={30}
                      height={30}
                      alt={item.alt}
                      className=""
                    />
                    <div className="text-left">
                      <p>{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 text-left">{item.leverage}</td>
                  <td className="py-4 text-left">{item.spread}</td>
                  <td className="py-4 text-left">{item.swap}</td>
                  <td className="py-4">
                    <Link
                      href=""
                      className="flex items-center gap-1 text-gray-500"
                    >
                      <span>{item.category}</span>
                      <ChevronRightIcon className="size-5 pt-1" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="flex gap-10 items-center pb-4 pt-10 text-gray-400 text-sm w-[90%] mx-auto sm:gap-28 lg:gap-36 xl:gap-64">
          <p className="">Instruments</p>
          <p className="hidden md:block">Leverage</p>
          <p className=""> Avg. spread³, pips</p>
          <p className="hidden md:block">Swap-free</p>
        </section>

        <hr className="w-[90%] mx-auto" />

        <section className="pt-2 grid grid-cols-3 items-center justify-items-start w-[80%] md:w-[90%] mx-auto md:grid-cols-5 md:gap-14">
          <section className="flex gap-2 items-center justify-center">
            <Image
              src="/XAUUSD.png"
              width={30}
              height={30}
              alt="XAUUSD"
              className="hidden sm:block"
            />
            <section>
              <p className="text-left">XAUUSD</p>
              <p className="text-xs text-gray-500 text-left hidden sm:block">
                Gold vs US Dollar
              </p>
            </section>
          </section>
          <p className="hidden md:block">Customizable</p>
          <p>11.2</p>
          <p className="hidden md:block">Available</p>
          <Link
            href=""
            className="flex justify-end px-[23px] items-center gap-1 text-gray-500"
          >
            <span>Metals</span>
            <ChevronRightIcon className="size-5 pt-1" />
          </Link>
        </section>

        <hr className="w-[90%] mx-auto mt-4 border-1 border-gray-700" />

        <section className="pt-2 grid grid-cols-3 items-center justify-items-start w-[80%] mx-auto md:grid-cols-5 md:w-[90%] md:gap-14">
          <section className="flex gap-2 items-center justify-center">
            <Image
              src="/USOIL.png"
              width={30}
              height={30}
              alt="USOIL"
              className="hidden sm:block"
            />
            <section>
              <p className="text-left">USOIL</p>
              <p className="text-xs text-gray-500 text-left hidden sm:block">
                Crude Oil
              </p>
            </section>
          </section>
          <p className="hidden md:block">1:200</p>
          <p className="">1.2</p>
          <p className="hidden md:block">Available</p>
          <Link
            href=""
            className="flex justify-end px-[13px] items-center gap-1 text-gray-500"
          >
            <span>Energies</span>
            <ChevronRightIcon className="size-5 pt-1" />
          </Link>
        </section>

        <hr className="w-[90%] mx-auto mt-4 border-1 border-gray-700" />

        <section className="pt-2 grid grid-cols-3 items-center justify-items-start w-[80%] mx-auto md:grid-cols-5 md:w-[90%] md:gap-14">
          <section className="flex gap-2 items-center justify-center">
            <Image
              src="/EURUSD.png"
              width={30}
              height={30}
              alt="EURUSD"
              className="hidden sm:block"
            />
            <section>
              <p className="text-left">EURUSD</p>
              <p className="text-xs text-gray-500 text-left hidden sm:block">
                Euro vs USDollar
              </p>
            </section>
          </section>
          <p className="hidden md:block">Customizable</p>
          <p className="">0.6</p>
          <p className="hidden md:block">Available</p>
          <Link
            href=""
            className="flex justify-center items-center gap-1 text-gray-500"
          >
            <span>Currencies</span>
            <ChevronRightIcon className="size-5 pt-1" />
          </Link>
        </section>

        <hr className="w-[90%] mx-auto mt-4 border-1 border-gray-700" />

        <section className="pt-2 grid grid-cols-3 items-center justify-items-start w-[80%] mx-auto md:grid-cols-5 md:w-[90%] md:gap-14">
          <section className="flex gap-2 items-center justify-center">
            <Image
              src="/US_30.png"
              width={30}
              height={30}
              alt="US30"
              className="hidden sm:block"
            />
            <section>
              <p className="text-left">US30</p>
              <p className="text-xs text-gray-500 text-left hidden sm:block">
                US Wall Street 30 Index
              </p>
            </section>
          </section>
          <p className="hidden md:block">1:400</p>
          <p className="">1.9</p>
          <p className="hidden md:block">Available</p>
          <Link
            href=""
            className="flex justify-end px-[23px] items-center gap-1 text-gray-500"
          >
            <span>Indices</span>
            <ChevronRightIcon className="size-5 pt-1" />
          </Link>
        </section>

        <hr className="w-[90%] mx-auto mt-4 border-1 border-gray-700" />

        <section className="pt-2 grid grid-cols-3 items-center justify-items-start w-[80%] mx-auto md:grid-cols-5 md:w-[90%] md:gap-14">
          <section className="flex gap-2 items-center justify-center">
            <Image
              src="/APPLE.png"
              width={30}
              height={30}
              alt="AAPL"
              className="hidden sm:block"
            />
            <section>
              <p className="text-left">AAPL</p>
              <p className="text-xs text-gray-500 text-left hidden sm:block">
                Apple Inc.
              </p>
            </section>
          </section>
          <p className="hidden md:block">1:20</p>
          <p className="">0.9</p>
          <p className="hidden md:block">Swap applied</p>
          <Link
            href=""
            className="flex justify-end px-[26px] items-center gap-1 text-gray-500"
          >
            <span>Stocks</span>
            <ChevronRightIcon className="size-5 pt-1" />
          </Link>
        </section>

        <hr className="w-[90%] mx-auto mt-4 border-1 border-gray-700" />

        <section className="flex justify-center items-center gap-3 mt-8 flex-col pb-16 sm:flex-row">
          <Link
            href="/login"
            className="bg-[#f8dc0f] rounded-md px-16 py-4 text-black"
          >
            Register
          </Link>
          <Link href="/login" className="bg-gray-900 rounded-md px-12 py-4">
            Try free demo
          </Link>
        </section>
      </section>
    </section>
  );
}