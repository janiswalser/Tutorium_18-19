

//Objects

let example12 = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

console.log(example12);

// Display some data from the object:
// At first write this ->     <p id="demo"></p>     <- in your html
document.getElementById("demo").innerHTML = example12.firstName + " is " + example12.age + " years old.";



// -------------------------------------------------------------------------------

// Functions

function myFunction(p1, p2) {
	//do cool stuff here!
    return p1 * p2;              // The function returns the product of p1 and p2
}

console.log(myFunction(4, 3));

// -------------------------------------------------------------------------------

// Conditions if
let hour = 10;

if (hour < 18) {
    console.log("Good day");
}


//switch
let studentAnswer = 'D';
switch(studentAnswer) {
  case 'A':
    console.log('A is wrong.');
    break;
  case 'B' :
    console.log('B is wrong.');
    break;
  case 'C':
    console.log('C is correct.');
    break;
  default:
    console.log('Not a real answer.');
}


// -------------------------------------------------------------------------------
// Loops

for (let i = 0; i < 5; i++) {
  console.log(i);
}


//While

var count = 0;
while (count < 20) {
  count++;
}
console.log(count);

