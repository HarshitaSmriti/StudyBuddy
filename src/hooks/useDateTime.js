import { useEffect, useState } from "react";

export default function useDateTime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = now.getHours();

  let greeting = "Good evening";
  if (hours < 12) greeting = "Good morning";
  else if (hours < 17) greeting = "Good afternoon";

  const dateLabel = now.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const fullDate = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return {
    greeting,
    dateLabel,
    fullDate,
  };
}
