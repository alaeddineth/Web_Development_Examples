function showAlert() {
    alert("This is an alert!");
}

function showConfirm() {
    var result = confirm("Do you want to proceed?");
    if (result) {
        alert("You clicked OK!");
    } else {
        alert("You clicked Cancel!");
    }
}

function showPrompt() {
    var userInput = prompt("Please enter your name:", "John Doe");
    if (userInput !== null) {
        alert("Hello, " + userInput + "!");
    } else {
        alert("You clicked Cancel or closed the prompt!");
    }
}
