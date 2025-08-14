import ChallengeDetailClient from "./ChallengeDetailClient";
import { challenges } from '../challanges';

export async function generateMetadata({ params }) {
  const slugParam = params.slug;
  const id = parseInt(slugParam.split("-")[0]);
  const challenge = challenges.find(c => c.id === id);

  if (!challenge) {
    return {
      title: "Challenge Not Found | ASVSI Web3 Challenges",
      description: "This challenge could not be found.",
    };
  }

  return {
    title: `Challenge #${challenge.id} – ${challenge.title} | Web3 Challenges`,
    description: challenge.description,
    openGraph: {
      title: `Challenge #${challenge.id} – ${challenge.title}`,
      description: challenge.description,
      url: `https://vishwajeetportfolio.vercel.app/challenges/${params.slug}`,
      siteName: "Web3 Challenges ASVSI",
      images: [
        {
          url: challenge.image || "https://vishwajeetportfolio.vercel.app/default-og.png",
          width: 1200,
          height: 630,
          alt: challenge.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Challenge #${challenge.id} – ${challenge.title}`,
      description: challenge.description,
      images: [challenge.image || "https://vishwajeetportfolio.vercel.app/default-og.png"],
    },
    keywords: [
      "Web3",
      "Blockchain",
      "Solidity",
      "Smart Contract",
      "Challenge",
      challenge.title,
      ...challenge.tags,
    ],
    alternates: {
      canonical: `https://vishwajeetportfolio.vercel.app/challenges/${params.slug}`,
    },
  };
}

export default function Page({ params }) {
  const slugParam = params.slug;
  const id = parseInt(slugParam.split("-")[0]);
  const challenge = challenges.find(c => c.id === id);

  if (!challenge) {
    return <div className="text-white p-6">Challenge not found.</div>;
  }

  return <ChallengeDetailClient challenge={challenge} />;
}
