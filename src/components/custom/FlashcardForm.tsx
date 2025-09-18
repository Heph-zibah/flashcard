"use client";

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
  return (
    <div className="bg-[#FFFFFF] shadow-lg rounded-xl p-6 mb-8 w-full max-w-md">
      <h2 className="text-2xl font-poppins font-semibold mb-4 text-[#1F2937]">
        Add a Flashcard
      </h2>
      <input
        type="text"
        placeholder="Question"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        className="w-full border border-[#D1D5DB] rounded-xl p-3 mb-3 focus:ring-2 focus:ring-[#60A5FA] focus:outline-none"
      />
      <input
        type="text"
        placeholder="Answer"
        value={newAnswer}
        onChange={(e) => setNewAnswer(e.target.value)}
        className="w-full border border-[#D1D5DB] rounded-xl p-3 mb-3 focus:ring-2 focus:ring-[#34D399] focus:outline-none"
      />
      <button
        onClick={addFlashcard}
        className="bg-secondary text-[#FFFFFF] px-5 py-2 rounded-xl hover:bg-[#2528EB] transition shadow-md"
      >
        Add Flashcard
      </button>
    </div>
  );
}
