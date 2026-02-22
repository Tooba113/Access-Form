// Get users from localStorage or create empty array
let users = JSON.parse(localStorage.getItem("users")) || [];

/* =====================
   SIGNUP FUNCTION
===================== */

const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;
        const message = document.getElementById("signupMessage");

        // Check if email already exists
        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            message.textContent = "Email already registered!";
            return;
        }

        // Add new user
        users.push({ name, email, password });

        // Save to localStorage
        localStorage.setItem("users", JSON.stringify(users));

        alert("Account created successfully!");
        window.location.href = "login.html";
    });
}

/* =====================
   LOGIN FUNCTION
===================== */

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const errorMsg = document.getElementById("errorMsg");

        const user = users.find(user => 
            user.email === email && user.password === password
        );

        if (user) {
            alert("Login successful!");
            window.location.href = "dashboard.html";
        } else {
            errorMsg.textContent = "Invalid email or password!";
        }
    });
}