// Cyclical loop which requires the user to either enter 'pancakes', 'waffles', or 'omelettes' in order to proceed when first_prompts() is called
// Loop also gives a hint at the exit parameters
// An addition may be made later on to include a loop counter to provide an auto-exit after 'n' failed attempts for when someone doesn't want to eat the breakfasts of champions


// Entry point and returns a string with "You picked [valid user input]!"
// Else returns failure msg to user and calls second_prompts()

function first_prompts() {
    let user_breakfast = prompt("What is your favorite breakfast food?");

    if (user_breakfast == "pancakes" || user_breakfast == "waffles" || user_breakfast == "omelettes") {
        alert("You are a champion!");
        let msg_to_user = "You picked " + user_breakfast +"!";
        return msg_to_user;
    } else {
        alert("Boooooooo!!!");
        second_prompts();
    }
}


// Function called upon invalid user input and provides a hint to valid input
// Calls first_prompts() to allow for retry

function second_prompts() {
    let secondary_choice = confirm("Really, is that what you're going with?");
    
    if (secondary_choice) {
        alert ("And not pancakes, waffles, or omelettes?");
        alert ("Try again");
    } else {
        alert ("Wise retry of a champion!");
    }
    first_prompts();
}