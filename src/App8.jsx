/*
商品資料如下:
{ id: 1, name: '蘋果', price: 40, category: '水果' },
{ id: 2, name: '洗髮精', price: 120, category: '日用品' },
{ id: 3, name: '香蕉', price: 55, category: '水果' },
{ id: 4, name: '牙膏', price: 45, category: '日用品' }
請利用 react 將上述商品資料透過 jsx + <table> 標籤呈現
*/
const items =[
  { id: 1, name: '蘋果', price: 40, category: '水果', qty:2 },
  { id: 2, name: '洗髮精', price: 120, category: '日用品', qty:4 },
  { id: 3, name: '香蕉', price: 55, category: '水果', qty:6 },
  { id: 4, name: '牙膏', price: 45, category: '日用品', qty:8 }
]

const total = items.reduce((sum,product)=> sum + (product.price*product.qty),0)



function App() {
  return (
   <>
    <h1>商品列表</h1>
    <table border-collapse="collapse">
    <thead>
      <tr>
        <th>ID</th>
        <th>名稱</th>
        <th>價格</th>
        <th>數量</th>
        <th>小計</th>
        <th>類別</th>
      </tr>
    </thead>
    <tbody>
      {
        items.map((item,index)=>(  
          <tr>
            <th>{item.id}</th>
            <th>{item.name}</th>
            <th align="right">{item.price}</th>
            <td align="right">{item.qty}</td>
            <td align="right">{item.price*item.qty}</td>
            <th>{item.category}</th>
          </tr>
         ))
      }
    </tbody>
    <tfoot>
      <tr>
        <td colSpan="4" align="right">總金</td>
        <td align="right">{total}</td>
        <td></td>
      </tr>
    </tfoot>
  </table> 
   </>
  )
}

export default App
