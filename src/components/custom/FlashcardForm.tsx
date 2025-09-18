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
    <div className="bg-white shadow-lg rounded-xl p-6 mb-8 w-full max-w-md">
      <h2 className="text-2xl font-poppins font-semibold mb-4 text-gray-800">
        Add a Flashcard
      </h2>
      <input
        type="text"
        placeholder="Question"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        className="w-full border border-gray-300 rounded-xl p-3 mb-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
      <input
        type="text"
        placeholder="Answer"
        value={newAnswer}
        onChange={(e) => setNewAnswer(e.target.value)}
        className="w-full border border-gray-300 rounded-xl p-3 mb-3 focus:ring-2 focus:ring-green-400 focus:outline-none"
      />
      <button
        onClick={addFlashcard}
        className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition shadow-md"
      >
        Add Flashcard
      </button>
    </div>
  );
}
