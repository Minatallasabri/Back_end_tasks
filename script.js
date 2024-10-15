console.log("JavaScript is working!(;") 

function changeBio() {
    document.getElementById('bio').textContent = 'I love building websites! (-;"';
}

document.querySelectorAll('nav a').forEach(link => {
    link.onclick = function(e) {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        };
    });

window.onscroll = function() {
    document.getElementById('scrollToTopBtn').style.display = window.scrollY > 200 ? 'block' : 'none';
};
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (!name || !email.includes('@') || !email.includes('.')) {
        document.getElementById('error').textContent = 'Please enter valid details';
        return false;
    }
    return true;
}

// 5. Light/Dark Mode Toggle
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode'); // Toggle the dark mode class

    // Store the user's preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Check the saved theme on page load
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
};