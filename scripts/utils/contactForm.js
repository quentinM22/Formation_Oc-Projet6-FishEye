// Variobles
const regexName = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// Elements Globale formulaire
const form = document.querySelector("form")
// Elements donnees formulaire 
const first = document.querySelector("#first")
const last = document.querySelector("#last")
const email = document.querySelector("#email")
const msg = document.querySelector("#msg")

let IsFormContactKeyListenerActive = false;
document.addEventListener('keydown',
    function (event) {
        if (event.key === "Escape") {
            IsFormContactKeyListenerActive ? closeModalContact() : undefined;
        }
    }
);
const main = document.querySelector('main')
const modal = document.getElementById("contact_modal");
function displayModal() {
    modal.style.display = "block";
    main.style.position = "fixed"
    IsFormContactKeyListenerActive = true;
    first.focus()
}

function closeModalContact() {
    modal.style.display = "none";
    main.style.position = ""
    IsFormContactKeyListenerActive = false;
}





function checkFirstName() {
    if (!first.value || !first.value.match(regexName)) {
        getError(first, "Veuillez renseigner un Prénom valide.")
    } else if (first.value.length < 2) {
        getError(first, "Veuillez entrer au minimum 2 caractères.")
    } else {
        getValid(first)
        return true
    }
}
function checkLastName() {
    if (!last.value || !last.value.match(regexName)) {
        getError(last, "Veuillez renseigner un Nom valide.")
    } else if (last.value.length < 2) {
        getError(last, "Veuillez entrer au minimum 2 caractères.")
    } else {
        getValid(last)
        return true
    }
}
function checkEmail() {
    if (!email.value || !email.value.trim().match(regexMail)) {
        getError(email, `Veuillez renseigner un Email valide (ex: test@test.fr)`)
    } else {
        getValid(email)
        return true
    }
}
function checkMsg() {
    if (!msg.value) {
        getError(msg, "Veuillez renseigner un message valide.")
    } else if (msg.value.length < 2) {
        getError(msg, "Veuillez entrer au minimum 2 caractères.")
    } else {
        getValid(msg)
        return true
    }
}
function getError(input, message) {
    const formData = input.parentElement;
    const span = formData.querySelector('.msg')
    let inputStyle = null
    if (formData.querySelector('input')) {
        inputStyle = formData.querySelector('input')
    } else if (formData.querySelector('textarea')) {
        inputStyle = formData.querySelector('textarea')
    }

    span.innerText = message
    span.className = 'msg error-message'
    inputStyle.className = "text-control input-error"
}
function getValid(input) {
    const formData = input.parentElement;
    const span = formData.querySelector('.msg')
    let inputStyle = null
    if (formData.querySelector('input')) {
        inputStyle = formData.querySelector('input')
    } else if (formData.querySelector('textarea')) {
        inputStyle = formData.querySelector('textarea')
    }
    inputStyle.className = "text-control input-valid"
    span.innerText = ' '

}
function screenValidation() {
    if (
        confirm(`
    Formulaire pris en compte 
    Prénom: ${first.value}
    Nom: ${last.value}
    Email: ${email.value}
    Message: ${msg.value}
    `)
    ) {
        refresh()
    }

}
function forAllFieldsCheck() {
    checkFirstName()
    checkLastName()
    checkEmail()
    checkMsg()
}
function validate() {
    if (checkFirstName() == true
        && checkLastName() == true
        && checkEmail() == true
        && checkMsg() == true) {
        return true
    }
    return false
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validate() == true) {
        console.log(`
        Formulaire pris en compte
        Prénom: ${first.value}
        Nom: ${last.value}
        Email: ${email.value}
        Message: ${msg.value}
        `);
        screenValidation()
    } else {
        forAllFieldsCheck();
    }
})

function refresh() {
    window.location.reload()
}