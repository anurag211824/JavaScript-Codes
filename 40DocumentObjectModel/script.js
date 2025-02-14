function sayHi() {
  console.log("Hi");
  document.body.children[3].src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-Ugo0RA7duc5ueVuXE8kEBoZi6oKgO4SeCGq2a88m_JU6aRjUjguoj-C5pxiARJHQg173Eqs_bztiWqvm23glg";
}

document.addEventListener("DOMContentLoaded", sayHi());

const allImages = document.getElementsByTagName("img");
Array.from(allImages).forEach((img) => {
  img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-Ugo0RA7duc5ueVuXE8kEBoZi6oKgO4SeCGq2a88m_JU6aRjUjguoj-C5pxiARJHQg173Eqs_bztiWqvm23glg";
});
console.log(allImages);

const allParagraph = document.getElementsByTagName("p");
for (let i = 0; i < allImages.length; i++) {
    allParagraph[i].innerText ="I Love you Himanshi"
}
console.log(allImages);


const himanshiImage=document.getElementsByClassName('himanshi-Picture')[0]
himanshiImage.src="images/WhatsApp Image 2025-02-15 at 00.44.00_1c338500.jpg"

const himanshiImage2=document.getElementById('himanshi')

himanshiImage2.src="images/WhatsApp Image 2025-02-15 at 00.53.03_31c80b96.jpg"

const i=document.querySelector('[alt="himanshi"]')

const li=document.querySelectorAll('ul li')

