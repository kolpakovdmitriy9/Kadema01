import { ArrowRight } from "lucide-react";
import TextRollButton from "./TextRollButton";

const SMALL_IMG =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85";
const LARGE_IMG =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85";

function AboutButton({ className = "" }: { className?: string }) {
  return (
    <TextRollButton
      text="About our studio"
      className={`bg-[#F26522] hover:bg-[#e05a1a] rounded-full pl-5 sm:pl-6 pr-2 py-2 transition-colors ${className}`}
      textClassName="text-white text-[13px] sm:text-[14px] font-medium"
      circleClassName="w-7 h-7 sm:w-8 sm:h-8 bg-white ml-4"
      icon={<ArrowRight size={16} className="text-[#F26522]" />}
    />
  );
}

export default function About() {
  return (
    <section className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] sm:text-[12px] font-semibold flex-shrink-0">
            1
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Introducing Axion
          </span>
        </div>

        <h2
          className="px-5 sm:px-8 lg:px-12 font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-12 sm:mb-16 lg:mb-28"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3.2rem)" }}
        >
          Strategy-led creatives, delivering
          <br />
          results in digital and beyond.
        </h2>

        <div className="lg:hidden px-5 sm:px-8 lg:px-12">
          <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900 mb-6">
            Through research, creative thinking and iteration we help growing
            brands realize their digital full potential.
          </p>
          <AboutButton className="mb-10 sm:mb-12" />
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <img
              src={SMALL_IMG}
              alt="Axion Studio project detail"
              className="sm:w-[45%] aspect-[438/346] rounded-xl sm:rounded-2xl object-cover w-full"
            />
            <img
              src={LARGE_IMG}
              alt="Axion Studio project overview"
              className="sm:w-[55%] aspect-[900/600] rounded-xl sm:rounded-2xl object-cover w-full"
            />
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8 px-5 sm:px-8 lg:px-12">
          <div className="self-end">
            <img
              src={SMALL_IMG}
              alt="Axion Studio project detail"
              className="w-full aspect-[438/346] rounded-2xl object-cover"
            />
          </div>
          <div className="self-start flex justify-end">
            <div>
              <p className="text-[16px] xl:text-[18px] leading-[1.65] whitespace-nowrap text-gray-900 mb-8">
                Through research, creative thinking and iteration
                <br />
                we help growing brands realize their digital
                <br />
                full potential.
              </p>
              <AboutButton />
            </div>
          </div>
          <div className="self-end">
            <img
              src={LARGE_IMG}
              alt="Axion Studio project overview"
              className="w-full aspect-[3/2] rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
