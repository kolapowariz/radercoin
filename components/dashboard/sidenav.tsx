'use client';
import NavLinks from '@/components/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="md:flex md:h-full flex-col px-3 py-4 md:px-2 hidden bg-gray-800 text-white">

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-800 md:block"></div>
        <form>
          <button onClick={(event) => {
            event.preventDefault();
            localStorage.removeItem("isAuthenticated");
            window.location.href = "/";
          }} className="rounded-md hover:bg-gray-900 md:flex-none md:justify-start md:py-10 px-1">
            <PowerIcon className="w-10 px-2 p-4" />
            {/* <div className="hidden lg:block">Sign Out</div> */}
          </button>
        </form>
      </div>
    </div>
  );
}
