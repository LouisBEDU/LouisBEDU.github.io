const containerGame = document.querySelector("#game");
const containerFilm = document.querySelector("#film");

containerGame.addEventListener("click", (e) => {
    const target = e.target.closest(".game");

    if (target) {
        containerGame.querySelectorAll(".game").forEach((game) => {
            game.classList.remove("active");
        });

        target.classList.add("active");
    }
});

containerFilm.addEventListener("click", (e) => {
    const target = e.target.closest(".film");

    if (target) {
        containerFilm.querySelectorAll(".film").forEach((film) => {
            film.classList.remove("active");
        });

        target.classList.add("active");
    }
});
