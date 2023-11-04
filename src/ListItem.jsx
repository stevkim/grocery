/* eslint-disable react/prop-types */

const ListItem = ({ item, handleAddMore }) => {


  return (
    <div>
      {
        item.quantity < 10
        ? <>{item.name} <span style={{ marginX: '20px'}}>{item.quantity}</span> <button onClick={() => handleAddMore(item)}>+</button></>
        : <div>too many!</div>
      }
    </div>
  )

}

export default ListItem;