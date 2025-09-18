# Flashcard Learning App | Study Smarter with Interactive Digital Flashcards

Boost your learning with this **interactive Flashcard Learning App** built using **Next.js**, **TypeScript**, **TailwindCSS**, and **Shadcn UI**. Add, flip, and mark flashcards as learned for **efficient study sessions**.


---

## Table of Contents

1. [Demo](#demo)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Installation](#installation)  
5. [Usage](#usage)  
6. [Component Structure](#component-structure)  
7. [Form Validation](#form-validation)  
8. [Screenshots](#screenshots)  
9. [Extending the App](#extending-the-app)  
10. [Contributing](#contributing) 

---

## Demo

![Flashcard APP](/public/flashcard_form.PNG) 
[Live Demo](https://flashcard-oadaramola.vercel.app/)

---

## Features

- **Add New Flashcards:** Quickly create questions and answers for study topics  
- **Flip Flashcards:** Reveal answers by flipping the card  
- **Mark as Learned:** Track progress for studied flashcards  
- **Responsive Design:** Works perfectly on **mobile**, **tablet**, and **desktop**  
- **Form Validation:** Prevent adding empty flashcards  
- **Modern UI:** Built with **Shadcn UI** and **TailwindCSS**  
- **Extendable:** Supports future features like shuffling, categories, and search  

*Keywords included: flashcards, interactive learning, study app, Next.js, TypeScript, TailwindCSS, Shadcn UI*

---

## Tech Stack

- **Next.js 13+** – React framework for server-side rendering and routing.  
- **TypeScript** – Strongly typed JavaScript for safer code.  
- **TailwindCSS** – Utility-first CSS framework for styling.  
- **Shadcn UI** – Prebuilt UI components (Input, Button, Label).  
- **React Hooks** – For state management in components.  

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/Heph-zibah/flashcard.git
cd flashcard

```
2. **Install dependencies**

pnpm install
# or
npm install
# or
yarn


3. **IRun the development server**

pnpm dev
# or
npm run dev
# or
yarn dev


## Usage

1. Enter a **question** in the first input field  
2. Enter the corresponding **answer** in the second input field  
3. The **"Add Flashcard" button** becomes enabled once both fields have text  
4. Click **Add Flashcard** to save the flashcard  
5. Flashcards will appear below the form, ready to be flipped and marked as learned  

---

## Component Structure

### `FlashcardForm`

**Props:**

- `newQuestion: string` – Current input for the question  
- `setNewQuestion: (value: string) => void` – State setter for the question input  
- `newAnswer: string` – Current input for the answer  
- `setNewAnswer: (value: string) => void` – State setter for the answer input  
- `addFlashcard: () => void` – Function to save a new flashcard  

**Features:**

- Uses **Shadcn Input, Label, and Button** components  
- Button is **disabled** if either input is empty (`isFormValid` check)  
- Responsive layout with **TailwindCSS**  

**Code Example:**

```ts
const isFormValid = newQuestion.trim() !== "" && newAnswer.trim() !== "";
<Button disabled={!isFormValid} onClick={addFlashcard}>Add Flashcard</Button>

### `FlashcardList` (Assumed based on project context)

**Props / Features:**

- Displays a list of all flashcards  
- Allows each flashcard to be flipped to reveal the answer  
- Lets users mark flashcards as learned  

**Code Example:**

```ts
{flashcards.map((card) => (
  <Flashcard
    key={card.id}
    question={card.question}
    answer={card.answer}
    learned={card.learned}
    toggleLearned={() => markAsLearned(card.id)}
  />
))}

```
## Form Validation

The app ensures both inputs are filled before allowing the flashcard to be added.  
This prevents empty submissions and improves user experience.

```ts
const isFormValid = newQuestion.trim() !== "" && newAnswer.trim() !== "";
<Button disabled={!isFormValid}>Add Flashcard</Button>

```
## Screenshots

**Flashcard List**  
![Flashcard List](/public/flashcard_list.PNG)

**Flipped Flashcard**  
![Flipped Card](/public/flipped_flashcard.PNG)

---

## Extending the App

Here are some ways to enhance the app:

- **Shuffle Flashcards:** Add a button to randomly display flashcards for practice  
- **Track Learned Flashcards:** Store learned status in `localStorage` or a backend  
- **Delete Flashcards:** Add a delete button on each card to remove it  
- **Category Support:** Allow flashcards to belong to different categories or subjects  
- **Search or Filter:** Add a search input to quickly find flashcards  

---

## Contributing

1. Fork the repository  
2. Create a feature branch: `git checkout -b feature/my-feature`  
3. Commit changes: `git commit -m 'Add my feature'`  
4. Push to branch: `git push origin feature/my-feature`  
5. Open a pull request

