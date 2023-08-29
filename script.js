document.addEventListener("DOMContentLoaded", function() {
    function showLoadingOverlay() {
        const overlay = document.querySelector(".loading-overlay");
        overlay.style.display = ""; // Make sure it's visible
        overlay.style.opacity = "1";
        
        setTimeout(function() {
            overlay.style.opacity = "0";
            setTimeout(function() {
                overlay.style.display = "none";
            }, 500);  // matches the CSS transition duration
        }, 7000);  // 7 seconds
    }

    showLoadingOverlay();  // Initial load

    document.addEventListener("visibilitychange", function() {
        if (document.visibilityState === "visible") {
            showLoadingOverlay();
        }
    });
});
