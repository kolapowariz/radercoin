"use client";
import CandleChartWrapper from "@/components/candleStickWrapper";
import Modal from "@/components/modal";
import {
  AdjustmentsHorizontalIcon,
  ChartBarIcon,
  Cog8ToothIcon,
  GlobeEuropeAfricaIcon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { MarketModal } from "./marketModal";
import ConverterModal from "./converterModal";
import NewsModal from "./newsModal";
import { ManagerModal } from "./managerModal";
import { AdminModal } from "./adminModal";

const links = [
  { name: "BOARD", href: "/dashboard", icon: ChartBarIcon },
  { name: "MARKET", href: "/dashboard", icon: HeartIcon },
  { name: "CALS", href: "/dashboard", icon: AdjustmentsHorizontalIcon },
  { name: "NEWS", href: "/dashboard", icon: GlobeEuropeAfricaIcon },
  { name: "MANAGER", href: "/dashboard", icon: UserCircleIcon },
  { name: "ADMIN", href: "/dashboard", icon: Cog8ToothIcon },
];

export default function NavLinks() {
  const [selectedCoin, setSelectedCoin] = useState<{
    id: string;
    name: string;
    symbol: string;
    thumb: string;
  } | null>(null);
  const [openModals, setOpenModals] = useState<string[]>([]);
  const [isBoardActive, setIsBoardActive] = useState(true);

  const toggleModal = (name: string) => {
    if (name === "BOARD") {
      setIsBoardActive(true);
      return;
    }

    setOpenModals((prev) => {
      if (prev.includes(name)) {
        return prev.filter((modal) => modal !== name);
      }
      return [...prev, name];
    });

    setIsBoardActive(false);
  };

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <button
            key={link.name}
            onClick={() => toggleModal(link.name)}
            className={`flex flex-col h-[48px] grow items-center justify-center gap-2 rounded-md 
            ${
              openModals.includes(link.name) ||
              (isBoardActive && link.name === "BOARD")
                ? "bg-blue-500"
                : "bg-gray-800"
            }
            p-3 text-[0.6rem] font-medium hover:bg-gray-900 hover:text-white md:flex-none md:justify-start md:p-2 lg:p-0 md:px-3`}
          >
            <LinkIcon className="w-6" />
            <p className="hidden lg:block">{link.name}</p>
          </button>
        );
      })}

      {isBoardActive && (
        <div className="fixed z-20 top-[4.5rem] w-[94%] lg:w-[94%] xl:w-[95.8%] md:left-16 lg:left-20 shadow-lg transition-transform duration-300 h-[100%] bg-[#181e2c]">
          <Modal setSelectedCoin={setSelectedCoin} />
          <div>
            <CandleChartWrapper
              coinId={selectedCoin ? selectedCoin.id : null}
            />
          </div>
        </div>
      )}

      {openModals.map((name, index) => {
        if (name === "MARKET") {
          return (
            <MarketModal
              key={name}
              index={index}
              onClose={() => toggleModal(name)}
            />
          );
        }
        if (name === "CALS") {
          return (
            <ConverterModal
              key={name}
              isOpen={true}
              onClose={() => toggleModal(name)}
              content={name}
              index={index}
            />
          );
        }
        if (name === "NEWS") {
          return (
            <NewsModal
              key={name}
              isOpen={true}
              onClose={() => toggleModal(name)}
              content={name}
              index={index}
            />
          );
        }
        if (name === "MANAGER") {
          return (
            <ManagerModal
              key={name}
              index={index}
              onClose={() => toggleModal(name)}
            />
          );
        }
        if (name === "ADMIN") {
          return (
            <AdminModal
              key={name}
              index={index}
              onClose={() => toggleModal(name)}
            />
          );
        }
        return null;
      })}
    </>
  );
}
