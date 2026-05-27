import { CheckCircle2, Globe, Mail, Phone, Rocket, Star } from "lucide-react";

export default function ClosingPage() {
  return (
    <div
      className="h-full flex flex-col relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.18 0.12 262) 0%, oklch(0.22 0.14 258) 60%, oklch(0.28 0.12 265) 100%)",
      }}
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "url('/assets/generated/eduexpose-hero.dim_1200x800.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{ background: "oklch(0.75 0.18 75)" }}
      />

      {/* Stars decoration */}
      {[...Array(5)].map((_, i) => {
        const positions = [
          "10% / 5%",
          "25% / 13%",
          "40% / 21%",
          "55% / 29%",
          "70% / 37%",
        ];
        const sizes = [12, 16, 20, 24, 28];
        return (
          <Star
            key={positions[i]}
            className="absolute opacity-15"
            style={{
              width: `${sizes[i]}px`,
              height: `${sizes[i]}px`,
              top: `${10 + i * 15}%`,
              right: `${5 + i * 8}%`,
              color: "oklch(0.75 0.18 75)",
            }}
            fill="currentColor"
          />
        );
      })}

      <div className="relative z-10 flex flex-col h-full p-8 lg:p-10">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
          style={{
            background: "oklch(0.75 0.18 75)",
            boxShadow: "0 8px 24px oklch(0.75 0.18 75 / 0.4)",
          }}
        >
          <Rocket
            className="w-7 h-7"
            style={{ color: "oklch(0.18 0.12 262)" }}
          />
        </div>

        {/* Main CTA */}
        <h2
          className="text-3xl lg:text-4xl font-bold leading-tight mb-3"
          style={{
            fontFamily: "var(--font-display)",
            color: "oklch(0.98 0 0)",
          }}
        >
          Ready to Launch
          <br />
          <span style={{ color: "oklch(0.75 0.18 75)" }}>Your Career?</span>
        </h2>

        <p
          className="text-sm leading-relaxed mb-6"
          style={{
            color: "oklch(0.78 0.04 262)",
            fontFamily: "var(--font-body)",
          }}
        >
          Join the Summer Internship Program and gain industry experience, build
          real projects, and prepare for a successful career with top MNC
          mentors.
        </p>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-6">
          {[
            "Industry Certificate",
            "MNC Mentors",
            "Live Sessions",
            "Real Projects",
            "Career Support",
            "Job Assistance",
          ].map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-2 px-3 py-2 rounded-lg"
              style={{
                background: "oklch(0.98 0 0 / 0.08)",
                border: "1px solid oklch(0.98 0 0 / 0.15)",
              }}
            >
              <CheckCircle2
                className="w-3.5 h-3.5 flex-shrink-0"
                style={{ color: "oklch(0.75 0.18 75)" }}
              />
              <span
                className="text-xs font-medium"
                style={{
                  color: "oklch(0.92 0.02 262)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {benefit}
              </span>
            </div>
          ))}
        </div>

        {/* Enroll CTA button */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-full py-3.5 rounded-xl font-bold text-center text-base transition-smooth"
            style={{
              background: "oklch(0.75 0.18 75)",
              color: "oklch(0.15 0.05 262)",
              fontFamily: "var(--font-display)",
              boxShadow: "0 4px 20px oklch(0.75 0.18 75 / 0.35)",
            }}
            data-ocid="closing.enroll_button"
          >
            Enroll Now →
          </button>
        </div>

        {/* Contact info */}
        <div className="space-y-2 mt-auto">
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-2 opacity-60"
            style={{
              color: "oklch(0.88 0.02 262)",
              fontFamily: "var(--font-display)",
            }}
          >
            Contact Us
          </div>
          {[
            { icon: Phone, text: "+91 98765 43210" },
            { icon: Mail, text: "info@eduexpose.in" },
            { icon: Globe, text: "www.eduexpose.in" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5">
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center"
                style={{ background: "oklch(0.98 0 0 / 0.1)" }}
              >
                <Icon
                  className="w-3 h-3"
                  style={{ color: "oklch(0.75 0.18 75)" }}
                />
              </div>
              <span
                className="text-xs"
                style={{
                  color: "oklch(0.78 0.04 262)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="pt-4 mt-4"
          style={{ borderTop: "1px solid oklch(0.98 0 0 / 0.1)" }}
        >
          <p
            className="text-xs opacity-40 text-center"
            style={{
              color: "oklch(0.88 0.02 262)",
              fontFamily: "var(--font-body)",
            }}
          >
            © {new Date().getFullYear()} EduExpose. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
