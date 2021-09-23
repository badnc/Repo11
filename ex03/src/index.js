var myPetsArray = ["Dog", "Cat"];
function myArrayFunction(myPets) {
  var myNewPets = [...myPets];
  myNewPets.push("Bird", "Fish");

  var firstPet = myNewPets;
  firstPet.pop();
  firstPet.pop();

  var lastPet = myNewPets;
  lastPet.push("Bird", "Fish");

  myNewPets.pop();
  myNewPets.shift();
  myNewPets.unshift("Lion");

  return myNewPets;
}

console.log(myArrayFunction(myPetsArray));
module.exports =myArrayFunction;
