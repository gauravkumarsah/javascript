import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [charge, setCharge] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (charge < 100) {
        setCharge((prevCharge) => prevCharge + 10);
      } else {
        clearInterval(interval);
        return;
      }
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  console.log(charge);

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
