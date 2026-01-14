// 1. Dynamic Status
function updateSystemStatus() {
    const badge = document.querySelector('.badge');
    if (badge) {
        const isOnline = Math.random() > 0.1; 
        badge.innerText = isOnline ? "v1.5 • Latest" : "v1.5 • MAINTENANCE";
        badge.style.background = isOnline ? "var(--accent-purple)" : "#ff4d4d";
    }
}
setInterval(updateSystemStatus, 30000);

// 2. YouTube Feed Logic
const videoIds = ['oXMqNDgkTmg', 'dXZ2LBAiOuc']; 

function loadVideos() {
    const youtubeFeed = document.getElementById('youtubeFeed');
    if (youtubeFeed) {
        youtubeFeed.innerHTML = ""; 
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

// 3. EXECUTE THE CODE
// This line is what was missing!
loadVideos();