import type { Service } from "@/lib/config";

const paths: Record<Service["icon"], React.ReactNode> = {
  blouse: (
    <path d="M12 3c-2 1.5-3.5 1.7-5 1-1.2 1.6-2.2 3-3 5l2.5 1.5V21h11V10.5L20 9c-.8-2-1.8-3.4-3-5-1.5.7-3 .5-5-1Z" />
  ),
  bridal: (
    <path d="M12 3 9 7l3 3 3-3-3-4Zm0 6-6 6 2 6h8l2-6-6-6Z" />
  ),
  wedding: (
    <path d="M7 8a5 5 0 1 1 5 5 5 5 0 0 1-5-5Zm10 0a5 5 0 1 1 5 5 5 5 0 0 1-5-5ZM8 21c0-3 2-5.5 4-5.5s4 2.5 4 5.5" />
  ),
  gown: (
    <path d="M12 2v6M9 8c-2 3-4 7-4 13h14c0-6-2-10-4-13-1 1-4 1-6 0Z" />
  ),
  salwar: (
    <path d="M9 2h6l1 5-2 2 2 13H8L10 9 8 7l1-5Z" />
  ),
  dress: (
    <path d="M12 2 9 6l1 3-3 13h10L14 9l1-3-3-4Z" />
  ),
  party: (
    <path d="M4 21 12 3l8 18-8-4-8 4Z" />
  ),
  alteration: (
    <path d="M6 6a3 3 0 1 1 3 3l9 9M9 9 4 14m14-11-8 8M15 3l6 6M6 18a3 3 0 1 0 3-3" />
  )
};

export default function ServiceIcon({ icon, className }: { icon: Service["icon"]; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[icon]}
    </svg>
  );
}
