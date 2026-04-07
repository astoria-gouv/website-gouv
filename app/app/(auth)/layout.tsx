"use client";

import { LocaleProvider } from "@/context/locale-context";
import { Providers } from "@/context/Providers";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <Providers>{children}</Providers>
    </LocaleProvider>
  );
}
