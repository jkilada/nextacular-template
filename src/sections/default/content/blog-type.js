import React from 'react';
import PropTypes from 'prop-types';

function LightContentH(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 overflow-hidden bg-gray-200 rounded">
            <div className={`w-24 h-full bg-${props.theme}-500`}></div>
          </div>
          <div className="flex flex-col flex-wrap py-6 mb-12 sm:flex-row">
            <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:w-2/5 title-font sm:mb-0">
              Space The Final Frontier
            </h1>
            <p className="pl-0 text-base leading-relaxed sm:w-3/5 sm:pl-10">
              Street art subway tile salvia four dollar toast bitters selfies
              quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
              Viral gochujang bitters dreamcatcher.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
            <div className="h-64 overflow-hidden rounded-lg">
              <img
                alt="content"
                className="object-cover object-center w-full h-full"
                src="https://dummyimage.com/1203x503"
              />
            </div>
            <h2 className="mt-5 text-xl font-medium text-gray-900 title-font">
              Shooting Stars
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
            <a
              href
              className={`text-${props.theme}-500 inline-flex items-center mt-3`}
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
          <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
            <div className="h-64 overflow-hidden rounded-lg">
              <img
                alt="content"
                className="object-cover object-center w-full h-full"
                src="https://dummyimage.com/1204x504"
              />
            </div>
            <h2 className="mt-5 text-xl font-medium text-gray-900 title-font">
              The Catalyzer
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
            <a
              href
              className={`text-${props.theme}-500 inline-flex items-center mt-3`}
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
          <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
            <div className="h-64 overflow-hidden rounded-lg">
              <img
                alt="content"
                className="object-cover object-center w-full h-full"
                src="https://dummyimage.com/1205x505"
              />
            </div>
            <h2 className="mt-5 text-xl font-medium text-gray-900 title-font">
              The 400 Blows
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
            <a
              href
              className={`text-${props.theme}-500 inline-flex items-center mt-3`}
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
      </div>
    </section>
  );
}

LightContentH.defaultProps = {
  theme: 'indigo',
};

LightContentH.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightContentH;
