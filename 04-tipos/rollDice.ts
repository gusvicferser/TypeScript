function rollTheDice(userName: string, maxOfTries: number) {
  const results: string[] = [];
  let MAX_DICE_NUMBER: number;
  MAX_DICE_NUMBER = 6;

  for (let index = 0; index < maxOfTries; index++) {
    const result = Math.ceil(Math.random() * MAX_DICE_NUMBER);

    if (result === MAX_DICE_NUMBER) {
      results.push(`${userName} is a WINNER : ${result}`);
    } else {
      results.push(`${userName} is a LOSER : ${result}`);
    }
  }

  return results;
}

const diceResults: string[] = rollTheDice(`It's`, 5);

console.log(diceResults);
