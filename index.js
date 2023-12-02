let nomeHeroi = "Maycon";
let xpHeroi = 6543;
let eloHeroi = ""


switch (true){
    case xpHeroi <= 1000:
        //console.log("ferro")
        eloHeroi = "ferro"
    break

    case xpHeroi >= 1001 && xpHeroi <= 2000:
        //console.log ("bronze")
        eloHeroi = "bronze"
    break

    case xpHeroi >= 2001 && xpHeroi <= 5000:
        //console.log ("prata")
        eloHeroi = "prata"
    break

    case xpHeroi >= 6001 && xpHeroi <= 7000:
        //console.log ("ouro")
        eloHeroi = "ouro"
    break

    case xpHeroi >= 7001 && xpHeroi <= 8000:
        //console.log ("platina")
        eloHeroi = "paltina"
    break
    
    case xpHeroi >= 8001 && xpHeroi <= 9000:
        //console.log ("platina")
        eloHeroi = "acendente"
    break

    case xpHeroi >= 9001 && xpHeroi <= 10000:
        //console.log ("platina")
        eloHeroi = "imortal"
    break
    
    default:
        eloHeroi = "radiante"  
}

console.log("O heroi de nome "+ nomeHeroi + " esta no nivel de " + eloHeroi + ", e seu XP total é: "+ xpHeroi+" .")