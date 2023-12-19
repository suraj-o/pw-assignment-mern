

function curry(func) {
    // Store the number of expected arguments for the original function
    const numArgs = func.length;
  
    // Define a recursive helper function to build up the arguments
    function curried(...args) {
      // If enough arguments are provided, execute the original function
      if (args.length >= numArgs) {
        return func(...args);
      } else {
        // If not enough arguments are provided, return a new curried function
        return (...moreArgs) => curried(...args, ...moreArgs);
      }
    }
  
    return curried;
  }
  
  // Test the curry function with a function that adds two numbers
  function add(a, b) {
    return a + b;
  }
  
  const curriedAdd = curry(add);
  
  // Test with partial application
  const add5 = curriedAdd(5);
  const result = add5(3); // Equivalent to add(5, 3)
  
  console.log(result); // Output: 8

  
  