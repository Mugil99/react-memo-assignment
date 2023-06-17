import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[todo,setTodo]=useState([]);
  const[count,setCount]=useState(0)
  const[text,setText]=useState([]);
  const[pushText,setPushText]=useState("");
  function handleText(e){
      setPushText(e.target.value)
      console.log(pushText)
  }
  function handleClick(){
    if(pushText.length>=5){
      setText([...text,pushText]);
      console.log(text);
    }
    setPushText("")
  }
  return (
    <div>
      <h1>React.useMemo</h1>
      
      <ul>
        {
          todo.map((task)=>
            <li>{task}</li>
          )
        }
      </ul>
      <button onClick={()=>{setTodo([...todo,"NewTodo"])}}>add todo</button><br></br><hr></hr>
      <span>Count:{count}</span>
      <button onClick={()=>setCount(count+1)}>+</button><hr></hr>
      <h3>Memo</h3>
      <input type='text' value={pushText} onChange={(e)=>{handleText(e)}}></input><button onClick={handleClick}>Add item</button>
      <ul>
        {
          text.map((item)=>(
            <li>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
