import Link from "next/link";

export default function Trade() {
  return (
    <section >
      <section className="bg-[url('/bg-trade-mobile.jpg')]  py-16 text-center bg-cover bg-center h-[20rem] sm:h[10rem]">

      </section>
      <section className="bg-gray-900 w-[90%] mx-auto  rounded-2xl text-white mt-[-11rem] lg:flex">
        <section className="lg:w-[65%] pb-6">

          <h2 className="pt-10 text-3xl w-[70%] sm:w-[80%] mx-auto text-center lg:text-left lg:mx-5 lg:text-4xl lg:font-bold">Trade with a trusted broker today</h2>
          <p className="pt-4 w-[80%] lg:mx-5 mx-auto text-gray-400 text-center lg:text-left">See for yourself why RaderCoin is the broker of choice for over 800,000 traders and 64,000 partners.</p>
        </section>

        <section className="flex justify-center items-center gap-3 mt-8 flex-col text-black pb-10 sm:flex-row lg:text-lg">
          <Link href='/dashboard' className="bg-[#f8dc0f] rounded-md px-16 py-4 lg:px-10 lg:py-2">Register</Link>
          <Link href='/dashboard' className="bg-gray-800 text-white rounded-md px-12 py-4 lg:px-4 lg:py-2">Try free demo</Link>
        </section>
      </section>
    </section>
  )
}