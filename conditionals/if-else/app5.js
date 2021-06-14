/*
You need to write a function that prints out ‘wild animals’ if the names of lion and leopard are passed to it.
However, if I pass the names of cats and rabbits to it, it prints ‘pet animals’. 
However, if I pass any other name to it, it says ‘unknown’
*/

function printAnimals() {

    let animal = "leopard";
    if ((animal == "lion") || (animal == "Lion") || (animal == "leopard") || (animal == "Leopard")) {

        console.log("Wild Animals");
    }
    else if ((animal == "cat") || (animal == "rabbit")) {

        console.log("Pet Animals");
    }
    else
        console.log("Unknown");

}

printAnimals();