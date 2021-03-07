// <!--
// With the given shoppingList array, use array destructuring to assign each array within the shoppingList array its own variable. These variables should be named grocery, cleaning, gifts, clothing. Then, using the spread syntax, reinitialize the shoppingList array so it is a single array containing all of the values from the original array as a comma separated list of items. 

// After the shoppingList array has been reinitialized as an array containing a comma separated list of all of the items, using the array.prototype.map method, map over the newly initialized shoppingList array. You should do the following within the map method:

// include a parameter for index
// utilize the array.prototype.push method to push the current value being mapped over into the appropriate key/value pair in the obj variable
// You will need to implement some sort of logic to check the index of the current item being mapped over.
// -->



let shoppingList = [[ 'eggs', 'milk', 'butter' ], [ 'cleaner', 'trash bags', 'detergent' ], [ 'thank you card', 'pens', 'gift wrapping' ], [ 'shoes', 't-shirt', 'slacks' ]];
//console.log(shoppingList);
let obj = {
cleaning: [],
gifts: [],
clothing: [],
grocery: []
}



//console.log(obj);

let grocery = [...shoppingList[0]];
let cleaning = [...shoppingList[1]];
let gifts = [...shoppingList[2]];
let clothing = [...shoppingList[3]];
//console.log(grocery);

shoppingList = [...grocery, ...cleaning, ...gifts, ...clothing];
//console.log(shoppingList)

shoppingList.map((list, index) => {
   if(index <= 2){
        obj.grocery.push(list)
   }else if(index >=3 && index <= 5){
        obj.cleaning.push(list)
   }else if(index >=6 && index <= 8){
        obj.gifts.push(list)
   } else{
        obj.clothing.push(list)
   }
    
});
console.log(obj);

