import { ModalProps } from "@/lib/types";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function NewsModal({ onClose }: ModalProps) {
  return (
    <div className="fixed z-20 top-[4.5rem] w-[94%] lg:w-[95.6%] left-16 lg:left-20 shadow-lg transition-transform duration-300 h-screen lg:h-[87.7%] bg-[#181e2c] p-4 overflow-scroll">
      <button
        title="Close"
        onClick={onClose}
        className="text-gray-400 hover:text-white"
      >
        <XMarkIcon className="w-5 h-5" />
      </button>
      <div className="p-4 text-gray-300 text-base">
        <p className="text-center">News</p>
      </div>
    </div>
  );
}
