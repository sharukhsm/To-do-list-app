import React from "react";

function ToDoItem(props) {
  return (
    // 2.2 Getting onChecked from props
    //2.4 Sending id back to onChecked function
    /*2.7  <div onClick={props.onChecked(props.id)}>. In JS whenever
     there is something inside a function, we are calling it rather than passing it. In the above case
     props.id can't be passed like this. If we do the ToDoItem components renders 
     every time we call it and that is not what we want. We just want the id only when the ToDoItem is clicked. 
     So instead we can create a function inside the onClick so, when the ToDoItem is clicked only then
      the function is triggered. */
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;

// 1.0. Strike-through method
// function ToDoItem(props) {
//   const [isDone, setIsDone] = useState(false);

//   function handleClick() {
//     setIsDone((prevValue) => {
//       return !prevValue;
//     });
//   }

//   return (
//     <div onClick={handleClick}>
//       <li style={{ textDecoration: isDone ? "line-through" : null }}>
//         {props.item}
//       </li>
//     </div>
//   );
// }

// export default ToDoItem;
