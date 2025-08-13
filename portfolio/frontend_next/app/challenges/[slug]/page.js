'use client';

import { useParams } from 'next/navigation';
import { challenges } from '../challanges';
// const challenges = [
//   {
//     id: 14,
//     slug: 'tx-origin-misuse',
//     title: 'tx.origin Misuse',
//     difficulty: 'High',
//     tags: ['Security', 'AccessControl'],
//     description: 'This contract uses tx.origin for access control, which is insecure.',
//     code: `contract Example { 
//     address public owner;
//     constructor() { 
//     owner = tx.origin; 
//     } 
//     }`,
//     hint: 'tx.origin can be manipulated. Prefer msg.sender.',
//   },
//   // Add more...
// ];

export default function ChallengeDetail({params}) {
  const slugParam = params.slug; // e.g., '14-tx-origin-misuse'
  const id = parseInt(slugParam.split('-')[0]);
  const challenge = challenges.find(c => c.id === id);

  if (!challenge) return <div className="text-white p-6">Challenge not found.</div>;

  return (
    <main className="min-h-screen bg-[#edf2f8] text-[#030303] p-6">
      <h1 className="text-3xl font-bold">Challenge #{challenge.id} – {challenge.title}</h1>
      <div className="text-[#313bac] mt-2">Difficulty: {challenge.difficulty}</div>
      <div className="mt-4 space-x-2">
        {challenge.tags.map(tag => (
          <span key={tag} className="text-xs bg-[#e4e4e4] px-2 py-1 text-[#313bac] rounded-full">#{tag}</span>
        ))}
      </div>
      <p className="mt-6 text-lg text-[#6b7688]">{challenge.description}</p>
      <pre className="mt-4 p-4 bg-zinc-800 rounded-lg text-sm  text-[#edf2f8] overflow-x-auto">
        <code>{challenge.code}</code>
      </pre>
      <div className="mt-6 text-[#6b7688]">
        💡 <strong>Hint:</strong> {challenge.hint}
      </div>
    </main>
  );
}
