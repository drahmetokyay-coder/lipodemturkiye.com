import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-purple-600 mb-4">404</p>
        <h1 className="text-2xl font-bold text-stone-800 mb-3">
          Sayfa Bulunamadı
        </h1>
        <p className="text-stone-500 mb-8">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/araclar/semptom-testi"
            className="border border-purple-200 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Semptom Testini Çöz
          </Link>
        </div>
      </div>
    </div>
  );
}
