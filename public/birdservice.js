const Birds = [
  { id: 1, name: 'Jack', breed: 'Parrots', age: 4 },
  { id: 2, name: 'Lucy', breed: 'Finches', age: 5 },
  { id: 3, name: 'Charlie', breed: 'Canaries', age: 3 },
  { id: 4, name: 'Mona', breed: 'Araucana', age: 4 },
  { id: 5, name: 'Coco', breed: 'Harz Roller', age: 2 }
];  
  // Service function to get all food items
  const getAllBirds = () => {
    return Birds;
  };
  
  module.exports = {
    getAllBirds
  };