import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Security() {
  return (
    <section className="py-16 mx-auto md:grid md:grid-cols-2 md:gap-2 md:w-[90%] lg:w-[85%] xl:w-[80%]">
      <section className="order-1">
        <Image src='/guard.svg' width={70} height={70} alt="Guard" className="mx-auto md:mx-0" />
        <p className="text-center text-3xl w-[70%] mx-auto pt-4 md:mx-0 md:text-left md:font-semibold md:w-full">Your security is our priority</p>
        <p className="text-center pt-2 w-[70%] mx-auto md:text-left md:mx-0 md:w-full">From secure payments to negative balance protection, you are covered from every angle.</p>
      </section>
      <section className="order-2 pt-6 mx-auto md:row-span-2">
        <Image src='/person.jpg' width={300} height={300} alt="Person" className="mx-auto rounded-2xl w-[90%] md:h-[18rem] lg:w-full lg:h-[30rem]" />
      </section>
      <section className="order-3 flex gap-6 pt-6 w-[90%] mx-auto md:mx-0 flex-col">
        <Link href="" className="flex items-center gap-1 text-gray-500">
          <span>Client protection</span>
          <ChevronRightIcon className="size-5 pt-1" />
        </Link>
        <Link href="" className="flex items-center gap-1 text-gray-500">
          <span>Why Exness</span>
          <ChevronRightIcon className="size-5 pt-1" />
        </Link>
      </section>
    </section>
  )
}