import  { useState } from 'react';
import PropTypes from 'prop-types';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="w-full text-left p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span className="text-lg">{question}</span>
          <span className={`transform ${isOpen ? 'rotate-180' : ''}`}>
            &#9660;
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 bg-lime-100">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FaqItem;
