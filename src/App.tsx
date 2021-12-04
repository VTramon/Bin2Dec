import React, { FormEvent, useState } from 'react';
import style from './style.module.scss';

function App() {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState<number>();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (binary.match(/^[0-1]+$/) === null) {
      return alert('numeros binarios contem apenas 0 e 1');
    }

    const invertedBinary = binary.split('').map(Number).reverse();

    const result = invertedBinary.reduce(
      (previousValue, currentValue, index) =>
        previousValue + currentValue * Math.pow(2, index)
    );
    setDecimal(result);
  };
  return (
    <div className={style.app}>
      <div className={style.title}>
        <h1>Bin2Dec</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Conversor de números binários para decimais</h2>
        <div className={style.inputs}>
          <input
            className={style.binary}
            onChange={(event) => setBinary(event.target.value)}
            type="string"
            placeholder="binário"
          />
          <input disabled type="number" placeholder="decimal" value={decimal} />
        </div>
        <button type="submit">converter</button>
      </form>
    </div>
  );
}

export default App;
