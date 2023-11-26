let count = 0;
const counterBtn = document.getElementById("counterBtn");

counterBtn.addEventListener("click", function () {
    count++;
    counterBtn.textContent = "Count: " + count;
});

const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function () {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
