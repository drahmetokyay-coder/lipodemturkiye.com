"use client"

import { useState } from "react"
import { Shield } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus("success")
    setEmail("")
  }

  if (status === "success") {
    return (
      <div className="mt-8 max-w-md mx-auto">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 text-center">
          <p className="text-white font-semibold">Teşekkürler!</p>
          <p className="text-white/60 text-sm mt-1">E-posta listemize kaydoldunuz.</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-posta adresiniz"
          required
          className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm"
        />
        <button type="submit" className="px-6 py-3.5 bg-white text-[#1A6B5A] rounded-xl font-semibold text-sm hover:bg-[#FAF7F2] transition-colors whitespace-nowrap">
          Abone Ol
        </button>
      </form>
      <p className="text-white/30 text-xs mt-3 flex items-center justify-center gap-1.5">
        <Shield className="w-3 h-3" /> Bilgileriniz gizlidir. Spam yok.
      </p>
    </>
  )
}
