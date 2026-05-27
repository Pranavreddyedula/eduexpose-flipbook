import {
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  Code2,
  FileText,
  FlaskConical,
  Layers,
  Linkedin,
  MessageSquare,
  Monitor,
  Star,
  TrendingUp,
  Trophy,
  Users,
  Video,
  Wrench,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import ClosingPage from "./ClosingPage";
import CoverPage from "./CoverPage";
import Navigation from "./Navigation";
import PhasePage from "./PhasePage";

const TOTAL_PAGES = 6;

type FlipDirection = "forward" | "backward";

interface PageConfig {
  id: string;
  component: React.ReactNode;
}

function useFlipbook(total: number) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<FlipDirection>("forward");
  const [displayPage, setDisplayPage] = useState(0);
  const flipTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (target: number, direction: FlipDirection) => {
      if (isFlipping || target < 0 || target >= total) return;
      setFlipDirection(direction);
      setIsFlipping(true);
      if (flipTimeout.current) clearTimeout(flipTimeout.current);
      flipTimeout.current = setTimeout(() => {
        setCurrentPage(target);
        setDisplayPage(target);
        setIsFlipping(false);
      }, 650);
    },
    [isFlipping, total],
  );

  const goNext = useCallback(
    () => goTo(currentPage + 1, "forward"),
    [goTo, currentPage],
  );
  const goPrev = useCallback(
    () => goTo(currentPage - 1, "backward"),
    [goTo, currentPage],
  );

  useEffect(
    () => () => {
      if (flipTimeout.current) clearTimeout(flipTimeout.current);
    },
    [],
  );

  return {
    currentPage,
    displayPage,
    isFlipping,
    flipDirection,
    goNext,
    goPrev,
  };
}

