import { useEffect, useState } from "react";

function formatLondonTime() {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/London",
  }).format(new Date());
}

export default function useLondonTime() {
  const [time, setTime] = useState(formatLondonTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatLondonTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}
