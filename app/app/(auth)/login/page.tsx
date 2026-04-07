"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { useLocale } from "@/context/locale-context";

export default function LoginPage() {
  const { login } = useAuth();
  const locale = useLocale();
  const isFrench = locale.locale === "fr" || locale.locale === "be_fr" || locale.locale === "ch_fr";

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login(email, password);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : isFrench
            ? "Une erreur est survenue. Veuillez réessayer."
            : "An error occurred. Please try again.";
      setError(message);
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center gap-3">
            <Link href={`/${locale.locale}`} className="flex items-center gap-3">
              <img
                src="/images/astoria-government-logo-font.png"
                alt={isFrench ? "Gouvernement" : "Government"}
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#003580] leading-tight">
                  {isFrench ? "Gouvernement" : "Government"}
                </span>
                <span className="text-xs text-gray-500 leading-tight">info.gov.aor</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6">
        <Link
          href={`/${locale.locale}`}
          className="inline-flex items-center gap-1 text-sm text-[#003580] hover:underline"
        >
          ← {isFrench ? "Retour à l'accueil" : "Back to home"}
        </Link>
      </div>

      <main className="flex-1 flex items-center justify-center px-4 pb-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#003580]">
                {isFrench ? "Connexion à votre espace" : "Sign in to your account"}
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                {isFrench
                  ? "Accédez à votre espace personnel pour suivre vos démarches et informations."
                  : "Access your personal space to track your procedures and information."}
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-md bg-red-50 border border-red-200 text-red-700 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {isFrench ? "Adresse e-mail" : "Email address"}
                </Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={isFrench ? "votre@email.com" : "your@email.com"}
                  className="w-full h-10 border-gray-300 focus:border-[#003580] focus:ring-[#003580]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    {isFrench ? "Mot de passe" : "Password"}
                  </Label>
                  <Link
                    href="/mot-de-passe-oublie"
                    className="text-sm text-[#003580] hover:underline"
                  >
                    {isFrench ? "Mot de passe oublié ?" : "Forgot password?"}
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={isFrench ? "••••••••" : "••••••••"}
                    className="w-full h-10 pr-10 border-gray-300 focus:border-[#003580] focus:ring-[#003580]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label={
                      showPassword
                        ? isFrench
                          ? "Masquer le mot de passe"
                          : "Hide password"
                        : isFrench
                          ? "Afficher le mot de passe"
                          : "Show password"
                    }
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-10 bg-[#003580] text-white hover:bg-[#002040] font-medium"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>{isFrench ? "Se connecter" : "Sign in"}</>
                )}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              {isFrench ? "Pas encore de compte ?" : "Don't have an account?"}{" "}
              <Link href="/register" className="font-medium text-[#003580] hover:underline">
                {isFrench ? "Créer un compte" : "Create an account"}
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
