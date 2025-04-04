const person = {
//properties of the object which are called attributes
  name: "Alice",
  age: 30,
  //method of an object which is simply function of the object
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
//This is how we can access the properties of an object
console.log(person.name); // Alice

//this is how we can access the method of an object
person.greet(); // Hello, Alice

//this is how we can add a new property to an object
person.city= "mahendranagar";
console.log(person.city); // mahendranagar