import React, { useState } from 'react'

const Func = (newProps) => {
    const [count ,setCount] =useState(0);
    const [isLogin,setIsLogin]=useState(true)
    console.log(newProps);
    const OnIncrement=()=>{
        setCount(count+1)
    }
    const OnDecrement=()=>{
        setCount(count-1)
    }
    const listItems=[{
      id:0,
      title:"List1"
    },
    {
      id:1,
      title:"List2"
    },
    {
      id:2,
      title:"List3"
    }]
  return (
    <div>
      {isLogin?
      <>
        <h2>Functional Compenent</h2>
        <h1> Count is {count}</h1>
        <button onClick={()=>OnIncrement()}>Increment</button>
        <button onClick={OnDecrement}>Decrement</button>
        <div>
        {/* list &key */}
          <ul>
            {listItems.map((eachitem)=>
                  <li key={eachitem.id}>{eachitem.title}</li>
            )}
       
          </ul>
        </div>
        </>

      :<h1>still loading</h1>} 
    </div>
  )
}

export default Func