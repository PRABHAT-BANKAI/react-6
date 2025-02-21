import {useState} from "react";

const App = () => {
const [count,setCount]= useState(0)// [state,function]
// console.log(count,setCount)
console.log("rendering ...")
  // const [a,b,c]= [1,2,3]
  // console.log(a,b,c)
  // let count = 0

  function handleInc(){
//  count = count +1
//     console.log(count)
setCount(count+1)
  }
  return (
    <div>
      <h1>hi from react</h1>
      <p className="" style={{color:"red",backgroundColor:"yellow"}} >{count}</p>
      <button onClick={()=>setCount(0)}>increment</button>
      <div>
        <h3>Sports</h3>
        <ul>
          <li>Cricket</li>
          <li>Hockey</li>
          <li>Football</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
