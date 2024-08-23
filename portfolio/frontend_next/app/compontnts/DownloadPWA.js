"use client";
import React, { useEffect, useState } from "react";
import {IoMdDownload} from "react-icons/io"

const DownloadPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Prevent the default mini-infobar
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt !== null) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
      }
    }
  };

  return (
    <button
      onClick={handleInstallClick}
      className={" fixed bottom-2 right-7 sm:button-4 sm:right-4 md:button-6 md:right-6 lg:button-8 lg:right-8 bg-[#313BAC] text-white p-3 sm:p-4 md:p-5 rounded-full hover:bg-green-600 "}
    >
      <IoMdDownload />
    </button>
  );
};

export default DownloadPWA;
