import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  //2.0 Passing deleteItem function as props
  //2.6 Getting id from onChecked
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
        //Even if you don't use the item parameter, we should include it in the filter function.
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              //2.3 Add key and id to uniquely identify each note item while deletion or any modification
              key={index}
              //We should be passing it as an id
              id={index}
              text={todoItem}
              // 2.1 Passing deleteItem function as props
              //2.5 Getting id and sending it to delete function
              onChecked={deleteItem}

              //React recommends not to use index for the key and instead suggests to use UUID.
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

// 1.0. Strike through method
// function App() {
//   const [inputText, setInputText] = useState("");
//   const [items, setItems] = useState([]);

//   function handleChange(event) {
//     const newValue = event.target.value;
//     setInputText(newValue);
//   }

//   function addItem() {
//     setItems((prevItems) => {
//       return [...prevItems, inputText];
//     });
//     setInputText("");
//   }

//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>To-Do List</h1>
//       </div>
//       <div className="form">
//         <input onChange={handleChange} type="text" value={inputText} />
//         <button onClick={addItem}>
//           <span>Add</span>
//         </button>
//       </div>
//       <div>
//         <ul>
//           {items.map((todoItem) => (
//             <ToDoItem
//               item={todoItem} />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;
