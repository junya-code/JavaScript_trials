window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const body = document.body;

    if (scrollY < 300) {
        body.style.backgroundColor = "#fff8dc";
    } else if (scrollY < 800) {
        body.style.backgroundColor = "#e0ffff";
    } else if (scrollY < 1400) {
        body.style.backgroundColor = "#ffe4e1";
    } else {
        body.style.backgroundColor = "#f5f5f5";
    }
});







