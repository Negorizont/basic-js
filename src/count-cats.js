module.exports = function countCats(matrix) {
  let counter = 0;
  matrix.forEach(function(arr) {
    arr.forEach(function(item) {
      if (item === "^^") {
        counter++;
      }
    });
  }); 
  return counter;
};
