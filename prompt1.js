// Cyclical loop which requires the user to either enter 'pancakes', 'waffles', or 'omelettes' in order to proceed
// Loop also gives a hint at the exit parameters
// An addition may be made later on to include a loop counter to provide an auto-exit after three failed attempts for when someone doesn't want to eat the breakfasts of champions

function first_prompts() {
    let user_breakfast = prompt("What is your favorite breakfast food?");

    if (user_breakfast == "pancakes" || user_breakfast == "waffles" || user_breakfast == "omelettes") {
        alert("You are a champion!");
        document.write(user_breakfast);
    } else {
        alert("Boooooooo!!!");
        second_prompts();
    }
}

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

first_prompts();