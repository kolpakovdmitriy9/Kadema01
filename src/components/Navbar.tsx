import { useState } from "react";
import { ArrowRight, Clock, Menu, X } from "lucide-react";
import useLondonTime from "../hooks/useLondonTime";
import TextRollButton from "./TextRollButton";

const NAV_LINKS = ["Projects", "Studio", "Journal", "Connect"];
const EASE = "cubic-bezier(0.32,0.72,0,1)";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const time = useLondonTime();

  return (
    <>
      <div className="relative z-20 max-w-[1440px] mx-auto w-full p-2 sm:p-3">
        <nav className="flex items-center justify-between bg-white rounded-full p-[5px]">
          <div className="flex items-center gap-6 pl-1">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold tracking-tight text-[10px] sm:text-[11px]">AX</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 pr-1">
            <span className="hidden lg:inline text-[13px] text-gray-600">
              Taking on projects for Q1 2026
            </span>
            <span className="flex items-center gap-1.5 text-[13px] text-gray-600">
              <Clock size={14} />
              {time} in London
            </span>
            <TextRollButton
              text="Book a strategy call"
              className="bg-gray-900 rounded-full pl-5 pr-2 py-2"
              textClassName="text-white text-[13px] font-medium"
              circleClassName="w-6 h-6 bg-white ml-3"
              icon={<ArrowRight size={14} className="text-gray-900" />}
            />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-2 text-[13px] font-medium mr-1"
          >
            {menuOpen ? (
              <>
                Close <X size={16} />
              </>
            ) : (
              <>
                Menu <Menu size={16} />
              </>
            )}
          </button>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className="absolute left-0 right-0 bottom-0 mx-3 mb-3 bg-white rounded-2xl p-6 transition-transform duration-500"
          style={{
            transitionTimingFunction: EASE,
            transform: menuOpen ? "translateY(0)" : "translateY(100%)",
          }}
        >
          <div className="flex items-center gap-1.5 text-[13px] text-gray-600 mb-6">
            <Clock size={14} />
            {time} in London
          </div>
          <div className="flex flex-col gap-1 mb-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-[28px] sm:text-[32px] font-medium text-gray-900 py-2"
              >
                {link}
              </a>
            ))}
          </div>
          <TextRollButton
            text="Start a project"
            className="bg-gray-900 rounded-full pl-6 pr-2 py-2 w-full justify-between"
            textClassName="text-white text-[14px] font-medium"
            circleClassName="w-8 h-8 bg-white ml-3"
            icon={<ArrowRight size={16} className="text-gray-900" />}
          />
        </div>
      </div>
    </>
  );
}
