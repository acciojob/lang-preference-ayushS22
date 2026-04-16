//your JS code here. If required.
// Get elements
const select = document.getElementById("languageSelect");
const button = document.getElementById("saveBtn");
const output = document.getElementById("output");

// Save language in sessionStorage
button.addEventListener("click", function () {
    const selectedLang = select.value;

    if (selectedLang) {
        sessionStorage.setItem("preferredLanguage", selectedLang);
        output.innerText = "Saved: " + selectedLang;
    }
});

// Load saved language on page load
window.onload = function () {
    const savedLang = sessionStorage.getItem("preferredLanguage");

    if (savedLang) {
        select.value = savedLang;
        output.innerText = "Previously selected: " + savedLang;
    }
};