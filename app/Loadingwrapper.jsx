"use client";
import { useState, useEffect } from "react";
import Loading from "./loading";

export default function LoadingWrapper({ children }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Force loader to show for at least 1.2 seconds
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return showContent ? children : <Loading />;
}
