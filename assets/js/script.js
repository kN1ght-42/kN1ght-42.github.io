const tabsContainer = document.querySelector(".tabs-block__inner__buttons");
const tabButton = document.querySelectorAll("input[name='tabsBlock'");

const burgerMenuButton = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".mobile__header__menu");
const burgerMenuCloseButton = document.querySelector(".close__button");

const checkBoxes = document.querySelectorAll("input[name='typeCheckbox']");

const policyRules = document.querySelector("#policyRules");
const formButton = document.querySelector(".form__button");

const limitedInput = document.querySelectorAll("[name='limitedInput']");

console.log(limitedInput);

if (limitedInput) {
    limitedInput.forEach((el) => {
        el.addEventListener("input", () => {
            if (el.value.length === 50) {
                alert("Слишком длинное сообщение");
            }
        });
    });
}

if (policyRules) {
    policyRules.addEventListener("click", () => {
        if (policyRules.checked) {
            formButton.removeAttribute("disabled");
        } else {
            formButton.setAttribute("disabled", true);
        }
    });
}

if (checkBoxes) {
    checkBoxes.forEach((el) => {
        el.addEventListener("click", () => {
            if (el.checked) {
                let disabledInput = document.querySelector(
                    `input[checkboxValue=${el.id}`
                );

                disabledInput.setAttribute("disabled", true);
            } else {
                let enabledInput = document.querySelector(
                    `input[checkboxValue=${el.id}`
                );

                console.log(enabledInput);

                enabledInput.removeAttribute("disabled");
            }
        });
    });
}

if (tabButton) {
    tabButton.forEach((el) => {
        el.addEventListener("click", () => {
            document
                .querySelector(".tabs-block__inner__item--active")
                .classList.remove("tabs-block__inner__item--active");
            let tabId = el.id;

            document
                .querySelector(`.${tabId}`)
                .classList.add("tabs-block__inner__item--active");
        });
    });
}

burgerMenuButton.addEventListener("click", () => {
    burgerMenu.classList.add("mobile__header__menu--active");
});

burgerMenuCloseButton.addEventListener("click", () => {
    burgerMenu.classList.remove("mobile__header__menu--active");
});
