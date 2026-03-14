document.getElementById("signin_btn")
    .addEventListener("click", function () {

        const inputUsername = document.getElementById("input_username");
        const username = inputUsername.value;

        const inputPassword = document.getElementById("input_password");
        const password = inputPassword.value;

        /* matching the inputted username & password with default 
        username & password */

        if (username === "admin" && password === "admin123") {
            alert("Sign In Successfull");

            window.location.assign("home.html");
        }
        else {
            alert("Sign In Failed");
            return;
        }
    });