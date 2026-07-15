Flashcard Study Deck 🎴

A simple, interactive flashcard app built with vanilla HTML, CSS, and JavaScript — no frameworks, no libraries. Click through a deck of flip cards to test yourself on web development fundamentals, track your progress, and restart anytime.

Built as a follow-up project after building a quiz app, applying the same DOM manipulation and state management concepts to a different interaction style (card flipping vs. multiple choice).

Features


Interactive flip animation — click a card to flip it from question (front) to answer (back), powered by CSS 3D transforms
Sequential deck navigation — flip through each card's front and back, then automatically advance to the next card
Progress indicator — "Card X of Y" counter that updates as you move through the deck
Animated progress bar — visually fills up as you complete cards
End screen — a summary screen once you've gone through the full deck
Restart option — reset the deck and start over at any time
Fully responsive, no dependencies — pure HTML/CSS/JS, works in any modern browser


How it works


Click Start to begin
Read the question on the front of the card
Click Flip to reveal the answer on the back
Click Flip again to move on to the next card
Once you've gone through every card, you'll land on a summary screen
Click Restart Deck to go through it all again


Tech Stack


HTML5 — semantic structure
CSS3 — Flexbox layout, 3D transforms (rotateY, perspective), transitions for smooth animations
JavaScript (ES6) — DOM manipulation, event listeners, array/object data handling, state management


No frameworks, no build tools — just the fundamentals.

Project Structure

├── index.html      # Markup for start, study, and end screens
├── style.css       # Styling, layout, flip animation, and transitions
└── scripts.js      # Deck data, state tracking, and interaction logic

Running Locally

Since this is a static site with no dependencies, you can run it with:


Clone this repo
Open index.html directly in your browser
or, for a smoother local dev experience, serve it with a simple local server (e.g. the Live Server extension in VS Code)


Customizing the Deck

All flashcard content lives in a single array near the top of scripts.js:

jsconst cardDeck = [
  { front: "Question here", back: "Answer here" },
  // add as many cards as you like
];

Add, remove, or edit entries in this array to build your own deck on any topic — no other code changes needed.

What I Learned

This project was a chance to practice:


Managing multiple "screens" in a single-page app using class toggling
Working with arrays of objects to drive dynamic content instead of hardcoding it
CSS 3D transforms and transitions for smooth, polished animations
Structuring state (current index, progress) that updates in sync with the UI


Author

Built by Alabi as a personal learning project.