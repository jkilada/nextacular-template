import React from 'react';
import PropTypes from 'prop-types';

function LightPricingA(props) {
  return (
    <section className="overflow-hidden text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="mb-2 text-3xl font-medium text-gray-900 sm:text-4xl title-font">
            Pricing
          </h1>
          <p className="mx-auto text-base leading-relaxed text-gray-500 lg:w-2/3">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
          </p>
          <div
            className={`flex mx-auto border-2 border-${props.theme}-500 rounded overflow-hidden mt-6`}
          >
            <button
              className={`py-1 px-4 bg-${props.theme}-500 text-white focus:outline-none`}
            >
              Monthly
            </button>
            <button className="px-4 py-1 focus:outline-none">Annually</button>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="w-full p-4 xl:w-1/4 md:w-1/2">
            <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-gray-300 rounded-lg">
              <h2 className="mb-1 text-sm font-medium tracking-widest title-font">
                START
              </h2>
              <h1 className="pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
                Free
              </h1>
              <p className="flex items-center mb-2 text-gray-600">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Vexillologist pitchfork
              </p>
              <p className="flex items-center mb-2 text-gray-600">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Tumeric plaid portland
              </p>
              <p className="flex items-center mb-6 text-gray-600">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Mixtape chillwave tumeric
              </p>
              <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-gray-400 border-0 rounded focus:outline-none hover:bg-gray-500">
                Button
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="mt-3 text-xs text-gray-500">
                Literally you probably haven&apos;t heard of them jean shorts.
              </p>
            </div>
          </div>
          <div className="w-full p-4 xl:w-1/4 md:w-1/2">
            <div
              className={`h-full p-6 rounded-lg border-2 border-${props.theme}-500 flex flex-col relative overflow-hidden`}
            >
              <span
                className={`bg-${props.theme}-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl`}
              >
                POPULAR
              </span>
              <h2 className="mb-1 text-sm font-medium tracking-widest title-font">
                PRO
              </h2>
              <h1 className="flex items-center pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
                <span>$38</span>
                <span className="ml-1 text-lg font-normal text-gray-500">
                  /mo
                </span>
              </h1>
              <p className="flex items-center mb-2 text-gray-600">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Vexillologist pitchfork
              </p>
              <p className="flex items-center mb-2 text-gray-600">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Tumeric plaid portland
              </p>
              <p className="flex items-center mb-2 text-gray-600">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Hexagon neutra unicorn
              </p>
              <p className="flex items-center mb-6 text-gray-600">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Mixtape chillwave tumeric
              </p>
              <button
                className={`flex items-center mt-auto text-white bg-${props.theme}-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-${props.theme}-600 rounded`}
              >
                Button
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="mt-3 text-xs text-gray-500">
                Literally you probably haven&apos;t heard of them jean shorts.
              </p>
            </div>
          </div>
          <div className="w-full p-4 xl:w-1/4 md:w-1/2">
            <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-gray-300 rounded-lg">
              <h2 className="mb-1 text-sm font-medium tracking-widest title-font">
                BUSINESS
              </h2>
              <h1 className="flex items-center pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
                <span>$56</span>
                <span className="ml-1 text-lg font-normal text-gray-500">
                  /mo
                </span>
              </h1>
              <p className="flex items-center mb-2 text-gray-600">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Vexillologist pitchfork
              </p>
              <p className="flex items-center mb-2 text-gray-600">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Tumeric plaid portland
              </p>
              <p className="flex items-center mb-2 text-gray-600">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Hexagon neutra unicorn
              </p>
              <p className="flex items-center mb-2 text-gray-600">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Vexillologist pitchfork
              </p>
              <p className="flex items-center mb-6 text-gray-600">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Mixtape chillwave tumeric
              </p>
              <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-gray-400 border-0 rounded focus:outline-none hover:bg-gray-500">
                Button
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="mt-3 text-xs text-gray-500">
                Literally you probably haven&apos;t heard of them jean shorts.
              </p>
            </div>
          </div>
          <div className="w-full p-4 xl:w-1/4 md:w-1/2">
            <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-gray-300 rounded-lg">
              <h2 className="mb-1 text-sm font-medium tracking-widest title-font">
                SPECIAL
              </h2>
              <h1 className="flex items-center pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
                <span>$72</span>
                <span className="ml-1 text-lg font-normal text-gray-500">
                  /mo
                </span>
              </h1>
              <p className="flex items-center mb-2 text-gray-600">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Vexillologist pitchfork
              </p>
              <p className="flex items-center mb-2 text-gray-600">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Tumeric plaid portland
              </p>
              <p className="flex items-center mb-2 text-gray-600">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Hexagon neutra unicorn
              </p>
              <p className="flex items-center mb-2 text-gray-600">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Vexillologist pitchfork
              </p>
              <p className="flex items-center mb-6 text-gray-600">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-400 rounded-full">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Mixtape chillwave tumeric
              </p>
              <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-gray-400 border-0 rounded focus:outline-none hover:bg-gray-500">
                Button
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <p className="mt-3 text-xs text-gray-500">
                Literally you probably haven&apos;t heard of them jean shorts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

LightPricingA.defaultProps = {
  theme: 'indigo',
};

LightPricingA.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightPricingA;
