import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Hello Beautiful Boutique brand palette — girlish dark rose + light pink
        wine: {
          DEFAULT: "#7A1F4D",
          light: "#9B3A6B",
          dark: "#4F1233"
        },
        gold: {
          DEFAULT: "#D6A574",
          light: "#EAD2AE",
          dark: "#B0824C"
        },
        ivory: {
          DEFAULT: "#FFF7F5",
          dark: "#FCE9E7"
        },
        blush: {
          DEFAULT: "#F9DCE6",
          dark: "#F2C0D3"
        },
        charcoal: {
          DEFAULT: "#2B1620",
          light: "#40222F"
        }
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-dmsans)", "sans-serif"]
      },
      letterSpacing: {
        widest2: "0.25em"
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(92, 26, 52, 0.25)",
        card: "0 10px 40px -15px rgba(36, 28, 31, 0.18)"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        petal: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(6deg)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        }
      },
      animation: {
        fadeUp: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both",
        petal: "petal 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
