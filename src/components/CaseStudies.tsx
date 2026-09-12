import { ArrowRight } from "lucide-react";
import LinkIcon from "./icons/LinkIcon";

const NARRATIV_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4";
const LUMINAR_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4";

function NarrativCard() {
  return (
    <div>
      <div className="relative aspect-[329/246] rounded-2xl overflow-hidden bg-[#1a1d2e] group cursor-pointer">
        <video
          src={NARRATIV_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <button
          type="button"
          className="absolute bottom-4 left-4 h-9 w-[36px] group-hover:w-[148px] bg-white rounded-full flex items-center gap-2 px-3 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <span className="text-[13px] font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 whitespace-nowrap">
            Learn more
          </span>
          <LinkIcon className="text-gray-900 flex-shrink-0 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
        </button>
      </div>
      <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
        Winner of Site of the Month 2025 - an interactive 3D showcase driving
        record engagement
      </p>
      <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
        Narrativ
      </h3>
    </div>
  );
}

function LuminarCard() {
  return (
    <div>
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#6b6b6b] group cursor-pointer">
        <video
          src={LUMINAR_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <button
          type="button"
          className="absolute bottom-4 left-4 h-9 w-[36px] group-hover:w-[168px] bg-gray-900 rounded-full flex items-center gap-2 px-3 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <span className="text-[13px] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 whitespace-nowrap">
            View case study
          </span>
          <ArrowRight
            size={14}
            className="text-white flex-shrink-0 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
          />
        </button>
      </div>
      <p className="text-[13px] sm:text-[14px] text-gray-600 mt-4 leading-relaxed">
        Transforming a dated platform into a conversion-focused brand
        experience
      </p>
      <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mt-1">
        Luminar
      </h3>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] sm:text-[12px] font-semibold flex-shrink-0">
            2
          </span>
          <span className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
            Featured client work
          </span>
        </div>

        <h2
          className="px-5 sm:px-8 lg:px-12 font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 lg:mb-16"
          style={{ fontSize: "clamp(1.75rem, 7vw, 4.2rem)" }}
        >
          <span className="sm:hidden">Our projects</span>
          <span className="hidden sm:inline" style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)" }}>
            Our projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12">
          <NarrativCard />
          <LuminarCard />
        </div>
      </div>
    </section>
  );
}
