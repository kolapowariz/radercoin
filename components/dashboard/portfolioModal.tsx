import { ModalProps } from "@/types";
import { XMarkIcon } from "@heroicons/react/24/solid";

export function PortfolioModal({ onClose }: ModalProps) {
  return (
    <div className="fixed z-20 top-[4.5rem] w-[94%] lg:w-[96%] left-16 lg:left-20 shadow-lg transition-transform duration-300 h-screen lg:h-[87.7%] bg-[#181e2c]">
      <button
        type="button"
        title="Close Modal"
        onClick={onClose}
        className="text-gray-400 hover:text-white hidden"
      >
        <XMarkIcon className="w-5 h-5" />
      </button>

      <div className="p-4 text-gray-300 text-base">
        <p className="text-center">Portfolio</p>
      </div>
    </div>
  );
}
