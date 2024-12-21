let firstName = document.getElementById("FN");
let firstNameError = document.getElementById("first-name-error");
let lastName = document.getElementById("LN");
let lastNameError = document.getElementById("last-name-error");
let userName = document.getElementById("US");
let userNameError = document.getElementById("user-name-error");
let email = document.getElementById("EM");
let emailError = document.getElementById("email-error")
let password = document.getElementById("PS");
let passwordError = document.getElementById("password-error");
let confirmPassword = document.getElementById("CPS");
let confirmPasswordError = document.getElementById("Confirm-password-error");
let registerBtn = document.getElementById("reg-btn");


registerBtn.addEventListener("click" , ()=>{
    flag = true;
    if (firstName.value == "") {
        firstNameError.textContent = "please enter your first name!";
        flag = false;
    }
    else{
        firstNameError.textContent = "";
    }

    if (lastName.value == "") {
        lastNameError.textContent = "please enter your last name!";
        flag = false;
    }
    else{
        lastNameError.textContent = "";
    }

    if(userName.value == ""){
        userNameError.textContent = "please enter your username!";
        flag = false;
    }
    else if(userName.value.length < 8 || userName.value.length > 24){
        userNameError.textContent = "The username should be more than or equal 8 charcters and less than or equal 24 charcters";
        flag = false;
    }
    else{
        userNameError.textContent = "";
    }


    if (email.value == "") {
        emailError.textContent = "please enter your email!";
        flag = false;
    }
    else if (email.value.match(/@gmail.com/) == null) {
        emailError.textContent = "must be email formating please!";
        flag = false;
    }
    else{
        emailError.textContent = "";
    }

    if(password.value == ""){
        passwordError.textContent = "please Enter your password!";
        flag = false;
    }
    else if(password.value.length < 6){
        passwordError.textContent = "Password should not be less than 6 charcters";
        flag = false;
    }
    else{
        passwordError.textContent = "";
    }

    if (confirmPassword.value != password.value) {
        confirmPasswordError.textContent = "Not the same password you entered!";
        flag = false;
    }
    else if(confirmPassword.value.length == ""){
        confirmPasswordError.textContent = "Confirm the password again please!"
        flag = false
    }
    else{
        confirmPasswordError.textContent = "";
    }

    if (flag == true) {

        localStorage.setItem("First name" , `${firstName.value}`);
        localStorage.setItem("Last name" , `${lastName.value}`);
        localStorage.setItem("UserName" , `${userName.value}`);
        localStorage.setItem("Email" , `${email.value}`);
        localStorage.setItem("Password" , `${password.value}`);
        window.open("login-page.html" , "_self");

    }



})
