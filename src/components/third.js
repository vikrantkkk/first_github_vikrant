import { useState } from 'react';
export default function Greet() {
  let [count, setCount] = useState(0);
  const arrgreet = ['Hi', 'Hello', 'Wish u a happy birthday', 'good nigh'];
  const greetings = () => {
      if(count<arrgreet.length){
        setCount(count+1)
      }else{
        setCount(count=0)
      }
  };
  return (
    <div>
      <>===================================================================</><pre/>
      <button onClick={greetings}>Click Me </button>
      <h1>{arrgreet[count]}</h1>
    </div>
  );
}
