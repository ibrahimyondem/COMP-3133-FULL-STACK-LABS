const b1 = Buffer.from("A Hello");
// Prints(<Buffer 41 20 48 65 6c 6c 6f>)
// const b2 = new Buffer("World"); 

console.log(b1);
console.log(b1.toString()) ; // Prints("A Hello")

console.log(b1[0]); // Prints(65)

console.log(b1[0].toString(16)); // Prints(41) 

b1[1] = 'B' // You can't assign like this to a buffer
b1[1] = 66 // You can assign like this to a buffer ASCII value of B is 66

console.log(b1.toString()); // Prints("ABHello")

b1[1] = 'C'.charCodeAt(0) // You can also assign like this

console.log(b1.toString()); // Prints("ABHello")

const b2 = Buffer.alloc(10).fill('A'); // Allocates a buffer of size 10 with all bytes set to 0

console.log(b2); // Prints <Buffer 41 41 41 41 41 41 41 41 41 41>
console.log(b2.length); // Prints 10

// const b3 = Buffer.allocUnsafe(10); // Allocates a buffer of size 10 without initializing the memory

const data = "💐";
const b3 = Buffer.from(data);

console.log(b3); // Prints the buffer representation of the string with emoji
console.log(b3.length); // Prints the number of bytes used to represent the string

// console.log(b3.toString()); // Prints the original string "💐

// console.log(b3.toString('ascii')); // Prints the original string "💐

// console.log(b3.toString('hex')); // Prints the original string "💐

// console.log(b3.toString('utf-8')); // Prints the original string "💐

const aBuffer = Buffer.from([0x41, 0x42, 0x43, 0x44, 0x45]); // Creates a buffer from an array of byte values 
// const aBuffer = Buffer.from([65,66,67,68,69]); // Creates a buffer from a string
// const aBuffer = Buffer.from(b1); // Creates a buffer from another buffer


const bBuffer = Buffer.from('ABCDE'); // Creates a buffer from a string

console.log(aBuffer.compare(bBuffer)); // Prints 0 if equal, negative if aBuffer < bBuffer, positive if aBuffer > bBuffer)

console.log(aBuffer.toJSON()); // Prints {"type":"Buffer","data":[65,66,67,68,69]}

aBuffer.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}, char ${String.fromCharCode(value)}`);
})

console.log(aBuffer);

aBuffer.write('XYZ') // Overwrites the buffer with the string 'XYZ' starting from index 0
console.log(aBuffer.toString());

var buf1 = Buffer.from('A');
var buf2 = Buffer.from('B');
var buf3 = Buffer.from('C');

const newBuffer = Buffer.concat([buf1, buf2, buf3]);

console.log(newBuffer.toString()); // Prints 'ABC'

