const greeting = document.querySelector("#greeting");
let greetingTimer;

document.querySelector(".pokemon-grid").addEventListener("click", (event) => {
    const button = event.target.closest(".follow-button");
    if (!button) return;

    greeting.textContent = `Hii, my name is ${button.dataset.name}!`;
    greeting.hidden = false;
    clearTimeout(greetingTimer);
    greetingTimer = setTimeout(() => {
        greeting.hidden = true;
    }, 3000);
});
