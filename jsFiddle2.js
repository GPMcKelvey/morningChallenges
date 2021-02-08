const searchForm = document.querySelector("button");
let store;
let product;
let quantity;
//let text; 
searchForm.addEventListener("click", setVariables);

function setVariables (e) {
    e.preventDefault();
    store = document.getElementById("store").value;
    product = document.getElementById("product").value;
    quantity = document.getElementById("quantity").value;
    //console.log(`I went to ${store} to buy ${quantity} ${product}`);
    
}
let text = `I went to ${store} to buy ${quantity} ${product}`;
console.log(text);




// const result = document.querySelector(".result");

// result.appendChild(text);




/* 
  - Using the provided HTML code, declare a function named setVariables() that does the following:
    - declares variables of store, product, and quantity. These variables should access the store, product, and quantity elements from the HTML file, and pull out the value.
    - console.log an interpolated string of: 'I went to ${store} to buy ${quantity} ${product}'
    - declare a variable named text that is initialized as the interpolated string you just console.logged
    
    - declare a variable of result that accesses an element with a class of result from the HTML file
    - append the variable of text to the HTML file
*/ 