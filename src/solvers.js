/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function (n) {
  var solution = new Board({ 'n': n });
  for (var row = 0; row < n; row++) {
    for (var col = 0; col < n; col++) {
      solution.togglePiece(row, col);
      if (solution.hasAnyRooksConflicts()) {
        solution.togglePiece(row, col);
      }
    }
  }
  console.log(solution, 'answer')
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  var solutionCount = 0;
  var row = 0;
  var board = new Board({ 'n': n });

  var solve = function (row) {
    if (row === n) {
      solutionCount++;
    } else {
      for (var col = 0; col < n; col++) {
        board.togglePiece(row, col);
        if (!board.hasAnyRooksConflicts()) {
          solve(row + 1);
        }
        board.togglePiece(row, col);
      };

    }
  };
  solve(row);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
