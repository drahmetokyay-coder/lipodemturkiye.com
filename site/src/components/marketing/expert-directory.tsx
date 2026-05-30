// Uzmanlar bölümü "medical ID card" tasarımına taşındı.
// Implementasyon: components/marketing/experts/*
// Geriye dönük uyumluluk için ExpertDirectory adıyla yeniden dışa aktarılır.
export { ExpertsSection as ExpertDirectory } from "./experts/experts-section"
