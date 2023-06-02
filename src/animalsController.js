
const inform = console.log

//// CRUD Application
/*

    C reate
    R ead
    U pdate
    D estroy

*/



// READing (All of the data in a Collection)
function index (arrayOfAnimals){
    return arrayOfAnimals.map((eachAnimal) => eachAnimal.id + " " + eachAnimal.name).join("\n");
}



function show (arrayOfAnimals, animalId){
    const animalToFind = arrayOfAnimals.find((animal) => animal.id === animalId);

    return animalToFind.id + " " + animalToFind.name + " " + animalToFind.points + " points";
}



function create (animals, animalName) {
    const newAnimal = {
      name: animalName,
    //   id: nanoid(4),
      points: animalPoints[animalName],
    };
    animals.push(newAnimal);
    return animals;
}



function destroy(animals, animalId) {
    const index = animals.findIndex((animal) => animal.id === animalId);
    if (index > -1) {
      animals.splice(index, 1);
      inform("Animal successfully removed from collection");
      return animals;
    } else {
      inform("Animal not found. No action taken");
      return animals;
    }
}
  

function edit(animals, animalId, updatedAnimal) {
    const index = animals.findIndex((animal) => animal.id === animalId);
    if (index > -1) {
        animals[index].id = animalId;
        animals[index].name = updatedAnimal;
        animals[index].points = animalPoints[updatedAnimal];
        inform("Animal successfully updated");
        return animals;
    } else {
        inform("Animal not found. No action taken");
        return animals;
    }
}


module.exports = { index, show, create, destroy, edit }