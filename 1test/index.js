import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [charge, setCharge] = useState(0);
  const sentence = " The lazy dog jumped over brown fox ";


  const upDatedSentence = sentence.trim()
  
  
  let len = 0
  for(let i = upDatedSentence.length -1; i >=0; i--){
  console.log("upDatedSentence", i)
      if(upDatedSentence === " "){
        len = upDatedSentence.length - i
        return;
      }
  }
  
  console.log(len)

  return (
    <>
      <div
        style={{
          border: '1px solid red',
          width: '200px',
          height: '30px',
          overflow: 'hidden',
          textAlign: 'left',

        }}
      >
        <div
          style={{ width: `${charge}%`, background: 'green', height: '30px' }}
        >
          {charge}
        </div>
      </div>
    </>
  );
}

export default App;
