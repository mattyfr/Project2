let body = document.getElementById("body")
let displayPlace = document.getElementById("displayItemPlace")
let List = []
for(let i = 0; i < 20; i++){
    let item = {
        name: "item",
        price: 10,
        id: i,
    }
    List.push(item)
}
window.localStorage.setItem("items", JSON.stringify(List))
let items = window.localStorage.getItem("items")
items = JSON.parse(items)


items.forEach(element => {
    let div = document.createElement("div")
    let img = document.createElement("img")
    img.src = "ak_inheritance.webp"
    let buyButton = document.createElement("button")
    buyButton.textContent = items.price
    displayPlace.appendChild(div)
    div.appendChild(img)
    div.appendChild(buyButton)
    console.log("a");
});
