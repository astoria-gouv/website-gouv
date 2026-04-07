"use client";

import { useLocale } from "@/context/locale-context";
import { Lock } from "lucide-react";

export function DomainInfo() {
  const locale = useLocale();
  const isFrench = locale.locale === "fr" || locale.locale === "be_fr" || locale.locale === "ch_fr";

  return (
    <div
      className="bg-white text-gray-900 py-2 px-4 text-sm border-b border-gray-200"
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-center">
        <Lock className="h-4 w-4 mr-2 text-gray-600" />
        <p className="text-center text-gray-700">
          {isFrench
            ? "Pour votre sécurité, tous les sites officiels du gouvernement sont sous le domaine *.gov.aor. Vérifiez toujours l'URL avant de partager vos informations."
            : "For your safety, all official government sites are under the domain *.gov.aor. Always check the URL before sharing your information."}
        </p>
      </div>
    </div>
  );
}
