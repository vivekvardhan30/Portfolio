
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn2");
    const content = document.querySelector(".info1");

    btn.addEventListener("click", () => {
        content.classList.toggle("expand");
        btn.textContent = content.classList.contains("expand") ? "Read Less" : "Read More";
    });
});
