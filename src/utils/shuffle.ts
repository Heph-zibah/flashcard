import { Flashcard } from "@/lib/types/flashcard";

/**
 * Randomly shuffles flashcards using Fisher-Yates algorithm
 */
export function shuffleFlashcards(flashcards: Flashcard[]): Flashcard[] {
  const shuffled = [...flashcards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
