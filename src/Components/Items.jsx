import React from 'react'

const Items = ({id, name, quantity, unitCost, img, removeItem}) => {
     const totalCost = unitCost * quantity
  return (
    <article className = 'item'>
        <img src={img} alt={name} className='img-1'/>
        <div className='item-text'>
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p>Unit Price: £{unitCost}</p>
            <p>Total cost: £{totalCost.toFixed(1)}</p>
            <button className='button-7' onClick={()=> removeItem(id)}>Remove item</button>
        </div>
    </article>
  );
};

export default Items
