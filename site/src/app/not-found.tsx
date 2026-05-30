import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] px-4">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-[#1A6B5A] mb-4">404</p>
        <h1 className="text-2xl font-bold text-[#2D3B36] mb-3">
          Sayfa Bulunamadı
        </h1>
        <p className="text-[#6B7B75] mb-8">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-[#1A6B5A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#15594A] transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/araclar/lipodem-semptom-testi"
            className="border border-[#C5E8DC] text-[#1A6B5A] px-6 py-3 rounded-lg font-semibold hover:bg-[#E8F5F0] transition-colors"
          >
            Semptom Testini Çöz
          </Link>
        </div>
      </div>
    </div>
  );
}
