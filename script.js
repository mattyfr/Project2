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
  
  let i = 0;
  items.forEach((element) => {
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.src = "ak_inheritance.webp";
      let buyButton = document.createElement("button");
      buyButton.innerText = "Buy " + items[i].price;
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
