import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  isFlipping: boolean;
}

export default function Navigation({
  currentPage,
  totalPages,
  onPrev,
  onNext,
  isFlipping,
}: NavigationProps) {
  const canPrev = currentPage > 0;
  const canNext = currentPage < totalPages - 1;

  return (
    <div
      className="flex items-center justify-center gap-6 py-5"
      data-ocid="flipbook.nav"
    >
      {/* Prev button */}
      <button
        type="button"
        onClick={onPrev}
        disabled={!canPrev || isFlipping}
        data-ocid="flipbook.pagination_prev"
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-smooth disabled:opacity-30 disabled:cursor-not-allowed"
        style={{
          background: canPrev ? "oklch(0.42 0.15 262)" : "oklch(0.88 0.02 262)",
          color: canPrev ? "oklch(0.98 0 0)" : "oklch(0.45 0.05 262)",
          fontFamily: "var(--font-display)",
          boxShadow: canPrev ? "0 4px 16px oklch(0.42 0.15 262 / 0.3)" : "none",
          border: "none",
        }}
      >
        <ChevronLeft className="w-4 h-4" />
        Previous
      </button>

      {/* Page indicator */}
      <div
        className="flex items-center gap-3"
        data-ocid="flipbook.page_indicator"
      >
        {/* Dot indicators */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalPages }, (_, i) => i).map((pageIndex) => (
            <div
              key={pageIndex}
              className="rounded-full transition-all duration-300"
              style={{
                width: pageIndex === currentPage ? "20px" : "6px",
                height: "6px",
                background:
                  pageIndex === currentPage
                    ? "oklch(0.42 0.15 262)"
                    : pageIndex < currentPage
                      ? "oklch(0.65 0.10 262)"
                      : "oklch(0.88 0.02 262)",
              }}
            />
          ))}
        </div>
        <span
          className="text-sm font-semibold px-3 py-1 rounded-lg"
          style={{
            background: "oklch(0.93 0.02 262)",
            color: "oklch(0.42 0.15 262)",
            fontFamily: "var(--font-display)",
          }}
        >
          {currentPage + 1} / {totalPages}
        </span>
      </div>

      {/* Next button */}
      <button
        type="button"
        onClick={onNext}
        disabled={!canNext || isFlipping}
        data-ocid="flipbook.pagination_next"
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-smooth disabled:opacity-30 disabled:cursor-not-allowed"
        style={{
          background: canNext ? "oklch(0.75 0.18 75)" : "oklch(0.88 0.02 262)",
          color: canNext ? "oklch(0.15 0.05 262)" : "oklch(0.45 0.05 262)",
          fontFamily: "var(--font-display)",
          boxShadow: canNext ? "0 4px 16px oklch(0.75 0.18 75 / 0.35)" : "none",
          border: "none",
        }}
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
