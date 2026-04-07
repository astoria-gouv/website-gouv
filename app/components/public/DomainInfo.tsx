"use client";

import { useTranslations } from "next-intl";
import { Lock } from "lucide-react";

export function DomainInfo() {
  const t = useTranslations("DomainInfo");

  return (
    <div
      className="bg-white text-gray-900 py-2 px-4 text-sm border-b border-gray-200"
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-center">
        <Lock className="h-4 w-4 mr-2 text-gray-600" />
        <p className="text-center text-gray-700">{t("securityMessage")}</p>
      </div>
    </div>
  );
}
