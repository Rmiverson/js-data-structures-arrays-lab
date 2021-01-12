// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

const destructivelyAppendDriver = (name) => {
   drivers.push(name);
}

const destructivelyPrependDriver = (name) => {
   drivers.unshift(name);
}

const destructivelyRemoveLastDriver = (name) => {
   drivers.pop(name);
}

const destructivelyRemoveFirstDriver = (name) => {
   drivers.shift(name);
}

const appendDriver = (name) => {
   return [...drivers, name]
} 

const prependDriver = (name) => {
   return [name, ...drivers]
}

const removeLastDriver = (name) => {
   let fun = drivers.slice(0,2);
   return fun;
}

const removeFirstDriver = (name) => {
   let lol = drivers.slice(-2);
   return lol;
}