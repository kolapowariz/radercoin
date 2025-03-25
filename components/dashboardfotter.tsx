"use client";
import { useEffect, useState } from "react";

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
      });
    };

    updatedDateTime();
    const interval = setInterval(updatedDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-gray-600 h-10 absolute md:w-[100%] ml-[-5.5rem] lg:ml-[-6.4rem] bottom-0 overflow-hidden lg:flex justify-between items-center text-xs hidden z-30">
      <section className="flex justify-between items-center h-full px-2 gap-2"></section>
      <section className="flex justify-between items-center h-full px-2 gap-3">
        <p className="text-sm px-2 py-3 font-bold">
          {currentDate
            ? `${currentDate.date} ${currentDate.time}`
            : "Loading..."}
        </p>
      </section>
    </footer>
  );
}
