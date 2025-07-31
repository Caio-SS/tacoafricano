const buttons = document.querySelectorAll('.scrollButton');


buttons.forEach(button => {
    button.addEventListener('click', function () {

        const targetSelector = button.getAttribute('data-target');

        document.querySelector(targetSelector).scrollIntoView({ behavior: "smooth" });
    });
});

/*FAQ*/

function toggleFAQ(element) {
    let content = element.querySelector(".content");
    let span = element.querySelector("h3 span");
    if (content.style.display === "block") {
        content.style.display = "none";
        span.textContent = "+";
    } else {
        content.style.display = "block";
        span.textContent = "-";
    }
}


document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});