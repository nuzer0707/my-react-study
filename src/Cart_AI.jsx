import React, { useState } from 'react'; // 只引入 useState

// 主應用程式組件
function App() {
  // --- 狀態管理 ---
  const [items, setItems] = useState([]); // 購物車商品列表
  const [productName, setProductName] = useState(''); // 新增商品名稱輸入
  const [productPrice, setProductPrice] = useState(''); // 新增商品價格輸入
  const [nextOrderNum, setNextOrderNum] = useState(1); // 追蹤下一個商品序號

  // --- 商品操作函式 ---

  // 1. 新增商品處理函式
  const handleAddItem = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
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
  };

  // 2. 刪除商品處理函式
  const handleDeleteItem = (idToDelete) => {
    setItems(prevItems => prevItems.filter(item => item.id !== idToDelete));
  };

  // 3. 編輯商品處理函式
  const handleEditItem = (itemToEdit) => {
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
  };

  // --- 計算總金額 (直接計算) ---
  const totalAmount = items.reduce((sum, item) => sum + item.price, 0);

  // --- JSX 渲染 (無內聯樣式) ---
  return (
    <div>
      <h1>購物車</h1>

      {/* ----- 新增商品區塊 ----- */}
      <form onSubmit={handleAddItem}>
        <h3>新增商品</h3>
        <input
          type="text"
          placeholder="商品名稱"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="商品價格"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          min="0.01"
          step="0.01"
          required
        />
        <button type="submit">
          新增
        </button>
      </form>

      {/* ----- 購物車內容區塊 ----- */}
      <div>
        <h2>購物車內容</h2>
        {items.length === 0 ? (
          <p>購物車內無商品</p>
        ) : (
          <ul>
            {items.map((item) => ( // 使用 item.orderNumber 顯示編號
              <li key={item.id}>
                <span
                  onClick={() => handleEditItem(item)}
                  title="點擊以編輯"
                >
                  {item.orderNumber}. {item.name} - ${item.price.toFixed(2)}
                </span>
                <button onClick={() => handleDeleteItem(item.id)}>
                  刪除
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ----- 總金額顯示 ----- */}
      <h2>
        總金額: ${totalAmount.toFixed(2)}
      </h2>
    </div>
  );
}

export default App;