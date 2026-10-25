// 13-forms — Forms

/**
 * Reads the product name and price from the form.
 */
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);

  return { name, price };
}

/**
 * Empties both form inputs.
 */
export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

/**
 * Draws product cards from an array, replacing the existing cards.
 */
export function renderList(items) {
  const list = document.querySelector("#list");

  list.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceParagraph = document.createElement("p");
    priceParagraph.classList.add("price");
    priceParagraph.textContent = `${item.price} EGP`;

    card.append(heading, priceParagraph);
    list.append(card);
  });
}

// The array holds the products added through the form.
let items = [];

/**
 * Connects the form submission to the product-list functionality.
 */
export function wireForm() {
  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");

  form.addEventListener("submit", event => {
    event.preventDefault();

    const { name, price } = readForm();

    if (!name) {
      error.textContent = "Give the product a name.";
      return;
    }

    const priceInput = document.querySelector("#price");

    if (priceInput.value.trim() === "" || !(price > 0)) {
      error.textContent = "Give the product a price.";
      return;
    }

    error.textContent = "";

    items.push({ name, price });

    renderList(items);
    clearForm();
  });
}
