const container = document.querySelector('.container');
const circle = document.querySelector('.circle');

circle.addEventListener(`click`, (e) => {
    if (e.target.closest(`#open`)) {
        container.classList.add(`show-nav`);
    }

    if (e.target.closest(`#close`)) {
        container.classList.remove(`show-nav`);
    }
})