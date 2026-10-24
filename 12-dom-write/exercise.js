/**
 * Adds one product card to the end of the list.
 */
export function addProduct(name, price) {
  const card = document.createElement("li");
  card.classList.add("card");

  const heading = document.createElement("h3");
  heading.textContent = name;

  const priceParagraph = document.createElement("p");
  priceParagraph.classList.add("price");
  priceParagraph.textContent = `${price} EGP`;

  card.append(heading, priceParagraph);
  document.querySelector("#list").append(card);
}

/**
 * Removes the card with the specified name, if it exists.
 */
export function removeProduct(name) {
  const cards = Array.from(document.querySelectorAll("#list .card"));

  const card = cards.find(
    card => card.querySelector("h3").textContent === name
  );

  if (card) {
    card.remove();
  }
}

/**
 * Marks the specified product as sold out.
 */
export function markSoldOut(name) {
  const cards = Array.from(document.querySelectorAll("#list .card"));

  const card = cards.find(
    card => card.querySelector("h3").textContent === name
  );

  if (card) {
    card.classList.add("sold-out");
  }
}

/**
 * Removes all product cards from the list.
 */
export function clearProducts() {
  const cards = document.querySelectorAll("#list .card");

  cards.forEach(card => card.remove());
}

/**
 * Connects the Add and Reset buttons to their functions.
 */
export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}
