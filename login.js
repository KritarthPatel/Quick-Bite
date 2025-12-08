let inputs = document.getElementsByClassName("box");
let buttons = document.querySelectorAll("#a");
let loginBtn = buttons[0];
loginBtn.addEventListener("click", function () {
    let emailPhone = inputs[0].value;
    let password = inputs[1].value;
    if (emailPhone === "" || password === "") {
        alert("Please fill all fields.");
        } else if ((emailPhone.indexOf("@gmail.com") === -1 && emailPhone.length !== 10)) {
            alert("Enter a valid email address or phone number.");
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters.");
        } else {
            alert("Login Successful.");
        }
    });

const themeBtn = document.querySelector(".btn");
const forgotpass = document.querySelector(".forp")
const login = document.querySelector(".container1")
const signup = document.querySelector(".container2")

let dark = false;

themeBtn.addEventListener("click", function () {

    if (!dark) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.querySelector(".top").style.backgroundColor = "black";
        document.querySelector(".top").style.border = "1px solid white";
        themeBtn.style.backgroundColor = "white";
        themeBtn.style.color = "black";
        themeBtn.textContent = "Light Mode";
        forgotpass.style.color = "white";
        login.style.backgroundColor = "#333";
        login.style.color = "white";
        signup.style.backgroundColor = "#333";
        signup.style.color = "white";
        dark = true;
    } else {
        document.body.style.backgroundColor = "transparent";
        document.body.style.color = "black";
        document.querySelector(".top").style.backgroundColor = "wheat";
        themeBtn.style.backgroundColor = "rgb(234, 190, 110)";
        themeBtn.style.color = "black";
        themeBtn.textContent = "Dark Mode";
        forgotpass.style.color = "black";
        login.style.backgroundColor = "rgb(234, 190, 110)";
        login.style.color = "";
        signup.style.backgroundColor = "rgb(234, 190, 110)";
        signup.style.color = "";
        dark = false;
    }
});
