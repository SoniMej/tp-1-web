
function level() {
    while (true) {
        let choice =prompt("Choisissez un niveau de difficulté :\n easy (1-10, 6 tentatives)\n medium (1-50, 5 tentatives)\n hard (1-100, 4 tentatives)");
        if (choice === "easy") {
            return { min: 1, max: 10, att: 6 };
        } else if (choice === "medium") {
            return { min: 1, max: 50, att: 5 };
        } else if (choice === "hard") {
            return { min: 1, max: 100, att: 4 };
        } else {
            alert("Invalid choice, try again.");}
    }
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }


function game() {
    let D = level();
    let Number = getRandomNumber(D.max);
    let attLeft = D.att;
    let found = false;

    alert(`entrer un nombre entre ${D.min} and ${D.max} Vous avez ${D.att} tentatives.`);

    while (attLeft > 0 && !found) {
        let guess = parseInt(prompt(`Devinez le nombre (Tentatives restantes: ${attLeft}):`), 10);

        if (isNaN(guess) || guess < D.min || guess > D.max) {
            alert(`Veuillez entrer un nombre entre ${D.min} et ${D.max}.`);
            continue;
        }

        attLeft--;

        if (guess === Number) {
            alert('congrats, nice guess!!!! ');
            found = true;
        } else if (guess < Number) {
            alert("give a bigger number");
        } else {
            alert("give a smaller number");
        }
    }

    if (!found) {
        alert(`you lost number is ${Number}.`);
        v=prompt("do you want to replay ?");
        if (v=="no"){exit;}
        else{
            replay();
        }
    }
    
}
function replay() {
    play();
    
}


document.getElementById("start").addEventListener("click", function() {
    game(); 
});