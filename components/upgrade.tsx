import Link from "next/link";

export default function Upgrade() {
  return (
    <section className="bg-gray-200 pb-14 mb-6">
      <section className="w-[50%]  text-center mx-auto lg:w-[40%] xl:w-[40%]">
        <h1 className="text-4xl xl:text-6xl font-semibold pt-20">Upgrade the way you trade</h1>
      </section>
      <section className="w-[80%] text-center mx-auto xl:w-[45%]">
        <p className="text-center mt-4 text-lg xl:text-xl">Trade with the world&apos;s largest retail broker and benefit from better-than-market conditions.</p>
      </section>
      <section className="flex justify-center items-center gap-3 mt-8 flex-col sm:flex-row">
        <Link href='/login' className="bg-[#f8dc0f] font-bold rounded-md px-16 py-4">Register</Link>
        <Link href='/login' className="bg-gray-100 font-bold rounded-md px-12 py-4">Try free demo</Link>
      </section>
    </section>
  )
}