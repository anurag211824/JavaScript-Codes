fetch("https://dummyjson.com/products",{method: "GET"})
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log("Data",data);
    const products = data.products
    products.forEach((product)=>{
        let productList = document.createElement("div");
        productList.innerHTML = `
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>$${product.price}</p>
        <img src="${product.images[0]}" alt="${product.title}">
        `;
        document.querySelector(".products").appendChild(productList);
    })
  });


// fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       title: 'BMW Pencil',
//       description: 'A high-quality pencil for BMW',
//       price: 1.99,
//       images: ['https://dummyimage.com/600x400/000/fff']
//       /* other product data */
//     })
//   })
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.error);

setInterval(()=>{
  const now = new Date();
const istTime = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
console.log(istTime); // Example: "2/4/2025, 8:30:15 PM"
},1000)