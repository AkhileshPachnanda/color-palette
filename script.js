const btn = document.querySelector(".generate-btn");
const palette = document.querySelector(".palettes-list");

const generate = () => {
  const palette = [];

  for (let i = 0; i < 5; i++) {
    palette.push(random());
  }

  const update = (palette) => {
    const colorbox = document.querySelectorAll(".color-box");

    colorbox.forEach((box, index) => {
      const colors = palette[index];
      const colordiv = box.querySelector(".color");
      const info = box.querySelector(".color-info");

      colordiv.style.backgroundColor = colors;
      info.textContent = colors;
    });
  };
  update(palette);
};

const random = () => {
  const letters = "1234567890ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

btn.addEventListener("click", generate);
