import { useState } from 'react';
import './App.css'

function App() {

  const [items, setItems] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [nextOrderNum, setNextOrderNum] = useState(1);

  const handleProductChange = (e) => {
    setProductName(e.target.value);
  }
  const handlePriceChange = (e) => {
    setProductPrice(e.target.value);
  }

  // 1. 新增商品處理函式
  const handleAddItem = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    const price = Number(productPrice);
    if (!productName.trim() || isNaN(price) || price <= 0) {
      alert('請輸入有效的商品名稱和價格（價格需為正數）。');
      return;
    }
    const newItem = {
      id: Date.now(),
      orderNumber: nextOrderNum,
      name: productName.trim(),
      price: price,
    };
    setItems(prevItems => [...prevItems, newItem]);
    setNextOrderNum(prevNum => prevNum + 1);
    setProductName('');
    setProductPrice('');
  }

  // 2. 刪除商品處理函式
  const handleDeleteItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  //3.編輯商品處理函式
  /*const handleEditItem = (itemToEdit) => {
    const newName = prompt('請輸入新的商品名稱：', itemToEdit.name);
    if (newName === null) return;
    const newPriceString = prompt('請輸入新的商品價格：', itemToEdit.price);
    if (newPriceString === null) return;
    const newPrice = Number(newPriceString);
    if (!newName.trim() || isNaN(newPrice) || newPrice <= 0) {
      alert('輸入的名稱或價格無效。');
      return;
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemToEdit.id
          ? { ...item, name: newName.trim(), price: newPrice }
          : item
      )
    );
  };*/

  // --- 計算總金額 (直接計算) ---
  const totalAmount = items.reduce((sum, item) => sum + item.price, 0);


  return (
    <>
      <h1 >購物車</h1>

      <form onSubmit={handleAddItem}>
        <input type="text" value={productName} placeholder="商品名稱" onChange={handleProductChange} required />
        <input type="number" value={productPrice} placeholder="商品價格" onChange={handlePriceChange} required />
        <button type='submit'>新增</button>
      </form>

      <h2>購物車內容</h2>

      {items.length === 0 ? (
        <p>購物車內無商品</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <span>{/* title="點擊以編輯" onClick={() => handleEditItem(item)} */}
                {item.orderNumber}. {item.name} - ${item.price.toFixed(1)}
              </span>
              <button onClick={() => handleDeleteItem(item.id)}>刪除</button>
            </li>
          ))}
        </ul>
      )}

      <h3>
        總金額: ${totalAmount.toFixed(1)}
      </h3>
    </>
  )

}



export default App;

