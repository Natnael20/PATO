const modal = document.getElementById('videoModal');
const iframe = document.getElementById('youtubeVideo');
const playBtn = document.querySelector('.play-btn');
const closeBtn = document.querySelector('.close-btn');

// Replace VIDEO_ID with your YouTube video ID
const videoURL = 'https://www.youtube.com/embed/5k1hSu2gdKE?autoplay=1';

playBtn.addEventListener('click', () => {
    iframe.src = videoURL;
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    iframe.src = ''; // stop the video
    modal.style.display = 'none';
});

// Close modal if clicking outside video
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        iframe.src = '';
        modal.style.display = 'none';
    }
});