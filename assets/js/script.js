document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                
                runGame();
            }
        });
    }

    

function runGame() {
    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    if (id === "geogpraphy") {
        showGeographyQuestion
    } else if (id === "music") {
        showMusicQuestion
    } else if (id === "sport") {
        showSportQuestion
    } else if ( id === "television") {
        showTelevisionQuestion
    }
}

geographyQuestions = {
    "What is the capital city of Ecuador?" : [ "Bogota", "Qutio", "Lima", "Caracas", 1],
    "In which US city would you find the Empire State Building?" : [ "New Orleans", "New York", "Chicago", "Los Angeles", 1],
    "On which continent would you find the Victoria Falls?" : ["Europe", "South America", "Asia","Africa", 3],
    "Tahiti lies in which ocean?" : ["Atlantic", "Indian", "Pacific", "Antarctic", 2 ]
} 


function showGeographyQuestion() {

let randomIndex = Math.floor(Math.random() * geographyQuestions.length )
return geographyQuestions[randomIndex];
}