function validateEmail() {
    var emailInput = document.getElementById("emailInput").value;
    var errorMessage = document.getElementById("error-message");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailInput)) {
        errorMessage.textContent = "";
        errorMessage.textContent = "Invalid email address";
    }
}

