function App(){
  
  const items1 = ['Apple','Banana','Orande']

  const items2 = [
      <li key='1'>Apple</li>,
      <li key='2'>Banana</li>,
      <li key='3'>Orande</li>
  ]

  const items3 = items1.map((item,index) => (
    <li key={index}>{index+1}-{item}</li>
  ))

  return(
    <>
      {items1}
      {items2}
      {items3}
    </>
  )
}
export default App