import { ModalProps } from "@/types";
import { XMarkIcon } from "@heroicons/react/24/solid";


export function AdminModal({ onClose }: ModalProps) {


  const users = [
    { name: "Evangelos Delivasilis", email: "edelivasilis@gmail.com", sign: 'Standard', login: "25/02/2025 23:18", notification: '-', currency: "EUR" },
    { name: "Hans Bjarni Sigurbjörnsson", email: "Hansbjarni11@gmail.com", sign: 'Standard', login: "19/02/2025 17:26", notification: '-', currency: "USD" },
    { name: "Björn Ehrhardt", email: "ath_ehrhardt@yahoo.de", sign: 'Standard', login: "14/02/2025 02:47", notification: '-', currency: "EUR" },
    { name: "Ivan Blazanovic", email: "ivan.blazanovic2804@gmail.com", sign: 'Standard', login: "11/02/2025 06:11", notification: '-', currency: "EUR" },
    { name: "Aditi Puri", email: "aditi.puri2207@gmail.com", sign: 'Standard', login: "10/02/2025 08:02", notification: '-', currency: "AUD" },
    { name: "Evangelos Delivasilis", email: "edelivasilis@gmail.com", sign: 'Standard', login: "25/02/2025 23:18", notification: '-', currency: "EUR" },
    { name: "Hans Bjarni Sigurbjörnsson", email: "Hansbjarni11@gmail.com", sign: 'Standard', login: "19/02/2025 17:26", notification: '-', currency: "USD" },
    { name: "Björn Ehrhardt", email: "ath_ehrhardt@yahoo.de", sign: 'Standard', login: "14/02/2025 02:47", notification: '-', currency: "EUR" },
    { name: "Ivan Blazanovic", email: "ivan.blazanovic2804@gmail.com", sign: 'Standard', login: "11/02/2025 06:11", notification: '-', currency: "EUR" },
    { name: "Aditi Puri", email: "aditi.puri2207@gmail.com", sign: 'Standard', login: "10/02/2025 08:02", notification: '-', currency: "AUD" },
    { name: "Evangelos Delivasilis", email: "edelivasilis@gmail.com", sign: 'Standard', login: "25/02/2025 23:18", notification: '-', currency: "EUR" },
    { name: "Hans Bjarni Sigurbjörnsson", email: "Hansbjarni11@gmail.com", sign: 'Standard', login: "19/02/2025 17:26", notification: '-', currency: "USD" },
    { name: "Björn Ehrhardt", email: "ath_ehrhardt@yahoo.de", sign: 'Standard', login: "14/02/2025 02:47", notification: '-', currency: "EUR" },
    { name: "Ivan Blazanovic", email: "ivan.blazanovic2804@gmail.com", sign: 'Standard', login: "11/02/2025 06:11", notification: '-', currency: "EUR" },
    { name: "Aditi Puri", email: "aditi.puri2207@gmail.com", sign: 'Standard', login: "10/02/2025 08:02", notification: '-', currency: "AUD" },
    { name: "Evangelos Delivasilis", email: "edelivasilis@gmail.com", sign: 'Standard', login: "25/02/2025 23:18", notification: '-', currency: "EUR" },
    { name: "Hans Bjarni Sigurbjörnsson", email: "Hansbjarni11@gmail.com", sign: 'Standard', login: "19/02/2025 17:26", notification: '-', currency: "USD" },
    { name: "Björn Ehrhardt", email: "ath_ehrhardt@yahoo.de", sign: 'Standard', login: "14/02/2025 02:47", notification: '-', currency: "EUR" },
    { name: "Ivan Blazanovic", email: "ivan.blazanovic2804@gmail.com", sign: 'Standard', login: "11/02/2025 06:11", notification: '-', currency: "EUR" },
    { name: "Aditi Puri", email: "aditi.puri2207@gmail.com", sign: 'Standard', login: "10/02/2025 08:02", notification: '-', currency: "AUD" },
  ];
  return (
    <div className="fixed z-20 top-[4.5rem] w-[94%] lg:w-[96%] left-16 lg:left-20 shadow-lg transition-transform duration-300 h-screen lg:h-[87.7%] bg-[#181e2c] overflow-scroll">
      <button title="Close" onClick={onClose} className="text-gray-400 hover:text-white hidden">
        <XMarkIcon className="w-5 h-5" />
      </button>

      <section>

        <section className="flex gap-5 bg-white text-black py-1 px-2">
          <p className="">DASHBOARD</p>
          <p>GENERAL SETTING</p>
          <p>COINS</p>
          <p>CURRENCIES</p>
          <p>MAIL SETTINGS</p>
          <p>PAYMENT</p>
          <p>SUBSCRIPTION</p>
          <p>NEWS - SOCIAL</p>
          <p>INTRO</p>
          <p>TRADING</p>
          <p>CRON</p>
          <p>ADDITIONAL PAGES</p>
          <p>BANK ACCOUNTS</p>
          <p>IDENTITY</p>
          <p>TEMPLATES</p>
        </section>



        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <section className="bg-white p-4">
            <section className="text-center">
              <p className="text-sm text-black">Today Visits</p>
              <h2 className="text-2xl font-bold text-black">0</h2>
            </section>
          </section>
          <section className="bg-white p-4">
            <section className="text-center">
              <p className="text-sm text-black">7 Days Visits</p>
              <h2 className="text-2xl font-bold text-black">7</h2>
            </section>
          </section>
          <section className="bg-white p-4">
            <section className="text-center">
              <p className="text-sm text-black">Number of Users</p>
              <h2 className="text-2xl font-bold text-black">46</h2>
            </section>
          </section>
        </div>

        {/* Last Users Table */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Last Users</h3>
          <div className="overflow-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gray-200 text-black">
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Email</th>
                  <th className="p-2 text-left">Signin method</th>
                  <th className="p-2 text-left">Last Login</th>
                  <th className="p-2 text-left">Notifications enabled</th>
                  <th className="p-2 text-left">Currency</th>
                  <th className="p-2 text-center"></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="border-b border-gray-700 hover:bg-gray-700 text-black">
                    <td className="p-2">{user.name}</td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2">{user.sign}</td>
                    <td className="p-2">{user.login}</td>
                    <td className="p-2">{user.notification}</td>
                    <td className="p-2">{user.currency}</td>
                    <td className="p-2 text-center">
                      <button className="text-gray-300">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}


