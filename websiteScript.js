// 2. Dynamic Status (Adapted from your old script)
// Since you have a "STABLE" badge in the HTML, let's make it dynamic
function updateSystemStatus() {
    const badge = document.querySelector('.badge');
    if (badge) {
        const isOnline = Math.random() > 0.1; // 90% uptime
        badge.innerText = isOnline ? "v1.5 • Latest" : "v1.5 • MAINTENANCE";
        badge.style.background = isOnline ? "var(--accent-purple)" : "#ff4d4d";
    }
}

// Update status every 30 seconds
setInterval(updateSystemStatus, 30000);

// 3. Hover Sound Effect (Optional "Cyberpunk" feel)
const cards = document.querySelectorAll('.tool-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // You could play a very subtle click/beep sound here
        console.log("Hovering over utility...");
    });
});

/// YouTube IDs from your previous script
const videoIds = ['oXMqNDgkTmg', 'dXZ2LBAiOuc']; 

const youtubeFeed = document.getElementById('youtubeFeed');

// Use a function to ensure the DOM is ready
function loadVideos() {
    if (youtubeFeed) {
        youtubeFeed.innerHTML = ""; // Clear any existing content
        videoIds.forEach(id => {
            const iframe = document.createElement('iframe');
            iframe.width = '100%'; 
            iframe.height = '215';
            iframe.src = `https://www.youtube.com/embed/${id}`;
            iframe.style.border = "none";
            iframe.style.borderRadius = "8px";
            iframe.allowFullscreen = true;
            youtubeFeed.appendChild(iframe);
        });
    }
}
