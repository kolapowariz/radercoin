import SideNav from "@/components/dashboard/sidenav";
import Image from 'next/image';
import Link from 'next/link';
// export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-900 flex flex-col h-screen md:flex-row md:overflow-hidden">
      <Link
        className="mb-2 lg:flex rounded-md p-4 lg:p-0 md:h-20 hidden"
        href=""
      >
        <div className="text-white md:mb-4 lg:relative lg:z-10">
          <Image src='/chart.png' width={200} height={100} alt="Logo" />
        </div>
      </Link>
      <div className="w-full flex-none md:w-16 lg:w-[5rem] lg:mt-20 lg:ml-[-12.6rem]">
        <SideNav />
      </div>
      <div className="flex-grow p-6 lg:mt-[-5rem] md:overflow-y-auto">{children}</div>
    </div>
  );
}