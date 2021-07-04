import React, { useState } from 'react'
import Button from './Button'

const App = () => {
  const [list, setList] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' },
  ])

  const [input, inputChange] = useState('');

  const updateInput = (e) => {
    inputChange(e.target.value);
    }

  const updateList = () => {
    input !== '' && setList((oldList) => {
      const newList = [...oldList];
      newList.unshift({text: input, id: Math.random().toString()});
      console.log(newList);
      return newList;
    });
    inputChange(''); 
  }

  return (
    <div>
      <ul>
        {list.map((e) => (
          <li key={e.id}>{e.text}</li>
        ))}
      </ul>
      <input value={input} onChange={updateInput}/>
      <Button listUpdate={updateList}/>
    </div>
  )
}

export default App
