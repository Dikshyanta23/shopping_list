import { useState } from 'react'
import './index.css';
import data from './data';
import Items from './Components/Items';

function App() {
  const [list, setList] = useState(data)
  const removeItem = (id) => {
    const newList = list.filter((item)=> item.id!== id)
    setList(newList)
  }
  var totalCost = 0;
  if (list.length == 0) {
    return (
      <main>
        <div className="container">
          <h2 className="topic">No items on the list</h2>
          <button onClick={() => setList(data)} className='button-7'>Retrieve items</button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <div className="container">
        <span className="header">
          <h2>Shopping list</h2>
        </span>

        {list.map((element) => {
          totalCost += element.quantity * element.unitCost
          return <Items key={element.id} {...element} removeItem = {removeItem}/>;
        })}
        <span className = 'button-bar'>
          <p>Total cost: £{totalCost}</p>
          <button className='button-7' onClick={()=> setList([])}>Clear list</button>
        </span>
      </div>
    </main>
  );
}

export default App
