const user = {
    name: "John Doe",
    age: 25
  };
  
  // Create a unique Symbol for the hidden ID
  const userId = Symbol("id");
  
  // Assign it to the object
  user[userId] = 12345;
  
  console.log(user); 
  // Output: { name: 'John Doe', age: 25, [Symbol(id)]: 12345 }
  
  console.log(user[userId]); 
  // Output: 12345 (only accessible with the Symbol key)