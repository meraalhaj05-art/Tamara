// src/app/page.tsx
import type { Metadata } from "next";
import RomanticExperience from "@/components/RomanticExperience";

export const metadata: Metadata = {
  title: "تمارة ❤️ — بداية حكاية",
  description:
    "رسالة صغيرة من القلب، لعلها تكون بداية شي حلو. تمارة، إنتِ سبب بشعور حلو عندي.",
  openGraph: {
    title: "تمارة ❤️ — بداية حكاية",
    description: "رسالة صغيرة من القلب، لعلها تكون بداية شي حلو.",
    type: "website",
  },
};

export default function HomePage() {
  return <RomanticExperience />;
}
