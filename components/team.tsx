import Link from "next/link";

export default function Team() {
  return (
    <section className="py-16 mx-auto bg-gray-900 text-white">
      <h2 className="w-[90%] mx-auto text-3xl">RaderCoin Team Pro</h2>
      <p className="w-[90%] mx-auto pt-4 text-lg xl:text-xl">Get to know our team of professional traders from around the world and learn from their expertise on all things trading and strategy.</p>

      <section className="flex justify-center items-center gap-3 mt-8 sm:justify-start sm:w-[90%] sm:mx-auto">
        <Link href='/login' className="bg-[#f8dc0f] text-lg rounded-md px-6 py-2 text-black sm:font-semibold">Meet the team</Link>
      </section>
    </section>
  )
}