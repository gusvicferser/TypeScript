function rollTheDice(userName, maxOfTries) {
    var results = [];
    var MAX_DICE_NUMBER;
    MAX_DICE_NUMBER = 6;
    for (var index = 0; index < maxOfTries; index++) {
        var result = Math.ceil(Math.random() * MAX_DICE_NUMBER);
        if (result === MAX_DICE_NUMBER) {
            results.push("".concat(userName, " is a WINNER : ").concat(result));
        }
        else {
            results.push("".concat(userName, " is a LOSER : ").concat(result));
        }
    }
    return results;
}
var diceResults = rollTheDice("It's", 5);
console.log(diceResults);
