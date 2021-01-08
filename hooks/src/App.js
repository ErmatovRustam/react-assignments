import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([])
  const [change, setChange] = useState(false)

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }
  
  useEffect(() => {
    getData()
  }, [])
  
  const changer = (id) => {
  setData(!change)
}


  return (
    <div className='row'>
      {data.map(item => {
          return (
            <div className = 'col'>
            <div className = 'row'>
              <h2>user: { item.id}</h2>
              <p> {item.name}</p>
                <button onClick={() => changer(item.id)}>{change ? 'close' : 'open'}</button>
              {change ? <p>{item.body}</p> : ''}
            </div>
            </div>
          )
        })}  
    </div>
  );
}

export default App;
