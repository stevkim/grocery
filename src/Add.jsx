/* eslint-disable react/prop-types */
import { useState } from 'react';


const Add = ({ handleAdd }) => {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(newItem);
    setNewItem('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
      <button type='submit'>Add to List</button>
    </form>
  )
}

export default Add;