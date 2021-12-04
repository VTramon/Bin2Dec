import React, { FormEvent, useState } from 'react';

function App() {
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState<number>();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (binary.match(/^[0-1]+$/) === null) {
      return <span>numeros binarios contem apenas 0 e 1</span>;
    }

    const invertedBinary = binary.split('').map(Number).reverse();

    const result = invertedBinary.reduce(
      (previousValue, currentValue, index) =>
        previousValue + currentValue * Math.pow(2, index)
    );
    setDecimal(result);
  };
  return (
    <div className="App">
      <h1>Bin2Dec</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>conversor de números binários para decimais</h2>
          <input
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
