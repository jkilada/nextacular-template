import React from 'react';
import PropTypes from 'prop-types';

function LightFooterE(props) {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap order-first text-center md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
              CATEGORIES
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a href className="text-gray-600 hover:text-gray-800">
                  First Link
                </a>
              </li>
              <li>
                <a href className="text-gray-600 hover:text-gray-800">
                  Second Link
                </a>
              </li>
              <li>
                <a href className="text-gray-600 hover:text-gray-800">
                  Third Link
                </a>
              </li>
              <li>
                <a href className="text-gray-600 hover:text-gray-800">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
              CATEGORIES
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a href className="text-gray-600 hover:text-gray-800">
                  First Link
                </a>
              </li>
              <li>
                <a href className="text-gray-600 hover:text-gray-800">
                  Second Link
                </a>
              </li>
              <li>
                <a href className="text-gray-600 hover:text-gray-800">
                  Third Link
                </a>
              </li>
              <li>
                <a href className="text-gray-600 hover:text-gray-800">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
              CATEGORIES
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a href className="text-gray-600 hover:text-gray-800">
                  First Link
                </a>
              </li>
              <li>
                <a href className="text-gray-600 hover:text-gray-800">
                  Second Link
                </a>
              </li>
              <li>
                <a href className="text-gray-600 hover:text-gray-800">
                  Third Link
                </a>
              </li>
              <li>
                <a href className="text-gray-600 hover:text-gray-800">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">
              SUBSCRIBE
            </h2>
            <div className="flex flex-wrap items-end justify-center xl:flex-nowrap md:flex-nowrap lg:flex-wrap md:justify-start">
              <div className="relative w-40 mr-2 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4">
                <label
                  htmlFor="footer-field"
                  className="text-sm leading-7 text-gray-600"
                >
                  Placeholder
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className={`w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-${props.theme}-200 focus:border-${props.theme}-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                />
              </div>
              <button
                className={`lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-${props.theme}-500 border-0 py-2 px-6 focus:outline-none hover:bg-${props.theme}-600 rounded`}
              >
                Button
              </button>
            </div>
            <p className="mt-2 text-sm text-center text-gray-500 md:text-left">
              Bitters chicharrones fanny pack
              <br className="hidden lg:block"></br>waistcoat green juice
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container flex flex-col items-center px-5 py-6 mx-auto sm:flex-row">
          <a
            href
            className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`w-10 h-10 text-white p-2 bg-${props.theme}-500 rounded-full`}
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <p className="mt-4 text-sm text-gray-500 sm:ml-6 sm:mt-0">
            © 2020 Tailblocks —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="ml-1 text-gray-600"
              target="_blank"
            >
              @knyttneve
            </a>
          </p>
          <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
            <a href className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a href className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx="4" cy="4" r="2" stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

LightFooterE.defaultProps = {
  theme: 'indigo',
};

LightFooterE.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightFooterE;
