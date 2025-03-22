'use client'
import { ModalProps } from "@/types";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function NewModal({ isOpen, onClose, content, index = 0 }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed lg:top-[4.4rem] left-0 top-[-0.5rem] z-20 w-[17rem] lg:w-[17.5rem] xl:w-[18rem] bg-[#1d2436] shadow-lg transition-transform duration-300 h-screen lg:h-[90%] gap-2 modal-position-${index}`}>
      <div className="flex justify-between items-center px-3 py-2 bg-[#181e2c]">
        <p className="text-xs text-white">{content}</p>
        <button onClick={onClose} className="text-gray-400 hover:text-white" title="Close">
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="p-4 text-gray-300 text-sm">
        <p>This is the content for {content}.</p>
      </div>
    </div>
  );
}
