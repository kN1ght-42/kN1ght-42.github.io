document.addEventListener("DOMContentLoaded", function () {
    let offset = 0;

    const sliderLine = document.querySelector(".slider__line");
    let activeDot = document.querySelector(".count__item.active");
    const switchButtonSecondary = document.querySelectorAll(".stages__button");

    switchButtonSecondary[0].setAttribute("disabled", "disabled");

    switchButtonSecondary.forEach((button) => {
        button.addEventListener("click", function () {
            slide(button);
        });
    });

    function slide(buttonItem) {
        if (buttonItem.classList == "stages__button stages__button--next") {
            offset += 446;

            sliderLine.style.left = `${-offset}px`;
            count(1);
        } else if (
            buttonItem.classList == "stages__button stages__button--prev"
        ) {
            offset -= 446;

            sliderLine.style.left = `${-offset}px`;
            count(-1);
        }
    }

    function count(value) {
        number = Number(activeDot.id);
        activeDot.classList.remove("active");

        activeDot = document.getElementById(`${number + value}`);
        activeDot.classList.add("active");

        console.log(activeDot.id);

        if (activeDot.id == 0) {
            switchButtonSecondary[0].setAttribute("disabled", "disabled");
        } else if (activeDot.id == 4) {
            switchButtonSecondary[1].setAttribute("disabled", "disabled");
        } else {
            switchButtonSecondary.forEach((button) => {
                button.removeAttribute("disabled", "disabled");
            });
        }
    }
});
