import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

interface PhasePageProps {
  phase: string;
  phaseNumber: string;
  duration: string;
  title: string;
  subtitle?: string;
  description: string;
  points: { icon: LucideIcon; text: string }[];
  accentColor: string;
  bgStyle: string;
  subSections?: { title: string; duration: string; description: string }[];
}

export default function PhasePage({
  phase,
  phaseNumber,
  duration,
  title,
  subtitle,
  description,
  points,
  accentColor,
  bgStyle,
  subSections,
}: PhasePageProps) {
  return (
    <div
      className="h-full flex flex-col relative overflow-hidden"
      style={{ background: bgStyle }}
    >
      {/* Top accent bar */}
      <div className="h-1.5 w-full" style={{ background: accentColor }} />

      {/* Background pattern */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-5"
        style={{
          backgroundImage:
            "url('/assets/generated/eduexpose-pattern.dim_800x600.jpg')",
          backgroundSize: "cover",
        }}
      />

      {/* Decorative circle */}
      <div
        className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-8"
        style={{ background: accentColor, opacity: 0.06 }}
      />

      <div className="relative z-10 flex flex-col h-full p-6 lg:p-8 overflow-y-auto">
        {/* Phase badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{
                background: accentColor,
                color: "oklch(0.15 0.05 262)",
                fontFamily: "var(--font-display)",
              }}
            >
              {phaseNumber}
            </div>
            <div>
              <div
                className="text-xs font-semibold tracking-widest uppercase opacity-60"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "oklch(0.42 0.15 262)",
                }}
              >
                {phase}
              </div>
            </div>
          </div>
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              background: `${accentColor}20`,
              color: accentColor,
              fontFamily: "var(--font-display)",
              border: `1px solid ${accentColor}40`,
            }}
          >
            {duration}
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-2xl lg:text-3xl font-bold mb-1"
          style={{
            fontFamily: "var(--font-display)",
            color: "oklch(0.18 0.12 262)",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="text-sm font-medium mb-3"
            style={{ color: accentColor, fontFamily: "var(--font-display)" }}
          >
            {subtitle}
          </p>
        )}
        <p
          className="text-sm leading-relaxed mb-5"
          style={{
            color: "oklch(0.42 0.08 262)",
            fontFamily: "var(--font-body)",
          }}
        >
          {description}
        </p>

        {/* Points */}
        {points.length > 0 && (
          <div className="space-y-2.5 flex-1">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.text.slice(0, 20)}
                  className="flex items-start gap-3 p-3 rounded-xl transition-smooth"
                  style={{
                    background: "oklch(0.97 0.01 262)",
                    border: "1px solid oklch(0.90 0.02 262)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${accentColor}18` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: accentColor }} />
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "oklch(0.25 0.08 262)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {point.text}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Sub-sections for Phase 3 */}
        {subSections && (
          <div className="space-y-4 flex-1">
            {subSections.map((section, i) => (
              <div
                key={section.title}
                className="p-4 rounded-xl"
                style={{
                  background:
                    i === 0 ? `${accentColor}12` : "oklch(0.97 0.01 262)",
                  border: `1px solid ${accentColor}${i === 0 ? "35" : "20"}`,
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4
                    className="font-bold text-sm"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "oklch(0.18 0.12 262)",
                    }}
                  >
                    {section.title}
                  </h4>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{
                      background: accentColor,
                      color: "oklch(0.15 0.05 262)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {section.duration}
                  </span>
                </div>
                <p
                  className="text-xs leading-relaxed"
                  style={{
                    color: "oklch(0.42 0.08 262)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {section.description}
                </p>
              </div>
            ))}
            <div className="pt-2">
              {[
                "Work on real-time projects for practical experience",
                "Choose projects based on your interests and goals",
                "Learn project planning, development, and execution",
                "Mentor guidance throughout project development",
              ].map((text) => (
                <div key={text} className="flex items-start gap-2 py-1.5">
                  <CheckCircle2
                    className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                    style={{ color: accentColor }}
                  />
                  <span
                    className="text-xs leading-relaxed"
                    style={{
                      color: "oklch(0.35 0.08 262)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
