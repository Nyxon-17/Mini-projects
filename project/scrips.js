let btn = document.querySelector("button")
let h2 = document.querySelector("h2")
let box = document.querySelector(".box")

function generateRandomColor() { 
     let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    
    return `rgb(${red}, ${green}, ${blue})`; 
}

btn.addEventListener("click", function () { 
    const randomColor = generateRandomColor(); 
    
    h2.innerText = randomColor; 
    box.style.backgroundColor = randomColor;
});
