// Define the 'cats' array
let cats = ["Milo", "Otis", "Garfield"];

// Define the 'destructivelyAppendCat(name)' function
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Define the 'destructivelyPrependCat(name)' function
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Define the 'destructivelyRemoveLastCat()' function
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Define the 'destructivelyRemoveFirstCat()' function
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Define the 'appendCat(name)' function
function appendCat(name) {
    return [...cats, name];
}

// Define the 'prependCat(name)' function
function prependCat(name) {
    return [name, ...cats];
}

// Define the 'removeLastCat()' function
function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

// Define the 'removeFirstCat()' function
function removeFirstCat() {
    return cats.slice(1);
}

