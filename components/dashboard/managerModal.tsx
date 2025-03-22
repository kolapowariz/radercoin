import { ModalProps } from "@/types";
import { XMarkIcon } from "@heroicons/react/24/solid";
import ChartComponent from "../chartdemo";


export function ManagerModal({ onClose }: ModalProps) {
  return (
    <div className="fixed z-20 top-[4.5rem] w-[94%] lg:w-[96%] left-16 lg:left-20 shadow-lg transition-transform duration-300 h-screen lg:h-[87.7%] bg-[#181e2c]">
      <button title="close" onClick={onClose} className="text-gray-400 hover:text-white hidden">
        <XMarkIcon className="w-5 h-5" />
      </button>
      <section>
        <section className="flex gap-5 bg-white text-black py-1 px-2">
          <p className="">STATISTICS</p>
          <p>BANK TRANSFERTS</p>
          <p>PAYMENTS</p>
          <p>SUBSCRIPTION</p>
          <p>USERS</p>
          <p>ORDERS</p>
          <p>SUBSCRIPTION</p>
          <p>WITHDRAW</p>
        </section>


        <section className="w-[99%] mx-auto mt-10 mb-5">
          <ChartComponent />
        </section>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4">
          <section className="bg-white p-4">
            <section className="text-center">
              <p className="text-sm text-black">NEW USER</p>
              <h2 className="text-2xl font-bold text-black">6</h2>
            </section>
          </section>
          <section className="bg-white p-4">
            <section className="text-center">
              <p className="text-sm text-black">DEPOSIT</p>
              <h2 className="text-2xl font-bold text-black">6</h2>
            </section>
          </section>
          <section className="bg-white p-4">
            <section className="text-center">
              <p className="text-sm text-black">WITHDRAW</p>
              <h2 className="text-2xl font-bold text-black">0</h2>
            </section>
          </section>
          <section className="bg-white p-4">
            <section className="text-center">
              <p className="text-sm text-black">ORDER PASSED</p>
              <h2 className="text-2xl font-bold text-black">0</h2>
            </section>
          </section>
          <section className="bg-white p-4">
            <section className="text-center">
              <p className="text-sm text-black">NEW SUBSCRIPTION</p>
              <h2 className="text-2xl font-bold text-black">0</h2>
            </section>
          </section>
        </div>




        <section className="w-[98%] mx-auto flex gap-5 justify-around p-4 bg-white text-black py-1 px-2 text-lg">
          <p className="">Currency</p>
          <p>Total trade</p>
          <p>Total deposit</p>
          <p>Total withdraw</p>
          <p>Fees</p>
        </section>
      </section>
    </div>
  )
}


