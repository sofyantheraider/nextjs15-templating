"use client";
import Script from "next/script";

export default function ThemeScript() {
  return (
    <>
      {/* Helpers dan konfigurasi awal */}
      <Script src="/assets/vendor/js/helpers.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/js/template-customizer.js" strategy="beforeInteractive" />
      <Script src="/assets/js/config.js" strategy="beforeInteractive" />

      {/* Core JS dari template */}
      <Script src="/assets/vendor/libs/jquery/jquery.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/libs/popper/popper.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/js/bootstrap.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/libs/node-waves/node-waves.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/libs/hammer/hammer.js" strategy="afterInteractive" />
      <Script src="/assets/vendor/js/menu.js" strategy="afterInteractive" />

      {/* Main file layout (untuk toggle menu, animasi dsb) */}
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </>
  );
}
