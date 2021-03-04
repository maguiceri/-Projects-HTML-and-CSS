let word= "mondiola";

let words = {
    "mondiola":"bondiola",
    "picapuerta":"picaporte",
    "estuatua":"estatua",
    "sambuche":"sandwitch",

}

for (let index in words) {

    if (word == index) {
        console.log ("No se escribe " + index + " se escribe " + words[index])
    }

}