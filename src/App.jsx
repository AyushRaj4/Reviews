import { useState } from "react";
import people from "./data";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () =>
    setIndex((currentIndex) => (currentIndex + 1) % people.length);
  const prevPerson = () => {
    setIndex((index) => {
      return (index - 1 + people.length) % people.length;
    });
  };

  const randomPerson = () => {
    let ind = Math.floor(Math.random() * people.length);
    if (ind === index)
      ind = index + 1;
    setIndex(ind % people.length);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn">
            <FaChevronLeft onClick={prevPerson} />
          </button>
          <button className="next-btn">
            <FaChevronRight onClick={nextPerson} />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
