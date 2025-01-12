 function toggleVideo(videoId) {
        const video = document.getElementById(videoId);
        const thumbnail = document.querySelector(`#thumbnail${videoId.charAt(videoId.length - 1)}`);

        // Toggle video display
        if (video.style.display === "none") {
            video.style.display = "block"; // Show video
            video.play(); // Start playing video
            thumbnail.style.display = "none"; // Hide thumbnail
        } else {
            video.style.display = "none"; // Hide video
            video.pause(); // Pause video
            thumbnail.style.display = "block"; // Show thumbnail again
        }
    }
document.getElementById('menu-icon').onclick = function() {
    const navList = document.getElementById('nav-links');
    navList.classList.toggle('show'); // Toggle the 'show' class
};    