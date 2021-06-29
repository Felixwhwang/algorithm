/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  //check rows
  for(let i = 0; i < 9; i++) {
    let st = new Set();
    for(let j = 0; j < 9; j++) {
      if(st.has(board[i][j])) {
        return false;
      }
      if(board[i][j] !== ".") {
        st.add(board[i][j]);
      }
    }
  }

  //check cloumns
  for(let i = 0; i < 9; i++) {
    let st = new Set();
    for(let j = 0; j < 9; j++) {
      if(st.has(board[j][i])) {
        return false;
      }
      if(board[j][i] !== ".") {
        st.add(board[j][i]);
      }
    }
  }

  //check 3x3 sub-boxes
  //00 - 22, 03 - 25, 06 - 28
  //30 - 52, 33 - 55, 36 - 58
  //60 - 82, 63 - 85, 66 - 88
  for(let i = 0; i < 9; i+=3) {
    for(let j = 0; j < 9; j+=3) {
      let st = new Set();
      for(let x = i; x < i + 3; x++) {
        for(let y = j; y < j + 3; y++) {
          if(st.has(board[x][y])) {
            return false;
          }
          if(board[x][y] !== ".") {
            st.add(board[x][y]);
          }
        }
      }
    }
  }

  return true;
};

console.log(isValidSudoku(
  [["5", "3", ".", ".", "7", ".", ".", ".", "."],
   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
   [".", "9", "8", ".", ".", ".", ".", "6", "."],
   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
   [".", "6", ".", ".", ".", ".", "2", "8", "."],
   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
   [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
))
