const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-theme') {
        themeToggle.textContent = 'Light';
    }
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Light';
        localStorage.setItem('theme', 'dark-theme');
    } else {
        themeToggle.textContent = 'Dark';
        localStorage.setItem('theme', '');
    }
});

function sayHello() {
    alert("Hello! Thanks for visiting my portfolio.");
}

console.log("Website loaded successfully!");