const btn = document.querySelector(".generate-btn")
const palette = document.querySelector(".palettes-list")

btn.addEventListener("click", generate())

const generate = () => {

    const palette = [];

    for ( let i = 0; i<5; i++){
       palette.push(random());
    }

    updatePalette();

}

const random = () => {
    const letters = "1234567890ABCDEF"
    const color = "#"

    for(let i = 0; i<6; i++){
        color+=letters[Math.floor(Math.random() * 16)]
    }

    return color;
}