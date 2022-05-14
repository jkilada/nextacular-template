import React from 'react';
import PropTypes from 'prop-types';

function LightContentA(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h2
            className={`text-xs text-${props.theme}-500 tracking-widest font-medium title-font mb-1`}
          >
            ROOF PARTY POLAROID
          </h2>
          <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            Master Cleanse Reliac Heirloom
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&apos;t heard of them man bun deep jianbing selfies heirloom
            prism food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="px-8 py-6 border-l-2 border-gray-200 xl:w-1/4 lg:w-1/2 md:w-full border-opacity-60">
            <h2 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl title-font">
              Shooting Stars
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <a
              href
              className={`text-${props.theme}-500 inline-flex items-center`}
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="px-8 py-6 border-l-2 border-gray-200 xl:w-1/4 lg:w-1/2 md:w-full border-opacity-60">
            <h2 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl title-font">
              The Catalyzer
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <a
              href
              className={`text-${props.theme}-500 inline-flex items-center`}
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="px-8 py-6 border-l-2 border-gray-200 xl:w-1/4 lg:w-1/2 md:w-full border-opacity-60">
            <h2 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl title-font">
              Neptune
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <a
              href
              className={`text-${props.theme}-500 inline-flex items-center`}
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="px-8 py-6 border-l-2 border-gray-200 xl:w-1/4 lg:w-1/2 md:w-full border-opacity-60">
            <h2 className="mb-2 text-lg font-medium text-gray-900 sm:text-xl title-font">
              Melanchole
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery
              hexagon disrupt edison bulbche.
            </p>
            <a
              href
              className={`text-${props.theme}-500 inline-flex items-center`}
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        <button
          className={`flex mx-auto mt-16 text-white bg-${props.theme}-500 border-0 py-2 px-8 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}
        >
          Button
        </button>
      </div>
    </section>
  );
}

LightContentA.defaultProps = {
  theme: 'indigo',
};

LightContentA.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightContentA;
