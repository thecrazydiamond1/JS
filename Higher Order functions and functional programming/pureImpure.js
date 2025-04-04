//pure function which always returns the same result for the same input and has no side effects
function add(a, b) {
    return a + b;
  }
  
  console.log(add(2, 3)); // 5
  console.log(add(2, 3)); // 5 (always the same result)

  //impure function which may return different results for the same input or has side effects
  let total = 0;

  function addToTotal(value) {
    total += value;
  }
  
  addToTotal(5);
  console.log(total); // 5 (modifies external variable, impure)
    