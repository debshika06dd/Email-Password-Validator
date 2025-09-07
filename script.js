let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#validatorForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    // Reset errors
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#emailError").style.visibility = "hidden";
    document.querySelector("#passwordError").textContent = "";
    document.querySelector("#passwordError").style.visibility = "hidden";
    document.querySelector("#resultMessage").textContent = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    let isValid = true;

    if(!emailans){
        document.querySelector("#emailError").textContent = "Email is incorrect";
        document.querySelector("#emailError").style.visibility = "visible";
        isValid = false;
    }
    if(!passwordans){
        document.querySelector("#passwordError").textContent = "Password is incorrect";
        document.querySelector("#passwordError").style.visibility = "visible";
        isValid = false;
    }

    if(isValid){
        document.querySelector("#resultMessage").textContent = "✅ Everything is correct!";
    }
});
