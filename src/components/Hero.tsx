import { ArrowRight } from "lucide-react";
import HeroShaderBackground from "./HeroShaderBackground";
import Navbar from "./Navbar";
import TextRollButton from "./TextRollButton";
import CompassIcon from "./icons/CompassIcon";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#EFEFEF] overflow-hidden">
      <HeroShaderBackground />

      <Navbar />

      <div className="flex-1" />

      <div className="relative z-20 max-w-[1440px] mx-auto w-full px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
        <p className="text-[13px] sm:text-[14px] text-gray-900 tracking-wide mb-5 sm:mb-8">
          Axion Studio
        </p>

        <h1
          className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900"
          style={{ fontSize: "clamp(1.75rem, 7vw, 4.2rem)" }}
        >
          <span className="sm:hidden">
            We craft digital experiences for brands ready to dominate their category online.
          </span>
          <span
            className="hidden sm:block"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}
          >
            We craft digital experiences
            <br />
            for brands ready to dominate
            <br />
            their category online.
          </span>
        </h1>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          <TextRollButton
            text="Start a project"
            className="bg-[#F26522] hover:bg-[#e05a1a] rounded-full pl-5 sm:pl-6 pr-2 py-2 transition-colors"
            textClassName="text-white text-[13px] sm:text-[14px] font-medium"
            circleClassName="w-7 h-7 sm:w-8 sm:h-8 bg-white ml-4"
            icon={<ArrowRight size={16} className="text-[#F26522]" />}
          />

          <div className="flex items-center gap-2 bg-white rounded-[4px] px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300">
            <CompassIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#E8704E]" />
            <span className="text-[13px] sm:text-[14px] font-medium text-gray-900">
              Certified Partner
            </span>
            <span className="text-[10px] sm:text-[11px] bg-gray-900 text-white px-1.5 sm:px-2 py-0.5 rounded">
              Featured
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
