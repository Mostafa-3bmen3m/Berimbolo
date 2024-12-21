let userName = document.getElementById("US");
let userNameError = document.getElementById("user-name-error");
let email = document.getElementById("EM");
let emailError = document.getElementById("email-error")
let password = document.getElementById("PS");
let passwordError = document.getElementById("password-error");
let loginBtn = document.getElementById("login");

loginBtn.addEventListener("click" , ()=>{

    flag = true


    if(userName.value == ""){
        userNameError.textContent = "please enter your username!";
        flag = false;
    }
    else if(userName.value.length < 8 || userName.value.length > 24){
        userNameError.textContent = "The username should be more than or equal 8 charcters and less than or equal 24 charcters";
        flag = false;
    }
    else if(userName.value != localStorage.getItem("UserName")){
        userNameError.textContent = "This user name does not exist";
        flag = false
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
    else if(email.value != localStorage.getItem("Email")){
        emailError.textContent = "This email does not exist";
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
    else if(password.value != localStorage.getItem("Password")){
        passwordError.textContent = "The password is wrong";
        flag = false;
    }
    else{
        passwordError.textContent = "";
    }


    if(flag == true){
        window.open("index.html" , "_self");
    }
})