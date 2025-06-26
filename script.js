
// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("myBtn").addEventListener("click", function () {
//         const info1 = document.querySelector(".info1");
//         const btn = document.getElementById("myBtn");

//         if (info1.style.maxHeight === "50px" || !info1.style.maxHeight) {
//             info1.style.maxHeight = info1.scrollHeight + "px";
//             btn.textContent = "Read Less";
//         } else {
//             info1.style.maxHeight = "50px";
//             btn.textContent = "Read More";
//         }
//     });
// });

// // Select all sections to animate
// const sections = document.querySelectorAll("section");

// // Create an IntersectionObserver
// const observer = new IntersectionObserver(
//     (entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 // Add animation class when section enters the viewport
//                 entry.target.classList.add("in-view");
//             } else {
//                 // Optional: Remove the class when the section leaves the viewport
//                 entry.target.classList.remove("in-view");
//             }
//         });
//     },
//     { threshold: 0.2 } // Trigger when 20% of the section is visible
// );

// // Observe each section
// sections.forEach((section) => {
//     observer.observe(section);
// });

