import { useState } from 'react';


function App() {
  const [count , setCount ] = useState(0)

  function add(){
    setCount(c=>c+1)
  }

function mins(){
  setCount(c=>c-1)
}
  return (
    <div>
    {
      count >10 ?
      <div  className='Count gray'>

      <h1>{count}</h1>
      <button onClick={add}>+</button>
      <button onClick={mins}>-</button>
      <h3>depasse 10</h3>
      </div>
      : count<0?
      <div  className='Count gray'>

      <h1>{count}</h1>
      <button onClick={add}>+</button>
      <button onClick={mins}>-</button>
      <h3>inferiur a 0</h3>
      </div>:
      <div  className='Count '>

      <h1>{count}</h1>
      <button onClick={add}>+</button>
      <button onClick={mins}>-</button>
      
      </div>

    }
    </div>
  );
}

export default App;
