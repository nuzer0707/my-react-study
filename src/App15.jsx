//useState 事件處理 展開運算子
import React, { useState } from "react"

function App(){

  const [inputMessage,setInputMessage] = useState('');
  const [messages,setMessages] = useState([]);

  const handleInputChange = (e)=>{
    //e.target.value 是 input 欄位內容 
    //
  setInputMessage(e.target.value);
  }

  const handleKeyDown =(e)=>{
    if(e.key === 'Enter'){
      handleAddMessage();
    }

  }

  const handleAddMessage = ()=>{
    //setMessages(messages.concat(inputMessage));
    setMessages([...messages,inputMessage]);//展開運算子
  }



return(<>
  <input type="text" value={inputMessage} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
  <button onClick={handleAddMessage}>Send</button><br />
  {messages}
  <p />
  <ul>
    {
      messages.map((message,index)=>(
        <li key={index}>{index}: {message}</li>
      ))
    }
  </ul>
</>)


}
export default App