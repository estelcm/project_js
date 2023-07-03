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

products = [
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

// buttonRight.addEventListener("click", moveRight);
// buttonLeft.addEventListener("clik", moveLeft);

//printed first product by default
function printedProduct() {
  const productV = document.createElement("h4");
  const productName = document.createElement("h1");
  const productPrice = document.createElement("p");
  const colorEssence = document.createElement("p");
  const colorDescription = document.createElement("p");
  const productImage = document.createElement("img");
  const productLink = document.createElement("a");

  //should we add  event.preventDefault();????
  for (let i = 0; i <= products.length - 1; ++i) {
    const defaultProduct = products[i];
    productV.textContent = `${defaultProduct.productVersion}`;
    productName.textContent = `${defaultProduct.productName}`;
    productPrice.textContent = `${defaultProduct.productPrice}`;
    colorEssence.textContent = `${defaultProduct.colorEssence}`;
    colorDescription.textContent = `${defaultProduct.colorDescription}`;

    productImage.src = `${defaultProduct.shoppingLink}`;
    productLink.textContent = "Shop now";
    productLink.href = `${defaultProduct.image}`;
  }
  textOne.appendChild(productV, productName, productPrice);
  textTwo.appendChild(colorEssence, colorDescription, productLink);
  divImage.appendChild(productImage);
}

// function moveRight() {
//   //should we add  event.preventDefault();????
//   // Get  index of the current displayed product
//   const currentIndex = products.findIndex(
//     (product) => product === displayedProduct
//   );
//   for (let i = 0; i <= products.length - 1; ++i) {
//     for (let key of products[i]) {
//       productType.appendChild(product[version]);
//       productName.appendChild(product[colorName]);
//       productPrice.appendChild(product[price]);
//       colorEssence.appendChild(product[colorReference]);
//       colorDescription.appendChild(product[description]);
//       productLink.appendChild(product[shoppingLink]);
//       productImage.appendChild(product[image]);
//     }
//     ++products[i];
//   }

//   //pillar array i buscar la posició perquè la funció faci posició més més per cada click
//   // a més, per cada click, cada element del array s'ha de posar en llocs diferents. per atanc he de fer appendchild (No es pot fer fora del array perquè l'he de recorrer?
//   // a mes per cada click que s'dapati el color de la pantalla al color de iphone
// }

// function moveLeft() {}
