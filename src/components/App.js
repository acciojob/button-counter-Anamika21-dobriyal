
import React, { useState }  from "react";
import './../styles/App.css';

const App = () => {

  // State to track the button click count
  const [count, setCount] = useState(0);

  // Event handler to increment the count
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} times.</p>
      <button onClick={handleButtonClick}>Click Me</button>

    </div>
  )
}

export default App
