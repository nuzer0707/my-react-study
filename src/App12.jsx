

function CircleArea1({r}){
  const pi =3.1415926;
  const area = r*r*pi;
  return (<div>{area}</div>);
}

const CircleArea2 = ({r})=>{
  const pi =3.1415926;
  const area = r*r*pi;
  return (<div>{area}</div>);
}

const Fruit1 = ({fruitName, fruitPrice}) => {
    return (<div>水果名稱:{fruitName} 水果價格:{fruitPrice}</div>)
}

const Fruit2 = (props) => {
  return (<div>水果名稱:{props.fruitName} 水果價格:{props.fruitPrice}</div>)
}

const Fruit3 = (props) => {
  props.printLog();
  return (<div>水果名稱:{props.fruitName} 水果價格:{props.fruitPrice}</div>)
}

function App(){

  return(
    <>
      <CircleArea1 r = "10" />
      <CircleArea2 r = "10" />
      <Fruit1 fruitName = "Apple"  fruitPrice="20"/>
      <Fruit2 fruitName="Banana" fruitPrice="30" />
      <Fruit3 fruitName="Orange" fruitPrice="40" printLog={() => {console.log('我是柳丁')}} />
    </>
  )

}
export default App