import React from 'react';
import PropTypes from 'prop-types';

function LightCTAA(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-start mx-auto lg:w-2/3 sm:flex-row sm:items-center">
          <h1 className="flex-grow text-2xl font-medium text-gray-900 sm:pr-16 title-font">
            Slow-carb next level shoindxgoitch ethical authentic, scenester
            sriracha forage.
          </h1>
          <button
            className={`flex-shrink-0 text-white bg-${props.theme}-500 border-0 py-2 px-8 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg mt-10 sm:mt-0`}
          >
            Button
          </button>
        </div>
      </div>
    </section>
  );
}

LightCTAA.defaultProps = {
  theme: 'indigo',
};

LightCTAA.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightCTAA;
