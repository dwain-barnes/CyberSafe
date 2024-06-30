// Game data
const levels = [
    {
        title: "",
        content: "Welcome to CyberSafe Adventure! Learn about the Computer Misuse Act 1990 and its importance in the digital age.",
        image: "images/introduction.jpg",
        choices: [{ text: "Start", result: "Let's begin our adventure!", nextLevel: 1 }]
    },
    {
        title: "Unauthorised Access (Section 1)",
        content: "Your friend says, 'Hey, I saw Tom enter his password. Let's log into his account and read his messages for fun!' What do you do?",
        image: "images/unauthorised_access.jpg",
        choices: [
            { text: "Agree and log into Tom's account", result: "That's illegal! You should not access others' accounts without permission.", correct: false, explanation: "Section 1 of the Computer Misuse Act prohibits Unauthorised access to computer material. Even if your friend suggests it, accessing someone else's account without permission is a criminal offense.", nextLevel: 2 },
            { text: "Refuse and explain it's wrong", result: "Correct! It's illegal to access others' accounts without permission.", correct: true, explanation: "You made the right choice. Section 1 of the Computer Misuse Act makes it illegal to access computer systems without authorization. By refusing, you've avoided committing a crime and set a good example for your friend.", nextLevel: 2 }
        ]
    },
    {
        title: "Unauthorised Access with Intent (Section 2)",
        content: "Your cousin excitedly whispers, 'Look, Uncle left his tablet unlocked! Let's order that new game from his Amazon account. He won't even notice!' What's your decision?",
        image: "images/unauthorised_access_with_intent.jpg",
        choices: [
            { text: "Go along with the plan", result: "That's illegal! Accessing someone's account to make purchases is a serious offense.", correct: false, explanation: "Section 2 of the Computer Misuse Act covers Unauthorised access with intent to commit or facilitate further offenses. Even if your cousin suggests it, making Unauthorised purchases is a criminal act.", nextLevel: 3 },
            { text: "Refuse and suggest locking the tablet", result: "Excellent choice! You've avoided committing a serious offense.", correct: true, explanation: "You made the right decision. Section 2 of the Computer Misuse Act prohibits Unauthorised access with intent to commit further offenses. By refusing and protecting your uncle's privacy, you've avoided breaking the law.", nextLevel: 3 }
        ]
    },
    {
        title: "Unauthorised Modification (Section 3)",
        content: "During an online game, your teammate angrily says, 'That player is cheating! I have a 'booter' tool that can knock them offline. Let's use it and win!' What do you do?",
        image: "images/unauthorised_modification.jpg",
        choices: [
            { text: "Use the 'booter' to win the game", result: "That's illegal! Using tools to disrupt others' connections is against the law.", correct: false, explanation: "Section 3 of the Computer Misuse Act prohibits Unauthorised acts with intent to impair the operation of a computer. Using a 'booter', even at someone else's suggestion, is a criminal offense.", nextLevel: 4 },
            { text: "Refuse and report the cheater properly", result: "Great choice! You've avoided breaking the law and maintained fair play.", correct: true, explanation: "You made the right decision. Section 3 of the Computer Misuse Act makes it illegal to impair the operation of a computer. By refusing to use the 'booter' and choosing to report properly, you've avoided committing a crime and upheld good sportsmanship.", nextLevel: 4 }
        ]
    },
    {
        title: "Unauthorised Acts Causing Serious Damage (Section 3ZA)",
        content: "You've discovered a way to hack into a local phone company's system. Your friend dares you to try it out, saying it would be cool to see if you can really do it and that it'll prove your skills to join their Discord group 'L33T'. However, you realize there's a chance it could disrupt 999 emergency calls. What's your decision?",
        image: "images/serious_damage.jpg",
        choices: [
            { text: "Attempt the hack to join L33T", result: "That's illegal and extremely dangerous! Your actions have disrupted emergency services.", correct: false, explanation: "Section 3ZA of the Computer Misuse Act prohibits Unauthorised acts causing, or creating risk of, serious damage. Even though you didn't intend to, your hack has interfered with 999 calls, potentially putting lives at risk. This reckless act is a serious offense, even without malicious intent. Joining a hacker group doesn't justify endangering others.", nextLevel: 5 },
            { text: "Refuse and report the vulnerability", result: "Excellent decision! You've chosen the responsible and legal course of action.", correct: true, explanation: "You've made the right choice. Section 3ZA of the Computer Misuse Act covers acts that risk serious damage, even if unintentional. By refusing to hack and instead reporting the vulnerability, you've prevented potential disruption to emergency services and acted both ethically and legally. True skills are demonstrated through responsible actions, not reckless hacking.", nextLevel: 5 }
        ]
    },
    {
        title: "Making or Supplying Tools for Computer Misuse Offences (Section 3A)",
        content: "You've found a link to download software that can bypass login credentials and potentially hack into your friends' laptops. You're considering downloading it, even though you might not use it. What's your decision?",
        image: "images/hacking_tools.jpg",
        choices: [
            { text: "Download the software", result: "That's illegal! Downloading hacking tools, even if you don't plan to use them immediately, can be an offense.", correct: false, explanation: "Section 3A of the Computer Misuse Act prohibits making, supplying, or obtaining articles for use in computer misuse offenses. Even if you don't intend to use the software right away, downloading it could be considered obtaining an article for use in a computer misuse offense.", nextLevel: 6 },
            { text: "Don't download and report the website", result: "Excellent choice! You've avoided committing an offense and acted responsibly.", correct: true, explanation: "You made the right decision. Section 3A of the Computer Misuse Act covers the creation, supply, and obtaining of hacking tools. By choosing not to download the software and instead reporting the website, you've acted legally and responsibly.", nextLevel: 6 }
        ]
    }
];

