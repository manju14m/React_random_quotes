
import React, { useState } from 'react';
import Manju from './manju';
function App() {

  const [value , setValue] = useState(true);

  return (
    <div className="App">
        <Manju  value = {value} setValue={setValue} name={"Manju"}   />
    </div>
  );
}

export default App;
