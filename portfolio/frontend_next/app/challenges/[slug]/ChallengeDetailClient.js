"use client";
import { useState } from "react";

export default function ChallengeDetailClient({ challenge }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(challenge.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <main className="min-h-screen bg-[#edf2f8] text-[#030303] p-6">
      <h1 className="text-3xl font-bold">
        Challenge #{challenge.id} – {challenge.title}
      </h1>
      <div className="text-[#313bac] mt-2">Difficulty: {challenge.difficulty}</div>
      <div className="mt-4 space-x-2">
        {challenge.tags.map(tag => (
          <span
            key={tag}
            className="text-xs bg-[#e4e4e4] px-2 py-1 text-[#313bac] rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
      <pre className="mt-6 text-lg text-[#6b7688] font-sans">{challenge.description}</pre>

      {challenge.image && (
        <div className="mt-6">
          <img
            src={challenge.image}
            alt={`Illustration for ${challenge.title}`}
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
      )}

      <div className="mt-4 relative">
        <button
          onClick={handleCopy}
          className="absolute right-2 top-2 text-sm bg-[#313bac] text-white px-3 py-1 rounded hover:bg-[#1e2b6f] transition"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <pre className="p-4 bg-zinc-800 rounded-lg text-sm text-[#edf2f8] overflow-x-auto">
          <code>{challenge.code}</code>
        </pre>
      </div>

      <div className="mt-6 text-[#6b7688]">
        💡 <strong>Hint:</strong> {challenge.hint}
      </div>
    </main>
  );
}
