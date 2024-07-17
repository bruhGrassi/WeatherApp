import "./Skeleton.css";

const Skeleton = () => {
  return (
    <section className="wrapper">
      <aside className="aside">
        <div className="today-weather">
          <div className="today-weather__header skeleton"></div>

          <div className="today-weather__image skeleton"></div>

          <div className="today-weather__climate skeleton "></div>
        </div>
      </aside>
      <main className="main">
        <div className="main__header skeleton"></div>
        <div className="main__weather ">
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              className="weather-card skeleton skeleton__card"
            ></div>
          ))}
        </div>

        <p className="main__highlight--text skeleton"></p>

        <div className="main__highlight">
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              className="highlight-card skeleton skeleton__card"
            ></div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Skeleton;
