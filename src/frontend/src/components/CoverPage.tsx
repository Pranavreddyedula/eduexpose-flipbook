import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

export default function CoverPage() {
  return (
    <div
      className="h-full flex flex-col relative overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, oklch(0.18 0.12 262) 0%, oklch(0.25 0.15 255) 50%, oklch(0.20 0.10 270) 100%)",
      }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('/assets/generated/eduexpose-hero.dim_1200x800.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Geometric accent shapes */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
        style={{
          background: "oklch(0.75 0.18 75)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10"
        style={{
          background: "oklch(0.55 0.20 155)",
          transform: "translate(-30%, 30%)",
        }}
      />
      <div
        className="absolute top-1/3 right-8 w-2 h-32 rounded-full opacity-40"
        style={{ background: "oklch(0.75 0.18 75)" }}
      />
      <div
        className="absolute top-1/3 right-14 w-1 h-20 rounded-full opacity-25"
        style={{ background: "oklch(0.75 0.18 75)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-8 lg:p-10">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3 mb-auto">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: "oklch(0.75 0.18 75)" }}
          >
            <BookOpen
              className="w-5 h-5"
              style={{ color: "oklch(0.18 0.12 262)" }}
            />
          </div>
          <div>
            <span
              className="text-xl font-bold tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                color: "oklch(0.98 0 0)",
              }}
            >
              EduExpose
            </span>
            <div
              className="text-xs tracking-widest uppercase opacity-70"
              style={{ color: "oklch(0.75 0.18 75)" }}
            >
              Learning Beyond Limits
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 w-fit"
            style={{
              background: "oklch(0.75 0.18 75 / 0.15)",
              border: "1px solid oklch(0.75 0.18 75 / 0.4)",
            }}
          >
            <Sparkles
              className="w-3.5 h-3.5"
              style={{ color: "oklch(0.75 0.18 75)" }}
            />
            <span
              className="text-xs font-semibold tracking-wide uppercase"
              style={{
                color: "oklch(0.75 0.18 75)",
                fontFamily: "var(--font-display)",
              }}
            >
              Summer 2025
            </span>
          </div>

          <h1
            className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "oklch(0.98 0 0)",
            }}
          >
            Summer
            <br />
            <span style={{ color: "oklch(0.75 0.18 75)" }}>Internship</span>
            <br />
            Program
          </h1>

          <p
            className="text-base leading-relaxed mb-8 max-w-xs"
            style={{
              color: "oklch(0.78 0.04 262)",
              fontFamily: "var(--font-body)",
            }}
          >
            Gain Experience. Build Skills.
            <br />
            <strong style={{ color: "oklch(0.90 0.08 75)" }}>
              Launch Your Career.
            </strong>
          </p>

          {/* Program highlights */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              { num: "4", label: "Phases" },
              { num: "55+", label: "Days" },
              { num: "MNC", label: "Mentors" },
              { num: "100%", label: "Placement" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg p-3 text-center"
                style={{
                  background: "oklch(0.98 0 0 / 0.08)",
                  border: "1px solid oklch(0.98 0 0 / 0.15)",
                }}
              >
                <div
                  className="text-xl font-bold"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "oklch(0.75 0.18 75)",
                  }}
                >
                  {item.num}
                </div>
                <div
                  className="text-xs opacity-70"
                  style={{ color: "oklch(0.88 0.02 262)" }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div
          className="flex items-center justify-between pt-4"
          style={{ borderTop: "1px solid oklch(0.98 0 0 / 0.15)" }}
        >
          <span
            className="text-xs opacity-60"
            style={{
              color: "oklch(0.88 0.02 262)",
              fontFamily: "var(--font-body)",
            }}
          >
            Turn page to explore →
          </span>
          <div className="flex items-center gap-1.5">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "oklch(0.75 0.18 75)" }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full opacity-40"
              style={{ background: "oklch(0.75 0.18 75)" }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full opacity-40"
              style={{ background: "oklch(0.75 0.18 75)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
