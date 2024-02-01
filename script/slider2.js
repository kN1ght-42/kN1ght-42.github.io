document.addEventListener("DOMContentLoaded", function () {
    let offset = 0;

    const sliderLine = document.querySelector(".slider__line");

    console.log(sliderLine);
    const switchButtonSecondary = document.querySelectorAll(".stages__button");

    switchButtonSecondary.forEach((button) => {
        button.addEventListener("click", function () {
            slide(button);
        });
    });

    function slide(buttonItem) {
        if (buttonItem.classList == "stages__button stages__button--next") {
            offset += 441;

            sliderLine.style.left = `${-offset}px`;
        } else if (
            buttonItem.classList == "stages__button stages__button--prev"
        ) {
            offset -= 441;

            sliderLine.style.left = `${-offset}px`;
        }
    }
});
