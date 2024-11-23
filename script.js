// Display a greeting based on the current time
function displayGreeting() {
    const hours = new Date().getHours();
    const greetingElement = document.createElement('p');
    if (hours < 12) {
        greetingElement.textContent = "Good Morning, Mohannad!";
    } else if (hours < 18) {
        greetingElement.textContent = "Good Afternoon, Mohannad!";
    } else {
        greetingElement.textContent = "Good Evening, Mohannad!";
    }
    greetingElement.style.textAlign = "center";
    greetingElement.style.fontSize = "1.5rem";
    greetingElement.style.color = "#cccccc";
    document.body.prepend(greetingElement);
}

// Toggle light and dark themes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-theme");
}

// Attach event listener to the button
function setupButton() {
    const button = document.createElement("button");
    button.textContent = "Toggle Theme";
    button.style.display = "block";
    button.style.margin = "2rem auto";
    button.style.padding = "10px 20px";
    button.style.fontSize = "1rem";
    button.style.cursor = "pointer";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.backgroundColor = "#555";
    button.style.color = "#fff";
    button.addEventListener("click", toggleTheme);
    document.body.appendChild(button);
}

// Initialize functions on page load
window.onload = function () {
    displayGreeting();
    setupButton();
};
