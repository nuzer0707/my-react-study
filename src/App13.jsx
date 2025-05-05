function App(){

  let count =0;
  function handleClick(){
    count++;  //更新 count
    document.getElementById('count').textContent = count;

  }

  return(
    <>
      <div id="count">0</div>
      <button onClick={handleClick}> 按我一下 count 可以 + 1</button>
    </>
  )

}
export default App