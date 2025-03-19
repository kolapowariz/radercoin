"use client";
import {
  ArrowUpRightIcon,
  Bars3Icon,
  ChevronRightIcon,
  GlobeAltIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Active from "./active";
import Footer from "./footer";
import Keep from "./keep";
import Security from "./security";
import Seize from "./seize";
import Team from "./team";
import Thrieve from "./thrieve";
import Trade from "./trade";
import Upgrade from "./upgrade";

export default function LandingPage() {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick((prev) => !prev);
  };
  return (
    <div>
      <header className="bg-white w-full fixed top-0 z-10 flex justify-between">
        <nav className="bg-white w-full lg:w-[10%]">
          <section className="flex justify-between items-center py-5 px-5 w-full">
            <ul>
              <li>
                <Image
                  src="/logo.svg"
                  width={50}
                  height={50}
                  alt="Logo"
                  className="sm:hidden lg:block"
                />
                <Image
                  src="/sm-logo.svg"
                  width={150}
                  height={150}
                  alt="Logo"
                  className="hidden sm:block lg:hidden"
                />
              </li>
            </ul>

            <ul className="flex gap-7 lg:hidden">
              <li>
                <Link href="/login" className="px-2 py-2 rounded-md">
                  Sign in
                </Link>
              </li>
              <li className="">
                <button onClick={toggle} className="flex items-center gap-2">
                  {click ? (
                    <XMarkIcon className="size-6" />
                  ) : (
                    <Bars3Icon className="size-6" />
                  )}
                </button>
              </li>
            </ul>
          </section>
        </nav>

        <section
          className={`bg-white w-full fixed top-16 z-10 transition-all duration-300 ${
            click ? "h-screen" : "h-0 overflow-hidden"
          } lg:hidden`}
        >
          <div className="p-4 lg:p-3">
            <ul className="py-2 text-lg text-left w-full lg:flex lg:items-center lg:gap-5 lg:text-sm xl:text-base lg:py-0 lg:font-semibold">
              <li className="py-1">
                <Link href="" className="flex items-center gap-1">
                  <span>Trading </span>
                  <ChevronRightIcon className="size-5 pt-1 lg:hidden" />
                </Link>
              </li>
              <li className="py-1">
                <Link href="" className="flex items-center gap-1">
                  <span>Market </span>
                  <ChevronRightIcon className="size-5 pt-1 lg:hidden" />
                </Link>
              </li>
              <li className="py-1">
                <Link href="" className="flex items-center gap-1">
                  <span>Platforms </span>
                  <ChevronRightIcon className="size-5 pt-1 lg:hidden" />
                </Link>
              </li>
              <li className="py-1">
                <Link href="" className="flex items-center gap-1">
                  <span>Tools </span>
                  <ChevronRightIcon className="size-5 pt-1 lg:hidden" />
                </Link>
              </li>
              <li className="py-1">
                <Link href="" className="flex items-center gap-1">
                  <span>Company </span>
                  <ChevronRightIcon className="size-5 pt-1 lg:hidden" />
                </Link>
              </li>

              <li>
                <hr className="w-full mt-8 lg:hidden" />
              </li>
              <li className="py-1 mt-5 lg:mt-0">
                <Link href="" className="flex items-center gap-1">
                  <span>Partners</span>
                  <ArrowUpRightIcon className="size-4 pt-1 " />
                </Link>
              </li>
              <li>
                <hr className="w-full mt-5 lg:hidden" />
              </li>
              <li className="flex justify-center items-center gap-3 mt-8 lg:mt-0 lg:ml-[8rem] lg:text-base xl:text-lg xl:ml-[19rem]">
                <Link
                  href="/login"
                  className="bg-yellow-400 rounded-md px-10 py-2"
                >
                  Register
                </Link>
                <Link
                  href="/login"
                  className="bg-gray-300 rounded-md px-10 py-2 lg:px-8"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="flex justify-center items-center mt-4 lg:mt-0"
                >
                  <GlobeAltIcon className="size-6" />
                  <span>EN</span>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="hidden lg:block w-full">
          <div className="p-4 lg:p-2 flex justify-between items-center ">
            <ul className="py-2 text-lg text-left lg:flex lg:items-center lg:gap-5 lg:text-sm xl:text-base lg:py-0 lg:font-semibold">
              <li className="py-1">
                <Link href="" className="flex items-center gap-1">
                  <span>Trading </span>
                  <ChevronRightIcon className="size-5 pt-1 lg:hidden" />
                </Link>
              </li>
              <li className="py-1">
                <Link href="" className="flex items-center gap-1">
                  <span>Market </span>
                  <ChevronRightIcon className="size-5 pt-1 lg:hidden" />
                </Link>
              </li>
              <li className="py-1">
                <Link href="" className="flex items-center gap-1">
                  <span>Platforms </span>
                  <ChevronRightIcon className="size-5 pt-1 lg:hidden" />
                </Link>
              </li>
              <li className="py-1">
                <Link href="" className="flex items-center gap-1">
                  <span>Tools </span>
                  <ChevronRightIcon className="size-5 pt-1 lg:hidden" />
                </Link>
              </li>
              <li className="py-1">
                <Link href="" className="flex items-center gap-1">
                  <span>Company </span>
                  <ChevronRightIcon className="size-5 pt-1 lg:hidden" />
                </Link>
              </li>

              <li>
                <hr className="w-full mt-8 lg:hidden" />
              </li>
              <li className="py-1 mt-5 lg:mt-0">
                <Link href="" className="flex items-center gap-1">
                  <span>Partners</span>
                  <ArrowUpRightIcon className="size-4 pt-1 " />
                </Link>
              </li>
              <li>
                <hr className="w-full mt-5 lg:hidden" />
              </li>
            </ul>

            <section className="flex justify-between items-center gap-3 pt-2 px-4">
              <section className="flex justify-center items-center gap-3 mt-8 lg:mt-0 lg:text-base xl:text-lg">
                <Link
                  href="/login"
                  className="bg-yellow-400 rounded-md px-10 py-2"
                >
                  Register
                </Link>
                <Link
                  href="/login"
                  className="bg-gray-300 rounded-md px-10 py-2 lg:px-8"
                >
                  Sign in
                </Link>
              </section>
              <Link
                href=""
                className="flex justify-center items-center mt-4 lg:mt-0"
              >
                <GlobeAltIcon className="size-6" />
                <span>EN</span>
              </Link>
            </section>
          </div>
        </section>
      </header>
      <main className="pt-20">
        <Upgrade />
        <Active />
        <Thrieve />
        <Seize />
        <Security />
        <Team />
        <Keep />
        <Trade />
      </main>
      <Footer />
    </div>
  );
}
