# Rock Paper Scissors

Rock Paper Scissors is a browser-based implementation of the classic hand game built using HTML, CSS, and Vanilla JavaScript. The project provides an interactive gaming experience where users compete against a computer opponent that makes randomized choices. It demonstrates core front-end development concepts such as DOM manipulation, event handling, game logic implementation, score tracking, and responsive user interface design.

---

## Project Category

**Category:** Web Development / Frontend Development / Browser-Based Game

---

## Key Features

* **Interactive Gameplay:** Play Rock, Paper, Scissors against a computer opponent with simple click-based controls.
* **Random Computer Opponent:** The computer generates randomized choices for every round, ensuring fair gameplay.
* **Live Score Tracking:** Automatically updates and displays the scores of both the player and the computer after each round.
* **Game Result Display:** Instantly informs players whether they won, lost, or drew the round along with the winning move.
* **Reset Functionality:** Allows users to restart the game and reset both scores without refreshing the page.
* **Responsive User Interface:** Clean and visually appealing layout that works across modern desktop and mobile browsers.

---

## Tech Stack & Hardware Components

### Software & Technologies

* **Frontend:** HTML5
* **Styling:** CSS3
* **Programming Language:** JavaScript (Vanilla JS)
* **Version Control:** Git & GitHub
* **Deployment:** GitHub Pages

### Target Hardware Architecture (If Applicable)

* **Desktop/Laptop:** Primary platform for playing the game.
* **Mobile Devices:** Compatible with smartphones and tablets using modern web browsers.
* **Web Browser:** Google Chrome, Microsoft Edge, Mozilla Firefox, Safari, or any standards-compliant browser.

---

## Directory Structure

```text
rock-paper-scissors/
├── .github/
│   └── workflows/
│       └── static.yml              # GitHub Pages deployment workflow
├── images/
│   ├── rock.png                    # Rock choice image
│   ├── paper.png                   # Paper choice image
│   └── scissors.png                # Scissors choice image
├── index.html                      # Main webpage
├── style.css                       # Styling and responsive layout
├── script.js                       # Game logic and score management
└── README.md                       # Project documentation
```

---

## How It Works (High-Level Workflow)

### 1. User Gameplay Flow

1. The user opens the game in a web browser.
2. The player selects Rock, Paper, or Scissors by clicking the corresponding image.
3. The application records the player's selection.
4. The computer generates a random move.
5. The game compares both choices and determines the winner.
6. The result message and scores are updated immediately.

### 2. Computer Decision Flow

1. The application randomly selects one of the three possible moves.
2. The selected move is compared with the user's choice.
3. The game evaluates the winning condition based on Rock-Paper-Scissors rules.
4. The computer's choice is displayed.
5. The appropriate score is incremented.
6. Players can continue playing or reset the scores.

---

## Getting Started

### Prerequisites

* Any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari)
* Git (optional, for cloning the repository)

### Installation & Local Setup

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/AjitM07/rock-paper-scissors.git
cd rock-paper-scissors
```

Install dependencies:

```bash
No additional dependencies are required.
```

Run the application:

```bash
Open index.html in your preferred web browser.
```

*For a better development experience, use the VS Code Live Server extension to launch the project with automatic reloading.*

Access the Application:

Launch the `index.html` file directly in your browser or start the project using Live Server. Select Rock, Paper, or Scissors to begin playing against the computer. The application automatically tracks scores, displays results after every round, and allows score resetting at any time.

---

## Future Improvements

* Add multiple difficulty levels.
* Introduce animations and sound effects.
* Display game history and match statistics.
* Implement best-of-three and tournament modes.
* Add multiplayer support using WebSockets.
* Store high scores using Local Storage.
* Improve mobile responsiveness with additional animations.
* Add keyboard controls and accessibility improvements.
