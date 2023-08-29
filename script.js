document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const overlay = document.querySelector(".loading-overlay");
        overlay.style.opacity = "0";
        setTimeout(function() {
            overlay.style.display = "none";
        }, 500);  // matches the CSS transition duration
    }, 6000);  // 6 seconds
});
