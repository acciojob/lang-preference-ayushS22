const message = document.getElementById("message");

// Language messages
const translations = {
    English: "Hello World",
    Spanish: "Hola Mundo",
    French: "Bonjour le monde"
};

// Load saved language on page load
window.onload = function () {
    const savedLang = sessionStorage.getItem("language");

    if (savedLang) {
        message.innerText = translations[savedLang];
    } else {
        message.innerText = translations["English"];
    }
};

// Function to set language
function setLanguage(lang) {
    sessionStorage.setItem("language", lang);
    window.location.href = "index.html"; // redirect
}

// Button events
document.getElementById("englishBtn").onclick = () => setLanguage("English");
document.getElementById("spanishBtn").onclick = () => setLanguage("Spanish");
document.getElementById("frenchBtn").onclick = () => setLanguage("French");