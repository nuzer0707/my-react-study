import './App.css'
import React,{useState} from "react"


function App(){

 
  const [todo,setTodo] = useState('');
  const [todos,setTodos] = useState(['吃早餐','做體操','寫程式']);  

  const handleInputChange = (e)=>{
    //e.target.value 是 input 欄位內容 
    //
  setTodo(e.target.value);

  }

  const handleKeyDown =(e)=>{
    if(e.key === 'Enter'){
      handleAddtodo();
    }

  }

  const handleAddtodo = ()=>{
    //setTodos(todos.concat(todo));
    setTodos([...todos,todo]);//展開運算子
    setTodo('');//清空欄位

  }


  return(<>

      <h1>My TodoList</h1>
      <div>
        <input type="text" value={todo} onChange={handleInputChange} onKeyDown={handleKeyDown} />
        <button onClick={handleAddtodo}>加入</button>
      </div>
      <ul>

        {
           todos.map((todo,index)=>(
          <li key={index}><input  type="checkbox" />{todo}</li>
        ))
        }
        

      </ul>
      

  </>)
}
export default App