"use client";

import FlashcardForm from "@/components/custom/FlashcardForm";
import FlashcardList from "@/components/custom/FlashcardList";
import { useFlashcards } from "@/hooks/useFlashcards";
import { Button } from "@/components/ui/button";
export default function Home() {
  const {
    flashcards,
    showAnswer,
    newQuestion,
    newAnswer,
    setNewQuestion,
    setNewAnswer,
    toggleAnswer,
    toggleLearned,
    addFlashcard,
    shuffle,
    loading,
    clearFlashcards,
  } = useFlashcards([
    {
      id: 1,
      question: "What is React?",
      answer: "A JavaScript library for building UIs",
      learned: false,
    },
    { id: 2, question: "Capital of Nigeria?", answer: "Abuja", learned: false },
  ]);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center p-6 font-inter">
      <h1 className="text-4xl font-poppins font-bold mb-8 text-blue-600">
        FlashLearn
      </h1>

      <FlashcardForm
        newQuestion={newQuestion}
        setNewQuestion={setNewQuestion}
        newAnswer={newAnswer}
        setNewAnswer={setNewAnswer}
        addFlashcard={addFlashcard}
      />

      <FlashcardList
        flashcards={flashcards}
        showAnswer={showAnswer}
        toggleAnswer={toggleAnswer}
        toggleLearned={toggleLearned}
        loading={loading}
      />
      <div className="flex flex-col md:flex-row items-center mt-10">
        <Button
          variant="destructive"
          onClick={clearFlashcards}
          className="bg-red-500 text-white px-4 py-2 rounded "
        >
          Clear All Flashcards
        </Button>
        <Button
          variant="default"
          onClick={shuffle}
          className=" bg-yellow-500 text-white px-6 py-2 rounded-xl hover:bg-yellow-600 transition shadow-md font-medium"
        >
          Shuffle Flashcards
        </Button>
      </div>
    </main>
  );
}
