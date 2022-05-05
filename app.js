class Product {
  constructor(item, price, year) {
    this.item = item;
    this.price = price;
    this.year = year;
  }
}

class UI {
  static counter = 1;

  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");

    element.className = `div-${UI.counter}`;
    UI.counter++;

    element.innerHTML = `<ul class="list-unstyled d-flex flex-row justify-content-between py-2 px-4 align-items-center bg-info bg-opacity-25 fs-6 rounded-2 border-info">
    <li class="">Item: ${product.item}</li>
    <li class="">Price: ${product.price}</li>
    <li class="">Year: ${product.year}</li>
    <button class="btn btn-info btn-sm rounded-3 my-2 px-4 fs-6">Save</button>
    </ul> `;
    productList.appendChild(element);
  }

  deleteProduct() {

  }

}

document.getElementById("product-form").addEventListener("submit", (e) => {
  const item = document.getElementById("item").value;
  const price = document.getElementById("price").value;
  const year = document.getElementById("year").value;

  const product = new Product(item, price, year);
  const ui = new UI();

  ui.addProduct(product);
  e.preventDefault();
});

document.getElementById("product-list").addEventListener("click", (e) => {
  
});