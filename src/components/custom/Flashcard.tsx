"use client";

import { Flashcard as FlashcardType } from "@/lib/types/flashcard";

type FlashcardProps = FlashcardType & {
  showAnswer: boolean;
  toggleAnswer: (id: number) => void;
  toggleLearned: (id: number) => void;
};

export default function Flashcard({
  id,
  question,
  answer,
  learned,
  showAnswer,
  toggleAnswer,
  toggleLearned,
}: FlashcardProps) {
  return (
    <div
      onClick={() => toggleAnswer(id)}
      className={`relative bg-white shadow-lg rounded-xl p-6 cursor-pointer transform transition hover:scale-105 hover:shadow-xl border-t-4 ${
        learned ? "border-green-400 opacity-60" : "border-blue-400"
      }`}
    >
      <h3 className="text-lg font-semibold text-gray-700">
        {showAnswer ? answer : question}
      </h3>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleLearned(id);
        }}
        className="mt-4 text-sm bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
      >
        {learned ? "Unmark" : "Mark Learned"}
      </button>
    </div>
  );
}
