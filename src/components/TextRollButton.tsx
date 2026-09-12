import type { ReactNode } from "react";

const EASE = "cubic-bezier(0.25,0.1,0.25,1)";

interface TextRollButtonProps {
  text: string;
  className?: string;
  textClassName?: string;
  circleClassName?: string;
  icon: ReactNode;
  onClick?: () => void;
}

export default function TextRollButton({
  text,
  className = "",
  textClassName = "",
  circleClassName = "",
  icon,
  onClick,
}: TextRollButtonProps) {
  return (
    <button type="button" onClick={onClick} className={`group inline-flex items-center ${className}`}>
      <span className={`overflow-hidden h-[20px] ${textClassName}`}>
        <span
          className="flex flex-col transition-transform duration-500 group-hover:-translate-y-1/2"
          style={{ transitionTimingFunction: EASE }}
        >
          <span className="block h-[20px] leading-[20px] whitespace-nowrap">{text}</span>
          <span className="block h-[20px] leading-[20px] whitespace-nowrap">{text}</span>
        </span>
      </span>
      <span
        className={`flex items-center justify-center rounded-full transition-transform duration-500 group-hover:-rotate-45 ${circleClassName}`}
        style={{ transitionTimingFunction: EASE }}
      >
        {icon}
      </span>
    </button>
  );
}
