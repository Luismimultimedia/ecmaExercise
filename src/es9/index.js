// spread operator

let persona = {
    name: 'luis',
    lastName: 'gonzalez',
    age: 26,
}

let { name, ...values } = persona;
console.log(values)

// propagation properties

let cargo = {
    cargo: 'multimedia engineer'
}

let persona = {
    name: 'luis',
    lastName: 'gonzalez',
    age: 26,
}

console.log({ ...persona, ...cargo })

// promise finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hola mundo'), 3000)
            : reject(new Error)
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log("termino"))


// regex 
let regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
let match = regexData.exec('2020-01-03')
let year = match[1]
let day = match[2]
let month = match[3]

console.log('Date -->', year, day, month)

// flat

let numbers = [1,2,3,[1,2,3,[1,2,3]]]

console.log(numbers.flat())
console.log(numbers.flat(2))

// flatMap
let numbers = [1,2,3,]

console.log(numbers.flatMap((number) => [number, number*2]))

// trim.start trim.end
let hello = "hello            "
let world = "          word"

console.log(hello.trimEnd())
console.log(world.trimStart())

//try catch
try {
    
} catch {
    console.log(error)
}

// fromEntries
let arr = [["name", "luis"], ["lastName", "gonzalez"]]

console.log(Object.fromEntries(arr))