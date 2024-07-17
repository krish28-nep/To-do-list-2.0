import { useState } from "react";
const TodoList = () => {
  const [list, setList] = useState(["eat","run","drink"]);
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const AddTask = () => {
    if (input === "") {
      alert("Text is empty");
      return;
    }
    setList((l) => [...l, input]);
    setInput("");
  };
  const handleDeleteChange = (index) => {
    setList((c) => c.filter((_, i) => i !== index));
  };
  const handleMoveUp = (index) => {
    let newList=[...list];
    if(index>0){
      [newList[index],newList[index-1]]=
      [newList[index-1],newList[index]];
      setList(newList);
    }
  };
  
  const handleMoveDown = (index) => {
    let newList=[...list];
    if(index<list.length-1){
      [newList[index],newList[index+1]]=
      [newList[index+1],newList[index]];
      setList(newList);
    }
  };
  
  return (
    <div className="container">
      <h2>TodoList</h2>
      <div className="Search-bar">
        <input className="search-bar"
          type="text"
          placeholder="enter the text here"
          value={input}
          onChange={handleInputChange}
        />
        <button className="Add-button" onClick={AddTask}>Add</button>
      </div>
      <div style={{marginLeft:"-10rem"}}>
        <ol>
          {list.map((task, index) => (
            <li key={index}>
              {task}&nbsp;
              <button className="Delete-button" onClick={() => handleDeleteChange(index)}>
                <i
                  class="fa fa-trash-o"
                  style={{ fontSize: "20px", color: "red"}}
                ></i>
              </button>
              <span style={{cursor:"pointer"}} onClick={()=>handleMoveUp(index)}>👆</span>
              <span style={{cursor:"pointer"}} onClick={()=>handleMoveDown(index)}>👇</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default TodoList;
