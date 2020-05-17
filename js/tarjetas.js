

const tarjetas = [
    {
    CardName:"visa",
    installments:[1,3,6,9,12,15,18]
    },
    {
    CardName:"mastercard",
    installments:[1,3,6]
    },
    {
    CardName:"amex",
    installments:[1,3]
    }
];

let card="amex";
let selectedCard;



for(let i=0; i<tarjetas.length; i++){
    const currentCard=tarjetas[i];
    if(currentCard.CardName==card){
        selectedCard=currentCard;
    }
}

if (selectedCard != undefined) {
    console.log("la tajeta seleccionada es: " +selectedCard);

    for (let i=0; i<selectedCard.installments[i]; i++){
        console.log(installments+(installments==1?"cuota":"cuotas")+"sin interes");
    }

}

else{
    console.log("la tarjeta " +card+ "no forma parte del diccionario");
    console.log("una cuota sin interes");
}

