import { auth } from "@/auth";
import DashboardFooter from "@/components/dashboardfotter";
import UserAvatar from "@/components/useravatar";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Page() {
  const authenticated = await auth();

  if (!authenticated) redirect('/login')
  return (
    <div className="bg-gray-900 text-white">
      <section className="h-screen md:hidden flex flex-col justify-center items-center overflow-hidden">
        <Image src="/chart.png" width={300} height={300} alt="Logo" />
        <p>PLEASE TURN YOUR DEVICE IN LANDSCAPE MODE.</p>
      </section>

      <section className="hidden md:block md:mt-[-1rem] lg:z-10 lg:mt-[4rem]">
        <header className="flex justify-between items-center">
          <section className="w-[20rem] h-16 ml-0 lg:ml-48 flex gap-10"></section>
          <section className="flex justify-between items-center gap-2 lg:gap-4 cursor-pointer">
            <UserAvatar />
          </section>
        </header>

        <DashboardFooter />
      </section>
    </div>
  );
}
