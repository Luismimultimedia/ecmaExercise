// // Default Params
// function defaultParams(name, age, country) {
//     var name = name || "Luis"
//     var age = age || 26 
//     var country = country || "CO"
//     console.log(name, age, country)
// }

// function defaultParamsEs6(name = "Luis", age = 26, country = "CO") {
//     console.log(name, age, country)
// }

// defaultParams()
// defaultParamsEs6()
// defaultParamsEs6("deiby", 23, "Desconocido")

// // Concatenar
// let hello = "Hello";
// let word = "World!"
// let epicPhrase = hello + " " + word;
// let epicPhraseEs6 = `${hello} ${word}`;

// console.log(epicPhrase)
// console.log(epicPhraseEs6)


// let name = "Luis"

// console.log(ComoMeLlamo())

// function ComoMeLlamo() {
//     return `Me llamo ${name}`
// }

// let name = "Luis"

// console.log(ComoMeLlamo())

// const ComoMeLlamo = () =>  `Me llamo ${name}`

// // Anterior
// var Lorem = "Esto es una frase epica \n" 
// + "Esto es otra frase epica"

// //Es6
// let Lorem = `Esto es una frase epica
// Esto es otra frase epica`

// // Antes
// var Person = {
// 	name: "Luis",
// 	lastName: "Gonzalez",
// 	age: 26
// }

// console.log(Person.name, Person.lastName, Person.age);

// // Es6
// let Person = {
// 	name: "Luis",
// 	lastName: "Gonzalez",
// 	age: 26
// }

// let { name, lastName, age } = Person;
// console.log( name, lastName, age );

// // Antes
// var team1 = ["luis", "jose", "natalia"]
// var team2 = ["sara", "laura", "maribel"]

// var newTeam = ["roberto", "luis", "jose", "natalia", "sara", "laura", "maribel"]

// // Es6
// let newTeam = ["roberto", ...team1, ...team2]

// // Antes
// var team1 = ["luis", "jose", "natalia"]
// var team2 = ["sara", "laura", "maribel"]

// var newTeam = ["roberto", "luis", "jose", "natalia", "sara", "laura", "maribel"]

// // Es6
// let newTeam = ["roberto", ...team1, ...team2]

// // Antes
// function HolaMundo () {
// 	return "Hola Mundo"
// }

// // Es6
// let HolaMundo = () => `Hola Mundo`

// const EsUnaPromesa = () => {
// 	return new Promise((resolve, reject) => {
// 		if (algo === true) {
// 			resolve("Exito")
// 		} else {
// 			reject("Algo paso")
// 		}
// 	})
// }

// EsUnaPromesa()
// 	.then(resolve => console.log(resolve))
// 	.catch(reject => console.log(reject))

//     class Calculadora {
//         constructor(valueA, valueB) {
//             this.valueA = valueA;
//             this.valueB= valueB;
//         }
    
//         sum(){
//             return this.valueA + this.valueB;
//         }
//     }
    
//     let calc = new Calculadora(1,2)
    
//     console.log(calc.sum()) // 3

//     // Archivo A
// export default const Hello = () => "Hola Mundo"

// // Archivo B
// import Hello from "./ArchivoA.js"

// console.log(Hello()) // Hola Mundo

// // PD: Si se tienen varios export, se le llama modulos nombrados
// // Archivo A
// export const Hello = () => "Hola"
// export const World = () => "Mundo"

// Archivo B
import { Hello, World } from "./archivo.js"

console.log(Hello) // Hola
console.log(World ) // Mundo

function* generador () {
	if (true) {
		yield "hola"
	}
	if (true) {
		yield "mundo"
	}
}

let GeneradorFuncion = generador();
console.log(GeneradorFuncion.next().value) // hola
console.log(GeneradorFuncion.next().value) // mundo
console.log(GeneradorFuncion.next().value) // undifined
