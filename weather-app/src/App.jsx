import TodayWeather from "./components/TodayWeather/TodayWeather";
import "./App.css";

function App() {
  return (
    <>
      <section className="wrapper">
        <aside className="aside">
          <TodayWeather />
        </aside>
        <main className="main"></main>
      </section>
    </>
  );
}

export default App;
