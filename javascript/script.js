function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Simple validation
    if (username === "hitanshu" && password === "hello") {
        errorMessage.innerHTML = ""; // Clear any previous error messages
        alert("Login successful!");
        window.location.replace("index2.html");
    } else {
        errorMessage.innerHTML = "Invalid username or password. Please try again.";
    }
}
