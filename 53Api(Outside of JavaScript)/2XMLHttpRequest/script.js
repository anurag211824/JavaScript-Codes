const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);

      // Display the image on the page
      const img = document.createElement("img");
      img.src = data.message;
      img.alt = "Random Dog";
      img.style.width = "300px";
      document.body.appendChild(img);
    } else {
      console.error("Error: ", xhr.statusText);
    }
  });

  xhr.addEventListener("error", () => {
    console.error("Request failed");
  });

  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
});


