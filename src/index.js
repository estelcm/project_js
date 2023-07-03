const button = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");
const textOne = document.getElementById("textOne");
const textTwo = document.getElementById("textTwo");
const divImage = document.getElementById("divImage");
const buttonLeft = document.getElementById("buttonLeft");
const buttonRight = document.getElementById("buttonRight");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

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
    colorName: "Dark night",
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
    image: "./img/iphone_purple.webp",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  printedProduct();
});

buttonRight.addEventListener("click", moveRight);
// buttonLeft.addEventListener("clik", moveLeft);

//created elements to plce eah key of product
const productV = document.createElement("h4");
const productName = document.createElement("h1");
const productPrice = document.createElement("p");
const colorEssence = document.createElement("p");
const colorDescription = document.createElement("p");
const productImage = document.createElement("img");
const productLink = document.createElement("a");

function printedProduct() {
  //should we add  event.preventDefault();????
  // for (let i = 0; i < products.length; ++i) {
  //   const defaultProduct = products[3];

  //   productV.textContent = `${defaultProduct.productVersion}`;
  //   productName.textContent = `${defaultProduct.colorName}`;
  //   productPrice.textContent = `${defaultProduct.price}`;
  //   colorEssence.textContent = `${defaultProduct.colorReference}`;
  //   colorDescription.textContent = `${defaultProduct.description}`;

  //   productImage.src = `${defaultProduct.image}`;
  //   productLink.textContent = "Shop now";
  //   productLink.href = `${defaultProduct.shoppingLink}`;
  // }
  // textOne.appendChild(productV);
  // textOne.appendChild(productName);
  // textOne.appendChild(productPrice);
  // textTwo.appendChild(colorEssence);
  // textTwo.appendChild(colorDescription);
  // textTwo.appendChild(productLink);
  // divImage.appendChild(productImage);

  const randomIndex = Math.floor(Math.random() * products.length + 1);
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
}

// const removeProject = projects.find((e) => e.id === id);
//   const index = projects.indexOf(removeProject);

function moveRight(defaultProduct) {
  // Get  index of the current displayed product
  const findCurrentIndex = products.findIndex(
    (product) => product === defaultProduct
  );
  //let index = products.indexOf(findCurrentIndex);
  let nextIndex = findCurrentIndex + 1;
  //const currentIndex = products.indexOf(findProduct);

  // Check if the index is out of bounds, reset to 0
  if (nextIndex <= products.length) {
    nextIndex = 0;
  }

  const nextProduct = products[nextIndex];
  console.log(nextProduct);
  printedProduct(nextProduct);
}

//pillar array i buscar la posició perquè la funció faci posició més més per cada click
// a més, per cada click, cada element del array s'ha de posar en llocs diferents. per atanc he de fer appendchild (No es pot fer fora del array perquè l'he de recorrer?
// a mes per cada click que s'dapati el color de la pantalla al color de iphone

// function moveLeft() {}
