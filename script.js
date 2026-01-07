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

//can be used to create custom toast with different messages
const showToast = (
    message = "Thanks for completing the form, we will be in touch soon!") => {
    let newToast = document.createElement("div");
    newToast.innerHTML = ` <div class="toast">
                            <div class="toast-header">
                                <h3>Message sent!</h3>
                                <img class="toast-icon" src="./assets/images/icon-success-check.svg" alt="toast success icon" />
                            </div>
                            <div>${message}</div>
                           </div>`;
    let existingToast =
        document.body.querySelector(".toast");
    if (existingToast) {
        existingToast.remove();
    }

    document.body.appendChild(newToast)
};

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
        //firstName.style.borderColor = `green`;
        setStatusClass(firstName, "positive");
        firstNameError.style.display = "none";
    }
    else {
        results["first-name"] = false;
        //firstName.style.borderColor = `red`;
        setStatusClass(firstName, "error");
        firstNameError.style.display = "block";
    }

    if (lastName.value.trim()) {
        results["last-name"] = true;
        setStatusClass(lastName, "positive");
        lastNameError.style.display = "none";
    }
    else {
        results["last-name"] = false;
        setStatusClass(lastName, "error");
        lastNameError.style.display = "block";
    }

    if (email.value.trim() && email.checkValidity()) {
        results["email"] = true;
        setStatusClass(email, "positive");
        emailError.style.display = "none";
    }
    else {
        results["email"] = false;
        setStatusClass(email, "error");
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
        setStatusClass(message, "positive");
        messageError.style.display = "none";
    }
    else {
        results["message"] = false;
        setStatusClass(message, "error");
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

function setStatusClass(element, className) {
    if (element.classList.contains("positive")) {
        element.classList.remove("positive");
    }

    if (element.classList.contains("error")) {
        element.classList.remove("error");
    }

    element.classList.add(className);
}

function handleRadioBtn(event) {
    let options = document.querySelectorAll(".query-label");
    options.forEach(queryElement => {
        if (queryElement.classList.contains("radio-selected")) {
            queryElement.classList.remove("radio-selected");
        }
    });
    event.target.parentElement.classList.add("radio-selected"); //hard-coded way to access the div container
}

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (isValid(validateForm())) {
        showToast();
    }
});

generalQuery.addEventListener("change", handleRadioBtn);

supportQuery.addEventListener("change", handleRadioBtn);