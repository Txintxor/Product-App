class Product {
  constructor(item, price, year) {
    this.item = item;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");

    element.innerHTML = `<ul class="list-unstyled d-flex flex-row justify-content-between py-2 px-4 align-items-center bg-info bg-opacity-25 fs-6 rounded-2 border-info">
        <li class="">Item: ${product.item}</li>
        <li class="">Price: ${product.price}</li>
        <li class="">Year: ${product.year}</li>
        <button class="btn btn-info btn-sm rounded-3 my-2 px-4 fs-6" onclick="deleteButton()">Delete</button>
        </ul> `;
    productList.appendChild(element);
    formId.reset();
    this.showMessage("add");
  }

  deleteProduct(product) {
        product.innerHTML = "";
        this.showMessage("del");
      }

  showMessage(info) {
    const target = document.getElementById("message-bar");
    if (info == "add") {
      target.innerHTML =
        '<p class="text-xl-start fs-4 p-2 bg-info bg-opacity-25">Item added</p>';
    } else if (info == "del") {
      target.innerHTML =
        '<p class="text-xl-start fs-4 p-2 bg-warning bg-opacity-25">Item deleted</p>';
    }
    setTimeout(() => (target.innerHTML = ""), 3000);
  }
}

const formId = document.getElementById("product-form");
formId.addEventListener("submit", (e) => {
  const item = document.getElementById("item").value;
  const price = document.getElementById("price").value;
  const year = document.getElementById("year").value;

  const product = new Product(item, price, year);
  const ui = new UI();

  ui.addProduct(product);
  e.preventDefault();
});

function deleteButton() {
  document.getElementById("product-list").addEventListener("click", (e) => {
    const ui = new UI();
    let product = e.target.parentElement.parentElement;
    ui.deleteProduct(product);
  });
}
