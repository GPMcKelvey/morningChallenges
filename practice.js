/*
    CHALLENGE #1
        - Write a function that holds two parameters - one for firstName, and one for lastName. The function should print the full name to the console. Invoke the function, and pass in two arguments. 
*/

function fullName (fName, lName) {
    console.log(`${fName} ${lName}`);
}

fullName ("Garrett", "McKelvey");


/*
    - CHALLENGE #2
        - Write a program that prints all numbers from 0-100
            - for multiples of 6, instead of the number, print 'Fizz'
            - for multiples of 8, instead of the number, print 'Buzz'
            - for multiples of 6 AND 8, instead of the number, print 'Fizz Buzz'
*/

for (i = 0; i <= 100; i++) {
    if (i % 6 == 0 && i % 8 == 0){
        console.log("Fizz Buzz");
        
    } else if (i % 8 == 0){
        console.log("Buzz");
    } else if (i % 6 == 0){
        console.log("Fizz");
    } else {
        console.log(i);
    }
}


/*
    - CHALLENGE #3
        - Write a function called findPerimeter() that accepts 2 parameters called: length, width.
            - The function should return an interpolated string of 'True: the perimeter is ___' if the perimeter is over 20
            - the function should return an interpolated string of 'False: the perimeter is ___' if the perimeter is under 20
            HINT: P = x + x + y + y
                  P = 2x + 2y
                  P = 2(x + y)
*/

function findPerimeter(length, width){
    let p = length * 2 + width * 2;
 if (p >= 20) {
    return `True: the perimeter is ${p}`;
} else {
    return `False: the perimeter is ${p}`;
}
}

let returnTrue = findPerimeter(5, 10);
console.log(returnTrue);
let returnFalse = findPerimeter(2, 3);
console.log(returnFalse);

/*
    - CHALLENGE #4
        - Create an object literal called library.
            - the library object will contain 3 properties: name, address, sections
                - name and address will both hold values that are strings. You can fabricate the information.
                - sections will be an object that will store a property called collections, which is an array of more objects. You should include at least 2 objects inside the collections array.
                    - the objects stored in the collections array will hold properties of classification, count, and aisle. 
                        - both the classification and aisle properties should hold strings as values, and count should hold a value that is a number.
*/

let library = {
    name: "Dunder Mifflin",
    address: "Scranton, PA",
    sections: [
        {
            classification: "Printer paper",
            count: 1000,
            aisle: "Warehouse B"
        },
        {
            classification: "Sabre Printer",
            count: 45,
            aisle: "Probably on fire.",
        },
    ]
}

console.log(library.sections[0].count);



function findPerimeter(length, width){
    let p = length * 2 + width * 2;
 if (p >= 20) {
    return `True: the perimeter is ${p}`;
} else {
    return `False: the perimeter is ${p}`;
}
}

let returnTrue = findPerimeter(5, 10);
console.log(returnTrue);
let returnFalse = findPerimeter(2, 3);
console.log(returnFalse);




function isRightTriangle(side, base, hypotenuse){
	let p = side**2 + base**2;
	let h = hypotenuse**2;
	if (p == h){
		return `True, the triangle is a right triangle.`
	} else {
		return `False, the triangle is not a right triangle.`
	}
}
let trueTri = isRightTriangle(3, 4, 5);
console.log(trueTri);
let falseTri = isRightTriangle(5, 6, 7);
console.log(falseTri);








// <!-- 
//   1. Write a for loop that counts from 0-10
//   2. Declare a function named evenOrOdd that holds a single parameter named num
//   3. Each time the for loop runs, it should invoke the function of evenOrOdd, and pass in the number from the for loop as the argument
//   4. Inside of the function body, write a conditional that checks if the number being passed to the function from the for loop is even or odd
//       - if the number is even, console.log the number + 'the number is even'
//       - if the number is odd, console.log the number + 'the number is odd'
// -->

let num;

function evenOrOdd (num){
     if (num % 2 == 0) {
        console.log("The number is even.")
    } else {
        console.log("The number is odd.")
    }
}


for (num = 0; num<= 10; num++){
    evenOrOdd(num);
    //console.log(num);
};





let num = 0;

function evenOrOdd (){
    } if (num % 2 == 0) {
        console.log("The number is even.")
    } else {
        console.log("The number is odd.")
    }


while (num<= 10){
    num++;
    evenOrOdd(num);
    console.log(num);
};