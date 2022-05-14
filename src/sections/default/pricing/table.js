import React from 'react';
import PropTypes from 'prop-types';

function LightPricingB(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="mb-2 text-3xl font-medium text-gray-900 sm:text-4xl title-font">
            Pricing
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Banh mi cornhole echo park skateboard authentic crucifix neutra
            tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
            twee
          </p>
        </div>
        <div className="w-full mx-auto overflow-auto lg:w-2/3">
          <table className="w-full text-left whitespace-no-wrap table-auto">
            <thead>
              <tr>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-gray-900 bg-gray-100 rounded-tl rounded-bl title-font">
                  Plan
                </th>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-gray-900 bg-gray-100 title-font">
                  Speed
                </th>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-gray-900 bg-gray-100 title-font">
                  Storage
                </th>
                <th className="px-4 py-3 text-sm font-medium tracking-wider text-gray-900 bg-gray-100 title-font">
                  Price
                </th>
                <th className="w-10 text-sm font-medium tracking-wider text-gray-900 bg-gray-100 rounded-tr rounded-br title-font"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3">Start</td>
                <td className="px-4 py-3">5 Mb/s</td>
                <td className="px-4 py-3">15 GB</td>
                <td className="px-4 py-3 text-lg text-gray-900">Free</td>
                <td className="w-10 text-center">
                  <input name="plan" type="radio"></input>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-t-2 border-gray-200">Pro</td>
                <td className="px-4 py-3 border-t-2 border-gray-200">
                  25 Mb/s
                </td>
                <td className="px-4 py-3 border-t-2 border-gray-200">25 GB</td>
                <td className="px-4 py-3 text-lg text-gray-900 border-t-2 border-gray-200">
                  $24
                </td>
                <td className="w-10 text-center border-t-2 border-gray-200">
                  <input name="plan" type="radio"></input>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-t-2 border-gray-200">
                  Business
                </td>
                <td className="px-4 py-3 border-t-2 border-gray-200">
                  36 Mb/s
                </td>
                <td className="px-4 py-3 border-t-2 border-gray-200">40 GB</td>
                <td className="px-4 py-3 text-lg text-gray-900 border-t-2 border-gray-200">
                  $50
                </td>
                <td className="w-10 text-center border-t-2 border-gray-200">
                  <input name="plan" type="radio"></input>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-t-2 border-b-2 border-gray-200">
                  Exclusive
                </td>
                <td className="px-4 py-3 border-t-2 border-b-2 border-gray-200">
                  48 Mb/s
                </td>
                <td className="px-4 py-3 border-t-2 border-b-2 border-gray-200">
                  120 GB
                </td>
                <td className="px-4 py-3 text-lg text-gray-900 border-t-2 border-b-2 border-gray-200">
                  $72
                </td>
                <td className="w-10 text-center border-t-2 border-b-2 border-gray-200">
                  <input name="plan" type="radio"></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex w-full pl-4 mx-auto mt-4 lg:w-2/3">
          <a
            href
            className={`text-${props.theme}-500 inline-flex items-center md:mb-2 lg:mb-0`}
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
          <button
            className={`flex ml-auto text-white bg-${props.theme}-500 border-0 py-2 px-6 focus:outline-none hover:bg-${props.theme}-600 rounded`}
          >
            Button
          </button>
        </div>
      </div>
    </section>
  );
}

LightPricingB.defaultProps = {
  theme: 'indigo',
};

LightPricingB.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightPricingB;
