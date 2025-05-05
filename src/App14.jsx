import { useState } from "react";

function App(){

  const [count,setCount] = useState(0);
  const [count2,setCount2] = useState(0);

  function handleClick(){
    setCount(count+1);
  }
  function handleClick2(){
    setCount2(count2+2);
  }

  return(<>

    <div>{count}</div>
    <div>{count2}</div>
    <button onClick={handleClick}> 按我一下 count 可以 + 1</button>
    <button onClick={handleClick2}> 按我一下 count 可以 + 2</button>
  </>)
}

export default App