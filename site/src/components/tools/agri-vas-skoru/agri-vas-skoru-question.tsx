import type { Question } from "@/data/tests/agri-vas-skoru";

interface Props {
  question: Question;
  selectedScore?: number;
  onAnswer: (score: number) => void;
}

const ACCENT = "#C46B3D";
const ACCENT_SOFT = "#FEF3E6";
const ACCENT_BORDER = "rgba(196,107,61,0.30)";

export function VasQuestion({ question, selectedScore, onAnswer }: Props) {
  return (
    <div>
      <p
        className="text-xs font-semibold uppercase tracking-wider mb-2"
        style={{ color: ACCENT }}
      >
        {question.title}
      </p>
      <h3 className="text-xl md:text-2xl font-bold text-[#2D3B36] mb-8 leading-snug">
        {question.text}
      </h3>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedScore === option.score;

          return (
            <button
              key={index}
              onClick={() => onAnswer(option.score)}
              className="w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-200"
              style={{
                borderColor: isSelected ? ACCENT : "rgb(231 229 228)",
                backgroundColor: isSelected ? ACCENT_SOFT : "#ffffff",
                color: isSelected ? "#2D3B36" : "rgba(45,59,54,0.8)",
                boxShadow: isSelected ? "0 1px 2px 0 rgb(0 0 0 / 0.05)" : undefined,
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = ACCENT_BORDER;
                  e.currentTarget.style.backgroundColor = "rgba(254,243,230,0.4)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = "rgb(231 229 228)";
                  e.currentTarget.style.backgroundColor = "#ffffff";
                }
              }}
            >
              <span className="text-base leading-relaxed">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
