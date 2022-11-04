const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesArray = []

for (const image of images){
 let acc = `<li><img class="image" src="${image.url}" alt="${image.alt}" ></img></li>`;
imagesArray.push(acc)};

const imagesListEl = document.querySelector(".gallery")

imagesListEl.insertAdjacentHTML('afterbegin', imagesArray)


const imageEl = document.querySelectorAll(".image");

imageEl.forEach(function(element){
  element.style.width = "600px";
  element.style.marginBottom = "30px";
  element.style.borderRadius = "30px";
})
imagesListEl.style.display = "flex";
imagesListEl.style.flexDirection = "column";
imagesListEl.style.alignItems = "center";
imagesListEl.style.listStyle = "none"



