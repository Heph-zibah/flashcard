"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FlashcardFormProps = {
  newQuestion: string;
  setNewQuestion: (value: string) => void;
  newAnswer: string;
  setNewAnswer: (value: string) => void;
  addFlashcard: () => void;
};

export default function FlashcardForm({
  newQuestion,
  setNewQuestion,
  newAnswer,
  setNewAnswer,
  addFlashcard,
}: FlashcardFormProps) {
  const isFormValid = newQuestion.trim() !== "" && newAnswer.trim() !== "";

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-8 w-full max-w-md space-y-5">
      <h2 className="text-2xl font-poppins font-semibold  text-[#1F2937]">
        Add a Flashcard
      </h2>

      <Input
        id="question"
        type="text"
        placeholder="Enter your question"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      />

      <Input
        id="answer"
        type="text"
        placeholder="Enter the answer"
        value={newAnswer}
        onChange={(e) => setNewAnswer(e.target.value)}
      />

      <Button
        disabled={!isFormValid}
        onClick={addFlashcard}
        className="w-full"
        variant="secondary"
      >
        Add Flashcard
      </Button>
    </div>
  );
}
