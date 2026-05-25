import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ClinicCardProps {
  name: string;
  district: string;
  treatments: string[];
  index: number;
}

const TREATMENT_LABELS: Record<string, string> = {
  vaser: "VASER Liposuction",
  tumescent: "Tumescent Liposuction",
  wal: "WAL Liposuction",
  pal: "PAL Liposuction",
  mld: "Manuel Lenf Drenaji",
  cdt: "Kompleks Dekongestif Tedavi",
  kompresyon: "Kompresyon Tedavisi",
  pnomatik: "Pnomatik Kompresyon",
  beslenme: "Beslenme Danismanligi",
  egzersiz: "Egzersiz Programi",
  psikolojik: "Psikolojik Destek",
};

export function ClinicCard({ name, district, treatments, index }: ClinicCardProps) {
  return (
    <div className="rounded-xl bg-white border border-stone-100 p-6 shadow-soft card-hover relative overflow-hidden">
      {/* Ust degrade cizgi */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1A6B5A] to-[#2D8B73]" />

      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-stone-800">{name}</h3>
          <div className="flex items-center gap-1.5 mt-1 text-sm text-stone-400">
            <MapPin className="w-3.5 h-3.5" />
            {district}
          </div>
        </div>
        <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-[#E8F5F0] text-[#1A6B5A] border border-[#C5E8DC]">
          Dogrulanmamis
        </span>
      </div>

      {/* Tedavi turleri */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {treatments.map((t) => (
          <Badge key={t} variant="default" className="text-[11px]">
            {TREATMENT_LABELS[t] || t}
          </Badge>
        ))}
      </div>

      {/* Iletisim bilgileri (placeholder) */}
      <div className="space-y-2 mb-5 text-sm text-stone-500">
        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-stone-400" />
          <span>Iletisim bilgisi icin tiklayiniz</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-stone-400" />
          <span>Pazartesi - Cuma: 09:00 - 18:00</span>
        </div>
      </div>

      {/* CTA */}
      <button
        className="w-full inline-flex items-center justify-center gap-2 bg-[#1A6B5A] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#15594A] transition-all duration-300 shadow-sm hover:shadow-md"
        aria-label={`${name} ile iletisime gec`}
      >
        Iletisime Gec
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
