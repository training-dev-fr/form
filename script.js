let button = document.querySelector("#connect");
let form = document.querySelector("form");
let email = document.querySelector("#email");

button.addEventListener("click", function(e) {
    e.preventDefault();
    let valid = form.reportValidity();
    if (valid) {
        window.location.assign("mapage.html");
    }
});

email.addEventListener("keyup", function(e) {
    email.reportValidity();
})