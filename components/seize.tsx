import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Seize() {
  return (
    <section className="pt-16 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="md:order-2 text-center md:text-left">
        <Image
          src="/arrow.svg"
          width={70}
          height={70}
          alt="Arrow"
          className="mx-auto md:mx-0"
        />
        <h2 className="pt-6 text-3xl font-semibold mx-auto md:mx-0 w-[80%] md:w-full">
          Seize every opportunity
        </h2>
        <p className="pt-4 text-lg w-[90%] mx-auto md:mx-0 md:w-[80%]">
          Trade online anytime, anywhere. On web, mobile, and desktop.
        </p>

        <div className="mt-6 flex flex-col gap-4 w-[90%] mx-auto md:mx-0">
          {["MetaTrader 5", "RaderCoin Terminal", "RaderCoin Trade app"].map(
            (item, index) => (
              <Link
                key={index}
                href="#"
                className="flex items-center justify-center md:justify-start text-gray-600 hover:text-black transition"
              >
                <span>{item}</span>
                <ChevronRightIcon className="size-5" />
              </Link>
            )
          )}
        </div>
      </div>

      <div className="md:order-1 mx-auto">
        <Image
          src="/gadget.jpg"
          width={500}
          height={500}
          alt="Gadget"
          className="mx-auto rounded-2xl w-full max-w-[90%] md:max-w-full h-auto md:h-[22rem] lg:h-[30rem]"
        />
      </div>
    </section>
  );
}
