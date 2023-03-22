// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


//add new item to an array using push()

function destructivelyAppendCat(name){
    cats.push(name);
}


// adding element at the beginning of an arry using unshift()

function destructivelyPrependCat(name){
    cats.unshift(name);
}


//remove the last element of an array using pop()

function destructivelyRemoveLastCat(){
    cats.pop();
}

//remove the first element of an array using shift()

function destructivelyRemoveFirstCat(){
    cats.shift();
}


function appendCat(name){
    const Cats = cats.slice();
    Cats.push(name);
    return Cats;
}

function prependCat(name){
    const Cats = cats.slice();
    Cats.unshift(name);
    return Cats;
}

function removeLastCat(name){
    const Cats = cats.slice();
    Cats.pop(name);
    return Cats;
}

function removeFirstCat(name){
    const Cats = cats.slice();
    Cats.shift(name);
    return Cats;
}