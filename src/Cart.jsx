import { useState } from 'react';


function App(){



const [productName,setproductName] = useState('');
const [productPrice,setproductPrice] = useState('');


const handleProductChange = (e)=>{
  setproductName(e.target.value);
}
const handlePriceChange = (e)=>{
  setproductPrice(e.target.value);
}

const handleProductAdd = ()=>{
 

  productName('');
  productPrice('');
}

const handleTodoDelete =()=>{

}


return(
  <>
    <h1>Cart</h1>
    <input type="text" value={productName} onChange={handleProductChange}/>
    <input type="number" value={productPrice} onChange={handlePriceChange}/>
    <button onClick={handleProductAdd}>新增</button>

    <ul>
    </ul>
  </>
)

}

export default App;