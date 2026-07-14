import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PageHeroProps {
  eyebrow: string;
  headline: React.ReactNode;
  subline: string;
  centered?: boolean;
}

export default function PageHero({ eyebrow, headline, subline, centered = false }: PageHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.2
        )
        .fromTo(
          sublineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.4
        );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-navy-dark min-h-[60vh] flex items-center section-padding pt-32 pb-20"
    >
      <div className={`max-w-4xl ${centered ? "mx-auto text-center" : ""}`}>
        <span ref={eyebrowRef} className="text-eyebrow block mb-4 opacity-0">
          {eyebrow}
        </span>
        <h1
          ref={headlineRef}
          className="text-white text-4xl md:text-5xl lg:text-[56px] font-display font-semibold leading-[1.1] tracking-tight mb-6 opacity-0"
        >
          {headline}
        </h1>
        <p
          ref={sublineRef}
          className="text-silver text-lg md:text-xl leading-relaxed max-w-2xl opacity-0"
        >
          {subline}
        </p>
      </div>
    </section>
  );
}
