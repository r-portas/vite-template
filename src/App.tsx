import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-4">
      <h1 className="text-6xl">App Template</h1>
      <div className="card">
        <button
          tabIndex={1}
          className="bg-blue-400 px-1 py-0.5 m-1 rounded"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
