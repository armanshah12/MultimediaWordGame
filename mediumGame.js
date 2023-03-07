const wordstorage = ['school', 'ranch', 'glove', 'love', 'google', 'apple', 'epoch', 'notorious', 'optimist', 'walrus', 'tissue', 'amass', 'obliterate', 'astronomy', 'physics', 'blunt', 'critique', 'urban', 'colony', 'negative', 'positive', 'content', 'imply', 'stable', 'adept', 'nimble', 'agile'];
const words = [];

//Random choose 8 words form wordstorage
while (words.length < 8) {
    const randomIndex = Math.floor(Math.random() * wordstorage.length);
    const element = wordstorage[randomIndex];
    if (!words.includes(element)) {
        words.push(element);
    }
}

//Try to print the selected words
console.log(words);

console.log('---------------------------------------')

const gridSize = 10;
let puzzle = [];
let wordsFound = [];
let wordBeingSearched = '';
let wordDirection = '';
let wordStartRow = 0;
let wordStartCol = 0;

function createPuzzle() {
    // Create an empty grid
    for (let row = 0; row < gridSize; row++) {
        puzzle[row] = [];
        for (let col = 0; col < gridSize; col++) {
            puzzle[row][col] = '';
        }
    }

    // Add words to the grid
    for (let i = 0; i < words.length; i++) {
        addWordToPuzzle(words[i]);
    }

    // Fill in remaining cells with random letters
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            if (puzzle[row][col] === '') {
                const randomLetter = letters[Math.floor(Math.random() * letters.length)];
                puzzle[row][col] = randomLetter;
            }
        }
    }

    // Display the puzzle in the HTML table
    const table = document.getElementById('puzzle');
    for (let row = 0; row < gridSize; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < gridSize; col++) {
            const td = document.createElement('td');
            td.innerText = puzzle[row][col];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

function addWordToPuzzle(word) {
    // Choose a random starting position and direction for the word
    const directions = ['horizontal', 'vertical', 'diagonal'];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    const maxStartRow = gridSize - 1 - (randomDirection === 'vertical' ? word.length - 1 : 0);
    const maxStartCol = gridSize - 1 - (randomDirection === 'horizontal' ? word.length - 1 : 0);
    const randomStartRow = Math.floor(Math.random() * maxStartRow);
    const randomStartCol = Math.floor(Math.random() * maxStartCol);

    // Check if the word can fit in the chosen starting position and direction
    let canFit = true;
    for (let i = 0; i < word.length; i++) {
        const row = randomStartRow + (randomDirection === 'vertical' ? i : 0);
        const col = randomStartCol + (randomDirection === 'horizontal' ? i : 0);
        if (puzzle[row][col] !== '' && puzzle[row][col] !== word[i]) {
            canFit = false;
            break;
        }
    }

    // If the word can fit, add it to the grid
    if (canFit) {
        for (let i = 0; i < word.length; i++) {
            const row = randomStartRow + (randomDirection === 'vertical' ? i : 0);
            const col = randomStartCol + (randomDirection === 'horizontal' ? i : 0);
            puzzle[row][col] = word[i];
        }
    } else {
        addWordToPuzzle(word);
    }
}

createPuzzle();