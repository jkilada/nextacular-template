import React from 'react';
import PropTypes from 'prop-types';

function LightContentF(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col px-5 py-24 mx-auto">
        <div className="mx-auto lg:w-4/6">
          <div className="h-64 overflow-hidden rounded-lg">
            <img
              alt="content"
              className="object-cover object-center w-full h-full"
              src="https://dummyimage.com/1200x500"
            />
          </div>
          <div className="flex flex-col mt-10 sm:flex-row">
            <div className="text-center sm:w-1/3 sm:pr-8 sm:py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 text-gray-400 bg-gray-200 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="mt-4 text-lg font-medium text-gray-900 title-font">
                  Phoebe Caulfield
                </h2>
                <div
                  className={`w-12 h-1 bg-${props.theme}-500 rounded mt-2 mb-4`}
                ></div>
                <p className="text-base">
                  Raclette knausgaard hella meggs normcore williamsburg enamel
                  pin sartorial venmo tbh hot chicken gentrify portland.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 text-center border-t border-gray-200 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left">
              <p className="mb-4 text-lg leading-relaxed">
                Meggings portland fingerstache lyft, post-ironic fixie man bun
                banh mi umami everyday carry hexagon locavore direct trade art
                party. Locavore small batch listicle gastropub farm-to-table
                lumbersexual salvia messenger bag. Coloring book flannel
                truffaut craft beer drinking vinegar sartorial, disrupt fashion
                axe normcore meh butcher. Portland 90&apos;s scenester
                vexillologist forage post-ironic asymmetrical, chartreuse
                disrupt butcher paleo intelligentsia pabst before they sold out
                four loko. 3 wolf moon brooklyn.
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
        </div>
      </div>
    </section>
  );
}

LightContentF.defaultProps = {
  theme: 'indigo',
};

LightContentF.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightContentF;
