import { siteConfig, featuredReviews } from "@/lib/config";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const previewReviews = featuredReviews.slice(0, 6);

const avatarColors = ["#7A1F4D", "#B0824C", "#9B3A6B", "#5F8B6E", "#4A6FA5", "#B5654F"];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function getAvatarColor(name: string) {
  const index = name.charCodeAt(0) % avatarColors.length;
  return avatarColors[index];
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-blush/25 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8 lg:px-12">
        <Reveal>
          <p className="eyebrow mb-4 text-gold-dark">Trusted By Our Clients</p>
          <h2 className="font-display text-4xl font-semibold text-wine sm:text-5xl">Google Reviews</h2>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-2 rounded-3xl bg-ivory px-8 py-10 shadow-soft">
            <div className="flex items-center gap-1 text-gold" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-6 w-6" />
              ))}
            </div>
            <p className="font-display text-4xl text-wine">
              {siteConfig.googleRating.score} <span className="text-2xl">★</span>
            </p>
            <p className="text-sm uppercase tracking-widest2 text-charcoal/60">
              {siteConfig.googleRating.count} Google Reviews
            </p>

            {!siteConfig.googleRating.isLiveConnected && (
              <p className="mt-3 max-w-xs text-xs leading-relaxed text-charcoal/50">
                Figures shown from our Google Business Profile. This section is structured to connect
                live via the Google Places API — see README for setup.
              </p>
            )}

            <a
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-wine px-6 py-3 text-sm font-semibold text-wine transition-colors duration-300 hover:bg-wine hover:text-ivory"
            >
              Read All Google Reviews
            </a>
          </div>
        </Reveal>

        {previewReviews.length > 0 ? (
          <div className="mt-14 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {previewReviews.map((review, i) => (
              <Reveal key={review.id} delayMs={(i % 3) * 100} className="group">
                <TiltCard className="h-full rounded-3xl bg-ivory p-6 shadow-card">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-ivory"
                      style={{ backgroundColor: getAvatarColor(review.name) }}
                      aria-hidden="true"
                    >
                      {getInitials(review.name)}
                    </div>
                    <div>
                      <p className="font-display text-base font-semibold text-wine">{review.name}</p>
                      <div className="mt-0.5 flex items-center gap-0.5 text-gold" aria-hidden="true">
                        {Array.from({ length: 5 }).map((_, starIdx) => (
                          <StarIcon
                            key={starIdx}
                            className={`h-3.5 w-3.5 ${starIdx < review.rating ? "text-gold" : "text-gold/25"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-[15px] font-medium leading-relaxed text-charcoal">{review.text}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delayMs={200} className="mt-10">
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-charcoal/60">
              We keep this section honest: individual review quotes will appear here once connected to
              our live Google Business Profile, rather than being written for the website.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5l2.9 6.15 6.6.72-4.9 4.6 1.3 6.53L12 17.9l-5.9 2.6 1.3-6.53-4.9-4.6 6.6-.72L12 2.5z" />
    </svg>
  );
}
