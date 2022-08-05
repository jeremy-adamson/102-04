// Cyclical loop which requires the user to either enter 'pancakes', 'waffles', or 'omelettes' in order to proceed when first_prompts() is called
// Loop also gives a hint at the exit parameters
// An addition may be made later on to include a loop counter to provide an auto-exit after 'n' failed attempts for when someone doesn't want to eat the breakfasts of champions


// Entry point and returns a string with "You picked [valid user input]!"
// Else, returns failure msg to user and calls second_prompts()

function first_prompts() {
    let user_breakfast = prompt("What is your favorite breakfast food?");

    if (user_breakfast == "pancakes" || user_breakfast == "waffles" || user_breakfast == "omelettes") {
        alert("You are a champion!");
        return user_breakfast;
    } else {
        alert("Boooooooo!!!");
        second_prompts();
    }
}


// Function called when invalid user input is given and provides a hint to valid input
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

// Printing out the user's order to the screen in h2 style
// Modifies the output if the user only wants a single item in the order

function print_user_choice(){
    if (order_amount == 1){
        let single_order = user_breakfast.slice(0,-1);
        let msg_to_user = "Here is your " + order_amount + " " + single_order + "!";
        document.write("<h2>" + msg_to_user + "</h2>");
    } else {
        let msg_to_user = "Here are your " + order_amount + " " + user_breakfast + "!";
        document.write("<h2>" + msg_to_user + "</h2>");
    }
   
}

// Function prompts the user for how many [item] they want and displays an image of [user_breakfast] multiple times
// Inputs ([user_breakfast], [image for pancakes], [image for waffles], and [image for omelettes])

function user_order_amount() {

    let order_size = prompt("How many " + user_breakfast + " do you want (1 to 5?)");

    // Check for valid input from 1 to 5
    while (!((1 <= order_size) && (order_size <= 5))) {
        if (order_size < 0){
            alert("I see you're trying to break the site...")
            alert("I REALLY don't think a negative number of " + user_breakfast + " is the way to go.");
        }
        alert("That's not right! Please pick a value from 1 to 5");
        order_size = prompt("How many " + user_breakfast + " do you want (1 to 5?)");        
    }
    return order_size;
}

// Serves up the number of images defined by the user using the image files defined in the parameters
// The for loop might not be the best code but it took a bit to find something that worked

function user_order(pancakes_src, waffles_src, omelettes_src) {

    let user_order_size = order_amount;
    let container = document.getElementById("user_choice_picture");
    var output_image = document.createElement("img");

    if (user_breakfast == "pancakes") {
        output_image.src = pancakes_src;
    } else if (user_breakfast == "waffles") {
        output_image.src = waffles_src;
    } else {
        output_image.src = omelettes_src;
    }

     output_image.width = 100;
     output_image.height = 100;

    for (let i = 0; i < user_order_size; i++) {
        var output_image_b = document.createElement("img");
        output_image_b.src = output_image.src;
        output_image_b.width = output_image.width;
        output_image_b.height = output_image.height;
        container.appendChild(output_image_b);
       
    }
}

const user_breakfast = first_prompts();
const order_amount = user_order_amount();