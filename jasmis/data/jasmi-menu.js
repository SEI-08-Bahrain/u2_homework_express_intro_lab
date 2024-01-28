const menuItems = [
  {name: 'Big J', price: 2.400},
  {name: 'Special J', price: 2.500},
  {name: 'Mega J', price: 2.900},
  {name: 'Triple J', price: 2.700},
  {name: 'Spicy Chickee Chicken', price: 2.300},
]

//A function that returns the menuItems 
const getAll = () => {
  return menuItems;
}

//Include the function in the module's exports object
module.exports = { getAll }