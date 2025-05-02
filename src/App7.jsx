function App(){
  
  const items = [
    {id:1,name:'Apple',price:20},
    {id:2,name:'Banana',price:30},
    {id:3,name:'Orange',price:40}
  ]
  //過濾
  /*const filterItem = items.filter((item)=>{
    return item.price > 25;
  })*/

    const filterItem = items.filter((item)=>item.price > 25 )

  //map
  const items2 = filterItem.map((item,index)=>(     
        <div key={item.id}>
          index={index}, id={item.name},price{item.price}
        </div> 
  ))
  

  return(
    <>
      {items2}
      <hr />
      {
        filterItem.map((item,index)=>(
          <div key={item.id}>
            index={index}, id={item.name},price{item.price}
          </div>
        ))
      }
    </>
  )
}
export default App