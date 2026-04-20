document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        console.log("Page changing...");
    });
});