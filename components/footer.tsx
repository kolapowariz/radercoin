import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white w-[90%] sm:w-[94%] mx-auto pt-16">
      <section>
        <h2 className="text-5xl">radercoin</h2>
        <section className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-2 pt-10 text-gray-500 text-sm py-20 md:w-[100%] sm:text-xs xl:flex xl:gap-8 xl:justify-between xl:text-sm">
          <section className="order-1 sm:order-1 sm:h-fit xl:order-1">
            <h2 className="text-black text-base">Accounts</h2>
            <ul>
              <li className="py-1">
                <Link href="">Standard accounts</Link>
              </li>
              <li className="py-1">
                <Link href="">Professional accounts</Link>
              </li>
              <li className="py-1">
                <Link href="">Demo trading accounts accounts</Link>
              </li>
              <li className="py-1">
                <Link href="">Social trading accounts</Link>
              </li>
              <li className="py-1">
                <Link href="">Portfolio Management accounts</Link>
              </li>
            </ul>
          </section>

          <section className="order-2 sm:order-5 sm:mt-[-2rem] xl:mt-0 xl:order-2">
            <h2 className="text-black text-base">Tools</h2>
            <ul>
              <li className="py-1">
                <Link href="">Analytical tools</Link>
              </li>
              <li className="py-1">
                <Link href="">Economic calendar</Link>
              </li>
              <li className="py-1">
                <Link href="">Trading calculator</Link>
              </li>
              <li className="py-1">
                <Link href="">Currency conveter</Link>
              </li>
              <li className="py-1">
                <Link href="">Tick history</Link>
              </li>
              <li className="py-1">
                <Link href="">VPS hosting</Link>
              </li>
            </ul>
          </section>

          <section className="order-3 sm:order-4 sm:mt-[-5rem] sm:h-fit xl:order-3 xl:mt-0">
            <h2 className="text-black text-base xl:text-lg">Conditions</h2>
            <ul>
              <li className="py-1">
                <Link href="">Deposits and withdrawals</Link>
              </li>
              <li className="py-1">
                <Link href="">Fees</Link>
              </li>
              <li className="py-1">
                <Link href="">Client protection</Link>
              </li>
            </ul>
          </section>

          <section className="order-4 sm:order-3 xl:order-4">
            <h2 className="text-black text-base xl:text-lg">About</h2>
            <ul>
              <li className="py-1">
                <Link href="">About us</Link>
              </li>
              <li className="py-1">
                <Link href="">Why RaderCoin</Link>
              </li>
              <li className="py-1">
                <Link href="">RaderCoin reviews</Link>
              </li>
              <li className="py-1">
                <Link href="">Contact us</Link>
              </li>
              <li className="py-1">
                <Link href="">Help Center</Link>
              </li>
              <li className="py-1">
                <Link href="">RaderCoin in the media</Link>
              </li>
              <li className="py-1">
                <Link href="">RaderCoin in the community</Link>
              </li>
              <li className="py-1">
                <Link href="">RaderCoin Team Pro</Link>
              </li>
              <li className="py-1">
                <Link href="">Blog</Link>
              </li>
            </ul>
          </section>

          <section className="mt-[-10rem] order-5 sm:order-7 sm:mt-[-6rem] xl:order-5 xl:mt-0">
            <h2 className="text-black text-base">Markets</h2>
            <ul>
              <li className="py-1">
                <Link href="">Forex SFD</Link>
              </li>
              <li className="py-1">
                <Link href="">Commodities CFD</Link>
              </li>
              <li className="py-1">
                <Link href="">Stocks CFD</Link>
              </li>
              <li className="py-1">
                <Link href="">Indices CFD</Link>
              </li>
              <li className="py-1">
                <Link href="">Crypto CFD</Link>
              </li>
            </ul>
          </section>

          <section className="order-6 sm:order-6 xl:order-6 xl:mt-0">
            <h2 className="text-black text-base">Corporate</h2>
            <ul>
              <li className="py-1">
                <Link href="">Regulation</Link>
              </li>
              <li className="py-1">
                <Link href="">Legal documents</Link>
              </li>
              <li className="py-1">
                <Link href="">Compensation Fund</Link>
              </li>
            </ul>
          </section>

          <section className="mt-[-6rem] sm:mt-0 order-7 sm:order-2 xl:order-7 xl:mt-0">
            <h2 className="text-black text-base">Platforms</h2>
            <ul>
              <li className="py-1">
                <Link href="">MetaTrader 5</Link>
              </li>
              <li className="py-1">
                <Link href="">MetaTrader 4</Link>
              </li>
              <li className="py-1">
                <Link href="">RaderCoin Trade app</Link>
              </li>
              <li className="py-1">
                <Link href="">MetaTrader 5 mobile</Link>
              </li>
              <li className="py-1">
                <Link href="">MetaTrader 4 mobile</Link>
              </li>
              <li className="py-1">
                <Link href="">RaderCoin Terminal</Link>
              </li>
              <li className="py-1">
                <Link href="">MetaTrader WebTerminal</Link>
              </li>
            </ul>
          </section>

          <section className="order-8 sm:order-8 sm:w-auto xl:w-fit xl:order-8">
            <h2 className="text-black text-base xl:text-lg">Solutions</h2>
            <ul>
              <li className="py-1">
                <Link href="">Premier Program</Link>
              </li>
              <li className="py-1">
                <Link href="">Social Trading</Link>
              </li>
              <li className="py-1">
                <Link href="">Portfolio Management</Link>
              </li>
            </ul>
          </section>
        </section>

        <section className="pt-2 mt-[-2rem] pb-6 flex gap-3">
          <Link href="">
            <Image
              src="/facebook.svg"
              width={40}
              height={40}
              alt="Facebook Logo"
            />
          </Link>
          <Link href="">
            <Image
              src="/twitter.svg"
              width={40}
              height={40}
              alt="Twitter Logo"
            />
          </Link>
          <Link href="">
            <Image
              src="/instagram.svg"
              width={40}
              height={40}
              alt="Intagram Logo"
            />
          </Link>
          <Link href="">
            <Image
              src="/linkedin.svg"
              width={40}
              height={40}
              alt="LinkedIn Logo"
            />
          </Link>
          <Link href="">
            <Image
              src="/youtube.svg"
              width={40}
              height={40}
              alt="Youtube Logo"
            />
          </Link>
        </section>
        <hr />

        <section className="py-6 text-sm sm:text-xs text-gray-500">
          <p>
            RaderCoin (SC) Ltd ​is a Securities Dealer registered in Seychelles
            with registration number 8423606-1 and authorised by the Financial
            Services Authority (FSA) with licence number SD025. RaderCoin (SC) Ltd
            is also authorized as an Over-The-Counter Derivatives Provider (ODP)
            by the Financial Sector Conduct Authority (FSCA) in South Africa.
            The registered office of RaderCoin (SC) Ltd is at 9A CT House, 2nd
            floor, Providence, Mahe, Seychelles.
          </p>
          <p className="pt-2">
            RaderCoin B.V. is a Securities Intermediary registered in Curaçao with
            registration number 148698(0) and authorised by the Central Bank of
            Curaçao and Sint Maarten (CBCS) with licence number 0003LSI. The
            registered office of RaderCoin B.V. is at Emancipatie Boulevard
            Dominico F. “Don” Martina 31, Curaçao.
          </p>
          <p className="pt-2">
            RaderCoin (VG) Ltd is authorised by the Financial Services Commission
            (FSC) in BVI with registration number 2032226 and investment
            business licence number SIBA/L/20/1133. The registered office of
            RaderCoin (VG) Ltd is at Trint Chambers, P.O. Box 4301, Road Town,
            Tortola, BVI.
          </p>
          <p className="pt-2">
            The entities above are duly authorized to operate under the RaderCoin
            brand and trademarks.
          </p>
          <p className="pt-2">
            Risk Warning: Our services relate to complex derivative products
            which are traded outside an exchange. These products come with a
            high risk of losing money rapidly due to leverage and thus are not
            appropriate for all investors. Under no circumstances shall RaderCoin
            have any liability to any person or entity for any loss or damage in
            whole or part caused by, resulting from, or relating to any
            investing activity.{" "}
            <Link href="" className="text-blue-600">
              Learn more.
            </Link>
          </p>
          <p className="pt-2">
            The entities above do not offer services to residents of certain
            jurisdictions including the USA, Canada, Iran, North Korea, Europe,
            the United Kingdom, Russia, Belarus and others
          </p>
          <p className="pt-2">
            The information on this website does not constitute investment
            advice or a recommendation or a solicitation to engage in any
            investment activity.
          </p>
          <p className="pt-2">
            Any interaction with this website constitutes an individual and
            voluntary operation on the part of the person accessing it. This
            website and its content should not be understood as an invitation
            for the contracting and/or acquisition of RaderCoin` financial services
            and products.
          </p>
          <p className="pt-2">
            The information on this website may only be copied with the express
            written permission of RaderCoin.
          </p>
          <p className="pt-2">
            RaderCoin complies with the Payment Card Industry Data Security
            Standard (PCI DSS) to ensure your security and privacy. We conduct
            regular vulnerability scans and penetration tests in accordance with
            the PCI DSS requirements for our business model.
          </p>
          <p className="pt-2">
            ¹At RaderCoin, 95% of withdrawals are processed instantly (under 1
            minute). Once your funds leave our custody, it&apos;s up to your
            chosen payment provider to process the funds and credit your
            account.
          </p>
          <p className="pt-2">
            ²Deposit fees may be applied to specific payment methods to maintain
            the integrity of our payment processes.
          </p>
          <p className="pt-2">
            ³Spreads may fluctuate and widen due to factors including market
            volatility, news releases, economic events, when markets open or
            close, and the type of instruments being traded.
          </p>
          <p className="pt-2">
            ⁴Best spreads refers to average or max spreads offered by RaderCoin,
            excluding agents’ commission for XAUUSD for the first two seconds
            after high-impact news, from January to May 2024, compared with five
            other large brokers.
          </p>
        </section>
        <hr />

        <section className="xl:grid xl:grid-cols-2 xl:justify-between xl:text-base">
          <section className="pt-4 flex flex-col sm:flex-row sm:gap-4 sm:text-xs gap-2 text-sm order-1 xl:order-1 xl:text-base">
            <Link href="">Risk Disclosure</Link>
            <Link href="">Preventing Money Laundering</Link>
            <Link href="">Privacy Policy</Link>
          </section>
          <section className="pt-6 xl:pt-0 order-2 xl:order-3">
            <Image
              src="/complaints.svg"
              alt="complaints"
              width={130}
              height={130}
            />
          </section>
          <section className="pt-6 pb-16 text-xs text-gray-500 order-3 xl:order-2 justify-self-end xl:text-base">
            <p>© 2025 RaderCoin</p>
          </section>
        </section>
      </section>
    </footer>
  );
}
