/*
var myWords = ["EASY", "CAKE", "MUSIC", "FOOD", "BAD", "GOOD", "DRINK", "EAT", "SLEEP",
    "TREE", "WALK", "RUN", "DRIVE", "MAIL", "HOTEL", "CAT", "DOG", "BEACH", "CLASS",
    "TRIP", "GRADE", "TALK"
];
var result = [];
myWords.sort();
$(document).ready(function() {
    arrangeGame();
});

function randomWord(arr) {;
    for (let i = 0; i <= 5; i++) {

        result.push(myWords[Math.floor(Math.random() * arr.length)]);
        //result=myWords[Math.floor(Math.random() * arr.length)]
    }


    //return result.join(' ');
    return [...new Set(result)];
}
console.log(randomWord(myWords));

function arrangeGame() {
    $.each(result, function(key, item) {
        $("#hint").append("<p>" + item + "</p>");
    })
}
*/

var myWords = ["EASY", "CAKE", "MUSIC", "FOOD", "BAD", "GOOD", "DRINK", "EAT", "SLEEP", "TREE", "WALK", "RUN", "DRIVE", "MAIL", "HOTEL", "CAT", "DOG", "BEACH", "CLASS",
    "TRIP", "GRADE", "TALK"
];
var result = [];
myWords.sort();
$(document).ready(function() {
    arrangeGame();
});

//randomize the word
function randomWord(arr) {;
    for (let i = 0; i <= 5; i++) {

        result.push(myWords[Math.floor(Math.random() * arr.length)]);
        //result=myWords[Math.floor(Math.random() * arr.length)]
    }


    //return result.join(' ');
    return [...new Set(result)];
}

console.log(randomWord(myWords));

function arrangeGame() {
    $.each(result, function(key, item) {
        $("#hint").append("<p>" + item + "</p>");
    })
    letterGrid();

    placeCorrectLetters();


}

function placeCorrectLetter() {
    var positions = ["row", "column", "diagonal"];
    for (var i = 0; i < result.length; i++) {
        var orientation = positions[Math.floor(Math.random() * positions.length)];
        //alert(orientation);
        var start = Math.floor(Math.random() * $(".individual").length);
        var myRow = $(".individual:eq(" + start + ")").data("row");
        var myColumn = $(".individual:eq(" + start + ")").data("column");
    }
}

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function letterGrid() {
    for (var i = 0; i < 6; i++) {
        var row = $("<tr></tr>");
        for (var j = 0; j < 6; j++) {
            var letter = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            var cell = $("<td>" + letter + "</td>");
            row.append(cell);
        }
        $("#letters").append(row);
    }
}

/*
$(document).ready(function() {

    // Array of 20 words
    const words = ["apple", "banana", "cherry", "orange", "pear", "grape", "kiwi", "pineapple", "watermelon", "mango", "papaya", "peach", "plum", "strawberry", "blueberry", "raspberry", "blackberry", "lemon", "lime", "coconut"];

    // Randomly select 6 words from the array
    const selectedWords = words.sort(() => 0.5 - Math.random()).slice(0, 6);

    // Create a 6x6 word search grid using the selected words
    const grid = [];
    for (let i = 0; i < 6; i++) {
        const row = [];
        for (let j = 0; j < 6; j++) {
            if (i === 0) {
                row.push(selectedWords[j][0]);
            } else if (i === 5) {
                row.push(selectedWords[j][4]);
            } else {
                row.push(Math.random() < 0.5 ? selectedWords[j][i] : words[Math.floor(Math.random() * words.length)]);
            }
        }
        grid.push(row);
    }

    // Display the word search grid and list of words to solve
    const $wordSearch = $("#word-search");
    const $wordsList = $("#words-list");
    let wordListHTML = "";
    for (let i = 0; i < 6; i++) {
        const rowHTML = "<div class='row'>" + grid[i].map((letter) => "<div class='letter'>" + letter + "</div>").join("") + "</div>";
        $wordSearch.append(rowHTML);
        wordListHTML += "<div class='word'>" + selectedWords[i] + "</div>";
    }
    $wordsList.html(wordListHTML);
});

    // Array of 20 words
    const words = ["apple", "banana", "cherry", "orange", "pear", "grape", "kiwi", "pineapple", "watermelon", "mango", "papaya", "peach", "plum", "strawberry", "blueberry", "raspberry", "blackberry", "lemon", "lime", "coconut"];

    // Randomly select 6 words from the array
    const selectedWords = words.sort(() => 0.5 - Math.random()).slice(0, 6);

    // Create a 6x6 word search grid using the selected words
    const grid = [];
    for (let i = 0; i < 6; i++) {
        const row = [];
        for (let j = 0; j < 6; j++) {
            if (i === 0) {
                row.push(selectedWords[j][0]);
            } else if (i === 5) {
                row.push(selectedWords[j][4]);
            } else {
                row.push(Math.random() < 0.5 ? selectedWords[j][i] : words[Math.floor(Math.random() * words.length)]);
            }
        }
        grid.push(row);
    }

    // Display the word search grid and list of words to solve
    const wordSearch = document.getElementById("word-search");
    const wordsList = document.getElementById("words-list");
    let wordListHTML = "";
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < 6; j++) {
            const letter = document.createElement("div");
            letter.classList.add("letter");
            letter.textContent = grid[i][j];
            row.appendChild(letter);
        }
        wordSearch.appendChild(row);
        wordListHTML += "<div class='word'>" + selectedWords[i] + "</div>";
    }
    wordsList.innerHTML = wordListHTML;
}); */