document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const overlay = document.querySelector(".loading-overlay");
        overlay.style.opacity = "0";
        setTimeout(function() {
            overlay.style.display = "none";
        }, 500);  // matches the CSS transition duration
    }, 7000);  // 7 seconds
});
