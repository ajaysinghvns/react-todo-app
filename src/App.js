import React, {useState} from 'react'
import './App.css';
import ToDoList from './ToDoList';


function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = (event) =>{
    event.preventDefault();

    setItems((oldItems)=>{
      return [...oldItems, inputList];
    });
    setInputList("");
  };  

  const deleteItems = (id) => {
    // console.log('deleted');

    setItems((oldItems)=>{
      return oldItems.filter((arrElem, index)=>{
        return index !== id ;
      })
    })
    // alert("Deleted item is : "+(id+1));
  }

  return (
    <div className="main_div">
       <form action="#" onSubmit={listOfItems}>
       <input type="text" onChange={itemEvent} value={inputList} placeholder="Add a Item" autoComplete="off" required />
       <button>+</button>
       </form>
     <div className="center_div">
       <h1>ToDo List</h1>
      
       <ol>
         {/* <li>{inputList}</li> */}
        { items.map( (itemVal, index)=>{
          return <ToDoList 
            key={index} 
            id={index}
            text={itemVal}
            onSelect={deleteItems}
            />;
         })}
       </ol>
     </div>
    </div>
  );
}

export default App;
