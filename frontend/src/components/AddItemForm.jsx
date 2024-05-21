import React, { useState } from 'react';

const AddItemForm = ({ handleAddItem }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [inventory, setInventory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleAddItem({ name, price, inventory });
      setName('');
      setPrice('');
      setInventory('');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div style={{display:"flex", justifyContent:"center", margin:"5px", padding:"2px"}}>
            <div>
            <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input className="input" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Price" required />
            <input className="input" type="number" value={inventory} onChange={(e) => setInventory(Number(e.target.value))} placeholder="Inventory" required />
            </div>
        </div>
        <div style={{display:"flex", justifyContent:"center", margin:"5px", padding:"2px"}}> 
          <button className="btn-add"  type="submit">Add Item</button>
        </div>
    </form>
  );
};

export default AddItemForm;
