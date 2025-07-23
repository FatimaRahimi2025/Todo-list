import { useState } from "react";

function App() {
  // state hook - 'useState'
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  
  // Helper function

  function addItem(){
    if(!newItem){
      alert("Enter an item.");
      return;
    };

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("");
  };

   function deleteItem(id) {
     const newArray = items.filter(item => item.id !== id);
     setItems(newArray);
   }
  return(
    <div className="text-center">
     {/* 1.Header */}
      <h1 className="font-bold text-4xl p-5">Todo List App</h1>
      {/* 2.input (input and button) */}
      <input className="p-[4px] mr-[8px] outline-orange-400 border-2 rounded-md border-gray-400 " type="text"  placeholder="Add and item..." value={newItem}
      onChange={e => setNewItem(e.target.value)}/>
      <button className="bg-gray-100 px-2 border-2 border-gray-400 rounded-md text-sm font-semibold py-1" onClick={() => addItem()}>Add</button>
      {/* 3.list of items (unordred list with list items) */}
     <ul className="list-none">
      {items.map(item => {
        return(
          <li className="mt-[12px] mr-[0] mb-[12px] ml-[0]"  key={item.id}>{item.value} <button className="text-[13px] px-1 ml-[8px] border-none text-white rounded-md pt-[4px]
          pb-[4px] bg-gray-200 " onClick={() => deleteItem(item.id)}>❌</button></li>
        )
      })}
    </ul>
 </div>

  )
 }

export default App;