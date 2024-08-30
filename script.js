document.getElementById("about-link").addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("projects-link").addEventListener("click", function() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("contact-link").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});