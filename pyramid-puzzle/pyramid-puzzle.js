// Target: 720
//           2
//         4, 3
//       3, 2, 6
//      2, 9, 5, 2
//    10, 5, 2, 15, 5
//2 * 4 * 2 * 9 * 5 = 720;
//Answer: LRLL

//get data from txt file
const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
  if (err) throw err;
  const initData = data.toString();
  const target = parseInt(initData.split('\n')[0].split(' ').pop());
  const rows = initData.split('\n').length - 2;
  const treeArray =
    initData.split('\n').slice(1).join(',').split(',').map(cur => {
      if(cur) return parseInt(cur);
    });
  treeArray.pop();
  const solution = pyramidPuzzle(treeArray, target, rows);
  solver = solution.join(',');
  fs.writeFile('output.txt', solver, (err) => {

    // In case of a error throw err.
    if (err) throw err;
  })
});

//a function to get all possible answers for main function pyramidPuzzle
const possibleAnswers = rows => {
  const baseAnswers = ['L', 'R'];
  if (rows === 2) return baseAnswers;
  let currentAnswers = [...baseAnswers];
  let result;
  while (rows > 2) {
    result = [];
    for (let index = 0; index < currentAnswers.length; index++) {
      result.push(currentAnswers[index] + 'L');
      result.push(currentAnswers[index] + 'R');
    }
    rows--;
    currentAnswers = [...result];
  }
  return result;
}

//a function to check correctness of one possible answer
const checkAnswer = (treeArray, target, answer) => {
  let totalValue = target;
  totalValue /= treeArray[0];
  let currentRow = 1;
  let currentPossition = 0;
  while ( answer ) {
    answer[0] === 'L'
      ? currentPossition += currentRow
      : currentPossition += currentRow + 1;
    currentRow++;
    totalValue /= treeArray[currentPossition];
    answer = answer.substring(1);
  }
  return totalValue === 1 ? true : false;
}

//main function to get all correct answers
const pyramidPuzzle = (treeArray, target, rows) => {
  const answers = possibleAnswers(rows);
  let allAnswers = [];
  for(let index = 0; index < answers.length; index++) {
    if(checkAnswer(treeArray, target, answers[index])) {
      allAnswers.push(answers[index]);
    }
  }
  return allAnswers;
}
