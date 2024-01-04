function validateLogin() 
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    console.log("correct")
    console.log(username)
    console.log(password)
    // Simple validation
    if (username === "cyberknight" && password === "hello") {
        
        alert("Login successful!");
        window.location.replace("index2.html");
    } 
}

function validateLogin2() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      
      console.log("correct")
      console.log(username)
      console.log(password)
      // Simple validation
      
          
          alert("Lets get connected!");
          window.location.replace("index3.html");
      
      }

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


// script.js







