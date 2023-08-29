document.addEventListener("DOMContentLoaded", function() {
    const embed = new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "100%",
        channel: "commoncam1",
        parent: ["artex137.github.io"]
    });

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

    // Show initial loading screen
    showLoadingOverlay();

    embed.addEventListener(Twitch.Embed.VIDEO_PLAY, function() {
        // Start the 7-second timer here
        showLoadingOverlay();
    });

    document.addEventListener("visibilitychange", function() {
        if (document.visibilityState === "visible") {
            showLoadingOverlay();
        }
    });
});
