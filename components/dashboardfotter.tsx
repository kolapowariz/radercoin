'use client';
import { } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { IoChatbubbleOutline, IoDiamondOutline } from "react-icons/io5";
import { RxSwitch } from "react-icons/rx";

export default function DashboardFooter() {
  const [currentDate, setCurrentDate] = useState<null | {
    date: string;
    time: string;
  }>(null);

  useEffect(() => {
    const updatedDateTime = () => {
      setCurrentDate({
        date: new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        time: new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      })
    }

    updatedDateTime();
    const interval = setInterval(updatedDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (


    <footer className="bg-gray-600 h-10 absolute md:w-[100%] ml-[-5.5rem] lg:ml-[-6.4rem] bottom-0 overflow-hidden lg:flex justify-between items-center text-xs hidden z-30">
      <section className="flex justify-between items-center h-full px-2 gap-2">
        <p className="bg-blue-500 px-2 py-1 rounded-sm flex items-center gap-1">
          <IoDiamondOutline />
          <span>ADMIN</span>
        </p>
        <p className="flex items-center gap-1">
          <span>DARK</span>
          <RxSwitch className="w-10 h-8 text-red-700" />
          <span>WHITE</span>
        </p>
        <p className="bg-gray-700 px-2 py-3 font-bold flex items-center gap-1">
          <HiOutlineHeart className="w-5 h-6 text-green-400" />
          <span>SUPPORT A GOOD COURSE</span>
        </p>
      </section>
      <section className="flex justify-between items-center h-full px-2 gap-3">
        <p className="bg-gray-700 px-2 py-3 font-bold flex items-center gap-1">
          <IoChatbubbleOutline className="w-4 h-4" />
          <span>CONTACT US</span>
        </p>
        <p className="text-sm px-2 py-3 font-bold">
          {currentDate ? `${currentDate.date} ${currentDate.time}` : 'Loading...'}
        </p>
      </section>
    </footer>
  )
}