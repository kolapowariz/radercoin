import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Security() {
  return (
    <section className="py-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-[90%] lg:w-[85%] xl:w-[80%]">

      <div className="text-center md:text-left">
        <Image
          src="/guard.svg"
          width={70}
          height={70}
          alt="Guard"
          className="mx-auto md:mx-0"
        />
        <h2 className="pt-4 text-3xl font-semibold mx-auto md:mx-0 w-[80%] md:w-full">
          Your security is our priority
        </h2>
        <p className="pt-2 text-lg w-[90%] mx-auto md:mx-0 md:w-[80%]">
          From secure payments to negative balance protection, you are covered
          from every angle.
        </p>

        <div className="mt-6 flex flex-col gap-4 w-[90%] mx-auto md:mx-0">
          {["Client protection", "Why RaderCoin"].map((item, index) => (
            <Link
              key={index}
              href="#"
              className="flex items-center justify-center md:justify-start text-gray-600 hover:text-black transition"
            >
              <span>{item}</span>
              <ChevronRightIcon className="size-5" />
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto">
        <Image
          src="/person.jpg"
          width={500}
          height={500}
          alt="Person"
          className="mx-auto rounded-2xl w-full max-w-[90%] md:max-w-full h-auto md:h-[18rem] lg:h-[30rem]"
        />
      </div>
    </section>
  );
}
