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

loadVideos();