var assert = require("assert");

function highestCount(values){}

function valuesFromHand(hand){
    return hand.map(function(card){
        return card.split('-')[0];
    })
}

function multiplesIn(hand){
    return highestCount(valuesFromHand(hand));
}

function isPair(){
    return multiplesIn(hand) === 2;
}

function checkHand(hand){
    if(isPair(hand)){
        return 'pair';
    } else {
        return "three of a kind";
    }
}

module.exports = checkHand;
