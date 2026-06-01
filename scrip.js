document.addEventListener('DOMContentLoaded', () => {
    // Select all video elements on the page
    const videos = document.querySelectorAll('video');

    // Add event listener to each video
    videos.forEach(video => {
        video.addEventListener('play', () => {
            // When a video starts playing, pause all other videos
            videos.forEach(v => {
                if (v !== video) {
                    v.pause();
                }
            });
        });
    });
});