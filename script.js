const messages = [
    "No?",
    "Noooo!! 😱",
    "Please not 😔!",
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Or negative?",
    "Mommy???",
    "Mommy please...",
    "Nooo!! 😭",
    "Just think about it!",
    "My heart is breaking! 💔",
    "I'll send you duck pics daily! 🦆",
    "If you say no, I will be really sad...",
    "Don't do this to us!",
    "I'll cry forever! 😢",
    "My soul is leaving my body...",
    "After all we've been through?",
    "I will be very sad...",
    "I will be very very very sad...",
    "Mommy!! 😭😭😭",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️",
    "This is illegal!",
    "I'll release Yuna! 🐱",
    "The button might explode!",
    "I'm calling your mom!",
    "Just say yes already 😭...",
    "FINE! Take this instead: YES ✅",
    "OK I give up... NOT!",
    "Last chance??",
    "I'll love you forever! ❤️",
    "You're my favorite person!",
    "I'll share my fries! 🍟",
    "Mommy please! 😭",
    "But... our future!",
    "Don't do this to us!",
    "My mommy 😔...",
    "Just say yes 😭...",
    "Still No??"
];

let messageIndex = 0;
let heartInterval;

// Get elements
const yesButton = document.getElementById('yesBtn');
const noButton = document.getElementById('noBtn');

// Function to create floating hearts
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '<i class="fas fa-heart"></i>';
    heart.style.position = 'fixed';
    heart.style.color = getRandomHeartColor();
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.opacity = '0.8';
    heart.style.zIndex = '9998';
    heart.style.pointerEvents = 'none';
    
    document.body.appendChild(heart);
    
    // Animate heart
    const animation = heart.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 0.8 },
        { transform: `translateY(-${Math.random() * 300 + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
    });
    
    // Remove heart after animation completes
    animation.onfinish = () => heart.remove();
}

function getRandomHeartColor() {
    const colors = ['#ff3366', '#ff4d94', '#ff66b3', '#ff80cc', '#ff99dd'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to start heart animation
function startHearts() {
    // Clear any existing interval
    if (heartInterval) {
        clearInterval(heartInterval);
    }
    
    // Create hearts every 500ms
    heartInterval = setInterval(createFloatingHeart, 500);
}

// Start hearts immediately when page loads
window.addEventListener('DOMContentLoaded', () => {
    startHearts();
});

// Make "No" button escape when hovered
noButton.addEventListener('mouseover', () => {
    // Get viewport dimensions
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    
    // Get button dimensions
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    
    // Calculate max positions (keep button fully visible)
    const maxX = vw - buttonWidth - 20; // 20px margin
    const maxY = vh - buttonHeight - 20;
    
    // Generate random position
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    
    // Update button text with messages
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Move the "No" button to random position (relative to viewport)
    noButton.style.position = 'fixed';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
    noButton.style.zIndex = '1000';
});

// Handle "Yes" button click
yesButton.addEventListener('click', () => {
    window.location.href = "yes_page.html";
});

// Add touch support for mobile
noButton.addEventListener('touchstart', (e) => {
    e.preventDefault();
    
    // Get viewport dimensions
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    
    // Get button dimensions
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    
    // Calculate max positions
    const maxX = vw - buttonWidth - 20;
    const maxY = vh - buttonHeight - 20;
    
    // Generate random position
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    
    // Update button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Move the button
    noButton.style.position = 'fixed';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
    noButton.style.zIndex = '1000';
});

// Optional: Also escape when "No" button is clicked (in case they manage to click it)
noButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Update button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Also escape on click
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const maxX = vw - buttonWidth - 20;
    const maxY = vh - buttonHeight - 20;
    
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);
    
    noButton.style.position = 'fixed';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
    noButton.style.zIndex = '1000';
});


