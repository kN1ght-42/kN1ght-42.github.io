document.addEventListener("DOMContentLoaded", function () {
    let offset = 0;
    const sliderLine = document.querySelector(".slider__line--members");
    console.log(sliderLine);
    const switchButtonMain = document.querySelectorAll(".members__button");

    const currentCount = document.querySelectorAll(".counter");
    let widthIndex;

    if (window.innerWidth > 1280) {
        widthIndexHumble(3);
    } else if (window.innerWidth > 992) {
        widthIndexHumble(2);
    } else {
        widthIndexHumble(1);
    }

    switchButtonMain.forEach((button) => {
        button.addEventListener("click", function () {
            slide(button);
            disabledHumble();
        });
    });

    function widthIndexHumble(widthIndexNumber) {
        widthIndex = widthIndexNumber;
        currentCount.forEach((count) => {
            count.innerHTML = widthIndex;
        });
    }
    disabledHumble();

    function slide(buttonItem) {
        if (buttonItem.classList == "members__button members__button--next") {
            offset += 451;

            sliderLine.style.left = `${-offset}px`;

            count(1);
        } else if (
            buttonItem.classList == "members__button members__button--prev"
        ) {
            offset -= 451;

            sliderLine.style.left = `${-offset}px`;
            count(-1);
        }
    }

    function disabledHumble() {
        if (currentCount[0].innerHTML == 6) {
            switchButtonMain[1].setAttribute("disabled", "disabled");
            switchButtonMain[3].setAttribute("disabled", "disabled");
        } else if (currentCount[0].innerHTML == widthIndex) {
            switchButtonMain[0].setAttribute("disabled", "disabled");
            switchButtonMain[2].setAttribute("disabled", "disabled");
        } else {
            switchButtonMain.forEach((button) => {
                button.removeAttribute("disabled", "disabled");
            });
        }
    }

    function count(value) {
        number = Number(currentCount[0].innerHTML);

        currentCount.forEach((count) => {
            count.innerHTML = number + value;
        });
    }
});
