const button = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");
const textOne = document.getElementById("textOne");
const textTwo = document.getElementById("textTwo");
const divImage = document.getElementById("divImage");
const buttonLeft = document.getElementById("buttonLeft");
const buttonRight = document.getElementById("buttonRight");

const inputSearch = document.getElementById("inputSearch");
const buttonSearch = document.getElementById("buttonSearch");
const formColor = document.getElementById("formColor");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

formColor.addEventListener("submit", searchByColor);

const products = [
  {
    productVersion: "iphone 14",
    colorName: "Beach",
    price: "€ 1.011",
    colorReference: "What gives you a piece of mind",
    description:
      "Blue likes to do things its own way and it doesn’t conform well to the wishes of others",
    shoppingLink: "#",
    image: "./img/iphone_beach.webp",
  },
  {
    productVersion: "iphone 14",
    colorName: "Night",
    price: "€ 1.011",
    colorReference: "The best light to watch the sky's brightest meteo shower",
    description:
      "A hypothetical force of nature that acts on dark matter to allow dark matter to interact with itself.",
    shoppingLink: "#",
    image: "./img/iphone_dark_night.webp",
  },
  {
    productVersion: "iphone 14",
    colorName: "Pearl",
    price: "€ 1.011",
    colorReference: "A pearl in one's palm",
    description:
      "White signifies the ability to stay calm and balanced, even in the midst of conflict. ",
    shoppingLink: "#",
    image: "./img/iphone_pearl.webp",
  },
  {
    productVersion: "iphone 14",
    colorName: "Lavender",
    price: "€ 1.011",
    colorReference: "lingers on the air and dreams",
    description:
      " It effortlessly blends warm and cool elements to create a stunning hue that turns heads. With its subtle sophistication and vibrant energy, lavender reels in passersby.",
    shoppingLink: "#",
    image: "./img/iphone_purple.webp",
  },
  {
    productVersion: "iphone 14",
    colorName: "Scarlet",
    price: "€ 1.011",
    colorReference: "vibrant and eye-catching",
    description:
      " A warm orange shade that looks like a burning flame. It represents enthusiasm, energy. Exudes confidence and determination",
    shoppingLink: "#",
    image: "./img/iphone_red.webp",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  printedProduct();
});

buttonRight.addEventListener("click", moveRight);
buttonLeft.addEventListener("click", moveLeft);

//created elements to plce eah key of product
const productV = document.createElement("h4");
productV.classList.add("uppercase", "font-montserrat", "text-lg");

const productName = document.createElement("h1");
productName.classList.add("font-garamond", "text-9xl", "font-bold", "my-6");

const productPrice = document.createElement("p");
productPrice.classList.add("font-garamond", "text-7xl", "font-regular");

const colorEssence = document.createElement("p");
colorEssence.classList.add("font-garamond", "italic", "text-5xl", "mb-2");

const colorDescription = document.createElement("p");
colorDescription.classList.add(
  "font-monserrat",
  "text-lg",
  "font-extralight",
  "mb-4"
);
const productImage = document.createElement("img");
const productLink = document.createElement("button");

function printedProduct() {
  const randomIndex = Math.floor(Math.random() * products.length);
  const randomProduct = products[randomIndex];

  productV.textContent = `${randomProduct.productVersion}`;
  productName.textContent = `${randomProduct.colorName}`;
  productPrice.textContent = `${randomProduct.price}`;
  colorEssence.textContent = `${randomProduct.colorReference}`;
  colorDescription.textContent = `${randomProduct.description}`;

  productImage.src = `${randomProduct.image}`;
  productLink.textContent = "Shop now";
  productLink.href = `${randomProduct.shoppingLink}`;

  textOne.appendChild(productV);
  textOne.appendChild(productName);
  textOne.appendChild(productPrice);
  textTwo.appendChild(colorEssence);
  textTwo.appendChild(colorDescription);
  textTwo.appendChild(productLink);
  divImage.appendChild(productImage);

  document.body.className = `body-color-${randomIndex}`;
  productLink.addEventListener("click", function () {
    shopNow(productLink);
  });
}

function moveRight(defaultProduct) {
  // Get  index of the current displayed product
  const findCurrentIndex = products.findIndex(
    (product) => product === defaultProduct
  );
  //let index = products.indexOf(findCurrentIndex);
  let nextIndex = findCurrentIndex + 1;
  //const currentIndex = products.indexOf(findProduct);

  // si passa del length tornar a posar a = perquè torni a començar
  if (nextIndex <= products.length) {
    nextIndex = 0;
  }

  const nextProduct = products[nextIndex];
  console.log(nextProduct);
  printedProduct(nextProduct);
}

function moveLeft(defaultProduct) {
  const findCurrentIndex = products.findIndex(
    (product) => product === defaultProduct
  );
  //let index = products.indexOf(findCurrentIndex);
  let nextIndex = findCurrentIndex - 1;
  //const currentIndex = products.indexOf(findProduct);

  // si passa del length tornar a posar a = perquè torni a començar
  if (nextIndex < 0) {
    nextIndex = 6;
  }

  const nextProduct = products[nextIndex];

  printedProduct(nextProduct);
}

function searchByColor(products) {
  const inputValue = inputSearch.value.toLowerCase();

  if (isNaN(inputValue)) {
    products.forEach((product) => {
      if (inputValue === colorName) {
        printedProduct(product);
      }
      if (
        inputValue === "red" ||
        inputValue === "rojo" ||
        inputValue === "vermell"
      ) {
        printedProduct(products[4]);
      } else if (
        inputValue === "azul" ||
        inputValue === "blue" ||
        inputValue === "blau"
      ) {
        printedProduct(products[0]);
      } else if (
        inputValue === "negro" ||
        inputValue === "gris" ||
        inputValue === "black" ||
        inputValue === "negre"
      ) {
        printedProduct(products[1]);
      } else if (
        inputValue === "blanc" ||
        inputValue === "perla" ||
        inputValue === "white" ||
        inputValue === "blanco"
      ) {
        printedProduct(products[2]);
      } else if (
        inputValue === "lila" ||
        inputValue === "lavanda" ||
        inputValue === "purple"
      ) {
        printedProduct(products[3]);
      } else {
        alert("We cannot recognize the color...");
      }
    });
  } else {
    alert("Invalid input");
  }
  document.body.getElementsById = `buttonSearch-${randomIndex}`;
}

function shopNow(products) {
  products.forEach((product) => {
    alert(`${product.colorName} iphone has been added!`);
  });
}
