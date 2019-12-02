

import React, { useState } from 'react';
// Déclare une nouvelle variable d'état, qu’on va appeler « count »
// Déclare une fonction setCount qui permet de modifier la valeur de count

function Counter() {
    const initial = 0;
    const [count, setCount] = useState(initial);

  return (
    <label>
        <input 
            type="text"
            autoFocus 
            value={count}
            onChange={event => setCount(Number(event.target.value))}
            />
            <div>
            <p>Le compteur est  à : {count} </p>
            <button onClick={() => setCount(count + 1)}>
                +1
            </button>
            <button onClick={() => setCount(count - 1)}>
                -1
            </button>
            </div>
    </label>
  );
};

export default Counter;