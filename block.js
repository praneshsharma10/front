const correctPassword = "pranesh";

function checkPassword() {
    const userInput = document.getElementById("passwordInput").value;
    const messageElement = document.getElementById("message");

    if (userInput === correctPassword) {
        // Redirect to a new page displaying the success message
        window.location.href = "redirect.html";
    } else {
        messageElement.textContent = "Incorrect password. Try again.";
        messageElement.style.color = "red";
    }
}
