const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.add("wipe-in");
        } else {
            entry.target.classList.remove("show");
            entry.target.classList.remove("wipe-in");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));