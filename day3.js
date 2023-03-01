// Loop

// 1 For loop 

for (let i = 0 ; i <= 10 ; i++) {
    console.log(`angka ke ${i}`);
}

// 2 for of
let name = ["yansa" , "lina" , "bangkit"];

for (let new_Name of name) {
    console.log(new_Name);
}

//  while

let i = 1;

while ( i <= 10) {
    let a = 1;
        if (a < 10) {
            a++
            console.log(a);
           
        }else{
            console.log("terpernuhi");
        }
    i++    
}

// 4 do while

let x = 1

do {
    console.log("part " + x);
    x++
} while ( x <= 10);

// 5 infinite loops 
// let z = 1;

// while(z <= 10) {
//     console.log(i);
// }

//  spread Operator

let nama = { firstName : 'Yansa' , age : 18};
let nama2 = {firstname : 'Apis' ,gender : 'M'}

const newObj = {...nama , ...nama2};

console.log(newObj);



