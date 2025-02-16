const h1 = document.querySelector("h1");
const container = document.querySelector(".container");

// const pokeImage = document.querySelector(".pokeImg");
// const pokeImageClone = pokeImage.cloneNode(true);

// for (let i = 1; i <= 10; i++) {
//   const pokeImageClone = pokeImage.cloneNode(true);
//   pokeImageClone.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
//   container.appendChild(pokeImageClone);
// }


// const paraGraph=document.createElement('p')
// container.appendChild(paraGraph)
// paraGraph.innerText='paraGraph'

for(let i=1;i<=50;i++){
    const imageContainer = document.createElement('div')
    const paraGraph = document.createElement('p')
    paraGraph.innerText=i;
    paraGraph.style.textAlign='center'
    const imageClone=document.createElement('img');
    imageClone.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    imageContainer.append(imageClone,paraGraph)
    container.appendChild(imageContainer)
}

