"use client";
import Image from "next/image";
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
      <div className="flex items-center mb-8 relative">
        <h1 className="text-4xl font-poppins font-bold  text-secondary z-10">
          FlashLearn
        </h1>
        <Image
          src="/logo.png"
          alt="logo"
          width={60}
          height={60}
          className="w-auto h-auto absolute right-15 top-1/2 transform -translate-y-1/2"
        />
      </div>

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
      <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
        <Button variant="destructive" onClick={clearFlashcards} className=" ">
          Clear All Flashcards
        </Button>
        <Button variant="default" onClick={shuffle} className=" ">
          Shuffle Flashcards
        </Button>
      </div>
    </main>
  );
}
