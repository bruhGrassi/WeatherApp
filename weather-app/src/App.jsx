import { useState } from "React";
import TodayWeather from "./components/TodayWeather/TodayWeather";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  const [isSidebar, setIsSidebar] = useState(false);

  const handleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <>
      <section className="wrapper">
        <aside className="aside">
          {isSidebar ? (
            <Sidebar handleSidebar={handleSidebar} />
          ) : (
            <TodayWeather handleSidebar={handleSidebar} />
          )}
        </aside>
        <main className="main"></main>
      </section>
    </>
  );
}

export default App;
