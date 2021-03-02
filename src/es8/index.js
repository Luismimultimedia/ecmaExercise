// Object entries
let persona = {
    name: 'Luis',
    lastName: 'Gonzalez',
    age: 24,
}

console.log(Object.entries(persona))
console.log(Object.entries(persona).length)

// Object values
let persona = {
    name: 'Luis',
    lastName: 'Gonzalez',
    age: 24,
}
console.log(Object.values(persona))
console.log(Object.values(persona).length)

// padding 
let hello = "Hello"
let world = "World"

console.log(world.padStart(11, 'Hello '))
console.log(hello.padEnd(11, ' World'))

// Async/Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('hello world'), 4000)
            : reject(new Error('error en la promesa'))
    })
}

const timeoutAsync = async () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('segunda funcion'), 2000)
            : reject(new Error('error en la promesa'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld()
    const hello2 = await timeoutAsync()
    console.log(hello)
    console.log(hello2)
}

const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)

    } catch (error) {
        console.log(error)
    }
}

helloAsync()
anotherFunction()

