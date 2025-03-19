import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Seize() {
  return (
    <section className="pt-16 md:grid md:grid-cols-2 md:gap-2">
      <section className="order-1 md:order-2">
        <Image src='/arrow.svg' width={70} height={70} alt="Arrow" className="mx-auto md:mx-0" />
        <p className="text-center pt-6 text-3xl w-[60%] mx-auto md:mx-0 md:text-left md:font-semibold">Seize every opportunity</p>
        <p className="pt-4 w-[80%] mx-auto text-center md:mx-0 md:text-left">Trade online anytime, anywhere. On web, mobile and desktop</p>
      </section>
      <section className="order-2 md:order-1 mx-auto pt-6 md:row-span-2">
        <Image src='/gadget.jpg' width={300} height={300} alt="Gadget" className="mx-auto rounded-2xl w-[90%] md:h-[22rem] lg:w-full lg:h-[30rem]" />
      </section>

      <section className="order-3 flex gap-6 pt-6 w-[90%] mx-auto md:mx-0 flex-col">
        <Link href="" className="flex items-center gap-1 text-gray-500">
          <span>MetaTrader 5</span>
          <ChevronRightIcon className="size-5 pt-1" />
        </Link>
        <Link href="" className="flex items-center gap-1 text-gray-500">
          <span>Exness Terminal</span>
          <ChevronRightIcon className="size-5 pt-1" />
        </Link>
        <Link href="" className="flex items-center gap-1 text-gray-500">
          <span>Exness Trade app</span>
          <ChevronRightIcon className="size-5 pt-1" />
        </Link>
      </section>
    </section>
  )
}