export default function Flipbook() {
  const { currentPage, isFlipping, flipDirection, goNext, goPrev } =
    useFlipbook(TOTAL_PAGES);

  const pages: PageConfig[] = [
    {
      id: "cover",
      component: <CoverPage />,
    },
    {
      id: "phase1",
      component: (
        <PhasePage
          phase="Phase 1"
          phaseNumber="1"
          duration="1 Week"
          title="Foundation Classes"
          subtitle="Build Strong Fundamentals"
          description="Start your journey with a solid foundation. Access recorded sessions for flexible learning and gain confidence before advancing to complex topics."
          accentColor="oklch(0.55 0.20 155)"
          bgStyle="linear-gradient(180deg, oklch(0.99 0.005 155) 0%, oklch(0.97 0.01 262) 100%)"
          points={[
            {
              icon: Video,
              text: "Access to recorded video sessions for flexible learning at your own pace",
            },
            {
              icon: Brain,
              text: "Strong understanding of basic concepts and essential technical skills",
            },
            {
              icon: Layers,
              text: "Step-by-step guidance specifically designed for beginners",
            },
            {
              icon: FileText,
              text: "Practice assignments and curated learning resources included",
            },
            {
              icon: Trophy,
              text: "Build confidence and readiness before moving to advanced topics",
            },
          ]}
          subSections={undefined}
        />
      ),
    },
    {
      id: "phase2",
      component: (
        <PhasePage
          phase="Phase 2"
          phaseNumber="2"
          duration="25 Days"
          title="Core Program"
          subtitle="Industry-Level Training"
          description="Dive deep into real-world industry concepts with live interactive sessions led by top mentors from leading MNCs. Gain hands-on practical experience."
          accentColor="oklch(0.42 0.15 262)"
          bgStyle="linear-gradient(180deg, oklch(0.99 0.01 262) 0%, oklch(0.96 0.015 262) 100%)"
          points={[
            {
              icon: Monitor,
              text: "Live interactive sessions with top industry mentors from leading MNCs",
            },
            {
              icon: Code2,
              text: "Learn real-world industry concepts, tools, and cutting-edge technologies",
            },
            {
              icon: Wrench,
              text: "Hands-on practical training with in-depth case studies",
            },
            {
              icon: MessageSquare,
              text: "Dedicated doubt clarification sessions and personalized mentor support",
            },
            {
              icon: TrendingUp,
              text: "Industry-focused curriculum designed for real career growth",
            },
            {
              icon: FlaskConical,
              text: "Improve technical problem-solving and analytical thinking skills",
            },
          ]}
          subSections={undefined}
        />
      ),
    },
    {
      id: "phase3",
      component: (
        <PhasePage
          phase="Phase 3"
          phaseNumber="3"
          duration="30 Days"
          title="Project Building"
          subtitle="Build. Create. Innovate."
          description="Apply everything you've learned on real industry-grade projects. Choose from multiple problem statements and build your portfolio."
          accentColor="oklch(0.62 0.18 45)"
          bgStyle="linear-gradient(180deg, oklch(0.99 0.01 45) 0%, oklch(0.97 0.01 262) 100%)"
          points={[]}
          subSections={[
            {
              title: "Mini Project",
              duration: "10 Days",
              description:
                "Build a small-scale project to strengthen practical knowledge. Apply learned concepts in real scenarios with guided structure.",
            },
            {
              title: "Major Project",
              duration: "20 Days",
              description:
                "Develop an advanced industry-level project that demonstrates your full skill set. Feature-ready for your resume and portfolio.",
            },
          ]}
        />
      ),
    },
    {
      id: "phase4",
      component: (
        <PhasePage
          phase="Phase 4"
          phaseNumber="4"
          duration="Ongoing"
          title="Career Support"
          subtitle="& Placement Assistance"
          description="Your journey doesn't end at training. Get comprehensive career support to land your first opportunity in the industry."
          accentColor="oklch(0.50 0.22 330)"
          bgStyle="linear-gradient(180deg, oklch(0.99 0.01 330) 0%, oklch(0.97 0.01 262) 100%)"
          points={[
            {
              icon: FileText,
              text: "Personalized portfolio and resume building to showcase your best work",
            },
            {
              icon: Linkedin,
              text: "Professional LinkedIn and online profile enhancement",
            },
            {
              icon: Users,
              text: "Placement preparation sessions and career mentoring",
            },
            {
              icon: BookOpen,
              text: "Mock interviews and soft-skills coaching",
            },
            {
              icon: BarChart3,
              text: "Personalized performance dashboard to track your growth",
            },
            {
              icon: Star,
              text: "Internship completion certificate and offer letter support",
            },
            {
              icon: Award,
              text: "Industry-recognized certificate for your portfolio",
            },
            {
              icon: Briefcase,
              text: "Job assistance and career opportunities guidance",
            },
          ]}
          subSections={undefined}
        />
      ),
    },
    {
      id: "closing",
      component: <ClosingPage />,
    },
  ];

  const animClass = isFlipping
    ? flipDirection === "forward"
      ? "animate-[flipForward_0.65s_cubic-bezier(0.645,0.045,0.355,1)_both]"
      : "animate-[flipBackward_0.65s_cubic-bezier(0.645,0.045,0.355,1)_both]"
    : "";

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-6 px-4"
      style={{ background: "oklch(0.96 0.01 262)" }}
      data-ocid="flipbook.page"
    >
      {/* Header */}
      <div className="w-full max-w-4xl mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "oklch(0.42 0.15 262)" }}
          >
            <BookOpen
              className="w-4 h-4"
              style={{ color: "oklch(0.98 0 0)" }}
            />
          </div>
          <span
            className="text-lg font-bold"
            style={{
              fontFamily: "var(--font-display)",
              color: "oklch(0.18 0.12 262)",
            }}
          >
            EduExpose
          </span>
        </div>
        <span
          className="text-xs font-medium px-3 py-1.5 rounded-full"
          style={{
            background: "oklch(0.75 0.18 75 / 0.15)",
            color: "oklch(0.42 0.12 75)",
            fontFamily: "var(--font-display)",
          }}
        >
          Summer Internship 2025
        </span>
      </div>

      {/* Book container */}
      <div className="w-full max-w-4xl" data-ocid="flipbook.canvas_target">
        {/* Desktop: two-page spread */}
        <div
          className="hidden md:flex rounded-2xl overflow-hidden book-shadow flipbook-scene relative"
          style={{ minHeight: "560px", background: "oklch(0.90 0.02 262)" }}
        >
          {/* Book spine */}
          <div
            className="w-3 flex-shrink-0 spine-shadow z-10 relative"
            style={{
              background:
                "linear-gradient(to right, oklch(0.75 0.04 262), oklch(0.88 0.02 262), oklch(0.75 0.04 262))",
            }}
          >
            {/* Spine lines */}
            {([10, 21, 32, 43, 54, 65, 76, 87] as const).map((topPct) => (
              <div
                key={topPct}
                className="absolute w-full"
                style={{
                  height: "1px",
                  top: `${topPct}%`,
                  background: "oklch(0.65 0.04 262 / 0.4)",
                }}
              />
            ))}
          </div>

          {/* Left page (even pages) - always shows current or previous */}
          <div className="flex-1 relative" style={{ minHeight: "560px" }}>
            <div
              className={`absolute inset-0 ${isFlipping && flipDirection === "backward" ? animClass : ""}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="w-full h-full">
                {pages[currentPage].component}
              </div>
            </div>
          </div>

          {/* Right page - shows next or same page info */}
          <div
            className="flex-1 relative border-l"
            style={{ minHeight: "560px", borderColor: "oklch(0.82 0.03 262)" }}
          >
            <div
              className={`absolute inset-0 ${isFlipping && flipDirection === "forward" ? animClass : ""}`}
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "left center",
              }}
            >
              <div className="w-full h-full">
                {currentPage + 1 < pages.length ? (
                  pages[currentPage + 1].component
                ) : (
                  <div
                    className="h-full flex items-center justify-center"
                    style={{ background: "oklch(0.97 0.01 262)" }}
                  >
                    <div className="text-center opacity-40">
                      <BookOpen
                        className="w-12 h-12 mx-auto mb-3"
                        style={{ color: "oklch(0.42 0.15 262)" }}
                      />
                      <p
                        className="text-sm"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: "oklch(0.42 0.15 262)",
                        }}
                      >
                        End of Brochure
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Page edge effect - right side */}
          <div
            className="absolute right-0 top-0 bottom-0 w-1.5"
            style={{
              background:
                "linear-gradient(to left, oklch(0.82 0.03 262), transparent)",
            }}
          />
        </div>

        {/* Mobile: single page */}
        <div
          className="md:hidden rounded-2xl overflow-hidden book-shadow flipbook-scene"
          style={{ minHeight: "520px" }}
        >
          <div
            className={isFlipping ? animClass : ""}
            style={{ transformStyle: "preserve-3d", minHeight: "520px" }}
          >
            {pages[currentPage].component}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="w-full max-w-4xl">
        <Navigation
          currentPage={currentPage}
          totalPages={TOTAL_PAGES}
          onPrev={goPrev}
          onNext={goNext}
          isFlipping={isFlipping}
        />
      </div>

      {/* Branding */}
      <p
        className="text-xs mt-2 opacity-50"
        style={{
          fontFamily: "var(--font-body)",
          color: "oklch(0.42 0.08 262)",
        }}
      >
        © {new Date().getFullYear()}. Built with love using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
          className="underline"
          style={{ color: "oklch(0.42 0.15 262)" }}
        >
          caffeine.ai
        </a>
      </p>
    </div>
  );
}
