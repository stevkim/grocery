/* eslint-disable react/prop-types */
import ListItem from './ListItem';
import { Fragment } from 'react';

const List = ({ groceryList, handleAddMore }) => {

  return (
    <div>
      {
        groceryList.map((item, index) => {
          return (
            <Fragment key={index}>
              <ListItem item={item} handleAddMore={handleAddMore}/>
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default List;