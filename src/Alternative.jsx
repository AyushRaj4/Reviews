import { useState } from "react";
import people from "./data";
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa";

const Alternative = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () =>
    setIndex((currentIndex) => (currentIndex + 1) % people.length);
  const prevPerson = () => {
    setIndex((index) => {
      const prevInd = index !== 0 ? index : people.length;
      return prevInd - 1;
    });
  };

  const randomPerson = () => {
    let ind = Math.floor(Math.random() * people.length);
    if (ind === index) ind = index + 1;
    setIndex(checkNumber(ind));
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
export default Alternative;
