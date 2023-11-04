import List from './List';
import { useState, useEffect } from 'react';
import Add from './Add';

const GROCERY_LIST = [{ name: 'strawberries', quantity: 1 }, { name: 'oranges', quantity: 1 }, { name: 'rice', quantity: 2 }];


function App() {
  const [list, setList] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setList(GROCERY_LIST);
  }, [])

  const handleAdd = (itemName) => {
    setList([...list, { name: itemName, quantity: 1}])
  }

  const handleAddMore = (item) => {
    setList(list.map(grocery => {
      if (grocery === item) {
        grocery.quantity++;
      }
      return grocery;
    }))
  }

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle View</button>
      {
        toggle && <List groceryList={list} handleAddMore={handleAddMore} />
      }
      <Add  handleAdd={handleAdd} />
    </>
  )
}

export default App;
