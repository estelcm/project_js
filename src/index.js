const button = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");
const text_01 = document.getElementById("text_01");
const text_02 = document.getElementById("text_02");
const divImage = document.getElementById("divImage");
const buttonLeft = document.getElementById("buttonLeft");
const buttonRight = document.getElementById("buttonRight");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

products = [
  {
    type: "iphone 14",
    name: "Beach",
    price: "€ 1.011",
    colorReference: "What gives you a piece of mind",
    description:
      "Blue likes to do things its own way and it doesn’t conform well to the wishes of others",
    link_apple: "https://www.apple.com/es/iphone-14/",
    image: "./img/iphone_beach.webp",
  },
  {
    type: "iphone 14",
    name: "Dark night",
    price: "€ 1.011",
    colorReference: "The best light to watch the sky's brightest meteo shower",
    description:
      "A hypothetical force of nature that acts on dark matter to allow dark matter to interact with itself.",
    link: "https://www.apple.com/es/iphone-14/",
    image: "./img/iphone_dark_night.webp",
  },
  {
    type: "iphone 14",
    name: "Pearl",
    price: "€ 1.011",
    colorReference: "A pearl in one's palm",
    description:
      "White signifies the ability to stay calm and balanced, even in the midst of conflict. ",
    link: "https://www.apple.com/es/iphone-14/",
    image: "./img/iphone_pearl.webp",
  },
  {
    type: "iphone 14",
    name: "Lavender",
    price: "€ 1.011",
    colorReference: "lingers on the air and dreams",
    description:
      " It effortlessly blends warm and cool elements to create a stunning hue that turns heads. With its subtle sophistication and vibrant energy, lavender reels in passersby.",
    link: "https://www.apple.com/es/iphone-14/",
    image: "",
  },
];
