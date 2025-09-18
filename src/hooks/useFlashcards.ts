"use client";

import { useState, useEffect } from "react";
import { Flashcard } from "@/lib/types/flashcard";
import { shuffleFlashcards } from "@/utils/shuffle";

export function useFlashcards(initialFlashcards: Flashcard[] = []) {
  const [flashcards, setFlashcards] = useState<Flashcard[]>(initialFlashcards);
  const [showAnswer, setShowAnswer] = useState<{ [key: number]: boolean }>({});
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [loading, setLoading] = useState(true); // 👈 loading state

  // Load flashcards from localStorage only after hydration
  useEffect(() => {
    const stored = localStorage.getItem("flashcards");
    if (stored) {
      setFlashcards(JSON.parse(stored));
    }
    setLoading(false); // 👈 stop loading after hydration check
  }, []);

  // Save to localStorage whenever flashcards change
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("flashcards", JSON.stringify(flashcards));
    }
  }, [flashcards, loading]);

  const toggleAnswer = (id: number) => {
    setShowAnswer((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleLearned = (id: number) => {
    setFlashcards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, learned: !card.learned } : card
      )
    );
  };

  const addFlashcard = () => {
    if (!newQuestion.trim() || !newAnswer.trim()) return;

    const newCard: Flashcard = {
      id: Date.now(),
      question: newQuestion,
      answer: newAnswer,
      learned: false,
    };

    setFlashcards((prev) => [...prev, newCard]);
    setNewQuestion("");
    setNewAnswer("");
  };

  const shuffle = () => {
    setFlashcards((prev) => shuffleFlashcards(prev));
  };

  const clearFlashcards = () => {
    setFlashcards([]);
    localStorage.removeItem("flashcards");
  };

  return {
    flashcards,
    showAnswer,
    newQuestion,
    newAnswer,
    loading, // 👈 expose loading state
    setNewQuestion,
    setNewAnswer,
    toggleAnswer,
    toggleLearned,
    addFlashcard,
    shuffle,
    clearFlashcards,
  };
}
