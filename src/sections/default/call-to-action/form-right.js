import React from 'react';
import PropTypes from 'prop-types';

function LightCTAB(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-wrap items-center px-5 py-24 mx-auto">
        <div className="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0">
          <h1 className="text-3xl font-medium text-gray-900 title-font">
            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
          </h1>
          <p className="mt-4 leading-relaxed">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div>
        <div className="flex flex-col w-full p-8 mt-10 bg-gray-100 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
          <h2 className="mb-5 text-lg font-medium text-gray-900 title-font">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="text-sm leading-7 text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className={`w-full bg-white rounded border border-gray-300 focus:border-${props.theme}-500 focus:ring-2 focus:ring-${props.theme}-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="text-sm leading-7 text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full bg-white rounded border border-gray-300 focus:border-${props.theme}-500 focus:ring-2 focus:ring-${props.theme}-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
            />
          </div>
          <button
            className={`text-white bg-${props.theme}-500 border-0 py-2 px-8 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}
          >
            Button
          </button>
          <p className="mt-3 text-xs text-gray-500">
            Literally you probably haven&apos;t heard of them jean shorts.
          </p>
        </div>
      </div>
    </section>
  );
}

LightCTAB.defaultProps = {
  theme: 'indigo',
};

LightCTAB.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightCTAB;
