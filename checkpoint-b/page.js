import { items } from "./items.js";

export function renderItems(list) {
  const element = document.querySelector("#list");
  element.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("product");
    li.textContent = `${item.name} - ${item.price} EGP`;
    element.appendChild(li);
  });
}

export function matching() {
  return items.filter((item) => item.inStock === false);
}

export function start() {
  document.querySelector("#select").addEventListener("click", () => {
    renderItems(matching());
  });

  renderItems(items);
}

