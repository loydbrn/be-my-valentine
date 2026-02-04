document.addEventListener('DOMContentLoaded', function() {
    // Set Valentine's Day date (February 14)
    const valentinesDay = new Date(new Date().getFullYear(), 1, 14);
    
    // If Valentine's Day has passed this year, set for next year
    if (valentinesDay < new Date()) {
        valentinesDay.setFullYear(valentinesDay.getFullYear() + 1);
    }
    
    // Play celebration music
    const celebrationSound = document.getElementById('celebration-sound');
    celebrationSound.volume = 0.4;
    celebrationSound.play().catch(e => console.log("Autoplay prevented"));
    
    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Add floating hearts effect
    setInterval(createFloatingHeart, 500);
    
    function updateCountdown() {
        const now = new Date();
        const timeDiff = valentinesDay - now;
        
        if (timeDiff <= 0) {
            document.getElementById('countdown-timer').innerHTML = 
                '<div class="time-unit"><div class="time-value">0</div><div class="time-label">Days</div></div>' +
                '<div class="time-unit"><div class="time-value">0</div><div class="time-label">Hours</div></div>' +
                '<div class="time-unit"><div class="time-value">0</div><div class="time-label">Minutes</div></div>' +
                '<div class="time-unit"><div class="time-value">0</div><div class="time-label">Seconds</div></div>';
            return;
        }
        
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        document.getElementById('countdown-timer').innerHTML = 
            `<div class="time-unit"><div class="time-value">${days}</div><div class="time-label">Days</div></div>` +
            `<div class="time-unit"><div class="time-value">${hours}</div><div class="time-label">Hours</div></div>` +
            `<div class="time-unit"><div class="time-value">${minutes}</div><div class="time-label">Minutes</div></div>` +
            `<div class="time-unit"><div class="time-value">${seconds}</div><div class="time-label">Seconds</div></div>`;
    }
    
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
});