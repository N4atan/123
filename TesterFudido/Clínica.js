const ask = require("readline-sync")

let racesNow = ["shitzu", "Pastor-Alemao", "pug", "pincher", "salsicha"]

console.log(`BEM VINDO A NOSSA CLÍNICA \n NO MOMENTO ESTAMOS REALIZANDO A CASTRAÇÃO NAS SEGUINTES RACAS: \ \n${(racesNow.join('\n'))}\n`)
let raca = ask.question("------------------- \n Qual delas você gostaria? ")

switch (raca){
    case "shitzu":
        console.log(`O valor da castracao e 259.00`)
        break
    case "Pastor-Alemao":
            console.log(`O valor da castracao e 369.00`)
            break
    case "pug":
        console.log(`O valor é 359.00`)
        break
    case "pincher":
        console.log(`a castracao é 159.00`)        
        break
    case "salsicha":
        console.log(`O valor da castracao é R$199.00`)
        break
    default:
        console.log(`Desculpe, nao encontramos essa raca!`)
}

if (ask.question("\n Voce gostaria de realizar a castraçao? ")){
    console.log("Ok, CUIDAREMOS BEM DO SEU DOGUINHO!")
} else {
    console.log("Nao tem problema! Tenha uma otima semana!")
}
