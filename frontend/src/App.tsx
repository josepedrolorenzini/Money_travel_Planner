import { useCallback, useState, useEffect, useMemo } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [datos, setDatos] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3000/api/ideas");
      const data = await response.json();
      setDatos(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useMemo(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <section id="center">
        <div className="hero"></div>
        <div>
          <h1>Money Travel Planner</h1>
        </div>
        <div>
          {datos &&
            datos.map((idea) => {
              return (
                <p key={idea.id} id={idea.id}>
                  {idea.title}
                </p>
              );
            })}
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
