load()
loadSearchBar()
function load() {
    let body = document.getElementById("body");
    let displayPlace = document.getElementById("displayItemPlace");
    let List = [];
    for (let i = 0; i < 20; i++) {
        let item = {
      name: "item",
      price: 10 + i,
      id: i,
    };
    List.push(item);
  }
  window.localStorage.setItem("items", JSON.stringify(List));
  let items = window.localStorage.getItem("items");
  items = JSON.parse(items);

  let cart = document.getElementById("Cart")
  cart.onclick = () => goToCart()
  let i = 0;
  items.forEach((element) => {
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = "ak_inheritance.webp";
      let buyButton = document.createElement("button");
      buyButton.onclick = () => onClick(element.id);
      buyButton.innerText = "Buy " + items[i].price + "$";
      displayPlace.appendChild(div);
      div.appendChild(img);
      div.appendChild(buyButton);
      i++;
  });
}
function loadSearchBar() {
    let searchPlace = document.getElementById("search")
    let title = document.createElement("h1")
    title.textContent = "Searchbar"
    let div = document.createElement("div");
    let text1 = document.createElement("p")
    text1.textContent = "name"
    let input1 = document.createElement("input")
    searchPlace.appendChild(div)
    div.appendChild(title)
    div.appendChild(text1)
    div.appendChild(input1)
}
function onClick(id){
    let currentCart = JSON.parse(window.localStorage.getItem("cart"));
    if (!Array.isArray(currentCart)) currentCart = [];
    currentCart.push(id);
    window.localStorage.setItem("cart", JSON.stringify(currentCart));
}
function goToCart(){
    let cartcontainer = document.getElementById("cartContainer");
    let cart = document.createElement("div")
    let checkout = document.createElement("button")
    checkout.textContent = "Checkout"
    checkout.onclick = () => {
    window.location.href = "checkout.html";
    };
    cartcontainer.innerHTML = "";

    JSON.parse(window.localStorage.getItem("cart")).forEach(element => {
        let item = document.createElement("div")
        item.id = "cartItemId"
        let name = document.createElement("p")
        name.textContent = "item" + element
        let price = document.createElement("p")
        price.textContent = element + 10 + "$"
        let button = document.createElement("button")
        button.onclick = () => removeFromCart(element)
        button.textContent = "x"
        cart.appendChild(item)
        item.appendChild(name)
        item.appendChild(price)
        item.appendChild(button)
    });
    cartcontainer.appendChild(cart)
    cart.appendChild(checkout)
}
function removeFromCart(id) {
    let cart = JSON.parse(window.localStorage.getItem("cart")) || [];

    const index = cart.indexOf(id);
    if (index !== -1) {
        cart.splice(index, 1); 
    }

    window.localStorage.setItem("cart", JSON.stringify(cart));
}