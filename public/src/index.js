// setTimeout(() => {
//     console.log('Hello  ')
// }, '3000') // Macro 

//1.
console.log('A') //Sincrona y microtarea

setTimeout(() => {
}, '2000')
console.log('B')
//Asincrona y macrotarea

console.log('C') //Sincrona y microtarea

setTimeout(() => {
    console.log('D')
}, '3000')
//Asincrona y macrotarea

// output: A, C, B, D

//2.
console.log('Start');
setTimeout(() => {
    console.log('Hello')
}, '0')
console.log('End');
// output: Start, End, Hello

//3.
let number = Math.floor(Math.random() * 100);
console.log(number);

const promise = new Promise((resolve, reject) => {
    if (number >= 5) {
        resolve('The number is greater or equal than 5') // we can pass any value. Normally we pass an object.
    } else {
        reject('The number is less than 5')
    }
})
promise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

//fetch petition
// fetch('https://jsonplaceholder.typicode.com/users')
const getPokes = async () => {
    try{
        const poke = await fetch('https://pokeapi.co/api/v2/pokemon/ditto2').then(response => response.json());
        console.log(poke.name);
    } catch (error) {
        console.log(error.message);
    }
}
getPokes();

const getPokes2 = async () => {
    try{
        const poke = await fetch('https://pokeapi.co/api/v2/pokemon/ditto2').then((response) => {
            if(!response.ok){
                throw new Error(`Error: ${response.status}  ${response.statusTexts}`);
            }
            return response.json();
        });
        console.log(poke);
    } catch (error) {
        console.log(error.message);
    }
}
getPokes2();