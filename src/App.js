import React from 'react';
import ComponentWithDomApi from './ComponentWithDomApi';
import ComponentWithRefRead from './ComponentWithRefRead';

function App() {
  return (
    <div>
      <ComponentWithDomApi
        label="Label"
        value="Value"
        isFocus
      />
      <ComponentWithRefRead />
    </div>
  );
}

export default App;
