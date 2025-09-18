"use client";

import { Flashcard as FlashcardType } from "@/lib/types/flashcard";
import Flashcard from "./Flashcard";
import { Skeleton } from "@/components/ui/skeleton";

type FlashcardListProps = {
  flashcards: FlashcardType[];
  showAnswer: { [key: number]: boolean };
  toggleAnswer: (id: number) => void;
  toggleLearned: (id: number) => void;
  loading: boolean; // 👈 added
};

export default function FlashcardList({
  flashcards,
  showAnswer,
  toggleAnswer,
  toggleLearned,
  loading, // 👈 destructure
}: FlashcardListProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="p-4 bg-white rounded-xl shadow-md">
            <Skeleton className="h-6 w-3/4 mb-3" />
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
      {flashcards.map((card) => (
        <Flashcard
          key={card.id}
          {...card}
          showAnswer={showAnswer[card.id]}
          toggleAnswer={toggleAnswer}
          toggleLearned={toggleLearned}
        />
      ))}
    </div>
  );
}