const quizQuestions = [
    {
        question: "What does Section 1 of the Computer Misuse Act prohibit?",
        options: [
            "Unauthorised access to computer material",
            "Unauthorised modification of computer material",
            "Denial-of-service attacks",
            "Creating computer viruses"
        ],
        correctAnswer: 0
    },
    {
        question: "Under which section of the Computer Misuse Act is accessing a computer with intent to commit further offenses covered?",
        options: ["Section 1", "Section 2", "Section 3", "Section 3A"],
        correctAnswer: 1
    },
    {
        question: "What type of activity is prohibited under Section 3 of the Computer Misuse Act?",
        options: [
            "Unauthorised access",
            "Unauthorised modification of computer material",
            "Denial-of-service attacks",
            "Phishing"
        ],
        correctAnswer: 1
    },
    {
        question: "Which section of the Computer Misuse Act specifically addresses acts causing or risking serious damage?",
        options: ["Section 1", "Section 2", "Section 3", "Section 3ZA"],
        correctAnswer: 3
    },
    {
        question: "Is it legal to access someone else's computer if they give you permission?",
        options: ["Yes", "No", "Only for educational purposes", "Only if you're a system administrator"],
        correctAnswer: 0
    }
];

// Game state
let currentLevel = 0;
let score = 0;
const totalLevels = levels.length + 1; // Including quiz as a separate level

// DOM Elements
const levelContainer = document.getElementById('level-container');
const decisionContainer = document.getElementById('decision-container');
const explanationContainer = document.getElementById('explanation-container');
const quizContainer = document.getElementById('quiz-container');
const scoreElement = document.getElementById('score');
const progressBar = document.getElementById('progress');

// Game functions
function loadLevel(levelIndex) {
    if (levelIndex >= levels.length) {
        loadQuiz();
        return;
    }

    currentLevel = levelIndex;
    const level = levels[levelIndex];
    
    levelContainer.innerHTML = `<h2>${level.title}</h2><p>${level.content}</p>`;
    if (level.image) {
        levelContainer.innerHTML += `<img src="${level.image}" alt="${level.title}" class="level-image">`;
    }
    decisionContainer.innerHTML = '';
    explanationContainer.innerHTML = '';
    quizContainer.innerHTML = '';

    level.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => handleChoice(choice));
        decisionContainer.appendChild(button);
    });

    updateProgressBar();
}

function handleChoice(choice) {
    const buttons = decisionContainer.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    explanationContainer.innerHTML = `<p><strong>${choice.result}</strong></p>`;
    if (choice.explanation) {
        explanationContainer.innerHTML += `<p>${choice.explanation}</p>`;
    }
    if (choice.correct !== undefined) {
        if (choice.correct) {
            score += 20;
            scoreElement.textContent = score;
        }
    }
    setTimeout(() => {
        loadLevel(choice.nextLevel);
        updateProgressBar();
    }, 3000);
}

function loadQuiz() {
    levelContainer.innerHTML = '';
    decisionContainer.innerHTML = '';
    explanationContainer.innerHTML = '';
    quizContainer.innerHTML = '<h2>Final Quiz</h2>';
    
    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        
        q.options.forEach((option, optionIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'quiz-option';
            optionDiv.innerHTML = `
                <input type="radio" id="q${index}o${optionIndex}" name="q${index}" value="${optionIndex}">
                <label for="q${index}o${optionIndex}">${option}</label>
            `;
            questionDiv.appendChild(optionDiv);
        });
        
        quizContainer.appendChild(questionDiv);
    });
    
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Quiz';
    submitButton.addEventListener('click', gradeQuiz);
    quizContainer.appendChild(submitButton);

    updateProgressBar();
}

function gradeQuiz() {
    let quizScore = 0;
    quizQuestions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correctAnswer) {
            quizScore += 20;
        }
    });
    
    score += quizScore;
    scoreElement.textContent = score;
    
    currentLevel++; // Increment currentLevel after completing the quiz
    updateProgressBar(); // This will now show 100% after quiz completion
    
    quizContainer.innerHTML = `
        <h2>Game Completed!</h2>
        <p>Congratulations on completing CyberSafe Adventure!</p>
        <p>You scored ${quizScore} out of 100 on the quiz.</p>
        <p>Your final score is ${score} out of 200.</p>
        <button onclick="restartGame()">Play Again</button>
    `;
}

function restartGame() {
    currentLevel = 0;
    score = 0;
    scoreElement.textContent = score;
    loadLevel(currentLevel);
    updateProgressBar();
}

function updateProgressBar() {
    const progress = (currentLevel / (totalLevels - 1)) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.textContent = `${Math.round(progress)}%`;
}

// Initialize the game
document.addEventListener('DOMContentLoaded', () => loadLevel(currentLevel));

// CMA Modal functionality
var modal = document.getElementById("cma-modal");
var btn = document.getElementById("cma-button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
