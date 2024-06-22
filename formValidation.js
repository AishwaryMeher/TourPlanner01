function validate() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorPass = document.getElementById("errorPass");
    const submit = document.getElementById('submit');

    if (password != confirmPassword) {
        errorPass.innerHTML = "Confirm Password is not same as Password";
        errorPass.style.color = "red";
    }
    else {
        errorPass.innerHTML = "";
    }
}