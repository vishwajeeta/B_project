// app/challenge/page.js
import Link from 'next/link';

const challenges = [
  {
    id: 14,
    slug: 'tx-origin-misuse',
    title: 'tx.origin Misuse',
    difficulty: 'High',
    tags: ['Security', 'AccessControl'],
    excerpt: 'A smart contract with weak access control using tx.origin.',
  },
  {
    id: 13,
    slug: 'reentrancy-attack',
    title: 'Reentrancy Attack',
    difficulty: 'Medium',
    tags: ['Security', 'Reentrancy'],
    excerpt: 'Find the reentrancy flaw in this contract.',
  },
];

export default function ChallengeList() {
  return (
    <main className="min-h-screen bg-[#edf2f8] text-[#030303] p-6">
      <h1 className="text-3xl font-bold mb-4">🧠 All Solidity Challenges</h1>
      <div className="space-y-6">
        {challenges.map(ch => (
          <Link key={ch.id} href={`/challenges/${ch.id}-${ch.slug}`}>
            <div className="bg-[#ffffff] p-4 rounded-xl hover:bg-[#e4e4e4] transition">
              <div className="flex justify-between mb-1">
                <h2 className="text-xl font-semibold">
                  Challenge #{ch.id} – {ch.title}
                </h2>
                <span className="text-[#313bac] text-sm">{ch.difficulty}</span>
              </div>
              <p className="text-zinc-400">{ch.excerpt}</p>
              <div className="mt-2 space-x-2">
                {ch.tags.map(tag => (
                  <span key={tag} className="text-xs bg-[#e4e4e4] px-2 py-1 text-[#313bac] rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
