const pagination = document.querySelectorAll(".pagination");

pagination.forEach((obj) => {
    let buttons = obj.querySelectorAll(".pages button");
    let pagesUl = obj.querySelector(".pages ul");
    let centerUl = obj.querySelector(".center ul");
    let h = obj.offsetHeight;

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            pagesUl.style.transform = `translateX(${(-
                index) * h + h * 2}px)`;
        centerUl.style.transform = `translateX(${(-
            index) * h}px)`;
        });
    });
    buttons[0].click();

});