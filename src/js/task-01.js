const mainUl = document.querySelector("#categories");
const mainLi = document.querySelectorAll(".item");

console.log("Number of categories: " + mainUl.children.length)

mainLi.forEach(element => {
console.log( "Category: " + element.firstElementChild.textContent);
console.log( "Elements: " + element.lastElementChild.children.length);
})
