// Greet when button is clicked
function greet() {
    alert("Hello! I am Ashish, a 12-year-old gamer in class 5. Nice to meet you!");
}

// Fun color animation for the "Gamer" role
const role = document.getElementById('role');
let count = 0; // Counter for clicks

function greet() {
    count++; // Increment counter
    alert("Hello! I am Ashish, a 12-year-old gamer in class 5. Nice to meet you!");
    document.getElementById('clickCount').textContent = `Hi clicked: ${count} times`; // Update field
}
// Only run if the element exists
if (role) {
    setInterval(() => {
        role.style.color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 70%)`;
    }, 1000);
}
