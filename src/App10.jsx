/*
{id:1, name:'小明', score:55},
{id:2, name:'小美', score:78},
{id:3, name:'小華', score:92},
{id:4, name:'阿強', score:40},

顯示 table 樣式
id | name | score | pass
 1   小明    55      X 
 2   小美    78      V 
 3   小華    92      V 
 4   阿強    40      X 
全班平均: XX

試著拆分父子組件
*/

//表頭
function ScoreTableHeader(){
  return(
   <thead>
     <tr>
      <th>ID</th><th>名稱</th><th>分數</th><th>及格</th>
      </tr>
    </thead>
   )
}

//表身
function ScoreTableBody({students}) {
  return (
      <tbody>
          {
              students.map((student) => {
                  const psaa = student.score >=60 ? "V" : "X";
                  return (
                      <tr>
                          <td>{student.id}</td>
                          <td>{student.name}</td>
                          <td align="center">{student.score}</td>
                          <td align="right">{psaa}</td>
                      </tr>
                  );
              })
          }
      </tbody>
  )
}

//表尾
function ScoreTableFooter({totalPrice}) {
  return (
      <tfoot>
          <tr>
              <td align="right">平均</td>
              <td colSpan="3" align="left">{totalPrice}</td>
          </tr>
      </tfoot>
  )
}

//主表
function ScoreTable({students, totalPrice}){
  return(
    <table border='1'>
      <ScoreTableHeader/>
      <ScoreTableBody students={students}/>
      <ScoreTableFooter totalPrice={totalPrice}/>
    </table>
  )

}

function App(){

  const students = [
    {id:1, name:'小明', score:55},
    {id:2, name:'小美', score:78},
    {id:3, name:'小華', score:92},
    {id:4, name:'阿強', score:40},
  ]

  const totalPrice = students.reduce((sum, students) => sum + students.score, 0)/students.length;

  return(
    <>
    <h1>成績單 </h1>
    <ScoreTable students={students} totalPrice={totalPrice}/>
    </>
  )

}

export default App