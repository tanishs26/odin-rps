function getComputerChoice() {
    let choice;
    const turn = Math.floor(Math.random() * 3) + 1;
    (turn === 1) ? choice = "rock" : (turn === 2) ? choice = "scissors" : choice = "paper"
    console.log("Computer got " + choice)
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("It's a tie")
        return "It's a Tie"

    }
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'paper') {
                return "You Lose! Paper beats Rock "
            } else {
                return "You won! Rock beats scissors"
            }
        case 'scissors':
            if (computerSelection === 'rock') {
                return "You Lose! Rock beats Scissors "
            } else {
                return "You won! Scissors beats Paper"
            }
        case 'paper':
            if (computerSelection === 'scissors') {
                return "You Lose! Scissors beats Paper"
            }
            else {
                return "You won! Paper beats Rocks"
            }
        default:
            return "Invalid choice"
    }


}
alert(playRound(prompt("Enter your choice").toLowerCase(), getComputerChoice()));