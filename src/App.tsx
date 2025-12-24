import { useMemo } from "react";

function App() {
  const currentTime = useMemo(() => new Date().toLocaleTimeString(), []);

  return (
    <div className="m-4">
      <h1 className="text-6xl">App Template</h1>
      <div className="card">
        <p>Current Time: {currentTime}</p>
      </div>
    </div>
  );
}

export default App;
