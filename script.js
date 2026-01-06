const contactForm = document.getElementById("contact-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const generalQuery = document.getElementById("general-query");
const supportQuery = document.getElementById("support-request");
const message = document.getElementById("message");
const consent = document.getElementById("consent-check");
const submitBtn = document.getElementById("submit-btn");

const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const emailError = document.getElementById("email-error");
const queryError = document.getElementById("query-error");
const messageError = document.getElementById("message-error");
const consentError = document.getElementById("consent-error");

function validateForm() {
    let results = {
        "first-name": false,
        "last-name": false,
        "email": false,
        "query": false,
        "message": false,
        "consent": false,
    };

    if (firstName.value.trim()) {
        results["first-name"] = true;
        firstName.style.borderColor = `green`;
        firstNameError.style.display = "none";
    }

    else {
        results["first-name"] = false;
        firstName.style.borderColor = `red`;
        firstNameError.style.display = "block";
    }

    if (lastName.value.trim()) {
        results["last-name"] = true;
        lastName.style.borderColor = `green`;
        lastNameError.style.display = "none";
    }

    else {
        results["last-name"] = false;
        lastName.style.borderColor = `red`;
        lastNameError.style.display = "block";
    }

    if (email.value.trim() && email.checkValidity()) {
        results["email"] = true;
        email.style.borderColor = `green`;
        emailError.style.display = "none";
    }
    else {
        results["email"] = false;
        email.style.borderColor = `red`;
        emailError.style.display = "block";
    }

    if (supportQuery.checked || generalQuery.checked) {
        results["query"] = true;
        queryError.style.display = "none";
    }
    else {
        results["query"] = false;
        queryError.style.display = "block";
    }

    if (message.value.trim()) {
        results["message"] = true;
        message.style.borderColor = `green`;
        messageError.style.display = "none";
    }
    else {
        results["message"] = false;
        message.style.borderColor = `red`;
        messageError.style.display = "block";
    }

    if (consent.checked) {
        results["consent"] = true;
        consentError.style.display = "none";
    }
    else {
        results["consent"] = false;
        consentError.style.display = "block";
    }

    return results;
}

function isValid(objs) {

    for (const property in objs) {
        let isValid = objs[property];
        if (!isValid)
            return false;
    }

    return true;
}

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    isValid(validateForm());
});