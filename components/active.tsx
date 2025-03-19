import Image from "next/image";

export default function Active() {
  return (
    <section className="px-8 pb-4 sm:grid sm:grid-cols-2 sm:gap-3 sm:items-center sm:pb-14 md:grid-cols-4 lg:w-[90%] lg:mx-auto lg:gap-10">
      <section className="flex gap-3 items-center py-2">
        <span><Image src='/active.svg' alt="Active" width={23} height={23} /></span>
        <span>800,000+ active traders</span>
      </section>
      <section className="flex gap-3 items-center py-2">
        <span><Image src='/license.svg' alt="License" width={23} height={23} /></span>
        <span>Multiple regulatory licenses</span>
      </section>
      <section className="flex gap-3 items-center py-2">
        <span><Image src='/support.svg' alt="Support" width={23} height={23} /></span>
        <span>24/7 customer support</span>
      </section>
      <section className="flex gap-3 items-center py-2">
        <span><Image src='/certified.svg' alt="Certified" width={23} height={23} /></span>
        <span>PCI DSS certified</span>
      </section>
    </section>
  )
}